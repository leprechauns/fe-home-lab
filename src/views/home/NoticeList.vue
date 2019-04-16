<template lang="pug">
  .container.passage
    Top(:title='btnTitle')
    .banner
      img.background(src='../../../public/img/banner2.png')
      img.bannerTitle(src='../../../public/img/通知公告2.png')
      span.bannerTitle 通知公告
    .list-board
      .list-item(v-for='item in data' @click="goDetail(item.id)")
        .title
          .article {{ item.title }}
          .time {{ item.time }}
        .detail {{ item.brief }}
    el-pagination(
      @current-change='handleCurrentChange'
      :current-page.sync='currentPage'
      :page-size='pageSize'
      layout='prev, pager, next, total'
      :total='pageTotal')
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
      pageTotal: 1
    }
  },
  mounted () {
    this.handleCurrentChange(this.currentPage)
  },
  methods: {
    goDetail(id){
      this.$router.push({ name: 'notice-detail', params: {id} })
    },
    handleCurrentChange (val) {
      const _this = this;
      this.$store.dispatch({
        type: 'fetchList',
        target: 'notices',
        page: val,
        perpage: this.pageSize
      }).then((res)=>{
        if (res.code === 200 && res.content && res.content.list) {
          _this.data = res.content.list
          _this.currentPage = val
          _this.pageTotal = res.content.total
        }
      })
    }
  }
}
</script>

