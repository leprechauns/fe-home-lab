<template lang="pug">
  .container.home
    Top.home(:title='btnTitle')
    .banner
      .el-carousel(indicator-position="outside")
        .e-carousel-item(v-for="item in 4" :key="item")
          h3 {{item}}
      .notice-container
        .notice
          .same-style.same-border
            .title
              img(src="../../../public/img/通知公告.png")
              span 通知公告
            span.info-more.more(@click="goInfo") 更多
          .info
            .same-style.content(v-for="item in notices")(@click="goDetail(item.id)")
              span.name {{ item.title }}
              span.date {{ item.ctime }}
          .same-style.same-border
            .title
              img(src="../../../public/img/文件下载.png")
              span 文件下载
            span.download-more.more(@click="goDownload") 更多
          .download
            .same-style.content(v-for="item in downloads")
              span.name {{ item.title }}
              span.date {{ item.ctime }}
    .thumbnail
      .caption
        .normal
          img(src="../../../public/img/云商城.png")
        .active
          img(src="../../../public/img/云商城s.png")
        span 云商城
      .caption
        .normal
          img(src="../../../public/img/安全考试.png")
        .active
          img(src="../../../public/img/安全考试s.png")
        span 安全考试
      .caption
        .normal
          img(src="../../../public/img/气体检测.png")
        .active
          img(src="../../../public/img/气体检测s.png")
        span 气体检测
      .caption
        .normal
          img(src="../../../public/img/管理方.png")
        .active
          img(src="../../../public/img/管理方s.png")
        span 管理方
      .caption
        .normal
          img(src="../../../public/img/安全巡查.png")
        .active
          img(src="../../../public/img/安全巡查s.png")
        span 安全巡查
</template>

<script>
import Top from '@/components/Top.vue'
import { Carousel, CarouselItem } from 'element-ui'

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    Top
  },
  data () {
    return {
      btnTitle: '管理方入口',
      notices:[],
      downloads:[]
    }
  },
  mounted () {
    this.getNotice();
    this.getFileLoadList();
    this.getInfo()
  },
  methods: {
    goInfo () {
      this.$router.push({ name: 'notice-list' })
    },
    goDownload () {
      this.$router.push({ name: 'file-load' })
    },
    goDetail(id){
      this.$router.push({ name: 'notice-detail', params: {id} })
    },
    getInfo(){
      const _this = this;
      this.$store.dispatch({
        type: 'fetchBasisInfo',
        target: 'info'
      }).then((res)=>{
        if (res.code == 200){
          console.log(res);
        }
      })
    },
    getNotice () {
      const _this = this;
      this.$store.dispatch({
        type: 'fetchList',
        target: 'notices',
        page: 1,
        perpage: 4
      }).then((res)=>{
        if (res.code === 200 && res.content && res.content.list){
          _this.notices = res.content.list.length >= 4 ? res.content.list.slice(0, 4): res.list
        }
      })
    },
    getFileLoadList (val) {
      let _this = this;
      this.$store.dispatch({
        type: 'fetchList',
        target: 'downloads',
        page: 1,
        perpage: 4
      }).then((res) => {
        if (res.code === 200 && res.content && res.content.list){
          _this.downloads = res.content.list.length >= 4 ? res.content.list.slice(0, 4): res.list
        }
      })
    }
  },
  watch: {
  }
}
</script>


