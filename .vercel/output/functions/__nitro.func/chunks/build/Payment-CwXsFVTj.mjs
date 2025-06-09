import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "Payment",
  __ssrInlineRender: true,
  setup(__props) {
    const order = ref({
      room: {
        name: "Suite Ocean View",
        price: 18e5
      },
      checkIn: "2025-04-20",
      checkOut: "2025-04-23",
      services: ["\u0102n s\xE1ng buffet", "Spa th\u01B0 gi\xE3n", "\u0110\u01B0a \u0111\xF3n s\xE2n bay"]
    });
    const method = ref("prepay");
    const gateway = ref("");
    const status = ref("");
    const isProcessing = ref(false);
    const isVisible = ref(false);
    const currentStep = ref(1);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const nights = computed(() => {
      const inDate = new Date(order.value.checkIn);
      const outDate = new Date(order.value.checkOut);
      const diff = (outDate - inDate) / (1e3 * 3600 * 24);
      return Math.max(1, diff);
    });
    const baseTotal = computed(() => {
      return order.value.room.price * nights.value;
    });
    const serviceFee = computed(() => {
      return order.value.services.length * 15e4;
    });
    const taxFee = computed(() => {
      return Math.round((baseTotal.value + serviceFee.value) * 0.1);
    });
    const total = computed(() => {
      return baseTotal.value + serviceFee.value + taxFee.value;
    });
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN").format(price);
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const generateBookingId = () => {
      const today = /* @__PURE__ */ new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const random = Math.floor(Math.random() * 1e3).toString().padStart(3, "0");
      return `OV${year}${month}${day}${random}`;
    };
    const getButtonText = () => {
      if (isProcessing.value) {
        return "\u0110ang x\u1EED l\xFD...";
      }
      if (method.value === "prepay") {
        return `Thanh to\xE1n ${formatPrice(total.value)}\u20AB`;
      }
      return "X\xE1c nh\u1EADn \u0111\u1EB7t ph\xF2ng";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-page" }, _attrs))} data-v-b20d8ca3><div class="background-animation" data-v-b20d8ca3><div class="floating-shape shape-1" data-v-b20d8ca3></div><div class="floating-shape shape-2" data-v-b20d8ca3></div><div class="floating-shape shape-3" data-v-b20d8ca3></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "payment-header"])}" data-v-b20d8ca3><div class="header-content" data-v-b20d8ca3><div class="header-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" class="icon-svg" data-v-b20d8ca3><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-b20d8ca3></path></svg></div><h2 class="page-title" data-v-b20d8ca3><span class="title-line" data-v-b20d8ca3>X\xE1c nh\u1EADn \u0111\u01A1n h\xE0ng</span><span class="title-highlight" data-v-b20d8ca3>&amp; Thanh to\xE1n</span></h2><p class="page-subtitle" data-v-b20d8ca3>Ho\xE0n t\u1EA5t \u0111\u1EB7t ph\xF2ng v\u1EDBi quy tr\xECnh thanh to\xE1n an to\xE0n</p></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "progress-container"])}" data-v-b20d8ca3><div class="progress-steps" data-v-b20d8ca3><div class="${ssrRenderClass([{ "active": currentStep.value >= 1, "completed": currentStep.value > 1 }, "step"])}" data-v-b20d8ca3><div class="step-circle" data-v-b20d8ca3>`);
      if (currentStep.value > 1) {
        _push(`<svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-b20d8ca3></path></svg>`);
      } else {
        _push(`<span data-v-b20d8ca3>1</span>`);
      }
      _push(`</div><span class="step-label" data-v-b20d8ca3>Th\xF4ng tin \u0111\u01A1n h\xE0ng</span></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 2 }, "progress-line"])}" data-v-b20d8ca3></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 2, "completed": currentStep.value > 2 }, "step"])}" data-v-b20d8ca3><div class="step-circle" data-v-b20d8ca3>`);
      if (currentStep.value > 2) {
        _push(`<svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-b20d8ca3></path></svg>`);
      } else {
        _push(`<span data-v-b20d8ca3>2</span>`);
      }
      _push(`</div><span class="step-label" data-v-b20d8ca3>Ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n</span></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 3 }, "progress-line"])}" data-v-b20d8ca3></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 3 }, "step"])}" data-v-b20d8ca3><div class="step-circle" data-v-b20d8ca3><span data-v-b20d8ca3>3</span></div><span class="step-label" data-v-b20d8ca3>X\xE1c nh\u1EADn</span></div></div></div><div class="payment-content" data-v-b20d8ca3><section class="${ssrRenderClass([{ "animate-in": isVisible.value }, "order-summary"])}" data-v-b20d8ca3><div class="section-header" data-v-b20d8ca3><h3 class="section-title" data-v-b20d8ca3><svg viewBox="0 0 24 24" class="section-icon" data-v-b20d8ca3><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-b20d8ca3></path></svg> Th\xF4ng tin \u0111\u01A1n h\xE0ng </h3><div class="booking-id" data-v-b20d8ca3><span class="id-label" data-v-b20d8ca3>M\xE3 \u0111\u1EB7t ph\xF2ng:</span><span class="id-value" data-v-b20d8ca3>#${ssrInterpolate(generateBookingId())}</span></div></div><div class="order-details" data-v-b20d8ca3><div class="detail-card room-card" data-v-b20d8ca3><div class="card-header" data-v-b20d8ca3><div class="room-image" data-v-b20d8ca3><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="Room" data-v-b20d8ca3></div><div class="room-info" data-v-b20d8ca3><h4 class="room-name" data-v-b20d8ca3>${ssrInterpolate(order.value.room.name)}</h4><div class="room-rating" data-v-b20d8ca3><div class="stars" data-v-b20d8ca3><!--[-->`);
      ssrRenderList(5, (n) => {
        _push(`<svg viewBox="0 0 24 24" class="star" data-v-b20d8ca3><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-b20d8ca3></path></svg>`);
      });
      _push(`<!--]--></div><span class="rating-text" data-v-b20d8ca3>4.8/5</span></div></div></div><div class="booking-dates" data-v-b20d8ca3><div class="date-item checkin" data-v-b20d8ca3><div class="date-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-b20d8ca3></path></svg></div><div class="date-content" data-v-b20d8ca3><span class="date-label" data-v-b20d8ca3>Ng\xE0y nh\u1EADn ph\xF2ng</span><span class="date-value" data-v-b20d8ca3>${ssrInterpolate(formatDate(order.value.checkIn))}</span></div></div><div class="date-separator" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" data-v-b20d8ca3></path></svg></div><div class="date-item checkout" data-v-b20d8ca3><div class="date-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6l-1 1H5v2h14V4z" data-v-b20d8ca3></path></svg></div><div class="date-content" data-v-b20d8ca3><span class="date-label" data-v-b20d8ca3>Ng\xE0y tr\u1EA3 ph\xF2ng</span><span class="date-value" data-v-b20d8ca3>${ssrInterpolate(formatDate(order.value.checkOut))}</span></div></div></div><div class="stay-duration" data-v-b20d8ca3><span class="duration-label" data-v-b20d8ca3>Th\u1EDDi gian l\u01B0u tr\xFA:</span><span class="duration-value" data-v-b20d8ca3>${ssrInterpolate(nights.value)} \u0111\xEAm</span></div></div><div class="detail-card price-card" data-v-b20d8ca3><h4 class="card-title" data-v-b20d8ca3><svg viewBox="0 0 24 24" class="title-icon" data-v-b20d8ca3><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" data-v-b20d8ca3></path></svg> Chi ti\u1EBFt gi\xE1 </h4><div class="price-breakdown" data-v-b20d8ca3><div class="price-row" data-v-b20d8ca3><span class="price-label" data-v-b20d8ca3>Gi\xE1 ph\xF2ng (${ssrInterpolate(nights.value)} \u0111\xEAm)</span><span class="price-value" data-v-b20d8ca3>${ssrInterpolate(formatPrice(baseTotal.value))}\u20AB</span></div>`);
      if (order.value.services.length) {
        _push(`<div class="price-row" data-v-b20d8ca3><span class="price-label" data-v-b20d8ca3>D\u1ECBch v\u1EE5 k\xE8m theo</span><span class="price-value" data-v-b20d8ca3>${ssrInterpolate(formatPrice(serviceFee.value))}\u20AB</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="price-row" data-v-b20d8ca3><span class="price-label" data-v-b20d8ca3>Thu\u1EBF &amp; ph\xED (10%)</span><span class="price-value" data-v-b20d8ca3>${ssrInterpolate(formatPrice(taxFee.value))}\u20AB</span></div><div class="price-total" data-v-b20d8ca3><span class="total-label" data-v-b20d8ca3>T\u1ED5ng c\u1ED9ng</span><span class="total-value" data-v-b20d8ca3>${ssrInterpolate(formatPrice(total.value))}\u20AB</span></div></div></div>`);
      if (order.value.services.length) {
        _push(`<div class="detail-card services-card" data-v-b20d8ca3><h4 class="card-title" data-v-b20d8ca3><svg viewBox="0 0 24 24" class="title-icon" data-v-b20d8ca3><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-b20d8ca3></path></svg> D\u1ECBch v\u1EE5 \u0111\xE3 ch\u1ECDn </h4><ul class="services-list" data-v-b20d8ca3><!--[-->`);
        ssrRenderList(order.value.services, (service) => {
          _push(`<li class="service-item" data-v-b20d8ca3><svg viewBox="0 0 24 24" class="service-icon" data-v-b20d8ca3><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-b20d8ca3></path></svg><span data-v-b20d8ca3>${ssrInterpolate(service)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="${ssrRenderClass([{ "animate-in": isVisible.value }, "payment-methods"])}" data-v-b20d8ca3><div class="section-header" data-v-b20d8ca3><h3 class="section-title" data-v-b20d8ca3><svg viewBox="0 0 24 24" class="section-icon" data-v-b20d8ca3><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-b20d8ca3></path></svg> Ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n </h3></div><div class="payment-options" data-v-b20d8ca3><div class="method-selection" data-v-b20d8ca3><button class="${ssrRenderClass([{ "active": method.value === "prepay" }, "method-btn"])}" data-v-b20d8ca3><div class="method-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-b20d8ca3></path></svg></div><div class="method-content" data-v-b20d8ca3><span class="method-title" data-v-b20d8ca3>Thanh to\xE1n tr\u01B0\u1EDBc</span><span class="method-desc" data-v-b20d8ca3>Thanh to\xE1n ngay \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o \u0111\u1EB7t ph\xF2ng</span></div></button><button class="${ssrRenderClass([{ "active": method.value === "postpay" }, "method-btn"])}" data-v-b20d8ca3><div class="method-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-b20d8ca3></path></svg></div><div class="method-content" data-v-b20d8ca3><span class="method-title" data-v-b20d8ca3>Thanh to\xE1n sau</span><span class="method-desc" data-v-b20d8ca3>Thanh to\xE1n khi nh\u1EADn ph\xF2ng t\u1EA1i kh\xE1ch s\u1EA1n</span></div></button></div>`);
      if (method.value === "prepay") {
        _push(`<div class="gateway-section" data-v-b20d8ca3><h4 class="gateway-title" data-v-b20d8ca3>Ch\u1ECDn c\u1ED5ng thanh to\xE1n</h4><div class="gateway-options" data-v-b20d8ca3><label class="${ssrRenderClass([{ "selected": gateway.value === "visa" }, "gateway-option"])}" data-v-b20d8ca3><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "visa")) ? " checked" : ""} value="visa" data-v-b20d8ca3><div class="gateway-content" data-v-b20d8ca3><div class="gateway-icon visa" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-b20d8ca3></path></svg></div><div class="gateway-info" data-v-b20d8ca3><span class="gateway-name" data-v-b20d8ca3>Th\u1EBB Visa/Mastercard</span><span class="gateway-desc" data-v-b20d8ca3>Thanh to\xE1n b\u1EB1ng th\u1EBB t\xEDn d\u1EE5ng/ghi n\u1EE3</span></div></div></label><label class="${ssrRenderClass([{ "selected": gateway.value === "momo" }, "gateway-option"])}" data-v-b20d8ca3><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "momo")) ? " checked" : ""} value="momo" data-v-b20d8ca3><div class="gateway-content" data-v-b20d8ca3><div class="gateway-icon momo" data-v-b20d8ca3><span data-v-b20d8ca3>\u{1F4F1}</span></div><div class="gateway-info" data-v-b20d8ca3><span class="gateway-name" data-v-b20d8ca3>V\xED MoMo</span><span class="gateway-desc" data-v-b20d8ca3>Thanh to\xE1n qua v\xED \u0111i\u1EC7n t\u1EED MoMo</span></div></div></label><label class="${ssrRenderClass([{ "selected": gateway.value === "paypal" }, "gateway-option"])}" data-v-b20d8ca3><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "paypal")) ? " checked" : ""} value="paypal" data-v-b20d8ca3><div class="gateway-content" data-v-b20d8ca3><div class="gateway-icon paypal" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.26-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81.394.45.67.96.074 1.107z" data-v-b20d8ca3></path></svg></div><div class="gateway-info" data-v-b20d8ca3><span class="gateway-name" data-v-b20d8ca3>PayPal</span><span class="gateway-desc" data-v-b20d8ca3>Thanh to\xE1n an to\xE0n qua PayPal</span></div></div></label><label class="${ssrRenderClass([{ "selected": gateway.value === "bank" }, "gateway-option"])}" data-v-b20d8ca3><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "bank")) ? " checked" : ""} value="bank" data-v-b20d8ca3><div class="gateway-content" data-v-b20d8ca3><div class="gateway-icon bank" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M11.5 1L2 6v2h20V6m-5 4v7h3v-7M2 22h20v-2H2m1.5-4h4v-7h-4m6 0v7h4v-7" data-v-b20d8ca3></path></svg></div><div class="gateway-info" data-v-b20d8ca3><span class="gateway-name" data-v-b20d8ca3>Chuy\u1EC3n kho\u1EA3n ng\xE2n h\xE0ng</span><span class="gateway-desc" data-v-b20d8ca3>Chuy\u1EC3n kho\u1EA3n tr\u1EF1c ti\u1EBFp</span></div></div></label></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (method.value === "postpay") {
        _push(`<div class="postpay-note" data-v-b20d8ca3><div class="note-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-b20d8ca3></path></svg></div><div class="note-content" data-v-b20d8ca3><h4 data-v-b20d8ca3>Thanh to\xE1n khi nh\u1EADn ph\xF2ng</h4><p data-v-b20d8ca3>B\u1EA1n s\u1EBD thanh to\xE1n tr\u1EF1c ti\u1EBFp t\u1EA1i qu\u1EA7y l\u1EC5 t\xE2n khi l\xE0m th\u1EE7 t\u1EE5c nh\u1EADn ph\xF2ng. Ch\xFAng t\xF4i ch\u1EA5p nh\u1EADn ti\u1EC1n m\u1EB7t v\xE0 th\u1EBB.</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section class="${ssrRenderClass([{ "animate-in": isVisible.value }, "confirmation"])}" data-v-b20d8ca3><div class="confirm-card" data-v-b20d8ca3><div class="security-info" data-v-b20d8ca3><div class="security-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M12 1L3 5v6c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V5l-9-4z" data-v-b20d8ca3></path></svg></div><div class="security-text" data-v-b20d8ca3><h4 data-v-b20d8ca3>Thanh to\xE1n an to\xE0n</h4><p data-v-b20d8ca3>Th\xF4ng tin c\u1EE7a b\u1EA1n \u0111\u01B0\u1EE3c b\u1EA3o m\u1EADt v\u1EDBi m\xE3 h\xF3a SSL 256-bit</p></div></div><button${ssrIncludeBooleanAttr(isProcessing.value || method.value === "prepay" && !gateway.value) ? " disabled" : ""} class="${ssrRenderClass([{ "loading": isProcessing.value }, "confirm-btn"])}" data-v-b20d8ca3><div class="btn-content" data-v-b20d8ca3>`);
      if (!isProcessing.value) {
        _push(`<svg viewBox="0 0 24 24" class="btn-icon" data-v-b20d8ca3><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-b20d8ca3></path></svg>`);
      } else {
        _push(`<div class="loading-spinner" data-v-b20d8ca3></div>`);
      }
      _push(`<span data-v-b20d8ca3>${ssrInterpolate(getButtonText())}</span></div></button></div></section></div>`);
      if (status.value === "success") {
        _push(`<div class="result-overlay" data-v-b20d8ca3><div class="result-modal success" data-v-b20d8ca3><div class="result-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-b20d8ca3></path></svg></div><h3 data-v-b20d8ca3>Thanh to\xE1n th\xE0nh c\xF4ng!</h3><p data-v-b20d8ca3>H\xF3a \u0111\u01A1n \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi qua email. C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 ch\u1ECDn d\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i.</p><button class="result-btn" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M10 17l5-5-5-5v10z" data-v-b20d8ca3></path></svg> Ti\u1EBFp t\u1EE5c </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value === "error") {
        _push(`<div class="result-overlay" data-v-b20d8ca3><div class="result-modal error" data-v-b20d8ca3><div class="result-icon" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-b20d8ca3></path></svg></div><h3 data-v-b20d8ca3>Thanh to\xE1n th\u1EA5t b\u1EA1i</h3><p data-v-b20d8ca3>C\xF3 l\u1ED7i x\u1EA3y ra trong qu\xE1 tr\xECnh thanh to\xE1n. Vui l\xF2ng th\u1EED l\u1EA1i ho\u1EB7c ch\u1ECDn ph\u01B0\u01A1ng th\u1EE9c kh\xE1c.</p><button class="result-btn" data-v-b20d8ca3><svg viewBox="0 0 24 24" data-v-b20d8ca3><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" data-v-b20d8ca3></path></svg> Th\u1EED l\u1EA1i </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-b20d8ca3><div class="toast-content" data-v-b20d8ca3>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-b20d8ca3><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-b20d8ca3></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-b20d8ca3><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-b20d8ca3></path></svg>`);
        }
        _push(`<span data-v-b20d8ca3>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Payment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b20d8ca3"]]);

export { Payment as default };
//# sourceMappingURL=Payment-CwXsFVTj.mjs.map
