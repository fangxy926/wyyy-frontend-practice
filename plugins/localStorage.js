/*
 * @Author: dagaozi
 * @Date: 2019-07-08 08:05:11
 * @Last Modified by: chendandan
 * @Last Modified time: 2021-06-15 14:29:56
 * 保存本地数据
 */
import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'wyyy-fkyj',
    paths: [
      'token',
      'myRouters',
      'myRouters2',
    ]
  })(store)
}
