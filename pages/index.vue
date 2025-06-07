<template>
  <div class="home-landing">
    <TheHeader />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Khám phá những địa điểm hấp dẫn nhất</h1>
        <p>Tìm kiếm cuộc phiêu lưu tiếp theo của bạn cùng chúng tôi</p>
        <va-button color="primary" class="hero-btn">Khám phá ngay</va-button>
        <div class="hero-search">
          <va-input placeholder="Tìm kiếm điểm đến, khách sạn..." class="search-input" />
          <va-button color="primary" class="search-btn">Tìm kiếm</va-button>
        </div>
        <div class="hero-tags">
          <va-chip v-for="tag in tags" :key="tag" class="mr-2">{{ tag }}</va-chip>
        </div>
      </div>
      <img class="hero-bg" src="https://i.imgur.com/0y8Ftya.png" alt="Earth" />
    </section>

    <!-- Điểm đến phổ biến -->
    <section class="section">
      <div class="section-header">
        <h2>Điểm đến phổ biến</h2>
        <va-button preset="plain" color="primary" class="see-all">Xem tất cả</va-button>
      </div>
      <div class="card-row">
        <va-card
          v-for="item in destinations"
          :key="item.title"
          class="mini-card"
          outlined
        >
          <img :src="item.img" class="mini-card-img" />
          <va-card-title>{{ item.title }}</va-card-title>
        </va-card>
      </div>
    </section>

    <!-- Khách sạn và Nhà hàng -->
    <section class="section">
      <div class="section-header">
        <h2>Khách sạn và Nhà hàng</h2>
        <va-button preset="plain" color="primary" class="see-all">Xem tất cả</va-button>
      </div>
      <div class="card-row">
        <va-card v-for="item in hotels" :key="item.title" class="hotel-card" outlined>
          <img :src="item.img" class="hotel-card-img" />
          <va-card-title>{{ item.title }}</va-card-title>
          <va-card-content>
            <div class="stars">
              <va-icon name="star" color="warning" v-for="n in item.stars" :key="n" />
            </div>
            <p>{{ item.desc }}</p>
          </va-card-content>
        </va-card>
      </div>
    </section>

    <!-- Mẹo và Bài viết du lịch -->
    <section class="section">
      <div class="section-header">
        <h2>Mẹo và Bài viết du lịch</h2>
        <va-button preset="plain" color="primary" class="see-all">Xem tất cả</va-button>
      </div>
      <div class="card-row">
        <va-card v-for="item in articles" :key="item.title" class="article-card" outlined>
          <img :src="item.img" class="article-card-img" />
          <va-card-title>{{ item.title }}</va-card-title>
          <va-card-content>
            <p>{{ item.desc }}</p>
          </va-card-content>
        </va-card>
      </div>
    </section>

    <!-- Hoạt động -->
    <section class="section">
      <div class="section-header">
        <h2>Hoạt động</h2>
        <va-button preset="plain" color="primary" class="see-all">Xem tất cả</va-button>
      </div>
      <div class="card-row">
        <va-card
          v-for="item in activities"
          :key="item.title"
          class="activity-card"
          outlined
        >
          <img :src="item.img" class="activity-card-img" />
          <va-card-title>{{ item.title }}</va-card-title>
        </va-card>
      </div>
    </section>

    <!-- Về chúng tôi -->
    <section class="section about">
      <div class="about-content">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
          class="about-img"
        />
        <div>
          <h2>Về chúng tôi</h2>
          <p>
            Chúng tôi đam mê du lịch và khách sạn. Sứ mệnh của chúng tôi là giúp bạn khám
            phá những địa điểm và trải nghiệm tốt nhất trên khắp thế giới.
          </p>
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "../Component/Header.vue";
import TheFooter from "../Component/Footer.vue";

const tags = ["Biển", "Núi", "Thành phố", "Thiên nhiên", "Phiêu lưu"];

const destinations = [
  { title: "Bali", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { title: "Rome", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b" },
  {
    title: "Santorini",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  { title: "Paris", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca" },
  {
    title: "London",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
  },
  { title: "Tokyo", img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad" },
];

const hotels = [
  {
    title: "Sunset Resort",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    stars: 5,
    desc: "Khu nghỉ dưỡng sang trọng với view biển.",
  },
  {
    title: "Mountain Lodge",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    stars: 4,
    desc: "Lodge ấm cúng trong núi.",
  },
  {
    title: "City Hotel",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    stars: 4,
    desc: "Khách sạn hiện đại tại trung tâm thành phố.",
  },
];

const articles = [
  {
    title: "Hành trình dài đến Ocean",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    desc: "Mẹo cho chuyến đi dài của bạn.",
  },
  {
    title: "Trải nghiệm văn hóa",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    desc: "Khám phá văn hóa và truyền thống địa phương.",
  },
  {
    title: "Ba lô tuyệt vời",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
    desc: "Cách đóng gói cho cuộc phiêu lưu của bạn.",
  },
];

const activities = [
  {
    title: "Lướt sóng",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Leo núi",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
  },
  { title: "Kayak", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
];
</script>

<style scoped>
.home-landing {
  background: #fafbfc;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
}
.hero {
  position: relative;
  background: #181c2a;
  color: #fff;
  padding: 60px 0 120px 0;
  text-align: center;
  overflow: hidden;
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
}
.hero-bg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.9;
}
.hero-btn {
  margin: 24px 0 16px 0;
  font-size: 1.1rem;
  padding: 12px 32px;
  border-radius: 8px;
}
.hero-search {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 24px 0 12px 0;
}
.search-input {
  min-width: 240px;
}
.hero-tags {
  margin-top: 12px;
}
.section {
  margin: 48px auto 0 auto;
  max-width: 1200px;
  padding: 0 16px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.see-all {
  font-size: 0.95rem;
  padding: 0 8px;
}
.card-row {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.mini-card,
.hotel-card,
.article-card,
.activity-card {
  width: 180px;
  min-width: 180px;
  border-radius: 12px;
  overflow: hidden;
}
.mini-card-img,
.hotel-card-img,
.article-card-img,
.activity-card-img {
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}
.hotel-card-img {
  height: 120px;
}
.article-card-img {
  height: 120px;
}
.activity-card-img {
  height: 120px;
}
.stars {
  margin: 6px 0;
}
.about {
  margin-top: 60px;
}
.about-content {
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.about-img {
  width: 220px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
}
</style>
