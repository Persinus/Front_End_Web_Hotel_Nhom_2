<template>
    <div class="room-management">
      <h2>🏨 Quản Lý Trạng Thái Phòng</h2>
  
      <!-- Bộ lọc -->
      <div class="filters">
        <select v-model="selectedFloor">
          <option value="">Tất cả tầng</option>
          <option v-for="f in floors" :key="f">Tầng {{ f }}</option>
        </select>
  
        <select v-model="selectedStatus">
          <option value="">Tất cả trạng thái</option>
          <option value="available">Trống</option>
          <option value="occupied">Đang thuê</option>
          <option value="cleaning">Cần dọn</option>
        </select>
      </div>
  
      <!-- Sơ đồ phòng -->
      <div class="room-grid">
        <div
          v-for="room in filteredRooms"
          :key="room.id"
          class="room-card"
          :class="room.status"
          @click="selectRoom(room)"
        >
          <h3>{{ room.number }}</h3>
          <p>{{ room.type }}</p>
          <span class="status-label">{{ room.statusLabel }}</span>
        </div>
      </div>
  
      <!-- Nhận phòng -->
      <div v-if="selectedRoom" class="checkin-box">
        <h3>🧾 Nhận Phòng: {{ selectedRoom.number }} - {{ selectedRoom.type }}</h3>
        <input v-model="guest.name" placeholder="Họ tên khách hàng" />
        <input v-model="guest.id" placeholder="Số CCCD/Hộ chiếu" />
        <input type="number" v-model="guest.people" placeholder="Số người" />
        <input type="date" v-model="guest.checkIn" />
        <input type="date" v-model="guest.checkOut" />
        <button class="btn-primary" @click="checkIn">✔️ Xác nhận & In phiếu</button>
      </div>
  
      <div v-if="receipt" class="receipt">
        🧾 <strong>Phiếu nhận phòng:</strong> Mã: {{ receipt.code }} <br />
        Tên khách: {{ receipt.name }} <br />
        Thời gian: {{ receipt.checkIn }} → {{ receipt.checkOut }} ({{ receipt.nights }} đêm) <br />
        Tổng tiền: {{ receipt.total.toLocaleString() }} VND
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const floors = [1, 2, 3]
  
  const rooms = ref([
    { id: 1, number: '101', floor: 1, type: 'Phòng đơn', price: 800000, status: 'available' },
    { id: 2, number: '102', floor: 1, type: 'Phòng đôi', price: 1200000, status: 'occupied' },
    { id: 3, number: '201', floor: 2, type: 'Suite', price: 2000000, status: 'cleaning' },
    { id: 4, number: '202', floor: 2, type: 'Gia đình', price: 2500000, status: 'available' }
  ])
  
  const statusMap = {
    available: 'Trống',
    occupied: 'Đang thuê',
    cleaning: 'Cần dọn'
  }
  
  rooms.value.forEach(r => r.statusLabel = statusMap[r.status])
  
  const selectedFloor = ref('')
  const selectedStatus = ref('')
  const selectedRoom = ref(null)
  const guest = ref({
    name: '',
    id: '',
    people: 1,
    checkIn: '',
    checkOut: ''
  })
  const receipt = ref(null)
  
  const filteredRooms = computed(() => {
    return rooms.value.filter(r =>
      (!selectedFloor.value || r.floor == selectedFloor.value) &&
      (!selectedStatus.value || r.status === selectedStatus.value)
    )
  })
  
  const selectRoom = (room) => {
    selectedRoom.value = room
    guest.value = { name: '', id: '', people: 1, checkIn: '', checkOut: '' }
    receipt.value = null
  }
  
  const checkIn = () => {
    const nights =
      (new Date(guest.value.checkOut) - new Date(guest.value.checkIn)) /
      (1000 * 3600 * 24)
    const total = selectedRoom.value.price * nights
  
    receipt.value = {
      name: guest.value.name,
      code: 'RES' + Math.floor(Math.random() * 100000),
      checkIn: guest.value.checkIn,
      checkOut: guest.value.checkOut,
      nights,
      total
    }
  
    selectedRoom.value.status = 'occupied'
    selectedRoom.value.statusLabel = statusMap['occupied']
  }
  </script>
  
  <style scoped>
  .room-management {
    max-width: 1000px;
    margin: auto;
    padding: 30px;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .filters {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }
  
  .room-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 14px;
  }
  
  .room-card {
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  }
  
  .room-card.available {
    background-color: #e0f7e9;
  }
  .room-card.occupied {
    background-color: #ffe4e4;
  }
  .room-card.cleaning {
    background-color: #fff8dc;
  }
  
  .status-label {
    display: block;
    font-weight: bold;
    margin-top: 8px;
  }
  
  .checkin-box input {
    width: 100%;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  
  .btn-primary {
    background-color: #2c3e50;
    color: white;
    padding: 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }
  
  .receipt {
    background: #f5f5f5;
    padding: 16px;
    border-radius: 10px;
    margin-top: 20px;
  }
  </style>