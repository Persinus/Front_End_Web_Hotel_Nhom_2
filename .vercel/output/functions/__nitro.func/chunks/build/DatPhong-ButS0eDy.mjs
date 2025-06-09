import { ref, computed, watch, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { b as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'chokidar';
import 'anymatch';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';
import 'pinia';

const _sfc_main = {
  __name: "DatPhong",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { $api } = useNuxtApp();
    const bookingData = ref({
      cccd: "",
      sdt: "",
      ngayNhan: "",
      ngayTra: "",
      soNguoiLon: 1,
      soTreEm: 0,
      yeuCau: ""
    });
    const roomData = ref({
      tienNghiList: [],
      giaPhong: 0
    });
    const loading = ref(true);
    const isVisible = ref(false);
    const isSubmitting = ref(false);
    const showSuccessModal = ref(false);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const currentStep = ref(1);
    const currentImageIndex = ref(0);
    const errors = ref({
      cccd: "",
      sdt: "",
      ngayNhan: "",
      ngayTra: ""
    });
    route.params.maPhong;
    const roomImages = ref([
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061"
    ]);
    const urgencyMessage = ref("");
    const minDate = computed(() => {
      return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    });
    const totalNights = computed(() => {
      if (!bookingData.value.ngayNhan || !bookingData.value.ngayTra) return 0;
      const checkIn = new Date(bookingData.value.ngayNhan);
      const checkOut = new Date(bookingData.value.ngayTra);
      const diffTime = checkOut - checkIn;
      return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    });
    const totalPrice = computed(() => {
      return roomData.value.giaPhong * totalNights.value;
    });
    const isFormValid = computed(() => {
      return bookingData.value.cccd && bookingData.value.sdt && bookingData.value.ngayNhan && bookingData.value.ngayTra && !Object.values(errors.value).some((error) => error);
    });
    const parsedAmenities = computed(() => {
      return roomData.value.tienNghiList || [];
    });
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN").format(price);
    };
    const validateField = (field) => {
      switch (field) {
        case "cccd":
          errors.value.cccd = bookingData.value.cccd.length < 9 ? "CCCD ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 9 s\u1ED1" : "";
          break;
        case "sdt":
          const phoneRegex = /^[0-9]{10,11}$/;
          errors.value.sdt = !phoneRegex.test(bookingData.value.sdt) ? "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xF4ng h\u1EE3p l\u1EC7" : "";
          break;
        case "ngayNhan":
          const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
          errors.value.ngayNhan = bookingData.value.ngayNhan < today ? "Ng\xE0y nh\u1EADn ph\xF2ng kh\xF4ng th\u1EC3 l\xE0 qu\xE1 kh\u1EE9" : "";
          break;
        case "ngayTra":
          errors.value.ngayTra = bookingData.value.ngayTra <= bookingData.value.ngayNhan ? "Ng\xE0y tr\u1EA3 ph\xF2ng ph\u1EA3i sau ng\xE0y nh\u1EADn ph\xF2ng" : "";
          break;
      }
    };
    const getAmenityIcon = (amenity) => {
      const icons = {
        "M\xE1y l\u1EA1nh": "https://cdn-icons-png.flaticon.com/512/606/606792.png",
        "Tivi": "https://cdn-icons-png.flaticon.com/512/5110/5110853.png",
        "Wifi mi\u1EC5n ph\xED": "https://cdn-icons-png.flaticon.com/512/2957/2957496.png",
        "Minibar": "https://cdn-icons-png.flaticon.com/512/1511/1511863.png",
        "B\u1ED9 tr\xE0/c\xE0 ph\xEA": "https://cdn-icons-png.flaticon.com/512/892/892668.png",
        "Tivi 55 inch": "https://cdn-icons-png.flaticon.com/512/1762/1762766.png"
      };
      return icons[amenity] || "https://cdn-icons-png.flaticon.com/512/565/565547.png";
    };
    watch(() => [bookingData.value.cccd, bookingData.value.sdt], () => {
      if (bookingData.value.cccd && bookingData.value.sdt) {
        currentStep.value = 2;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = resolveComponent("TheHeader");
      const _component_va_icon = resolveComponent("va-icon");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_textarea = resolveComponent("va-textarea");
      _push(`<!--[--><header data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      _push(`</header><div class="booking-page" data-v-a5cbd3d5><div class="background-animation" data-v-a5cbd3d5><div class="floating-shape shape-1" data-v-a5cbd3d5></div><div class="floating-shape shape-2" data-v-a5cbd3d5></div><div class="floating-shape shape-3" data-v-a5cbd3d5></div></div><div class="progress-container" data-v-a5cbd3d5><div class="progress-steps" data-v-a5cbd3d5><div class="${ssrRenderClass([{ "active": currentStep.value >= 1, "completed": currentStep.value > 1 }, "step"])}" data-v-a5cbd3d5><div class="step-circle" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: currentStep.value > 1 ? "check" : "hotel"
      }, null, _parent));
      _push(`</div><span class="step-label" data-v-a5cbd3d5>Th\xF4ng tin ph\xF2ng</span></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 2 }, "progress-line"])}" data-v-a5cbd3d5></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 2, "completed": currentStep.value > 2 }, "step"])}" data-v-a5cbd3d5><div class="step-circle" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: currentStep.value > 2 ? "check" : "person"
      }, null, _parent));
      _push(`</div><span class="step-label" data-v-a5cbd3d5>Th\xF4ng tin kh\xE1ch</span></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 3 }, "progress-line"])}" data-v-a5cbd3d5></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 3 }, "step"])}" data-v-a5cbd3d5><div class="step-circle" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "payment" }, null, _parent));
      _push(`</div><span class="step-label" data-v-a5cbd3d5>X\xE1c nh\u1EADn</span></div></div></div><div class="main-content" data-v-a5cbd3d5><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "room-info"])}" data-v-a5cbd3d5><div class="room-card" data-v-a5cbd3d5>`);
      if (loading.value) {
        _push(`<div class="loading-container" data-v-a5cbd3d5><div class="loading-spinner" data-v-a5cbd3d5><div class="spinner" data-v-a5cbd3d5></div><p data-v-a5cbd3d5>\u0110ang t\u1EA3i th\xF4ng tin ph\xF2ng...</p></div></div>`);
      } else {
        _push(`<div class="room-content" data-v-a5cbd3d5><div class="room-header" data-v-a5cbd3d5>`);
        if (roomData.value.tinhTrang === "1") {
          _push(`<div class="room-badge" data-v-a5cbd3d5>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "verified" }, null, _parent));
          _push(`<span data-v-a5cbd3d5>C\xF2n tr\u1ED1ng</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="room-title" data-v-a5cbd3d5>${ssrInterpolate(roomData.value.loaiPhong)}</h2><div class="room-rating" data-v-a5cbd3d5><div class="stars" data-v-a5cbd3d5><!--[-->`);
        ssrRenderList(5, (n) => {
          _push(ssrRenderComponent(_component_va_icon, {
            name: "star",
            key: n,
            class: "star"
          }, null, _parent));
        });
        _push(`<!--]--></div><span class="rating-text" data-v-a5cbd3d5>4.8/5</span></div></div><div class="room-gallery" data-v-a5cbd3d5><div class="main-image" data-v-a5cbd3d5><img${ssrRenderAttr("src", roomImages.value[currentImageIndex.value])}${ssrRenderAttr("alt", roomData.value.loaiPhong)} class="room-image" data-v-a5cbd3d5><div class="image-overlay" data-v-a5cbd3d5><button class="gallery-btn prev" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "chevron_left" }, null, _parent));
        _push(`</button><button class="gallery-btn next" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "chevron_right" }, null, _parent));
        _push(`</button></div><div class="image-indicators" data-v-a5cbd3d5><!--[-->`);
        ssrRenderList(roomImages.value, (img, index) => {
          _push(`<span class="${ssrRenderClass([{ "active": index === currentImageIndex.value }, "indicator"])}" data-v-a5cbd3d5></span>`);
        });
        _push(`<!--]--></div></div></div><div class="room-details" data-v-a5cbd3d5><div class="detail-grid" data-v-a5cbd3d5><div class="detail-item" data-v-a5cbd3d5><div class="detail-icon" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "meeting_room" }, null, _parent));
        _push(`</div><div class="detail-content" data-v-a5cbd3d5><span class="detail-label" data-v-a5cbd3d5>M\xE3 ph\xF2ng</span><span class="detail-value" data-v-a5cbd3d5>${ssrInterpolate(roomData.value.maPhong)}</span></div></div><div class="detail-item" data-v-a5cbd3d5><div class="detail-icon" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "layers" }, null, _parent));
        _push(`</div><div class="detail-content" data-v-a5cbd3d5><span class="detail-label" data-v-a5cbd3d5>T\u1EA7ng</span><span class="detail-value" data-v-a5cbd3d5>${ssrInterpolate(roomData.value.tang)}</span></div></div><div class="detail-item" data-v-a5cbd3d5><div class="detail-icon" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "bed" }, null, _parent));
        _push(`</div><div class="detail-content" data-v-a5cbd3d5><span class="detail-label" data-v-a5cbd3d5>Ki\u1EC3u gi\u01B0\u1EDDng</span><span class="detail-value" data-v-a5cbd3d5>${ssrInterpolate(roomData.value.kieuGiuong)}</span></div></div><div class="detail-item price-item" data-v-a5cbd3d5><div class="detail-icon" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "attach_money" }, null, _parent));
        _push(`</div><div class="detail-content" data-v-a5cbd3d5><span class="detail-label" data-v-a5cbd3d5>Gi\xE1 ph\xF2ng</span><span class="detail-value price" data-v-a5cbd3d5>${ssrInterpolate(formatPrice(roomData.value.giaPhong))}\u20AB</span></div></div></div></div><div class="room-description" data-v-a5cbd3d5><h3 data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "description" }, null, _parent));
        _push(` M\xF4 t\u1EA3 ph\xF2ng </h3><p data-v-a5cbd3d5>${ssrInterpolate(roomData.value.moTa)}</p></div><div class="amenities-section" data-v-a5cbd3d5><h3 data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "star" }, null, _parent));
        _push(` Ti\u1EC7n nghi ph\xF2ng </h3><div class="amenities-grid" data-v-a5cbd3d5><!--[-->`);
        ssrRenderList(parsedAmenities.value, (amenity, index) => {
          _push(`<div class="amenity-item" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}" data-v-a5cbd3d5><div class="amenity-icon" data-v-a5cbd3d5><img${ssrRenderAttr("src", getAmenityIcon(amenity))}${ssrRenderAttr("alt", amenity)} data-v-a5cbd3d5></div><span class="amenity-text" data-v-a5cbd3d5>${ssrInterpolate(amenity)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="room-status" data-v-a5cbd3d5><div class="${ssrRenderClass([roomData.value.tinhTrang === "1" ? "available" : "unavailable", "status-indicator"])}" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: roomData.value.tinhTrang === "1" ? "check_circle" : "cancel"
        }, null, _parent));
        _push(`<span data-v-a5cbd3d5>${ssrInterpolate(roomData.value.tinhTrang === "1" ? "Ph\xF2ng c\xF2n tr\u1ED1ng" : "Ph\xF2ng \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u1EB7t")}</span></div></div>`);
        if (roomData.value.tinhTrang === "1") {
          _push(`<div class="urgency-message" data-v-a5cbd3d5>`);
          _push(ssrRenderComponent(_component_va_icon, {
            name: "schedule",
            class: "urgency-icon"
          }, null, _parent));
          _push(`<div class="urgency-content" data-v-a5cbd3d5><p data-v-a5cbd3d5><strong data-v-a5cbd3d5>Ch\u1EC9 c\xF2n 2 ph\xF2ng v\u1EDBi gi\xE1 n\xE0y!</strong></p><p data-v-a5cbd3d5>${ssrInterpolate(urgencyMessage.value)}</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "booking-form-container"])}" data-v-a5cbd3d5><div class="booking-form" data-v-a5cbd3d5><div class="form-header" data-v-a5cbd3d5><h2 class="form-title" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "hotel" }, null, _parent));
      _push(` \u0110\u1EB7t ph\xF2ng ngay </h2><p class="form-subtitle" data-v-a5cbd3d5>\u0110i\u1EC1n th\xF4ng tin \u0111\u1EC3 ho\xE0n t\u1EA5t \u0111\u1EB7t ph\xF2ng</p></div><div class="form-content" data-v-a5cbd3d5><div class="form-section" data-v-a5cbd3d5><h3 class="section-title" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "person" }, null, _parent));
      _push(` Th\xF4ng tin c\xE1 nh\xE2n </h3><div class="form-group" data-v-a5cbd3d5><div class="input-wrapper" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "credit_card",
        class: "input-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: bookingData.value.cccd,
        "onUpdate:modelValue": ($event) => bookingData.value.cccd = $event,
        label: "S\u1ED1 CCCD/Passport *",
        placeholder: "Nh\u1EADp s\u1ED1 CCCD ho\u1EB7c Passport",
        class: "form-input",
        error: errors.value.cccd,
        "error-messages": errors.value.cccd,
        onInput: ($event) => validateField("cccd")
      }, null, _parent));
      _push(`</div></div><div class="form-group" data-v-a5cbd3d5><div class="input-wrapper" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "phone",
        class: "input-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: bookingData.value.sdt,
        "onUpdate:modelValue": ($event) => bookingData.value.sdt = $event,
        label: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i *",
        placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
        class: "form-input",
        error: errors.value.sdt,
        "error-messages": errors.value.sdt,
        onInput: ($event) => validateField("sdt")
      }, null, _parent));
      _push(`</div></div></div><div class="form-section" data-v-a5cbd3d5><h3 class="section-title" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "calendar_today" }, null, _parent));
      _push(` Th\u1EDDi gian l\u01B0u tr\xFA </h3><div class="date-inputs" data-v-a5cbd3d5><div class="form-group" data-v-a5cbd3d5><div class="input-wrapper" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "login",
        class: "input-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: bookingData.value.ngayNhan,
        "onUpdate:modelValue": ($event) => bookingData.value.ngayNhan = $event,
        label: "Ng\xE0y nh\u1EADn ph\xF2ng *",
        type: "date",
        class: "form-input",
        min: minDate.value,
        error: errors.value.ngayNhan,
        "error-messages": errors.value.ngayNhan,
        onInput: ($event) => validateField("ngayNhan")
      }, null, _parent));
      _push(`</div></div><div class="form-group" data-v-a5cbd3d5><div class="input-wrapper" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "logout",
        class: "input-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: bookingData.value.ngayTra,
        "onUpdate:modelValue": ($event) => bookingData.value.ngayTra = $event,
        label: "Ng\xE0y tr\u1EA3 ph\xF2ng *",
        type: "date",
        class: "form-input",
        min: bookingData.value.ngayNhan || minDate.value,
        error: errors.value.ngayTra,
        "error-messages": errors.value.ngayTra,
        onInput: ($event) => validateField("ngayTra")
      }, null, _parent));
      _push(`</div></div></div>`);
      if (totalNights.value > 0) {
        _push(`<div class="stay-summary" data-v-a5cbd3d5><div class="summary-item" data-v-a5cbd3d5><span data-v-a5cbd3d5>S\u1ED1 \u0111\xEAm l\u01B0u tr\xFA:</span><strong data-v-a5cbd3d5>${ssrInterpolate(totalNights.value)} \u0111\xEAm</strong></div><div class="summary-item total-price" data-v-a5cbd3d5><span data-v-a5cbd3d5>T\u1ED5ng ti\u1EC1n:</span><strong data-v-a5cbd3d5>${ssrInterpolate(formatPrice(totalPrice.value))}\u20AB</strong></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-section" data-v-a5cbd3d5><h3 class="section-title" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "people" }, null, _parent));
      _push(` S\u1ED1 l\u01B0\u1EE3ng kh\xE1ch </h3><div class="guest-counters" data-v-a5cbd3d5><div class="counter-group" data-v-a5cbd3d5><div class="counter-info" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "person",
        class: "counter-icon"
      }, null, _parent));
      _push(`<div class="counter-details" data-v-a5cbd3d5><span class="counter-label" data-v-a5cbd3d5>Ng\u01B0\u1EDDi l\u1EDBn</span><span class="counter-desc" data-v-a5cbd3d5>T\u1EEB 12 tu\u1ED5i tr\u1EDF l\xEAn</span></div></div><div class="counter-controls" data-v-a5cbd3d5><button class="counter-btn"${ssrIncludeBooleanAttr(bookingData.value.soNguoiLon <= 1) ? " disabled" : ""} data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "remove" }, null, _parent));
      _push(`</button><span class="counter-value" data-v-a5cbd3d5>${ssrInterpolate(bookingData.value.soNguoiLon)}</span><button class="counter-btn"${ssrIncludeBooleanAttr(bookingData.value.soNguoiLon >= 10) ? " disabled" : ""} data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "add" }, null, _parent));
      _push(`</button></div></div><div class="counter-group" data-v-a5cbd3d5><div class="counter-info" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "child_care",
        class: "counter-icon"
      }, null, _parent));
      _push(`<div class="counter-details" data-v-a5cbd3d5><span class="counter-label" data-v-a5cbd3d5>Tr\u1EBB em</span><span class="counter-desc" data-v-a5cbd3d5>T\u1EEB 2-11 tu\u1ED5i</span></div></div><div class="counter-controls" data-v-a5cbd3d5><button class="counter-btn"${ssrIncludeBooleanAttr(bookingData.value.soTreEm <= 0) ? " disabled" : ""} data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "remove" }, null, _parent));
      _push(`</button><span class="counter-value" data-v-a5cbd3d5>${ssrInterpolate(bookingData.value.soTreEm)}</span><button class="counter-btn"${ssrIncludeBooleanAttr(bookingData.value.soTreEm >= 10) ? " disabled" : ""} data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "add" }, null, _parent));
      _push(`</button></div></div></div></div><div class="form-section" data-v-a5cbd3d5><h3 class="section-title" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "note" }, null, _parent));
      _push(` Y\xEAu c\u1EA7u \u0111\u1EB7c bi\u1EC7t </h3><div class="form-group" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_textarea, {
        modelValue: bookingData.value.yeuCau,
        "onUpdate:modelValue": ($event) => bookingData.value.yeuCau = $event,
        label: "Ghi ch\xFA th\xEAm",
        placeholder: "V\xED d\u1EE5: Ph\xF2ng t\u1EA7ng cao, gi\u01B0\u1EDDng \u0111\xF4i, kh\xF4ng h\xFAt thu\u1ED1c...",
        class: "form-textarea",
        "max-length": 500,
        counter: ""
      }, null, _parent));
      _push(`</div></div><div class="booking-summary" data-v-a5cbd3d5><h3 class="summary-title" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "receipt" }, null, _parent));
      _push(` T\xF3m t\u1EAFt \u0111\u1EB7t ph\xF2ng </h3><div class="summary-details" data-v-a5cbd3d5><div class="summary-row" data-v-a5cbd3d5><span data-v-a5cbd3d5>Lo\u1EA1i ph\xF2ng:</span><span data-v-a5cbd3d5>${ssrInterpolate(roomData.value.loaiPhong)}</span></div><div class="summary-row" data-v-a5cbd3d5><span data-v-a5cbd3d5>M\xE3 ph\xF2ng:</span><span data-v-a5cbd3d5>${ssrInterpolate(roomData.value.maPhong)}</span></div>`);
      if (totalNights.value > 0) {
        _push(`<div class="summary-row" data-v-a5cbd3d5><span data-v-a5cbd3d5>S\u1ED1 \u0111\xEAm:</span><span data-v-a5cbd3d5>${ssrInterpolate(totalNights.value)} \u0111\xEAm</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="summary-row" data-v-a5cbd3d5><span data-v-a5cbd3d5>S\u1ED1 kh\xE1ch:</span><span data-v-a5cbd3d5>${ssrInterpolate(bookingData.value.soNguoiLon + bookingData.value.soTreEm)} ng\u01B0\u1EDDi</span></div><div class="summary-row price-breakdown" data-v-a5cbd3d5><span data-v-a5cbd3d5>Gi\xE1 ph\xF2ng/\u0111\xEAm:</span><span data-v-a5cbd3d5>${ssrInterpolate(formatPrice(roomData.value.giaPhong))}\u20AB</span></div>`);
      if (totalNights.value > 0) {
        _push(`<div class="summary-row total-row" data-v-a5cbd3d5><span data-v-a5cbd3d5>T\u1ED5ng c\u1ED9ng:</span><span class="total-amount" data-v-a5cbd3d5>${ssrInterpolate(formatPrice(totalPrice.value))}\u20AB</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="form-actions" data-v-a5cbd3d5><button${ssrIncludeBooleanAttr(!isFormValid.value || roomData.value.tinhTrang !== "1" || isSubmitting.value) ? " disabled" : ""} class="${ssrRenderClass([{ "loading": isSubmitting.value }, "submit-button"])}" data-v-a5cbd3d5><div class="btn-content" data-v-a5cbd3d5>`);
      if (!isSubmitting.value) {
        _push(ssrRenderComponent(_component_va_icon, { name: "hotel" }, null, _parent));
      } else {
        _push(`<div class="loading-spinner-btn" data-v-a5cbd3d5></div>`);
      }
      _push(`<span data-v-a5cbd3d5>${ssrInterpolate(isSubmitting.value ? "\u0110ang x\u1EED l\xFD..." : "X\xE1c nh\u1EADn \u0111\u1EB7t ph\xF2ng")}</span></div></button><p class="form-note" data-v-a5cbd3d5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "info" }, null, _parent));
      _push(` B\u1EB1ng c\xE1ch \u0111\u1EB7t ph\xF2ng, b\u1EA1n \u0111\u1ED3ng \xFD v\u1EDBi <a href="#" class="terms-link" data-v-a5cbd3d5>\u0110i\u1EC1u kho\u1EA3n &amp; \u0110i\u1EC1u ki\u1EC7n</a> c\u1EE7a ch\xFAng t\xF4i </p></div></div></div></div></div>`);
      if (showSuccessModal.value) {
        _push(`<div class="modal-overlay" data-v-a5cbd3d5><div class="success-modal" data-v-a5cbd3d5><div class="success-icon" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "check_circle" }, null, _parent));
        _push(`</div><h3 data-v-a5cbd3d5>\u0110\u1EB7t ph\xF2ng th\xE0nh c\xF4ng!</h3><p data-v-a5cbd3d5>C\u1EA3m \u01A1n b\u1EA1n \u0111\xE3 ch\u1ECDn kh\xE1ch s\u1EA1n c\u1EE7a ch\xFAng t\xF4i. Ch\xFAng t\xF4i s\u1EBD li\xEAn h\u1EC7 v\u1EDBi b\u1EA1n trong th\u1EDDi gian s\u1EDBm nh\u1EA5t.</p><div class="modal-actions" data-v-a5cbd3d5><button class="btn-primary" data-v-a5cbd3d5> Ho\xE0n t\u1EA5t </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-a5cbd3d5><div class="toast-content" data-v-a5cbd3d5>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: toastType.value === "success" ? "check_circle" : "error",
          class: "toast-icon"
        }, null, _parent));
        _push(`<span data-v-a5cbd3d5>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DatPhong.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DatPhong = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a5cbd3d5"]]);

export { DatPhong as default };
//# sourceMappingURL=DatPhong-ButS0eDy.mjs.map
