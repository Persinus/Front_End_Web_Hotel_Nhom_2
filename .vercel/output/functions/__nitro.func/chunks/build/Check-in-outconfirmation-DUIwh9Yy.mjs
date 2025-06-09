import { ref, computed, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { useRouter } from 'vue-router';
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
  __name: "Check-in-outconfirmation",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    useRouter();
    const bookingId = ref("123456");
    const qrData = ref(`https://hotel-booking-system.com/api/checkin/${bookingId.value}`);
    const isVisible = ref(false);
    ref(false);
    const isScanning = ref(false);
    const isProcessing = ref(false);
    const actionType = ref("");
    const isRegenerating = ref(false);
    const showHelp = ref(false);
    const roomStatus = ref("Available");
    const currentStep = ref(1);
    const timeRemaining = ref(30);
    ref(null);
    const toastMessage = ref("");
    const toastType = ref("success");
    const showToast = ref(false);
    const expirationTime = computed(() => {
      const expiration = /* @__PURE__ */ new Date();
      expiration.setMinutes(expiration.getMinutes() + timeRemaining.value);
      return expiration.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    });
    const timerProgress = computed(() => {
      return (30 - timeRemaining.value) / 30 * 100;
    });
    const formatDateTime = (date) => {
      return date.toLocaleString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_icon = resolveComponent("va-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "check-in-check-out" }, _attrs))} data-v-0a0d33fa><div class="header-section" data-v-0a0d33fa><div class="header-content" data-v-0a0d33fa><div class="header-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "hotel",
        size: "large"
      }, null, _parent));
      _push(`</div><h1 class="page-title" data-v-0a0d33fa><span class="title-main" data-v-0a0d33fa>X\xE1c nh\u1EADn</span><span class="title-highlight" data-v-0a0d33fa>Check-in / Check-out</span></h1><p class="page-subtitle" data-v-0a0d33fa>Qu\xE9t m\xE3 QR \u0111\u1EC3 ho\xE0n t\u1EA5t th\u1EE7 t\u1EE5c nh\u1EADn/tr\u1EA3 ph\xF2ng m\u1ED9t c\xE1ch nhanh ch\xF3ng</p></div><div class="progress-container" data-v-0a0d33fa><div class="${ssrRenderClass([{ "active": currentStep.value >= 1, "completed": currentStep.value > 1 }, "progress-step"])}" data-v-0a0d33fa><div class="step-circle" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: currentStep.value > 1 ? "check" : "hotel"
      }, null, _parent));
      _push(`</div><span class="step-label" data-v-0a0d33fa>Th\xF4ng tin ph\xF2ng</span></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 2 }, "progress-line"])}" data-v-0a0d33fa></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 2, "completed": currentStep.value > 2 }, "progress-step"])}" data-v-0a0d33fa><div class="step-circle" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: currentStep.value > 2 ? "check" : "qr_code"
      }, null, _parent));
      _push(`</div><span class="step-label" data-v-0a0d33fa>Qu\xE9t m\xE3 QR</span></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 3 }, "progress-line"])}" data-v-0a0d33fa></div><div class="${ssrRenderClass([{ "active": currentStep.value >= 3, "completed": currentStep.value > 3 }, "progress-step"])}" data-v-0a0d33fa><div class="step-circle" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: currentStep.value > 3 ? "check" : "verified"
      }, null, _parent));
      _push(`</div><span class="step-label" data-v-0a0d33fa>Ho\xE0n t\u1EA5t</span></div></div></div><div class="alert-section" data-v-0a0d33fa><div class="${ssrRenderClass([{ "pulse": _ctx.isQRActive }, "alert-card"])}" data-v-0a0d33fa><div class="alert-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "info" }, null, _parent));
      _push(`</div><div class="alert-content" data-v-0a0d33fa><h3 data-v-0a0d33fa>H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng</h3><p data-v-0a0d33fa>Vui l\xF2ng qu\xE9t m\xE3 QR b\u1EB1ng camera \u0111i\u1EC7n tho\u1EA1i \u0111\u1EC3 x\xE1c nh\u1EADn check-in ho\u1EB7c check-out. M\xE3 QR c\xF3 hi\u1EC7u l\u1EF1c trong v\xF2ng <strong data-v-0a0d33fa>${ssrInterpolate(timeRemaining.value)}</strong> ph\xFAt.</p></div><div class="alert-timer" data-v-0a0d33fa><div class="timer-circle" style="${ssrRenderStyle({ "--progress": timerProgress.value })}" data-v-0a0d33fa><span class="timer-text" data-v-0a0d33fa>${ssrInterpolate(Math.ceil(timeRemaining.value))}</span></div></div></div></div><div class="main-content" data-v-0a0d33fa><div class="content-grid" data-v-0a0d33fa><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "room-card"])}" data-v-0a0d33fa><div class="card-header" data-v-0a0d33fa><div class="card-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "hotel" }, null, _parent));
      _push(`</div><h2 data-v-0a0d33fa>Th\xF4ng tin ph\xF2ng</h2><div class="${ssrRenderClass([roomStatus.value.toLowerCase(), "room-status"])}" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: roomStatus.value === "Available" ? "check_circle" : "schedule"
      }, null, _parent));
      _push(`<span data-v-0a0d33fa>${ssrInterpolate(roomStatus.value === "Available" ? "S\u1EB5n s\xE0ng" : "\u0110ang chu\u1EA9n b\u1ECB")}</span></div></div><div class="room-image-container" data-v-0a0d33fa><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="Deluxe Suite" class="room-image" data-v-0a0d33fa><div class="image-overlay" data-v-0a0d33fa><div class="room-type-badge" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "star" }, null, _parent));
      _push(`<span data-v-0a0d33fa>Deluxe Suite</span></div></div></div><div class="room-details" data-v-0a0d33fa><div class="detail-grid" data-v-0a0d33fa><div class="detail-item" data-v-0a0d33fa><div class="detail-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "meeting_room" }, null, _parent));
      _push(`</div><div class="detail-content" data-v-0a0d33fa><span class="detail-label" data-v-0a0d33fa>Ph\xF2ng s\u1ED1</span><span class="detail-value" data-v-0a0d33fa>501</span></div></div><div class="detail-item" data-v-0a0d33fa><div class="detail-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "layers" }, null, _parent));
      _push(`</div><div class="detail-content" data-v-0a0d33fa><span class="detail-label" data-v-0a0d33fa>T\u1EA7ng</span><span class="detail-value" data-v-0a0d33fa>5</span></div></div><div class="detail-item" data-v-0a0d33fa><div class="detail-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "attach_money" }, null, _parent));
      _push(`</div><div class="detail-content" data-v-0a0d33fa><span class="detail-label" data-v-0a0d33fa>Gi\xE1 ph\xF2ng</span><span class="detail-value" data-v-0a0d33fa>2,000,000\u20AB</span></div></div><div class="detail-item" data-v-0a0d33fa><div class="detail-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "confirmation_number" }, null, _parent));
      _push(`</div><div class="detail-content" data-v-0a0d33fa><span class="detail-label" data-v-0a0d33fa>M\xE3 \u0111\u1EB7t ph\xF2ng</span><span class="detail-value" data-v-0a0d33fa>#${ssrInterpolate(bookingId.value)}</span></div></div><div class="detail-item" data-v-0a0d33fa><div class="detail-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "person" }, null, _parent));
      _push(`</div><div class="detail-content" data-v-0a0d33fa><span class="detail-label" data-v-0a0d33fa>Kh\xE1ch h\xE0ng</span><span class="detail-value" data-v-0a0d33fa>John Doe</span></div></div><div class="detail-item" data-v-0a0d33fa><div class="detail-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "schedule" }, null, _parent));
      _push(`</div><div class="detail-content" data-v-0a0d33fa><span class="detail-label" data-v-0a0d33fa>Th\u1EDDi gian</span><span class="detail-value" data-v-0a0d33fa>${ssrInterpolate(formatDateTime(/* @__PURE__ */ new Date()))}</span></div></div></div></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value, "scanning": isScanning.value }, "qr-card"])}" data-v-0a0d33fa><div class="card-header" data-v-0a0d33fa><div class="card-icon qr-icon" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "qr_code" }, null, _parent));
      _push(`</div><h2 data-v-0a0d33fa>M\xE3 QR x\xE1c nh\u1EADn</h2><button class="refresh-btn"${ssrIncludeBooleanAttr(isRegenerating.value) ? " disabled" : ""} data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: isRegenerating.value ? "refresh" : "refresh",
        class: { "spinning": isRegenerating.value }
      }, null, _parent));
      _push(`</button></div><div class="qr-container" data-v-0a0d33fa><div class="${ssrRenderClass([{ "scanning-effect": isScanning.value }, "qr-wrapper"])}" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(unref(VueQrcode), {
        value: qrData.value,
        class: "qrcode"
      }, null, _parent));
      if (isScanning.value) {
        _push(`<div class="qr-overlay" data-v-0a0d33fa><div class="scanning-line" data-v-0a0d33fa></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="qr-corners" data-v-0a0d33fa><div class="corner top-left" data-v-0a0d33fa></div><div class="corner top-right" data-v-0a0d33fa></div><div class="corner bottom-left" data-v-0a0d33fa></div><div class="corner bottom-right" data-v-0a0d33fa></div></div></div><div class="qr-info" data-v-0a0d33fa><div class="expiration-info" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "schedule" }, null, _parent));
      _push(`<span data-v-0a0d33fa>H\u1EBFt h\u1EA1n l\xFAc: <strong data-v-0a0d33fa>${ssrInterpolate(expirationTime.value)}</strong></span></div><div class="scan-instructions" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "camera_alt" }, null, _parent));
      _push(`<span data-v-0a0d33fa>H\u01B0\u1EDBng camera v\xE0o m\xE3 QR \u0111\u1EC3 qu\xE9t</span></div></div></div><div class="action-section" data-v-0a0d33fa><div class="action-buttons" data-v-0a0d33fa><button${ssrIncludeBooleanAttr(isProcessing.value) ? " disabled" : ""} class="${ssrRenderClass([{ "processing": isProcessing.value && actionType.value === "checkin" }, "action-btn check-in-btn"])}" data-v-0a0d33fa><div class="btn-content" data-v-0a0d33fa>`);
      if (!isProcessing.value || actionType.value !== "checkin") {
        _push(ssrRenderComponent(_component_va_icon, { name: "login" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_va_icon, {
          name: "refresh",
          class: "spinning"
        }, null, _parent));
      }
      _push(`<span data-v-0a0d33fa>${ssrInterpolate(isProcessing.value && actionType.value === "checkin" ? "\u0110ang x\u1EED l\xFD..." : "Check-in")}</span></div></button><button${ssrIncludeBooleanAttr(isProcessing.value) ? " disabled" : ""} class="${ssrRenderClass([{ "processing": isProcessing.value && actionType.value === "checkout" }, "action-btn check-out-btn"])}" data-v-0a0d33fa><div class="btn-content" data-v-0a0d33fa>`);
      if (!isProcessing.value || actionType.value !== "checkout") {
        _push(ssrRenderComponent(_component_va_icon, { name: "logout" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_va_icon, {
          name: "refresh",
          class: "spinning"
        }, null, _parent));
      }
      _push(`<span data-v-0a0d33fa>${ssrInterpolate(isProcessing.value && actionType.value === "checkout" ? "\u0110ang x\u1EED l\xFD..." : "Check-out")}</span></div></button></div><div class="help-section" data-v-0a0d33fa><button class="help-btn" data-v-0a0d33fa>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "help_outline" }, null, _parent));
      _push(`<span data-v-0a0d33fa>C\u1EA7n h\u1ED7 tr\u1EE3?</span></button></div></div></div></div></div>`);
      if (showHelp.value) {
        _push(`<div class="modal-overlay" data-v-0a0d33fa><div class="help-modal" data-v-0a0d33fa><div class="modal-header" data-v-0a0d33fa><h3 data-v-0a0d33fa>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "help" }, null, _parent));
        _push(` H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng </h3><button class="close-btn" data-v-0a0d33fa>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "close" }, null, _parent));
        _push(`</button></div><div class="modal-content" data-v-0a0d33fa><div class="help-steps" data-v-0a0d33fa><div class="help-step" data-v-0a0d33fa><div class="step-number" data-v-0a0d33fa>1</div><div class="step-content" data-v-0a0d33fa><h4 data-v-0a0d33fa>M\u1EDF camera \u0111i\u1EC7n tho\u1EA1i</h4><p data-v-0a0d33fa>S\u1EED d\u1EE5ng \u1EE9ng d\u1EE5ng camera m\u1EB7c \u0111\u1ECBnh ho\u1EB7c \u1EE9ng d\u1EE5ng qu\xE9t QR</p></div></div><div class="help-step" data-v-0a0d33fa><div class="step-number" data-v-0a0d33fa>2</div><div class="step-content" data-v-0a0d33fa><h4 data-v-0a0d33fa>H\u01B0\u1EDBng camera v\xE0o m\xE3 QR</h4><p data-v-0a0d33fa>Gi\u1EEF \u0111i\u1EC7n tho\u1EA1i c\xE1ch m\xE3 QR kho\u1EA3ng 15-20cm</p></div></div><div class="help-step" data-v-0a0d33fa><div class="step-number" data-v-0a0d33fa>3</div><div class="step-content" data-v-0a0d33fa><h4 data-v-0a0d33fa>Ch\u1EDD x\xE1c nh\u1EADn</h4><p data-v-0a0d33fa>H\u1EC7 th\u1ED1ng s\u1EBD t\u1EF1 \u0111\u1ED9ng x\u1EED l\xFD v\xE0 th\xF4ng b\xE1o k\u1EBFt qu\u1EA3</p></div></div></div><div class="contact-info" data-v-0a0d33fa><h4 data-v-0a0d33fa>Li\xEAn h\u1EC7 h\u1ED7 tr\u1EE3</h4><div class="contact-item" data-v-0a0d33fa>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "phone" }, null, _parent));
        _push(`<span data-v-0a0d33fa>Hotline: 1900-1234</span></div><div class="contact-item" data-v-0a0d33fa>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "email" }, null, _parent));
        _push(`<span data-v-0a0d33fa>Email: support@hotel.com</span></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (toastMessage.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-0a0d33fa><div class="toast-content" data-v-0a0d33fa>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: toastType.value === "success" ? "check_circle" : "error",
          class: "toast-icon"
        }, null, _parent));
        _push(`<span data-v-0a0d33fa>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Check-in-outconfirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckInOutconfirmation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a0d33fa"]]);

export { CheckInOutconfirmation as default };
//# sourceMappingURL=Check-in-outconfirmation-DUIwh9Yy.mjs.map
