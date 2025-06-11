<template>
  <div class="profile-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
    </div>

    <!-- Header Section -->
    <div class="profile-header" :class="{ 'animate-in': isVisible }">
      <div class="header-content">
        <div class="profile-avatar-section">
          <div class="avatar-container">
            <img
              :src="
                userProfile.avatar ||
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
              "
              alt="Avatar"
              class="profile-avatar"
            />
            <div class="avatar-badge">
              <svg viewBox="0 0 24 24" class="badge-icon">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
          </div>
          <div class="profile-info">
            <h1 class="profile-name">{{ form.fullName }}</h1>
            <p class="profile-email">{{ form.email }}</p>
            <div class="profile-stats">
              <div class="stat-item">
                <span class="stat-number">{{ bookingCount }}</span>
                <span class="stat-label">Đặt phòng</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ loyaltyPoints }}</span>
                <span class="stat-label">Điểm tích lũy</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">{{ membershipLevel }}</span>
                <span class="stat-label">Hạng thành viên</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Tabs -->
    <div class="tabs-container" :class="{ 'animate-in': isVisible }">
      <div class="tabs-wrapper">
        <button
          class="tab-button"
          :class="{ active: currentTab === 'info' }"
          @click="switchTab('info')"
        >
          <svg viewBox="0 0 24 24" class="tab-icon">
            <path
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
          <span>Thông tin cá nhân</span>
        </button>
        <button
          class="tab-button"
          :class="{ active: currentTab === 'history' }"
          @click="switchTab('history')"
        >
          <svg viewBox="0 0 24 24" class="tab-icon">
            <path
              d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
            />
          </svg>
          <span>Lịch sử sử dụng</span>
        </button>
        <button
          class="tab-button"
          :class="{ active: currentTab === 'settings' }"
          @click="switchTab('settings')"
        >
          <svg viewBox="0 0 24 24" class="tab-icon">
            <path
              d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
            />
          </svg>
          <span>Cài đặt</span>
        </button>

        <div class="tab-indicator" :style="tabIndicatorStyle"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="profile-content">
      <!-- THÔNG TIN CÁ NHÂN -->
      <div
        v-if="currentTab === 'info'"
        class="tab-content"
        :class="{ 'animate-in': tabAnimationKey === 'info' }"
      >
        <div class="content-card">
          <div class="card-header">
            <h2 class="card-title">
              <svg viewBox="0 0 24 24" class="title-icon">
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
              Thông tin cá nhân
            </h2>
            <div class="card-actions">
              <button v-if="!editable" @click="enableEdit" class="edit-btn">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  />
                </svg>
                Chỉnh sửa
              </button>
            </div>
          </div>

          <form @submit.prevent="handleSave" class="profile-form">
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" class="label-icon">
                    <path
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                  </svg>
                  Họ và tên
                </label>
                <div class="input-wrapper">
                  <input
                    :readonly="!editable"
                    type="text"
                    v-model="form.fullName"
                    class="form-input"
                    :class="{ editable: editable }"
                  />
                  <div v-if="editable" class="input-status">
                    <svg viewBox="0 0 24 24" class="status-icon">
                      <path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" class="label-icon">
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    />
                  </svg>
                  Email
                </label>
                <div class="input-wrapper">
                  <input
                    :readonly="!editable"
                    type="email"
                    v-model="form.email"
                    class="form-input"
                    :class="{ editable: editable }"
                  />
                  <div v-if="editable" class="input-status">
                    <svg viewBox="0 0 24 24" class="status-icon">
                      <path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" class="label-icon">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    />
                  </svg>
                  Số điện thoại
                </label>
                <div class="input-wrapper">
                  <input
                    :readonly="!editable"
                    type="tel"
                    v-model="form.phone"
                    class="form-input"
                    :class="{ editable: editable }"
                  />
                  <div v-if="editable" class="input-status">
                    <svg viewBox="0 0 24 24" class="status-icon">
                      <path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" class="label-icon">
                    <path
                      d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z"
                    />
                  </svg>
                  Số CCCD/Hộ chiếu
                </label>
                <div class="input-wrapper">
                  <input
                    :readonly="!editable"
                    type="text"
                    v-model="form.idNumber"
                    class="form-input"
                    :class="{ editable: editable }"
                  />
                  <div v-if="editable" class="input-status">
                    <svg viewBox="0 0 24 24" class="status-icon">
                      <path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="form-group full-width">
                <label class="form-label">
                  <svg viewBox="0 0 24 24" class="label-icon">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  Địa chỉ liên lạc
                </label>
                <div class="input-wrapper">
                  <input
                    :readonly="!editable"
                    type="text"
                    v-model="form.address"
                    class="form-input"
                    :class="{ editable: editable }"
                  />
                  <div v-if="editable" class="input-status">
                    <svg viewBox="0 0 24 24" class="status-icon">
                      <path
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- OTP Section -->
            <div v-if="otpRequired" class="otp-section">
              <div class="otp-header">
                <h3>Xác thực OTP</h3>
                <p>Vui lòng nhập mã OTP được gửi đến email của bạn</p>
              </div>
              <div class="otp-input-group">
                <div class="otp-inputs">
                  <input
                    v-for="(digit, index) in otpDigits"
                    :key="index"
                    type="text"
                    maxlength="1"
                    v-model="otpDigits[index]"
                    @input="handleOtpInput(index, $event)"
                    @keydown="handleOtpKeydown(index, $event)"
                    class="otp-digit"
                    :ref="(el) => (otpInputs[index] = el)"
                  />
                </div>
                <button
                  type="button"
                  @click="sendOtp"
                  class="resend-btn"
                  :disabled="resendCooldown > 0"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                    />
                  </svg>
                  {{
                    resendCooldown > 0 ? `Gửi lại sau ${resendCooldown}s` : "Gửi lại OTP"
                  }}
                </button>
              </div>
            </div>

            <div v-if="editable" class="form-actions">
              <button type="button" @click="cancelEdit" class="cancel-btn">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
                Hủy
              </button>
              <button type="submit" class="save-btn" :disabled="isSaving">
                <svg v-if="!isSaving" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <div v-else class="loading-spinner"></div>
                {{ isSaving ? "Đang lưu..." : "Lưu thay đổi" }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- LỊCH SỬ SỬ DỤNG -->
      <div
        v-if="currentTab === 'history'"
        class="tab-content"
        :class="{ 'animate-in': tabAnimationKey === 'history' }"
      >
        <div class="content-card">
          <div class="card-header">
            <h2 class="card-title">
              <svg viewBox="0 0 24 24" class="title-icon">
                <path
                  d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
                />
              </svg>
              Lịch sử sử dụng dịch vụ
            </h2>
            <div class="card-actions">
              <button class="export-btn" @click="exportHistory">
                <svg viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                Xuất dữ liệu
              </button>
            </div>
          </div>

          <!-- Filters -->
          <div class="filters-section">
            <div class="filter-group">
              <label class="filter-label">
                <svg viewBox="0 0 24 24" class="filter-icon">
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  />
                </svg>
                Tìm kiếm
              </label>
              <input
                v-model="filters.keyword"
                placeholder="Tìm theo tên dịch vụ/phòng..."
                class="filter-input"
              />
            </div>

            <div class="filter-group">
              <label class="filter-label">
                <svg viewBox="0 0 24 24" class="filter-icon">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
                Loại dịch vụ
              </label>
              <select v-model="filters.type" class="filter-select">
                <option value="">Tất cả</option>
                <option value="room">Đặt phòng</option>
                <option value="service">Dịch vụ</option>
              </select>
            </div>

            <div class="filter-group">
              <label class="filter-label">
                <svg viewBox="0 0 24 24" class="filter-icon">
                  <path
                    d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                  />
                </svg>
                Thời gian
              </label>
              <select v-model="filters.time" class="filter-select">
                <option value="">Tất cả thời gian</option>
                <option value="7">7 ngày qua</option>
                <option value="30">30 ngày qua</option>
                <option value="90">3 tháng qua</option>
              </select>
            </div>
          </div>

          <!-- History Table -->
          <div class="table-container">
            <table class="history-table">
              <thead>
                <tr>
                  <th>Dịch vụ</th>
                  <th>Loại</th>
                  <th>Ngày sử dụng</th>
                  <th>Trạng thái</th>
                  <th>Chi phí</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in paginatedHistory"
                  :key="item.id"
                  class="table-row"
                  :style="{ animationDelay: `${index * 0.1}s` }"
                >
                  <td>
                    <div class="service-info">
                      <div class="service-icon">
                        <svg v-if="item.type === 'room'" viewBox="0 0 24 24">
                          <path
                            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"
                          />
                        </svg>
                        <svg v-else viewBox="0 0 24 24">
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          />
                        </svg>
                      </div>
                      <span class="service-name">{{ item.name }}</span>
                    </div>
                  </td>
                  <td>
                    <span class="service-type" :class="item.type">
                      {{ item.type === "room" ? "Đặt phòng" : "Dịch vụ" }}
                    </span>
                  </td>
                  <td>{{ formatDate(item.date) }}</td>
                  <td>
                    <span class="status-badge" :class="getStatusClass(item.status)">
                      {{ item.status }}
                    </span>
                  </td>
                  <td class="price-cell">{{ formatPrice(item.price) }}</td>
                  <td>
                    <div class="action-buttons">
                      <button class="action-btn view" title="Xem chi tiết">
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                          />
                        </svg>
                      </button>
                      <button class="action-btn download" title="Tải hóa đơn">
                        <svg viewBox="0 0 24 24">
                          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="pagination-container" v-if="totalPages > 1">
            <div class="pagination-info">
              Hiển thị {{ (currentPage - 1) * itemsPerPage + 1 }} -
              {{ Math.min(currentPage * itemsPerPage, filteredHistory.length) }} trong
              tổng số {{ filteredHistory.length }} bản ghi
            </div>
            <div class="pagination">
              <button
                class="page-btn"
                :disabled="currentPage === 1"
                @click="currentPage--"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                v-for="page in visiblePages"
                :key="page"
                class="page-btn"
                :class="{ active: currentPage === page }"
                @click="currentPage = page"
              >
                {{ page }}
              </button>
              <button
                class="page-btn"
                :disabled="currentPage === totalPages"
                @click="currentPage++"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CÀI ĐẶT -->
      <div
        v-if="currentTab === 'settings'"
        class="tab-content"
        :class="{ 'animate-in': tabAnimationKey === 'settings' }"
      >
        <div class="content-card">
          <div class="card-header">
            <h2 class="card-title">
              <svg viewBox="0 0 24 24" class="title-icon">
                <path
                  d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
                />
              </svg>
              Cài đặt tài khoản
            </h2>
          </div>

          <div class="settings-grid">
            <div class="setting-card">
              <div class="setting-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
              <div class="setting-content">
                <h3>Thông báo Email</h3>
                <p>Nhận thông báo về đặt phòng và ưu đãi</p>
                <label class="toggle-switch">
                  <input type="checkbox" v-model="settings.emailNotifications" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>

            <div class="setting-card">
              <div class="setting-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
              <div class="setting-content">
                <h3>Thông báo SMS</h3>
                <p>Nhận SMS xác nhận và nhắc nhở</p>
                <label class="toggle-switch">
                  <input type="checkbox" v-model="settings.smsNotifications" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>

            <div class="setting-card">
              <div class="setting-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
              <div class="setting-content">
                <h3>Chế độ riêng tư</h3>
                <p>Ẩn thông tin cá nhân khỏi người khác</p>
                <label class="toggle-switch">
                  <input type="checkbox" v-model="settings.privateMode" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>

            <div class="setting-card">
              <div class="setting-icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                  />
                </svg>
              </div>
              <div class="setting-content">
                <h3>Đăng nhập 2 lớp</h3>
                <p>Tăng cường bảo mật với xác thực 2 yếu tố</p>
                <label class="toggle-switch">
                  <input type="checkbox" v-model="settings.twoFactorAuth" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
          </div>

          <div class="danger-zone">
            <h3>Vùng nguy hiểm</h3>
            <div class="danger-actions">
              <button class="danger-btn" @click="changePassword">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
                  />
                </svg>
                Đổi mật khẩu
              </button>
              <button class="danger-btn delete" @click="deleteAccount">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                  />
                </svg>
                Xóa tài khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div
      v-if="successMessage"
      class="success-message"
      :class="{ show: showSuccessMessage }"
    >
      <div class="message-content">
        <svg viewBox="0 0 24 24" class="message-icon">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
        <span>{{ successMessage }}</span>
      </div>
    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" :class="[toastType, { show: showToast }]">
      <div class="toast-content">
        <svg v-if="toastType === 'success'" viewBox="0 0 24 24" class="toast-icon">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="toast-icon">
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCookie } from "#app";
import { axiosBase } from "~/utils/axiosBase";
import { usePhanQuyenStore } from "~/store/PhanQuyenCookie";

