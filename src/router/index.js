import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import loginPage from '../views/home/login.vue'
import choicePage from '../views/home/choice.vue'
import generateName from '../views/home/generateName.vue'

export default new VueRouter({
  routes: [
    { path: '', redirect: "index" },
    { path: '/index', name: 'LOGIN', component: loginPage },
    { path: '/choicePage', name: 'CHOICE', component: choicePage },
    { path: '/generateName', name: 'GENERATE', component: generateName },
  ]
})
