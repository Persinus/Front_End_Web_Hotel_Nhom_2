<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->
<!-- Trang Mạnh Code xin đừng động vào  -->



<template>
  <div class="home-container">
    <!-- Header -->
    <header>
      <TheHeader />
    </header>

    <!-- Slideshow -->
    <div class="slideshow">
      <img :src="slides[currentSlide]" class="slide-img" />
      <div class="slide-overlay">
        <h1>Chào mừng đến với OceanView Resort & Hotel</h1>
        <p>Trải nghiệm kỳ nghỉ tuyệt vời với dịch vụ đẳng cấp và view biển thơ mộng.</p>
        <va-button color="white" text-color="primary" class="explore-btn">Khám phá ngay</va-button>
      </div>
    </div>

    <!-- Video giới thiệu -->
    <div class="video-section">
      <h2>Giới thiệu về khách sạn</h2>
      <video controls autoplay muted loop class="intro-video">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>

    <!-- Dịch vụ nổi bật -->
    <va-card class="section services" outlined>
      <h2>Dịch vụ nổi bật</h2>
      <div class="cards">
        <va-card v-for="service in services" :key="service.title" class="card" outlined>
          <img :src="service.image" class="card-img" />
          <va-card-title>{{ service.title }}</va-card-title>
          <va-card-content>
            <p>{{ service.description }}</p>
          </va-card-content>
          <va-card-actions>
            <va-button preset="plain" color="primary">Xem chi tiết</va-button>
          </va-card-actions>
        </va-card>
      </div>
    </va-card>

    <!-- Ưu đãi đặc biệt -->
    <va-card class="promo" color="info" gradient>
      <h2>🎉 Ưu đãi đặc biệt</h2>
      <p>Giảm 20% khi đặt phòng trong tuần này! Áp dụng đến 15/04/2025.</p>
      <va-button color="white" text-color="primary" class="mt-2">Đặt ngay</va-button>
    </va-card>

    <!-- Footer -->
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheHeader from '../Components/Header.vue'
import TheFooter from '../Components/Footer.vue'

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
  padding-bottom: 40px;
}

header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.slideshow {
  position: relative;
  height: 500px;
  overflow: hidden;
  margin-bottom: 30px;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
}

.slide-overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.slide-overlay p {
  font-size: 1.2rem;
}

.explore-btn {
  margin-top: 20px;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
}

.video-section {
  text-align: center;
  margin: 40px 20px;
}

.video-section h2 {
  margin-bottom: 20px;
  font-size: 2rem;
}

.intro-video {
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.section {
  margin: 40px 20px;
  padding: 20px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.card {
  width: 260px;
}

.card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.promo {
  text-align: center;
  padding: 50px 20px;
  margin: 40px 20px;
}
</style>