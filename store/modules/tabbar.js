const state = {
  activeTabbarItem: 'home',
}

const mutations = {
  setActiveTabbarItem(state, activeTabbarItem) {
    state.activeTabbarItem = activeTabbarItem
  },
}

const actions = {
  setActiveTabbarItem: ({ commit }, activeTabbarItem) => {
    commit('setActiveTabbarItem', activeTabbarItem)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
