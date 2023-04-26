<template>
  <div class="header-class">
    <van-nav-bar class="header-nav-bar" :title="titleVal" :left-arrow="false" />
  </div>
</template>

<script>
export default {
    props: {
        titleVal: {
            type: String,
            default: function () {
                return ""
            }
        }
    }
}
</script>

<style>
.header-class .van-nav-bar__title {
    font-weight: bold;
    font-size: 20px;
}

.header-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    z-index: 1;
    margin-bottom: 50px;
    /* 设置z-index属性，使navbar在最上层 */
}
</style>