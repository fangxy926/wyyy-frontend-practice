/*
 * @Description:
 * @Author: lxc
 * @Date: 2019-04-28 15:58:59
 * @LastEditTime: 2021-04-10 11:43:51
 * @LastEditors: jiajia
 */

let timer = null
const timerKey = 'timerKey'
window[timerKey] = 0
window.response = false
;(function() {
  // 代码
  if (typeof WeixinJSBridge === 'undefined') {
    console.log('wxhide WeixinJSBridge undefined')
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  } else {
    onBridgeReady()
  }
  errorListener()
  startTimer()
})()

function onBridgeReady() {
  handleFontSize()
  WeixinJSBridge.call('hideToolbar')
  WeixinJSBridge.call('hideOptionMenu')
  console.log('wxhide function onBridgeReady')
}

function handleFontSize() {
  // 设置网页字体为默认大小
  WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
  // 重写设置网页字体大小的事件
  WeixinJSBridge.on('menu:setfont', function() {
    WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
  })
}

function errorListener() {
  console.log('errorListener')
  window.onerror = function(message, source, lineno, colno, error) {
    console.log('message', message)
    console.log('source', source)
    console.log('lineno', lineno)
    console.log('colno', colno)
    console.log('error', error)
  }

  window.addEventListener('error', function(event) {
    console.error('addEventListener error', event)
  })

  window.serverRebuildHook = function() {
    alert('服务器版本已更新，正在刷新本地缓存，稍候...', {
      duration: 1000 * 5,
      callback: () => {
        location.replace(location.href)
      }
    })
  }
}

function startTimer() {
  console.log('startTimer')
  timer = setInterval(() => {
    window[timerKey] = window[timerKey] + 1
    // console.log('window times = ', window[timerKey])

    if (window[timerKey] < 60) {
      if (window.response) {
        stopTimer()
      }
    } else {
      // 处理超时
      stopTimer()
      alert('检测到无法正常打开页面,请尝试手动刷新页面')
    }
  }, 1000)
}

function stopTimer() {
  if (timer !== null) {
    console.log('stopTimer')
    clearInterval(timer)
    timer = null
  } else {
    console.error('stopTimer timer->error')
  }
}
