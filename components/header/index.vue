<template>
  <div class="header" :style="{ height: headerHeight }">
    <div v-if="isNeedStatusBar" class="headerLine" :style="{ height: lineHeight }" />
    <div
      ref="headerRef"
      class="header-global"
      :class="{ header_bottom_shadow: isNeedShadow }"
      :style="{ paddingTop: lineHeight }"
    >
      <div class="left" :style="{ top: lineHeight }" @click="goBack">
        <span class="leftIcon" :class="arrowsType === 'black' ? 'blackArrows' : 'whiteArrows'" />
        <span v-show="arrowsType === 'black'" class="leftTitle">{{ leftTitle }}</span>
      </div>

      <div class="headTitle" :style="{ opacity: titleOpacity, borderBottom: '1px solid #ebedf0' }">
        {{ headerTitle }}
      </div>
      <span class="right" :style="{ top: lineHeight }" @click="onRight">
        <slot name="rightTitle" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    leftHandle: {
      type: [Function, Boolean],
      default: false,
    },
    // 返回箭头颜色，默认为 黑色(black/white)
    arrowsType: {
      type: String,
      default: 'black',
    },
    leftTitle: {
      type: String,
      default: '',
    },
    // 标题的透明度，默认为 1
    titleOpacity: {
      type: Number,
      default: 1,
    },
    // 自定义标题
    headerTitle: {
      type: String,
      default: '',
    },
    // 右边slot点击事件
    onRight: {
      type: [Function, Boolean],
      default: false,
    },
    // 主题内容是否全屏
    isMainFullScreen: {
      type: Boolean,
      default: false,
    },
    // 顶部状态栏是否亮色 ==》亮色状态栏使用h5 header同一颜色，暗色状态栏使用白色，true亮色；false暗色
    isHighColor: {
      type: Boolean,
      default: true,
    },
    // 是否需要顶部状态栏
    isNeedStatusBar: {
      type: Boolean,
      default: false,
    },
    isNeedShadow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      remBase: 37.5,
      statusBarHeight: 20,
    }
  },
  computed: {
    // 状态栏基础rem数值
    baseRemVal() {
      const baseVal = this.isNeedStatusBar ? this.statusBarHeight : 0
      return baseVal / this.remBase
    },
    headerHeight() {
      const hei = this.isMainFullScreen ? this.baseRemVal : this.baseRemVal + 50 / this.remBase
      return hei + 'rem'
    },
    // header状态栏高度
    lineHeight() {
      return this.baseRemVal + 'rem'
    },
  },
  mounted() {
    // console.log('height', this.$store.getters.statusBarHeight)
  },
  methods: {
    goBack() {
      if (this.arrowsType === 'white') {
        return
      }
      if (this.leftHandle) {
        this.leftHandle()
      } else {
        console.log('111')
        this.$router.go(-1)
      }
    },
  },
}
</script>

<style lang="less" scoped>
@imgUrl: '~../../assets/images/header/'; // 图片路径
/// @import url(); 引入公共css类
// header高度
@height: 50px;
// 客户端状态栏预留高度
@statusBarHeight: 20px;
// 基础设计去图375，磨刀标准设计图750 需要除以2
// @multiple: 0.5;

.header {
  width: 100%;
  height: 50px;
  border-bottom: 0.5px solid #eeeeee;
  .headerLine {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    margin: auto;
    width: 100%;
  }

  .highColor {
    background: #fff;
  }

  .header-global {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 50px;
    background-color: #fff;
    text-align: center;
    line-height: @height;
    color: #171717;
    // font-family: PingFangSC-Medium,PingFang SC;
    font-family: PingFang-SC-Bold;
    font-size: 18px;
    box-sizing: content-box;

    .left {
      position: absolute;
      left: 10px;
      top: 0;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: @height;
      font-size: 16px;

      .leftIcon {
        width: 12px;
        height: 20px;
        &.blackArrows {
          background: url('@{imgUrl}blackLeftArrow.png') no-repeat center / cover;
        }

        &.whiteArrows {
          background: url('@{imgUrl}whiteLeftArrow.png') no-repeat center / cover;
        }
      }
      .leftTitle {
        margin-left: 3px;
      }
      .headTitle {
        color: #000;
        border-bottom: 1px solid #ebedf0;
      }
    }

    .right {
      position: absolute;
      right: 10px;
      top: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      height: @height;
      font-size: 14px;
    }
  }
}

.header-global {
  &.header_bottom_shadow {
    box-shadow: 4px 4px 10px rgba(250, 248, 248, 0.5);
  }
}
</style>
