import { getStorage } from '@/utils/storage.js'
// 用户登录状态校验
export default ({ store }) => {
    const userinfo = getStorage({ name: "userinfo" })
    if (userinfo) {
        store.commit('user/setUser', userinfo)
    }
}