import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "ForgotPass",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const emailSent = ref(false);
    const isLoading = ref(false);
    const isVisible = ref(false);
    ref(false);
    const hasError = ref(false);
    const errorMessage = ref("");
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const resendCooldown = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "forgot-password-page" }, _attrs))} data-v-f25dac1a><div class="background-animation" data-v-f25dac1a><div class="floating-shape shape-1" data-v-f25dac1a></div><div class="floating-shape shape-2" data-v-f25dac1a></div><div class="floating-shape shape-3" data-v-f25dac1a></div><div class="floating-shape shape-4" data-v-f25dac1a></div></div><div class="main-container" data-v-f25dac1a><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "forgot-form-container"])}" data-v-f25dac1a><div class="header-section" data-v-f25dac1a><div class="brand-logo" data-v-f25dac1a><div class="logo-icon" data-v-f25dac1a><svg viewBox="0 0 24 24" class="logo-svg" data-v-f25dac1a><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-f25dac1a></path><path d="M12 7v5l4 2-4 2v5" data-v-f25dac1a></path></svg></div><span class="brand-name" data-v-f25dac1a>OceanView Hotels</span></div></div><div class="lock-icon-container" data-v-f25dac1a><div class="${ssrRenderClass([{ "success": emailSent.value }, "lock-icon-wrapper"])}" data-v-f25dac1a><div class="lock-icon" data-v-f25dac1a><div class="lock-body" data-v-f25dac1a><div class="${ssrRenderClass([{ "open": emailSent.value }, "lock-shackle"])}" data-v-f25dac1a></div></div>`);
      if (emailSent.value) {
        _push(`<div class="key-icon" data-v-f25dac1a><svg viewBox="0 0 24 24" class="key-svg" data-v-f25dac1a><path d="M7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm12.78-1.38L13.5 14.9l-1.41-1.41 6.28-6.28c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L10.68 12 9.27 10.59l6.28-6.28c.78-.78.78-2.05 0-2.83-.78-.78-2.05-.78-2.83 0L6.44 7.76c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L9.27 7.76l1.41 1.41L4.4 15.45c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l6.28-6.28 1.41 1.41-6.28 6.28c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l6.28-6.28z" data-v-f25dac1a></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pulse-ring" data-v-f25dac1a></div><div class="pulse-ring pulse-ring-2" data-v-f25dac1a></div></div></div><div class="content-section" data-v-f25dac1a><h1 class="main-title" data-v-f25dac1a><span class="title-line" data-v-f25dac1a>Qu\xEAn</span><span class="title-highlight" data-v-f25dac1a>M\u1EADt kh\u1EA9u?</span></h1><p class="description" data-v-f25dac1a> \u0110\u1EEBng lo l\u1EAFng, ch\xFAng t\xF4i s\u1EBD g\u1EEDi h\u01B0\u1EDBng d\u1EABn \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u cho b\u1EA1n. </p></div><div class="form-section" data-v-f25dac1a><form class="reset-form" data-v-f25dac1a><div class="form-group" data-v-f25dac1a><label for="email" class="form-label" data-v-f25dac1a><svg viewBox="0 0 24 24" class="label-icon" data-v-f25dac1a><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-f25dac1a></path></svg> \u0110\u1ECBa ch\u1EC9 Email </label><div class="input-wrapper" data-v-f25dac1a><svg viewBox="0 0 24 24" class="input-icon" data-v-f25dac1a><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-f25dac1a></path></svg><input type="email" id="email"${ssrRenderAttr("value", email.value)} required placeholder="Nh\u1EADp \u0111\u1ECBa ch\u1EC9 email c\u1EE7a b\u1EA1n" class="${ssrRenderClass([{ "error": hasError.value, "success": emailSent.value }, "form-input"])}" data-v-f25dac1a>`);
      if (emailSent.value) {
        _push(`<div class="input-status" data-v-f25dac1a><svg viewBox="0 0 24 24" class="status-icon success" data-v-f25dac1a><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f25dac1a></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errorMessage.value) {
        _push(`<div class="error-message" data-v-f25dac1a><svg viewBox="0 0 24 24" class="error-icon" data-v-f25dac1a><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-f25dac1a></path></svg> ${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit"${ssrIncludeBooleanAttr(!email.value || isLoading.value || emailSent.value) ? " disabled" : ""} class="${ssrRenderClass([{ "loading": isLoading.value, "success": emailSent.value }, "submit-button"])}" data-v-f25dac1a><div class="btn-content" data-v-f25dac1a>`);
      if (!isLoading.value && !emailSent.value) {
        _push(`<svg viewBox="0 0 24 24" class="btn-icon" data-v-f25dac1a><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" data-v-f25dac1a></path></svg>`);
      } else if (isLoading.value) {
        _push(`<div class="loading-spinner" data-v-f25dac1a></div>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" class="btn-icon" data-v-f25dac1a><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f25dac1a></path></svg>`);
      }
      _push(`<span data-v-f25dac1a>${ssrInterpolate(isLoading.value ? "\u0110ang g\u1EEDi..." : emailSent.value ? "\u0110\xE3 g\u1EEDi th\xE0nh c\xF4ng" : "G\u1EEDi h\u01B0\u1EDBng d\u1EABn")}</span></div></button></form>`);
      if (emailSent.value) {
        _push(`<div class="success-message" data-v-f25dac1a><div class="success-icon" data-v-f25dac1a><svg viewBox="0 0 24 24" data-v-f25dac1a><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f25dac1a></path></svg></div><h3 data-v-f25dac1a>Email \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi!</h3><p data-v-f25dac1a>Ch\xFAng t\xF4i \u0111\xE3 g\u1EEDi h\u01B0\u1EDBng d\u1EABn \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u \u0111\u1EBFn <strong data-v-f25dac1a>${ssrInterpolate(email.value)}</strong></p><div class="success-actions" data-v-f25dac1a><button class="resend-btn"${ssrIncludeBooleanAttr(resendCooldown.value > 0) ? " disabled" : ""} data-v-f25dac1a><svg viewBox="0 0 24 24" data-v-f25dac1a><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" data-v-f25dac1a></path></svg> ${ssrInterpolate(resendCooldown.value > 0 ? `G\u1EEDi l\u1EA1i sau ${resendCooldown.value}s` : "G\u1EEDi l\u1EA1i email")}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="help-section" data-v-f25dac1a><div class="help-tips" data-v-f25dac1a><h4 data-v-f25dac1a>Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c email?</h4><ul class="tips-list" data-v-f25dac1a><li data-v-f25dac1a><svg viewBox="0 0 24 24" class="tip-icon" data-v-f25dac1a><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f25dac1a></path></svg> Ki\u1EC3m tra th\u01B0 m\u1EE5c Spam/Junk </li><li data-v-f25dac1a><svg viewBox="0 0 24 24" class="tip-icon" data-v-f25dac1a><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f25dac1a></path></svg> \u0110\u1EA3m b\u1EA3o email ch\xEDnh x\xE1c </li><li data-v-f25dac1a><svg viewBox="0 0 24 24" class="tip-icon" data-v-f25dac1a><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f25dac1a></path></svg> Th\u1EED l\u1EA1i v\u1EDBi email kh\xE1c </li></ul></div></div></div><div class="back-section" data-v-f25dac1a><a href="/Login" class="back-link" data-v-f25dac1a><svg viewBox="0 0 24 24" class="back-icon" data-v-f25dac1a><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z" data-v-f25dac1a></path></svg><span data-v-f25dac1a>Quay l\u1EA1i \u0111\u0103ng nh\u1EADp</span></a></div><div class="support-section" data-v-f25dac1a><p class="support-text" data-v-f25dac1a>C\u1EA7n h\u1ED7 tr\u1EE3 th\xEAm?</p><div class="support-contacts" data-v-f25dac1a><a href="tel:1900-1234" class="support-contact" data-v-f25dac1a><svg viewBox="0 0 24 24" data-v-f25dac1a><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-f25dac1a></path></svg><span data-v-f25dac1a>1900-1234</span></a><a href="mailto:support@oceanview.com" class="support-contact" data-v-f25dac1a><svg viewBox="0 0 24 24" data-v-f25dac1a><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-f25dac1a></path></svg><span data-v-f25dac1a>support@oceanview.com</span></a></div></div></div></div>`);
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-f25dac1a><div class="toast-content" data-v-f25dac1a>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-f25dac1a><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f25dac1a></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-f25dac1a><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-f25dac1a></path></svg>`);
        }
        _push(`<span data-v-f25dac1a>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ForgotPass.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ForgotPass = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f25dac1a"]]);

export { ForgotPass as default };
//# sourceMappingURL=ForgotPass-uR_2Gx3U.mjs.map
