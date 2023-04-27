import { getStorage } from '@/utils/storage.js'
// 获取本地用户信息
export default ({ store }) => {
    const userinfo = getStorage({ name: "userinfo" })
    store.commit('user/setUser', userinfo)
}