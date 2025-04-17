<template>
  <div>
    <h1>Danh Sách Dịch Vụ</h1>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <ul v-if="services.length">
      <li v-for="service in services" :key="service.id">{{ service.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Khai báo các biến
const services = ref([]);
const errorMessage = ref('');

// Sử dụng axios
const { $axios } = useNuxtApp(); // Truy xuất axios thông qua Nuxt app

// Lấy dữ liệu từ API khi component được mount
onMounted(async () => {
  try {
    const response = await axios.get('/DichVu'); // Gọi API
    services.value = response.data; // Gán dữ liệu vào services
  } catch (error) {
    console.error(error);
    errorMessage.value = 'Không thể tải dữ liệu từ API!';
  }
});
</script>