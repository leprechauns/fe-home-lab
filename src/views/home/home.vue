<template lang="pug">
  .container.home
    Top.home(:title='btnTitle')
    .banner
      img.background(src="../../../public/img/banner.png")
      .notice-container
        .notice
          .same-style.same-border
            .title
              img(src="../../../public/img/通知公告.png")
              span 通知公告
            span.info-more.more(@click="goInfo") 更多
          .info
            .noResult(v-if="notices.length <= 0") 暂无公告
            .same-style.content(v-for="item in notices")(@click="goDetail(item.id)" v-else)
              span.name {{ item.title }}
              span.date {{ item.ctime }}
          .same-style.same-border
            .title
              img(src="../../../public/img/文件下载.png")
              span 文件下载
            span.download-more.more(@click="goDownload") 更多
          .download
            .noResult(v-if="!downloads.length <= 0") 暂无文件
            .same-style.content(v-for="item in downloads" v-else)
              span.name {{ item.title }}
              span.date {{ item.ctime }}
    .thumbnail
      .caption(v-for="(key, index) in entry" @click="goEntry(key)")
        .normal(v-if="enterInfo[index]")
          i.img(:class="enterInfo[index].icon")
        span {{ enterInfo[index].name}}
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
      downloads:[],
      entry: {},
      banners: [],
      enterInfo: {
        cloud: {
          name: '云商城入口',
          icon: ''
        },
        exam: {
          name: '考试系统',
          icon: ''
        },
        giot: {
          name: '气体检测',
          icon: ''
        },
        admin: {
          name: '管理方',
          icon: ''
        },
        lab: {
          name: '买方',
          icon: ''
        },
        inspection: {
          name: '安全巡查',
          icon: ''
        }
      }
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
    goEntry (url) {
      window.location.href = url
    },
    goDownload () {
      this.$router.push({ name: 'file-load' })
    },
    goDetail (id) {
      this.$router.push({ name: 'notice-detail', params: {id} })
    },
    getInfo () {
      this.$store.dispatch({
        type: 'fetchBasisInfo',
        target: 'info'
      }).then((res)=>{
        console.log(res.content)
        this.banners = res.content.banners
        this.entry = res.content.entry
      })
    },
    getNotice () {
      this.$store.dispatch({
        type: 'fetchList',
        target: 'notices',
        page: 1,
        perpage: 4
      }).then((res)=>{
        if (res.content && res.content.list) {
          this.notices = res.content.list.length >= 4 ? res.content.list.slice(0, 4): res.content.list
        }
      })
    },
    getFileLoadList (val) {
      this.$store.dispatch({
        type: 'fetchList',
        target: 'files',
        page: 1,
        perpage: 4
      }).then(res => {
        if (res.content && res.content.list) {
          this.downloads = res.content.list.length >= 4 ? res.content.list.slice(0, 4): res.content.list
        }
      })
    }
  },
  watch: {
  }
}
</script>


