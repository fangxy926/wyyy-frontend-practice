<template>
  <div class="home">
    <Header :titleVal="'首页'" />
    <van-search class="menu-search" v-model="search" placeholder="搜索菜单" shape="round" />
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
import Header from '@/components/header/index.vue'

import BottomNavigationBar from '@/components/bottomNavigationBar/index.vue'
export default {
  components: {
    BottomNavigationBar,
    Header
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

<style>
.home {
  background-color: #fafafa;
  /** 不可滚动 */
  overflow: hidden;

}

.home .van-nav-bar__title {
  font-weight: bold;
}

.menu-search {
  margin-top: 50px;
}
</style>
