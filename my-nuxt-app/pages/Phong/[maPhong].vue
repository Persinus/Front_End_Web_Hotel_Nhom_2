<template>
  <div class="room-details-container" v-if="!loading">
    <h1 class="room-title">{{ room.loaiPhong }} (Mã: {{ room.maPhong }})</h1>
    
    <img :src="room.urlAnhChinh" alt="Hình ảnh phòng" class="room-main-image" />

    <div class="room-info">
      <p><strong>Giá:</strong> {{ room.giaPhong }} VND</p>
      <p><strong>Tầng:</strong> {{ room.tang }}</p>
      <p><strong>Kiểu giường:</strong> {{ room.kieuGiuong }}</p>
      <p><strong>Mô tả:</strong> {{ room.moTa }}</p>
      <p><strong>Tiện nghi:</strong> {{ room.tienNghiList.join(', ') }}</p>
    </div>

    <div class="additional-images">
      <h2>Hình ảnh thêm</h2>
      <div class="image-slider">
        <img v-if="room.urlAnhPhu1" :src="room.urlAnhPhu1" alt="Ảnh phụ 1" class="room-additional-image" />
        <img v-if="room.urlAnhPhu2" :src="room.urlAnhPhu2" alt="Ảnh phụ 2" class="room-additional-image" />
        <img v-if="room.urlAnhPhu3" :src="room.urlAnhPhu3" alt="Ảnh phụ 3" class="room-additional-image" />
      </div>
    </div>

    <nuxt-link to="/PhongWithTienNghi" class="back-button">Quay lại danh sách phòng</nuxt-link>
    
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>

  <va-loading v-if="loading" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
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

// Thêm logic cho hiệu ứng chuyển động của ảnh
const currentIndex = ref(0);
const images = ref([]);

images.value = [room.value.urlAnhPhu1, room.value.urlAnhPhu2, room.value.urlAnhPhu3].filter(Boolean);

const switchImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

setInterval(switchImage, 3000); // Chuyển ảnh mỗi 3 giây
</script>

<style scoped>
.room-details-container {
  padding: 20px;
}

.room-title {
  text-align: center;
}

.room-main-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.room-info {
  padding: 20px;
}

.additional-images {
  margin-top: 20px;
  text-align: center;
}

.image-slider {
  position: relative;
  overflow: hidden;
  height: 200px; /* Thay đổi chiều cao theo yêu cầu */
}

.room-additional-image {
  position: absolute;
  width: 100%;
  height: auto;
  left: 100%;
  animation: slideAnimation 0.5s forwards; /* Hiệu ứng chuyển động */
}

@keyframes slideAnimation {
  0% {
    left: 100%; /* Ảnh bắt đầu từ bên phải */
  }
  100% {
    left: 0; /* Ảnh chuyển vào vị trí */
  }
}

.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.error-message {
  color: red;
  text-align: center;
}
</style>