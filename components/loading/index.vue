<!--
 界面加载loading
-->
<template>
  <div v-show="value" class="loading-global">
    <div class="loading-content">
      <van-loading size="24px" text-size="14px" type="spinner" color="white" vertical>
        加载中...
      </van-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="stylus" scoped>
.loading-global {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
   background rgba(0,0,0,0)


  .loading-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    z-index: 999;

    /deep/ .van-loading__text {
      color: rgb(224, 222, 222);
    }
  }
}
</style>
