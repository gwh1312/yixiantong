// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// 样式初始化
import './assets/styles/common.scss'
import './assets/styles/resets.css'
// 引入图标
import './assets/styles/iconfont.css' 
// 引入js文件
import './assets/js/common'
import './assets/js/fastclick'

// 引入store
import "./store/index"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
