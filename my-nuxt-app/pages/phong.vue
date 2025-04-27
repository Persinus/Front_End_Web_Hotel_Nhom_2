<template>
  <div class="container">
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

    <!-- Loading skeleton -->
    <va-loading v-if="loading" />

    <div v-if="error" class="error-message">
      Lỗi: {{ error }}
    </div>

    <!-- Skeleton loading effect -->
    <div v-if="loading" class="skeleton-loading">
      <div class="skeleton-card" v-for="n in 4" :key="n"></div>
    </div>

    <!-- Danh sách phòng -->
    <div v-else-if="filteredRooms.length" class="services-grid">
      <div
        v-for="room in filteredRooms"
        :key="room.maPhong"
        class="room-card animate__animated animate__fadeInUp"
      >
        <img :src="room.urlAnhChinh" alt="Hình ảnh phòng" class="room-image" />
        <h2 class="room-title">{{ room.loaiPhong }}</h2>
        <p class="room-price">Giá: <strong>{{ room.giaPhong }} VND</strong></p>
        <p class="room-floor">Tầng: {{ room.tang }}</p>
        <p class="room-bed-type">Kiểu giường: {{ room.kieuGiuong }}</p>
        <span class="room-status" :class="room.trangThai === 'Còn trống' ? 'available' : 'booked'">{{ room.trangThai }}</span>
        <nuxt-link :to="`/phong/${room.maPhong}`" class="view-details">Xem Chi Tiết</nuxt-link>
        <button @click="addToCart(room)" class="add-to-cart-btn">🛒 Thêm vào giỏ</button>
      </div>
    </div>

    <!-- Nếu không có phòng -->
    <va-alert v-else v-if="!loading" type="info" class="no-services">
      Không có phòng nào.
    </va-alert>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const rooms = ref([])
const filteredRooms = ref([])
const loading = ref(true)
const error = ref(null)
const filters = ref({ maPhong: '', loaiPhong: '', giaPhong: '', tang: '', trangThai: '' })

const { $api } = useNuxtApp()

onMounted(async () => {
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
</script>

<style scoped>
.container {
  padding: 20px;
}

.header {
  text-align: center;
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
</style>
