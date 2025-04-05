<!-- src/views/SocialLogin.vue -->
<template>
    <div class="login-page">
      <h1>Google and Facebook Sign-In Demo</h1>
  
      <!-- Google Sign-In -->
      <div id="g_id_onload"
           data-client_id="351177417132-r5tq1fs5729agapblj6gpmsh0f230f36.apps.googleusercontent.com"
           data-context="signin"
           data-ux_mode="popup"
           data-callback="handleCredentialResponse"
           data-auto_prompt="false">
      </div>
      <div class="g_id_signin"
           data-type="standard"
           data-shape="rectangular"
           data-theme="outline"
           data-text="signin_with"
           data-size="large">
      </div>
  
      <!-- Facebook Sign-In -->
      <button class="facebook-button" @click="facebookLogin">Sign in with Facebook</button>
  
      <!-- User Info -->
      <div id="user-info">
        <p id="user-email">{{ email }}</p>
        <p id="user-facebook-name">{{ facebookName }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  
  const email = ref('')
  const facebookName = ref('')
  
  // Google Sign-In callback
  window.handleCredentialResponse = (response) => {
    const payload = JSON.parse(atob(response.credential.split('.')[1]))
    console.log('Google user payload:', payload)
    email.value = `Signed in as: ${payload.email}`
  }
  
  // Facebook SDK setup
  onMounted(() => {
    // Load Google
    const googleScript = document.createElement('script')
    googleScript.src = 'https://accounts.google.com/gsi/client'
    googleScript.async = true
    googleScript.defer = true
    document.head.appendChild(googleScript)
  
    // Load Facebook
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
  
  // Facebook Sign-In
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
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }
  .facebook-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #4267B2;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .facebook-button:hover {
    background-color: #365899;
  }
  #user-info {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    color: #555;
  }
  </style>
  