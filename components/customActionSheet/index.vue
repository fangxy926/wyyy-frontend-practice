<!--
 * @Descripttion: 
 * @Author: jiajia
 * @Date: 2021-10-13 15:30:45
 * @LastEditors: jiajia
 * @LastEditTime: 2022-06-30 16:47:33
-->
<template>
  <div class="actionSheet">
    <van-action-sheet v-model="isShowActionSheet" cancel-text="取消" @select="onSelectOperation">
      <template #default>
        <div class="van-action-sheet__content">
          <button
            v-for="(item, index) in options"
            :key="index"
            type="button"
            class="van-action-sheet__item"
          >
            <span class="iconItem iconfont" :class="item.iconfont" />
            <span class="van-action-sheet__name">{{ item.title }}</span>
          </button>
        </div>
      </template>
    </van-action-sheet>
  </div>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      defaule: false,
    },
    options: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    isShowActionSheet: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      },
    },
  },
  mounted() {},
  methods: {
    onSelectOperation(action, index) {
      this.$emit('operation', [action, index])
    },
  },
}
</script>

<style lang="stylus" scoped>
.actionSheet{
  .iconItem{
    display inline-block
    font-size 24px
    margin-right 26px
  }
  /deep/ .van-overlay {
    background-color rgba(0, 0, 0, 0.2);
  }
  /deep/ .van-action-sheet__cancel{
    font-family PingFangSC-Medium;
  }
  .van-action-sheet__item{
    text-align left
    font-family PingFangSC-Medium;
  }
}
</style>
