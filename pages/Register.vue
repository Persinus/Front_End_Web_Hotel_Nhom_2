<template>
  <div class="register-page">
    <!-- Background Animation -->
    <div class="background-animation">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Main Container -->
    <div class="register-container">
      <!-- Left Side - Form -->
      <div class="register-form-section" :class="{ 'animate-in': isVisible }">
        <!-- Header -->
        <div class="form-header">
          <div class="hotel-branding">
            <div class="logo-icon">
              <svg viewBox="0 0 24 24" class="logo-svg">
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z"/>
                <path d="M12 7v5l4 2-4 2v5"/>
              </svg>
            </div>
            <div class="logo-text">
              <h1>OceanView Hotels</h1>
              <span>Luxury Experience</span>
            </div>
          </div>
          
          <div class="welcome-section">
            <h2 class="page-title">
              <span class="title-line">Tạo tài khoản</span>
              <span class="title-highlight">Khách hàng</span>
            </h2>
            <p class="page-subtitle">
              Đã có tài khoản? 
              <a href="/login" class="login-link">Đăng nhập ngay</a>
            </p>
          </div>
        </div>

        <!-- Registration Form -->
        <form @submit.prevent="handleRegister" class="registration-form">
          <!-- Progress Indicator -->
          <div class="form-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${formProgress}%` }"></div>
            </div>
            <span class="progress-text">{{ Math.round(formProgress) }}% hoàn thành</span>
          </div>

          <!-- Form Grid -->
          <div class="form-grid">
            <!-- Họ và tên -->
            <div class="form-group">
              <label for="name" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Họ và tên *
              </label>
              <div class="input-wrapper">
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.hoTen"
                  placeholder="Nhập họ và tên đầy đủ"
                  class="form-input"
                  :class="{ 'error': errors.hoTen, 'success': form.hoTen && !errors.hoTen }"
                  @input="validateField('hoTen')"
                  @focus="activeField = 'hoTen'"
                  @blur="activeField = ''"
                  required
                />
                <div class="input-status" v-if="form.hoTen && !errors.hoTen">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <span v-if="errors.hoTen" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errors.hoTen }}
              </span>
            </div>

            <!-- CCCD -->
            <div class="form-group">
              <label for="idCard" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z"/>
                </svg>
                Căn cước công dân *
              </label>
              <div class="input-wrapper">
                <input 
                  type="text" 
                  id="idCard" 
                  v-model="form.canCuocCongDan"
                  placeholder="Nhập số CCCD (9-12 số)"
                  class="form-input"
                  :class="{ 'error': errors.canCuocCongDan, 'success': form.canCuocCongDan && !errors.canCuocCongDan }"
                  @input="validateField('canCuocCongDan')"
                  @focus="activeField = 'canCuocCongDan'"
                  @blur="activeField = ''"
                  required
                />
                <div class="input-status" v-if="form.canCuocCongDan && !errors.canCuocCongDan">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <span v-if="errors.canCuocCongDan" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errors.canCuocCongDan }}
              </span>
            </div>

            <!-- Số điện thoại -->
            <div class="form-group">
              <label for="phone" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Số điện thoại *
              </label>
              <div class="input-wrapper">
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.soDienThoai"
                  placeholder="Nhập số điện thoại (10-11 số)"
                  class="form-input"
                  :class="{ 'error': errors.soDienThoai, 'success': form.soDienThoai && !errors.soDienThoai }"
                  @input="validateField('soDienThoai')"
                  @focus="activeField = 'soDienThoai'"
                  @blur="activeField = ''"
                  required
                />
                <div class="input-status" v-if="form.soDienThoai && !errors.soDienThoai">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <span v-if="errors.soDienThoai" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errors.soDienThoai }}
              </span>
            </div>

            <!-- Email -->
            <div class="form-group">
              <label for="email" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Địa chỉ Email *
              </label>
              <div class="input-wrapper">
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  placeholder="Nhập địa chỉ email"
                  class="form-input"
                  :class="{ 'error': errors.email, 'success': form.email && !errors.email }"
                  @input="validateField('email')"
                  @focus="activeField = 'email'"
                  @blur="activeField = ''"
                  required
                />
                <div class="input-status" v-if="form.email && !errors.email">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <span v-if="errors.email" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errors.email }}
              </span>
            </div>

            <!-- Địa chỉ -->
            <div class="form-group full-width">
              <label for="address" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Địa chỉ liên lạc *
              </label>
              <div class="input-wrapper">
                <input 
                  type="text" 
                  id="address" 
                  v-model="form.diaChi"
                  placeholder="Nhập địa chỉ đầy đủ"
                  class="form-input"
                  :class="{ 'error': errors.diaChi, 'success': form.diaChi && !errors.diaChi }"
                  @input="validateField('diaChi')"
                  @focus="activeField = 'diaChi'"
                  @blur="activeField = ''"
                  required
                />
                <div class="input-status" v-if="form.diaChi && !errors.diaChi">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <span v-if="errors.diaChi" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errors.diaChi }}
              </span>
            </div>

            <!-- Ngày sinh -->
            <div class="form-group">
              <label for="dob" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
                Ngày sinh *
              </label>
              <div class="input-wrapper">
                <input 
                  type="date" 
                  id="dob" 
                  v-model="form.ngaySinh"
                  class="form-input"
                  :class="{ 'error': errors.ngaySinh, 'success': form.ngaySinh && !errors.ngaySinh }"
                  @input="validateField('ngaySinh')"
                  @focus="activeField = 'ngaySinh'"
                  @blur="activeField = ''"
                  required
                />
                <div class="input-status" v-if="form.ngaySinh && !errors.ngaySinh">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <span v-if="errors.ngaySinh" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errors.ngaySinh }}
              </span>
            </div>

            <!-- Giới tính -->
            <div class="form-group">
              <label class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Giới tính *
              </label>
              <div class="gender-options">
                <label class="gender-option">
                  <input type="radio" v-model="form.gioiTinh" value="Nam" />
                  <span class="radio-custom"></span>
                  <span class="gender-text">Nam</span>
                </label>
                <label class="gender-option">
                  <input type="radio" v-model="form.gioiTinh" value="Nu" />
                  <span class="radio-custom"></span>
                  <span class="gender-text">Nữ</span>
                </label>
              </div>
            </div>

            <!-- Tên tài khoản -->
            <div class="form-group">
              <label for="username" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Tên tài khoản *
              </label>
              <div class="input-wrapper">
                <input 
                  type="text" 
                  id="username" 
                  v-model="form.tenTaiKhoan"
                  placeholder="Nhập tên tài khoản (tối thiểu 5 ký tự)"
                  class="form-input"
                  :class="{ 'error': errors.tenTaiKhoan, 'success': form.tenTaiKhoan && !errors.tenTaiKhoan }"
                  @input="validateField('tenTaiKhoan')"
                  @focus="activeField = 'tenTaiKhoan'"
                  @blur="activeField = ''"
                  required
                />
                <div class="input-status" v-if="form.tenTaiKhoan && !errors.tenTaiKhoan">
                  <svg viewBox="0 0 24 24" class="status-icon success">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
              <span v-if="errors.tenTaiKhoan" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errors.tenTaiKhoan }}
              </span>
            </div>

            <!-- Mật khẩu -->
            <div class="form-group">
              <label for="password" class="form-label">
                <svg viewBox="0 0 24 24" class="label-icon">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                Mật khẩu *
              </label>
              <div class="input-wrapper">
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  id="password" 
                  v-model="form.matKhau"
                  placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                  class="form-input"
                  :class="{ 'error': errors.matKhau, 'success': form.matKhau && !errors.matKhau }"
                  @input="validateField('matKhau')"
                  @focus="activeField = 'matKhau'"
                  @blur="activeField = ''"
                  required
                />
                <button
                  type="button"
                  class="password-toggle"
                  @click="showPassword = !showPassword"
                  :title="showPassword ? 'Ẩn mật khẩu' : 'Hiển thị mật khẩu'"
                >
                  <svg v-if="showPassword" viewBox="0 0 24 24">
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                  </svg>
                  <svg v-else viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </button>
              </div>
              
              <!-- Password Strength Indicator -->
              <div v-if="form.matKhau" class="password-strength">
                <div class="strength-bar">
                  <div class="strength-fill" :class="passwordStrength.class" :style="{ width: `${passwordStrength.percentage}%` }"></div>
                </div>
                <span class="strength-text" :class="passwordStrength.class">{{ passwordStrength.text }}</span>
              </div>
              
              <span v-if="errors.matKhau" class="error-message">
                <svg viewBox="0 0 24 24" class="error-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {{ errors.matKhau }}
              </span>
            </div>
          </div>

          <!-- Terms and Conditions -->
          <div class="terms-section">
            <label class="terms-checkbox">
              <input type="checkbox" v-model="acceptTerms" required />
              <span class="checkbox-custom"></span>
              <span class="terms-text">
                Tôi đồng ý với 
                <a href="#" class="terms-link">Điều khoản sử dụng</a> 
                và 
                <a href="#" class="terms-link">Chính sách bảo mật</a>
              </span>
            </label>
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="submit-button"
            :disabled="isLoading || !isFormValid"
            :class="{ 'loading': isLoading }"
          >
            <div class="btn-content">
              <svg v-if="!isLoading" viewBox="0 0 24 24" class="btn-icon">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <div v-else class="loading-spinner"></div>
              <span>{{ isLoading ? 'Đang xử lý...' : 'Tạo tài khoản' }}</span>
            </div>
          </button>

          <!-- Message -->
          <div v-if="message" class="message-container" :class="messageType">
            <svg v-if="messageType === 'success'" viewBox="0 0 24 24" class="message-icon">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" class="message-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>{{ message }}</span>
          </div>
        </form>
      </div>

      <!-- Right Side - Illustration -->
      <div class="illustration-section" :class="{ 'animate-in': isVisible }">
        <div class="illustration-container">
          <div class="hotel-illustration">
            <div class="building">
              <div class="building-base"></div>
              <div class="building-floors">
                <div class="floor" v-for="n in 6" :key="n" :style="{ animationDelay: `${n * 0.2}s` }">
                  <div class="window" v-for="w in 4" :key="w"></div>
                </div>
              </div>
              <div class="building-top">
                <div class="logo-sign">OceanView</div>
              </div>
            </div>
            
            <div class="decorative-elements">
              <div class="cloud cloud-1"></div>
              <div class="cloud cloud-2"></div>
              <div class="sun"></div>
              <div class="birds">
                <div class="bird" v-for="b in 3" :key="b" :style="{ animationDelay: `${b * 0.5}s` }"></div>
              </div>
            </div>
          </div>
          
          <div class="benefits-list">
            <h3>Tại sao chọn OceanView?</h3>
            <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index" :style="{ animationDelay: `${index * 0.2}s` }">
              <div class="benefit-icon">
                <svg viewBox="0 0 24 24">
                  <path :d="benefit.icon"/>
                </svg>
              </div>
              <div class="benefit-content">
                <h4>{{ benefit.title }}</h4>
                <p>{{ benefit.description }}</p>
              </div>
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
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Reactive data
const isLoading = ref(false)
const message = ref('')
const messageType = ref('')
const errors = reactive({})
const isVisible = ref(false)
const activeField = ref('')
const showPassword = ref(false)
const acceptTerms = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

