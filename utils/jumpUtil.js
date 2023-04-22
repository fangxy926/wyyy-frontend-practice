/*
 * @Description: 处理跳转工具
 * @Author: lxc
 * @Date: 2019-08-06 10:18:00
 * @LastEditTime: 2022-01-18 10:53:11
 * @LastEditors: jiajia
 */

import { isEmpty, isNotEmpty } from '@/utils/ToolUtil.js'
const TAG = 'jumpUtil'

/**
 * 跳转其它网站
 * @param {*} url 网站链接
 */
export function jumpOtherLink(url) {
  console.log(TAG, 'jumpOtherLink')
  if (isEmpty(url)) {
    console.error(TAG, 'jumpOtherLink url->error')
    return
  }
  console.log(TAG, 'jumpOtherLink url = ' + url)
  window.location.href = url
}

// 通过 href 进行调整（主要解决 ios 微信接口调用问题）
export function jumpByHref(path, param) {
  window.location.href =
    (process.env.NODE_ENV === 'development'
      ? 'http://localhost:8002'
      : process.env.WEB_BASE_URL) +
    process.env.LU_YOU +
    path
  if (isNotEmpty(param)) {
    window.location.href += '?' + param
  }
}