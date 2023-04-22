/*
 * @Description:
 * @Author: lxc
 * @Date: 2020-03-27 10:48:06
 * @LastEditTime: 2022-06-30 16:57:46
 * @LastEditors: jiajia
 */
export default ({ app }) => {
  app.router.afterEach((to, from) => {
    console.log('route afterEach', to.path)
  })
  app.router.onError((error) => {
    console.error('route onError', error)
    const pattern = /Loading chunk (\d)+ failed/g
    const isChunkLoadFailed = error.message.match(pattern)
    const targetPath = app.router.history.pending.fullPath
    if (isChunkLoadFailed) {
      console.error('route onError app.router.replace targetPath->', targetPath)
      app.router.replace(targetPath)
    }
  })
  window.addEventListener('offline', () => {
    console.log('addEventListener offline', !navigator.onLine)
    if (!navigator.onLine) {
      //  app.router.push('/networkError')
    }
  })
}
