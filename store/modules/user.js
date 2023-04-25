
import { setStorage, getStorage, removeStorage } from '@/utils/storage.js'
const state = {
    user: null
}

const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

const actions = {
    userLogin: ({ commit }, user) => {
        console.log(user)
        commit('setUser', user)
        setStorage({
            name: 'userinfo',
            content: user,
            type: 'session'
        })
    },
    getUser: ({ commit }) => {
        const userinfo = getStorage({ name: "userinfo" })
        console.log("userinfo in storage" + userinfo)
        if (userinfo) {
            commit('setUser', userinfo)
        }
    },
    userLogout: ({ commit }) => {
        commit('setUser', null)
        removeStorage({ name: 'userinfo' })
    }
}

const getters = {
    user: state => state.user
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
