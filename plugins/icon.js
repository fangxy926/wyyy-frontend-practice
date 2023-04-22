/*
 * @Descripttion:
 * @Author: jiajia
 * @Date: 2022-06-30 14:54:12
 * @LastEditors: jiajia
 * @LastEditTime: 2022-06-30 16:56:50
 */
import Vue from 'vue'
import SvgIcon from '@/components/base/SvgIcon.vue' // svg component

Vue.component('svg-icon', SvgIcon)
const req = require.context('@/assets/icons/svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
