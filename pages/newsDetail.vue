<template>
    <div class="newsDetail">
        <BackNaviationBar />
        <div class="news-body">
            <div class="title">{{ newsDetailData.BT }}</div>
            <div class="time">{{ formatDate(newsDetailData.TJSJ) }}</div>
            <div class="content" v-html="newsDetailData.WZNR"></div>
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
    layout: 'base',
    data() {
        return {
            newsDetailData: {},
        }
    },
    created() {

        this.getNewDetail(this.$route.params.newsID)
        // console.log(this.$route.params.newsID)
    },
    methods: {
        formatDate(date) {
            return format(date, 'MM-DD HH:mm')
        },
        getNewDetail(newsID) {
            newDetail().then(res => {
                if (res.ok) {
                    this.newsDetailData = res.data
                    console.log(this.newsDetailData)
                }
            })
        }
    },

}
</script>
    
<style >
.news-body {
    padding: 20px;
}

.title {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    line-height: 1.5;
}

.time {
    font-size: 14x;
    text-align: right;
    margin-bottom: 20px;
    color: #b6b6b6;
}

.content {
    font-size: 16px;
    line-height: 1.5;
    color: #727272;
}
</style>
    