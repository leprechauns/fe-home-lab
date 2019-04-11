import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Home from '@/views/home/home.vue'
import Passage from '@/views/home/passage.vue'
import Load from '@/views/home/load.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/',
        name: 'home',
        component: Home
      }, {
        path: '/passage',
        name: 'passage',
        component: Passage
      }, {
        path: '/load',
        name: 'load',
        component: Load
      }]
    }
  ]
})
