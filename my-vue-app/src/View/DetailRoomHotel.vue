<template>
    <div class="room-detail">
      <!-- Carousel hình ảnh -->
      <div class="carousel">
        <img :src="currentImage" alt="Ảnh phòng khách sạn" />
        <div class="carousel-controls">
          <button @click="prevImage">‹</button>
          <button @click="nextImage">›</button>
        </div>
      </div>
  
      <!-- Thông tin phòng -->
      <div class="info">
        <h2>{{ room.name }}</h2>
        <p class="price">
          💰 Giá ngày thường: {{ room.price.toLocaleString() }} VND / đêm<br />
          🗓 Giá cuối tuần: {{ weekendPrice.toLocaleString() }} VND / đêm
        </p>
  
        <p class="status" :class="room.status === 'available' ? 'green' : 'red'">
          {{ room.status === 'available' ? '🟢 Phòng trống' : '🔴 Đã đặt' }}
        </p>
  
        <div class="details">
          <p>📐 Diện tích: {{ room.area }} m²</p>
          <p>🛏 Số giường: {{ room.beds }} ({{ room.bedType }})</p>
          <p>🔧 Tiện ích:</p>
          <ul>
            <li v-if="room.hasWifi">📶 Wifi miễn phí</li>
            <li v-if="room.hasAC">❄️ Điều hòa</li>
            <li v-if="room.hasBathtub">🛁 Bồn tắm</li>
            <li v-if="room.hasTV">📺 TV màn hình phẳng</li>
          </ul>
        </div>
  
        <button class="btn-primary" @click="bookNow">Đặt phòng ngay</button>
      </div>
  
      <!-- Sơ đồ phòng -->
      <div class="map-section">
        <h3>📍 Sơ đồ phòng & khu vực</h3>
        <img
          src="https://i.pinimg.com/originals/55/0c/b6/550cb6d6e0e3b0e053933321d64d6b35.jpg"
          alt="Sơ đồ phòng"
        />
      </div>
  
      <div v-if="message" class="success-msg">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const roomId = parseInt(route.params.id)
  
  // 🔥 Giả lập dữ liệu phòng (có thể fetch từ API sau)
  const room = ref({
    id: roomId,
    name: 'Suite Ocean View',
    price: 1800000,
    status: 'available',
    area: 50,
    beds: 2,
    bedType: 'King-size',
    hasWifi: true,
    hasAC: true,
    hasBathtub: true,
    hasTV: true,
    images: [
      'https://images.unsplash.com/photo-1600047509510-0e322f6cc73f',
      'https://images.unsplash.com/photo-1590490360182-944fd2cf3c3b',
      'https://images.unsplash.com/photo-1501117716987-c8e1ecb210d3',
      'https://images.unsplash.com/photo-1582719478250-08c64dc7c9a6'
    ]
  })
  
  // 💡 Carousel control
  const currentIndex = ref(0)
  const currentImage = computed(() => room.value.images[currentIndex.value])
  const weekendPrice = computed(() => Math.round(room.value.price * 1.1))
  
  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % room.value.images.length
  }
  const prevImage = () => {
    currentIndex.value =
      (currentIndex.value - 1 + room.value.images.length) % room.value.images.length
  }
  
  const message = ref('')
  const bookNow = () => {
    message.value = `✅ Bạn đã đặt ${room.value.name} thành công!`
  }
  </script>
  
  <style scoped>
  .room-detail {
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .carousel {
    position: relative;
    width: 100%;
    height: 360px;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
  }
  
  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .carousel-controls {
    position: absolute;
    bottom: 10px;
    right: 20px;
    display: flex;
    gap: 10px;
  }
  
  .carousel-controls button {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .info h2 {
    font-size: 26px;
    color: #2c3e50;
    margin-bottom: 8px;
  }
  
  .price {
    color: #444;
    margin-bottom: 8px;
  }
  
  .status.green {
    color: green;
  }
  
  .status.red {
    color: red;
  }
  
  .details {
    margin: 16px 0;
  }
  
  .details ul {
    padding-left: 20px;
  }
  
  .btn-primary {
    padding: 12px 20px;
    background: #2c3e50;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 12px;
  }
  
  .btn-primary:hover {
    background: #1a252f;
  }
  
  .map-section {
    margin-top: 40px;
  }
  
  .map-section img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }
  
  .success-msg {
    color: green;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  