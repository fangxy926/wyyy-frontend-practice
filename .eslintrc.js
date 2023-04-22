/*
 * @Description: 
 * @Author: lxc
 * @Date: 2019-07-02 15:47:13
 * @LastEditTime: 2022-01-18 10:37:51
 * @LastEditors: jiajia
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/strongly-recommended',
    'prettier',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'prettier/prettier': 'off',
    'no-console': 'off',
    'vue/require-component-is': 'off',
    'import/order': 'off',
  },
  globals: {
    'AlipayJSBridge': false,
    'WeixinJSBridge': false,
    'onBridgeReady': false,
    'jsBridge': false,
    "BMap":false,
  }
}
