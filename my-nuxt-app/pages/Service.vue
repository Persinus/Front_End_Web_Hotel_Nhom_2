<template>
  <div class="container">
    <h1 class="header">Danh sách Dịch vụ</h1>

    <!-- Dropdown lọc -->
    <div class="filter-bar">
      <va-select
        v-model="sortOption"
        :options="sortOptions"
        placeholder="Lọc dịch vụ"
        class="filter-dropdown"
        @change="sortServices"
      />
    </div>

    <va-loading v-if="loading" />

    <va-alert v-if="error" type="danger">
      Lỗi: {{ error }}
    </va-alert>

    <div v-if="loading" class="skeleton-loading">
      <div class="skeleton-card" v-for="n in 4" :key="n"></div>
    </div>

    <div v-else-if="services.length" class="services-grid">
      <va-card
        v-for="service in services"
        :key="service.maChiTietDichVu"
        class="service-card animate__animated animate__fadeInUp"
      >
        <img :src="service.urlAnh" alt="Hình ảnh dịch vụ" class="service-image" />
        <h2 class="service-title">{{ service.tenDichVu }}</h2>
        <button
          class="service-price-button"
          :class="{ 'free-service': service.donGia === 0 }"
          disabled
        >
          {{ service.donGia > 0 ? `${service.donGia} VND` : 'Free' }}
        </button>
        <p class="service-description">{{ service.moTaDichVu }}</p>
        <button class="service-button">Xem chi tiết</button>
      </va-card>
    </div>

    <va-alert v-else v-if="!loading" type="info" class="no-services">
      Không có dịch vụ nào.
    </va-alert>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // Import Vue
import { useNuxtApp } from '#app'; // Nuxt plugin

const services = ref([]); // Biến chứa danh sách dịch vụ
const loading = ref(true); // Trạng thái tải
const error = ref(null); // Biến chứa lỗi
const sortOption = ref('price-asc'); // Lựa chọn lọc mặc định

const sortOptions = [
  { value: 'price-asc', label: 'Giá: Nhỏ đến lớn' },
  { value: 'price-desc', label: 'Giá: Lớn đến nhỏ' },
  { value: 'name-asc', label: 'Tên: A-Z' },
  { value: 'name-desc', label: 'Tên: Z-A' },
];

const { $api } = useNuxtApp(); // Sử dụng Axios từ plugin

onMounted(async () => {
  try {
    const response = await $api.get('/DichVu'); // Gọi API thông qua $api
    console.log('Dữ liệu nhận được từ API:', response.data);

    if (Array.isArray(response.data)) {
      services.value = response.data;
    } else {
      error.value = 'Dữ liệu trả về không đúng định dạng';
    }
  } catch (err) {
    console.error('Lỗi khi lấy dữ liệu:', err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

function sortServices() {
  if (sortOption.value === 'price-asc') {
    services.value.sort((a, b) => a.donGia - b.donGia);
  } else if (sortOption.value === 'price-desc') {
    services.value.sort((a, b) => b.donGia - a.donGia);
  } else if (sortOption.value === 'name-asc') {
    services.value.sort((a, b) => a.tenDichVu.localeCompare(b.tenDichVu));
  } else if (sortOption.value === 'name-desc') {
    services.value.sort((a, b) => b.tenDichVu.localeCompare(a.tenDichVu));
  }
}
</script>

<style>
.container {
  padding: 20px;
}

.filter-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.filter-dropdown {
  width: 200px;
}

.skeleton-loading {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.skeleton-card {
  width: calc(25% - 20px);
  height: 200px;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.service-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.service-title {
  font-size: 1.8rem; /* Tiêu đề lớn hơn */
  font-weight: bold;
  margin: 10px 0;
  color: #333;
}

.service-price-button {
  background-color: #f0f0f0;
  color: #007bff;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: default;
}

.service-price-button.free-service {
  background-color: #d4edda; /* Màu xanh nhạt cho dịch vụ miễn phí */
  color: #155724;
}

.service-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 15px;
}

.service-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.service-button:hover {
  background-color: #0056b3;
}

.header {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.no-services {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}
</style>