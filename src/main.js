import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import { createStore } from './store'
import { Loading } from 'element-ui'

const store = createStore()
// 注册全局的element-ui loading
Vue.prototype.$loading = Loading.service

Vue.config.productionTip = false
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
