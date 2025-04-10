<template>
  <div class="register-container">
    <h2 class="title">Tạo tài khoản người dùng</h2>
    <p class="subtitle">Điền thông tin để đăng ký hệ thống OceanView</p>

    <form @submit.prevent="handleSubmit" class="form-grid">
      <!-- Họ tên -->
      <div class="form-group">
        <label>Họ và tên</label>
        <input type="text" v-model="fullName" required />
      </div>

      <!-- Quốc tịch -->
      <div class="form-group">
        <label>Quốc tịch</label>
        <select v-model="nationality" required>
          <option disabled value="">-- Chọn quốc tịch --</option>
          <option>Việt Nam</option>
          <option>Hàn Quốc</option>
          <option>Nhật Bản</option>
          <option>Hoa Kỳ</option>
          <option>Pháp</option>
        </select>
      </div>

      <!-- Số điện thoại -->
      <div class="form-group">
        <label>Số điện thoại</label>
        <input type="tel" v-model="phone" placeholder="+84..." required />
      </div>

      <!-- Ngày sinh -->
      <div class="form-group">
        <label>Ngày sinh</label>
        <input type="date" v-model="birthDate" required />
      </div>

      <!-- Loại giấy tờ -->
      <div class="form-group">
        <label>Loại giấy tờ</label>
        <select v-model="idType" required>
          <option disabled value="">-- Chọn loại --</option>
          <option>CCCD</option>
          <option>Hộ chiếu</option>
        </select>
      </div>

      <!-- Số giấy tờ -->
      <div class="form-group">
        <label>Số giấy tờ</label>
        <input type="text" v-model="idNumber" required />
      </div>

      <!-- Địa chỉ -->
      <div class="form-group full-width">
        <label>Địa chỉ liên lạc</label>
        <input type="text" v-model="address" required />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" required />
      </div>

      <!-- Mật khẩu -->
      <div class="form-group">
        <label>Mật khẩu</label>
        <input type="password" v-model="password" required />
      </div>

      <!-- Xác nhận mật khẩu -->
      <div class="form-group">
        <label>Xác nhận mật khẩu</label>
        <input type="password" v-model="confirmPassword" required />
      </div>

      <!-- OTP -->
      <div class="form-group">
        <label>Mã OTP</label>
        <input type="text" v-model="otp" />
      </div>

      <div class="form-group">
        <label>&nbsp;</label>
        <button type="button" class="btn-secondary" @click="sendOtp">Gửi OTP</button>
      </div>

      <!-- Submit -->
      <div class="form-actions full-width">
        <button type="submit" class="btn-primary">Đăng ký</button>
      </div>
    </form>

    <div v-if="successMessage" class="success-msg">
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const nationality = ref('')
const phone = ref('')
const birthDate = ref('')
const idType = ref('')
const idNumber = ref('')
const address = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const otp = ref('')
const generatedOtp = ref('')
const successMessage = ref('')

const sendOtp = () => {
  if (!phone.value && !email.value) {
    alert('Vui lòng nhập số điện thoại hoặc email trước khi gửi OTP')
    return
  }
  generatedOtp.value = (Math.floor(Math.random() * 900000) + 100000).toString()
  alert(`Mã OTP của bạn là: ${generatedOtp.value} (demo)`)
}

const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    alert('Mật khẩu không khớp')
    return
  }

  if (otp.value !== generatedOtp.value) {
    alert('Mã OTP không hợp lệ hoặc đã hết hạn')
    return
  }

  successMessage.value = `Đăng ký thành công! Xin chào, ${fullName.value}`
}
</script>

<style scoped>
.register-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', sans-serif;
}

.title {
  font-size: 24px;
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

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 6px;
  color: #2c3e50;
}

.form-group input,
.form-group select {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #2c3e50;
}

.full-width {
  grid-column: span 2;
}

.btn-primary {
  padding: 12px 24px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 15px;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background-color: #1a252f;
}

.btn-secondary {
  padding: 10px;
  background-color: #ccc;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.btn-secondary:hover {
  background-color: #bbb;
}

.form-actions {
  text-align: center;
}

.success-msg {
  color: green;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
}
</style>
