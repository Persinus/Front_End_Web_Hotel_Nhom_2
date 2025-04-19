<template>
  <div class="container">
    <h1 class="header">Danh sách Dịch vụ</h1>
  
    <va-loading v-if="loading" />
  
    <va-alert v-if="error" type="danger">
      Lỗi: {{ error }}
    </va-alert>

    <div v-if="loading" class="skeleton-loading">
      <div class="skeleton-card" v-for="n in 4" :key="n"></div> <!-- Placeholder skeleton -->
    </div>
    
    <div v-else-if="services.length" class="services-grid">
      <va-card
        v-for="service in services"
        :key="service.maChiTietDichVu"
        class="service-card animate__animated animate__fadeInUp" 
      >
        <img :src="service.urlAnh" alt="Hình ảnh dịch vụ" class="service-image" />
        <h2 class="service-title">{{ service.tenDichVu }}</h2>
        <p class="service-price">
          Đơn giá: <strong>{{ service.donGia > 0 ? `${service.donGia} VND` : 'Free' }}</strong>
        </p>
        <p class="service-description">{{ service.moTaDichVu }}</p>
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
.container {
  padding: 20px;
}

.skeleton-loading {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Căn giữa các thẻ skeleton */
}

.skeleton-card {
  width: calc(25% - 20px); /* Chiếm 25% chiều rộng */
  height: 200px; /* Chiều cao giống với dịch vụ */
  margin: 10px;
  background-color: #e0e0e0; /* Màu nền cho skeleton */
  border-radius: 5px;
  animation: pulse 1.5s infinite; /* Hiệu ứng nhấp nháy */
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
  justify-content: space-between; /* Căn giữa các thẻ */
}

.service-card {
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  flex: 0 1 calc(25% - 20px); /* Mỗi thẻ chiếm 25% chiều rộng */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Thêm bóng cho thẻ */
  transition: transform 0.2s; /* Hiệu ứng hover */
}

.service-card:hover {
  transform: translateY(-5px); /* Đẩy thẻ lên khi di chuột */
}

.service-image {
  width: 100%; /* Chiếm toàn bộ chiều rộng của thẻ */
  height: 200px; /* Thiết lập chiều cao cố định để đồng bộ kích thước */
  object-fit: cover; /* Đảm bảo không bị bóp méo, giữ tỉ lệ hình ảnh */
  border-radius: 5px;
}

.header {
  text-align: center;
}

.no-services {
  text-align: center;
}
</style>