import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import sLayout from '@/views/students/layout/sLayout'
import siderPath from './siderPath.js'
import otherPath from './otherPath.js'
import stuPath from './stuPath.js'

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
      path: '/admin',
      name: 'Layout',
      redirect: '/statistics/index',
      meta: {
        name: '首页',
        auth: false // 这个字段以后用来验证必须登录才能查看
      },
      component: Layout,
      children: siderPath
    },
    {
      path: '/admin',
      name: 'Layout',
      meta: {
        name: '首页',
        auth: false
      },
      component: Layout,
      children: otherPath
    },
    {
      path: '/student',
      name: 'student',
      redirect: '/stuInfo/sinfo',
      meta: {
        name: '学生端首页',
        auth: false
      },
      component: sLayout,
      children: stuPath
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
