/*
 * @Description:
 * @Author: lxc
 * @Date: 2019-07-03 09:39:44
 * @LastEditTime: 2022-06-30 17:06:23
 * @LastEditors: jiajia
 */
const baseSize = 32

// 设置 rem 函数

function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const type = !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(navigator.userAgent)
  let scale
  if (type) {
    scale = document.documentElement.clientWidth / 750
  } else {
    scale = document.documentElement.clientWidth / 1920
  }

  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

export { setRem }
