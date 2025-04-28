<template>
  <div :class="['rules-container', { 'dark-mode': isDarkMode }]">
    <el-card shadow="hover" class="rules-card animated-card">
      <div class="header">
        <h1 class="rules-title">📜 Nội quy khách sạn</h1>
        <el-switch
          v-model="isDarkMode"
          active-text="Dark Mode"
          inactive-text="Light Mode"
          class="dark-mode-switch"
        />
      </div>

      <el-divider class="custom-divider" content-position="left">
        <img src="https://i.imgur.com/1.png" alt="Icon" class="rule-icon" />
        1. Xuất trình giấy tờ
      </el-divider>
      <div class="rule-section">
        <p class="vi">📌 Quý khách vui lòng xuất trình đầy đủ giấy tờ hợp lệ như Chứng minh nhân dân hoặc Hộ chiếu còn hạn thị thực để khách sạn đăng ký với cơ quan có thẩm quyền.</p>
        <p class="en">👉 Please present your Identity Card or Passport with valid entry and exit Visa at Reception desk upon check in.</p>
      </div>

      <el-divider class="custom-divider" content-position="left">
        <img src="https://i.imgur.com/2.png" alt="Icon" class="rule-icon" />
        2. Giờ nhận & trả phòng
      </el-divider>
      <div class="rule-section">
        <p class="vi">🕒 Giờ nhận phòng từ <strong>14:00</strong> và giờ trả phòng là trước <strong>12:00 trưa</strong>. Việc nhận phòng sớm hoặc trả phòng trễ sẽ bị tính thêm phí theo quy định.</p>
        <p class="en">👉 Check-in time is from <strong>14:00</strong> and check-out is before <strong>12:00 noon</strong>. Early check-in or late check-out will be charged extra fees.</p>
      </div>

      <el-divider class="custom-divider" content-position="left">
        <img src="https://i.imgur.com/3.png" alt="Icon" class="rule-icon" />
        3. Chìa khóa phòng
      </el-divider>
      <div class="rule-section">
        <p class="vi">🔑 Vui lòng gửi lại chìa khóa phòng tại quầy lễ tân khi trả phòng. Nếu mất chìa khóa, khách sạn sẽ tính phí theo quy định.</p>
        <p class="en">👉 Please return your room key card upon check-out at reception desk. In case the card is lost, the fee will be charged accordingly.</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDarkMode = ref(false)
</script>

<style scoped>
/* Layout chính */
.rules-container {

  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f0f2f5, #e0e4eb);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
}

.rules-container.dark-mode {
  background: linear-gradient(135deg, #2c3e50, #1c2833);
  color: #f0f0f0;
}

/* Card nội quy */
.rules-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 40px 30px;
  line-height: 1.8;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s;
}

.rules-container.dark-mode .rules-card {
  background: rgba(44, 62, 80, 0.95);
  color: #f0f0f0;
}

/* Animation card vào màn hình */
.animated-card {
  animation: fadeSlideIn 1s ease forwards;
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Tiêu đề */
.rules-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #2c3e50;
  text-align: center;
}

.rules-container.dark-mode .rules-title {
  color: #f0f0f0;
}

/* Switch chế độ Dark Mode */
.dark-mode-switch {
  position: absolute;
  top: 20px;
  right: 20px;
}

/* Divider tùy chỉnh */
.custom-divider {
  border-top: 2px dashed #409EFF !important;
  margin: 30px 0 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.rule-icon {
  width: 24px;
  height: 24px;
}

/* Section từng quy tắc */
.rule-section {
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.3s;
}

.rule-section:hover {
  background-color: #f0f8ff;
  transform: scale(1.02);
}

.rules-container.dark-mode .rule-section:hover {
  background-color: #34495e;
}

/* Nội dung tiếng Việt */
.vi {
  margin-bottom: 6px;
  color: #333;
  font-weight: 600;
}

.rules-container.dark-mode .vi {
  color: #f0f0f0;
}

/* Nội dung tiếng Anh */
.en {
  margin-bottom: 20px;
  color: #666;
  font-style: italic;
}

.rules-container.dark-mode .en {
  color: #dcdcdc;
}

/* Responsive */
@media (max-width: 768px) {
  .rules-card {
    padding: 30px 20px;
  }
  .rules-title {
    font-size: 24px;
  }
  .vi,
  .en {
    font-size: 14px;
  }
}

/* Hiệu ứng nền mờ có icon nhẹ */
.rules-card::before {
  content: "🏨";
  font-size: 140px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
  opacity: 0.04;
  pointer-events: none;
}
</style>
