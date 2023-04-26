<template>
  <div class="news-container">
    <Header :title-val="'新闻'" />
    <van-list class="news-list">
      <van-cell v-for="item in newListData" :key="item.ID" :title="item.BT" @click="goToDetail(item.ID)">
        <template #label>
          <div class="cell-label">
            {{ formatDate(item.TJSJ) }}
          </div>
        </template>
      </van-cell>
    </van-list>
    <BottomNavigationBar />
  </div>
</template>
  
<script>
import { newList } from '@/api/messageApi.js'
import { format } from 'date-fns'
import Header from '@/components/header/index.vue'
import BottomNavigationBar from '@/components/bottomNavigationBar/index.vue'
export default {
  components: {
    BottomNavigationBar,
    Header
  },
  layout: 'default',
  data() {
    return {
      search: "",
      newListData: [],

    };
  },
  mounted() {
    this.getNewList()
  },
  methods: {
    // mock 本地接口模拟
    getNewList() {
      newList().then(res => {
        if (res.ok) {
          this.newListData = res.data
          console.log(this.newListData)
        }
      })
    },
    formatDate(date) {
      return format(date, 'MM-DD HH:mm')
    },
    goToDetail(newsID) {
      this.$router.push({
        name: 'newsDetail',
        params: {
          newsID: newsID
        }
      })
    }
  },

}
</script>
  
<style>
.news-list {
  background-color: #fafafa;
  position: fixed;
  top: 50px;
  bottom: 50px;
  padding: 5px;
  overflow-y: scroll;
  width: 100%;
}



.news-container .van-cell {
  font-size: 16px;
}
.news-container .cell-label {
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
}

.news-container .van-cell::after {
  border-bottom: 2px solid #dfe2e8;
}
</style>
  