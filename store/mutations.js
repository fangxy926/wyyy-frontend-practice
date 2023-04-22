/*
 * @Description:根级别的 action,同步vuex
 * @Author: lxc
 * @Date: 2019-07-02 16:14:07
 * @LastEditTime: 2022-06-30 17:04:07
 * @LastEditors: jiajia
 */
export default {
  // 保存
  addRouter(state, myRouter) {
    console.log('---- addRouter ----')
    if (state.myRouters.length > 0) {
      const index = this.$_.findIndex(state.myRouters, ['name', myRouter.name])
      if (index !== -1)
        state.myRouters = this.$_.dropRight(state.myRouters, state.myRouters.length - index)
      state.myRouters.push(myRouter)
    } else {
      state.myRouters.push(myRouter)
    }
  },
  // 保存
  addRouter2(state, info) {
    console.log('---- addRouter2 ----', info)
    const temp = {}
    const route = info.ctx.$route
    temp.name = info.name
    temp.path = route.path
    temp.query = route.query
    temp.params = route.params
    if (state.myRouters2.length > 0) {
      const index = this.$_.findIndex(state.myRouters2, ['name', temp.name])
      if (index !== -1)
        state.myRouters2 = this.$_.dropRight(state.myRouters2, state.myRouters2.length - index)
      state.myRouters2.push(temp)
    } else {
      state.myRouters2.push(temp)
    }
  },
  clearRouter(state) {
    console.log('----clearRouter----')
    state.myRouters.length = 0
    state.myRouters2.length = 0
  },
  SET_LOADING(state, status) {
    state.isLoading = status
  }
}
