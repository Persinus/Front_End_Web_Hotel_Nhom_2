<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->

<template>
  <div class="room-details-container" v-if="!loading">
    <!-- Slider ảnh -->
    <div class="room-slider">
      <div class="slider-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <img v-if="room.urlAnhChinh" :src="room.urlAnhChinh" alt="Hình ảnh phòng chính" />
        <img v-if="room.urlAnhPhu1" :src="room.urlAnhPhu1" alt="Ảnh phụ 1" />
        <img v-if="room.urlAnhPhu2" :src="room.urlAnhPhu2" alt="Ảnh phụ 2" />
      </div>
    </div>

    <!-- Thông tin phòng -->
    <div class="room-info">
      <h1 class="room-title">{{ room.loaiPhong }} (Mã: {{ room.maPhong }})</h1>
      <p><strong>Giá:</strong> {{ room.giaPhong }} VND</p>
      <p><strong>Tầng:</strong> {{ room.tang }}</p>
      <p><strong>Kiểu giường:</strong> {{ room.kieuGiuong }}</p>
      <p><strong>Mô tả:</strong> {{ room.moTa }}</p>
      <p><strong>Tiện nghi:</strong> {{ room.tienNghiList.join(', ') }}</p>

      <button class="book-button">Đặt phòng</button>
      <nuxt-link to="/PhongWithTienNghi" class="back-button">Quay lại danh sách phòng</nuxt-link>
    </div>

    <div v-if="error" class="error-message">{{ error }}</div>
  </div>

  <va-loading v-if="loading" />
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp } from '#app';

const room = ref({
  tienNghiList: []
});
const loading = ref(true);
const error = ref(null);

const route = useRoute(); // Lấy route hiện tại
const { $api } = useNuxtApp();

const maPhong = route.params.maPhong; // Lấy mã phòng từ route

// Slider logic
const currentSlide = ref(0);
const totalSlides = ref(3); // Tổng số ảnh trong slider

// Tự động chuyển slide sau 3 giây
onMounted(() => {
  const interval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
  }, 3000);

  return () => clearInterval(interval); // Dọn dẹp interval khi component bị hủy
});

onMounted(async () => {
  try {
    const response = await $api.get(`http://nhom2webkhachsan.runasp.net/api/PhongWithTienNghi/${maPhong}`);
    
    if (response.data) {
      room.value = {
        ...response.data,
        tienNghiList: JSON.parse(response.data.tienNghi)
      };
    } else {
      error.value = 'Không tìm thấy thông tin cho mã phòng này.';
    }
  } catch (err) {
    error.value = `Lỗi: ${err.message}`;
    console.error('Lỗi khi lấy dữ liệu:', err);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.room-details-container {
  display: flex;
  height: 100vh;
  padding: 20px;
  gap: 20px;
}

.room-slider {
  flex: 1;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.slider-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room-info {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.room-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2c3e50;
}

.book-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s, transform 0.2s;
}

.book-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #6c757d;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;
}

.back-button:hover {
  background-color: #5a6268;
  transform: scale(1.05);
}

.error-message {
  color: red;
  text-align: center;
}
</style>