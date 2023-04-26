<template>
  <van-tabbar v-model="activeTabbarItem" class="botton-tabbar" @change="onChange">
    <van-tabbar-item v-for="(item, index) in items" :key="index" :name="item.name" :icon="item.icon" :to="item.path">
      {{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      items: [
        { name: 'news', icon: 'newspaper-o', text: '新闻', path: '/news' },
        { name: 'home', icon: 'home-o', text: '功能', path: '/' },
        { name: 'user', icon: 'user-o', text: '个人信息', path: '/userinfo' },
      ],
    }
  },
  computed: {
    // ...mapState('tabbar', ['activeTabbarItem'])
    activeTabbarItem: {
      get() {
        return this.$store.state.tabbar.activeTabbarItem;
      },
      set(val) {
        this.setActiveTabbarItem(val);
      }
    }
  },
  methods: {
    ...mapMutations('tabbar', ['setActiveTabbarItem']),
    onChange(tab) {
      console.log("active:" + tab)
      this.setActiveTabbarItem(tab)
    }
  }
}
</script>

<style>
.botton-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.botton-tabbar .svg-icon-class {
  width: 1rem;
  height: 1rem;
  /* vertical-align: -0.15em; */
  /* fill: currentColor; */
  /* overflow: hidden; */
}
</style>