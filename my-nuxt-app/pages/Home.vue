<template>
    <div class="home-container">
      <!-- Header -->
      <header class="header">
        <div class="logo">🏨 OceanView</div>
        <nav class="nav">
          <a href="#">Trang chủ</a>
          <a href="#">Đặt phòng</a>
          <a href="#">Dịch vụ</a>
          <a href="#">Ưu đãi</a>
          <a href="#">Tài khoản</a>
        </nav>
        <div class="auth-buttons">
          <button class="btn">Đăng nhập</button>
          <button class="btn btn-primary">Đăng ký</button>
        </div>
      </header>
  
      <!-- Slideshow -->
      <section class="slideshow">
        <div class="slides">
          <img :src="slides[currentSlide]" alt="slide" />
        </div>
        <div class="slide-controls">
          <button @click="prevSlide">‹</button>
          <button @click="nextSlide">›</button>
        </div>
      </section>
  
      <!-- Giới thiệu -->
      <section class="about">
        <h2>Giới thiệu về khách sạn</h2>
        <p>
          Trải nghiệm sang trọng, đẳng cấp tại trung tâm thành phố biển Đà Nẵng. OceanView Resort & Hotel mang đến cho bạn kỳ nghỉ tuyệt vời với view biển thơ mộng, tiện nghi hiện đại và dịch vụ tận tâm.
        </p>
      </section>
  
      <!-- Dịch vụ nổi bật -->
      <section class="services">
        <h2>Dịch vụ nổi bật</h2>
        <div class="cards">
          <div class="card" v-for="service in services" :key="service.title">
            <img :src="service.image" alt="service" />
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <button class="btn-link">Xem chi tiết</button>
          </div>
        </div>
      </section>
  
      <!-- Ưu đãi -->
      <section class="promo">
        <div class="promo-content">
          <h2>🎉 Ưu đãi đặc biệt</h2>
          <p>Giảm 20% khi đặt phòng trong tuần này! Áp dụng đến 15/04/2025.</p>
          <button class="btn btn-primary">Đặt ngay</button>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="footer">
        <div class="contact">
          <p><strong>OceanView Resort & Hotel</strong></p>
          <p>Lô 29, Đường Võ Nguyên Giáp, Quận Sơn Trà, Đà Nẵng</p>
          <p>📞 0236 123 4567 | ✉️ contact@oceanview.vn</p>
        </div>
        <div class="social">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
        <div class="copy">
          © {{ new Date().getFullYear() }} OceanView Hotel Management
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const slides = [
    'https://images.unsplash.com/photo-1600047509510-0e322f6cc73f',
    'https://images.unsplash.com/photo-1590490360182-944fd2cf3c3b',
    'https://images.unsplash.com/photo-1501117716987-c8e1ecb210d3'
  ]
  const currentSlide = ref(0)
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  }
  
  onMounted(() => {
    setInterval(nextSlide, 5000)
  })
  
  const services = ref([
    {
      title: 'Phòng Deluxe View Biển',
      description: 'Không gian hiện đại, tiện nghi, tầm nhìn biển rộng mở.',
      image: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1'
    },
    {
      title: 'Spa & Chăm sóc sức khỏe',
      description: 'Thư giãn tuyệt đối với liệu pháp chăm sóc chuyên sâu.',
      image: 'https://images.unsplash.com/photo-1600508771804-06cbfb62b8d6'
    },
    {
      title: 'Ẩm thực & Nhà hàng',
      description: 'Thưởng thức món ngon Á – Âu trong không gian sang trọng.',
      image: 'https://images.unsplash.com/photo-1555992336-cbf2e4fc9c79'
    },
    {
      title: 'Tour khám phá Đà Nẵng',
      description: 'Trọn gói city tour – khám phá các địa danh nổi tiếng.',
      image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8e1'
    }
  ])
  </script>
  
  <style scoped>
  .home-container {
    font-family: 'Segoe UI', sans-serif;
  }
  
  /* HEADER */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
  
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .nav {
    display: flex;
    gap: 20px;
  }
  
  .nav a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
  }
  
  .auth-buttons {
    display: flex;
    gap: 10px;
  }
  
  .btn {
    padding: 8px 16px;
    border: 1px solid #2c3e50;
    background: white;
    color: #2c3e50;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  
  .btn-primary {
    background-color: #2c3e50;
    color: white;
  }
  
  .btn:hover {
    background-color: #2c3e50;
    color: white;
  }
  
  /* SLIDESHOW */
  .slideshow {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
  
  .slides img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slide-controls {
    position: absolute;
    bottom: 20px;
    right: 30px;
    display: flex;
    gap: 10px;
  }
  
  .slide-controls button {
    background: rgba(0,0,0,0.5);
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* GIỚI THIỆU */
  .about {
    padding: 60px 30px;
    text-align: center;
    background-color: #f6f8fc;
  }
  
  .about h2 {
    margin-bottom: 12px;
  }
  
  /* DỊCH VỤ */
  .services {
    padding: 60px 30px;
    background-color: #ffffff;
    text-align: center;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 24px;
  }
  
  .card {
    width: 260px;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-4px);
  }
  
  .card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  
  .card h3 {
    margin: 10px 0 4px;
  }
  
  .card p {
    font-size: 14px;
    padding: 0 10px 10px;
  }
  
  .btn-link {
    background: none;
    border: none;
    color: #2c3e50;
    cursor: pointer;
    margin-bottom: 12px;
    font-weight: bold;
  }
  
  /* ƯU ĐÃI */
  .promo {
    background: linear-gradient(to right, #00c6ff, #0072ff);
    color: white;
    text-align: center;
    padding: 50px 20px;
  }
  
  .promo h2 {
    margin-bottom: 10px;
  }
  
  /* FOOTER */
  .footer {
    background: #2c3e50;
    color: white;
    padding: 30px 20px;
    text-align: center;
  }
  
  .footer .social {
    margin: 10px 0;
  }
  
  .footer a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  </style>
  