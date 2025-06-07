<template>
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
              <va-icon
                name="star"
                color="warning"
                v-for="n in item.stars"
                :key="n"
                size="small"
              />
            </div>
            <span class="rating-text">{{ item.stars }}.0</span>
          </div>
        </div>
        <p class="hotel-desc">{{ item.desc }}</p>
        <div class="hotel-amenities">
          <span
            class="amenity"
            v-for="amenity in item.amenities || ['WiFi', 'Bể bơi', 'Spa']"
            :key="amenity"
          >
            {{ amenity }}
          </span>
        </div>
        <div class="hotel-footer">
          <div class="price-group">
            <span class="price-label">Từ</span>
            <span class="price">{{ item.price || "1,200,000" }}₫</span>
            <span class="price-unit">/đêm</span>
          </div>
          <va-button color="primary" size="small"> Đặt ngay </va-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hotels: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
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
</style>
