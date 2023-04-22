/*
 * @Author: dagaozi
 * @Date: 2019-07-08 20:47:44
 * @Last Modified by: dagaozi
 * @Last Modified time: 2019-08-06 15:26:40
 * 全局第三方帮助类
 */

import lodash from 'lodash'
import dateUtil from 'date-fns'

export default ({ app }, inject) => {
  inject('_', lodash)
  inject('dateUtil', dateUtil)
}
