/*
 * @Description: 封装loading
 * @Author: lxc
 * @Date: 2019-08-09 08:29:15
 * @LastEditTime: 2022-01-18 15:02:47
 * @LastEditors: jiajia
 */

import store from '@/store/index.js'
let loadingCount = 0

export const showLoading = () => {
  if (loadingCount === 0) {
    store().dispatch('showLoading')
  }
  loadingCount += 1
}

export const hideLoading = () => {
  if (loadingCount <= 0) {
    return
  }
  
  loadingCount -= 1
  if (loadingCount === 0) {
    store().dispatch('hideLoading')
  }
  
}
