<template>
    <form class="info-form" @submit.prevent="saveHotelInfo">
      <label>Tên khách sạn</label>
      <input v-model="hotel.name" type="text" required />
  
      <label>Logo khách sạn</label>
      <input type="file" @change="onLogoChange" />
      <img v-if="hotel.logoPreview" :src="hotel.logoPreview" class="preview" />
  
      <label>Địa chỉ</label>
      <input v-model="hotel.address" type="text" required />
  
      <label>Số điện thoại</label>
      <input v-model="hotel.phone" type="tel" required />
  
      <label>Email</label>
      <input v-model="hotel.email" type="email" required />
  
      <button type="submit">Lưu thay đổi</button>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const hotel = reactive({
    name: 'OceanView Hotel',
    logoPreview: '',
    address: '',
    phone: '',
    email: ''
  })
  
  const onLogoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      hotel.logoPreview = URL.createObjectURL(file)
      // TODO: Upload API logic
    }
  }
  
  const saveHotelInfo = () => {
    console.log('Saved!', hotel)
    // TODO: Gửi API lưu thông tin
  }
  </script>
  
  <style scoped>
  .info-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .preview {
    max-height: 80px;
    margin-top: 8px;
  }
  </style>
  