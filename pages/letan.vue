<template>
  <div :class="['letan-page', { 'dark-mode': theme.isDarkMode }]">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <!-- Modern Sidebar -->
    <div class="modern-sidebar" :class="{ 'collapsed': sidebarCollapsed }">
      <div class="sidebar-header">
        <div class="hotel-logo">
          <div class="logo-icon">
            <svg viewBox="0 0 24 24" class="logo-svg">
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
              <path d="M12 7v5l4 2-4 2v5"/>
            </svg>
          </div>
          <div class="logo-text" v-if="!sidebarCollapsed">
            <h3>OceanView</h3>
            <span>Quản lý lễ tân</span>
          </div>
        </div>
        <button class="sidebar-toggle" @click="toggleSidebar">
          <svg viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </button>
      </div>

      <nav class="sidebar-nav">
        <div
          v-for="item in sidebarItems"
          :key="item.key"
          class="nav-item"
          :class="{ 'active': currentTab === item.key }"
          @click="switchTab(item.key)"
        >
          <div class="nav-icon">
            <svg viewBox="0 0 24 24">
              <path :d="getIconPath(item.icon)" />
            </svg>
          </div>
          <span class="nav-label" v-if="!sidebarCollapsed">{{ item.title }}</span>
          <div class="nav-indicator" v-if="currentTab === item.key"></div>
        </div>
      </nav>

      <!-- User Profile -->
      <div class="sidebar-footer" v-if="!sidebarCollapsed">
        <div class="user-profile">
          <div class="user-avatar">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="User Avatar" />
            <div class="status-indicator online"></div>
          </div>
          <div class="user-info">
            <span class="user-name">Nguyễn Văn A</span>
            <span class="user-role">Lễ tân trưởng</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="main-content" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <!-- Header Dashboard -->
      <div class="dashboard-header">
        <div class="header-content">
          <h1 class="page-title">
            <span class="title-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
              </svg>
            </span>
            Hệ thống quản lý lễ tân
          </h1>
          <div class="header-stats">
            <div class="stat-card">
              <div class="stat-icon checkin">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <div class="stat-info">
                <span class="stat-number">{{ todayCheckins }}</span>
                <span class="stat-label">Check-in hôm nay</span>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon checkout">
                <svg viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6l-1 1H5v2h14V4z"/>
                </svg>
              </div>
              <div class="stat-info">
                <span class="stat-number">{{ todayCheckouts }}</span>
                <span class="stat-label">Check-out hôm nay</span>
              </div>
            </div>
            <div class="stat-card">
              <div class="stat-icon occupancy">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div class="stat-info">
                <span class="stat-number">{{ occupancyRate }}%</span>
                <span class="stat-label">Tỷ lệ lấp đầy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="tab-container">
        <!-- Quản lý phòng -->
        <div v-if="currentTab === 'phong'" class="tab-content" :class="{ 'animate-in': isVisible }">
          <div class="content-header">
            <div class="section-info">
              <h2 class="section-title">
                <svg viewBox="0 0 24 24" class="section-icon">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
                Quản lý phòng khách sạn
              </h2>
              <p class="section-description">Theo dõi tình trạng phòng, đặt phòng và quản lý khách hàng</p>
            </div>
            <div class="content-actions">
              <button class="action-btn primary" @click="refreshRooms">
                <svg viewBox="0 0 24 24">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                </svg>
                Làm mới
              </button>
              <button class="action-btn secondary" @click="exportData">
                <svg viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Xuất dữ liệu
              </button>
            </div>
          </div>

          <!-- Room Status Overview -->
          <div class="room-overview">
            <div class="overview-card available">
              <div class="overview-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <div class="overview-info">
                <span class="overview-number">{{ availableRooms }}</span>
                <span class="overview-label">Phòng trống</span>
              </div>
            </div>
            <div class="overview-card booked">
              <div class="overview-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <div class="overview-info">
                <span class="overview-number">{{ bookedRooms }}</span>
                <span class="overview-label">Đã đặt</span>
              </div>
            </div>
            <div class="overview-card occupied">
              <div class="overview-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div class="overview-info">
                <span class="overview-number">{{ occupiedRooms }}</span>
                <span class="overview-label">Đang sử dụng</span>
              </div>
            </div>
            <div class="overview-card cleaning">
              <div class="overview-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19.36 2.72L20.78 4.14l-1.93 1.93c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5-.62 0-1.19-.2-1.64-.55L12.93 12l5.78 5.78c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L11.52 13.4 9.8 15.12c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5c.62 0 1.19.2 1.64.55l1.72-1.72L4.43 7.31c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5.78 5.78 2.33-2.33c-.35-.45-.55-1.02-.55-1.64 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .62-.2 1.19-.55 1.64l1.93-1.93z"/>
                </svg>
              </div>
              <div class="overview-info">
                <span class="overview-number">{{ cleaningRooms }}</span>
                <span class="overview-label">Đang dọn dẹp</span>
              </div>
            </div>
          </div>

          <!-- Room Table -->
          <div class="table-container">
            <div class="table-header">
              <h3>Danh sách phòng</h3>
              <div class="table-filters">
                <select v-model="roomFilter" class="filter-select">
                  <option value="">Tất cả trạng thái</option>
                  <option value="1">Còn trống</option>
                  <option value="2">Đã đặt</option>
                  <option value="3">Đang sử dụng</option>
                  <option value="4">Đang vệ sinh</option>
                </select>
                <input 
                  type="text" 
                  v-model="searchRoom" 
                  placeholder="Tìm kiếm phòng..." 
                  class="search-input"
                />
              </div>
            </div>
            
            <div class="modern-table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên phòng</th>
                    <th>Tiện nghi</th>
                    <th>Trạng thái</th>
                    <th>Khách hàng</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(room, index) in paginatedRooms"
                    :key="room.maPhong"
                    class="table-row"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                  >
                    <td>{{ currentPage * itemsPerPage + index + 1 }}</td>
                    <td>
                      <div class="room-info">
                        <div class="room-number">{{ room.loaiPhong }}</div>
                        <div class="room-code">{{ room.maPhong }}</div>
                      </div>
                    </td>
                    <td>
                      <div class="amenities-list">
                        <span 
                          v-for="amenity in room.tienNghiList.slice(0, 2)" 
                          :key="amenity"
                          class="amenity-tag"
                        >
                          {{ amenity }}
                        </span>
                        <span v-if="room.tienNghiList.length > 2" class="more-amenities">
                          +{{ room.tienNghiList.length - 2 }}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div class="status-badge" :class="getStatusClass(room.tinhTrang)">
                        <div class="status-indicator"></div>
                        <span>{{ getStatusText(room.tinhTrang) }}</span>
                      </div>
                    </td>
                    <td>
                      <div class="guest-info">
                        <span v-if="room.tinhTrang === '2' || room.tinhTrang === '3'">
                          Nguyễn Văn {{ String.fromCharCode(65 + index) }}
                        </span>
                        <span v-else class="no-guest">Chưa có khách</span>
                      </div>
                    </td>
                    <td>
                      <div class="action-buttons">
                        <button
                          class="action-btn edit"
                          @click="openEditModal(room)"
                          title="Chỉnh sửa"
                        >
                          <svg viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                          </svg>
                        </button>
                        <button
                          class="action-btn view"
                          @click="viewRoomDetails(room)"
                          title="Xem chi tiết"
                        >
                          <svg viewBox="0 0 24 24">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="pagination-container">
              <div class="pagination-info">
                Hiển thị {{ (currentPage * itemsPerPage) + 1 }} - {{ Math.min((currentPage + 1) * itemsPerPage, filteredRooms.length) }} 
                trong tổng số {{ filteredRooms.length }} phòng
              </div>
              <div class="pagination">
                <button
                  class="page-btn"
                  :disabled="currentPage === 0"
                  @click="currentPage--"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button
                  v-for="page in visiblePages"
                  :key="page"
                  class="page-btn"
                  :class="{ 'active': currentPage === page - 1 }"
                  @click="currentPage = page - 1"
                >
                  {{ page }}
                </button>
                <button
                  class="page-btn"
                  :disabled="currentPage >= totalPages - 1"
                  @click="currentPage++"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Quản lý dịch vụ -->
        <div v-if="currentTab === 'dichvu'" class="tab-content" :class="{ 'animate-in': isVisible }">
          <div class="content-header">
            <div class="section-info">
              <h2 class="section-title">
                <svg viewBox="0 0 24 24" class="section-icon">
                  <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                Quản lý dịch vụ khách sạn
              </h2>
              <p class="section-description">Quản lý các dịch vụ và giá cả cho khách hàng</p>
            </div>
            <div class="content-actions">
              <button class="action-btn primary" @click="addNewService">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
                Thêm dịch vụ
              </button>
            </div>
          </div>

          <!-- Service Table -->
          <div class="table-container">
            <div class="table-header">
              <h3>Danh sách dịch vụ</h3>
              <div class="table-filters">
                <input 
                  type="text" 
                  v-model="searchService" 
                  placeholder="Tìm kiếm dịch vụ..." 
                  class="search-input"
                />
              </div>
            </div>
            
            <div class="modern-table">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Tên dịch vụ</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(service, index) in paginatedServices"
                    :key="service.maDichVu"
                    class="table-row"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                  >
                    <td>{{ currentPageService * itemsPerPageService + index + 1 }}</td>
                    <td>
                      <div class="service-info">
                        <div class="service-name">{{ service.tenDichVu }}</div>
                        <div class="service-code">{{ service.maDichVu }}</div>
                      </div>
                    </td>
                    <td>
                      <div class="service-description">
                        {{ getServiceDescription(service.tenDichVu) }}
                      </div>
                    </td>
                    <td>
                      <div class="price-info">
                        <span class="price">{{ formatPrice(service.donGia) }}</span>
                        <span class="currency">VNĐ</span>
                      </div>
                    </td>
                    <td>
                      <div class="status-badge active">
                        <div class="status-indicator"></div>
                        <span>Đang hoạt động</span>
                      </div>
                    </td>
                    <td>
                      <div class="action-buttons">
                        <button
                          class="action-btn edit"
                          @click="openEditServiceModal(service)"
                          title="Chỉnh sửa"
                        >
                          <svg viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                          </svg>
                        </button>
                        <button
                          class="action-btn delete"
                          @click="deleteService(service)"
                          title="Xóa"
                        >
                          <svg viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Service Pagination -->
            <div class="pagination-container">
              <div class="pagination-info">
                Hiển thị {{ (currentPageService * itemsPerPageService) + 1 }} - {{ Math.min((currentPageService + 1) * itemsPerPageService, filteredServices.length) }} 
                trong tổng số {{ filteredServices.length }} dịch vụ
              </div>
              <div class="pagination">
                <button
                  class="page-btn"
                  :disabled="currentPageService === 0"
                  @click="currentPageService--"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button
                  v-for="page in visiblePagesService"
                  :key="page"
                  class="page-btn"
                  :class="{ 'active': currentPageService === page - 1 }"
                  @click="currentPageService = page - 1"
                >
                  {{ page }}
                </button>
                <button
                  class="page-btn"
                  :disabled="currentPageService >= totalPagesService - 1"
                  @click="currentPageService++"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Khách hàng Tab -->
        <div v-if="currentTab === 'khachhang'" class="tab-content" :class="{ 'animate-in': isVisible }">
          <div class="content-header">
            <div class="section-info">
              <h2 class="section-title">
                <svg viewBox="0 0 24 24" class="section-icon">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.3-1.74-2.39-1.74-.4 0-.8.1-1.15.29l-3.12 1.7c-.3.17-.65.25-1 .25-.53 0-1.04-.21-1.41-.59L9 6.41c-.38-.38-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41L11.41 1c.38-.38.88-.59 1.41-.59.53 0 1.04.21 1.41.59L16.59 3c.38.38.59.88.59 1.41 0 .53-.21 1.04-.59 1.41L15.18 7.23l2.54 7.63H20v6h-4z"/>
                </svg>
                Quản lý khách hàng
              </h2>
              <p class="section-description">Thông tin và lịch sử khách hàng</p>
            </div>
          </div>

          <div class="coming-soon">
            <div class="coming-soon-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3>Tính năng đang phát triển</h3>
            <p>Chức năng quản lý khách hàng sẽ sớm được cập nhật</p>
          </div>
        </div>

        <!-- Cài đặt Tab -->
        <div v-if="currentTab === 'caidat'" class="tab-content" :class="{ 'animate-in': isVisible }">
          <div class="content-header">
            <div class="section-info">
              <h2 class="section-title">
                <svg viewBox="0 0 24 24" class="section-icon">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
                Cài đặt hệ thống
              </h2>
              <p class="section-description">Cấu hình và tùy chỉnh hệ thống</p>
            </div>
          </div>

          <div class="settings-grid">
            <div class="setting-card">
              <div class="setting-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Chế độ tối</h3>
              <p>Bật/tắt giao diện tối</p>
              <label class="toggle-switch">
                <input type="checkbox" v-model="theme.isDarkMode" @change="theme.toggleDarkMode()">
                <span class="slider"></span>
              </label>
            </div>

            <div class="setting-card">
              <div class="setting-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Thông báo</h3>
              <p>Cài đặt thông báo hệ thống</p>
              <label class="toggle-switch">
                <input type="checkbox" v-model="notificationsEnabled">
                <span class="slider"></span>
              </label>
            </div>

            <div class="setting-card">
              <div class="setting-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Tự động làm mới</h3>
              <p>Tự động cập nhật dữ liệu</p>
              <label class="toggle-switch">
                <input type="checkbox" v-model="autoRefresh">
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Room Modal -->
    <div v-if="showEditModal" class="modal-overlay" @click="closeEditModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3>
            <svg viewBox="0 0 24 24" class="modal-icon">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
            Chỉnh sửa thông tin phòng
          </h3>
          <button class="close-btn" @click="closeEditModal">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-content">
          <div class="form-group">
            <label for="roomName">Tên phòng:</label>
            <input
              id="roomName"
              type="text"
              v-model="editingRoom.loaiPhong"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="roomStatus">Trạng thái phòng:</label>
            <select
              id="roomStatus"
              v-model="editingRoom.tinhTrang"
              class="form-select"
            >
              <option value="1">Còn trống</option>
              <option value="2">Đã đặt</option>
              <option value="3">Đang sử dụng</option>
              <option value="4">Đang vệ sinh</option>
            </select>
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn-secondary" @click="closeEditModal">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
            Hủy
          </button>
          <button class="btn-primary" @click="saveChanges" :disabled="isSaving">
            <svg v-if="!isSaving" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <div v-else class="loading-spinner"></div>
            {{ isSaving ? 'Đang lưu...' : 'Lưu thay đổi' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Edit Service Modal -->
    <div v-if="showEditServiceModal" class="modal-overlay" @click="closeEditServiceModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3>
            <svg viewBox="0 0 24 24" class="modal-icon">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
            Chỉnh sửa thông tin dịch vụ
          </h3>
          <button class="close-btn" @click="closeEditServiceModal">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-content">
          <div class="form-group">
            <label for="serviceName">Tên dịch vụ:</label>
            <input
              id="serviceName"
              type="text"
              v-model="editingService.tenDichVu"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="servicePrice">Giá dịch vụ (VNĐ):</label>
            <input
              id="servicePrice"
              type="number"
              v-model="editingService.donGia"
              class="form-input"
              min="0"
            />
          </div>
        </div>

        <div class="modal-actions">
          <button class="btn-secondary" @click="closeEditServiceModal">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
            Hủy
          </button>
          <button class="btn-primary" @click="saveServiceChanges" :disabled="isSaving">
            <svg v-if="!isSaving" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <div v-else class="loading-spinner"></div>
            {{ isSaving ? 'Đang lưu...' : 'Lưu thay đổi' }}
          </button>
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
import { ref, computed, onMounted, nextTick } from 'vue';
import { useThemeStore } from '@/store/DarkMode';
import { axiosBase } from '~/utils/axiosBase';

// Store
const theme = useThemeStore();
theme.initializeDarkMode();

// Reactive data
const currentTab = ref('phong');
const sidebarCollapsed = ref(false);
const isVisible = ref(false);
const rooms = ref([]);
const services = ref([]);
const currentPage = ref(0);
const currentPageService = ref(0);
const itemsPerPage = 5;
const itemsPerPageService = 5;
const showEditModal = ref(false);
const showEditServiceModal = ref(false);
const editingRoom = ref(null);
const editingService = ref(null);
const isSaving = ref(false);
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref('success');
const roomFilter = ref('');
const searchRoom = ref('');
const searchService = ref('');
const notificationsEnabled = ref(true);
const autoRefresh = ref(false);

// Stats data
const todayCheckins = ref(12);
const todayCheckouts = ref(8);
const occupancyRate = ref(85);

// Sidebar items
const sidebarItems = [
  { key: 'khachhang', title: 'Khách hàng', icon: 'person' },
  { key: 'phong', title: 'Quản lý phòng', icon: 'hotel' },
  { key: 'dichvu', title: 'Dịch vụ', icon: 'shopping_cart' },
  { key: 'caidat', title: 'Cài đặt', icon: 'settings' },
];

// Computed properties
const filteredRooms = computed(() => {
  let filtered = rooms.value;
  
  if (roomFilter.value) {
    filtered = filtered.filter(room => room.tinhTrang === roomFilter.value);
  }
  
  if (searchRoom.value) {
    filtered = filtered.filter(room => 
      room.loaiPhong.toLowerCase().includes(searchRoom.value.toLowerCase()) ||
      room.maPhong.toLowerCase().includes(searchRoom.value.toLowerCase())
    );
  }
  
  return filtered;
});

const filteredServices = computed(() => {
  let filtered = services.value;
  
  if (searchService.value) {
    filtered = filtered.filter(service => 
      service.tenDichVu.toLowerCase().includes(searchService.value.toLowerCase())
    );
  }
  
  return filtered;
});

const paginatedRooms = computed(() => {
  const start = currentPage.value * itemsPerPage;
  return filteredRooms.value.slice(start, start + itemsPerPage);
});

const paginatedServices = computed(() => {
  const start = currentPageService.value * itemsPerPageService;
  return filteredServices.value.slice(start, start + itemsPerPageService);
});

const totalPages = computed(() => Math.ceil(filteredRooms.value.length / itemsPerPage));
const totalPagesService = computed(() => Math.ceil(filteredServices.value.length / itemsPerPageService));

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value + 1;
  const delta = 2;
  const range = [];
  const rangeWithDots = [];

  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i);
  }

  if (current - delta > 2) {
    rangeWithDots.push(1, '...');
  } else {
    rangeWithDots.push(1);
  }

  rangeWithDots.push(...range);

  if (current + delta < total - 1) {
    rangeWithDots.push('...', total);
  } else {
    rangeWithDots.push(total);
  }

  return rangeWithDots.filter(item => item !== '...' || rangeWithDots.indexOf(item) === rangeWithDots.lastIndexOf(item));
});