const currentTab = ref("info");
const tabAnimationKey = ref("info");
const isVisible = ref(false);
const editable = ref(false);
const otpRequired = ref(false);
const otpDigits = ref(["", "", "", "", "", ""]);
const otpInputs = ref([]);
const generatedOtp = ref("");
const successMessage = ref("");
const showSuccessMessage = ref(false);
const isSaving = ref(false);
const resendCooldown = ref(0);
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");
const currentPage = ref(1);
const itemsPerPage = ref(5);

// User data
const userProfile = ref({
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
});

const bookingCount = ref(12);
const loyaltyPoints = ref(2450);
const membershipLevel = ref("Gold");

const form = ref({
  fullName: "Nguyễn Văn A",
  email: "nguyenvana@gmail.com",
  phone: "+84987654321",
  idNumber: "012345678901",
  address: "123 Võ Nguyên Giáp, Đà Nẵng",
});

const settings = ref({
  emailNotifications: true,
  smsNotifications: false,
  privateMode: false,
  twoFactorAuth: false,
});

// Filters
const filters = ref({
  keyword: "",
  type: "",
  time: "",
});

// History data
const history = ref([
  {
    id: 1,
    name: "Phòng Deluxe Ocean View",
    type: "room",
    date: "2024-04-01",
    status: "Hoàn tất",
    price: 1500000,
  },
  {
    id: 2,
    name: "Spa thư giãn toàn thân",
    type: "service",
    date: "2024-04-02",
    status: "Hoàn tất",
    price: 400000,
  },
  {
    id: 3,
    name: "Phòng Superior Garden",
    type: "room",
    date: "2024-03-20",
    status: "Đang xử lý",
    price: 1200000,
  },
  {
    id: 4,
    name: "Tour Bà Nà Hills",
    type: "service",
    date: "2024-03-15",
    status: "Hoàn tất",
    price: 800000,
  },
  {
    id: 5,
    name: "Massage đá nóng",
    type: "service",
    date: "2024-03-10",
    status: "Hoàn tất",
    price: 350000,
  },
  {
    id: 6,
    name: "Phòng Standard",
    type: "room",
    date: "2024-02-28",
    status: "Đã hủy",
    price: 900000,
  },
  {
    id: 7,
    name: "Buffet tối",
    type: "service",
    date: "2024-02-25",
    status: "Hoàn tất",
    price: 250000,
  },
  {
    id: 8,
    name: "Phòng Premium",
    type: "room",
    date: "2024-02-15",
    status: "Hoàn tất",
    price: 1800000,
  },
]);

