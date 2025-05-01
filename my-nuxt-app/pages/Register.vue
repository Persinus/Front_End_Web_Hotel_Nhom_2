<template>
  <div class="register-page min-h-screen flex items-center justify-center bg-white">
    <div class="register-container max-w-5xl w-full p-6 flex flex-col md:flex-row">
      <!-- Form đăng ký -->
      <div class="register-form w-full md:w-1/2 pr-0 md:pr-8">
        <!-- Avatar và tiêu đề -->
        <div class="text-center md:text-left mb-6">
          <div class="avatar-placeholder w-16 h-16 bg-gray-200 rounded-full mx-auto md:mx-0 mb-4"></div>
          <h1 class="text-2xl font-semibold text-gray-800">Create Customer Account</h1>
          <p class="text-sm text-gray-600 mt-1">
            Already have an account? 
            <a href="/login" class="text-black hover:underline">Log in</a>
          </p>
        </div>

        <!-- Form đăng ký -->
        <form @submit.prevent="handleRegister" class="space-y-4">
          <!-- Họ và tên -->
          <div>
            <label for="name" class="block text-sm text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.HoTen"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Căn cước công dân -->
          <div>
            <label for="idCard" class="block text-sm text-gray-700 mb-1">ID Card</label>
            <input 
              type="text" 
              id="idCard" 
              v-model="form.CanCuocCongDan"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Số điện thoại -->
          <div>
            <label for="phone" class="block text-sm text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.SoDienThoai"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Địa chỉ -->
          <div>
            <label for="address" class="block text-sm text-gray-700 mb-1">Address</label>
            <input 
              type="text" 
              id="address" 
              v-model="form.DiaChi"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Ngày sinh -->
          <div>
            <label for="dob" class="block text-sm text-gray-700 mb-1">Date of Birth</label>
            <input 
              type="date" 
              id="dob" 
              v-model="form.NgaySinh"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.Email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Tên tài khoản -->
          <div>
            <label for="username" class="block text-sm text-gray-700 mb-1">Username</label>
            <input 
              type="text" 
              id="username" 
              v-model="form.TenTaiKhoan"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Mật khẩu -->
          <div>
            <label for="password" class="block text-sm text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="form.MatKhau"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Nút đăng ký -->
          <div>
            <button 
              type="submit" 
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-md transition"
            >
              Register
            </button>
          </div>

          <!-- Thông báo -->
          <div v-if="message" class="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
            {{ message }}
          </div>
        </form>
      </div>

      <!-- Hình minh họa bên phải -->
      <div class="hidden md:flex w-1/2 items-center justify-center">
        <div class="geometric-illustration">
          <svg viewBox="0 0 200 200" width="300" height="300">
            <polygon points="100,10 40,180 190,60 10,60 160,180" 
              fill="none" 
              stroke="#000"
              stroke-width="1"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  HoTen: '',
  CanCuocCongDan: '',
  SoDienThoai: '',
  DiaChi: '',
  NgaySinh: '',
  GioiTinh: 'Nu',
  NgheNghiep: '',
  TrangThai: 'Hoat Dong',
  NgayTao: new Date().toISOString(),
  Email: '',
  TenTaiKhoan: '',
  MatKhau: ''
})

const message = ref('')

const handleRegister = async () => {
  try {
    const response = await $api.post('/KhachHang', form.value) // Sử dụng $api thay vì axios
    if (response && response.status === 200) {
      message.value = 'Account registered successfully!'
      console.log('Response:', response.data) // Log phản hồi từ server
    } else {
      message.value = 'Registration failed. Please try again.'
      console.error('Unexpected response:', response)
    }
  } catch (error) {
    console.error('Error during registration:', error)
    message.value = 'Registration failed. Please try again.'
  }
}
</script>

<style scoped>
.geometric-illustration {
  position: relative;
}
</style>
