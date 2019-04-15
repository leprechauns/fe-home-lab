import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Home from '@/views/home/Home.vue'
import NoticeList from '@/views/home/NoticeList.vue'
import FileLoad from '@/views/home/FileLoad.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/labmai/home',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: '/',
        name: 'home',
        component: Home
      }, {
        path: '/notice-list',
        name: 'notice-list',
        component: NoticeList
      }, {
        path: '/file-load',
        name: 'file-load',
        component: FileLoad
      }]
    }
  ]
})
