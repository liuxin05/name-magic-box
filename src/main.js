import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/common.css'//公共样式
import router from './router'//路由
import Vant from 'vant'
import 'vant/lib/index.css'
import './utils/axios'
import './utils/rem'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
