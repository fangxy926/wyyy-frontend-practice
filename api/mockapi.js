import axios from 'axios'
const ERR_OK = 0
export function gMock(url) {
    return function(params) {
      console.log(params)
      return axios
        .get(getMockSpliceAddress() + url, params)
        .then(res => {
          const { hasError, errorMessage, data } = res.data
          if (hasError === ERR_OK) {
            return { ok: true, data }
          } else {
            return { ok: false, msg: errorMessage }
          }
        })
        .catch(e => {
          console.log('出错了' + e)
        })
    }
  }
  export function pMock(url) {
    return function(params) {
      return axios
        .post(getMockSpliceAddress() + url, params)
        .then(res => {
          const { hasError, errorMessage, data } = res.data
          if (hasError === ERR_OK) {
            return { ok: true, data }
          } else {
            return { ok: false, msg: errorMessage }
          }
        })
        .catch(e => {
          console.log('出错了' + e)
        })
    }
  }
  function getMockSpliceAddress() {
    return process.env.LU_YOU
  }