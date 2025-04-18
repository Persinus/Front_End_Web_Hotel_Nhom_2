<template>
    <div class="payment-page">
      <h2><i class="fa-solid fa-pen-nib"></i> Xác nhận đơn hàng & Thanh toán</h2>
  
      <!-- Bước 1: Thông tin đơn hàng -->
      <section class="order-summary">
        <h3><i class="fa-regular fa-bookmark"></i> Thông tin đơn hàng</h3>
        <p><strong>Phòng:</strong> {{ order.room.name }}</p>
        <p><strong>Ngày nhận:</strong> {{ order.checkIn }}</p>
        <p><strong>Ngày trả:</strong> {{ order.checkOut }}</p>
        <p><strong>Số đêm:</strong> {{ nights }} đêm</p>
  
        <ul>
          <li><i class="fa-solid fa-check"></i> Giá phòng mỗi đêm: {{ order.room.price.toLocaleString() }} VND</li>
          <li v-if="order.services.length"><i class="fa-solid fa-check"></i> Dịch vụ kèm theo:
            <ul>
              <li v-for="svc in order.services" :key="svc">{{ svc }}</li>
            </ul>
          </li>
        </ul>
  
        <p><i class="fa-solid fa-coins"></i> Thuế & phí (10%): {{ taxFee.toLocaleString() }} VND</p>
        <p class="total"><i class="fa-solid fa-arrow-right"></i> <strong>Tổng cộng:</strong> {{ total.toLocaleString() }} VND</p>
      </section>
  
      <!-- Bước 2: Chọn phương thức -->
      <section class="payment-methods">
        <h3><i class="fa-solid fa-money-bill"></i> Chọn phương thức thanh toán</h3>
        <div class="method-options">
          <button :class="{ active: method === 'prepay' }" @click="method = 'prepay'">Trả trước</button>
          <button :class="{ active: method === 'postpay' }" @click="method = 'postpay'">Trả sau</button>
        </div>
  
        <div v-if="method === 'prepay'" class="gateway-options">
          <label><input type="radio" v-model="gateway" value="visa" /> <i class="fa-solid fa-credit-card"></i> Thẻ Visa/Mastercard</label>
          <label><input type="radio" v-model="gateway" value="momo" /> 📱 MoMo</label>
          <label><input type="radio" v-model="gateway" value="paypal" /> <i class="fa-solid fa-wallet"></i>  PayPal</label>
          <label><input type="radio" v-model="gateway" value="bank" /> <i class="fa-solid fa-landmark"></i> Chuyển khoản ngân hàng</label>
        </div>
  
        <div v-if="method === 'postpay'" class="note">
          <i class="fa-solid fa-comments-dollar"></i> Bạn sẽ thanh toán khi nhận phòng tại khách sạn.
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
    margin: 30px auto;
    padding: 20px;
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
.order-summary {
    font-family: Arial, sans-serif; 
    background: #f9f9f9; 
    border-radius: 8px; 
    padding: 20px; 
  
    margin: 10px;
}

.order-summary h3 {
    color: #2c3e50; 
    margin-bottom: 15px; 
    font-size: 1.5em; 
}

.order-summary p {
    font-size: 1em;
    color: #34495e;
    margin: 5px 0; 
}

.order-summary ul {
    list-style-type: none; 
    padding-left: 0; 
    margin: 10px 0;
}

.order-summary ul li {
   
    margin: 5px 0; 
    display: flex; 
    align-items: center; 
}

.order-summary ul li i {
    color: #2ecc71; 
    margin-right: 10px; 
}

.order-summary ul ul {
    margin-top: 10px; 
    padding-left: 20px; 
}



.order-summary .total {
    font-size: 1.2em; 
    font-weight: bold; 
    color: #e74c3c; 
    margin-top: 15px; 
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
    flex-wrap: wrap; 
    gap: 10px;
    margin-bottom: 12px;
}

.method-options button {
    flex: 1 1 45%; 
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
    color: #2c3e50;
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
 
.payment-methods {
    font-family: Arial, sans-serif; 
    background: #f9f9f9; 
   border-radius: 8px; 
    padding: 20px; 
   
    margin: 10px; 
}

.payment-methods h3 {
    color: #2c3e50; 
    margin-bottom: 15px; 
    font-size: 1.5em; 
}

.method-options {
    display: flex;
    gap: 10px; 
}

.method-options button {
    background: #c8cbce; 
    color: white; 
    border: none; 
    border-radius: 4px; 
    padding: 10px 15px; 
    cursor: pointer; 
    transition: background 0.3s; 
}

.method-options button:hover {
    background: #545454; 
}

.method-options button.active {
    background: #0056b3; 
}

.gateway-options {
    margin-top: 15px; 
}

.gateway-options label {
    display: block; 
    background: #ffffff; 
    border: 1px solid #ddd; 
    border-radius: 4px; 
    padding: 10px; 
    margin: 5px 0; 
    cursor: pointer; 
    transition: background 0.3s;
}

.gateway-options label:hover {
    background: #f1f1f1; 
}

.gateway-options input[type="radio"] {
    margin-right: 10px; 
}
.confirm {
    text-align: center; 
    margin: 15px 0; 
}

.btn-primary {
    background-color: #767676;
    color: white;
    border: none; 
    border-radius: 5px; 
    padding: 12px 8px;
    font-size: 1.1em; 
    cursor: pointer; 
    transition: background 0.3s, transform 0.2s; 
}

.btn-primary:hover {
    background-color: #0056b3; 
    transform: scale(1.01);
}

.result {
    margin: 20px 10px; 
    padding: 20px;
    border-radius: 5px; 
    font-size: 1.1em; 
    text-align: center; 
}

.success-msg {
    background-color: #d4edda; 
    color: #155724; 
    border: 1px solid #c3e6cb;
}

.error-msg {
    background-color: #f8d7da; 
    color: #721c24;
    border: 1px solid #f5c6cb;
}
.note {
    margin-top: 15px; 
    font-style: italic;
    color: #6c757d; 
}

/* Media Queries */
@media (max-width: 600px) {
    .payment-page {
        padding: 15px;
    }

    .order-summary .total {
        font-size: 16px;
    }

    .btn-primary {
        padding: 10px;
    }
    .payment-methods {
        padding: 15px; 
    }

    .method-options button {
        padding: 10px; 
    }

    .gateway-options label {
        padding: 10px; 
    }
    .btn-primary {
        padding: 10px 15px; 
        font-size: 1em;
    }
    .result {
        font-size: 1em; 
    }
}
  </style>
  