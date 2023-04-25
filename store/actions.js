/*
 * @Author: lxc
 * @LastEditors: jiajia
 * @Date: 2019-07-02 16:14:07
 * @Description: Modify here please
 * @LastEditTime: 2022-06-30 17:05:06
 */
export default {
  hideLoading({ commit }) {
    commit('SET_LOADING', false)
  },
  showLoading({ commit }) {
    commit('SET_LOADING', true)
  }
}