const visiblePagesService = computed(() => {
  const total = totalPagesService.value;
  const current = currentPageService.value + 1;
  const delta = 2;
  const range = [];
  const rangeWithDots = [];

  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i);
  }

  if (current - delta > 2) {
    rangeWithDots.push(1, '...');
  } else {
    rangeWithDots.push(1);
  }

  rangeWithDots.push(...range);

  if (current + delta < total - 1) {
    rangeWithDots.push('...', total);
  } else {
    rangeWithDots.push(total);
  }

  return rangeWithDots.filter(item => item !== '...' || rangeWithDots.indexOf(item) === rangeWithDots.lastIndexOf(item));
});

const availableRooms = computed(() => rooms.value.filter(room => room.tinhTrang === '1').length);
const bookedRooms = computed(() => rooms.value.filter(room => room.tinhTrang === '2').length);
const occupiedRooms = computed(() => rooms.value.filter(room => room.tinhTrang === '3').length);
const cleaningRooms = computed(() => rooms.value.filter(room => room.tinhTrang === '4').length);

// Methods
const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};

const switchTab = (tab) => {
  currentTab.value = tab;
  isVisible.value = false;
  nextTick(() => {
    isVisible.value = true;
  });
};

const getIconPath = (iconName) => {
  const icons = {
    person: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    hotel: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z',
    shopping_cart: 'M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    settings: 'M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z'
  };
  return icons[iconName] || '';
};

