<template>
    <div class="spots">
      <h3>📍 Danh sách địa điểm</h3>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Khoảng cách</th>
            <th>Loại</th>
            <th>Ảnh</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="spot in spots" :key="spot.name">
            <td>{{ spot.name }}</td>
            <td>{{ spot.distance }} km</td>
            <td>{{ spot.tag }}</td>
            <td><img :src="spot.image" class="small-img" /></td>
            <td><button @click="remove(spot)">🗑️</button></td>
          </tr>
        </tbody>
      </table>
  
      <hr />
      <h4>➕ Thêm địa điểm</h4>
      <input v-model="form.name" placeholder="Tên địa điểm" />
      <input v-model="form.distance" type="number" placeholder="Khoảng cách (km)" />
      <select v-model="form.tag">
        <option disabled value="">-- Loại hình --</option>
        <option>Văn hóa</option>
        <option>Ẩm thực</option>
        <option>Thiên nhiên</option>
      </select>
      <input v-model="form.image" placeholder="URL ảnh" />
      <button @click="addSpot">Thêm</button>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  const spots = ref([])
  
  const form = reactive({
    name: '',
    distance: '',
    tag: '',
    image: ''
  })
  
  const addSpot = () => {
    if (form.name && form.tag) {
      spots.value.push({ ...form })
      Object.assign(form, { name: '', distance: '', tag: '', image: '' })
    }
  }
  
  const remove = (spot) => {
    spots.value = spots.value.filter(s => s !== spot)
  }
  </script>
  
  <style scoped>
  .spots input,
  .spots select {
    margin: 4px 0;
    padding: 8px;
  }
  .small-img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  table {
    width: 100%;
    margin-bottom: 20px;
  }
  </style>
  