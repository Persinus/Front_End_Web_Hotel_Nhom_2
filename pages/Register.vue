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
              v-model="form.hoTen"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <span v-if="errors.hoTen" class="text-red-500 text-xs">{{ errors.hoTen }}</span>
          </div>

          <!-- Căn cước công dân -->
          <div>
            <label for="idCard" class="block text-sm text-gray-700 mb-1">ID Card</label>
            <input 
              type="text" 
              id="idCard" 
              v-model="form.canCuocCongDan"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <span v-if="errors.canCuocCongDan" class="text-red-500 text-xs">{{ errors.canCuocCongDan }}</span>
          </div>

          <!-- Số điện thoại -->
          <div>
            <label for="phone" class="block text-sm text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="form.soDienThoai"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <span v-if="errors.soDienThoai" class="text-red-500 text-xs">{{ errors.soDienThoai }}</span>
          </div>

          <!-- Địa chỉ -->
          <div>
            <label for="address" class="block text-sm text-gray-700 mb-1">Address</label>
            <input 
              type="text" 
              id="address" 
              v-model="form.diaChi"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <span v-if="errors.diaChi" class="text-red-500 text-xs">{{ errors.diaChi }}</span>
          </div>

          <!-- Ngày sinh -->
          <div>
            <label for="dob" class="block text-sm text-gray-700 mb-1">Date of Birth</label>
            <input 
              type="date" 
              id="dob" 
              v-model="form.ngaySinh"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <span v-if="errors.ngaySinh" class="text-red-500 text-xs">{{ errors.ngaySinh }}</span>
          </div>

          <!-- Giới tính -->
          <div>
            <label class="block text-sm text-gray-700 mb-1">Gender</label>
            <div class="flex items-center space-x-4">
              <label class="inline-flex items-center">
                <input type="radio" v-model="form.gioiTinh" value="Nam" class="form-radio" />
                <span class="ml-2">Male</span>
              </label>
              <label class="inline-flex items-center">
                <input type="radio" v-model="form.gioiTinh" value="Nu" class="form-radio" />
                <span class="ml-2">Female</span>
              </label>
            </div>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <span v-if="errors.email" class="text-red-500 text-xs">{{ errors.email }}</span>
          </div>

          <!-- Tên tài khoản -->
          <div>
            <label for="username" class="block text-sm text-gray-700 mb-1">Username</label>
            <input 
              type="text" 
              id="username" 
              v-model="form.tenTaiKhoan"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <span v-if="errors.tenTaiKhoan" class="text-red-500 text-xs">{{ errors.tenTaiKhoan }}</span>
          </div>

          <!-- Mật khẩu -->
          <div>
            <label for="password" class="block text-sm text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="form.matKhau"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <span v-if="errors.matKhau" class="text-red-500 text-xs">{{ errors.matKhau }}</span>
          </div>

          <!-- Nút đăng ký -->
          <div>
            <button 
              type="submit" 
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-md transition"
              :disabled="isLoading"
            >
              {{ isLoading ? 'Processing...' : 'Register' }}
            </button>
          </div>

          <!-- Thông báo -->
          <div v-if="message" :class="['mt-4 p-3 rounded-md', messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const message = ref('')
const messageType = ref('')
const errors = reactive({})

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

// Validate form data
const validateForm = () => {
  let isValid = true
  errors.hoTen = ''
  errors.canCuocCongDan = ''
  errors.soDienThoai = ''
  errors.diaChi = ''
  errors.ngaySinh = ''
  errors.email = ''
  errors.tenTaiKhoan = ''
  errors.matKhau = ''

  if (!form.value.hoTen) {
    errors.hoTen = 'Full name is required'
    isValid = false
  }

  if (!form.value.canCuocCongDan) {
    errors.canCuocCongDan = 'ID Card is required'
    isValid = false
  } else if (!/^\d{9,12}$/.test(form.value.canCuocCongDan)) {
    errors.canCuocCongDan = 'ID Card must be 9-12 digits'
    isValid = false
  }

  if (!form.value.soDienThoai) {
    errors.soDienThoai = 'Phone number is required'
    isValid = false
  } else if (!/^\d{10,11}$/.test(form.value.soDienThoai)) {
    errors.soDienThoai = 'Phone number must be 10-11 digits'
    isValid = false
  }

  if (!form.value.diaChi) {
    errors.diaChi = 'Address is required'
    isValid = false
  }

  if (!form.value.ngaySinh) {
    errors.ngaySinh = 'Date of birth is required'
    isValid = false
  }

  if (!form.value.email) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    errors.email = 'Invalid email format'
    isValid = false
  }

  if (!form.value.tenTaiKhoan) {
    errors.tenTaiKhoan = 'Username is required'
    isValid = false
  } else if (form.value.tenTaiKhoan.length < 5) {
    errors.tenTaiKhoan = 'Username must be at least 5 characters'
    isValid = false
  }

  if (!form.value.matKhau) {
    errors.matKhau = 'Password is required'
    isValid = false
  } else if (form.value.matKhau.length < 6) {
    errors.matKhau = 'Password must be at least 6 characters'
    isValid = false
  }

  return isValid
}

const handleRegister = async () => {
  if (!validateForm()) {
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
      message.value = 'Account registered successfully! Redirecting to login page...'
      messageType.value = 'success'
      console.log('Registration successful:', data)
      
      // Redirect to login page after successful registration
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } else {
      message.value = data.message || 'Registration failed. Please check your information and try again.'
      messageType.value = 'error'
      console.error('Registration error:', data)
    }
  } catch (error) {
    console.error('Error during registration:', error)
    message.value = 'Registration failed. Please try again later.'
    messageType.value = 'error'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.geometric-illustration {
  position: relative;
}
</style>