// Computed properties
const tabIndicatorStyle = computed(() => {
  const tabIndex = ["info", "history", "settings"].indexOf(currentTab.value);
  return {
    transform: `translateX(${tabIndex * 100}%)`,
  };
});

const filteredHistory = computed(() => {
  return history.value.filter((item) => {
    const matchKeyword = item.name
      .toLowerCase()
      .includes(filters.value.keyword.toLowerCase());
    const matchType = filters.value.type ? item.type === filters.value.type : true;
    const matchTime = filters.value.time
      ? (Date.now() - new Date(item.date).getTime()) / (1000 * 3600 * 24) <=
        parseInt(filters.value.time)
      : true;
    return matchKeyword && matchType && matchTime;
  });
});

const totalPages = computed(() =>
  Math.ceil(filteredHistory.value.length / itemsPerPage.value)
);

const paginatedHistory = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filteredHistory.value.slice(start, start + itemsPerPage.value);
});

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const delta = 2;
  const range = [];
  const rangeWithDots = [];

  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }

  if (current - delta > 2) {
    rangeWithDots.push(1, "...");
  } else {
    rangeWithDots.push(1);
  }

  rangeWithDots.push(...range);

  if (current + delta < total - 1) {
    rangeWithDots.push("...", total);
  } else {
    rangeWithDots.push(total);
  }

  return rangeWithDots.filter(
    (item) =>
      item !== "..." || rangeWithDots.indexOf(item) === rangeWithDots.lastIndexOf(item)
  );
});

