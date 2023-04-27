
import { setStorage, removeStorage } from '@/utils/storage.js'
const state = {
    isLogin: false,
    user: null
}

const mutations = {
    setIsLogin(state, isLogin) {
        state.isLogin = isLogin
    },
    setUser(state, user) {
        state.user = user
    }
}

const actions = {
    userLogin: ({ commit }, user) => {
        commit('setIsLogin', true)
        setStorage({
            name: 'islogin',
            content: true,
            type: 'session'
        })
    },
    userLogout: ({ commit }) => {
        commit('setIsLogin', false)
        removeStorage({ name: 'islogin' })
        commit('setUser', null)
        removeStorage({ name: 'userinfo' })
    },
    setUser: ({ commit }, user) => {
        commit('setUser', user)
        setStorage({
            name: 'userinfo',
            content: user,
            type: 'session'
        })
    }
}

const getters = {
    isLogin: state => state.isLogin,
    user: state => state.user
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
