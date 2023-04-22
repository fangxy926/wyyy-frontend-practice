<template>
    <div class="container">
      <div>
        hello
      </div>
    </div>
  </template>
  
  <script>
  import { newList } from '~/api/messageApi'
  export default {
    head() {
      return {
        title: '首页',
      }
    },
    layout: 'base',
    data() {
      return {
     
      }
    },
    mounted() {
      this.getNewList()
    },
    methods: {
      // mock 本地接口模拟
      getNewList(){
        newList().then(res=>{
          if(res.ok){
            console.log(res.data)
          }
        })
      }
  
    },
   
  }
  </script>
  
  <style lang="stylus" scoped>
  .container
    margin 0 auto
    min-height 100vh
    display flex
    justify-content center
    align-items center
    text-align center
  .title
    font-family 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    display block
    font-weight 300
    font-size 0.28rem
    color #35495e
    letter-spacing 1px
  .subtitle
    font-weight 300
    font-size 0.42rem
    color #526488
    word-spacing 0.05rem
    padding-bottom 0.15rem
  .links
    padding-top 1.5rem
  .btn
    margin-top 1.5rem
  </style>