const otp = computed(() => otpDigits.value.join(""));

// Methods
const switchTab = (tab) => {
  currentTab.value = tab;
  tabAnimationKey.value = "";
  nextTick(() => {
    tabAnimationKey.value = tab;
  });
};

const enableEdit = () => {
  editable.value = true;
  otpRequired.value = true;
};

const cancelEdit = () => {
  editable.value = false;
  otpRequired.value = false;
  otpDigits.value = ["", "", "", "", "", ""];
};

const sendOtp = () => {
  generatedOtp.value = (Math.floor(Math.random() * 900000) + 100000).toString();
  showToastMessage(`Mã OTP đã được gửi: ${generatedOtp.value}`, "success");

  // Start countdown
  resendCooldown.value = 60;
  const interval = setInterval(() => {
    resendCooldown.value--;
    if (resendCooldown.value <= 0) {
      clearInterval(interval);
    }
  }, 1000);
};

const handleOtpInput = (index, event) => {
  const value = event.target.value;
  if (value && index < 5) {
    otpInputs.value[index + 1]?.focus();
  }
};

const handleOtpKeydown = (index, event) => {
  if (event.key === "Backspace" && !otpDigits.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus();
  }
};

const handleSave = async () => {
  if (otpRequired.value && otp.value !== generatedOtp.value) {
    showToastMessage("Mã OTP không chính xác hoặc đã hết hạn", "error");
    return;
  }

  isSaving.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  editable.value = false;
  otpRequired.value = false;
  otpDigits.value = ["", "", "", "", "", ""];
  isSaving.value = false;

  successMessage.value = "Thông tin đã được cập nhật thành công!";
  showSuccessMessage.value = true;

  setTimeout(() => {
    showSuccessMessage.value = false;
    successMessage.value = "";
  }, 3000);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const getStatusClass = (status) => {
  switch (status) {
    case "Hoàn tất":
      return "completed";
    case "Đang xử lý":
      return "processing";
    case "Đã hủy":
      return "cancelled";
    default:
      return "";
  }
};

const showToastMessage = (message, type = "success") => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;

  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

const exportHistory = () => {
  showToastMessage("Đang xuất dữ liệu...", "success");
  // Implement export logic
};

const changePassword = () => {
  showToastMessage("Chức năng đổi mật khẩu sẽ sớm được cập nhật", "info");
};

const deleteAccount = () => {
  if (confirm("Bạn có chắc chắn muốn xóa tài khoản? Hành động này không thể hoàn tác.")) {
    showToastMessage("Yêu cầu xóa tài khoản đã được ghi nhận", "info");
  }
};

// Watch filters to reset pagination
watch(
  filters,
  () => {
    currentPage.value = 1;
  },
  { deep: true }
);

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
    tabAnimationKey.value = "info";
  }, 100);

  const { isLoggedIn } = usePhanQuyenStore();
  if (!isLoggedIn()) {
    // Có thể chuyển hướng về trang đăng nhập hoặc báo lỗi
    return;
  }

  const token = useCookie("token").value;
  axiosBase
    .get("/xacthuc/profile", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
    .then((res) => {
      const data = res.data?.data; // LẤY ĐÚNG TRƯỜNG data
      if (data) {
        userProfile.value.avatar = data.hinhAnhUrl || userProfile.value.avatar;
        form.value.fullName = data.hoTen || "";
        form.value.email = data.email || "";
        form.value.phone = data.soDienThoai || "";
        form.value.idNumber = data.canCuocCongDan || "";
        form.value.address = data.diaChi || "";
      }
    })
    .catch(() => {
      showToastMessage("Không lấy được thông tin tài khoản", "error");
    });
});
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: "Inter", "Segoe UI", sans-serif;
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
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