const form = ref({
  email: '',
  tenTaiKhoan: '',
  matKhau: '',
  hoTen: '',
  soDienThoai: '',
  diaChi: '',
  ngaySinh: '',
  gioiTinh: 'Nu',
  hinhAnhUrl: '',
  canCuocCongDan: '',
  ngayTao: new Date().toISOString()
})

const benefits = ref([
  {
    title: 'Vị trí đắc địa',
    description: 'Ngay trung tâm thành phố với view biển tuyệt đẹp',
    icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
  },
  {
    title: 'Dịch vụ 5 sao',
    description: 'Đội ngũ nhân viên chuyên nghiệp, tận tâm 24/7',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
  },
  {
    title: 'Tiện nghi hiện đại',
    description: 'Phòng ốc sang trọng với đầy đủ tiện nghi cao cấp',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z'
  },
  {
    title: 'Ưu đãi hấp dẫn',
    description: 'Nhiều chương trình khuyến mãi và tích điểm',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
  }
])

// Computed properties
const formProgress = computed(() => {
  const fields = ['hoTen', 'canCuocCongDan', 'soDienThoai', 'email', 'diaChi', 'ngaySinh', 'tenTaiKhoan', 'matKhau']
  const filledFields = fields.filter(field => form.value[field] && !errors[field])
  return (filledFields.length / fields.length) * 100
})

