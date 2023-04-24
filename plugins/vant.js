/*
 * @Descripttion:
 * @Author: jiajia
 * @Date: 2022-06-30 14:54:12
 * @LastEditors: jiajia
 * @LastEditTime: 2022-06-30 17:18:39
 */
import Vue from 'vue'
import {
  Dialog,
  Notify,
  Toast,
  Loading,
  Button,
  Field,
  Icon,
  Tabbar, TabbarItem,
  NavBar,
  Divider,
  Search,
  Grid, GridItem,
  List,
  Cell, CellGroup,
  Card 
} from 'vant'

const components = {
  Dialog,
  Notify,
  Toast,
  Loading,
  Button,
  Field,
  Icon,
  Tabbar,TabbarItem,
  NavBar,
  Divider,
  Search,
  Grid, GridItem,
  List,
  Cell, CellGroup,
  Card 
}

Object.keys(components).forEach((key) => {
  Vue.use(components[key])
})

Vue.prototype.$Dialog = Dialog
Vue.prototype.$Notify = Notify

Toast.setDefaultOptions({ duration: 3000 })
Vue.prototype.$Toast = Toast
