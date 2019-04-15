<template lang="pug">
.index
  .main
    router-view
  .footer
    Footer
</template>

<script>
import config from '../../config'
import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  },
  data () {
    return {
      config
    }
  },
  methods: {
    styleChange ({ height }) {
    }
  },
  watch: {
    '$route': {
      handler: function (to, from) {
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.index
  position relative
  width 100%
  height 100%
  display flex
  flex-flow column nowrap
  background #ffffff
  overflow-y auto
  overflow-x hidden
.main
  flex 1
.footer
  none
</style>
