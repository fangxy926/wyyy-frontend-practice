<template>
  <div class="back-naviation-bar">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
  </div>
</template>
  
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.back-naviation-bar .van-nav-bar__content {
  height: 30px;
  background-color: #4991f2;
}

/* 将 left-text 和 left-arrow 的颜色设置为白色 */
.back-naviation-bar .van-nav-bar__left .van-nav-bar__text,
.back-naviation-bar .van-nav-bar__left .van-nav-bar__arrow {
  color: #fff;
  font-size: 18px;
}

.back-naviation-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    z-index: 1;
    /* 设置z-index属性，使navbar在最上层 */
}
</style>