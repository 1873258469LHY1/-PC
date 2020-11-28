import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'

import './styles/reset.css'
import './plugins/element.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
