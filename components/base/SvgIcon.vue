<!--
 * @Descripttion: 
 * @Author: jiajia
 * @Date: 2020-11-11 10:14:07
 * @LastEditors: jiajia
 * @LastEditTime: 2022-06-30 16:40:39
-->
<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
.svg-icon {
  width: 4rem;
  height: 5.5rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
