import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import QRCodeVue from 'qrcode.vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "hoadon",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const invoiceData = ref({
      tenKhachHang: "Nguy\u1EC5n V\u0103n A",
      tenPhong: "Deluxe Suite - P203",
      ngayNhan: "2025-04-29",
      ngayTra: "2025-05-02",
      tongTien: 24e5,
      tienDaThanhToan: 24e5
    });
    const isFullyPaid = computed(() => {
      return invoiceData.value.tongTien === invoiceData.value.tienDaThanhToan;
    });
    const paymentStatusClass = computed(() => {
      return isFullyPaid.value ? "status-paid" : "status-unpaid";
    });
    const paymentStatusText = computed(() => {
      return isFullyPaid.value ? "\u0110\xE3 thanh to\xE1n \u0111\u1EA7y \u0111\u1EE7" : "Ch\u01B0a thanh to\xE1n \u0111\u1EA7y \u0111\u1EE7";
    });
    const paymentStatusDescription = computed(() => {
      return isFullyPaid.value ? "C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 ho\xE0n t\u1EA5t thanh to\xE1n. Ch\xFAc b\u1EA1n c\xF3 k\u1EF3 ngh\u1EC9 tuy\u1EC7t v\u1EDDi!" : `C\xF2n l\u1EA1i ${formatCurrency(invoiceData.value.tongTien - invoiceData.value.tienDaThanhToan)} c\u1EA7n thanh to\xE1n`;
    });
    const formatCurrency = (amount) => {
      return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    };
    const formatDate = (date) => {
      const dateObj = typeof date === "string" ? new Date(date) : date;
      return dateObj.toLocaleDateString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const calculateNights = () => {
      const checkIn = new Date(invoiceData.value.ngayNhan);
      const checkOut = new Date(invoiceData.value.ngayTra);
      const diffTime = Math.abs(checkOut - checkIn);
      return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    };
    const generateInvoiceNumber = () => {
      const today = /* @__PURE__ */ new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const random = Math.floor(Math.random() * 1e3).toString().padStart(3, "0");
      return `OV${year}${month}${day}${random}`;
    };
    const generateQRCodeData = () => {
      return JSON.stringify({
        hotelName: "OceanView Hotels",
        invoiceNumber: generateInvoiceNumber(),
        tenKhachHang: invoiceData.value.tenKhachHang,
        tenPhong: invoiceData.value.tenPhong,
        ngayNhan: invoiceData.value.ngayNhan,
        ngayTra: invoiceData.value.ngayTra,
        tongTien: invoiceData.value.tongTien,
        tienDaThanhToan: invoiceData.value.tienDaThanhToan,
        trangThai: isFullyPaid.value ? "\u0110\xE3 thanh to\xE1n" : "Ch\u01B0a thanh to\xE1n",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "invoice-page" }, _attrs))} data-v-f2ab4d12><div class="background-animation" data-v-f2ab4d12><div class="floating-shape shape-1" data-v-f2ab4d12></div><div class="floating-shape shape-2" data-v-f2ab4d12></div><div class="floating-shape shape-3" data-v-f2ab4d12></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "invoice-header"])}" data-v-f2ab4d12><div class="header-content" data-v-f2ab4d12><div class="success-icon" data-v-f2ab4d12><svg viewBox="0 0 24 24" class="check-icon" data-v-f2ab4d12><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f2ab4d12></path></svg></div><h1 class="page-title" data-v-f2ab4d12><span class="title-line" data-v-f2ab4d12>H\xF3a \u0111\u01A1n</span><span class="title-highlight" data-v-f2ab4d12>Th\xE0nh c\xF4ng</span></h1><p class="page-subtitle" data-v-f2ab4d12>C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 tin t\u01B0\u1EDFng v\xE0 s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i</p></div></div><div class="invoice-container" data-v-f2ab4d12><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "invoice-details"])}" data-v-f2ab4d12><div class="invoice-card" data-v-f2ab4d12><div class="hotel-branding" data-v-f2ab4d12><div class="logo-section" data-v-f2ab4d12><div class="logo-icon" data-v-f2ab4d12><svg viewBox="0 0 24 24" class="logo-svg" data-v-f2ab4d12><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-f2ab4d12></path><path d="M12 7v5l4 2-4 2v5" data-v-f2ab4d12></path></svg></div><div class="logo-text" data-v-f2ab4d12><h2 data-v-f2ab4d12>OceanView Hotels</h2><p data-v-f2ab4d12>Luxury Experience</p></div></div><div class="invoice-number" data-v-f2ab4d12><span class="invoice-label" data-v-f2ab4d12>S\u1ED1 h\xF3a \u0111\u01A1n</span><span class="invoice-id" data-v-f2ab4d12>#${ssrInterpolate(generateInvoiceNumber())}</span></div></div><div class="${ssrRenderClass([paymentStatusClass.value, "status-banner"])}" data-v-f2ab4d12><div class="status-icon" data-v-f2ab4d12>`);
      if (isFullyPaid.value) {
        _push(`<svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f2ab4d12></path></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-f2ab4d12></path></svg>`);
      }
      _push(`</div><div class="status-content" data-v-f2ab4d12><h3 data-v-f2ab4d12>${ssrInterpolate(paymentStatusText.value)}</h3><p data-v-f2ab4d12>${ssrInterpolate(paymentStatusDescription.value)}</p></div></div><div class="info-section" data-v-f2ab4d12><h3 class="section-title" data-v-f2ab4d12><svg viewBox="0 0 24 24" class="section-icon" data-v-f2ab4d12><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-f2ab4d12></path></svg> Th\xF4ng tin kh\xE1ch h\xE0ng </h3><div class="info-grid" data-v-f2ab4d12><div class="info-item" data-v-f2ab4d12><div class="info-icon" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-f2ab4d12></path></svg></div><div class="info-content" data-v-f2ab4d12><span class="info-label" data-v-f2ab4d12>T\xEAn kh\xE1ch h\xE0ng</span><span class="info-value" data-v-f2ab4d12>${ssrInterpolate(invoiceData.value.tenKhachHang)}</span></div></div><div class="info-item" data-v-f2ab4d12><div class="info-icon" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-f2ab4d12></path></svg></div><div class="info-content" data-v-f2ab4d12><span class="info-label" data-v-f2ab4d12>Ng\xE0y t\u1EA1o h\xF3a \u0111\u01A1n</span><span class="info-value" data-v-f2ab4d12>${ssrInterpolate(formatDate(/* @__PURE__ */ new Date()))}</span></div></div></div></div><div class="info-section" data-v-f2ab4d12><h3 class="section-title" data-v-f2ab4d12><svg viewBox="0 0 24 24" class="section-icon" data-v-f2ab4d12><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-f2ab4d12></path></svg> Chi ti\u1EBFt \u0111\u1EB7t ph\xF2ng </h3><div class="booking-details" data-v-f2ab4d12><div class="booking-item" data-v-f2ab4d12><div class="booking-icon" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-f2ab4d12></path></svg></div><div class="booking-content" data-v-f2ab4d12><span class="booking-label" data-v-f2ab4d12>Ph\xF2ng \u0111\xE3 \u0111\u1EB7t</span><span class="booking-value" data-v-f2ab4d12>${ssrInterpolate(invoiceData.value.tenPhong)}</span></div></div><div class="date-range" data-v-f2ab4d12><div class="date-item" data-v-f2ab4d12><div class="date-icon checkin" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM20 20H4V4h16v16z" data-v-f2ab4d12></path></svg></div><div class="date-content" data-v-f2ab4d12><span class="date-label" data-v-f2ab4d12>Ng\xE0y nh\u1EADn ph\xF2ng</span><span class="date-value" data-v-f2ab4d12>${ssrInterpolate(formatDate(invoiceData.value.ngayNhan))}</span></div></div><div class="date-separator" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" data-v-f2ab4d12></path></svg></div><div class="date-item" data-v-f2ab4d12><div class="date-icon checkout" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM20 20H4V4h16v16z" data-v-f2ab4d12></path></svg></div><div class="date-content" data-v-f2ab4d12><span class="date-label" data-v-f2ab4d12>Ng\xE0y tr\u1EA3 ph\xF2ng</span><span class="date-value" data-v-f2ab4d12>${ssrInterpolate(formatDate(invoiceData.value.ngayTra))}</span></div></div></div><div class="stay-duration" data-v-f2ab4d12><span class="duration-label" data-v-f2ab4d12>Th\u1EDDi gian l\u01B0u tr\xFA:</span><span class="duration-value" data-v-f2ab4d12>${ssrInterpolate(calculateNights())} \u0111\xEAm</span></div></div></div><div class="payment-section" data-v-f2ab4d12><h3 class="section-title" data-v-f2ab4d12><svg viewBox="0 0 24 24" class="section-icon" data-v-f2ab4d12><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" data-v-f2ab4d12></path></svg> Th\xF4ng tin thanh to\xE1n </h3><div class="payment-breakdown" data-v-f2ab4d12><div class="payment-row" data-v-f2ab4d12><span class="payment-label" data-v-f2ab4d12>T\u1ED5ng ti\u1EC1n ph\xF2ng</span><span class="payment-value" data-v-f2ab4d12>${ssrInterpolate(formatCurrency(invoiceData.value.tongTien))}</span></div><div class="payment-row" data-v-f2ab4d12><span class="payment-label" data-v-f2ab4d12>S\u1ED1 ti\u1EC1n \u0111\xE3 thanh to\xE1n</span><span class="payment-value paid" data-v-f2ab4d12>${ssrInterpolate(formatCurrency(invoiceData.value.tienDaThanhToan))}</span></div>`);
      if (!isFullyPaid.value) {
        _push(`<div class="payment-row remaining" data-v-f2ab4d12><span class="payment-label" data-v-f2ab4d12>S\u1ED1 ti\u1EC1n c\xF2n l\u1EA1i</span><span class="payment-value" data-v-f2ab4d12>${ssrInterpolate(formatCurrency(invoiceData.value.tongTien - invoiceData.value.tienDaThanhToan))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="payment-total" data-v-f2ab4d12><span class="total-label" data-v-f2ab4d12>T\u1ED5ng c\u1ED9ng</span><span class="total-value" data-v-f2ab4d12>${ssrInterpolate(formatCurrency(invoiceData.value.tongTien))}</span></div></div></div><div class="action-buttons" data-v-f2ab4d12><button class="btn btn-primary" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" data-v-f2ab4d12></path></svg> T\u1EA3i xu\u1ED1ng PDF </button><button class="btn btn-secondary" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" data-v-f2ab4d12></path></svg> In h\xF3a \u0111\u01A1n </button><button class="btn btn-outline" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-f2ab4d12></path></svg> G\u1EEDi email </button></div></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "invoice-qr"])}" data-v-f2ab4d12><div class="qr-card" data-v-f2ab4d12><div class="qr-header" data-v-f2ab4d12><h3 class="qr-title" data-v-f2ab4d12><svg viewBox="0 0 24 24" class="qr-icon" data-v-f2ab4d12><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4z" data-v-f2ab4d12></path></svg> M\xE3 QR H\xF3a \u0110\u01A1n </h3><p class="qr-description" data-v-f2ab4d12>Qu\xE9t m\xE3 \u0111\u1EC3 xem chi ti\u1EBFt h\xF3a \u0111\u01A1n</p></div><div class="qr-container" data-v-f2ab4d12><div class="qr-wrapper" data-v-f2ab4d12>`);
      _push(ssrRenderComponent(QRCodeVue, {
        value: generateQRCodeData(),
        size: 220,
        class: "qr-code",
        level: "M",
        "render-as": "svg"
      }, null, _parent));
      _push(`<div class="qr-overlay" data-v-f2ab4d12><div class="qr-logo" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-f2ab4d12></path></svg></div></div></div></div><div class="qr-info" data-v-f2ab4d12><div class="qr-features" data-v-f2ab4d12><div class="feature-item" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M12 1L3 5v6c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V5l-9-4z" data-v-f2ab4d12></path></svg><span data-v-f2ab4d12>B\u1EA3o m\u1EADt cao</span></div><div class="feature-item" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f2ab4d12></path></svg><span data-v-f2ab4d12>X\xE1c th\u1EF1c nhanh</span></div><div class="feature-item" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-f2ab4d12></path></svg><span data-v-f2ab4d12>D\u1EC5 s\u1EED d\u1EE5ng</span></div></div></div></div><div class="additional-info" data-v-f2ab4d12><div class="info-card" data-v-f2ab4d12><h4 data-v-f2ab4d12>Ch\xEDnh s\xE1ch h\u1EE7y ph\xF2ng</h4><p data-v-f2ab4d12>Mi\u1EC5n ph\xED h\u1EE7y ph\xF2ng tr\u01B0\u1EDBc 24h. Ph\xED h\u1EE7y 50% n\u1EBFu h\u1EE7y trong v\xF2ng 24h.</p></div><div class="info-card" data-v-f2ab4d12><h4 data-v-f2ab4d12>Li\xEAn h\u1EC7 h\u1ED7 tr\u1EE3</h4><div class="contact-info" data-v-f2ab4d12><div class="contact-item" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-f2ab4d12></path></svg><span data-v-f2ab4d12>1900-1234</span></div><div class="contact-item" data-v-f2ab4d12><svg viewBox="0 0 24 24" data-v-f2ab4d12><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-f2ab4d12></path></svg><span data-v-f2ab4d12>support@oceanview.com</span></div></div></div></div></div></div>`);
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-f2ab4d12><div class="toast-content" data-v-f2ab4d12>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-f2ab4d12><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f2ab4d12></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span data-v-f2ab4d12>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hoadon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hoadon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2ab4d12"]]);

export { hoadon as default };
//# sourceMappingURL=hoadon-BSW-IH6i.mjs.map
