<!--
 * @Description: 
 * @Author: lxc
 * @Date: 2019-07-02 15:47:13
 * @LastEditTime: 2022-07-06 10:40:40
 * @LastEditors: dandan
 -->
<template>
  <div class="home">
    <van-nav-bar title="首页" :left-arrow="false" />
    <!-- <van-divider /> -->
    <van-search v-model="search" placeholder="搜索菜单" shape="round" />
    <van-divider />
    <div class="menu">
      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="(item, index) in menuListData" :key="index" :text="item.menuName" :icon="item.iconName"
          :url="item.pathUrl" center />
      </van-grid>
    </div>
    <BottomNavigationBar />
  </div>
</template>

<script>
import { menuList } from '@/api/menuApi.js'
import BottomNavigationBar from '@/components/bottomNavigationBar/index.vue'
export default {
  components: {
    BottomNavigationBar
  },

  head() {
    return {
      title: '首页',
    }
  },
  layout: 'base',
  data() {
    return {
      search: "",
      menuListData: [],
    };
  },
  mounted() {
    this.getMenuList()
  },
  methods: {
    // mock 本地接口模拟
    getMenuList() {
      menuList().then(res => {
        if (res.ok) {
          this.menuListData = res.data
        }
      })
    }

  },

}
</script>

<style scoped>
.home {
  background-color: #fafafa
}
</style>
