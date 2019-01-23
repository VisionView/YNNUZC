import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import siderPath from './siderPath.js'
import otherPath from './otherPath.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        name: '登录'
      },
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/',
      name: 'Layout',
      redirect: '/info/index',
      meta: {
        name: '首页',
        auth: false // 这个字段以后用来验证必须登录才能查看
      },
      component: Layout,
      children: siderPath
    },
    {
      path: '/',
      name: 'Layout',
      meta: {
        name: '首页',
        auth: false
      },
      component: Layout,
      children: otherPath
    },
    {
      path: '/404',
      name: '404',
      mate: {
        name: '404'
      },
      component: () => import('@/views/error/404.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
