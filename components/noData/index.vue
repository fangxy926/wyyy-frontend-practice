<!--
 * @Descripttion: 
 * @Author: jiajia
 * @Date: 2022-06-30 14:54:12
 * @LastEditors: jiajia
 * @LastEditTime: 2022-06-30 16:47:51
-->
<template>
  <div class="noData">
    <span />
    <!-- <p>暂无数据!</p> -->
  </div>
  <!-- <van-empty /> -->
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="less" scoped>
// @import url(); 引入公共css类
@imgUrl: '~../../assets/images/header/';
.noData {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0 100px 0;
  span {
    width: 100px;
    height: 100px;
    font-family: PingFangSC-Regular;
    background: url('@{imgUrl}noData.png') no-repeat center / cover;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }
  p {
    font-size: 18px;
    padding-top: 60px;
    color: #999;
  }
}
</style>
