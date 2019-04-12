import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import { createStore } from './store'

const store = createStore()

Vue.config.productionTip = false
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
