<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->
<!-- Trang Thọ Code xin đừng động vào  -->

<template>
  <div
    class="login-page min-h-screen w-full flex items-center justify-center bg-cover bg-center"
  >
    <div
      class="login-modal flex w-full max-w-3xl rounded-md shadow-lg overflow-hidden bg-white"
    >
      <!-- Bên trái: Ảnh + chữ -->
      <div
        class="login-left flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white w-1/2"
      >
        <img alt="OceanView Hotels" class="mb-6 w-20 h-20 object-contain" />
        <h2 class="text-2xl font-bold mb-2">OceanView Hotels</h2>
        <div class="text-lg font-semibold mb-4">Luxury Experience</div>
        <div class="text-base mb-1">Chào mừng trở lại</div>
        <div class="text-base">Đăng nhập để truy cập tài khoản của bạn</div>
      </div>
      <!-- Bên phải: Form đăng nhập -->
      <div class="login-right flex flex-col justify-center w-1/2 p-8">
        <div class="text-center mb-6">
          <h1 class="text-xl font-semibold">Đăng nhập</h1>
          <p class="text-sm text-gray-500 mt-1">
            Chưa có tài khoản?
            <a href="/Register" class="text-blue-600 font-medium hover:underline"
              >Đăng ký</a
            >
          </p>
        </div>
        <form @submit.prevent="emailLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-normal text-gray-600 mb-1"
              >Tên đăng nhập</label
            >
            <va-input
              v-model="formEmail"
              id="email"
              placeholder="Username"
              class="w-full"
              required
            />
          </div>
          <div class="mb-1">
            <label for="password" class="block text-sm font-normal text-gray-600 mb-1"
              >Mật khẩu</label
            >
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
                  type="button"
                >
                  <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                </va-button>
              </template>
            </va-input>
            <div class="text-right mt-1">
              <a href="/ForgotPass" class="text-xs text-gray-600 hover:underline"
                >Quên mật khẩu?</a
              >
            </div>
          </div>
          <va-alert v-if="loginError" class="mt-2 mb-2" color="danger" outlined>
            {{ loginError }}
          </va-alert>
          <va-button
            type="submit"
            class="w-full mt-4"
            color="#0ea5e9"
            text-color="#fff"
            :loading="isLoading"
            :disabled="isLoading"
          >
            {{ isLoading ? "Đang đăng nhập..." : "Đăng nhập" }}
          </va-button>
        </form>
        <va-alert v-if="email" class="mt-4" color="success" outlined>
          <p>{{ email }}</p>
        </va-alert>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLogin } from "@/composables/useLogin";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/Auth";

const router = useRouter();
const authStore = useAuthStore();

const {
  email,
  formEmail,
  formPassword,
  showPassword,
  togglePassword,
  emailLogin,
  isLoading,
  loginError,
} = useLogin();

onMounted(() => {
  authStore.initAuth();
  if (authStore.isAuthenticated) {
    router.push("/");
  }
});
</script>

<style scoped>
.login-modal {
  animation: fadeIn 0.3s ease-out;
  min-height: 420px;
  height: 480px;
}
.login-left {
  min-width: 0;
  min-height: 420px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-right {
  min-width: 0;
  min-height: 420px;
  height: 480px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 900px) {
  .login-modal {
    flex-direction: column;
    min-height: unset;
    height: auto;
    max-width: 95vw;
  }
  .login-left,
  .login-right {
    width: 100%;
    height: auto;
    min-height: unset;
    padding: 32px 16px;
  }
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
</style>
