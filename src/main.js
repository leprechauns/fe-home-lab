import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// import store from './store'
import { createStore } from './store'

const store = createStore()



Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
