<template>
    <div class="home">
      <h1>Chào mừng đến với OceanView!</h1>
      <p>Chúng tôi cung cấp các dịch vụ khách sạn cao cấp với view biển tuyệt đẹp.</p>
      <nuxt-link to="/room-map">Xem các phòng</nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  h1 {
    font-size: 2em;
    color: #2c3e50;
  }
  
  p {
    font-size: 1.2em;
    color: #34495e;
  }
  
  nuxt-link {
    font-size: 1.2em;
    color: #3498db;
    text-decoration: none;
  }
  </style>