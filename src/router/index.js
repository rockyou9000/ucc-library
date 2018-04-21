import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from 'view/HomeIndex'
import SearchResult from 'view/SearchResult'
import NewBook from 'view/NewBook'

import AdminLogin from 'view/AdminLogin'
import AdminEntrance from 'view/AdminEntrance'
import AdminIndex from 'view/AdminIndex'
import AdminEdit from 'view/AdminEdit'

import BookDetail from 'view/BookDetail'

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
      component: AdminEntrance,
      children: [
        {
          path: 'index',
          component: AdminIndex
        },
        {
          path: 'dashboard',
          component: AdminEdit
        },
        {
          path: 'add',
          component: BookDetail
        },
        {
          path: 'add/:id',
          component: BookDetail
        }
      ]
    },
    {path: '*', redirect: '/'}
  ]
})
