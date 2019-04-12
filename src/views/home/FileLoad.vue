<template lang="pug">
  .container.load
    Top(:title='btnTitle')
    .banner
      img.background(src='../../../public/img/banner2.png')
      img.bannerTitle(src='../../../public/img/文件下载2.png')
      span.bannerTitle 文件下载
    .list-board
      .list-item(v-for='item in data')
        .title
          .article {{ item.title }}
          .download
            img.normal(src='../../../public/img/下载.png')
            img.active(src='../../../public/img/下载2.png')
          .time {{ item.ctime }}
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
      pageTotal: 0
    }
  },
  mounted () {
    this.handleCurrentChange(this.currentPage)
  },
  methods: {
    handleCurrentChange (val) {
      let result = this.$store.dispatch({
        type: 'fetchList',
        target: 'files',
        page: val,
        perpage: this.pageSize
      })
      this.currentPage = val
      this.data = result.list
      this.pageTotal = Math.floor(result.total / this.pageSize)
    }
  }
}
</script>
