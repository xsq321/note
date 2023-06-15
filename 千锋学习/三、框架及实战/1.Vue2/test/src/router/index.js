import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/test',
  },
  // 案例
  {
    path: '/comp1x1',
    component: () => import('../pages/案例/01-分页组件/Father.vue'),
  },
  // 测试&练习
  {
    path: '/test',
    component: () => import('../pages/测试&练习/test'),
  },
  {
    path: '/comp2x1',
    component: () => import('../pages/测试&练习/01-props传值/Father.vue'),
  },
  {
    path: '/comp2x2',
    component: () => import('../pages/测试&练习/02-组件实例和Vue实例'),
  },
  {
    path: '/comp2x3',
    component: () => import('../pages/测试&练习/03-生命周期'),
  },
  {
    path: '/comp2x4',
    component: () => import('../pages/测试&练习/04-过渡与动画'),
  },
  {
    path: '/comp2x5',
    component: () => import('../pages/测试&练习/05-vuex测试'),
  },
  {
    path: '/not-found',
    component: () => import('../pages/NotFound/index.vue'),
  },
  {
    path: '/*',
    redirect: '/not-found',
  },
]

const router = new VueRouter({
  routes,
})

export default router
