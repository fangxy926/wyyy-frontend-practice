export default function ({ store, redirect }) {
    // 如果用户未登录，重定向到登录页面
    if (!store.state.user) {
      redirect('/login')
    }
  }