const getStatusText = (status) => {
  switch (status) {
    case '1': return 'Còn trống';
    case '2': return 'Đã đặt';
    case '3': return 'Đang sử dụng';
    case '4': return 'Đang vệ sinh';
    default: return 'Không xác định';
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case '1': return 'status-available';
    case '2': return 'status-booked';
    case '3': return 'status-in-use';
    case '4': return 'status-cleaning';
    default: return '';
  }
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price);
};

const getServiceDescription = (serviceName) => {
  const descriptions = {
    'Spa': 'Dịch vụ massage và thư giãn cao cấp',
    'Buffet': 'Ăn sáng buffet phong phú',
    'Gym': 'Phòng tập gym hiện đại',
    'Pool': 'Hồ bơi ngoài trời',
    'Laundry': 'Dịch vụ giặt ủi',
    'Transport': 'Dịch vụ đưa đón'
  };
  
  for (const [key, desc] of Object.entries(descriptions)) {
    if (serviceName.toLowerCase().includes(key.toLowerCase())) {
      return desc;
    }
  }
  return 'Dịch vụ chất lượng cao';
};

const showToastMessage = (message, type = 'success') => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

// Modal functions
const openEditModal = (room) => {
  editingRoom.value = { ...room };
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
  editingRoom.value = null;
};

