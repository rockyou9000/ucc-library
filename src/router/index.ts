import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'view/HelloWorld.vue'
import TestApi from 'view/TestApi.vue'
import TestPug from 'view/TestPug.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/api',
      name: 'testApi',
      component: TestApi
    },
    {
      path: '/pug',
      name: 'testPug',
      component: TestPug
    }
  ]
})
