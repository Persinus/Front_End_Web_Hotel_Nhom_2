<template>
  <div class="room-map-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <!-- Header Section -->
    <div class="map-header" :class="{ 'animate-in': isVisible }">
      <div class="header-content">
        <div class="header-icon">
          <svg viewBox="0 0 24 24" class="icon-svg">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <h1 class="page-title">
          <span class="title-line">Sơ đồ phòng</span>
          <span class="title-highlight">OceanView Hotels</span>
        </h1>
        <p class="page-subtitle">Khám phá bố cục và vị trí các phòng trong khách sạn của chúng tôi</p>
      </div>
    </div>

    <!-- Controls Section -->
    <div class="controls-section" :class="{ 'animate-in': isVisible }">
      <div class="controls-container">
        <!-- Search & Filter -->
        <div class="search-filter">
          <div class="search-box">
            <svg viewBox="0 0 24 24" class="search-icon">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Tìm kiếm phòng..."
              class="search-input"
            />
          </div>
          
          <div class="filter-dropdown">
            <select v-model="selectedFloor" class="floor-select">
              <option value="">Tất cả tầng</option>
              <option v-for="floor in floors" :key="floor" :value="floor">
                Tầng {{ floor }}
              </option>
            </select>
          </div>
          
          <div class="filter-dropdown">
            <select v-model="selectedType" class="type-select">
              <option value="">Tất cả loại phòng</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
              <option value="dorm">Dorm</option>
            </select>
          </div>
        </div>

        <!-- View Controls -->
        <div class="view-controls">
          <div class="view-toggle">
            <button 
              class="view-btn" 
              :class="{ 'active': viewMode === 'grid' }"
              @click="viewMode = 'grid'"
              title="Xem dạng lưới"
            >
              <svg viewBox="0 0 24 24">
                <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2h8v8h-8v-8zm2 2h4v4h-4v-4z"/>
              </svg>
            </button>
            <button 
              class="view-btn" 
              :class="{ 'active': viewMode === 'map' }"
              @click="viewMode = 'map'"
              title="Xem dạng bản đồ"
            >
              <svg viewBox="0 0 24 24">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/>
              </svg>
            </button>
          </div>
          
          <button class="zoom-btn" @click="resetZoom" title="Đặt lại zoom">
            <svg viewBox="0 0 24 24">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Legend -->
    <div class="legend-section" :class="{ 'animate-in': isVisible }">
      <div class="legend-container">
        <h3 class="legend-title">
          <svg viewBox="0 0 24 24" class="legend-icon">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Chú thích
        </h3>
        <div class="legend-items">
          <div class="legend-item standard" @click="filterByType('standard')">
            <div class="legend-color"></div>
            <span class="legend-text">Standard Room</span>
            <span class="legend-count">({{ getRoomCountByType('standard') }})</span>
          </div>
          <div class="legend-item deluxe" @click="filterByType('deluxe')">
            <div class="legend-color"></div>
            <span class="legend-text">Deluxe Room</span>
            <span class="legend-count">({{ getRoomCountByType('deluxe') }})</span>
          </div>
          <div class="legend-item suite" @click="filterByType('suite')">
            <div class="legend-color"></div>
            <span class="legend-text">Suite Room</span>
            <span class="legend-count">({{ getRoomCountByType('suite') }})</span>
          </div>
          <div class="legend-item dorm" @click="filterByType('dorm')">
            <div class="legend-color"></div>
            <span class="legend-text">Dorm Room</span>
            <span class="legend-count">({{ getRoomCountByType('dorm') }})</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="map-content">
      <!-- Grid View -->
      <div v-if="viewMode === 'grid'" class="grid-view">
        <div 
          v-for="floor in filteredFloors" 
          :key="floor" 
          class="floor-section"
          :class="{ 'animate-in': isVisible }"
          :style="{ animationDelay: `${floor * 0.1}s` }"
        >
          <div class="floor-header">
            <div class="floor-info">
              <h3 class="floor-title">
                <svg viewBox="0 0 24 24" class="floor-icon">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
                Tầng {{ floor }}
              </h3>
              <span class="room-count">{{ getFilteredRoomsByFloor(floor).length }} phòng</span>
            </div>
            <button 
              class="collapse-btn" 
              @click="toggleFloorCollapse(floor)"
              :class="{ 'collapsed': collapsedFloors.includes(floor) }"
            >
              <svg viewBox="0 0 24 24">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
              </svg>
            </button>
          </div>
          
          <div 
            class="floor-grid" 
            v-show="!collapsedFloors.includes(floor)"
            :style="{ '--room-count': getFilteredRoomsByFloor(floor).length }"
          >
            <div
              v-for="(room, index) in getFilteredRoomsByFloor(floor)"
              :key="room.maPhong"
              class="room-card"
              :class="[room.typeClass, { 'selected': selectedRoom?.maPhong === room.maPhong }]"
              @click="selectRoom(room)"
              :style="{ animationDelay: `${index * 0.05}s` }"
            >
              <div class="room-header">
                <span class="room-number">{{ room.maPhong }}</span>
                <div class="room-status" :class="getRoomStatus(room)">
                  <svg viewBox="0 0 24 24" class="status-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <div class="room-info">
                <span class="room-type">{{ room.shortType }}</span>
                <span class="room-price">{{ formatPrice(room.giaPhong) }}</span>
              </div>
              <div class="room-features">
                <div class="feature-item" v-for="feature in room.tienNghiList.slice(0, 2)" :key="feature">
                  <svg viewBox="0 0 24 24" class="feature-icon">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>{{ feature }}</span>
                </div>
                <span v-if="room.tienNghiList.length > 2" class="more-features">
                  +{{ room.tienNghiList.length - 2 }} tiện nghi khác
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map View -->
      <div v-else class="map-view">
        <div class="interactive-map" ref="mapContainer">
          <div 
            v-for="floor in filteredFloors" 
            :key="floor" 
            class="floor-map"
            :class="{ 'active': activeFloor === floor }"
          >
            <div class="floor-layout">
              <div class="building-structure">
                <!-- Elevator -->
                <div class="elevator">
                  <svg viewBox="0 0 24 24" class="elevator-icon">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 6h2v5H8V6zm6 12h-4v-5h4v5zm0-7h-4V6h4v5z"/>
                  </svg>
                  <span>Thang máy</span>
                </div>
                
                <!-- Stairs -->
                <div class="stairs">
                  <svg viewBox="0 0 24 24" class="stairs-icon">
                    <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                  <span>Cầu thang</span>
                </div>
                
                <!-- Rooms positioned on map -->
                <div
                  v-for="(room, index) in getFilteredRoomsByFloor(floor)"
                  :key="room.maPhong"
                  class="room-marker"
                  :class="[room.typeClass, { 'selected': selectedRoom?.maPhong === room.maPhong }]"
                  :style="getRoomPosition(room, index, getFilteredRoomsByFloor(floor).length)"
                  @click="selectRoom(room)"
                >
                  <div class="marker-content">
                    <span class="marker-number">{{ room.maPhong }}</span>
                    <div class="marker-popup">
                      <div class="popup-content">
                        <h4>{{ room.loaiPhong }}</h4>
                        <p>{{ formatPrice(room.giaPhong) }}/đêm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floor Navigation -->
          <div class="floor-navigation">
            <button 
              v-for="floor in floors" 
              :key="floor"
              class="floor-nav-btn"
              :class="{ 'active': activeFloor === floor }"
              @click="activeFloor = floor"
            >
              {{ floor }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Room Details Modal -->
    <div class="modal-overlay" v-if="selectedRoom" @click.self="closeModal">
      <div class="modal-container" :class="{ 'animate-in': selectedRoom }">
        <div class="modal-header">
          <div class="modal-title">
            <h2>{{ selectedRoom.loaiPhong }}</h2>
            <span class="room-number-badge">Phòng {{ selectedRoom.maPhong }}</span>
          </div>
          <button class="close-btn" @click="closeModal">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-content">
          <div class="modal-left">
            <div class="room-image">
              <img 
                :src="selectedRoom.urlAnhChinh || getDefaultRoomImage(selectedRoom.typeClass)" 
                :alt="selectedRoom.loaiPhong" 
                @error="handleImageError"
              />
              <div class="image-overlay">
                <div class="room-type-badge" :class="selectedRoom.typeClass">
                  {{ selectedRoom.loaiPhong }}
                </div>
              </div>
            </div>
            
            <div class="room-gallery" v-if="selectedRoom.gallery">
              <div class="gallery-item" v-for="(image, index) in selectedRoom.gallery" :key="index">
                <img :src="image" :alt="`Room ${selectedRoom.maPhong} - ${index + 1}`" />
              </div>
            </div>
          </div>
          
          <div class="modal-right">
            <div class="room-details">
              <div class="detail-section">
                <h3>
                  <svg viewBox="0 0 24 24" class="section-icon">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Thông tin cơ bản
                </h3>
                <div class="detail-grid">
                  <div class="detail-item">
                    <span class="detail-label">Loại giường:</span>
                    <span class="detail-value">{{ selectedRoom.kieuGiuong || 'Không xác định' }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Tầng:</span>
                    <span class="detail-value">{{ selectedRoom.tang }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">View:</span>
                    <span class="detail-value">{{ selectedRoom.view || 'Không xác định' }}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Diện tích:</span>
                    <span class="detail-value">{{ selectedRoom.dienTich || 'Không xác định' }} m²</span>
                  </div>
                </div>
              </div>
              
              <div class="detail-section">
                <h3>
                  <svg viewBox="0 0 24 24" class="section-icon">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Tiện nghi
                </h3>
                <div class="amenities-list">
                  <div 
                    class="amenity-item" 
                    v-for="amenity in selectedRoom.tienNghiList" 
                    :key="amenity"
                  >
                    <svg viewBox="0 0 24 24" class="amenity-icon">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>{{ amenity }}</span>
                  </div>
                </div>
              </div>
              
              <div class="detail-section">
                <h3>
                  <svg viewBox="0 0 24 24" class="section-icon">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                  </svg>
                  Giá phòng
                </h3>
                <div class="price-info">
                  <div class="price-main">
                    <span class="price-amount">{{ formatPrice(selectedRoom.giaPhong) }}</span>
                    <span class="price-unit">VNĐ / đêm</span>
                  </div>
                  <div class="price-note">* Giá đã bao gồm thuế và phí dịch vụ</div>
                </div>
              </div>
            </div>
            
            <div class="modal-actions">
              <button class="action-btn secondary" @click="closeModal">
                <svg viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
                Đóng
              </button>
              <button class="action-btn primary" @click="bookRoom(selectedRoom)">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                Đặt phòng ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" :class="[toastType, { 'show': showToast }]">
      <div class="toast-content">
        <svg v-if="toastType === 'success'" viewBox="0 0 24 24" class="toast-icon">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" class="toast-icon">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useNuxtApp } from '#app'

// Reactive data
const selectedRoom = ref(null)
const rooms = ref([])
const floors = ref([])
const isVisible = ref(false)
const searchQuery = ref('')
const selectedFloor = ref('')
const selectedType = ref('')
const viewMode = ref('grid')
const activeFloor = ref(1)
const collapsedFloors = ref([])
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

const { $api } = useNuxtApp()

// Computed properties
const filteredFloors = computed(() => {
  if (selectedFloor.value) {
    return [parseInt(selectedFloor.value)]
  }
  return floors.value
})

const filteredRooms = computed(() => {
  return rooms.value.filter(room => {
    const matchesSearch = room.maPhong.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         room.loaiPhong.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesFloor = !selectedFloor.value || room.tang === parseInt(selectedFloor.value)
    const matchesType = !selectedType.value || room.typeClass === selectedType.value
    
    return matchesSearch && matchesFloor && matchesType
  })
})

// Methods
const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message
  toastType.value = type
  showToast.value = true
  
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price)
}

const getRoomsByFloor = (floor) => {
  return rooms.value.filter(room => room.tang === floor)
}

const getFilteredRoomsByFloor = (floor) => {
  return filteredRooms.value.filter(room => room.tang === floor)
}

const getRoomCountByType = (type) => {
  return rooms.value.filter(room => room.typeClass === type).length
}

const getRoomStatus = (room) => {
  // Mock status - in real app this would come from API
  const statuses = ['available', 'occupied', 'maintenance']
  return statuses[Math.floor(Math.random() * statuses.length)]
}

const getRoomPosition = (room, index, totalRooms) => {
  const cols = Math.ceil(Math.sqrt(totalRooms))
  const row = Math.floor(index / cols)
  const col = index % cols
  
  return {
    left: `${(col * 120) + 50}px`,
    top: `${(row * 100) + 50}px`
  }
}

const getDefaultRoomImage = (type) => {
  const images = {
    standard: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    deluxe: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    suite: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    dorm: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5'
  }
  return images[type] || images.standard
}

const handleImageError = (event) => {
  event.target.src = getDefaultRoomImage('standard')
}

const selectRoom = (room) => {
  selectedRoom.value = room
  showToastMessage(`Đã chọn phòng ${room.maPhong}`)
}

const closeModal = () => {
  selectedRoom.value = null
}

const bookRoom = (room) => {
  showToastMessage(`Chuyển hướng đến trang đặt phòng ${room.maPhong}...`)
  // Navigate to booking page
  setTimeout(() => {
    window.location.href = `/booking?room=${room.maPhong}`
  }, 1000)
}

const filterByType = (type) => {
  selectedType.value = selectedType.value === type ? '' : type
}

const toggleFloorCollapse = (floor) => {
  const index = collapsedFloors.value.indexOf(floor)
  if (index > -1) {
    collapsedFloors.value.splice(index, 1)
  } else {
    collapsedFloors.value.push(floor)
  }
}

const resetZoom = () => {
  showToastMessage('Đã đặt lại zoom')
}

// Lifecycle
onMounted(async () => {
  try {
    const response = await $api.get('http://nhom2webkhachsan.runasp.net/api/PhongWithTienNghi')
    rooms.value = response.data.map(room => ({
      ...room,
      tienNghiList: JSON.parse(room.tienNghi || '[]'),
      shortType: room.loaiPhong.replace(' Room', ''),
      typeClass:
        room.loaiPhong.includes('Standard')
          ? 'standard'
          : room.loaiPhong.includes('Deluxe')
          ? 'deluxe'
          : room.loaiPhong.includes('Suite')
          ? 'suite'
          : 'dorm'
    }))
    floors.value = [...new Set(rooms.value.map(room => room.tang))].sort((a, b) => a - b)
    activeFloor.value = floors.value[0] || 1
    
    setTimeout(() => {
      isVisible.value = true
    }, 100)
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu phòng:', error)
    showToastMessage('Không thể tải dữ liệu phòng', 'error')
  }
})
</script>

<style scoped>
.room-map-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Background Animation */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.floating-shape {
  position: absolute;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 30%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* Header Section */
.map-header {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 80px 20px 40px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.map-header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.header-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.icon-svg {
  width: 40px;
  height: 40px;
  fill: white;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

.title-line {
  color: #2c3e50;
  display: block;
}

.title-highlight {
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  line-height: 1.6;
}

/* Controls Section */
.controls-section {
  position: relative;
  z-index: 2;
  padding: 0 20px 40px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.controls-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.controls-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.search-filter {
  display: flex;
  gap: 16px;
  align-items: center;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  width: 20px;
  height: 20px;
  fill: #64748b;
  z-index: 2;
}

.search-input {
  padding: 10px 16px 10px 44px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  width: 250px;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.filter-dropdown select {
  padding: 10px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-dropdown select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.view-controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.view-toggle {
  display: flex;
  gap: 4px;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 8px;
}

.view-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
}

.view-btn.active {
  background: #667eea;
  color: white;
}

.view-btn svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.zoom-btn {
  width: 40px;
  height: 40px;
  border: 2px solid #667eea;
  background: transparent;
  color: #667eea;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.zoom-btn:hover {
  background: #667eea;
  color: white;
}

.zoom-btn svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

/* Legend Section */
.legend-section {
  position: relative;
  z-index: 2;
  padding: 0 20px 40px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.3s;
}

.legend-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.legend-container {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.legend-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.legend-icon {
  width: 20px;
  height: 20px;
  fill: #667eea;
}

.legend-items {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.legend-item:hover {
  background: rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.legend-item.standard .legend-color {
  background: #3498db;
}

.legend-item.deluxe .legend-color {
  background: #27ae60;
}

.legend-item.suite .legend-color {
  background: #8e44ad;
}

.legend-item.dorm .legend-color {
  background: #f39c12;
}

.legend-text {
  font-weight: 500;
  color: #2c3e50;
}

.legend-count {
  font-size: 0.85rem;
  color: #64748b;
}

/* Main Content */
.map-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px 20px;
}

/* Grid View */
.grid-view {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.floor-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.floor-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.floor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.floor-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.floor-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.floor-icon {
  width: 20px;
  height: 20px;
  fill: #667eea;
}

.room-count {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.collapse-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: #f1f5f9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
}

.collapse-btn:hover {
  background: #e2e8f0;
}

.collapse-btn.collapsed {
  transform: rotate(-90deg);
}

.collapse-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.floor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.room-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: cardSlideUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes cardSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.room-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.room-card.selected {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.05);
}

.room-card.standard {
  border-left: 4px solid #3498db;
}

.room-card.deluxe {
  border-left: 4px solid #27ae60;
}

.room-card.suite {
  border-left: 4px solid #8e44ad;
}

.room-card.dorm {
  border-left: 4px solid #f39c12;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.room-number {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2c3e50;
}

.room-status {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.room-status.available {
  background: #10b981;
}

.room-status.occupied {
  background: #ef4444;
}

.room-status.maintenance {
  background: #f59e0b;
}

.status-icon {
  width: 12px;
  height: 12px;
  fill: white;
}

.room-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.room-type {
  font-size: 0.95rem;
  color: #64748b;
  font-weight: 500;
}

.room-price {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
}

.room-features {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: #64748b;
}

.feature-icon {
  width: 12px;
  height: 12px;
  fill: #10b981;
}

.more-features {
  font-size: 0.8rem;
  color: #94a3b8;
  font-style: italic;
}

/* Map View */
.map-view {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-height: 600px;
}

.interactive-map {
  position: relative;
  width: 100%;
  height: 500px;
  background: #f8fafc;
  border-radius: 12px;
  overflow: hidden;
}

.floor-map {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.floor-map.active {
  opacity: 1;
}

.floor-layout {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f8fafc 25%, transparent 25%), 
              linear-gradient(-45deg, #f8fafc 25%, transparent 25%), 
              linear-gradient(45deg, transparent 75%, #f8fafc 75%), 
              linear-gradient(-45deg, transparent 75%, #f8fafc 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}

.building-structure {
  position: relative;
  width: 100%;
  height: 100%;
}

.elevator,
.stairs {
  position: absolute;
  background: #e2e8f0;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 0.8rem;
  color: #64748b;
  font-weight: 500;
}

.elevator {
  top: 20px;
  right: 20px;
  width: 60px;
  height: 80px;
}

.stairs {
  top: 20px;
  right: 100px;
  width: 60px;
  height: 80px;
}

.elevator-icon,
.stairs-icon {
  width: 20px;
  height: 20px;
  fill: #64748b;
}

.room-marker {
  position: absolute;
  width: 80px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.room-marker.standard {
  background: #3498db;
}

.room-marker.deluxe {
  background: #27ae60;
}

.room-marker.suite {
  background: #8e44ad;
}

.room-marker.dorm {
  background: #f39c12;
}

.room-marker:hover {
  transform: scale(1.1);
  z-index: 10;
}

.room-marker.selected {
  transform: scale(1.2);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.5);
  z-index: 11;
}

.marker-content {
  position: relative;
  color: white;
  font-weight: 600;
  text-align: center;
}

.marker-number {
  font-size: 0.9rem;
}

.marker-popup {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  min-width: 120px;
}

.room-marker:hover .marker-popup {
  opacity: 1;
  pointer-events: auto;
}

.popup-content h4 {
  font-size: 0.85rem;
  color: #2c3e50;
  margin: 0 0 4px 0;
}

.popup-content p {
  font-size: 0.8rem;
  color: #667eea;
  margin: 0;
  font-weight: 600;
}

.floor-navigation {
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 8px;
}

.floor-nav-btn {
  width: 40px;
  height: 40px;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: #64748b;
}

.floor-nav-btn.active {
  border-color: #667eea;
  background: #667eea;
  color: white;
}

.floor-nav-btn:hover:not(.active) {
  border-color: #667eea;
  color: #667eea;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-container {
  background: white;
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.modal-container.animate-in {
  opacity: 1;
  transform: scale(1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.modal-title h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px 0;
}

.room-number-badge {
  background: #667eea;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.close-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: #f1f5f9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
}

.close-btn:hover {
  background: #e2e8f0;
  color: #2c3e50;
}

.close-btn svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.modal-content {
  display: flex;
  max-height: calc(90vh - 140px);
  overflow: hidden;
}

.modal-left {
  flex: 1.2;
  display: flex;
  flex-direction: column;
}

.room-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.room-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.room-type-badge {
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 12px;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

.room-type-badge.standard {
  border-left: 4px solid #3498db;
}

.room-type-badge.deluxe {
  border-left: 4px solid #27ae60;
}

.room-type-badge.suite {
  border-left: 4px solid #8e44ad;
}

.room-type-badge.dorm {
  border-left: 4px solid #f39c12;
}

.room-gallery {
  display: flex;
  gap: 8px;
  padding: 16px;
  overflow-x: auto;
}

.gallery-item {
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-right {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.room-details {
  margin-bottom: 24px;
}

.detail-section {
  margin-bottom: 24px;
}

.detail-section h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.section-icon {
  width: 18px;
  height: 18px;
  fill: #667eea;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-label {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}

.detail-value {
  font-size: 0.95rem;
  color: #2c3e50;
  font-weight: 600;
}

.amenities-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: #64748b;
}

.amenity-icon {
  width: 14px;
  height: 14px;
  fill: #10b981;
}

.price-info {
  background: #f8fafc;
  padding: 16px;
  border-radius: 12px;
}

.price-main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}

.price-amount {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.price-unit {
  font-size: 0.9rem;
  color: #64748b;
}

.price-note {
  font-size: 0.8rem;
  color: #94a3b8;
  font-style: italic;
}

.modal-actions {
  display: flex;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
}

.action-btn.secondary {
  background: #f1f5f9;
  color: #64748b;
}

.action-btn.secondary:hover {
  background: #e2e8f0;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.action-btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.action-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Toast */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #10b981;
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transform: translateX(400px);
  opacity: 0;
  transition: all 0.3s ease;
}

.toast.show {
  transform: translateX(0);
  opacity: 1;
}

.toast.error {
  background: #ef4444;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .controls-container {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
  
  .search-filter {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .search-input {
    width: 200px;
  }
  
  .legend-items {
    justify-content: center;
  }
  
  .floor-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
  
  .modal-content {
    flex-direction: column;
    max-height: calc(90vh - 100px);
  }
  
  .modal-left {
    flex: none;
  }
  
  .room-image {
    height: 250px;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .map-header {
    padding: 60px 20px 30px 20px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .controls-section,
  .legend-section {
    padding: 0 16px 30px 16px;
  }
  
  .controls-container,
  .legend-container {
    padding: 16px;
  }
  
  .search-filter {
    flex-direction: column;
    gap: 12px;
  }
  
  .search-input {
    width: 100%;
  }
  
  .view-controls {
    justify-content: center;
  }
  
  .legend-items {
    flex-direction: column;
    gap: 12px;
  }
  
  .floor-grid {
    grid-template-columns: 1fr;
  }
  
  .room-card {
    padding: 16px;
  }
  
  .interactive-map {
    height: 400px;
  }
  
  .room-marker {
    width: 60px;
    height: 45px;
  }
  
  .marker-number {
    font-size: 0.8rem;
  }
  
  .elevator,
  .stairs {
    width: 50px;
    height: 60px;
    font-size: 0.7rem;
  }
  
  .modal-container {
    margin: 16px;
    max-height: calc(100vh - 32px);
  }
  
  .modal-header {
    padding: 16px;
  }
  
  .modal-right {
    padding: 16px;
  }
  
  .room-image {
    height: 200px;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .toast {
    right: 16px;
    left: 16px;
    transform: translateY(-100px);
  }
  
  .toast.show {
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .floating-shape {
    display: none;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .header-icon {
    width: 60px;
    height: 60px;
  }
  
  .icon-svg {
    width: 30px;
    height: 30px;
  }
  
  .controls-container {
    padding: 12px;
  }
  
  .legend-container {
    padding: 16px 12px;
  }
  
  .floor-section {
    padding: 16px;
  }
  
  .room-card {
    padding: 12px;
  }
  
  .room-header {
    margin-bottom: 8px;
  }
  
  .room-number {
    font-size: 1rem;
  }
  
  .interactive-map {
    height: 300px;
  }
  
  .room-marker {
    width: 50px;
    height: 35px;
  }
  
  .marker-number {
    font-size: 0.7rem;
  }
  
  .floor-navigation {
    bottom: 10px;
    left: 10px;
  }
  
  .floor-nav-btn {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .floating-shape {
    animation: none;
  }
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
  .room-card {
    border-width: 2px;
  }
  
  .room-marker {
    border: 2px solid #000;
  }
  
  .action-btn {
    border: 2px solid transparent;
  }
  
  .action-btn:focus {
    border-color: #000;
  }
}

/* Print Styles */
@media print {
  .background-animation,
  .controls-section,
  .view-controls,
  .modal-overlay,
  .toast {
    display: none;
  }
  
  .room-map-page {
    background: white;
  }
  
  .floor-section,
  .legend-container {
    background: white;
    box-shadow: none;
    border: 1px solid #ccc;
  }
  
  .room-card {
    break-inside: avoid;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Selection Styles */
::selection {
  background: rgba(102, 126, 234, 0.2);
  color: #2c3e50;
}

::-moz-selection {
  background: rgba(102, 126, 234, 0.2);
  color: #2c3e50;
}

/* Focus Styles for Accessibility */
.room-card:focus,
.room-marker:focus,
.action-btn:focus,
.view-btn:focus,
.zoom-btn:focus,
.floor-nav-btn:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

/* Loading Animation */
@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.loading-shimmer {
  animation: shimmer 1.2s ease-in-out infinite;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 100%;
}

/* Tooltip Styles */
.tooltip {
  position: relative;
}

.tooltip::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #2c3e50;
  color: white;
  padding: 6px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  margin-bottom: 4px;
}

.tooltip:hover::before {
  opacity: 1;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  .room-map-page {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: #e2e8f0;
  }
  
  .controls-container,
  .legend-container,
  .floor-section,
  .room-card {
    background: rgba(30, 41, 59, 0.95);
    border-color: rgba(71, 85, 105, 0.3);
  }
  
  .page-title .title-line {
    color: #e2e8f0;
  }
  
  .search-input,
  .filter-dropdown select {
    background: #334155;
    border-color: #475569;
    color: #e2e8f0;
  }
  
  .room-number,
  .legend-text,
  .floor-title {
    color: #e2e8f0;
  }
  
  .room-type,
  .legend-count,
  .detail-label {
    color: #94a3b8;
  }
}
</style>
