<template>
  <div class="forgot-password-page min-h-screen flex items-center justify-center bg-white">
    <div class="forgot-form-container max-w-md w-full p-6">
      <!-- Icon khóa -->
      <div class="flex justify-center mb-6">
        <div class="lock-icon w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>

      <!-- Tiêu đề -->
      <h1 class="text-2xl font-semibold text-center mb-2">Forgot password?</h1>
      <p class="text-center text-gray-600 mb-6">No worries, we'll send you reset instructions.</p>
      
      <!-- Form reset mật khẩu -->
      <form @submit.prevent="sendResetEmail" class="space-y-4">
        <div>
          <label for="email" class="block text-sm text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email"
            required
            placeholder="Enter your email"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <button 
          type="submit" 
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition"
        >
          Reset password
        </button>
      </form>
      
      <!-- Link quay lại trang đăng nhập -->
      <div class="mt-6 text-center">
        <a href="/Login" class="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
          <i class="fas fa-arrow-left mr-2"></i>
          Back to log in
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const emailSent = ref(false)

function sendResetEmail() {
  // Xử lý gửi email đặt lại mật khẩu
  // Trong trường hợp thực tế, bạn sẽ gọi API để gửi email
  console.log('Gửi email đặt lại mật khẩu cho:', email.value)
  
  // Giả lập thành công để demo
  emailSent.value = true
  
  // Chuyển đến trang xác nhận
  // Trong phiên bản thực tế, bạn có thể sử dụng router.push hoặc navigateTo
  // Hiện tại chỉ thông báo
  alert(`Đã gửi hướng dẫn đặt lại mật khẩu đến ${email.value}`)
}
</script>

<style scoped>
.forgot-password-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.lock-icon {
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
}
</style>