const openEditServiceModal = (service) => {
  editingService.value = { ...service };
  showEditServiceModal.value = true;
};

const closeEditServiceModal = () => {
  showEditServiceModal.value = false;
  editingService.value = null;
};

const saveChanges = async () => {
  isSaving.value = true;
  try {
    const updatedRoom = editingRoom.value;
    await axiosBase.put(`/Phong/${updatedRoom.maPhong}`, updatedRoom);
    
    const roomIndex = rooms.value.findIndex(room => room.maPhong === updatedRoom.maPhong);
    if (roomIndex !== -1) {
      rooms.value[roomIndex] = { ...updatedRoom };
    }
    
    showToastMessage('Cập nhật thông tin phòng thành công!');
    closeEditModal();
  } catch (error) {
    console.error('Lỗi khi cập nhật phòng:', error);
    showToastMessage('Có lỗi xảy ra khi cập nhật phòng!', 'error');
  } finally {
    isSaving.value = false;
  }
};

const saveServiceChanges = async () => {
  isSaving.value = true;
  try {
    const updatedService = editingService.value;
    await axiosBase.put(`/DichVu/${updatedService.maDichVu}`, updatedService);
    
    const serviceIndex = services.value.findIndex(service => service.maDichVu === updatedService.maDichVu);
    if (serviceIndex !== -1) {
      services.value[serviceIndex] = { ...updatedService };
    }
    
    showToastMessage('Cập nhật thông tin dịch vụ thành công!');
    closeEditServiceModal();
  } catch (error) {
    console.error('Lỗi khi cập nhật dịch vụ:', error);
    showToastMessage('Có lỗi xảy ra khi cập nhật dịch vụ!', 'error');
  } finally {
    isSaving.value = false;
  }
};

