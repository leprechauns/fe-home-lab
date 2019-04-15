<template lang="pug">
  .container.passage
    Top(:title='btnTitle')
    .banner
      img.background(src='../../../public/img/banner2.png')
      img.bannerTitle(src='../../../public/img/通知公告2.png')
      span.bannerTitle 通知详情
    .notice-detail-header
      .title {{detail.title}}
      .ctime {{detail.ctime}}
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
    getNoticeDetail () {
      const _this = this;
      this.$store.dispatch({
        type: 'fetchNoticeInfo',
        id: this.$route.params.id
      }).then((res)=>{
        if (res.code === 200) {
          _this.detail = res.content;
        }
      })
    }
  }
}
</script>

