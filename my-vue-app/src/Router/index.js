// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/Login', // Trang gốc
      name: 'dangnhap',
      component: () => import('../View/social.vue')
    },
    {
      path: '/Register', // Trang gốc
      name: 'Register',
      component: () => import('../View/Register.vue')
    },
    {
      path:"/Home"
      ,name:"Home",
      component: () => import('../View/Home.vue')

    },
    {
      path:"/Profile",
      name:"Profile",
      component: () => import('../View/Profile.vue')
    },
    {
        path:"/Booking"
        ,name:"Booking",
        component: () => import('../View/Booking.vue')
     },
     {
      path:"/Detail"
      ,name:"Detail",
      component: () => import('../View/DetailRoomHotel.vue')
     },
     {
      path:"/Payment",
      name:"Payment",
      component: () => import('../View/Payment.vue')
     },
     {
      path:"/RoomMNG"
      ,name:"RoomMNG",
      component: () => import('../View/RoomManagment.vue')
     },
     {
      path:"/RoomMap",
      name:"RoomMap",
      component: () => import('../View/RoomMap.vue')
     }


  ]
  

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router