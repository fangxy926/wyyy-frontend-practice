/*
 * @Descripttion:
 * @Author: jiajia
 * @Date: 2020-04-23 15:35:31
 * @LastEditors: jiajia
 * @LastEditTime: 2022-06-30 17:05:23
 */
const state = {
  messagePageIndex: 0,
}

const mutations = {
  setMessagePageIndex(state, val) {
    state.messagePageIndex = val
  },
}

const actions = {
  setMessagePageIndex: ({ commit }, messagePageIndex) => {
    commit('setMessagePageIndex', messagePageIndex)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
