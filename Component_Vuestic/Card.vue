<template>
  <div class="hotel-card">
    <div class="hotel-image-wrapper">
      <img
        class="hotel-image"
        :src="room.image || 'https://i.pinimg.com/736x/5c/f2/cd/5cf2cd74c675ddbd78c0defbce34a63d.jpg'"
        :alt="room.title || 'Phòng khách sạn'"
      />
      <button class="favorite-btn" title="Yêu thích">
        <i class="fa fa-heart"></i>
      </button>
      <!-- Badge giảm giá -->
      <div
        v-if="room.discountPercent && room.discountPercent > 0"
        class="discount-badge"
      >
        -{{ room.discountPercent }}%
      </div>
      <!-- Badge stack bên trái -->
      <div class="badge-stack">
        <div
          v-if="isBestRating"
          class="badge badge-green"
          title="Best rating"
        >
          Best
        </div>
        <div
          v-if="isMostBooked"
          class="badge badge-blue"
          title="Most booked"
        >
          Hot
        </div>
        <div
          v-if="isHighestPrice"
          class="badge badge-orange"
          title="Highest price"
        >
          High
        </div>
        <div
          v-if="isLowestPrice"
          class="badge badge-purple"
          title="Lowest price"
        >
          Low
        </div>
      </div>
    </div>
    <div class="hotel-card-content">
      <h3 class="hotel-title">{{ room.title || 'Phòng Deluxe View Biển' }}</h3>
      <div class="hotel-rating">
        <span class="star">★</span>
        <span>{{ room.rating || 4.5 }}</span>
        <span class="hotel-booked">({{ room.booked || 123 }} lượt đặt)</span>
      </div>
      <p class="hotel-desc">
        {{ room.desc || '2 khách • 1 giường đôi lớn • Bồn tắm • Hướng biển' }}
      </p>
      <div class="hotel-price-group">
        <span
          v-if="room.discountPercent && room.discountPercent > 0"
          class="hotel-old-price"
        >
          {{ room.oldPrice || room.price || '2.345.000₫' }}
        </span>
        <span class="hotel-price">
          {{ room.price || '2.345.000₫' }}
        </span>
        <span class="per-night">/ đêm</span>
      </div>
      <button class="book-btn">
        <i class="fa fa-bed"></i> Đặt phòng
      </button>
    </div>
  </div>
</template>

<script setup>
const room = {
  image: 'https://i.pinimg.com/736x/5c/f2/cd/5cf2cd74c675ddbd78c0defbce34a63d.jpg',
  title: 'Phòng Deluxe View Biển',
  rating: 4.2,
  booked: 500,
  desc: '2 khách • 1 giường đôi lớn • Bồn tắm • Hướng biển',
  price: 1880000,         // số để so sánh
  oldPrice: 2350000,
  discountPercent: 20
}

// Giả lập dữ liệu nhiều phòng để xác định loại badge
const allRooms = [
  { rating: 4.5, booked: 123, price: 2100000 },
  { rating: 4.8, booked: 80, price: 3200000 },
  { rating: 4.2, booked: 200, price: 1500000 },
  { rating: 4.2, booked: 500, price: 1880000 }, // phòng hiện tại
]

// Tìm các giá trị max/min
const maxRating = Math.max(...allRooms.map(r => r.rating))
const maxBooked = Math.max(...allRooms.map(r => r.booked))
const maxPrice = Math.max(...allRooms.map(r => r.price))
const minPrice = Math.min(...allRooms.map(r => r.price))

const isBestRating = room.rating === maxRating
const isMostBooked = room.booked === maxBooked
const isHighestPrice = room.price === maxPrice
const isLowestPrice = room.price === minPrice
</script>

<style scoped>
.hotel-card {
  width: 290px;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 12px #0001;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}
.hotel-card:hover {
  box-shadow: 0 4px 18px #0002;
}
.hotel-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}
.hotel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.favorite-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px #0002;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e53e3e;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}
.favorite-btn:hover {
  background: #ffeaea;
}
/* Badge giảm giá */
.discount-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #e53e3e;
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.08rem;
  box-shadow: 0 2px 8px #0002;
  z-index: 2;
  border: 3px solid #fff;
}
/* Badge stack bên trái */
.badge-stack {
  position: absolute;
  left: 12px;
  top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
}
.badge {
  min-width: 38px;
  height: 38px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 2px 8px #0002;
  border: 2px solid #fff;
  letter-spacing: 0.5px;
}
.badge-green {
  background: #22c55e;
}
.badge-blue {
  background: #0ea5e9;
}
.badge-orange {
  background: #f59e42;
}
.badge-purple {
  background: #a21caf;
}
.hotel-card-content {
  padding: 16px 14px 14px 14px;
  border-top: 1px solid #f0f0f0;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.hotel-title {
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.hotel-rating {
  font-size: 0.98rem;
  color: #f59e42;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 6px;
}
.hotel-rating .star {
  color: #f59e42;
}
.hotel-booked {
  color: #888;
  font-size: 0.95em;
  margin-left: 4px;
}
.hotel-desc {
  color: #666;
  font-size: 0.97rem;
  margin-bottom: 10px;
}
.hotel-price-group {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;
}
.hotel-old-price {
  color: #888;
  font-size: 1rem;
  text-decoration: line-through;
  margin-right: 4px;
}
.hotel-price {
  font-size: 1.13rem;
  font-weight: bold;
  color: #0ea5e9;
}
.per-night {
  font-size: 0.98em;
  color: #888;
}
.book-btn {
  width: 100%;
  background: #0ea5e9;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 9px 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background 0.2s;
}
.book-btn:hover {
  background: #0369a1;
}
</style>