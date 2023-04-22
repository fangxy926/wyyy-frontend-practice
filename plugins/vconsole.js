/*
 * @Description:
 * @Author: lxc
 * @Date: 2019-08-21 08:26:32
 * @LastEditTime: 2022-06-30 16:58:34
 * @LastEditors: jiajia
 */
import Vconsole from 'vconsole'

const vConsole = process.env.NODE_ENV === 'development' ? null : new Vconsole()

export default vConsole
