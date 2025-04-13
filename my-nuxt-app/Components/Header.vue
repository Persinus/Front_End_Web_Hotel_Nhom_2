<template>
    <va-navbar color="white" class="header" shadow>
      <template #left>
        <div class="logo">🏨 OceanView</div>
      </template>
      <template #center>
        <va-navbar-item v-for="item in navItems" :key="item">
          <a class="nav-link" href="#">{{ item }}</a>
        </va-navbar-item>
      </template>
      <template #right>
        <va-button class="mr-2" preset="secondary">Đăng nhập</va-button>
        <va-button color="primary">Đăng ký</va-button>
      </template>
    </va-navbar>
  </template>
  
  <script setup>
  const navItems = ['Trang chủ', 'Đặt phòng', 'Dịch vụ', 'Ưu đãi', 'Tài khoản']
  </script>
  
  <style scoped>
  .nav-link {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 500;
  }
  </style>