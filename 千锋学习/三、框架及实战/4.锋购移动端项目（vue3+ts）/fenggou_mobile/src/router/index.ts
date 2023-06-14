import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: () => import('@/views/Cart/index.vue')
    },
    {
      path: '/mine',
      component: () => import('@/views/Mine/index.vue')
    }
  ]
})

export default router
