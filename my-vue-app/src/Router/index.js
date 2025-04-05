// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/', // Trang gốc
      name: 'dangnhap',
      component: () => import('../View/social.vue')
    }
  ]
  

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router