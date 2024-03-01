import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'product',
      // Lazy Loading Route
      component: () => import('../views/SingleProductView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // Lazy Loading Route
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      // Lazy Loading Route
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorPage',
      component: () => import('../views/ErrorPageView.vue')
    }
  ]
})

export default router
