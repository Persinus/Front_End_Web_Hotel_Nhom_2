<template>
  <div class="home-container">
    <!-- Header -->
    <TheHeader />

    <!-- Promo Banner moved to top -->
    <PromoBanner />

    <!-- Slideshow -->
    <va-card class="slideshow" flat>
      <img :src="slides[currentSlide]" class="slide-img" />
      <div class="slide-controls">
        <va-button icon="chevron_left" @click="prevSlide" />
        <va-button icon="chevron_right" @click="nextSlide" />
      </div>
    </va-card>

    <!-- Giới thiệu -->
    <va-card class="section about" outlined>
      <h2>Giới thiệu về khách sạn</h2>
      <p>
        Trải nghiệm sang trọng, đẳng cấp tại trung tâm thành phố biển Đà Nẵng. OceanView Resort & Hotel mang đến cho bạn kỳ nghỉ tuyệt vời với view biển thơ mộng, tiện nghi hiện đại và dịch vụ tận tâm.
      </p>
    </va-card>

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

    <!-- Slogan & địa chỉ -->
    <va-card class="slogan" outlined>
      <h2>🌟 OceanView Resort & Hotel 🌟</h2>
      <p>
        Chào mừng quý khách đến với OceanView Resort & Hotel, tọa lạc ngay bên bờ biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh. Khách sạn chúng tôi là điểm dừng chân lý tưởng cho chuyến nghỉ dưỡng, hội họp, hay chuyến du lịch khám phá Đà Nẵng của quý khách.
      </p>
      <va-list class="slogan-list">
        <va-list-item>📍 Lô 29, Võ Nguyên Giáp, Quận Sơn Trà, TP. Đà Nẵng</va-list-item>
        <va-list-item>🚗 Cách trung tâm chỉ 10 phút lái xe</va-list-item>
        <va-list-item>🗺 Gần các điểm nổi bật: Ngũ Hành Sơn, Cầu Rồng, Hội An</va-list-item>
        <va-list-item>🍜 Ẩm thực miền Trung đặc sắc, hải sản tươi sống</va-list-item>
        <va-list-item>🏊‍♀️ Hồ bơi vô cực, spa cao cấp, buffet sáng miễn phí</va-list-item>
      </va-list>
    </va-card>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheHeader from '../Components/Header.vue'
import TheFooter from '../Components/Footer.vue'
import PromoBanner from '../Components/PromoBanner.vue'

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
.slideshow {
  position: relative;
  height: 400px;
  overflow: hidden;
  margin-bottom: 30px;
}
.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-controls {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  gap: 10px;
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
.slogan {
  margin: 40px 20px;
  padding: 30px;
}
.slogan-list {
  margin-top: 20px;
}
</style>