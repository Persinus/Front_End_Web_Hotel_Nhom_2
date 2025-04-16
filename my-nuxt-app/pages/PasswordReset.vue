<template>
  <div class="password-reset-page min-h-screen flex items-center justify-center bg-white">
    <div class="password-reset-container max-w-md w-full px-6 py-8 text-center">
      <!-- Icon tích đỏ -->
      <div class="flex justify-center mb-6">
        <div class="success-icon w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <!-- Tiêu đề và nội dung -->
      <h1 class="text-2xl font-semibold text-gray-900 mb-2">Password reset</h1>
      <p class="text-gray-600 mb-8">
        Your password has been successfully reset.<br>
        Click below to log in magically.
      </p>
      
      <!-- Nút Continue -->
      <button 
        @click="goToLogin"
        class="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-md transition mb-6"
      >
        Continue
      </button>
      
      <!-- Link quay lại đăng nhập -->
      <div class="flex justify-center">
        <a href="/Login" class="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to log in
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
function goToLogin() {
  // Đối với ứng dụng thực tế, bạn có thể sử dụng router để điều hướng
  // Ví dụ: navigateTo('/Login') hoặc router.push('/Login')
  window.location.href = '/Login'
}
</script>

<style scoped>
.password-reset-page {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.success-icon {
  box-shadow: 0 0 0 4px rgba(147, 51, 234, 0.1);
}
</style>