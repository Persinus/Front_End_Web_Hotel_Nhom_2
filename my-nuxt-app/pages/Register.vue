<template>
  <div class="register-page min-h-screen flex items-center justify-center bg-white">
    <div class="register-container max-w-5xl w-full p-6 flex flex-col md:flex-row">
      <!-- Form đăng ký -->
      <div class="register-form w-full md:w-1/2 pr-0 md:pr-8">
        <!-- Avatar và tiêu đề -->
        <div class="text-center md:text-left mb-6">
          <div class="avatar-placeholder w-16 h-16 bg-gray-200 rounded-full mx-auto md:mx-0 mb-4"></div>
          <h1 class="text-2xl font-semibold text-gray-800">Create an account</h1>
          <p class="text-sm text-gray-600 mt-1">
            Already have an account? 
            <a href="/Login" class="text-black hover:underline">Log in</a>
          </p>
        </div>

        <!-- Form đăng ký -->
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Họ và tên -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="block text-sm text-gray-700 mb-1">First name</label>
              <input 
                type="text" 
                id="firstName" 
                v-model="firstName"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm text-gray-700 mb-1">Last name</label>
              <input 
                type="text" 
                id="lastName" 
                v-model="lastName"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              />
            </div>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm text-gray-700 mb-1">Email address</label>
            <input 
              type="email" 
              id="email" 
              v-model="email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm text-gray-700 mb-1">Password</label>
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="password"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
          </div>

          <!-- Confirm Password -->
          <div>
            <label for="confirmPassword" class="block text-sm text-gray-700 mb-1">Confirm your password</label>
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="confirmPassword" 
              v-model="confirmPassword"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
            />
            <p class="text-xs text-gray-600 mt-1">Use 8 or more characters with a mix of letters, numbers & symbols</p>
          </div>

          <!-- Show Password -->
          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="showPassword" 
              v-model="showPassword"
              class="h-4 w-4 text-black border-gray-300 rounded"
            />
            <label for="showPassword" class="ml-2 block text-sm text-gray-700">Show password</label>
          </div>

          <!-- Nút đăng ký hoặc đăng nhập -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-6">
            <a href="/Login" class="text-sm text-black hover:underline">log in instead</a>
            <button 
              type="submit" 
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-md transition"
            >
              Create an account
            </button>
          </div>
        </form>

        <!-- Thông báo thành công -->
        <div v-if="successMessage" class="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
          {{ successMessage }}
        </div>
      </div>

      <!-- Hình minh họa bên phải -->
      <div class="hidden md:flex w-1/2 items-center justify-center">
        <div class="geometric-illustration">
          <!-- SVG minh họa hình học như trong hình -->
          <svg viewBox="0 0 200 200" width="300" height="300">
            <polygon points="100,10 40,180 190,60 10,60 160,180" 
              fill="none" 
              stroke="#000"
              stroke-width="1"
            />
            <circle cx="100" cy="10" r="5" fill="#000" />
            <circle cx="40" cy="180" r="5" fill="#000" />
            <circle cx="190" cy="60" r="5" fill="#000" />
            <circle cx="10" cy="60" r="5" fill="#000" />
            <circle cx="160" cy="180" r="5" fill="#000" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Footer links -->
    <div class="fixed bottom-4 right-4">
      <ul class="flex space-x-4 text-sm text-gray-500">
        <li><a href="#" class="hover:underline">Help</a></li>
        <li><a href="#" class="hover:underline">Privacy</a></li>
        <li><a href="#" class="hover:underline">Terms</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRegister } from '@/composables/useRegister'

const {
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  successMessage,
  handleSubmit,
  showPassword,
} = useRegister()
</script>

<style scoped>
.geometric-illustration {
  position: relative;
}

/* Thêm các chấm và đoạn thẳng trang trí */
.geometric-illustration::before {
  content: "...";
  position: absolute;
  right: 40px;
  top: 50px;
  letter-spacing: 3px;
  color: #000;
}

.geometric-illustration::after {
  content: "....";
  position: absolute;
  right: 60px;
  bottom: 70px;
  letter-spacing: 3px;
  color: #000;
}
</style>