<template lang="pug">
  .container.passage
    Top(:title='btnTitle')
    .banner
      img.background(src='../../../public/img/banner2.png')
      img.bannerTitle(src='../../../public/img/通知公告2.png')
      span.bannerTitle 通知公告
    .list-board(ref='list')
      template(v-if='data.length > 0')
        .list-item(v-for='item in data' @click="goDetail(item.id)")
          .title
            .article {{ item.title }}
            .time {{ item.ctime }}
          .detail {{ item.content }}
      template(v-else)
        span.noResult 暂无数据
    el-pagination(
      @current-change='handleCurrentChange'
      :current-page.sync='currentPage'
      :page-size='pageSize'
      layout='prev, pager, next, total'
      :total='total')
</template>

<script>
import { Pagination } from 'element-ui'
import Top from '@/components/Top.vue'


export default {
  components: {
    [Pagination.name]: Pagination,
    Top
  },
  data () {
    return {
      btnTitle: '管理方入口',
      data: [],
      currentPage: 1,
      pageSize: 10,
      total: 0
    }
  },
  mounted () {
    this.handleCurrentChange(this.currentPage)
  },
  methods: {
    goDetail(id){
      this.$router.push({ name: 'notice-detail', params: {id} })
    },
    async handleCurrentChange (val) {
      let loading = this.$loading({
        target: this.$refs.list,
        fullscreen: false
      })
      // let result = await this.$store.dispatch({
      //   type: 'fetchList',
      //   target: 'notices',
      //   page: val,
      //   perpage: this.pageSize
      // })
      // this.data = result.content.list
      // this.currentPage = val
      // this.total = result.content.total
      loading.close()
    }
  }
}
</script>

