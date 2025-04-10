<template>
    <form class="pay-settings">
      <h3>🏦 Thông tin ngân hàng</h3>
      <input v-model="bank.name" placeholder="Tên ngân hàng" />
      <input v-model="bank.account" placeholder="Số tài khoản" />
      <input v-model="bank.branch" placeholder="Chi nhánh" />
  
      <h4>💳 Ví điện tử</h4>
      <label><input type="checkbox" v-model="methods.momo" /> Momo</label>
      <label><input type="checkbox" v-model="methods.zalo" /> ZaloPay</label>
      <label><input type="checkbox" v-model="methods.paypal" /> PayPal</label>
  
      <button @click.prevent="savePayment">Lưu</button>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const bank = reactive({
    name: '',
    account: '',
    branch: ''
  })
  
  const methods = reactive({
    momo: true,
    zalo: false,
    paypal: false
  })
  
  const savePayment = () => {
    console.log({ bank, methods })
    // Gửi API
  }
  </script>
  
  <style scoped>
  .pay-settings input {
    margin: 6px 0;
    padding: 8px;
  }
  </style>
  