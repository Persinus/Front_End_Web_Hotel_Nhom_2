<template>
    <div class="container">
      <h1 class="header">Danh sách Dịch vụ</h1>
      <va-loading v-if="loading" />
      
      <va-alert v-if="error" type="danger">
        Lỗi: {{ error }}
      </va-alert>
      
      <div v-if="services.length">
        <va-card
          v-for="service in services"
          :key="service.MaChiTietDichVu"
          class="service-card"
        >
          <h2 class="service-title">{{ service.TenDichVu }}</h2>
          <p class="service-price">Đơn giá: <strong>{{ service.DonGia }} VND</strong></p>
          <p class="service-description">{{ service.MoTaDichVu }}</p>
        </va-card>
      </div>
      
      <va-alert v-else v-if="!loading" type="info" class="no-services">
        Không có dịch vụ nào.
      </va-alert>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'; // Import Vue
  
  const services = ref([]); // Biến chứa danh sách dịch vụ
  const loading = ref(true); // Trạng thái tải
  const error = ref(null); // Biến chứa lỗi
  
  const { $api } = useNuxtApp(); // Sử dụng Axios từ plugin
  
  onMounted(async () => {
    try {
      const response = await $api.get('/DichVu'); // Gọi API thông qua $api
      console.log('Dữ liệu nhận được từ API:', response.data);
      
      // Kiểm tra kiểu dữ liệu và gán nó cho services
      if (Array.isArray(response.data)) {
        services.value = response.data;
      } else {
        error.value = 'Dữ liệu trả về không đúng định dạng';
      }
    } catch (err) {
      console.error('Lỗi khi lấy dữ liệu:', err); // In lỗi ra console
      error.value = err.message; // Lưu thông báo lỗi
    } finally {
      loading.value = false; // Hoàn thành việc tải
    }
  });
  </script>
  
  <style>
  /* Truyền các kiểu CSS ở đây */
  </style>