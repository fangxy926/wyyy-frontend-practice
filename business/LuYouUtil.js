/*
 * @Description:
 * @Author: lxc
 * @Date: 2020-07-06 13:52:02
 * @LastEditTime: 2020-07-06 13:55:39
 * @LastEditors: lxc
 */

export function handleJump(context) {
  const jumpType = context.$route.query.jumpType
  if (jumpType === '1') {
    context.$store.commit('clearRouter')
  } else {
    console.log('handleJump jumpType-> 暂无处理')
  }
}
