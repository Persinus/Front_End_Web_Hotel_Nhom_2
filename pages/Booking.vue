<template>
  <header>
      <TheHeader />
    </header> 

    <div class="booking-page">
      <!-- Form tìm kiếm -->
      <div class="search-form">
        <h2>🔍 Tìm phòng</h2>
        <div class="form-row">
          <input type="date" v-model="search.checkIn" />
          <input type="date" v-model="search.checkOut" />
          <input type="number" v-model="search.adults" placeholder="Người lớn" min="1" />
          <input type="number" v-model="search.children" placeholder="Trẻ em" min="0" />
          <button class="btn-primary" @click="filterRooms">Tìm phòng</button>
        </div>
        <div class="filters">
          <select v-model="filter.type">
            <option value="">Tất cả loại phòng</option>
            <option>Phòng đơn</option>
            <option>Phòng đôi</option>
            <option>Gia đình</option>
            <option>Suite</option>
          </select>
          <select v-model="filter.sort">
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>
          <label><input type="checkbox" v-model="filter.viewSea" /> View biển</label>
          <label><input type="checkbox" v-model="filter.hasPool" /> Hồ bơi</label>
          <label><input type="checkbox" v-model="filter.hasWifi" /> Wifi miễn phí</label>
        </div>
      </div>
  
      <!-- Danh sách phòng -->
      <div class="room-list">
        <div
          v-for="room in filteredRooms"
          :key="room.id"
          class="room-card"
        >
          <img :src="room.image" :alt="room.name" />
          <div class="room-info">
            <h3>{{ room.name }}</h3>
            <p>{{ room.description }}</p>
            <ul class="features">
              <li>{{ room.area }} m²</li>
              <li>{{ room.beds }} giường</li>
              <li>💸 {{ room.price }} đ/đêm</li>
              <li v-if="room.hasWifi">📶 Wifi</li>
              <li v-if="room.hasPool">🏊 Hồ bơi</li>
              <li v-if="room.viewSea">🌊 View biển</li>
            </ul>
            <div class="room-actions">
              <button class="btn-secondary" @click="selectRoom(room)">Đặt phòng</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Gợi ý dịch vụ -->
      <div class="service-addon" v-if="selectedRoom">
        <h3>🎁 Dịch vụ kèm theo ({{ selectedRoom.name }})</h3>
        <label><input type="checkbox" v-model="addons.breakfast" /> Ăn sáng</label>
        <label><input type="checkbox" v-model="addons.spa" /> Spa thư giãn</label>
        <label><input type="checkbox" v-model="addons.shuttle" /> Đưa đón sân bay</label>
        <button class="btn-primary" @click="confirmBooking">Xác nhận đặt phòng</button>
      </div>
  
      <!-- Kết quả -->
      <div class="success-msg" v-if="message">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import TheHeader from '../Components/Header.vue'
  const search = ref({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0
  })
  
  const filter = ref({
    type: '',
    sort: 'asc',
    viewSea: false,
    hasPool: false,
    hasWifi: false
  })
  
  const rooms = ref([
    {
      id: 1,
      name: 'Phòng đơn tiêu chuẩn',
      description: 'Phòng cho 1 người, tiện nghi cơ bản.',
      price: 600000,
      area: 20,
      beds: 1,
      type: 'Phòng đơn',
      hasWifi: true,
      hasPool: false,
      viewSea: false,
      image: 'https://images.unsplash.com/photo-1552903023-4ec5593ec660'
    },
    {
      id: 2,
      name: 'Phòng đôi view biển',
      description: 'Thoải mái cho 2 người, tầm nhìn hướng biển.',
      price: 1200000,
      area: 35,
      beds: 2,
      type: 'Phòng đôi',
      hasWifi: true,
      hasPool: true,
      viewSea: true,
      image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210d3'
    },
    {
      id: 3,
      name: 'Suite Gia đình',
      description: 'Không gian rộng rãi cho gia đình 4 người.',
      price: 1900000,
      area: 60,
      beds: 3,
      type: 'Gia đình',
      hasWifi: true,
      hasPool: true,
      viewSea: false,
      image: 'https://images.unsplash.com/photo-1560067174-894dc1c5079a'
    }
  ])
  
  const selectedRoom = ref(null)
  const addons = ref({
    breakfast: false,
    spa: false,
    shuttle: false
  })
  const message = ref('')
  
  const filterRooms = () => {
    selectedRoom.value = null
    message.value = ''
  }
  
  const selectRoom = (room) => {
    selectedRoom.value = room
    message.value = ''
  }
  
  const confirmBooking = () => {
    const selectedAddons = Object.entries(addons.value)
      .filter(([key, value]) => value)
      .map(([key]) => key)
  
    message.value = `✅ Bạn đã đặt phòng: ${selectedRoom.value.name} kèm dịch vụ: ${selectedAddons.join(', ') || 'không có'}`
    selectedRoom.value = null
    addons.value = { breakfast: false, spa: false, shuttle: false }
  }
  
  const filteredRooms = computed(() => {
    let filtered = rooms.value
  
    if (filter.value.type) {
      filtered = filtered.filter(r => r.type === filter.value.type)
    }
    if (filter.value.viewSea) {
      filtered = filtered.filter(r => r.viewSea)
    }
    if (filter.value.hasPool) {
      filtered = filtered.filter(r => r.hasPool)
    }
    if (filter.value.hasWifi) {
      filtered = filtered.filter(r => r.hasWifi)
    }
  
    if (filter.value.sort === 'asc') {
      filtered = filtered.sort((a, b) => a.price - b.price)
    } else {
      filtered = filtered.sort((a, b) => b.price - a.price)
    }
  
    return filtered
  })
  </script>
  
  
  <style scoped>
  .booking-page {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .search-form {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
  }
  
  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
  }
  
  .form-row input,
  .filters select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    flex: 1;
    min-width: 140px;
  }
  
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    margin-top: 10px;
  }
  
  .room-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
  }
  
  .room-card {
    width: 100%;
    max-width: 360px;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    animation: slideIn 0.4s ease-in-out;
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0.5;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .room-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  
  .room-info {
    padding: 15px;
  }
  
  .room-info h3 {
    margin-bottom: 6px;
  }
  
  .features {
    list-style: none;
    padding: 0;
    margin: 8px 0;
    font-size: 14px;
    color: #555;
  }
  
  .features li {
    margin-bottom: 4px;
  }
  
  .room-actions {
    margin-top: 10px;
    text-align: right;
  }
  
  .service-addon {
    margin-top: 30px;
    background: #eef8f7;
    padding: 20px;
    border-radius: 10px;
  }
  
  .service-addon label {
    display: block;
    margin: 8px 0;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .btn-primary {
    background: #2c3e50;
    color: white;
  }
  
  .btn-secondary {
    background: #ccc;
  }
  
  .success-msg {
    margin-top: 20px;
    color: green;
    font-weight: bold;
    text-align: center;
  }
  </style>