import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from 'view/HomeIndex'
import SearchResult from 'view/SearchResult'
import NewBook from 'view/NewBook'

import AdminLogin from 'view/AdminLogin'
import AdminIndex from 'view/AdminIndex'

import BookDetail from 'components/BookDetail'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeIndex
    },
    {
      path: '/result',
      name: 'resultAll',
      component: SearchResult
    },
    {
      path: '/result/:type/:info',
      name: 'result',
      component: SearchResult
    },
    {
      path: '/login',
      name: 'login',
      component: AdminLogin
    },
    {
      path: '/new',
      name: 'new',
      component: NewBook
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminIndex,
      children: [
        {
          path: 'dashboard',
          component: SearchResult
        },
        {
          path: 'add',
          component: BookDetail
        }
      ]
    },
    {path: '*', redirect: '/'}
  ]
})
