<template>
  <div class="room-management-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <!-- Header Section -->
    <div class="management-header" :class="{ 'animate-in': isVisible }">
      <div class="header-content">
        <div class="header-icon">
          <svg viewBox="0 0 24 24" class="icon-svg">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
          </svg>
        </div>
        <h1 class="page-title">
          <span class="title-line">Quản lý trạng thái</span>
          <span class="title-highlight">Phòng khách sạn</span>
        </h1>
        <p class="page-subtitle">Theo dõi và quản lý tình trạng phòng theo thời gian thực</p>
      </div>
    </div>

    <!-- Dashboard Stats -->
    <div class="dashboard-stats" :class="{ 'animate-in': isVisible }">
      <div class="stats-container">
        <div class="stat-card available">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-number">{{ availableRooms }}</span>
            <span class="stat-label">Phòng trống</span>
          </div>
        </div>
        
        <div class="stat-card occupied">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-number">{{ occupiedRooms }}</span>
            <span class="stat-label">Đang sử dụng</span>
          </div>
        </div>
        
        <div class="stat-card cleaning">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24">
              <path d="M19.36 2.72L20.78 4.14l-1.93 1.93c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5-.62 0-1.19-.2-1.64-.55L12.93 12l5.78 5.78c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L11.52 13.4 9.8 15.12c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5c.62 0 1.19.2 1.64.55l1.72-1.72L4.43 7.31c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5.78 5.78 2.33-2.33c-.35-.45-.55-1.02-.55-1.64 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .62-.2 1.19-.55 1.64l1.93-1.93z"/>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-number">{{ cleaningRooms }}</span>
            <span class="stat-label">Cần dọn dẹp</span>
          </div>
        </div>
        
        <div class="stat-card revenue">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
          </div>
          <div class="stat-content">
            <span class="stat-number">{{ occupancyRate }}%</span>
            <span class="stat-label">Tỷ lệ lấp đầy</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls Section -->
    <div class="controls-section" :class="{ 'animate-in': isVisible }">
      <div class="controls-container">
        <div class="filters-group">
          <h3 class="filters-title">
            <svg viewBox="0 0 24 24" class="filter-icon">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
            </svg>
            Bộ lọc
          </h3>
          
          <div class="filter-controls">
            <div class="filter-group">
              <label class="filter-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
                Tầng
              </label>
              <select v-model="selectedFloor" class="filter-select">
                <option value="">Tất cả tầng</option>
                <option v-for="f in floors" :key="f" :value="f">Tầng {{ f }}</option>
              </select>
            </div>
            
            <div class="filter-group">
              <label class="filter-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Trạng thái
              </label>
              <select v-model="selectedStatus" class="filter-select">
                <option value="">Tất cả trạng thái</option>
                <option value="available">Phòng trống</option>
                <option value="occupied">Đang sử dụng</option>
                <option value="cleaning">Cần dọn dẹp</option>
              </select>
            </div>
            
            <div class="filter-group">
              <label class="filter-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                Tìm kiếm
              </label>
              <input 
                type="text" 
                v-model="searchQuery" 
                placeholder="Tìm theo số phòng..."
                class="search-input"
              />
            </div>
          </div>
        </div>
        
        <div class="action-buttons">
          <button class="action-btn refresh" @click="refreshRooms" title="Làm mới">
            <svg viewBox="0 0 24 24">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
            Làm mới
          </button>
          
          <button class="action-btn export" @click="exportData" title="Xuất báo cáo">
            <svg viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            Xuất báo cáo
          </button>
        </div>
      </div>
    </div>

    <!-- Room Grid -->
    <div class="room-grid-section" :class="{ 'animate-in': isVisible }">
      <div class="grid-header">
        <h3 class="grid-title">
          <svg viewBox="0 0 24 24" class="grid-icon">
            <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2h8v8h-8v-8zm2 2h4v4h-4v-4z"/>
          </svg>
          Sơ đồ phòng
        </h3>
        <span class="room-count">{{ filteredRooms.length }} phòng</span>
      </div>
      
      <div class="room-grid">
        <div
          v-for="(room, index) in filteredRooms"
          :key="room.id"
          class="room-card"
          :class="[room.status, { 'selected': selectedRoom?.id === room.id }]"
          @click="selectRoom(room)"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="room-header">
            <span class="room-number">{{ room.number }}</span>
            <div class="room-status-indicator" :class="room.status">
              <svg v-if="room.status === 'available'" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <svg v-else-if="room.status === 'occupied'" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <svg v-else viewBox="0 0 24 24">
                <path d="M19.36 2.72L20.78 4.14l-1.93 1.93c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5-.62 0-1.19-.2-1.64-.55L12.93 12l5.78 5.78c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L11.52 13.4 9.8 15.12c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5c.62 0 1.19.2 1.64.55l1.72-1.72L4.43 7.31c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5.78 5.78 2.33-2.33c-.35-.45-.55-1.02-.55-1.64 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .62-.2 1.19-.55 1.64l1.93-1.93z"/>
              </svg>
            </div>
          </div>
          
          <div class="room-info">
            <h4 class="room-type">{{ room.type }}</h4>
            <p class="room-floor">Tầng {{ room.floor }}</p>
            <p class="room-price">{{ formatPrice(room.price) }}/đêm</p>
          </div>
          
          <div class="room-status">
            <span class="status-label" :class="room.status">{{ room.statusLabel }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Check-in Form -->
    <div v-if="selectedRoom" class="checkin-section" :class="{ 'animate-in': selectedRoom }">
      <div class="checkin-container">
        <div class="checkin-header">
          <h3 class="checkin-title">
            <svg viewBox="0 0 24 24" class="checkin-icon">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            Nhận phòng: {{ selectedRoom.number }} - {{ selectedRoom.type }}
          </h3>
          <button class="close-btn" @click="closeCheckin">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <form @submit.prevent="checkIn" class="checkin-form">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Họ và tên khách hàng *
              </label>
              <input 
                v-model="guest.name" 
                placeholder="Nhập họ và tên đầy đủ"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z"/>
                </svg>
                Số CCCD/Hộ chiếu *
              </label>
              <input 
                v-model="guest.id" 
                placeholder="Nhập số CCCD hoặc hộ chiếu"
                class="form-input"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.3-1.74-2.39-1.74-.4 0-.8.1-1.15.29l-3.12 1.7c-.3.17-.65.25-1 .25-.53 0-1.04-.21-1.41-.59L9 6.41c-.38-.38-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41L11.41 1c.38-.38.88-.59 1.41-.59.53 0 1.04.21 1.41.59L16.59 3c.38.38.59.88.59 1.41 0 .53-.21 1.04-.59 1.41L15.18 7.23l2.54 7.63H20v6h-4z"/>
                </svg>
                Số người *
              </label>
              <input 
                type="number" 
                v-model="guest.people" 
                placeholder="Số lượng khách"
                class="form-input"
                min="1"
                max="10"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                Ngày nhận phòng *
              </label>
              <input 
                type="date" 
                v-model="guest.checkIn"
                class="form-input"
                :min="today"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6l-1 1H5v2h14V4z"/>
                </svg>
                Ngày trả phòng *
              </label>
              <input 
                type="date" 
                v-model="guest.checkOut"
                class="form-input"
                :min="guest.checkIn || today"
                required
              />
            </div>
            
            <div class="form-group">
              <label class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Số điện thoại
              </label>
              <input 
                v-model="guest.phone" 
                placeholder="Số điện thoại liên lạc"
                class="form-input"
              />
            </div>
          </div>
          
          <!-- Booking Summary -->
          <div v-if="guest.checkIn && guest.checkOut" class="booking-summary">
            <h4 class="summary-title">
              <svg viewBox="0 0 24 24" class="summary-icon">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
              </svg>
              Tóm tắt đặt phòng
            </h4>
            <div class="summary-details">
              <div class="summary-row">
                <span class="summary-label">Số đêm:</span>
                <span class="summary-value">{{ calculateNights() }} đêm</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">Giá phòng/đêm:</span>
                <span class="summary-value">{{ formatPrice(selectedRoom.price) }}</span>
              </div>
              <div class="summary-row total">
                <span class="summary-label">Tổng tiền:</span>
                <span class="summary-value">{{ formatPrice(calculateTotal()) }}</span>
              </div>
            </div>
          </div>
          
          <div class="form-actions">
            <button type="button" class="btn-secondary" @click="closeCheckin">
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
              Hủy
            </button>
            <button type="submit" class="btn-primary" :disabled="!isFormValid">
              <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Xác nhận & In phiếu
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Receipt Modal -->
    <div v-if="receipt" class="receipt-modal" @click.self="closeReceipt">
      <div class="receipt-container" :class="{ 'animate-in': receipt }">
        <div class="receipt-header">
          <h3 class="receipt-title">
            <svg viewBox="0 0 24 24" class="receipt-icon">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z"/>
            </svg>
            Phiếu nhận phòng
          </h3>
          <button class="close-btn" @click="closeReceipt">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <div class="receipt-content">
          <div class="receipt-info">
            <div class="hotel-info">
              <h4>OceanView Hotels</h4>
              <p>123 Võ Nguyên Giáp, Đà Nẵng</p>
              <p>Hotline: 1900-1234</p>
            </div>
            
            <div class="booking-details">
              <div class="detail-row">
                <span class="detail-label">Mã đặt phòng:</span>
                <span class="detail-value">{{ receipt.code }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Tên khách hàng:</span>
                <span class="detail-value">{{ receipt.name }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phòng:</span>
                <span class="detail-value">{{ selectedRoom.number }} - {{ selectedRoom.type }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Ngày nhận phòng:</span>
                <span class="detail-value">{{ formatDate(receipt.checkIn) }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Ngày trả phòng:</span>
                <span class="detail-value">{{ formatDate(receipt.checkOut) }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Số đêm:</span>
                <span class="detail-value">{{ receipt.nights }} đêm</span>
              </div>
              <div class="detail-row total">
                <span class="detail-label">Tổng tiền:</span>
                <span class="detail-value">{{ formatPrice(receipt.total) }}</span>
              </div>
            </div>
          </div>
          
          <div class="receipt-actions">
            <button class="action-btn print" @click="printReceipt">
              <svg viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              In phiếu
            </button>
            <button class="action-btn email" @click="sendEmail">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Gửi email
            </button>
            <button class="action-btn close" @click="closeReceipt">
              <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Hoàn tất
            </button>
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

// Reactive data
const floors = [1, 2, 3]
const isVisible = ref(false)
const searchQuery = ref('')
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

const rooms = ref([
  { id: 1, number: '101', floor: 1, type: 'Phòng đơn', price: 800000, status: 'available' },
  { id: 2, number: '102', floor: 1, type: 'Phòng đôi', price: 1200000, status: 'occupied' },
  { id: 3, number: '103', floor: 1, type: 'Phòng VIP', price: 1800000, status: 'cleaning' },
  { id: 4, number: '201', floor: 2, type: 'Suite', price: 2000000, status: 'available' },
  { id: 5, number: '202', floor: 2, type: 'Gia đình', price: 2500000, status: 'occupied' },
  { id: 6, number: '203', floor: 2, type: 'Deluxe', price: 1500000, status: 'available' },
  { id: 7, number: '301', floor: 3, type: 'Presidential', price: 5000000, status: 'cleaning' },
  { id: 8, number: '302', floor: 3, type: 'Suite VIP', price: 3500000, status: 'available' }
])

const statusMap = {
  available: 'Phòng trống',
  occupied: 'Đang sử dụng',
  cleaning: 'Cần dọn dẹp'
}

// Initialize status labels
rooms.value.forEach(r => r.statusLabel = statusMap[r.status])

const selectedFloor = ref('')
const selectedStatus = ref('')
const selectedRoom = ref(null)
const guest = ref({
  name: '',
  id: '',
  people: 1,
  checkIn: '',
  checkOut: '',
  phone: ''
})
const receipt = ref(null)

// Computed properties
const today = computed(() => {
  return new Date().toISOString().split('T')[0]
})

const filteredRooms = computed(() => {
  return rooms.value.filter(r => {
    const matchesFloor = !selectedFloor.value || r.floor == selectedFloor.value
    const matchesStatus = !selectedStatus.value || r.status === selectedStatus.value
    const matchesSearch = !searchQuery.value || r.number.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    return matchesFloor && matchesStatus && matchesSearch
  })
})

const availableRooms = computed(() => rooms.value.filter(r => r.status === 'available').length)
const occupiedRooms = computed(() => rooms.value.filter(r => r.status === 'occupied').length)
const cleaningRooms = computed(() => rooms.value.filter(r => r.status === 'cleaning').length)
const occupancyRate = computed(() => Math.round((occupiedRooms.value / rooms.value.length) * 100))

const isFormValid = computed(() => {
  return guest.value.name && guest.value.id && guest.value.checkIn && guest.value.checkOut
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
  return new Intl.NumberFormat('vi-VN').format(price) + ' ₫'
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const calculateNights = () => {
  if (!guest.value.checkIn || !guest.value.checkOut) return 0
  const checkIn = new Date(guest.value.checkIn)
  const checkOut = new Date(guest.value.checkOut)
  const diffTime = Math.abs(checkOut - checkIn)
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

const calculateTotal = () => {
  return selectedRoom.value.price * calculateNights()
}

const selectRoom = (room) => {
  if (room.status !== 'available') {
    showToastMessage(`Phòng ${room.number} hiện ${room.statusLabel.toLowerCase()}`, 'error')
    return
  }
  
  selectedRoom.value = room
  guest.value = {
    name: '',
    id: '',
    people: 1,
    checkIn: today.value,
    checkOut: '',
    phone: ''
  }
  receipt.value = null
  showToastMessage(`Đã chọn phòng ${room.number}`)
}

const closeCheckin = () => {
  selectedRoom.value = null
  guest.value = {
    name: '',
    id: '',
    people: 1,
    checkIn: '',
    checkOut: '',
    phone: ''
  }
}

const checkIn = () => {
  if (!isFormValid.value) {
    showToastMessage('Vui lòng điền đầy đủ thông tin bắt buộc', 'error')
    return
  }

  const nights = calculateNights()
  const total = calculateTotal()

  receipt.value = {
    name: guest.value.name,
    code: 'RES' + Math.floor(Math.random() * 100000),
    checkIn: guest.value.checkIn,
    checkOut: guest.value.checkOut,
    nights,
    total
  }

  // Update room status
  selectedRoom.value.status = 'occupied'
  selectedRoom.value.statusLabel = statusMap['occupied']
  
  showToastMessage(`Nhận phòng thành công cho ${guest.value.name}`)
  selectedRoom.value = null
}

const closeReceipt = () => {
  receipt.value = null
}

const printReceipt = () => {
  showToastMessage('Đang in phiếu nhận phòng...')
  // Implement print logic
}

const sendEmail = () => {
  showToastMessage('Đã gửi phiếu nhận phòng qua email')
  // Implement email logic
}

const refreshRooms = () => {
  showToastMessage('Đã làm mới danh sách phòng')
  // Implement refresh logic
}

const exportData = () => {
  showToastMessage('Đang xuất báo cáo...')
  // Implement export logic
}

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.room-management-page {
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
.management-header {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 80px 20px 40px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.management-header.animate-in {
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

/* Dashboard Stats */
.dashboard-stats {
  position: relative;
  z-index: 2;
  padding: 0 20px 40px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.dashboard-stats.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.stats-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-card.available .stat-icon {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.stat-card.occupied .stat-icon {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.stat-card.cleaning .stat-icon {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.stat-card.revenue .stat-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.stat-icon svg {
  width: 30px;
  height: 30px;
  fill: white;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

/* Controls Section */
.controls-section {
  position: relative;
  z-index: 2;
  padding: 0 20px 40px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.3s;
}

.controls-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.controls-container {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.filters-group {
  flex: 1;
}

.filters-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.filter-icon {
  width: 20px;
  height: 20px;
  fill: #667eea;
}

.filter-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
}

.label-icon {
  width: 14px;
  height: 14px;
  fill: #667eea;
}

.filter-select,
.search-input {
  padding: 10px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: white;
}

.filter-select:focus,
.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.action-buttons {
  display: flex;
  gap: 12px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 2px solid #667eea;
  background: transparent;
  color: #667eea;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: #667eea;
  color: white;
}

.action-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Room Grid Section */
.room-grid-section {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 80px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.4s;
}

.room-grid-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.grid-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.grid-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.grid-icon {
  width: 20px;
  height: 20px;
  fill: #667eea;
}

.room-count {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
}

.room-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.room-card {
  background: white;
  border-radius: 16px;
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

.room-card.available {
  border-left: 4px solid #10b981;
}

.room-card.occupied {
  border-left: 4px solid #ef4444;
  opacity: 0.7;
  cursor: not-allowed;
}

.room-card.cleaning {
  border-left: 4px solid #f59e0b;
  opacity: 0.7;
  cursor: not-allowed;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.room-number {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
}

.room-status-indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.room-status-indicator.available {
  background: #10b981;
}

.room-status-indicator.occupied {
  background: #ef4444;
}

.room-status-indicator.cleaning {
  background: #f59e0b;
}

.room-status-indicator svg {
  width: 16px;
  height: 16px;
  fill: white;
}

.room-info {
  margin-bottom: 16px;
}

.room-type {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 4px;
}

.room-floor {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 8px;
}

.room-price {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
}

.room-status {
  text-align: center;
}

.status-label {
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-label.available {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-label.occupied {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.status-label.cleaning {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

/* Check-in Section */
.checkin-section {
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

.checkin-container {
  background: white;
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.checkin-container.animate-in {
  opacity: 1;
  transform: scale(1);
}

.checkin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.checkin-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.checkin-icon {
  width: 24px;
  height: 24px;
  fill: #667eea;
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

.checkin-form {
  padding: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
}

.form-input {
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* Booking Summary */
.booking-summary {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.summary-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.summary-icon {
  width: 18px;
  height: 18px;
  fill: #667eea;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.summary-row.total {
  padding-top: 8px;
  border-top: 1px solid #e2e8f0;
  font-weight: 600;
}

.summary-label {
  color: #64748b;
}

.summary-value {
  color: #2c3e50;
  font-weight: 500;
}

.summary-row.total .summary-value {
  color: #667eea;
  font-size: 1.1rem;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.btn-secondary,
.btn-primary {
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
}

.btn-secondary {
  background: #f1f5f9;
  color: #64748b;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary svg,
.btn-primary svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Receipt Modal */
.receipt-modal {
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

.receipt-container {
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.receipt-container.animate-in {
  opacity: 1;
  transform: scale(1);
}

.receipt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px 20px 0 0;
}

.receipt-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.receipt-icon {
  width: 24px;
  height: 24px;
  fill: white;
}

.receipt-header .close-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.receipt-header .close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.receipt-content {
  padding: 24px;
}

.hotel-info {
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.hotel-info h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
}

.hotel-info p {
  color: #64748b;
  margin: 4px 0;
}

.booking-details {
  margin-bottom: 24px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
}

.detail-row.total {
  border-top: 2px solid #e2e8f0;
  border-bottom: none;
  padding-top: 16px;
  margin-top: 8px;
  font-weight: 600;
}

.detail-label {
  color: #64748b;
  font-weight: 500;
}

.detail-value {
  color: #2c3e50;
  font-weight: 600;
}

.detail-row.total .detail-value {
  color: #667eea;
  font-size: 1.2rem;
}

.receipt-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 2px solid;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.action-btn.print {
  border-color: #667eea;
  color: #667eea;
  background: transparent;
}

.action-btn.print:hover {
  background: #667eea;
  color: white;
}

.action-btn.email {
  border-color: #10b981;
  color: #10b981;
  background: transparent;
}

.action-btn.email:hover {
  background: #10b981;
  color: white;
}

.action-btn.close {
  border-color: #64748b;
  color: #64748b;
  background: transparent;
}

.action-btn.close:hover {
  background: #64748b;
  color: white;
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
  
  .stats-container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
  }
  
  .controls-container {
    flex-direction: column;
    gap: 20px;
  }
  
  .filter-controls {
    grid-template-columns: 1fr 1fr;
  }
  
  .action-buttons {
    justify-content: center;
  }
  
  .room-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .management-header {
    padding: 60px 20px 30px 20px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .dashboard-stats,
  .controls-section,
  .room-grid-section {
    padding: 0 16px 30px 16px;
  }
  
  .stats-container {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  
  .stat-card {
    padding: 16px;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .stat-icon {
    width: 48px;
    height: 48px;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .controls-container {
    padding: 16px;
  }
  
  .filter-controls {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .room-grid {
    grid-template-columns: 1fr;
  }
  
  .room-card {
    padding: 16px;
  }
  
  .checkin-container {
    margin: 16px;
    max-height: calc(100vh - 32px);
  }
  
  .checkin-header {
    padding: 16px;
  }
  
  .checkin-form {
    padding: 16px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .receipt-container {
    margin: 16px;
    max-height: calc(100vh - 32px);
  }
  
  .receipt-content {
    padding: 16px;
  }
  
  .receipt-actions {
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
  
  .stats-container {
    grid-template-columns: 1fr;
  }
  
  .stat-card {
    padding: 12px;
  }
  
  .controls-container {
    padding: 12px;
  }
  
  .room-card {
    padding: 12px;
  }
  
  .room-number {
    font-size: 1.1rem;
  }
  
  .room-status-indicator {
    width: 28px;
    height: 28px;
  }
  
  .checkin-title {
    font-size: 1.2rem;
  }
  
  .receipt-title {
    font-size: 1.2rem;
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
  
  .btn-primary,
  .btn-secondary {
    border: 2px solid transparent;
  }
  
  .btn-primary:focus,
  .btn-secondary:focus {
    border-color: #000;
  }
}

/* Print Styles */
@media print {
  .background-animation,
  .controls-section,
  .checkin-section,
  .toast {
    display: none;
  }
  
  .room-management-page {
    background: white;
  }
  
  .stat-card,
  .room-card {
    background: white;
    box-shadow: none;
    border: 1px solid #ccc;
  }
  
  .receipt-container {
    box-shadow: none;
    border: 1px solid #ccc;
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
.action-btn:focus,
.btn-primary:focus,
.btn-secondary:focus,
.filter-select:focus,
.search-input:focus,
.form-input:focus {
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
</style>