// Action functions (tiếp tục)
const refreshRooms = async () => {
  try {
    const responseRooms = await axiosBase.get('/PhongWithTienNghi');
    rooms.value = responseRooms.data.map((room) => ({
      ...room,
      tienNghiList: JSON.parse(room.tienNghi || '[]'),
    }));
    showToastMessage('Dữ liệu đã được làm mới!');
  } catch (error) {
    console.error('Lỗi khi làm mới dữ liệu:', error);
    showToastMessage('Có lỗi xảy ra khi làm mới dữ liệu!', 'error');
  }
};

const exportData = () => {
  showToastMessage('Đang xuất dữ liệu...', 'info');
  // Implement export logic here
};

const addNewService = () => {
  showToastMessage('Tính năng thêm dịch vụ sẽ sớm được cập nhật', 'info');
  // Implement add service logic here
};

const viewRoomDetails = (room) => {
  showToastMessage(`Xem chi tiết phòng ${room.maPhong}`, 'info');
  // Implement view details logic here
};

const deleteService = (service) => {
  if (confirm(`Bạn có chắc chắn muốn xóa dịch vụ "${service.tenDichVu}"?`)) {
    showToastMessage(`Đã xóa dịch vụ ${service.tenDichVu}`, 'success');
    // Implement delete logic here
  }
};

