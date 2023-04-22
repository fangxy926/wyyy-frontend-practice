/*
 * @Description:
 * @Author: lxc
 * @Date: 2019-07-26 14:31:38
 * @LastEditTime: 2022-06-30 17:08:54
 * @LastEditors: jiajia
 */
import dateUtil from 'date-fns'
import store from '@/store'
import { isIdCardNo } from './IDCardNoVeri'

export function isEmpty(val) {
  if (val === '') return true // 检验空字符串
  if (val === 'null') return true // 检验字符串类型的null
  if (val === 'undefined') return true // 检验字符串类型的 undefined
  if (!val && val !== 0 && val !== '') return true // 检验 undefined 和 null
  if (Array.prototype.isPrototypeOf(val) && val.length === 0) return true // 检验空数组
  if (JSON.stringify(val) === '{}') return true
  return false
}

export function isNotEmpty(val) {
  return !isEmpty(val)
}

// 字符不为空处理
export function contain(val, sub) {
  if (isNotEmpty(val) && isNotEmpty(sub)) {
    if (val.indexOf(sub) !== -1) {
      return true
    }
  }
  return false
}

// 字符不为空处理
export function getStr(val) {
  if (isNotEmpty(val)) {
    return val
  }
  return ''
}

// 条件字符（第一个在的时候 才完全显示）
export function getConditionStr(str, pre, next) {
  if (isNotEmpty(str)) {
    return pre + str + next
  }
  return ''
}

// 字符不为空处理（带默认字符串）
export function getDefStr(val, def) {
  if (isNotEmpty(val)) {
    return val
  }
  return isNotEmpty(def) ? def : ''
}

// 获取当前服务器时间
export function getCurrServerTime() {
  return dateUtil.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
}

// 拨打电话
export function callPhone(context, phone) {
  if (store().getters.isApp) {
    if (!store().getters.isAndroid) {
      context.$bridge.callhandler('callPhone', phone, (data) => {})
    } else {
      jsBridge.callPhoneNumber(phone)
    }
  } else {
    window.location.href = 'tel:' + phone
  }
}

/**
 *
 * @desc  判断是否为身份证号
 * @param  {String|Number} str
 * @return {Boolean}
 */
export function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    str
  )
}
/**
 *
 * @desc  判断是否为身份证号,包括正确性
 * @param  {String|Number} str
 * @return {Boolean}
 */
export function isRightIdCard(str) {
  console.log(isIdCardNo(str))
  if (isIdCardNo(str).success !== 0) {
    return true
  } else {
    return false
  }
}

/**
 * @Description: 验证港澳回乡身份证 (来源于安卓)
 * @param {*}
 * @return {*}
 * @author: Fran
 */
export function isHKOrMOIdCard(str) {
  return /(^[HM]\\d{10}$)|(^[HM]\\d{8}$)/.test(str)
}

/**
 * @Description:  验证香港身份证 (来源于安卓)
 * @param {*}
 * @return {*}
 * @author: Fran
 */
export function isHKIdCard(str) {
  return /(^((\\s?[A-Za-z])|([A-Za-z]{2}))\\d{6}(([0−9aA])|([0-9aA]))$)/.test(str)
}

/**
 * @Description: 验证台湾身份证 (来源于安卓)
 * @param {*}
 * @return {*}
 * @author: Fran
 */
export function isTWIdCard(str) {
  return /(^[a-zA-Z][0-9]{9}$)/.test(str)
}

/**
 * @Description: 验证澳门身份证 (来源于安卓)
 * @param {*}
 * @return {*}
 * @author: Fran
 */
export function isMOIdCard(str) {
  return /(^[1|5|7][0-9]{6}\\([0-9Aa]\\)$)/.test(str)
}

/**
 * @Description: 最多10个汉字
 * @param {*} str
 * @return {*}
 * @author: Fran
 */
export function isChineseName(str) {
  return /^[\u4e00-\u9fa5]{0,10}$/.test(str)
}

/**
 *
 * @desc   判断是否为手机号
 * @param  {String|Number} str
 * @return {Boolean}
 */
export function isPhoneNum(str) {
  return /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
}

// 字符不为空处理（带默认字符串）
export function getContentStr(content, leftStr, rightStr) {
  let str = ''
  let start = content.indexOf(leftStr)
  if (start > -1) {
    start += leftStr.length()
    const end = content.indexOf(rightStr)
    if (end >= start) {
      str = content.substring(start, end)
      return str
    } else {
      return ''
    }
  } else {
    return ''
  }
}

/**
 * 函数节流
 * @param {function} fn 函数
 * @param {number} t 间隔时间（毫秒）
 * @return {function}
 */
export function throttle(fn, t) {
  let flag = true
  const interval = t || 500
  return function() {
    const args = arguments
    if (flag) {
      fn.apply(this, args)
      flag = false
      setTimeout(() => {
        flag = true
      }, interval)
    }
  }
}
