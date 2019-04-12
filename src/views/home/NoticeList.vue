<template lang="pug">
  .container.passage
    Top(:title='btnTitle')
    .banner
      img.background(src='../../../public/img/banner2.png')
      span 通知公告
    .list-board
      .list-item(v-for='item in data')
        .title
          .article {{ item.title }}
          .download
          .time {{ item.time }}
        .detail {{ item.detail }}
    el-pagination(
      @size-change='handleSizeChange'
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
      data: [{ title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' },
        { title: '北师大', time: '2019-03-09', detail: '123ashdpfhapuehpauh' }],
      currentPage: 1,
      pageSize: 10,
      pageTotal: 100
    }
  },
  methods: {
    handleSizeChange () {},
    handleCurrentChange () {}
  }
}
</script>

