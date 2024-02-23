import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
      component: () => import('../views/SingleProduct.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // Lazy Loading Route
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      // Lazy Loading Route
      component: () => import('../views/Checkout.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorPage',
      component: () => import('../views/ErrorPage.vue')
    }
  ]
})

export default router
