<template lang="pug">
  .container.passage
    Top(:title='btnTitle')
    .banner
      img.background(src='../../../public/img/banner2.png')
      img.bannerTitle(src='../../../public/img/通知公告2.png')
      span.bannerTitle 通知详情
    .notice-detail-header
      .title {{detail.title}}
      .ctime
        span
          img(src="../../../public/img/calendar.svg")
          span {{detail.ctime}}
    .notice-detail-content(v-html="detail.content")

</template>

<script>
import Top from '@/components/Top.vue'


export default {
  name: 'notice-detail',
  components: {
    Top
  },
  data () {
    return {
      btnTitle: '管理方入口',
      data: [],
      currentPage: 1,
      pageSize: 10,
      pageTotal: 1,
      detail: {}
    }
  },
  mounted () {
    this.getNoticeDetail();
  },
  methods: {
    async getNoticeDetail () {
      let result = await this.$store.dispatch({
        type: 'fetchNoticeInfo',
        id: this.$route.params.id
      })
      this.detail = result.content
    }
  }
}
</script>

<style>
.text-retract {
    text-indent: 2em;
}
.text-right {
    text-align: right;
}
</style>