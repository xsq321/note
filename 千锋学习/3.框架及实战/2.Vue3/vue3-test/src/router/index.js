import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/test'
  },
  {
    path: '/test',
    component: () => import('@/components/Test.vue')
  },

  {
    path: '/comp1x1',
    component: () => import('../components/测试&练习/01-Vue3响应式/index.vue')
  },
  {
    path: '/comp1x2',
    component: () => import('../components/测试&练习/02-Pinia/index.vue')
  },

  {
    path: '/comp2x1',
    component: () => import('../components/案例/01-组合式函数/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
