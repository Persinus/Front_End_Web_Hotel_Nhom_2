<template>
  <div class="home-landing">
    <TheHeader />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <va-icon name="verified" size="small" />
          <span>Đáng tin cậy từ 2015</span>
        </div>
        <h1 class="hero-title">
          Khám phá những địa điểm 
          <span class="highlight">hấp dẫn nhất</span>
        </h1>
        <p class="hero-subtitle">
          Tìm kiếm cuộc phiêu lưu tiếp theo của bạn cùng chúng tôi.<br>
          Hơn 10,000+ khách sạn và điểm đến trên toàn thế giới.
        </p>
        
        <div class="hero-search-container">
          <div class="search-tabs">
            <button class="search-tab active">
              <va-icon name="hotel" size="small" />
              Khách sạn
            </button>
            <button class="search-tab">
              <va-icon name="flight" size="small" />
              Chuyến bay
            </button>
            <button class="search-tab">
              <va-icon name="car" size="small" />
              Thuê xe
            </button>
          </div>
          
          <div class="hero-search">
            <div class="search-field">
              <va-icon name="location_on" class="search-icon" />
              <va-input 
                placeholder="Điểm đến hoặc tên khách sạn..." 
                class="search-input"
                v-model="searchQuery"
              />
            </div>
            <div class="search-field date-field">
              <va-icon name="calendar_today" class="search-icon" />
              <va-input 
                placeholder="Ngày nhận phòng" 
                class="search-input"
                type="date"
              />
            </div>
            <div class="search-field date-field">
              <va-icon name="calendar_today" class="search-icon" />
              <va-input 
                placeholder="Ngày trả phòng" 
                class="search-input"
                type="date"
              />
            </div>
            <div class="search-field guest-field">
              <va-icon name="person" class="search-icon" />
              <va-select 
                placeholder="Khách" 
                class="search-input"
                :options="guestOptions"
              />
            </div>
            <va-button color="primary" class="search-btn">
              <va-icon name="search" />
              Tìm kiếm
            </va-button>
          </div>
        </div>

        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">10,000+</span>
            <span class="stat-label">Khách sạn</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Quốc gia</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">1M+</span>
            <span class="stat-label">Khách hàng</span>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <img class="hero-bg" src="https://i.imgur.com/0y8Ftya.png" alt="Travel Destinations" />
        <div class="floating-cards">
          <div class="floating-card">
            <va-icon name="star" color="warning" />
            <span>4.8/5 Đánh giá</span>
          </div>
          <div class="floating-card">
            <va-icon name="verified" color="success" />
            <span>Đặt phòng an toàn</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section class="quick-actions">
      <div class="container">
        <div class="action-cards">
          <div class="action-card" v-for="action in quickActions" :key="action.title">
            <div class="action-icon">
              <va-icon :name="action.icon" size="large" :color="action.color" />
            </div>
            <h3>{{ action.title }}</h3>
            <p>{{ action.desc }}</p>
            <va-button preset="plain" :color="action.color">
              {{ action.buttonText }}
              <va-icon name="arrow_forward" size="small" />
            </va-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Điểm đến phổ biến -->
    <section class="section destinations-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group">
            <h2 class="section-title">Điểm đến phổ biến</h2>
            <p class="section-subtitle">Khám phá những địa điểm được yêu thích nhất</p>
          </div>
          <va-button preset="plain" color="primary" class="see-all">
            Xem tất cả
            <va-icon name="arrow_forward" size="small" />
          </va-button>
        </div>
        
        <div class="destinations-grid">
          <div class="destination-card featured" v-if="destinations[0]">
            <img :src="destinations[0].img" class="destination-img" />
            <div class="destination-overlay">
              <div class="destination-content">
                <h3>{{ destinations[0].title }}</h3>
                <p>{{ destinations[0].hotels || '120+' }} khách sạn</p>
                <div class="destination-rating">
                  <va-icon name="star" color="warning" size="small" />
                  <span>4.8</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="destinations-list">
            <div class="destination-card" v-for="item in destinations.slice(1)" :key="item.title">
              <img :src="item.img" class="destination-img" />
              <div class="destination-overlay">
                <div class="destination-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.hotels || '80+' }} khách sạn</p>
                  <div class="destination-rating">
                    <va-icon name="star" color="warning" size="small" />
                    <span>4.{{ Math.floor(Math.random() * 3) + 6 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Khách sạn nổi bật -->
    <section class="section hotels-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group">
            <h2 class="section-title">Khách sạn nổi bật</h2>
            <p class="section-subtitle">Những lựa chọn hàng đầu được khách hàng tin tưởng</p>
          </div>
          <va-button preset="plain" color="primary" class="see-all">
            Xem tất cả
            <va-icon name="arrow_forward" size="small" />
          </va-button>
        </div>
        
        <div class="hotels-grid">
          <div class="hotel-card" v-for="item in hotels" :key="item.title">
            <div class="hotel-image-container">
              <img :src="item.img" class="hotel-img" />
              <div class="hotel-badge">
                <va-icon name="verified" size="small" />
                Được xác minh
              </div>
              <button class="wishlist-btn">
                <va-icon name="favorite_border" />
              </button>
            </div>
            
            <div class="hotel-content">
              <div class="hotel-header">
                <h3 class="hotel-title">{{ item.title }}</h3>
                <div class="hotel-rating">
                  <div class="stars">
                    <va-icon name="star" color="warning" v-for="n in item.stars" :key="n" size="small" />
                  </div>
                  <span class="rating-text">{{ item.stars }}.0</span>
                </div>
              </div>
              
              <p class="hotel-desc">{{ item.desc }}</p>
              
              <div class="hotel-amenities">
                <span class="amenity" v-for="amenity in item.amenities || ['WiFi', 'Bể bơi', 'Spa']" :key="amenity">
                  {{ amenity }}
                </span>
              </div>
              
              <div class="hotel-footer">
                <div class="price-group">
                  <span class="price-label">Từ</span>
                  <span class="price">{{ item.price || '1,200,000' }}₫</span>
                  <span class="price-unit">/đêm</span>
                </div>
                <va-button color="primary" size="small">
                  Đặt ngay
                </va-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ưu đại đặc biệt -->
    <section class="section deals-section">
      <div class="container">
        <div class="deals-banner">
          <div class="deals-content">
            <div class="deals-badge">
              <va-icon name="local_offer" />
              Ưu đãi đặc biệt
            </div>
            <h2>Tiết kiệm đến 40% cho kỳ nghỉ tiếp theo</h2>
            <p>Đặt phòng ngay hôm nay và nhận ngay ưu đãi hấp dẫn</p>
            <div class="deals-actions">
              <va-button color="primary" size="large">
                Khám phá ưu đãi
              </va-button>
              <va-button preset="plain" color="primary" size="large">
                Tìm hiểu thêm
              </va-button>
            </div>
          </div>
          <div class="deals-visual">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="Special Deals" />
          </div>
        </div>
      </div>
    </section>

    <!-- Bài viết du lịch -->
    <section class="section articles-section">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group">
            <h2 class="section-title">Cẩm nang du lịch</h2>
            <p class="section-subtitle">Những bài viết hữu ích cho chuyến đi của bạn</p>
          </div>
          <va-button preset="plain" color="primary" class="see-all">
            Xem tất cả
            <va-icon name="arrow_forward" size="small" />
          </va-button>
        </div>
        
        <div class="articles-grid">
          <article class="article-card" v-for="item in articles" :key="item.title">
            <div class="article-image">
              <img :src="item.img" :alt="item.title" />
              <div class="article-category">{{ item.category || 'Mẹo du lịch' }}</div>
            </div>
            <div class="article-content">
              <h3 class="article-title">{{ item.title }}</h3>
              <p class="article-desc">{{ item.desc }}</p>
              <div class="article-meta">
                <span class="article-date">{{ item.date || '5 ngày trước' }}</span>
                <span class="article-read-time">{{ item.readTime || '3 phút đọc' }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Về chúng tôi -->
    <section class="section about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-visual">
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" class="about-img" />
            <div class="about-stats">
              <div class="about-stat">
                <span class="stat-number">8+</span>
                <span class="stat-label">Năm kinh nghiệm</span>
              </div>
              <div class="about-stat">
                <span class="stat-number">99%</span>
                <span class="stat-label">Khách hàng hài lòng</span>
              </div>
            </div>
          </div>
          
          <div class="about-text">
            <div class="about-badge">
              <va-icon name="verified" />
              Về chúng tôi
            </div>
            <h2>Đối tác đáng tin cậy cho mọi chuyến đi</h2>
            <p>
              Chúng tôi đam mê du lịch và khách sạn. Với hơn 8 năm kinh nghiệm trong ngành, 
              sứ mệnh của chúng tôi là giúp bạn khám phá những địa điểm và trải nghiệm tốt nhất 
              trên khắp thế giới với giá cả hợp lý nhất.
            </p>
            <div class="about-features">
              <div class="feature-item">
                <va-icon name="verified_user" color="success" />
                <span>Đặt phòng an toàn & bảo mật</span>
              </div>
              <div class="feature-item">
                <va-icon name="support_agent" color="primary" />
                <span>Hỗ trợ 24/7</span>
              </div>
              <div class="feature-item">
                <va-icon name="price_check" color="warning" />
                <span>Giá tốt nhất được đảm bảo</span>
              </div>
            </div>
            <va-button color="primary" size="large">
              Tìm hiểu thêm
            </va-button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <h2>Đừng bỏ lỡ ưu đãi đặc biệt</h2>
            <p>Đăng ký nhận bản tin để cập nhật những ưu đãi và điểm đến mới nhất</p>
          </div>
          <div class="newsletter-form">
            <va-input 
              placeholder="Nhập email của bạn..." 
              class="newsletter-input"
              v-model="email"
            />
            <va-button color="primary" size="large">
              Đăng ký
            </va-button>
          </div>
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheHeader from '../Component/Header.vue'
import TheFooter from '../Component/Footer.vue'

const searchQuery = ref('')
const email = ref('')

const guestOptions = [
  '1 khách',
  '2 khách', 
  '3 khách',
  '4+ khách'
]

const quickActions = [
  {
    title: 'Đặt phòng nhanh',
    desc: 'Tìm và đặt phòng chỉ trong vài phút',
    icon: 'hotel',
    color: 'primary',
    buttonText: 'Đặt ngay'
  },
  {
    title: 'Ưu đãi độc quyền',
    desc: 'Nhận giá tốt nhất chỉ có tại đây',
    icon: 'local_offer',
    color: 'success',
    buttonText: 'Xem ưu đãi'
  },
  {
    title: 'Hỗ trợ 24/7',
    desc: 'Đội ngũ hỗ trợ luôn sẵn sàng giúp bạn',
    icon: 'support_agent',
    color: 'info',
    buttonText: 'Liên hệ'
  }
]

const destinations = [
  { title: 'Bali', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', hotels: '150+' },
  { title: 'Rome', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b', hotels: '200+' },
  { title: 'Santorini', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', hotels: '80+' },
  { title: 'Paris', img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', hotels: '300+' },
  { title: 'London', img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99', hotels: '250+' },
  { title: 'Tokyo', img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad', hotels: '180+' },
]

const hotels = [
  { 
    title: 'Sunset Resort & Spa', 
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', 
    stars: 5, 
    desc: 'Khu nghỉ dưỡng sang trọng với view biển tuyệt đẹp và dịch vụ spa đẳng cấp thế giới.',
    amenities: ['WiFi miễn phí', 'Bể bơi', 'Spa', 'Nhà hàng'],
    price: '2,500,000'
  },
  { 
    title: 'Mountain Grand Lodge', 
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b', 
    stars: 4, 
    desc: 'Lodge ấm cúng trong núi với không gian yên tĩnh và phong cảnh thiên nhiên tuyệt vời.',
    amenities: ['WiFi miễn phí', 'Nhà hàng', 'Bar', 'Gym'],
    price: '1,800,000'
  },
  { 
    title: 'Metropolitan Hotel', 
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', 
    stars: 4, 
    desc: 'Khách sạn hiện đại tại trung tâm thành phố với tiện nghi đầy đủ và dịch vụ chuyên nghiệp.',
    amenities: ['WiFi miễn phí', 'Phòng gym', 'Trung tâm thương mại', 'Concierge'],
    price: '1,200,000'
  },
]

const articles = [
  { 
    title: 'Hành trình khám phá bờ biển tuyệt đẹp', 
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2', 
    desc: 'Những mẹo hữu ích cho chuyến đi dài ngày khám phá các bờ biển đẹp nhất thế giới.',
    category: 'Hướng dẫn',
    date: '3 ngày trước',
    readTime: '5 phút đọc'
  },
  { 
    title: 'Trải nghiệm văn hóa địa phương', 
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', 
    desc: 'Cách hòa mình vào văn hóa và truyền thống địa phương để có trải nghiệm du lịch ý nghĩa.',
    category: 'Văn hóa',
    date: '1 tuần trước',
    readTime: '4 phút đọc'
  },
  { 
    title: 'Bí quyết đóng gói hành lý thông minh', 
    img: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99', 
    desc: 'Hướng dẫn chi tiết cách đóng gói hành lý hiệu quả cho mọi loại hình du lịch.',
    category: 'Mẹo hay',
    date: '2 tuần trước',
    readTime: '3 phút đọc'
  },
]
</script>

<style scoped>
.home-landing {
  background: #fafbfc;
  min-height: 100vh;
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 80px 0 120px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: 90vh;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
  padding: 0 20px;
  flex: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.highlight {
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-search-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.search-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.search-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  background: transparent;
  color: #666;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-tab.active {
  background: #667eea;
  color: white;
}

.hero-search {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.search-field {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  z-index: 2;
}

.search-input {
  padding-left: 40px !important;
}

.search-btn {
  padding: 12px 24px;
  font-weight: 600;
  border-radius: 8px;
  white-space: nowrap;
}

.hero-stats {
  display: flex;
  gap: 32px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #ffd700;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.hero-visual {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-bg {
  max-width: 500px;
  width: 100%;
  height: auto;
  opacity: 0.9;
}

.floating-cards {
  position: absolute;
  top: 20%;
  right: 10%;
}

.floating-card {
  background: white;
  color: #333;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  animation: float 3s ease-in-out infinite;
}

.floating-card:nth-child(2) {
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Quick Actions */
.quick-actions {
  padding: 80px 0;
  background: white;
  margin-top: -60px;
  position: relative;
  z-index: 3;
}

.action-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.action-card {
  text-align: center;
  padding: 40px 24px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.action-icon {
  margin-bottom: 20px;
}

.action-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
}

.action-card p {
  color: #666;
  margin-bottom: 24px;
  line-height: 1.6;
}

/* Sections */
.section {
  padding: 80px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 48px;
}

.section-title-group h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.section-subtitle {
  color: #666;
  font-size: 1.1rem;
}

.see-all {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

/* Destinations */
.destinations-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  height: 500px;
}

.destinations-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.destination-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.destination-card:hover {
  transform: scale(1.02);
}

.destination-card.featured {
  grid-row: span 2;
}

.destination-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 24px;
  color: white;
}

.destination-content h3 {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.destination-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.destination-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
}

/* Hotels */
.hotels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.hotel-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hotel-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.hotel-image-container {
  position: relative;
}

.hotel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.hotel-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.wishlist-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.wishlist-btn:hover {
  background: white;
  transform: scale(1.1);
}

.hotel-content {
  padding: 24px;
}

.hotel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.hotel-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
}

.hotel-rating {
  display: flex;
  align-items: center;
  gap: 8px;
}

.rating-text {
  font-weight: 600;
  color: #333;
}

.hotel-desc {
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.hotel-amenities {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.amenity {
  background: #f8f9fa;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  color: #666;
}

.hotel-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-group {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.price-label {
  font-size: 0.9rem;
  color: #666;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.price-unit {
  font-size: 0.9rem;
  color: #666;
}

/* Deals Section */
.deals-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.deals-banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.deals-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 24px;
}

.deals-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.deals-content p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 32px;
}

.deals-actions {
  display: flex;
  gap: 16px;
}

.deals-visual img {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Articles */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.article-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-image {
  position: relative;
}

.article-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-category {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #667eea;
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-content {
  padding: 24px;
}

.article-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
}

.article-desc {
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #999;
}

/* About Section */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-visual {
  position: relative;
}

.about-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
}

.about-stats {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 24px;
}

.about-stat {
  text-align: center;
}

.about-stat .stat-number {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: #667eea;
}

.about-stat .stat-label {
  font-size: 0.9rem;
  color: #666;
}

.about-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f0f4ff;
  color: #667eea;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.about-text h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.3;
}

.about-text p {
  color: #666;
  line-height: 1.7;
  margin-bottom: 32px;
  font-size: 1.1rem;
}

.about-features {
  margin-bottom: 32px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-weight: 500;
  color: #333;
}

/* Newsletter */
.newsletter-section {
  background: #f8f9fa;
  padding: 80px 0;
}

.newsletter-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  background: white;
  padding: 48px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.newsletter-text h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
}

.newsletter-text p {
  color: #666;
  font-size: 1.1rem;
}

.newsletter-form {
  display: flex;
  gap: 16px;
  min-width: 400px;
}

.newsletter-input {
  flex: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 60px 0 80px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-search {
    flex-direction: column;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
    height: auto;
  }
  
  .destinations-list {
    grid-template-columns: 1fr;
  }
  
  .deals-banner,
  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .newsletter-content {
    flex-direction: column;
    text-align: center;
  }
  
  .newsletter-form {
    min-width: auto;
    width: 100%;
  }
}
</style>
