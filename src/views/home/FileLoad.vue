<template lang="pug">
  .container.load
    Top(:title='btnTitle')
    .banner
      img.background(src='../../../public/img/banner2.png')
      img.bannerTitle(src='../../../public/img/文件下载2.png')
      span.bannerTitle 文件下载
    .list-board(ref='list')
      template(v-if='data.length > 0')
        .list-item(v-for='item in data')
          .title
            .article {{ item.title }}
            .download(@click='go(item.link)')
              img.normal(src='../../../public/img/下载.png')
              img.active(src='../../../public/img/下载2.png')
            .time {{ item.ctime }}
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
    async handleCurrentChange (val) {
      let loading = this.$loading({
        target: this.$refs.list,
        fullscreen: false
      })
      let result = await this.$store.dispatch({
        type: 'fetchList',
        target: 'files',
        page: val,
        perpage: this.pageSize
      })
      this.currentPage = val
      this.data = result.content.list
      this.pageTotal = result.content.total
      loading.close()
    },
    go (link) {
      window.location.href = link
    }
  }
}
</script>
