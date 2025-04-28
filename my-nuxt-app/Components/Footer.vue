<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Thông tin liên hệ -->
      <div class="footer-section contact">
        <h3>OceanView Resort & Hotel</h3>
        <p>Lô 29, Đường Võ Nguyên Giáp, Quận Sơn Trà, Đà Nẵng</p>
        <p>📞 0236 123 4567 | ✉️ contact@oceanview.vn</p>
      </div>

      <!-- Mạng xã hội -->
      <div class="footer-section social">
        <h3>Kết nối với chúng tôi</h3>
        <div class="social-icons">
          <a href="#" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <!-- Bản quyền -->
      <div class="footer-section copy">
        <p>© {{ new Date().getFullYear() }} OceanView Hotel Management</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
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

.footer-section {
  flex: 1;
  min-width: 250px;
}

.contact h3,
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
  color: white;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s;
}

.social-icons a:hover {
  background-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
}

.copy {
  text-align: center;
  font-size: 0.9rem;
  color: #b0b0b0;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-section {
    margin-bottom: 20px;
  }

  .copy {
    margin-top: 20px;
  }
}
</style>