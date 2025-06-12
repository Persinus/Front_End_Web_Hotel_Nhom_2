<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Thông tin khách sạn -->
      <div class="footer-section company-info">
        <img src="../Assets/logo.png" alt="Logo Khách sạn Ánh Dương" class="logo" />
        <p>Khách sạn OCEAN- Hệ thống quản lý khách sạn chuyên nghiệp</p>
        <p>
          Số 88, đường Biển Xanh, phường Hòa Bình,<br />
          TP. Khánh Hòa, Việt Nam
        </p>
        <p>
          Mã số doanh nghiệp: 0123456789<br />
          do Sở Kế hoạch và Đầu tư TP. Khánh Hòa cấp ngày 01/01/2024
        </p>
      </div>

      <!-- Cột giới thiệu -->
      <div class="footer-section">
        <h3>Giới thiệu</h3>
        <ul>
          <li>Về hệ thống</li>
          <li>Chính sách và điều khoản</li>
          <li>Hướng dẫn sử dụng</li>
          <li>Phương thức thanh toán</li>
          <li>Liên hệ hỗ trợ</li>
        </ul>
      </div>

      <!-- Cột dịch vụ -->
      <div class="footer-section">
        <h3>Dịch vụ</h3>
        <ul>
          <li>Quản lý phòng</li>
          <li>Quản lý đặt phòng</li>
          <li>Quản lý hóa đơn</li>
          <li>Quản lý khách hàng</li>
          <li>Báo cáo doanh thu</li>
        </ul>
      </div>

      <!-- Cột hỗ trợ -->
      <div class="footer-section">
        <h3>Hỗ trợ</h3>
        <ul>
          <li>Blog chia sẻ kinh nghiệm</li>
          <li>Quy định và lưu ý</li>
          <li>Câu hỏi thường gặp</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Hotline: 0909999988 | Email: hotro@anhduonghotel.vn</p>
    </div>
  </footer>
</template>
<script setup>
// Không cần JS bổ sung cho component này
</script>

<style scoped>
.footer {
  background-color: #0a1a32;
  color: #fff;
  padding: 40px 20px;
  font-size: 14px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  align-items: center;
  gap: 20px;
}

.footer-section {
  flex: 1;
}

.footer-section h3 {
  font-size: 16px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.footer-section ul li a {
  color: #b0c7f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #fff;
}

.logo {
  max-width: 120px;
  margin-bottom: 15px;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #b0b0b0;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
