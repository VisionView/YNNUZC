import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
/*

*/
import 'css/reset.css'
import 'css/element-ui.css'
// import 'https://at.alicdn.com/t/font_927359_go8czibrhii.css'

import echarts from 'echarts'
// 一般都要加个$加到vue的原型链上，方便引用
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
