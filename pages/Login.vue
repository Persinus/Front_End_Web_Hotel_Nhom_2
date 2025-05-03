
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->




<template>
  <div class="login-page min-h-screen w-full flex items-center justify-center bg-cover bg-center" style="background-image: url('/images/login-bg.jpg')">
    <!-- Modal đăng nhập -->
    <div class="login-modal bg-white rounded-md shadow-lg w-full max-w-md p-8 relative">
      <!-- Nút đóng -->
      <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <i class="fas fa-times"></i>
      </button>
      
      <!-- Avatar giả -->
      <div class="flex justify-center mb-5">
        <div class="avatar-placeholder w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      
      <!-- Tiêu đề -->
      <div class="text-center mb-6">
        <h1 class="text-xl font-semibold">Log in</h1>
        <p class="text-sm text-gray-500 mt-1">
          Don't have an account? 
          <a href="/Register" class="text-gray-900 font-medium hover:underline">Sign up</a>
        </p>
      </div>
      
      <!-- Đăng nhập bằng mạng xã hội -->
      <va-button
        class="w-full mb-3 justify-center"
        color="transparent"
        border
        @click="facebookLogin"
      >
        <template #prepend>
          <i class="fab fa-facebook text-blue-600 me-2"></i>
        </template>
        Log in with Facebook
      </va-button>
      
      <va-button
        class="w-full mb-6 justify-center"
        color="transparent"
        border
        @click="googleLogin"
      >
        <template #prepend>
          <i class="fab fa-google text-red-500 me-2"></i>
        </template>
        Log in with Google
      </va-button>
      
      <!-- Divider -->
      <div class="flex items-center mb-6">
        <div class="flex-grow border-t border-gray-200"></div>
        <div class="mx-4 text-gray-400 text-sm">OR</div>
        <div class="flex-grow border-t border-gray-200"></div>
      </div>
      
      <!-- Form đăng nhập email -->
      <form @submit.prevent="emailLogin">
        <div class="mb-4">
          <label for="email" class="block text-sm font-normal text-gray-600 mb-1">Your email</label>
          <va-input 
            v-model="formEmail" 
            id="email"
            type="email"
            placeholder="Email address"
            class="w-full"
            required
          />
        </div>
        
        <div class="mb-1">
          <label for="password" class="block text-sm font-normal text-gray-600 mb-1">Your password</label>
          <va-input
            v-model="formPassword"
            id="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="w-full"
            required
          >
            <template #append>
              <va-button
                icon
                size="small"
                color="gray"
                @click="togglePassword"
              >
                <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
              </va-button>
            </template>
          </va-input>
          <div class="text-right mt-1">
            <a href="/ForgotPass" class="text-xs text-gray-600 hover:underline">Forgot your password?</a>
          </div>
        </div>
        
        <va-button
          type="submit" 
          class="w-full mt-4"
          color="#f0f0f0"
          text-color="#333"
        >
          Log in
        </va-button>
      </form>

      <!-- Thông báo đăng nhập thành công (nếu có) -->
      <va-alert
        v-if="email || facebookName"
        class="mt-4"
        color="success"
        outlined
      >
        <p>{{ email }}</p>
        <p>{{ facebookName }}</p>
      </va-alert>
    </div>
  </div>
</template>

<script setup>
import { useLogin } from '@/composables/useLogin'

const {
  email,
  facebookName,
  formEmail,
  formPassword,
  showPassword,
  togglePassword,
  emailLogin,
  facebookLogin,
} = useLogin()

// Thêm hàm đăng nhập Google
const googleLogin = () => {
  if (window.google && window.google.accounts && window.google.accounts.id) {
    window.google.accounts.id.prompt()
  } else {
    alert('Google sign-in is not available yet. Please try again later.')
  }
}
</script>

<style scoped>
.login-modal {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.va-button) {
  letter-spacing: normal;
  text-transform: none;
  font-weight: normal;
}

:deep(.va-input__container) {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
}

:deep(.va-input__field) {
  padding: 8px 12px;
}
</style>