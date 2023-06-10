import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'

// 
const ServicesPage = () => import('../pages/ServicesPage/ServicesPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage
    },
  
  ]
})

export default router
