import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { defaultCss } from './styles/index.js'
Vue.use(defaultCss)

import functions from './scripts/functions'
Vue.use(functions)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
