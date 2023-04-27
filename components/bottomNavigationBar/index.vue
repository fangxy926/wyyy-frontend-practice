<template>
  <van-tabbar v-model="activeTabbarItem" class="botton-tabbar">
    <van-tabbar-item v-for="(item, index) in items" :key="index" :name="item.name" :icon="item.icon" :to="item.path">
      {{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      activeTabbarItem: '',
      items: [
        { name: 'news', icon: 'newspaper-o', text: '新闻', path: '/news' },
        { name: 'index', icon: 'home-o', text: '功能', path: '/' },
        { name: 'userinfo', icon: 'user-o', text: '个人信息', path: '/userinfo' },
      ],
    }
  },
  watch: {
    '$route.name'(val) {
      this.activeTabbarItem = val;
    },
  },
  mounted() {
    this.activeTabbarItem = this.$route.name
  }
}
</script>

<style>
.botton-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.botton-tabbar .van-tabbar-item {
  font-size: 16px;
}

.botton-tabbar .svg-icon-class {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>