const passwordStrength = computed(() => {
  const password = form.value.matKhau
  if (!password) return { percentage: 0, text: '', class: '' }
  
  let score = 0
  if (password.length >= 6) score += 25
  if (password.length >= 8) score += 25
  if (/[A-Z]/.test(password)) score += 25
  if (/[0-9]/.test(password)) score += 25
  
  if (score < 50) return { percentage: score, text: 'Yếu', class: 'weak' }
  if (score < 75) return { percentage: score, text: 'Trung bình', class: 'medium' }
  return { percentage: score, text: 'Mạnh', class: 'strong' }
})

const isFormValid = computed(() => {
  const requiredFields = ['hoTen', 'canCuocCongDan', 'soDienThoai', 'email', 'diaChi', 'ngaySinh', 'tenTaiKhoan', 'matKhau']
  const hasAllFields = requiredFields.every(field => form.value[field])
  const hasNoErrors = !Object.values(errors).some(error => error)
  return hasAllFields && hasNoErrors && acceptTerms.value
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

const validateField = (fieldName) => {
  const value = form.value[fieldName]
  
  switch (fieldName) {
    case 'hoTen':
      errors.hoTen = !value ? 'Họ và tên là bắt buộc' : ''
      break
    case 'canCuocCongDan':
      if (!value) {
        errors.canCuocCongDan = 'Số CCCD là bắt buộc'
      } else if (!/^\d{9,12}$/.test(value)) {
        errors.canCuocCongDan = 'CCCD phải có 9-12 chữ số'
      } else {
        errors.canCuocCongDan = ''
      }
      break
    case 'soDienThoai':
      if (!value) {
        errors.soDienThoai = 'Số điện thoại là bắt buộc'
      } else if (!/^\d{10,11}$/.test(value)) {
        errors.soDienThoai = 'Số điện thoại phải có 10-11 chữ số'
      } else {
        errors.soDienThoai = ''
      }
      break
    case 'email':
      if (!value) {
        errors.email = 'Email là bắt buộc'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors.email = 'Định dạng email không hợp lệ'
      } else {
        errors.email = ''
      }
      break
    case 'diaChi':
      errors.diaChi = !value ? 'Địa chỉ là bắt buộc' : ''
      break
    case 'ngaySinh':
      errors.ngaySinh = !value ? 'Ngày sinh là bắt buộc' : ''
      break
    case 'tenTaiKhoan':
      if (!value) {
        errors.tenTaiKhoan = 'Tên tài khoản là bắt buộc'
      } else if (value.length < 5) {
        errors.tenTaiKhoan = 'Tên tài khoản phải có ít nhất 5 ký tự'
      } else {
        errors.tenTaiKhoan = ''
      }
      break
    case 'matKhau':
      if (!value) {
        errors.matKhau = 'Mật khẩu là bắt buộc'
      } else if (value.length < 6) {
        errors.matKhau = 'Mật khẩu phải có ít nhất 6 ký tự'
      } else {
        errors.matKhau = ''
      }
      break
  }
}

const validateForm = () => {
  const fields = ['hoTen', 'canCuocCongDan', 'soDienThoai', 'email', 'diaChi', 'ngaySinh', 'tenTaiKhoan', 'matKhau']
  fields.forEach(field => validateField(field))
  return isFormValid.value
}

const handleRegister = async () => {
  if (!validateForm()) {
    showToastMessage('Vui lòng kiểm tra lại thông tin đăng ký', 'error')
    return
  }

  try {
    isLoading.value = true
    message.value = ''
    
    // Format date to ISO string for API
    if (form.value.ngaySinh) {
      form.value.ngaySinh = new Date(form.value.ngaySinh).toISOString()
    }
    
    // Update ngayTao to current time
    form.value.ngayTao = new Date().toISOString()
    
    const response = await fetch('https://nhom2webkhachsan.runasp.net/api/allowanonymous/dangky', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })
    
    const data = await response.json()
    
    if (response.ok) {
      message.value = 'Tài khoản đã được tạo thành công! Đang chuyển hướng đến trang đăng nhập...'
      messageType.value = 'success'
      showToastMessage('Đăng ký thành công!')
      console.log('Registration successful:', data)
      
      // Redirect to login page after successful registration
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } else {
      message.value = data.message || 'Đăng ký thất bại. Vui lòng kiểm tra lại thông tin và thử lại.'
      messageType.value = 'error'
      showToastMessage('Đăng ký thất bại', 'error')
      console.error('Registration error:', data)
    }
  } catch (error) {
    console.error('Error during registration:', error)
    message.value = 'Đăng ký thất bại. Vui lòng thử lại sau.'
    messageType.value = 'error'
    showToastMessage('Có lỗi xảy ra. Vui lòng thử lại!', 'error')
  } finally {
    isLoading.value = false
  }
}

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 30%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 30%;
  animation-delay: 1s;
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

/* Main Container */
.register-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
}

