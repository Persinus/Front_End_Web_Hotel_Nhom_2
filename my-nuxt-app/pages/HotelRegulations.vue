<template>
  <div class="rules-container">
    <el-card shadow="hover" class="rules-card">
      <h1 class="rules-title">📜 Nội quy khách sạn</h1>

      <el-divider content-position="left">1. Xuất trình giấy tờ</el-divider>
      <p class="vi">📌 Quý khách vui lòng xuất trình đầy đủ giấy tờ hợp lệ như Chứng minh nhân dân hoặc Hộ chiếu còn hạn thị thực để khách sạn đăng ký với cơ quan có thẩm quyền.</p>
      <p class="en">👉 Please present your Identity Card or Passport with valid entry and exit Visa at Reception desk upon check in.</p>

      <el-divider content-position="left">2. Giờ nhận & trả phòng</el-divider>
      <p class="vi">🕒 Giờ nhận phòng từ <strong>14:00</strong> và giờ trả phòng là trước <strong>12:00 trưa</strong>. Việc nhận phòng sớm hoặc trả phòng trễ sẽ bị tính thêm phí theo quy định.</p>
      <p class="en">👉 Check-in time is from <strong>14:00</strong> and check-out is before <strong>12:00 noon</strong>. Early check-in or late check-out will be charged extra fees.</p>

      <el-divider content-position="left">3. Chìa khóa phòng</el-divider>
      <p class="vi">🔑 Vui lòng gửi lại chìa khóa phòng tại quầy lễ tân khi trả phòng. Nếu mất chìa khóa, khách sạn sẽ tính phí theo quy định.</p>
      <p class="en">👉 Please return your room key card upon check-out at reception desk. In case the card is lost, the fee will be charged accordingly.</p>
    </el-card>
  </div>
</template>

<script setup>
// Không cần logic script ở đây
</script>

<style scoped>
.rules-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.rules-card {
  background-color: #fefefe;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  padding: 30px;
  line-height: 1.8;
}

.rules-title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #2c3e50;
  text-align: center;
}

.vi {
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

.en {
  margin-bottom: 20px;
  color: #666;
  font-style: italic;
}
</style>