<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Thông tin công ty -->
      <div class="footer-section company-info">
        <img src="../Assets/logo.png" alt="Logo Mixivivu" class="logo" />
        <p>Công ty TNHH Du Lịch và Dịch Vụ Mixivivu</p>
        <p>
          Tầng 7, số nhà 25, ngõ 38 phố Yên Lãng,<br />
          phường Láng Hạ, quận Đống Đa, TP. Hà Nội
        </p>
        <p>
          Mã số doanh nghiệp: 0110376372<br />
          do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp ngày 05/06/2023
        </p>
      </div>

      <!-- Cột giới thiệu -->
      <div class="footer-section">
        <h3>Giới thiệu</h3>
        <ul>
          <li><a href="/about">Về chúng tôi</a></li>
          <li><a href="/terms">Điều khoản và điều kiện</a></li>
          <li><a href="/privacy">Chính sách riêng tư</a></li>
          <li><a href="/guide">Hướng dẫn sử dụng</a></li>
          <li><a href="/payment">Hình thức thanh toán</a></li>
          <li><a href="/contact">Liên hệ</a></li>
        </ul>
      </div>

      <!-- Cột điểm đến -->
      <div class="footer-section">
        <h3>Điểm đến</h3>
        <ul>
          <li><a href="/ha-long">Hạ Long</a></li>
          <li><a href="/ha-noi">Hà Nội</a></li>
          <li><a href="/sapa">Sapa</a></li>
          <li><a href="/ninh-binh">Ninh Bình</a></li>
          <li><a href="/da-nang">Đà Nẵng</a></li>
          <li><a href="/da-lat">Đà Lạt</a></li>
          <li><a href="/nha-trang">Nha Trang</a></li>
          <li><a href="/phu-quoc">Phú Quốc</a></li>
          <li><a href="/quy-nhon">Quy Nhơn</a></li>
        </ul>
      </div>

      <!-- Cột khách sạn -->
      <div class="footer-section">
        <h3>Khách sạn</h3>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/rules">Quy định chung và lưu ý</a></li>
          <li><a href="/faq">Câu hỏi thường gặp</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Hotline: 0922222016 | Email: info@mixivivu.com</p>
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
  
}

.footer-section {
  flex: 1;

}

.footer-section h3 {
  font-size: 16px;
 
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 5px;
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
