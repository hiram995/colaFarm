import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/select',
    //路由的懒加载引入
    component: () => import('../views/SelectToken/index.vue'),
  },
  {
    path: '/home',
    //路由的懒加载引入
    component: () => import('../views/Home/index.vue'),
  },
  {
    path: '/',
    redirect: '/home'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
