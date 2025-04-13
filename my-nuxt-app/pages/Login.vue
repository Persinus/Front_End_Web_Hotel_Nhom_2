<template>
    <div class="login-wrapper">
      <!-- Slide ảnh -->
      <div class="image-side">
        <transition-group name="fade" tag="div">
          <img
            v-for="(image, index) in images"
            v-show="currentImageIndex === index"
            :key="image"
            :src="image"
            alt="Hotel"
            class="slideshow-image"
          />
        </transition-group>
      </div>
  
      <!-- Form -->
      <div class="form-side">
        <va-card class="login-card" outlined>
          <va-card-title class="title">Chào mừng đến với HotelEase</va-card-title>
          <va-card-subtitle class="subtitle">
            Đăng nhập để quản lý đặt phòng của bạn
          </va-card-subtitle>
  
          <va-form class="auth-form" @submit.prevent="emailLogin">
            <va-input
              v-model="formEmail"
              label="Email"
              type="email"
              required
              class="mb-3"
              :rules="[(v) => !!v || 'Email là bắt buộc']"
            />
  
            <va-input
              v-model="formPassword"
              :type="showPassword ? 'text' : 'password'"
              label="Mật khẩu"
              required
              class="mb-1"
              :rules="[(v) => !!v || 'Mật khẩu là bắt buộc']"
            >
              <template #appendInner>
                <va-icon
                  :name="showPassword ? 'visibility_off' : 'visibility'"
                  size="small"
                  color="gray"
                  class="cursor-pointer"
                  @click="togglePassword"
                />
              </template>
            </va-input>
  
            <div class="text-right mb-3">
              <a href="#" class="forgot-link">Quên mật khẩu?</a>
            </div>
  
            <va-button type="submit" block color="primary" icon="mail">
              Đăng nhập
            </va-button>
          </va-form>
  
          <va-divider class="my-4">Hoặc đăng nhập bằng</va-divider>
  
          <div class="social-row">
            <div class="google-signin-button" id="g_id_signin"></div>
            <va-button color="#4267B2" icon="fab fa-facebook-f" @click="facebookLogin" block>
              Facebook
            </va-button>
          </div>
  
          <va-alert v-if="email || facebookName" color="info" class="mt-4">
            <p>{{ email }}</p>
            <p>{{ facebookName }}</p>
          </va-alert>
        </va-card>
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
    images,
    currentImageIndex,
    showPassword,
    togglePassword,
    emailLogin,
    facebookLogin,
  } = useLogin()
  </script>
  <style scoped>
  .login-wrapper {
    display: flex;
    min-height: 100vh;
    overflow: hidden;
    background: linear-gradient(to right, #fdfbfb, #ebedee);
  }
  
  .image-side {
    flex: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  
  .slideshow-image {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 1s ease-in-out;
  }
  
  .form-side {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 30px;
    background: white;
  }
  
  .login-card {
    width: 100%;
    max-width: 400px;
    padding: 20px;
  }
  
  .social-row {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  
  @media (max-width: 768px) {
    .login-wrapper {
      flex-direction: column;
    }
  
    .image-side {
      height: 200px;
    }
  
    .slideshow-image {
      height: 100%;
      object-fit: cover;
    }
  
    .form-side {
      padding: 20px;
    }
  }
  </style>
  