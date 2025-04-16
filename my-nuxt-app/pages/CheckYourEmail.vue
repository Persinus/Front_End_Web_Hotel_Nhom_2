<template>
  <div class="check-email-page min-h-screen flex items-center justify-center bg-white">
    <div class="check-email-container max-w-md w-full px-6 py-12 text-center">
      <!-- Icon mail -->
      <div class="email-icon-container flex justify-center mb-6">
        <div class="email-icon w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <!-- Tiêu đề và nội dung -->
      <h1 class="text-2xl font-semibold text-gray-900 mb-2">Check your email</h1>
      <p class="text-gray-600 mb-6">
        We sent a password reset link to<br>
        <span class="text-gray-900 font-medium">olivia@untitledui.com</span>
      </p>
      
      <!-- Nút mở ứng dụng email -->
      <button 
        class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-md transition mb-6"
      >
        Open email app
      </button>
      
      <!-- Không nhận được email -->
      <p class="text-sm text-gray-600 mb-6">
        Didn't receive the email? 
        <a href="#" @click.prevent="resendEmail" class="text-indigo-600 hover:text-indigo-800 font-medium">Click to resend</a>
      </p>
      
      <!-- Quay lại trang đăng nhập -->
      <div class="flex justify-center">
        <a href="/Login" class="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to log in
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('olivia@untitledui.com')

function resendEmail() {
  // Logic để gửi lại email
  alert(`Đã gửi lại email đến ${email.value}`)
}
</script>

<style scoped>
.check-email-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.email-icon {
  box-shadow: 0 0 0 5px rgba(79, 70, 229, 0.1);
}
</style>