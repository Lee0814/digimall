import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
Vue.config.productionTip = false
Vue.use(VueCookies)
new Vue({
  render: (h) => h(App),
  store,
  router
}).$mount('#app')
