<template>
    <va-card class="footer" color="#2c3e50" text-color="white" flat>
      <div class="contact">
        <p><strong>OceanView Resort & Hotel</strong></p>
        <p>Lô 29, Đường Võ Nguyên Giáp, Quận Sơn Trà, Đà Nẵng</p>
        <p>📞 0236 123 4567 | ✉️ contact@oceanview.vn</p>
      </div>
      <div class="social">
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
      </div>
      <div class="copy">
        © {{ new Date().getFullYear() }} OceanView Hotel Management
      </div>
    </va-card>
  </template>
  
  <style scoped>
  .footer {
    text-align: center;
    margin-top: 50px;
    padding: 40px 20px;
  }
  
  .footer a {
    color: #ffffff;
    text-decoration: underline;
    margin: 0 5px;
  }
  </style>