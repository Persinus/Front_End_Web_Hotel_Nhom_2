<template>
  <div class="services-grid">
    <div
      v-for="room in rooms"
      :key="room.maPhong"
      class="hotel-card"
    >
      <div class="hotel-image-wrapper">
        <img
          class="hotel-image"
          :src="room.urlAnhChinh || 'https://i.pinimg.com/736x/5c/f2/cd/5cf2cd74c675ddbd78c0defbce34a63d.jpg'"
          :alt="room.loaiPhong || 'Phòng khách sạn'"
        />
        <!-- Badge giảm giá -->
        <div
          v-if="getDiscountPercent(room) > 0"
          class="discount-badge"
        >
          -{{ getDiscountPercent(room) }}%
        </div>
        <!-- Badge stack bên trái -->
        <div class="badge-stack">
          <div v-if="room.soSaoTrungBinh === maxRating" class="badge badge-green" title="Best rating">Best</div>
          <div v-if="bookedMap[room.maPhong] === maxBooked" class="badge badge-blue" title="Most booked">Hot</div>
          <div v-if="room.giaPhong === maxPrice" class="badge badge-orange" title="Highest price">High</div>
          <div v-if="room.giaPhong === minPrice" class="badge badge-purple" title="Lowest price">Low</div>
        </div>
      </div>
      <div class="hotel-card-content">
        <h3 class="hotel-title">{{ room.loaiPhong }}</h3>
        <div class="hotel-info-row">
          <span class="hotel-type">{{ room.loaiPhong }}</span>
          <span
            class="hotel-status"
            :class="room.tinhTrang === '2' ? 'status-booked' : 'status-available'"
          >
            {{ room.tinhTrang === '2' ? 'Đã đặt' : 'Còn trống' }}
          </span>
        </div>
        <div class="hotel-rating">
          <span class="star">★</span>
          <span>{{ room.soSaoTrungBinh }}</span>
          <span class="hotel-booked">({{ bookedMap[room.maPhong] || 0 }} lượt đặt)</span>
        </div>
        <div class="hotel-price-group">
          <span v-if="getDiscountPercent(room) > 0" class="hotel-old-price">
            {{ formatPrice(room.giaPhong) }}
          </span>
          <span class="hotel-price">
            {{ formatPrice(getFinalPrice(room)) }}
          </span>
          <span class="per-night">/ {{ room.donViTinh || 'đêm' }}</span>
        </div>
        <button class="book-btn" :disabled="room.tinhTrang === '2'">
          <i class="fa fa-bed"></i> Đặt phòng
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rooms: { type: Array, required: true },
  maxRating: { type: Number, required: true },
  maxBooked: { type: Number, required: true },
  maxPrice: { type: Number, required: true },
  minPrice: { type: Number, required: true },
  bookedMap: { type: Object, required: true }
})

function getDiscountPercent(room) {
  const giamGia = room.giamGia?.[0]
  if (giamGia && giamGia.giaTriGiam > 0 && room.giaPhong > 0) {
    return Math.round((giamGia.giaTriGiam / room.giaPhong) * 100)
  }
  return 0
}
function getFinalPrice(room) {
  const giamGia = room.giamGia?.[0]
  if (giamGia && giamGia.giaTriGiam > 0) {
    return room.giaPhong - giamGia.giaTriGiam
  }
  return room.giaPhong
}
function formatPrice(val) {
  if (!val) return ''
  return val.toLocaleString('vi-VN') + '₫'
}
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px 22px; /* tăng khoảng cách giữa các card */
  padding: 24px 0 24px 0;
  justify-items: center;
}

.hotel-card {
  width: 100%;
  max-width: 240px;      /* card nhỏ lại */
  min-width: 0;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 8px #0001;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  margin: 0 auto;
}

.hotel-card:hover {
  box-shadow: 0 2px 12px #0002;
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
.discount-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e53e3e;
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  box-shadow: 0 2px 8px #0002;
  z-index: 2;
  border: 2px solid #fff;
}
.badge-stack {
  position: absolute;
  left: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 2;
}
.badge {
  min-width: 30px;
  height: 30px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 2px 8px #0002;
  border: 2px solid #fff;
  letter-spacing: 0.5px;
}
.badge-green { background: #22c55e; }
.badge-blue { background: #0ea5e9; }
.badge-orange { background: #f59e42; }
.badge-purple { background: #a21caf; }
.hotel-card-content {
  padding: 10px 10px 10px 10px;
  border-top: 1px solid #f0f0f0;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.hotel-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.hotel-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  font-size: 0.93em;
}
.hotel-type {
  color: #0ea5e9;
  font-weight: 500;
}
.hotel-status {
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 0.92em;
  font-weight: 500;
}
.status-booked {
  background: #f87171;
  color: #fff;
}
.status-available {
  background: #22c55e;
  color: #fff;
}
.hotel-rating {
  font-size: 0.93rem;
  color: #f59e42;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 4px;
}
.hotel-rating .star {
  color: #f59e42;
}
.hotel-booked {
  color: #888;
  font-size: 0.93em;
  margin-left: 4px;
}
.hotel-price-group {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
}
.hotel-old-price {
  color: #888;
  font-size: 0.98em;
  text-decoration: line-through;
  margin-right: 2px;
}
.hotel-price {
  font-size: 1.08rem;
  font-weight: bold;
  color: #0ea5e9;
}
.per-night {
  font-size: 0.93em;
  color: #888;
}
.book-btn {
  width: 100%;
  background: #0ea5e9;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 7px 0;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: background 0.2s;
  margin-top: 4px;
}
.book-btn:disabled {
  background: #ccc;
  color: #fff;
  cursor: not-allowed;
}
.book-btn:hover:not(:disabled) {
  background: #0369a1;
}

@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .hotel-card {
    max-width: 100%;
  }
}
</style>