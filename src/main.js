// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './theme/index.css'
import '../static/CSS/common.css'
import '../static/JS/iconfont.js'
import ElementUI from 'element-ui'

import ajax from '../src/utils/ajax.jsx'
import store from './store'
import * as filters from '../static/JS/filter.js' 
import methods from '../static/JS/methods.js'

require('es6-promise').polyfill()

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.ajax = ajax

// 设置访问路径
const apiConfig = {
  "env":"dev",
  "dev":{
    "apiHost":"/report/reportDetail/"
  },
  "qa":{
    "apiHost":"/report/reportDetail/"
  },
  "prod":{
    "apiHost":"/report/reportDetail/"
  }
}
const protocol = window.location.protocol + '//'
const host = window.location.host
const apiHost = protocol + host + apiConfig[apiConfig.env]['apiHost']
Vue.prototype.apiHost = apiHost


// 加载公共方法
Vue.use(methods)
// 加载将filters.js中的方法注册为全局过滤器
Object.keys(filters).forEach( key => {
  Vue.filter( key, filters[key])
} )

// document.write('<h1>Hello World</h1>');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
