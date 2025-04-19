<template>
  <va-card class="footer" color="#2c3e50" text-color="white" flat>
    <div class="footer-container">
      <!-- Thông tin liên hệ -->
      <div class="contact">
        <h3>OceanView Resort & Hotel</h3>
        <p>Lô 29, Đường Võ Nguyên Giáp, Quận Sơn Trà, Đà Nẵng</p>
        <p>📞 0236 123 4567 | ✉️ contact@oceanview.vn</p>
      </div>

      <!-- Mạng xã hội -->
      <div class="social">
        <h3>Kết nối với chúng tôi</h3>
        <div class="social-icons">
          <a href="#" target="_blank" aria-label="Facebook">
            <va-icon name="mdi-facebook" color="white" size="24px" />
          </a>
          <a href="#" target="_blank" aria-label="Instagram">
            <va-icon name="mdi-instagram" color="white" size="24px" />
          </a>
          <a href="#" target="_blank" aria-label="Twitter">
            <va-icon name="mdi-twitter" color="white" size="24px" />
          </a>
        </div>
      </div>

      <!-- Bản quyền -->
      <div class="copy">
        <p>© {{ new Date().getFullYear() }} OceanView Hotel Management</p>
      </div>
    </div>
  </va-card>
</template>

<style scoped>
.footer {
  padding: 40px 20px;
  margin-top: 50px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.contact {
  flex: 1;
  text-align: left;
}

.contact h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.social {
  flex: 1;
  text-align: center;
}

.social h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: background-color 0.3s;
}

.social-icons a:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

.copy {
  flex: 1;
  text-align: right;
  font-size: 0.9rem;
  color: #b0b0b0;
}
</style>