<template>
  <div class="room-map">
    <h2 class="heading animate__animated animate__fadeInDown">🗺️ Sơ Đồ Phòng Khách Sạn OceanView</h2>

    <!-- Legend -->
    <div class="legend">
      <span class="legend-item standard">Standard</span>
      <span class="legend-item deluxe">Deluxe</span>
      <span class="legend-item suite">Suite</span>
      <span class="legend-item dorm">Dorm</span>
    </div>

    <!-- Floor Map -->
    <div v-for="floor in floors" :key="floor" class="floor animate__animated animate__fadeInUp">
      <h3 class="floor-label">Tầng {{ floor }}</h3>
      <div class="floor-grid">
        <div
          v-for="room in getRoomsByFloor(floor)"
          :key="room.maPhong"
          class="room"
          :class="room.typeClass"
          @click="selectRoom(room)"
        >
          <span class="room-number">{{ room.maPhong }}</span>
          <span class="room-type">{{ room.shortType }}</span>
        </div>
      </div>
    </div>

    <!-- Modal chi tiết phòng -->
    <div class="modal" v-if="selectedRoom" @click.self="selectedRoom = null">
      <div class="modal-content animate__animated animate__zoomIn">
        <div class="modal-left">
          <img :src="selectedRoom.urlAnhChinh" alt="Room image" />
        </div>
        <div class="modal-right">
          <h2>{{ selectedRoom.loaiPhong }} ({{ selectedRoom.maPhong }})</h2>
          <ul class="room-details">
            <li><strong>Loại:</strong> {{ selectedRoom.loaiPhong }}</li>
            <li><strong>Giường:</strong> {{ selectedRoom.kieuGiuong }}</li>
            <li><strong>View:</strong> {{ selectedRoom.view || 'Không xác định' }}</li>
            <li><strong>Diện tích:</strong> {{ selectedRoom.dienTich || 'Không xác định' }} m²</li>
            <li><strong>Tiện ích:</strong> {{ selectedRoom.tienNghiList.join(', ') }}</li>
            <li><strong>Giá:</strong> {{ selectedRoom.giaPhong.toLocaleString() }} VND</li>
          </ul>
          <button @click="selectedRoom = null">Đóng</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const selectedRoom = ref(null)
const rooms = ref([])
const floors = ref([])

const { $api } = useNuxtApp()

onMounted(async () => {
  try {
    const response = await $api.get('http://nhom2webkhachsan.runasp.net/api/PhongWithTienNghi')
    rooms.value = response.data.map(room => ({
      ...room,
      tienNghiList: JSON.parse(room.tienNghi),
      shortType: room.loaiPhong.replace(' Room', ''),
      typeClass:
        room.loaiPhong.includes('Standard')
          ? 'standard'
          : room.loaiPhong.includes('Deluxe')
          ? 'deluxe'
          : room.loaiPhong.includes('Suite')
          ? 'suite'
          : 'dorm'
    }))
    floors.value = [...new Set(rooms.value.map(room => room.tang))].sort((a, b) => a - b)
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu phòng:', error)
  }
})

const getRoomsByFloor = floor => rooms.value.filter(room => room.tang === floor)
const selectRoom = room => {
  selectedRoom.value = room
}
</script>

<style scoped>
.room-map {
  max-width: 1200px;
  margin: auto;
  padding: 24px;
}

.heading {
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
}

.legend {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  justify-content: center;
}

.legend-item {
  padding: 6px 14px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-size: 12px;
}
.legend-item.standard {
  background-color: #3498db;
}
.legend-item.deluxe {
  background-color: #27ae60;
}
.legend-item.suite {
  background-color: #8e44ad;
}
.legend-item.dorm {
  background-color: #f39c12;
}

.floor {
  margin-bottom: 40px;
}

.floor-label {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #34495e;
}

.floor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
}

.room {
  padding: 14px 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  color: white;
  font-weight: bold;
  transition: 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.room:hover {
  transform: translateY(-4px);
  filter: brightness(1.1);
}

.standard {
  background-color: #3498db;
}
.deluxe {
  background-color: #27ae60;
}
.suite {
  background-color: #8e44ad;
}
.dorm {
  background-color: #f39c12;
}

.room-number {
  font-size: 16px;
}
.room-type {
  font-size: 12px;
}

/* Modal */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.modal-content {
  background: white;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  overflow: hidden;
  max-width: 900px;
  width: 90%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
}
.modal-left {
  flex: 1.2;
}
.modal-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal-right {
  flex: 1;
  padding: 24px;
  color: #2c3e50;
}
.room-details {
  list-style: none;
  padding: 0;
  margin: 0;
}
.room-details li {
  margin: 10px 0;
  font-size: 15px;
}
.modal-right button {
  margin-top: 20px;
  background-color: #2c3e50;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.modal-right button:hover {
  background-color: #1a252f;
}
</style>
