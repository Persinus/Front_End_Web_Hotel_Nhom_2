<template>
    <div class="pricing">
      <h3>🛏️ Giá Phòng</h3>
      <table>
        <thead>
          <tr>
            <th>Tên phòng</th>
            <th>Giá hiện tại</th>
            <th>Khuyến mãi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.number">
            <td>{{ room.name }}</td>
            <td>{{ room.price.toLocaleString() }} VND</td>
            <td>
              <input v-model.number="room.discount" type="number" placeholder="Giảm còn..." />
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="saveDiscounts">Lưu tất cả</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import roomData from '../../assets/Room.json'
  
  const rooms = ref(roomData.map(room => ({ ...room, discount: null })))
  
  const saveDiscounts = () => {
    console.log(rooms.value)
    // Gửi API
  }
  </script>
  
  <style scoped>
  .pricing input {
    width: 100px;
    padding: 6px;
  }
  table {
    width: 100%;
    margin-bottom: 12px;
  }
  </style>
  
  