<!--
 * @Description: 
 * @Author: lxc
 * @Date: 2020-03-26 18:40:56
 * @LastEditTime: 2022-06-30 16:54:58
 * @LastEditors: jiajia
 -->
<template>
  <section v-show="showError" class="container container-pd text-center">
    <h1 class="title" :class="{ 'chunkfailed-title': isChunkLoadingFailed }">
      {{ isChunkLoadingFailed ? '页面加载失败' : error.statusCode }}
    </h1>
    <h2 class="info" :class="{ 'chunkfailed-info': isChunkLoadingFailed }">
      {{
        isChunkLoadingFailed
          ? '该页面内容可能已变更并重新实现，将自动刷新页面。如未自动刷新，您的网络可能遭遇劫持，请手动刷新重试'
          : error.message
      }}
    </h2>
    <nuxt-link v-if="error.statusCode === 404" class="button" to="/home">
      返回首页
    </nuxt-link>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  data() {
    return {
      showError: false,
      isChunkLoadingFailed: false,
    }
  },
  mounted() {
    console.log('error mounted ', this.error)
    if (this.error == null) {
      // popup.alert('应用出现错误，但未能获得错误信息')
      return
    }
    if (this.error.statusCode === 404) {
      // 404
      const mt = /^\/page\/(\d+)$/g.exec(this.$route.path)
      if (mt && mt.length === 2) {
        // 没有实现此页面
        return
      }
    }
    // webpack error
    if (this.error.statusCode === 500 && /^Loading chunk (\d)+ failed\./.test(this.error.message)) {
      this.isChunkLoadingFailed = true
    }
    this.showError = true
  },
}
</script>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 5em;
}

.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 20px 0;
}

.chunkfailed-title {
  font-size: 2.5em;
}

.chunkfailed-info {
  font-size: 20px;
}
</style>
