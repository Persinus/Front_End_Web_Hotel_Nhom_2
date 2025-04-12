<template>
  <div class="login-wrapper">
    <!-- Bên trái: Hình ảnh -->
    <div class="image-side">
      <img
        src="https://i.pinimg.com/474x/a0/fb/38/a0fb38a030da2a14a39767bfd21d48d2.jpg"
        alt="Hotel"
      />
    </div>

    <!-- Bên phải: Form -->
    <div class="form-side">
      <div class="login-card">
        <h2 class="title">Welcome to HotelEase</h2>
        <p class="subtitle">Sign in to manage your reservations</p>

        <!-- Email / Password -->
        <form @submit.prevent="emailLogin" class="auth-button">
          <input type="email" v-model="formEmail" placeholder="Email" required />
          <input type="password" v-model="formPassword" placeholder="Password" required />
          <button type="submit" class="login-btn">
            <img src="https://img.icons8.com/ios-filled/24/ffffff/new-post.png" />
            Đăng nhập
          </button>
        </form>

        <!-- Text separator -->
        <div class="or-text">Hoặc đăng nhập bằng</div>

        <!-- Social buttons -->
        <div class="social-row">
          <!-- Google Sign In with text -->
          <div class="google-signin-button" id="g_id_signin"></div>

          <!-- Facebook Sign In -->
          <button class="login-btn facebook-button" @click="facebookLogin">
            <img src="https://img.icons8.com/color/24/facebook-new.png" />
            Facebook
          </button>
        </div>

        <!-- User info sau đăng nhập -->
        <div id="user-info" v-if="email || facebookName">
          <p>{{ email }}</p>
          <p>{{ facebookName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const email = ref('')
const facebookName = ref('')
const formEmail = ref('')
const formPassword = ref('')

// Google Login callback
window.handleCredentialResponse = (response) => {
  const payload = JSON.parse(atob(response.credential.split('.')[1]))
  email.value = `Signed in as: ${payload.email}`
  facebookName.value = ''
}

// Email Login
const emailLogin = () => {
  if (formEmail.value === 'admin@example.com' && formPassword.value === 'password') {
    email.value = `Signed in with email: ${formEmail.value}`
    facebookName.value = ''
  } else {
    alert('Invalid email or password')
  }
}

onMounted(() => {
  // Load Google Sign-In
  const googleScript = document.createElement('script')
  googleScript.src = 'https://accounts.google.com/gsi/client'
  googleScript.async = true
  googleScript.defer = true
  document.head.appendChild(googleScript)

  googleScript.onload = () => {
    window.google.accounts.id.initialize({
      client_id: '351177417132-r5tq1fs5729agapblj6gpmsh0f230f36.apps.googleusercontent.com',
      callback: handleCredentialResponse
    })

    window.google.accounts.id.renderButton(
      document.getElementById("g_id_signin"),
      {
        theme: "outline",
        size: "large",
        type: "standard",
        text: "signin_with",
        shape: "rectangular"
      }
    )
  }

  // Load Facebook SDK
  window.fbAsyncInit = function () {
    FB.init({
      appId: '2066643873763098',
      cookie: true,
      xfbml: true,
      version: 'v12.0'
    })
  }

  const fbScript = document.createElement('script')
  fbScript.async = true
  fbScript.defer = true
  fbScript.crossOrigin = 'anonymous'
  fbScript.src = 'https://connect.facebook.net/en_US/sdk.js'
  document.head.appendChild(fbScript)
})

// Facebook login
const facebookLogin = () => {
  FB.login((response) => {
    if (response.status === 'connected') {
      FB.api('/me', { fields: 'name,email' }, (userInfo) => {
        facebookName.value = `Signed in with Facebook as: ${userInfo.name}`
        email.value = `Email: ${userInfo.email}`
      })
    } else {
      facebookName.value = 'Not logged in with Facebook.'
    }
  }, { scope: 'email' })
}
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
}

.image-side img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
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
  text-align: center;
}

.title {
  font-size: 26px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 15px;
  color: #7f8c8d;
  margin-bottom: 24px;
}

.auth-button {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-bottom: 20px;
}

.auth-button input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.auth-button input:focus {
  outline: none;
  border-color: #2c3e50;
}

.login-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #2c3e50;
  color: white;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-btn img {
  width: 20px;
  height: 20px;
}

.login-btn:hover {
  background-color: #1a252f;
}

.facebook-button {
  background-color: #4267B2;
  font-size: 14px;
  padding: 12px;
  flex: 1;
}

.facebook-button:hover {
  background-color: #365899;
}

/* Google button wrapper */
.google-signin-button {
  flex: 1;
  display: flex;
  justify-content: center;
}

.or-text {
  margin: 10px 0;
  font-size: 14px;
  color: #7f8c8d;
}

.social-row {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  margin-bottom: 20px;
}

#user-info {
  margin-top: 20px;
  color: #2c3e50;
  font-size: 15px;
}

@media (max-width: 768px) {
  .login-wrapper {
    flex-direction: column;
  }

  .image-side {
    height: 200px;
  }

  .image-side img {
    height: 100%;
    object-fit: cover;
  }

  .form-side {
    padding: 20px;
  }

  .social-row {
    flex-direction: column;
  }

  .facebook-button,
  .google-signin-button {
    width: 100%;
  }
}
</style>