// Lifecycle
onMounted(async () => {
  try {
    const responseRooms = await axiosBase.get('/PhongWithTienNghi');
    rooms.value = responseRooms.data.map((room) => ({
      ...room,
      tienNghiList: JSON.parse(room.tienNghi || '[]'),
    }));

    const responseServices = await axiosBase.get('/dichvu');
    services.value = responseServices.data;
    
    setTimeout(() => {
      isVisible.value = true;
    }, 100);
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    showToastMessage('Có lỗi xảy ra khi tải dữ liệu!', 'error');
  }
});
</script>

<style scoped>
/* Layout Styles */
.letan-page {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
}

.letan-page.dark-mode {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: #ecf0f1;
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

/* Sidebar Styles */
.modern-sidebar {
  width: 280px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.modern-sidebar.collapsed {
  width: 80px;
}

.letan-page.dark-mode .modern-sidebar {
  background: rgba(44, 62, 80, 0.95);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header {
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.letan-page.dark-mode .sidebar-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.hotel-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.logo-svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.logo-text h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px 0;
}

.letan-page.dark-mode .logo-text h3 {
  color: #ecf0f1;
}

.logo-text span {
  font-size: 0.85rem;
  color: #64748b;
}

.letan-page.dark-mode .logo-text span {
  color: #bdc3c7;
}

.sidebar-toggle {
  width: 40px;
  height: 40px;
  border: none;
  background: #f8fafc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #64748b;
}

.letan-page.dark-mode .sidebar-toggle {
  background: #34495e;
  color: #bdc3c7;
}

.sidebar-toggle:hover {
  background: #e2e8f0;
  color: #2c3e50;
}

.letan-page.dark-mode .sidebar-toggle:hover {
  background: #4a5f7a;
  color: #ecf0f1;
}

.sidebar-toggle svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

/* Navigation Styles */
.sidebar-nav {
  flex: 1;
  padding: 16px 0;
}

.nav-item {
  position: relative;
  margin: 4px 16px;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-item:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateX(4px);
}

.nav-item.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.nav-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.nav-label {
  font-size: 0.95rem;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.modern-sidebar.collapsed .nav-label {
  opacity: 0;
  width: 0;
  overflow: hidden;
}

.nav-indicator {
  position: absolute;
  right: -16px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 24px;
  background: #667eea;
  border-radius: 2px;
}

/* User Profile */
.sidebar-footer {
  padding: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.letan-page.dark-mode .sidebar-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  position: relative;
}

.user-avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e2e8f0;
}

.letan-page.dark-mode .user-avatar img {
  border-color: #4a5f7a;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}

.status-indicator.online {
  background: #10b981;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2c3e50;
}

.letan-page.dark-mode .user-name {
  color: #ecf0f1;
}

.user-role {
  font-size: 0.8rem;
  color: #64748b;
}

.letan-page.dark-mode .user-role {
  color: #bdc3c7;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.main-content.sidebar-collapsed {
  margin-left: 0;
}

/* Dashboard Header */
.dashboard-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.letan-page.dark-mode .dashboard-header {
  background: rgba(44, 62, 80, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
}

.page-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.letan-page.dark-mode .page-title {
  color: #ecf0f1;
}

.title-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-icon svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.header-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.stat-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 140px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.letan-page.dark-mode .stat-card {
  background: rgba(52, 73, 94, 0.8);
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-icon.checkin {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.stat-icon.checkout {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.stat-icon.occupancy {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
}

.stat-icon svg {
  width: 20px;
  height: 20px;
  fill: white;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
}

.letan-page.dark-mode .stat-number {
  color: #ecf0f1;
}

.stat-label {
  font-size: 0.8rem;
  color: #64748b;
}

.letan-page.dark-mode .stat-label {
  color: #bdc3c7;
}

/* Tab Content */
.tab-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.letan-page.dark-mode .tab-container {
  background: rgba(44, 62, 80, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tab-content {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

.tab-content.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
}

.section-info {
  flex: 1;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 8px 0;
}

.letan-page.dark-mode .section-title {
  color: #ecf0f1;
}

.section-icon {
  width: 24px;
  height: 24px;
  fill: #667eea;
}

.section-description {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
}

.letan-page.dark-mode .section-description {
  color: #bdc3c7;
}

.content-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.action-btn.primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.action-btn.secondary {
  background: #f8fafc;
  color: #64748b;
  border: 1px solid #e2e8f0;
}

.letan-page.dark-mode .action-btn.secondary {
  background: #34495e;
  color: #bdc3c7;
  border-color: #4a5f7a;
}

.action-btn.secondary:hover {
  background: #e2e8f0;
  color: #2c3e50;
}

.letan-page.dark-mode .action-btn.secondary:hover {
  background: #4a5f7a;
  color: #ecf0f1;
}

.action-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Room Overview */
.room-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.overview-card {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  border-left: 4px solid;
}

.letan-page.dark-mode .overview-card {
  background: rgba(52, 73, 94, 0.8);
}

.overview-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.overview-card.available {
  border-left-color: #10b981;
}

.overview-card.booked {
  border-left-color: #f59e0b;
}

.overview-card.occupied {
  border-left-color: #ef4444;
}

.overview-card.cleaning {
  border-left-color: #3b82f6;
}

.overview-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overview-card.available .overview-icon {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.overview-card.booked .overview-icon {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.overview-card.occupied .overview-icon {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.overview-card.cleaning .overview-icon {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.overview-icon svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.overview-info {
  display: flex;
  flex-direction: column;
}

.overview-number {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
}

.letan-page.dark-mode .overview-number {
  color: #ecf0f1;
}

.overview-label {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

.letan-page.dark-mode .overview-label {
  color: #bdc3c7;
}

/* Table Styles */
.table-container {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.letan-page.dark-mode .table-container {
  background: #34495e;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e2e8f0;
  flex-wrap: wrap;
  gap: 16px;
}

.letan-page.dark-mode .table-header {
  border-bottom-color: #4a5f7a;
}

.table-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.letan-page.dark-mode .table-header h3 {
  color: #ecf0f1;
}

.table-filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-select,
.search-input {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  background: white;
  color: #374151;
  transition: all 0.3s ease;
}

.letan-page.dark-mode .filter-select,
.letan-page.dark-mode .search-input {
  background: #2c3e50;
  border-color: #4a5f7a;
  color: #ecf0f1;
}

.filter-select:focus,
.search-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.modern-table {
  overflow-x: auto;
}

.modern-table table {
  width: 100%;
  border-collapse: collapse;
}

.modern-table th {
  background: #f8fafc;
  color: #374151;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 16px 20px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.letan-page.dark-mode .modern-table th {
  background: #2c3e50;
  color: #bdc3c7;
  border-bottom-color: #4a5f7a;
}

.modern-table td {
  padding: 16px 20px;
  border-bottom: 1px solid #f1f5f9;
  color: #374151;
  font-size: 0.9rem;
}

.letan-page.dark-mode .modern-table td {
  border-bottom-color: #4a5f7a;
  color: #bdc3c7;
}

.table-row {
  transition: all 0.3s ease;
  animation: slideUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.table-row:hover {
  background: #f8fafc;
}

.letan-page.dark-mode .table-row:hover {
  background: rgba(255, 255, 255, 0.05);
}

.room-info,
.service-info {
  display: flex;
  flex-direction: column;
}

.room-number,
.service-name {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 2px;
}

.letan-page.dark-mode .room-number,
.letan-page.dark-mode .service-name {
  color: #ecf0f1;
}

.room-code,
.service-code {
  font-size: 0.8rem;
  color: #64748b;
}

.letan-page.dark-mode .room-code,
.letan-page.dark-mode .service-code {
  color: #95a5a6;
}

.amenities-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.amenity-tag {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.more-amenities {
  color: #64748b;
  font-size: 0.8rem;
  font-style: italic;
}

.letan-page.dark-mode .more-amenities {
  color: #95a5a6;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-badge.status-available {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-badge.status-available .status-indicator {
  background: #10b981;
}

.status-badge.status-booked {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.status-badge.status-booked .status-indicator {
  background: #f59e0b;
}

.status-badge.status-in-use {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.status-badge.status-in-use .status-indicator {
  background: #ef4444;
}

.status-badge.status-cleaning {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.status-badge.status-cleaning .status-indicator {
  background: #3b82f6;
}

.status-badge.active {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-badge.active .status-indicator {
  background: #10b981;
}

.guest-info {
  font-size: 0.9rem;
}

.no-guest {
  color: #94a3b8;
  font-style: italic;
}

.price-info {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.price {
  font-weight: 600;
  color: #2c3e50;
}

.letan-page.dark-mode .price {
  color: #ecf0f1;
}

.currency {
  font-size: 0.8rem;
  color: #64748b;
}

.letan-page.dark-mode .currency {
  color: #95a5a6;
}

.service-description {
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.4;
}

.letan-page.dark-mode .service-description {
  color: #95a5a6;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn.edit,
.action-btn.view,
.action-btn.delete {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn.edit {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.action-btn.edit:hover {
  background: #3b82f6;
  color: white;
}

.action-btn.view {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.action-btn.view:hover {
  background: #10b981;
  color: white;
}

.action-btn.delete {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.action-btn.delete:hover {
  background: #ef4444;
  color: white;
}

.action-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Pagination */
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-top: 1px solid #e2e8f0;
  flex-wrap: wrap;
  gap: 16px;
}

.letan-page.dark-mode .pagination-container {
  border-top-color: #4a5f7a;
}

.pagination-info {
  color: #64748b;
  font-size: 0.9rem;
}

.letan-page.dark-mode .pagination-info {
  color: #95a5a6;
}

.pagination {
  display: flex;
  gap: 4px;
}

.page-btn {
  width: 36px;
  height: 36px;
  border: 1px solid #d1d5db;
  background: white;
  color: #64748b;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
}

.letan-page.dark-mode .page-btn {
  background: #2c3e50;
  border-color: #4a5f7a;
  color: #bdc3c7;
}

.page-btn:hover:not(:disabled) {
  border-color: #667eea;
  color: #667eea;
}

.page-btn.active {
  background: #667eea;
  border-color: #667eea;
  color: white;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Coming Soon */
.coming-soon {
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
}

.letan-page.dark-mode .coming-soon {
  color: #95a5a6;
}

.coming-soon-icon {
  width: 80px;
  height: 80px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  color: #667eea;
}

.coming-soon-icon svg {
  width: 40px;
  height: 40px;
  fill: currentColor;
}

.coming-soon h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.letan-page.dark-mode .coming-soon h3 {
  color: #ecf0f1;
}

.coming-soon p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* Settings Grid */
.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.setting-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.letan-page.dark-mode .setting-card {
  background: #2c3e50;
  border-color: #4a5f7a;
}

.setting-card:hover {
  border-color: #667eea;
  background: #f0f4ff;
}

.letan-page.dark-mode .setting-card:hover {
  background: #34495e;
}

.setting-icon {
  width: 48px;
  height: 48px;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.setting-icon svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.setting-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.letan-page.dark-mode .setting-card h3 {
  color: #ecf0f1;
}

.setting-card p {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 16px;
  line-height: 1.5;
}

.letan-page.dark-mode .setting-card p {
  color: #95a5a6;
}

/* Toggle Switch */
.toggle-switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #667eea;
}

input:checked + .slider:before {
  transform: translateX(24px);
}

/* Modal Styles */
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
  border-radius: 16px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideInUp 0.3s ease;
}

.letan-page.dark-mode .modal-container {
  background: #2c3e50;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.letan-page.dark-mode .modal-header {
  border-bottom-color: #4a5f7a;
}

.modal-header h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.letan-page.dark-mode .modal-header h3 {
  color: #ecf0f1;
}

.modal-icon {
  width: 20px;
  height: 20px;
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

.letan-page.dark-mode .close-btn {
  background: #34495e;
  color: #bdc3c7;
}

.close-btn:hover {
  background: #e2e8f0;
  color: #2c3e50;
}

.letan-page.dark-mode .close-btn:hover {
  background: #4a5f7a;
  color: #ecf0f1;
}

.close-btn svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.modal-content {
  padding: 24px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 6px;
  font-size: 0.9rem;
}

.letan-page.dark-mode .form-group label {
  color: #bdc3c7;
}

.form-input,
.form-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: white;
  color: #374151;
}

.letan-page.dark-mode .form-input,
.letan-page.dark-mode .form-select {
  background: #34495e;
  border-color: #4a5f7a;
  color: #ecf0f1;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 24px;
  border-top: 1px solid #e2e8f0;
}

.letan-page.dark-mode .modal-actions {
  border-top-color: #4a5f7a;
}

.btn-secondary,
.btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary {
  background: #f1f5f9;
  color: #64748b;
}

.letan-page.dark-mode .btn-secondary {
  background: #34495e;
  color: #bdc3c7;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.letan-page.dark-mode .btn-secondary:hover {
  background: #4a5f7a;
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

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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

.toast.info {
  background: #3b82f6;
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
  .modern-sidebar {
    width: 250px;
  }
  
  .modern-sidebar.collapsed {
    width: 70px;
  }
  
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .header-stats {
    width: 100%;
    justify-content: space-between;
  }
  
  .room-overview {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .content-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .settings-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .letan-page {
    flex-direction: column;
  }
  
  .modern-sidebar {
    width: 100%;
    height: auto;
    order: 2;
  }
  
  .modern-sidebar.collapsed {
    width: 100%;
  }
  
  .sidebar-nav {
    display: flex;
    overflow-x: auto;
    padding: 8px 16px;
  }
  
  .nav-item {
    flex-shrink: 0;
    margin: 0 8px 0 0;
  }
  
  .main-content {
    order: 1;
    padding: 16px;
  }
  
  .dashboard-header {
    padding: 16px;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .header-stats {
    grid-template-columns: 1fr 1fr;
  }
  
  .room-overview {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  
  .overview-card {
    padding: 16px;
  }
  
  .overview-number {
    font-size: 1.5rem;
  }
  
  .table-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .table-filters {
    width: 100%;
  }
  
  .filter-select,
  .search-input {
    flex: 1;
  }
  
  .pagination-container {
    flex-direction: column;
    text-align: center;
  }
  
  .modal-container {
    margin: 16px;
  }
  
  .modal-content {
    padding: 16px;
  }
  
  .modal-actions {
    padding: 16px;
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
  
  .main-content {
    padding: 12px;
  }
  
  .dashboard-header {
    padding: 12px;
  }
  
  .tab-container {
    padding: 16px;
  }
  
  .page-title {
    font-size: 1.3rem;
  }
  
  .header-stats {
    grid-template-columns: 1fr;
  }
  
  .room-overview {
    grid-template-columns: 1fr;
  }
  
  .overview-card {
    padding: 12px;
  }
  
  .action-buttons {
    flex-direction: column;
    gap: 4px;
  }
  
  .action-btn.edit,
  .action-btn.view,
  .action-btn.delete {
    width: 100%;
    height: 36px;
    justify-content: flex-start;
    padding: 0 12px;
    gap: 8px;
  }
}
</style>

