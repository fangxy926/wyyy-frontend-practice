export default function ({ route, store, redirect }) {
    // 如果用户未登录，重定向到登录页面
    // 路由'/login'不拦截，避免出现拦截死循环
    console.log("isLogin?" + store.state.user.isLogin)
    if (route.path !== '/login' && !store.state.user.isLogin) {
        redirect('/login')
    }
}