import { getStorage } from '@/utils/storage.js'
// 用户登录状态校验
export default ({ store }) => {
    const isLogin = getStorage({ name: "islogin" })
    store.commit('user/setIsLogin', isLogin)
}