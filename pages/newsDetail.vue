<template>
  <div class="newsDetail">
    <BackNaviationBar />
    <div class="news-body">
      <div class="news-title">
        {{ newsDetailData.BT }}
      </div>
      <div class="new-time" style="font-size: 14px;">
        {{ formatDate(newsDetailData.TJSJ) }}
      </div>
      <van-swipe :autoplay="3000" class="image-box">
        <van-swipe-item v-for="(item, index) in newsDetailData.IMG" :key="index">
          <img class="news-image" :src="item.Url" width="500" height="300">
        </van-swipe-item>
      </van-swipe>
      <div v-dompurify-html="newsDetailData.WZNR" class="content" />
    </div>
  </div>
</template>
    
<script>
import { newDetail } from '@/api/messageApi.js'
import { format } from 'date-fns'
import BackNaviationBar from '@/components/backNaviationBar/index.vue'
export default {
  components: {
    BackNaviationBar
  },
  layout: 'default',
  data() {
    return {
      newsDetailData: {},
    }
  },
  created() {
    this.getNewDetail(this.$route.params.newsID)
  },
  methods: {
    formatDate(date) {
      return format(date, 'MM-DD HH:mm')
    },
    getNewDetail(newsID) {
      newDetail().then(res => {
        if (res.ok) {
          this.newsDetailData = res.data
        }
      })
    }
  },

}
</script>
    
<style >
.news-body {
  padding: 20px;
  margin-top: 30px;
}

.news-title {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
}

.new-time {
  text-align: right;
  margin-bottom: 10px;
  color: #b6b6b6;
}

.content {
  font-size: 16px;
  line-height: 1.5;
  color: #727272;
}

.image-box {
  margin-top: 10px;
  margin-bottom: 10px;
}

.van-swipe-item {
  position: relative;
  height: 300px;
}

.news-image {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
</style>
    