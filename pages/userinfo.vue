<template>
  <div class="personal-info">
    <Header :title-val="'个人信息'" />
    <van-form ref="form" :model="formData" label-width="80px">
      <van-field class="avatar-field" label="头像" right-icon="" readonly>
        <template #right-icon>
          <van-image class="avatar" width="50" height="50" fit="cover" :src="formData.avatarUrl" />
        </template>
      </van-field>
      <van-field
        v-model="formData.name"
        label="姓名"
        placeholder="请输入姓名"
        :rules="[
          { required: true, message: '姓名不能为空' },
          { validator: validateChineseName, message: '姓名格式不正确' }
        ]"
      />
      <van-field
        v-model="formData.idcard"
        label="身份证"
        placeholder="请输入身份证号码"
        :rules="[
          { required: true, message: '身份证号码不能为空' },
          { validator: validateIdCard, message: '身份证号码格式不正确' }
        ]"
      />
      <van-field
        v-model="formData.phone"
        label="手机号"
        placeholder="请输入手机号码"
        :rules="[
          { required: true, message: '手机号码不能为空' },
          { validator: validatePhone, message: '手机号码格式不正确' }
        ]"
      />
    </van-form>
    <div style="margin: 16px;">
      <van-button square block type="info" native-type="submit" @click="onSave">
        保存
      </van-button>
      <van-button square block type="default" native-type="submit" @click="onExist">
        退出
      </van-button>
    </div>
    <BottomNavigationBar />
  </div>
</template>
  
<script>
import Header from '@/components/header/index.vue'
import { userInfo } from '@/api/userApi.js'
import { isChineseName, isRightIdCard, isPhoneNum } from '@/utils/ToolUtil'
import { Dialog } from 'vant';
import BottomNavigationBar from '@/components/bottomNavigationBar/index.vue'

export default {
  // middleware: 'auth',
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
      userData: {}
    };
  },
  mounted() {
    this.getUserInfo()
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
      userInfo().then(res => {
        if (res.ok) {
          this.userData = res.data
          this.formData.userid = this.userData.userid
          this.formData.name = this.userData.name
          this.formData.idcard = this.userData.idcard
          this.formData.phone = this.userData.phone
          this.formData.avatarUrl = this.userData.avatarUrl || 'https://img01.yzcdn.cn/vant/cat.jpeg'
        }
      })
    },
    onSave() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 表单验证通过，执行保存逻辑
        } 
      });
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

.avatar {
  margin-right: 10px;
  border-radius: 50%;
}

.avatar-field {
  height: 60px;
}

.avatar-field .van-field__label {
  line-height: 50px;
  /* 与 van-image 的高度一致 */
}

.avatar-field .van-field__control {
  display: flex;
  align-items: flex-end;
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