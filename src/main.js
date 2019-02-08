import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import router from './router'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import 'css/reset.css'
import 'css/table.css'
import 'css/elementUI.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// 路由拦截器
router.beforeEach(({meta, path}, from, next) => {
  let { auth = true } = meta // 该路由是否需要登录
  let $user = JSON.parse(sessionStorage.getItem('$user')) || {}
  let isLogin = Boolean($user.auth) // true 用户已登录 false 用户未登录
  if (!auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  } else {
    next()
  }
})

let vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
Vue.use({vm})
