
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->



<template>
    <div class="container">
      <h1 class="header">Danh Sách Phòng</h1>
  
      <va-loading v-if="loading" />
      
      <va-alert v-if="error" type="danger">
        Lỗi: {{ error }}
      </va-alert>
  
      <div v-if="loading" class="skeleton-loading">
        <div class="skeleton-card" v-for="n in 4" :key="n"></div> <!-- Placeholder skeleton -->
      </div>
      
      <div v-else-if="rooms.length" class="services-grid">
        <div
          v-for="room in rooms"
          :key="room.maPhong"
          class="room-card animate__animated animate__fadeInUp"
        >
          <img :src="room.urlAnhChinh" alt="Hình ảnh phòng" class="room-image" />
          <h2 class="room-title">{{ room.loaiPhong }}</h2>
          <p class="room-price">Giá: <strong>{{ room.giaPhong }} VND</strong></p>
          <p class="room-floor">Tầng: {{ room.tang }}</p>
          <p class="room-bed-type">Kiểu giường: {{ room.kieuGiuong }}</p>
          <nuxt-link :to="`/phong/${room.maPhong}`" class="view-details">Xem Chi Tiết</nuxt-link>
        </div>
      </div>
      
      <va-alert v-else v-if="!loading" type="info" class="no-services">
        Không có phòng nào.
      </va-alert>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'; // Import Vue
  import { useNuxtApp } from '#app';
  
  const rooms = ref([]); // Biến chứa danh sách phòng
  const loading = ref(true); // Trạng thái tải
  const error = ref(null); // Biến chứa lỗi
  
  const { $api } = useNuxtApp(); // Sử dụng Axios từ plugin
  
  onMounted(async () => {
    try {
      const response = await $api.get('/PhongWithTienNghi'); // Gọi API thông qua $api
      console.log('Dữ liệu nhận được từ API:', response.data);
      
      // Kiểm tra kiểu dữ liệu và gán nó cho rooms
      if (Array.isArray(response.data)) {
        rooms.value = response.data;
      } else {
        error.value = 'Dữ liệu trả về không đúng định dạng';
      }
    } catch (err) {
      console.error('Lỗi khi lấy dữ liệu:', err);
      error.value = err.message; // Lưu thông báo lỗi
    } finally {
      loading.value = false; // Hoàn thành việc tải
    }
  });
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .skeleton-loading {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .skeleton-card {
    width: calc(25% - 20px);
    height: 200px;
    margin: 10px;
    background-color: #e0e0e0;
    border-radius: 5px;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #c0c0c0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
  
  .services-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .room-card {
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
    flex: 0 1 calc(25% - 20px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .room-card:hover {
    transform: translateY(-5px);
  }
  
  .room-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .header {
    text-align: center;
  }
  
  .no-services {
    text-align: center;
  }
  
  .view-details {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    text-decoration: none;
  }
  </style>