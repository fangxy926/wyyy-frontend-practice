<template>
    <van-tabbar class="botton-tabbar" v-model="activeTabbarItem" @change="onChange">
        <van-tabbar-item v-for="(item, index) in items" :key="index" :icon="item.icon" :name="item.name" :to="item.path">
            {{ item.text }}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
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
    data() {
        return {
            items: [
                { name: 'news', icon: 'user-o', text: '新闻', path: '/news' },
                { name: 'home', icon: 'user-o', text: '功能', path: '/' },
                { name: 'info', icon: 'user-o', text: '个人信息', path: '/info' },
            ],
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
</style>