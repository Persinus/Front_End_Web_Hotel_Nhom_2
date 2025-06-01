<template>
  <div class="login-container">
    <va-card class="login-card" outlined>
      <va-card-title>Đăng nhập</va-card-title>
      <va-card-content>
        <va-input
          v-model="username"
          label="Tên tài khoản"
          class="mb-3"
        />
        <va-input
          v-model="password"
          label="Mật khẩu"
          type="password"
          class="mb-3"
        />
        <va-alert v-if="error" color="danger" class="mb-2">{{ error }}</va-alert>
        <va-button :loading="loading" color="primary" @click="handleLogin" block>
          Đăng nhập
        </va-button>
        <div v-if="profile" class="mt-4">
          <h4>Thông tin người dùng:</h4>
          <pre style="white-space: pre-wrap;">{{ profile }}</pre>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePhanQuyenStore } from '~/store/PhanQuyenCookie'
import { axiosBase } from '~/utils/axiosBase'

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const profile = ref('')

const phanQuyenStore = usePhanQuyenStore()

const handleLogin = async () => {
  error.value = ''
  profile.value = ''
  loading.value = true
  const ok = await phanQuyenStore.login(username.value, password.value)
  loading.value = false
  if (ok) {
    // Lấy từ cookie thay vì localStorage
    if (process.client) {
      const token = useCookie('token').value
      const role = useCookie('role').value
      const userId = useCookie('userId').value
      alert(
        'Đăng nhập thành công!\n' +
        'Token: ' + token +
        '\nVai trò: ' + role +
        '\nMã khách hàng: ' + userId
      )
    }
    // Gọi API lấy thông tin người dùng
    try {
      const res = await axiosBase.get('/xacthuc/profile')
      profile.value = JSON.stringify(res.data, null, 2)
    } catch (e) {
      profile.value = 'Không lấy được thông tin người dùng!'
    }
  } else {
    error.value = 'Sai tài khoản hoặc mật khẩu!'
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8fa;
}
.login-card {
  width: 350px;
  padding: 24px 0;
}
</style>