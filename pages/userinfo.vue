<template>
  <div class="personal-info">
    <Header :title-val="'个人信息'" />
    <van-form ref="userForm" :model="formData" label-width="80px" :rules="rules" @submit="onSubmit">
      <!-- <van-field class="avatar-field" label="头像" right-icon="" readonly>
        <template #right-icon>
          <van-image class="avatar" width="50" height="50" fit="cover" :src="formData.avatarUrl" />
        </template>
      </van-field> -->
      <van-field class="avatar-field" label="头像" right-icon="" readonly>
        <template #right-icon>
          <van-uploader v-model="avatarList" class="avatar-uploader" :after-read="afterRead" :before-read="beforeRead"
            :max-count="1" preview-size="60px" :preview-full-image="false" accept="image/*" />
        </template>
      </van-field>
      <van-field v-model="formData.name" name="name" label="姓名" placeholder="请输入姓名" :rules="rules.name" />
      <van-field v-model="formData.idcard" label="身份证" name="idcard" placeholder="请输入身份证号码" :rules="rules.idcard" />
      <van-field v-model="formData.phone" name="phone" label="手机号" placeholder="请输入手机号码" :rules="rules.phone" />
      <div style="margin: 16px;">
        <van-button square block type="info" native-type="submit">
          保存
        </van-button>
        <van-button square block type="default" native-type="button" @click="onExist">
          退出
        </van-button>
      </div>
    </van-form>
    <BottomNavigationBar />
  </div>
</template>
  
<script>
import Header from '@/components/header/index.vue'
import { userInfo } from '@/api/userApi.js'
import { isChineseName, isRightIdCard, isPhoneNum, isSameObj } from '@/utils/ToolUtil'
import { Dialog, Notify } from 'vant';
import BottomNavigationBar from '@/components/bottomNavigationBar/index.vue'

export default {
  components: {
    BottomNavigationBar,
    Header
  },
  data() {
    return {
      formData: {
        userid: null,
        name: '',
        idcard: '',
        phone: '',
        mail: '',
        avatarUrl: ''
      },
      avatarList: [],
      formDataCopy: {},
      activeTabbarItem: 'userinfo',
      userData: {},
      rules: {
        name: [
          { required: true, message: '姓名不能为空', trigger: 'onBlur' },
          { validator: this.validateChineseName, message: '姓名格式不正确', trigger: 'onBlur' }
        ],
        idcard: [
          { required: true, message: '身份证号码不能为空', trigger: 'onBlur' },
          { validator: this.validateIdCard, message: '身份证号码格式不正确', trigger: 'onBlur' }
        ],
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'onBlur' },
          { validator: this.validatePhone, message: '手机号码格式不正确', trigger: 'onBlur' }
        ]
      },
      modified: false
    };
  },
  watch: {
    // 监听userData的变化，一旦userData中的数据发生变化就更新formData中的数据
    userData: {
      handler(val) {
        this.formData.userid = val.userid
        this.formData.name = val.name
        this.formData.idcard = val.idcard
        this.formData.phone = val.phone
        this.formData.avatarUrl = val.avatarUrl || require('../assets/images/avatar/cat.jpg') // 'https://img01.yzcdn.cn/vant/cat.jpeg'
        this.formDataCopy = JSON.parse(JSON.stringify(this.formData))
        this.avatarList = [{ url: this.formData.avatarUrl }]
      },
      deep: true
    },
  },
  mounted() {
    this.getUserInfo()
  },
  beforeRouteLeave(to, from, next) {
    if (!isSameObj(this.formDataCopy, this.formData)) {
      Dialog.confirm({
        className: 'exist-confirm-dialog',
        title: '信息已修改，确认离开？',
      }).then(() => {
        // on confirm
        next()
      }).catch(() => {
        // on cancel
        next(false)
      })
    } else {
      next()
    }
  },
  methods: {
    validateIdCard(value) {
      return isRightIdCard(value)
    },
    validatePhone(value) {
      return isPhoneNum(value)
    },
    validateChineseName(value) {
      return isChineseName(value)
    },
    getUserInfo() {
      const userinfo = this.$store.state.user.user
      if (!userinfo) {
        console.log('调用后端获取用户信息')
        userInfo().then(res => {
          if (res.ok) {
            this.userData = res.data
            this.$store.dispatch('user/setUser', this.userData)
          }
        })
      } else {
        console.log('从本地store获取用户信息')
        this.userData = userinfo
      }
    },
    beforeRead(file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        this.$toast('只能上传jpg或png格式的图片');
        return false;
      }
      if (file.size > 2 * 1024 * 1024) {
        this.$toast('图片大小不能超过2MB');
        return false;
      }
      return true;
    },
    afterRead(file) {
      this.avatarList = [file]
      // 文件上传逻辑，返回新的文件url
      const newUrl = require('../assets/images/avatar/leaf.jpg')
      this.formData.avatarUrl = newUrl
    },
    checkModifiy() {
      this.modified = true
    },
    onSubmit() {
      this.$refs.userForm.validate()
        .then(() => {
          // 表单验证通过，执行保存逻辑
          Dialog.confirm({
            className: 'exist-confirm-dialog',
            title: '确定修改吗？',
          }).then(() => {
            // on confirm
            this.userData.name = this.formData.name
            this.userData.idcard = this.formData.idcard
            this.userData.phone = this.formData.phone
            this.userData.avatarUrl = this.formData.avatarUrl
            this.$store.dispatch('user/setUser', this.userData)
            Notify({ type: 'success', message: '保存成功' });
          }).catch(() => {
            // on cancel
          })
        }).catch(() => {

        })
    },
    onExist() {
      // 取消编辑，返回上一页或关闭弹窗等操作
      Dialog.confirm({
        className: 'exist-confirm-dialog',
        title: '确定退出吗？',
      }).then(() => {
        // on confirm
        this.$store.dispatch('user/userLogout')
        this.$router.push('/login')
      }).catch(() => {
        // on cancel
      })
    },
  },
};
</script>
  
<style>
.personal-info {
  padding: 5px;
  background-color: #fff;
  height: 100%;
  width: 100%;
}

.van-form .van-cell {
  font-size: 16px;
}

.avatar-field .van-field__label,
.avatar-field .van-field__right-icon {
  display: flex;
  align-items: flex-end;
}

.avatar-uploader {
  margin-left: 10px;
}

.personal-info .van-form {
  margin-top: 100px;
}

.personal-info .van-button {
  width: 100%;
  margin-top: 10px;
}

.exist-confirm-dialog .van-dialog__cancel {
  font-weight: bold;
  color: #1677ff;
}

.exist-confirm-dialog .van-dialog__confirm {
  font-weight: bold;
  color: red;
}
</style>