/* Form Section */
.register-form-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease;
}

.register-form-section.animate-in {
  opacity: 1;
  transform: translateX(0);
}

/* Form Header */
.form-header {
  margin-bottom: 32px;
}

.hotel-branding {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.logo-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-svg {
  width: 30px;
  height: 30px;
  fill: white;
}

.logo-text h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px 0;
}

.logo-text span {
  font-size: 0.9rem;
  color: #64748b;
  font-style: italic;
}

.welcome-section {
  margin-bottom: 24px;
}

.page-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 8px;
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
  color: #64748b;
  font-size: 1rem;
}

.login-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #5a67d8;
  text-decoration: underline;
}

/* Progress Indicator */
.form-progress {
  margin-bottom: 24px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 500;
}

/* Form Styles */
.registration-form {
  flex: 1;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: span 2;
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
  background: white;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-input.success {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.input-status {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.status-icon {
  width: 20px;
  height: 20px;
}

.status-icon.success {
  fill: #10b981;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #64748b;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #667eea;
}

.password-toggle svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.error-message {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ef4444;
  font-size: 0.85rem;
  margin-top: 6px;
}

.error-icon {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

/* Gender Options */
.gender-options {
  display: flex;
  gap: 20px;
  margin-top: 8px;
}

.gender-option {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.gender-option input[type="radio"] {
  display: none;
}

.radio-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s ease;
}

.gender-option input[type="radio"]:checked + .radio-custom {
  border-color: #667eea;
  background: #667eea;
}

.gender-option input[type="radio"]:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
}

.gender-text {
  font-size: 0.95rem;
  color: #374151;
}

/* Password Strength */
.password-strength {
  margin-top: 8px;
}

.strength-bar {
  width: 100%;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 4px;
}

.strength-fill {
  height: 100%;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.strength-fill.weak {
  background: #ef4444;
}

.strength-fill.medium {
  background: #f59e0b;
}

.strength-fill.strong {
  background: #10b981;
}

.strength-text {
  font-size: 0.8rem;
  font-weight: 500;
}

.strength-text.weak {
  color: #ef4444;
}

.strength-text.medium {
  color: #f59e0b;
}

.strength-text.strong {
  color: #10b981;
}

/* Terms Section */
.terms-section {
  margin-bottom: 24px;
}

.terms-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}

.terms-checkbox input[type="checkbox"] {
  display: none;
}

.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-top: 2px;
}

.terms-checkbox input[type="checkbox"]:checked + .checkbox-custom {
  border-color: #667eea;
  background: #667eea;
}

.terms-checkbox input[type="checkbox"]:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 5px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.terms-text {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.5;
}

.terms-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.terms-link:hover {
  text-decoration: underline;
}

/* Submit Button */
.submit-button {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-button.loading {
  pointer-events: none;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.btn-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Message Container */
.message-container {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
}

.message-container.success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: #065f46;
}

.message-container.error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #991b1b;
}

.message-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
  flex-shrink: 0;
}

/* Illustration Section */
.illustration-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s ease;
  animation-delay: 0.2s;
}

