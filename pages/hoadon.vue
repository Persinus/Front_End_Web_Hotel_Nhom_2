<template>
    <div class="invoice-page">
      <!-- Cột trái: Thông tin hóa đơn -->
      <div class="invoice-details">
        <va-card outlined class="invoice-card">
          <h2 class="invoice-title">Hóa Đơn Thành Công</h2>
          <p><strong>👤 Tên Khách Hàng:</strong> {{ invoiceData.tenKhachHang }}</p>
          <p><strong>🏠 Phòng Đã Đặt:</strong> {{ invoiceData.tenPhong }}</p>
          <p><strong>📅 Ngày Nhận Phòng:</strong> {{ invoiceData.ngayNhan }}</p>
          <p><strong>📅 Ngày Trả Phòng:</strong> {{ invoiceData.ngayTra }}</p>
          <p><strong>💵 Số Tiền:</strong> {{ formatCurrency(invoiceData.tongTien) }}</p>
          <p><strong>💳 Số Tiền Đã Thanh Toán:</strong> {{ formatCurrency(invoiceData.tienDaThanhToan) }}</p>
          <p>
            <strong>🔥 Trạng Thái Thanh Toán:</strong>
            <span
              :class="invoiceData.tongTien === invoiceData.tienDaThanhToan ? 'status-paid' : 'status-unpaid'"
            >
              {{ invoiceData.tongTien === invoiceData.tienDaThanhToan ? 'Đã Thanh Toán' : 'Chưa Thanh Toán' }}
            </span>
          </p>
        </va-card>
      </div>
  
      <!-- Cột phải: QR Code -->
      <div class="invoice-qr">
        <va-card outlined class="qr-card">
          <h2 class="qr-title">Mã QR Thông Tin Hóa Đơn</h2>
          <qrcode-vue
            :value="generateQRCodeData()"
            :size="200"
            class="qr-code"
          />
        </va-card>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import QrcodeVue from 'qrcode.vue'
  
  // Dữ liệu hóa đơn (giả lập - có thể nhận từ API)
  const invoiceData = ref({
    tenKhachHang: 'Nguyễn Văn A',
    tenPhong: 'Deluxe - P203',
    ngayNhan: '2025-04-29',
    ngayTra: '2025-05-02',
    tongTien: 2400000,
    tienDaThanhToan: 2400000
  })
  
  // Hàm format tiền tệ
  const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
  }
  
  // Dữ liệu để mã hóa QR Code
  const generateQRCodeData = () => {
    return JSON.stringify({
      tenKhachHang: invoiceData.value.tenKhachHang,
      tenPhong: invoiceData.value.tenPhong,
      ngayNhan: invoiceData.value.ngayNhan,
      ngayTra: invoiceData.value.ngayTra,
      tongTien: invoiceData.value.tongTien,
      tienDaThanhToan: invoiceData.value.tienDaThanhToan
    })
  }
  </script>
  
  <style scoped>
  .invoice-page {
    display: flex;
    gap: 20px;
    padding: 20px;
  }
  
  .invoice-details,
  .invoice-qr {
    flex: 1;
  }
  
  .invoice-card,
  .qr-card {
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .invoice-title,
  .qr-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .status-paid {
    color: green;
    font-weight: bold;
  }
  
  .status-unpaid {
    color: red;
    font-weight: bold;
  }
  
  .qr-code {
    margin: auto;
    display: block;
  }
  </style> 