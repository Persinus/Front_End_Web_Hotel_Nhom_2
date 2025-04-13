<template>
    <div class="payment-page">
      <h2>🧾 Xác nhận đơn hàng & Thanh toán</h2>
  
      <!-- Bước 1: Thông tin đơn hàng -->
      <section class="order-summary">
        <h3>📋 Thông tin đơn hàng</h3>
        <p><strong>Phòng:</strong> {{ order.room.name }}</p>
        <p><strong>Ngày nhận:</strong> {{ order.checkIn }}</p>
        <p><strong>Ngày trả:</strong> {{ order.checkOut }}</p>
        <p><strong>Số đêm:</strong> {{ nights }} đêm</p>
  
        <ul>
          <li>💸 Giá phòng mỗi đêm: {{ order.room.price.toLocaleString() }} VND</li>
          <li v-if="order.services.length">➕ Dịch vụ kèm theo:
            <ul>
              <li v-for="svc in order.services" :key="svc">{{ svc }}</li>
            </ul>
          </li>
        </ul>
  
        <p>🔢 Thuế & phí (10%): {{ taxFee.toLocaleString() }} VND</p>
        <p class="total">💰 <strong>Tổng cộng:</strong> {{ total.toLocaleString() }} VND</p>
      </section>
  
      <!-- Bước 2: Chọn phương thức -->
      <section class="payment-methods">
        <h3>💳 Chọn phương thức thanh toán</h3>
        <div class="method-options">
          <button :class="{ active: method === 'prepay' }" @click="method = 'prepay'">Trả trước</button>
          <button :class="{ active: method === 'postpay' }" @click="method = 'postpay'">Trả sau</button>
        </div>
  
        <div v-if="method === 'prepay'" class="gateway-options">
          <label><input type="radio" v-model="gateway" value="visa" /> 💳 Thẻ Visa/Mastercard</label>
          <label><input type="radio" v-model="gateway" value="momo" /> 📱 MoMo</label>
          <label><input type="radio" v-model="gateway" value="paypal" /> 🅿️ PayPal</label>
          <label><input type="radio" v-model="gateway" value="bank" /> 🏦 Chuyển khoản ngân hàng</label>
        </div>
  
        <div v-if="method === 'postpay'" class="note">
          📝 Bạn sẽ thanh toán khi nhận phòng tại khách sạn.
        </div>
      </section>
  
      <!-- Bước 3: Xác nhận -->
      <section class="confirm">
        <button class="btn-primary" @click="handlePayment">Xác nhận thanh toán</button>
      </section>
  
      <!-- Kết quả -->
      <div class="result success-msg" v-if="status === 'success'">
        ✅ Thanh toán thành công! Hóa đơn đã gửi qua email.
      </div>
      <div class="result error-msg" v-if="status === 'error'">
        ❌ Thanh toán thất bại. Vui lòng thử lại hoặc chọn phương thức khác.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const order = ref({
    room: {
      name: 'Suite Ocean View',
      price: 1800000
    },
    checkIn: '2025-04-20',
    checkOut: '2025-04-23',
    services: ['Ăn sáng', 'Spa thư giãn']
  })
  
  const method = ref('prepay') // hoặc 'postpay'
  const gateway = ref('') // visa, momo, paypal...
  
  const nights = computed(() => {
    const inDate = new Date(order.value.checkIn)
    const outDate = new Date(order.value.checkOut)
    const diff = (outDate - inDate) / (1000 * 3600 * 24)
    return Math.max(1, diff)
  })
  
  const baseTotal = computed(() => {
    return order.value.room.price * nights.value
  })
  
  const serviceFee = computed(() => {
    return order.value.services.length * 100000
  })
  
  const taxFee = computed(() => {
    return Math.round((baseTotal.value + serviceFee.value) * 0.1)
  })
  
  const total = computed(() => {
    return baseTotal.value + serviceFee.value + taxFee.value
  })
  
  const status = ref('') // success / error
  
  const handlePayment = () => {
    status.value = ''
    if (method.value === 'prepay' && !gateway.value) {
      alert('Vui lòng chọn cổng thanh toán')
      return
    }
  
    // Giả lập xử lý giao dịch
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2
      status.value = isSuccess ? 'success' : 'error'
  
      // TODO: gửi email/SMS hoặc tạo hóa đơn PDF tại đây
    }, 2000)
  }
  </script>
  
  <style scoped>
  .payment-page {
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', sans-serif;
  }
  
  h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 24px;
  }
  
  section {
    margin-bottom: 30px;
  }
  
  .order-summary ul {
    margin-top: 12px;
    padding-left: 20px;
  }
  
  .order-summary .total {
    font-size: 18px;
    color: #2c3e50;
    font-weight: bold;
    margin-top: 12px;
  }
  
  .payment-methods .method-options {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
  }
  
  .method-options button {
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
    cursor: pointer;
  }
  
  .method-options .active {
    background-color: #2c3e50;
    color: white;
    border-color: #2c3e50;
  }
  
  .gateway-options label,
  .note {
    display: block;
    margin: 8px 0;
  }
  
  .btn-primary {
    padding: 12px 20px;
    background: #2c3e50;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
  }
  
  .btn-primary:hover {
    background-color: #1a252f;
  }
  
  .success-msg {
    color: green;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  
  .error-msg {
    color: red;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  