<template>
    <van-tabbar v-model="active">
        <van-tabbar-item v-for="(item, index) in items" :key="index" :icon="item.icon" :name="index" :to="item.path"
            @click="active = index">
            {{ item.text }}
        </van-tabbar-item>
    </van-tabbar>
</template>
  
<script>
export default {
    data() {
        return {
            active: 0,
            items: [
                { icon: 'user-o', text: '新闻', path: '/news' },
                { icon: 'user-o', text: '功能', path: '/' },
                { icon: 'user-o', text: '个人信息', path: '/info' },
            ]
        }
    }
}
</script>