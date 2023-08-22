import Vue from "vue"

// 1.引入axios
import axios from 'axios'
// 2.引入qs
import qs from 'qs'
// 3.将axios绑定到vue原型上，并命名为$axios
Vue.prototype.$axios = axios
// 4.将qs绑定到vue原型上，并命名为$qs
Vue.prototype.$qs = qs
