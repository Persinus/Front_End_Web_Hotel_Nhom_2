<template>
  <header>
    <TheHeader />
  </header>
  <div :class="['container', { 'dark-mode': themeStore.isDarkMode }]">
    <h1 class="header">Danh Sách Phòng</h1>

    <!-- Form lọc -->
    <div class="filter-form">
      <div class="filter-group">
        <label for="maPhong">Mã phòng:</label>
        <input id="maPhong" v-model="filters.maPhong" placeholder="Nhập mã phòng" @input="filterRooms" />
      </div>
      <div class="filter-group">
        <label for="loaiPhong">Loại phòng:</label>
        <input id="loaiPhong" v-model="filters.loaiPhong" placeholder="Nhập loại phòng" @input="filterRooms" />
      </div>
      <div class="filter-group">
        <label for="giaPhong">Giá tối đa:</label>
        <input id="giaPhong" v-model="filters.giaPhong" placeholder="Nhập giá tối đa" @input="filterRooms" type="number" />
      </div>
      <div class="filter-group">
        <label for="tang">Tầng:</label>
        <input id="tang" v-model="filters.tang" placeholder="Nhập tầng" @input="filterRooms" type="number" />
      </div>
      <div class="filter-group">
        <label for="trangThai">Trạng thái:</label>
        <select id="trangThai" v-model="filters.trangThai" @change="filterRooms">
          <option value="">Tất cả</option>
          <option value="Còn trống">Còn trống</option>
          <option value="Đã đặt">Đã đặt</option>
        </select>
      </div>
      <div class="filter-actions">
        <button @click="sortRooms('asc')">Giá tăng dần</button>
        <button @click="sortRooms('desc')">Giá giảm dần</button>
      </div>
    </div>

    <!-- Loading Skeleton -->
    <VaInnerLoading :loading="loading" color="danger" type="rectangle-bounce">
      <div v-if="error" class="error-message">
        Lỗi: {{ error }}
      </div>

      <!-- Danh sách phòng -->
      <div v-else-if="filteredRooms.length" class="services-grid">
        <VaCard
          v-for="room in filteredRooms"
          :key="room.maPhong"
          class="room-card"
          outlined
        >
          <img :src="room.urlAnhChinh" alt="Hình ảnh phòng" class="room-image" />
          <VaCardTitle>
            <div class="room-title">{{ room.loaiPhong }}</div>
          </VaCardTitle>
          <VaCardContent>
            <p class="room-price">Giá: <strong>{{ room.giaPhong.toLocaleString() }} VND</strong></p>
            <p class="room-floor">Tầng: {{ room.tang }}</p>
            <p class="room-bed-type">Kiểu giường: {{ room.kieuGiuong }}</p>
            <span
              class="room-status"
              :class="room.trangThai === 'Còn trống' ? 'available' : 'booked'"
            >
              {{ room.trangThai }}
            </span>
          </VaCardContent>
          <VaCardActions>
            <nuxt-link :to="`/phong/${room.maPhong}`" class="view-details">
      <VaButton color="primary">Xem Chi Tiết</VaButton>
    </nuxt-link>
            <VaButton color="success" @click="addToCart(room)">🛒 Thêm vào giỏ</VaButton>
          </VaCardActions>
        </VaCard>
      </div>

      <!-- Nếu không có phòng -->
      <VaAlert v-else v-if="!loading" type="info" class="no-services">
        Không có phòng nào.
      </VaAlert>
    </VaInnerLoading>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import { useThemeStore } from '~/store/DarkMode'
import TheHeader from '../Components/Header.vue'
import TheFooter from '../Components/Footer.vue'
import { VaInnerLoading, VaCard, VaCardTitle, VaCardContent, VaCardActions, VaButton, VaAlert } from 'vuestic-ui'
 
const themeStore = useThemeStore()

const rooms = ref([])
const filteredRooms = ref([])
const loading = ref(true)
const error = ref(null)
const filters = ref({ maPhong: '', loaiPhong: '', giaPhong: '', tang: '', trangThai: '' })

const { $api } = useNuxtApp()

onMounted(async () => {
  themeStore.initializeDarkMode()
  try {
    const response = await $api.get('/PhongWithTienNghi')
    if (Array.isArray(response.data)) {
      rooms.value = response.data
      filteredRooms.value = response.data
    } else {
      error.value = 'Dữ liệu trả về không đúng định dạng'
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

const filterRooms = () => {
  filteredRooms.value = rooms.value.filter(room => {
    return (
      (filters.value.maPhong ? room.maPhong.includes(filters.value.maPhong) : true) &&
      (filters.value.loaiPhong ? room.loaiPhong.includes(filters.value.loaiPhong) : true) &&
      (filters.value.giaPhong ? room.giaPhong <= filters.value.giaPhong : true) &&
      (filters.value.tang ? room.tang == filters.value.tang : true) &&
      (filters.value.trangThai ? room.trangThai.includes(filters.value.trangThai) : true)
    )
  })
}

const sortRooms = (order) => {
  filteredRooms.value = filteredRooms.value.sort((a, b) => {
    return order === 'asc' ? a.giaPhong - b.giaPhong : b.giaPhong - a.giaPhong
  })
}

const addToCart = (room) => {
  alert(`Đã thêm phòng ${room.loaiPhong} vào giỏ hàng!`)
}
const viewRoomDetail = (maPhong) => {
  // Programmatically navigate to the room detail page
  this.$router.push(`/phong/${maPhong}`);

  // Show an alert
  alert(`Xem chi tiết phòng ${maPhong}`);
};

</script>

<style scoped>
.container {
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.dark-mode-switch {
  text-align: right;
  margin-bottom: 20px;
}

.filter-form {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1 1 calc(20% - 20px);
}

.filter-group label {
  font-weight: bold;
}

.filter-group input,
.filter-group select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.filter-actions {
  display: flex;
  gap: 10px;
  flex: 1 1 100%;
  justify-content: flex-end;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.room-card {
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
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

.room-status {
  margin-top: 10px;
  font-weight: bold;
}

.room-status.available {
  color: green;
}

.room-status.booked {
  color: red;
}

.add-to-cart-btn {
  margin-top: 10px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-btn:hover {
  background-color: #218838;
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

.view-details:hover {
  background-color: #0056b3;
}

/* Dark Mode Styles */
.container.dark-mode {
  background-color: #2c3e50;
  color: #f0f0f0;
}

.container.dark-mode .filter-form {
  background-color: #34495e;
}

.container.dark-mode .filter-group input,
.container.dark-mode .filter-group select {
  background-color: #2c3e50;
  color: #f0f0f0;
  border: 1px solid #555;
}

.container.dark-mode button {
  background-color: #1abc9c;
}

.container.dark-mode button:hover {
  background-color: #16a085;
}

.container.dark-mode .room-card {
  background-color: #34495e;
  color: #f0f0f0;
  border: 1px solid #555;
}

.container.dark-mode .room-status.available {
  color: #2ecc71;
}

.container.dark-mode .room-status.booked {
  color: #e74c3c;
}
</style>