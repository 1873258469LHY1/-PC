import Vue from 'vue'
import App from './App.vue'

import store from './store'

import './mock/mockServer'

Vue.config.productionTip = false

import router from './router'

import './styles/reset.css'
import './styles/iconfont.css'
import './plugins/element.js'

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    render: h => h(App),
    router,
    store
}).$mount('#app')
