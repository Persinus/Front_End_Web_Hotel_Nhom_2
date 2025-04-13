<template>
    <div class="register-container">
      <h2 class="title">Tạo tài khoản người dùng</h2>
      <p class="subtitle">Điền thông tin để đăng ký hệ thống OceanView</p>
  
      <va-form @submit.prevent="handleSubmit" class="form-grid">
        <va-input v-model="fullName" label="Họ và tên" required />
  
        <va-select
          v-model="nationality"
          label="Quốc tịch"
          :options="['Việt Nam', 'Hàn Quốc', 'Nhật Bản', 'Hoa Kỳ', 'Pháp']"
          required
        />
  
        <va-input v-model="phone" label="Số điện thoại" type="tel" placeholder="+84..." required />
  
        <va-input v-model="birthDate" label="Ngày sinh" type="date" required />
  
        <va-select
          v-model="idType"
          label="Loại giấy tờ"
          :options="['CCCD', 'Hộ chiếu']"
          required
        />
  
        <va-input v-model="idNumber" label="Số giấy tờ" required />
  
        <va-input v-model="address" label="Địa chỉ liên lạc" class="full-width" required />
  
        <va-input v-model="email" label="Email" type="email" required />
  
        <va-input v-model="password" label="Mật khẩu" type="password" required />
  
        <va-input v-model="confirmPassword" label="Xác nhận mật khẩu" type="password" required />
  
        <va-input v-model="otp" label="Mã OTP" />
  
        <va-button @click="sendOtp" preset="secondary">Gửi OTP</va-button>
  
        <div class="form-actions full-width">
          <va-button type="submit" color="primary">Đăng ký</va-button>
        </div>
      </va-form>
  
      <va-alert v-if="successMessage" color="success" class="mt-4">
        {{ successMessage }}
      </va-alert>
    </div>
  </template>
  
  <script setup>
  import { useRegister } from '@/composables/useRegister'
  
  const {
    fullName,
    nationality,
    phone,
    birthDate,
    idType,
    idNumber,
    address,
    email,
    password,
    confirmPassword,
    otp,
    successMessage,
    sendOtp,
    handleSubmit,
  } = useRegister()
  </script>
  
  <style scoped>
  .register-container {
    max-width: 960px;
    margin: 40px auto;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
  
  .title {
    font-size: 26px;
    font-weight: bold;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 14px;
    color: #7f8c8d;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .full-width {
    grid-column: span 2;
  }
  
  .form-actions {
    text-align: center;
  }
  </style>
  