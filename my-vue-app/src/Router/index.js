// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/signin', // Trang gốc
      name: 'dangnhap',
      component: () => import('../View/social.vue')
    },
    {
      path: '/login', // Trang gốc
      name: 'login',
      component: () => import('../View/Login.vue')
    }
  ]
  

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router