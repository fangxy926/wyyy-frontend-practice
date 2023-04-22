/*
 * @Author: dagaozi
 * @Date: 2019-07-10 11:22:45
 * @Last Modified by: chendandan
 * @Last Modified time: 2021-03-24 10:43:40
 * 判断设信息和浏览器信息
 */
function isWechat(UA) {
  return !!/MicroMessenger/i.test(UA)
}
function isWXXCX(UA) {
  return !!/miniProgram/i.test(UA)
}
function isAliPay(UA) {
  return !!/Alipay/i.test(UA)
}
function isDingDing(UA) {
  return !!/DingTalk/i.test(UA)
}
function isMoible(UA) {
  return !!/(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA)
}
function isApp(UA) {
  return !!/(androidWyyy|iosWyyy)/i.test(UA)
}

function isIOS(UA) {
  return !!/iPhone|iPad|iPod/i.test(UA)
}

function isAndroid(UA) {
  return !!/Android/i.test(UA)
}
export function deviceType(UA) {
  if (isMoible(UA)) {
    if (isIOS(UA)) {
      if (isWXXCX(UA)) {
        return {
          OS: 'ios',
          env: 'wxxcx'
        }
      }
      if (isWechat(UA)) {
        return {
          os: 'ios',
          env: 'wx'
        }
      }
      if (isAliPay(UA)) {
        return {
          os: 'ios',
          env: 'zfb'
        }
      }
      if (isDingDing(UA)) {
        return {
          os: 'ios',
          env: 'dd'
        }
      }
      if (isApp(UA)) {
        return {
          os: 'ios',
          env: 'app'
        }
      }

      return {
        os: 'ios',
        env: 'qt'
      }
    }
    if (isAndroid(UA)) {
      if (isWXXCX(UA)) {
        return {
          os: 'android',
          env: 'wxxcx'
        }
      }
      if (isWechat(UA)) {
        return {
          os: 'android',
          env: 'wx'
        }
      }
      if (isAliPay(UA)) {
        return {
          os: 'android',
          env: 'zfb'
        }
      }
      if (isDingDing(UA)) {
        return {
          os: 'android',
          env: 'dd'
        }
      }
      if (isApp(UA)) {
        return {
          os: 'android',
          env: 'app'
        }
      }

      return {
        os: 'android',
        env: 'qt'
      }
    }
    return {
      os: 'mobile',
      env: 'qt'
    }
  } else {
    return {
      os: 'pc',
      env: 'qt'
    }
  }
}