/* Profile Header */
.profile-header {
  position: relative;
  z-index: 2;
  padding: 60px 20px 40px 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.profile-header.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
}

.profile-avatar-section {
  display: flex;
  align-items: center;
  gap: 32px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.avatar-container {
  position: relative;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.avatar-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
}

.badge-icon {
  width: 16px;
  height: 16px;
  fill: white;
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 8px;
}

.profile-email {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 24px;
}

.profile-stats {
  display: flex;
  gap: 32px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
}

/* Tabs */
.tabs-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.tabs-container.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.tabs-wrapper {
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  background: transparent;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.tab-button.active {
  color: #667eea;
  font-weight: 600;
}

.tab-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.tab-indicator {
  position: absolute;
  top: 8px;
  left: 8px;
  width: calc(33.333% - 5.33px);
  height: calc(100% - 16px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  transition: transform 0.3s ease;
  z-index: 1;
}

/* Content */
.profile-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
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

/* Content Card */
.content-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e2e8f0;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.title-icon {
  width: 24px;
  height: 24px;
  fill: #667eea;
}

.card-actions {
  display: flex;
  gap: 12px;
}

.edit-btn,
.export-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #667eea;
  background: transparent;
  color: #667eea;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.edit-btn:hover,
.export-btn:hover {
  background: #667eea;
  color: white;
}

.edit-btn svg,
.export-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Form Styles */
.profile-form {
  margin-bottom: 24px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.label-icon {
  width: 16px;
  height: 16px;
  fill: #667eea;
}

.input-wrapper {
  position: relative;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8fafc;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.editable {
  background: white;
  border-color: #667eea;
}

.input-status {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.status-icon {
  width: 16px;
  height: 16px;
  fill: #667eea;
}

/* OTP Section */
.otp-section {
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
}

.otp-header {
  text-align: center;
  margin-bottom: 20px;
}

.otp-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.otp-header p {
  color: #64748b;
  font-size: 0.9rem;
}

.otp-input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.otp-inputs {
  display: flex;
  gap: 8px;
}

.otp-digit {
  width: 48px;
  height: 48px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.otp-digit:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.resend-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #64748b;
  background: transparent;
  color: #64748b;
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.resend-btn:hover:not(:disabled) {
  border-color: #667eea;
  color: #667eea;
}

.resend-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.resend-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.cancel-btn,
.save-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-btn {
  background: #f1f5f9;
  color: #64748b;
}

.cancel-btn:hover {
  background: #e2e8f0;
}

.save-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.save-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.save-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cancel-btn svg,
.save-btn svg {
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Filters Section */
.filters-section {
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
}

.filter-icon {
  width: 14px;
  height: 14px;
  fill: #667eea;
}

.filter-input,
.filter-select {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.filter-input:focus,
.filter-select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

/* History Table */
.table-container {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.history-table thead {
  background: #f8fafc;
}

.history-table th {
  padding: 16px 12px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
  border-bottom: 1px solid #e2e8f0;
}

.history-table td {
  padding: 16px 12px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.9rem;
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

.service-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.service-icon {
  width: 32px;
  height: 32px;
  background: #f1f5f9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon svg {
  width: 16px;
  height: 16px;
  fill: #667eea;
}

.service-name {
  font-weight: 500;
  color: #2c3e50;
}

.service-type {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.service-type.room {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.service-type.service {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-badge.completed {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-badge.processing {
  background: rgba(251, 191, 36, 0.1);
  color: #f59e0b;
}

.status-badge.cancelled {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.price-cell {
  font-weight: 600;
  color: #2c3e50;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
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

.action-btn.view {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.action-btn.download {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.action-btn:hover {
  transform: translateY(-1px);
}

.action-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

/* Pagination */
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.pagination-info {
  font-size: 0.9rem;
  color: #64748b;
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

/* Settings Grid */
.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.setting-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.setting-card:hover {
  border-color: #667eea;
  background: #f0f4ff;
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

.setting-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.setting-content p {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 16px;
  line-height: 1.5;
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

/* Danger Zone */
.danger-zone {
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 12px;
  padding: 24px;
}

.danger-zone h3 {
  color: #dc2626;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.danger-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.danger-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1px solid #dc2626;
  background: transparent;
  color: #dc2626;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.danger-btn:hover {
  background: #dc2626;
  color: white;
}

.danger-btn.delete {
  border-color: #991b1b;
  color: #991b1b;
}

.danger-btn.delete:hover {
  background: #991b1b;
}

.danger-btn svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Success Message */
.success-message {
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

.success-message.show {
  transform: translateX(0);
  opacity: 1;
}

.message-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.message-icon {
  width: 20px;
  height: 20px;
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
  .profile-avatar-section {
    flex-direction: column;
    text-align: center;
    gap: 24px;
  }

  .profile-stats {
    justify-content: center;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-group.full-width {
    grid-column: 1;
  }

  .settings-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .profile-page {
    padding: 20px 16px;
  }

  .profile-header {
    padding: 40px 20px 20px 20px;
  }

  .profile-avatar-section {
    padding: 24px;
  }

  .profile-name {
    font-size: 2rem;
  }

  .profile-stats {
    flex-direction: column;
    gap: 16px;
  }

  .tabs-wrapper {
    flex-direction: column;
    gap: 4px;
  }

  .tab-indicator {
    display: none;
  }

  .tab-button.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .content-card {
    padding: 20px;
  }

  .card-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .form-actions {
    flex-direction: column;
  }

  .otp-inputs {
    gap: 6px;
  }

  .otp-digit {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .filters-section {
    padding: 16px;
  }

  .table-container {
    font-size: 0.8rem;
  }

  .history-table th,
  .history-table td {
    padding: 8px 6px;
  }

  .pagination-container {
    flex-direction: column;
    gap: 16px;
  }

  .danger-actions {
    flex-direction: column;
  }

  .toast,
  .success-message {
    right: 16px;
    left: 16px;
    transform: translateY(-100px);
  }

  .toast.show,
  .success-message.show {
    transform: translateY(0);
  }
}

@media (max-width: 480px) {
  .floating-shape {
    display: none;
  }

  .profile-avatar {
    width: 100px;
    height: 100px;
  }

  .profile-name {
    font-size: 1.8rem;
  }

  .content-card {
    padding: 16px;
  }

  .form-grid {
    gap: 16px;
  }

  .otp-inputs {
    gap: 4px;
  }

  .otp-digit {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }

  .action-buttons {
    flex-direction: column;
    gap: 4px;
  }

  .action-btn {
    width: 100%;
    height: 36px;
    justify-content: flex-start;
    padding: 0 12px;
    gap: 8px;
  }
}
</style>
