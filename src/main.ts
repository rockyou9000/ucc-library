import 'babel-polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'

import 'assets/stylus/index.styl'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router/index'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
