import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/common.css'//公共样式
import router from './router'//路由
import Vant from 'vant'
import 'vant/lib/index.css'
import './utils/axios'
import './utils/rem'
// 导入图片预加载方法以及图片列表
import { imgsPreloader } from './utils/imgPreloader.js'
import imgPreloaderList from './utils/imgPreloaderList.js'
imgsPreloader(imgPreloaderList)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
