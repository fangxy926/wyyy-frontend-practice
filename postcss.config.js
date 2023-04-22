module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 18.75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
      // remUnit: 37.5,
      // exclude: /(node_modules)/
    }
  }
}
