<template>
    <div class="profile-container">
      <h2>👤 Hồ Sơ Cá Nhân</h2>
  
      <!-- Tabs -->
      <div class="tabs">
        <button :class="{ active: currentTab === 'info' }" @click="currentTab = 'info'">Thông tin cá nhân</button>
        <button :class="{ active: currentTab === 'history' }" @click="currentTab = 'history'">Lịch sử sử dụng</button>
      </div>
  
      <!-- THÔNG TIN CÁ NHÂN -->
      <div v-if="currentTab === 'info'" class="form-section">
        <form @submit.prevent="handleSave">
          <div class="form-grid">
            <div class="form-group">
              <label>Họ và tên</label>
              <input :readonly="!editable" type="text" v-model="form.fullName" />
            </div>
  
            <div class="form-group">
              <label>Email</label>
              <input :readonly="!editable" type="email" v-model="form.email" />
            </div>
  
            <div class="form-group">
              <label>Số điện thoại</label>
              <input :readonly="!editable" type="tel" v-model="form.phone" />
            </div>
  
            <div class="form-group">
              <label>Số CCCD/Hộ chiếu</label>
              <input :readonly="!editable" type="text" v-model="form.idNumber" />
            </div>
  
            <div class="form-group full-width">
              <label>Địa chỉ liên lạc</label>
              <input :readonly="!editable" type="text" v-model="form.address" />
            </div>
          </div>
  
          <!-- OTP -->
          <div v-if="otpRequired" class="otp-group">
            <input type="text" v-model="otp" placeholder="Nhập mã OTP..." />
            <button type="button" @click="sendOtp" class="btn-secondary">Gửi OTP</button>
          </div>
  
          <div class="form-actions">
            <button v-if="!editable" @click.prevent="enableEdit" class="btn-secondary">Sửa thông tin</button>
            <button v-else type="submit" class="btn-primary">Lưu</button>
          </div>
        </form>
      </div>
  
      <!-- LỊCH SỬ -->
      <div v-if="currentTab === 'history'" class="history-section">
        <div class="filters">
          <input v-model="filters.keyword" placeholder="Tìm theo tên dịch vụ/phòng..." />
          <select v-model="filters.type">
            <option value="">Tất cả</option>
            <option value="room">Đặt phòng</option>
            <option value="service">Dịch vụ</option>
          </select>
          <select v-model="filters.time">
            <option value="">Thời gian</option>
            <option value="7">7 ngày qua</option>
            <option value="30">Tháng này</option>
          </select>
        </div>
  
        <table class="history-table">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Loại</th>
              <th>Ngày</th>
              <th>Trạng thái</th>
              <th>Chi phí</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in filteredHistory" :key="item.id">
              <td>{{ item.name }}</td>
              <td>{{ item.type }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.price.toLocaleString() }} VND</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-if="successMessage" class="success-msg">{{ successMessage }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Tabs
  const currentTab = ref('info')
  
  // Thông tin cá nhân
  const editable = ref(false)
  const otpRequired = ref(false)
  const otp = ref('')
  const generatedOtp = ref('')
  const successMessage = ref('')
  
  const form = ref({
    fullName: 'Nguyễn Văn A',
    email: 'nguyenvana@gmail.com',
    phone: '+84987654321',
    idNumber: '012345678901',
    address: '123 Võ Nguyên Giáp, Đà Nẵng'
  })
  
  const enableEdit = () => {
    editable.value = true
    otpRequired.value = true
  }
  
  const sendOtp = () => {
    generatedOtp.value = (Math.floor(Math.random() * 900000) + 100000).toString()
    alert(`Mã OTP của bạn là: ${generatedOtp.value} (demo)`)
  }
  
  const handleSave = () => {
    if (otpRequired.value && otp.value !== generatedOtp.value) {
      alert('Mã OTP không chính xác hoặc đã hết hạn')
      return
    }
    editable.value = false
    otpRequired.value = false
    successMessage.value = '✅ Thông tin đã được cập nhật thành công!'
  }
  
  // Lịch sử sử dụng dịch vụ
  const filters = ref({
    keyword: '',
    type: '',
    time: ''
  })
  
  const history = ref([
    { id: 1, name: 'Phòng Deluxe', type: 'room', date: '2024-04-01', status: 'Hoàn tất', price: 1500000 },
    { id: 2, name: 'Spa thư giãn', type: 'service', date: '2024-04-02', status: 'Hoàn tất', price: 400000 },
    { id: 3, name: 'Phòng Superior', type: 'room', date: '2024-03-20', status: 'Đang xử lý', price: 1200000 },
    { id: 4, name: 'Tour Bà Nà Hills', type: 'service', date: '2024-03-15', status: 'Hoàn tất', price: 800000 }
  ])
  
  const filteredHistory = computed(() => {
    return history.value.filter((item) => {
      const matchKeyword = item.name.toLowerCase().includes(filters.value.keyword.toLowerCase())
      const matchType = filters.value.type ? item.type === filters.value.type : true
      const matchTime = filters.value.time
        ? (Date.now() - new Date(item.date).getTime()) / (1000 * 3600 * 24) <= parseInt(filters.value.time)
        : true
      return matchKeyword && matchType && matchTime
    })
  })
  </script>
  
  <style scoped>
  .profile-container {
    max-width: 1000px;
    margin: 40px auto;
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    font-family: 'Segoe UI', sans-serif;
  }
  
  h2 {
    text-align: center;
    color: #2c3e50;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 20px 0;
  }
  
  .tabs button {
    padding: 10px 20px;
    border: 1px solid #2c3e50;
    background: white;
    color: #2c3e50;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .tabs .active {
    background-color: #2c3e50;
    color: white;
  }
  
  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group input {
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .full-width {
    grid-column: span 2;
  }
  
  .otp-group {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }
  
  .form-actions {
    text-align: center;
    margin-top: 20px;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #2c3e50;
    color: white;
  }
  
  .btn-secondary {
    background-color: #ccc;
    color: #333;
  }
  
  .success-msg {
    color: green;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  
  .history-section {
    margin-top: 20px;
  }
  
  .filters {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }
  
  .filters input,
  .filters select {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .history-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .history-table th,
  .history-table td {
    padding: 12px;
    border: 1px solid #eee;
    text-align: center;
  }
  
  .history-table th {
    background-color: #f5f5f5;
  }
  </style>
  