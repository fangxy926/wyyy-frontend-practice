// eslint-disable-next-line no-extend-native
String.prototype.replaceAll = function(val, val1) {
  // 吧f替换成e
  return this.replace(new RegExp(val, 'g'), val1)
}

// eslint-disable-next-line no-extend-native
String.prototype.format = function() {
  if (arguments.length === 0) {
    return this
  }
  let s = this
  for (let i = 0; i < arguments.length; i++) {
    s = s.replace(new RegExp('\\{' + i + '\\}', 'g'), arguments[i])
  }
  return s
}
