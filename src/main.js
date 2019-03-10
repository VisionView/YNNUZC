import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import router from './router'
import echarts from 'echarts'
import Vuex from 'vuex'
import './utils/Axios'
import 'element-ui/lib/theme-chalk/index.css'
import 'css/reset.css'
import 'css/table.css'
import 'css/elementUI.css'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// 路由拦截器
router.beforeEach((to, from, next) => {
  // 白名单成员，直接通过, 一定要先加这个
  // if (whiteList.indexOf(to.path) !== -1) {
  //   next()
  // }
  // 未登录账户，直接跳转到登录页面
  if (!localStorage.getItem('token') && to.path !== '/login') {
    return next({ path: '/login' })
  } else {
    if(localStorage.getItem('token') && to.path === '/login') {
      // 登录了跳转 login
      if (localStorage.getItem('scope') == 6) {
        // student
        next({ path: '/student' })
      } else if (localStorage.getItem('scope') != 6) {
        // admin
        next({ path: '/admin' })
      }
    } else if (localStorage.getItem('token')) {
      const Path = to.path
      let scope = localStorage.getItem('scope')
      const routePath = Path.split('/')
      if(scope) {
        let count = 0 // 存储  用来判断是否有字符串 !0 -> 跳转student
        let count2 = 0 // 存储  用来判断是否有字符串  !0 -> 跳转了admin
        for (let i = 0; i < routePath.length; i++) {
          if (routePath[i] == 'student') {
            count++
          }
          if (routePath[i] == 'admin') {
            count2++
          }
        }
        if (count == 0 && scope == 6 && count2 != 0) {
          next({ path: '/student' })
        } else if (count != 0 && scope == 6 && count2 != 0) {
          next()
        } else if (count != 0 && scope != 6 && count2 == 0) {
          next({ path: '/admin' })
        } else if (count == 0 && scope != 6 && count2 != 0) {
          next()
        }
        
        else {
          next()
        }
      }
    }
    // 已经登录
    // student还是admin
    
    next()
    // console.log(from.path)
    // console.log(to.path)
    // if (to.path === '/login') {
    //   if (localStorage.getItem('scope') != 6) {
    //     next({ path: '/admin' })
    //   } else {
    //     next({ path: '/student' })
    //   }
    // } else {
    //   next()
    // }
  }
})



// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem('token') && to.path !== '/login') {
//     return next({ path: '/login' })
//   } else {
//     next()
//     if (localStorage.getItem('scope') === 6) {
//       // student
//       let count = 0 //用来判断是否有 student  0 表示没有
//       let routePath = this.$route.path //获取路由 如果没有student 则 跳转回student
//       // 将路由分割 \\
//       console.log(routePath)
//       routePath = routePath.split('\\')
//       for (let i = 0; i < routePath.length; i++) {
//         if (routePath[i] == 'student') {
//           count++ 
//         }
//       }
//       if ( count == 0) {
//         return next({ path: '/student' })
//       }
//     } else if (localStorage.getItem('scope') !== 6){
//       let count = 0 //用来判断是否有 student  0 表示没有
//       let routePath = this.$route.path //获取路由 如果没有student 则 跳转回student
//       // 将路由分割 \\
//       routePath = routePath.split('\\')
//       for (let i = 0; i < routePath.length; i++) {
//         if (routePath[i] == 'admin') {
//           count++ 
//         }
//       }
//       if ( count == 0) {
//         return next({ path: '/admin' })
//       }
//       // admin
//     }
//   }



  // else if (localStorage.getItem('scope') === 6) {

  // } else if (localStorage.getItem('scope') !== 6) {

  // } 
  
  // let { auth = true } = meta // 该路由是否需要登录
  // let $user = JSON.parse(sessionStorage.getItem('$user')) || {}
  // let isLogin = Boolean($user.auth) // true 用户已登录 false 用户未登录
  // if (!auth && !isLogin && path !== '/login') {
  //   return next({ path: '/login' })
  // } else {
  //   next()
  // }
// })

let vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
Vue.use({vm})