.illustration-section.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.illustration-container {
  max-width: 500px;
  width: 100%;
}

/* Hotel Illustration */
.hotel-illustration {
  position: relative;
  height: 300px;
  margin-bottom: 40px;
}

.building {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
}

.building-base {
  width: 100%;
  height: 20px;
  background: #4a5568;
  border-radius: 0 0 8px 8px;
}

.building-floors {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px 8px 0 0;
  padding: 8px;
}

.floor {
  display: flex;
  justify-content: space-around;
  padding: 4px 0;
  animation: buildingGrow 0.8s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes buildingGrow {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.window {
  width: 12px;
  height: 12px;
  background: #fbbf24;
  border-radius: 2px;
  animation: windowLight 2s ease-in-out infinite;
}

/* Window Animation */
@keyframes windowLight {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.building-top {
  background: #2d3748;
  padding: 8px;
  text-align: center;
  border-radius: 4px 4px 0 0;
}

.logo-sign {
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Decorative Elements */
.decorative-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.cloud {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  animation: cloudFloat 8s ease-in-out infinite;
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
}

.cloud-1 {
  width: 40px;
  height: 15px;
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.cloud-1::before {
  width: 20px;
  height: 20px;
  top: -10px;
  left: 5px;
}

.cloud-1::after {
  width: 25px;
  height: 25px;
  top: -12px;
  right: 5px;
}

.cloud-2 {
  width: 30px;
  height: 12px;
  top: 30%;
  right: 25%;
  animation-delay: 2s;
}

.cloud-2::before {
  width: 15px;
  height: 15px;
  top: -8px;
  left: 3px;
}

.cloud-2::after {
  width: 18px;
  height: 18px;
  top: -9px;
  right: 3px;
}

@keyframes cloudFloat {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}

.sun {
  position: absolute;
  top: 15%;
  right: 15%;
  width: 30px;
  height: 30px;
  background: #fbbf24;
  border-radius: 50%;
  animation: sunRotate 10s linear infinite;
}

.sun::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid #fbbf24;
  border-radius: 50%;
  opacity: 0.3;
}

@keyframes sunRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.birds {
  position: absolute;
  top: 25%;
  left: 30%;
}

.bird {
  position: absolute;
  width: 8px;
  height: 2px;
  background: #374151;
  border-radius: 1px;
  animation: birdFly 6s ease-in-out infinite;
}

.bird:nth-child(1) {
  left: 0;
  animation-delay: 0s;
}

.bird:nth-child(2) {
  left: 15px;
  animation-delay: 0.5s;
}

.bird:nth-child(3) {
  left: 30px;
  animation-delay: 1s;
}

@keyframes birdFly {
  0%, 100% {
    transform: translateY(0) rotate(-5deg);
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
  }
  50% {
    transform: translateY(-5px) rotate(-5deg);
  }
  75% {
    transform: translateY(-15px) rotate(5deg);
  }
}

/* Benefits List */
.benefits-list {
  color: white;
}

.benefits-list h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  animation: slideInRight 0.6s ease forwards;
  opacity: 0;
  transform: translateX(30px);
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.benefit-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.benefit-icon svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.benefit-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.benefit-content p {
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
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
  .register-container {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
  
  .illustration-section {
    display: none;
  }
  
  .register-form-section {
    padding: 32px;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .register-page {
    padding: 16px;
  }
  
  .register-form-section {
    padding: 24px;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .hotel-branding {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .form-grid {
    gap: 16px;
  }
  
  .gender-options {
    flex-direction: column;
    gap: 12px;
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
  .register-form-section {
    padding: 20px;
  }
  
  .page-title {
    font-size: 1.6rem;
  }
  
  .logo-icon {
    width: 48px;
    height: 48px;
  }
  
  .logo-svg {
    width: 24px;
    height: 24px;
  }
  
  .form-input {
    padding: 10px 14px;
    font-size: 0.95rem;
  }
  
  .submit-button {
    padding: 14px 20px;
    font-size: 1rem;
  }
  
  .terms-text {
    font-size: 0.85rem;
  }
}

/* Focus States for Accessibility */
.form-input:focus,
.gender-option input[type="radio"]:focus + .radio-custom,
.terms-checkbox input[type="checkbox"]:focus + .checkbox-custom {
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
  .form-input {
    border-width: 2px;
  }
  
  .submit-button {
    border: 2px solid transparent;
  }
  
  .submit-button:focus {
    border-color: white;
  }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .floating-shape,
  .building .floor,
  .window,
  .cloud,
  .sun,
  .bird {
    animation: none;
  }
}

/* Print Styles */
@media print {
  .background-animation,
  .illustration-section,
  .toast {
    display: none;
  }
  
  .register-page {
    background: white;
  }
  
  .register-form-section {
    background: white;
    box-shadow: none;
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
</style>
