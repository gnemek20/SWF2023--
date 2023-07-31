import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { defaultCss, designCss } from './styles/index.js'
Vue.use(defaultCss)
Vue.use(designCss)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
