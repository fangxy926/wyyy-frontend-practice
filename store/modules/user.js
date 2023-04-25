
import { setStorage, removeStorage } from '@/utils/storage.js'
const state = {
    user: {}
}

const mutations = {
    setUser: (state, user) => {
        state.user = user
    }
}

const actions = {
    userLogin: ({ commit }, user) => {
        commit('setUser', user)
        setStorage({
            name: 'userinfo',
            content: user,
            type: 'session'
        })
    },
    userLogout: ({ commit, state, dispatch }) => {
        commit('setUser', {})
        removeStorage({ name: 'userinfo' })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
