export function isIdCardNo(num) {
  // 校验身份证是否合法
  const jR = { success: 0, msg: '', new18Str: '' }
  // new18Str:将15位的自动转为18位的
  num = num.toUpperCase()
  if (
    /(^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}(([0−9aA][0−9aA])|([0-9aA]))$)/.test(
      num
    )
  ) {
    // 香港身份证
    jR.success = 1
    return jR
  }
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)) {
    jR.msg = '身份证号码位数不对,或者不符合规则!'
    // 15位号码应全为数字，18位号码末位可以为数字或X。
    jR.BreakErr = true
    jR.errCode = 'errLength'
    return jR
  }
  // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
  // 下面分别分析出生日期和校验位
  let len, re
  // eslint-disable-next-line prefer-const
  len = num.length
  if (len === 15) {
    re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/)
    // eslint-disable-next-line no-var
    var arrSplit = num.match(re)

    // 检查生日日期是否正确
    // eslint-disable-next-line no-var
    var dtmBirth = new Date(
      '19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]
    )
    // eslint-disable-next-line no-var
    var bGoodDay
    bGoodDay =
      dtmBirth.getYear() === Number(arrSplit[2]) &&
      dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
      dtmBirth.getDate() === Number(arrSplit[4])
    if (!bGoodDay) {
      jR.msg = '输入的身份证号中出生日期不对!'
      jR.errCode = 'errBirthDay'
      return jR
    } else {
      jR.birthDay = [
        dtmBirth.getFullYear(),
        '-',
        (dtmBirth.getMonth() < 9 ? '0' : '') + (dtmBirth.getMonth() + 1),
        '-',
        (dtmBirth.getDate() < 10 ? '0' : '') + dtmBirth.getDate()
      ].join('')
      jR.sex = num.substr(14, 1) % 2 === 1 ? 'M' : 'F'

      // 将15位身份证转成18位
      // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']

      let nTemp = 0
      let i = 0
      num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6)
      for (i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i]
      }
      num += arrCh[nTemp % 11]
      jR.success = 1
      jR.new18Str = num
      return jR
    }
  }
  if (len === 18) {
    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
    const arrSplit = num.match(re)

    // 检查生日日期是否正确
    const dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
    let bGoodDay = false
    bGoodDay =
      dtmBirth.getFullYear() === Number(arrSplit[2]) &&
      dtmBirth.getMonth() + 1 === Number(arrSplit[3]) &&
      dtmBirth.getDate() === Number(arrSplit[4])
    if (!bGoodDay) {
      jR.msg = '输入的身份证号里出生日期不对!'
      jR.errCode = 'errBirthDay'
      return jR
    } else {
      jR.birthDay = [
        dtmBirth.getFullYear(),
        '-',
        (dtmBirth.getMonth() < 9 ? '0' : '') + (dtmBirth.getMonth() + 1),
        '-',
        (dtmBirth.getDate() < 10 ? '0' : '') + dtmBirth.getDate()
      ].join('')
      jR.sex = num.substr(16, 1) % 2 === 1 ? 'M' : 'F'

      // 检验18位身份证的校验码是否正确。
      // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      let valnum = 0
      const arrInt = [7,9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      let nTemp = 0
      let i = 0
      for (i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i]
      }
      // eslint-disable-next-line no-const-assign
      valnum = arrCh[nTemp % 11]
      if (valnum !== num.substr(17, 1)) {
        jR.msg = '18位身份证填写不正确!'
         // '18位身份证的最后一位不正确！应该为：' + valnum; //校验码(
        jR.errCode = 'errValid'
        return jR
      }
    }
  }
  jR.success = 1
  console.log(jR)
  return jR
}
