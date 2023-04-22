/*
 * @Description:导出 store 的地方
 * @Author: lxc
 * @Date: 2019-07-02 16:14:07
 * @LastEditTime: 2022-06-30 17:05:12
 * @LastEditors: jiajia
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import home from './modules/home'
Vue.use(Vuex)

let store

const initStore = () => {
  return (
    store ||
    // eslint-disable-next-line import/no-named-as-default-member
    (store = new Vuex.Store({
      // 存放公用数据
      state,
      // 异步操作要通过actions，否则通过cimmit直接操作mutations
      actions,
      // 同步放数据
      mutations,
      getters,
      modules: {
        home,
      },
    }))
  )
}

export default initStore
