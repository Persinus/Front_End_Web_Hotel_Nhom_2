import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "CheckYourEmail",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("olivia@untitledui.com");
    const newEmail = ref("");
    const showEditEmail = ref(false);
    const emailSent = ref(false);
    const isLoading = ref(false);
    const isVisible = ref(false);
    const resendCooldown = ref(0);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "check-email-page" }, _attrs))} data-v-e6066295><div class="background-animation" data-v-e6066295><div class="floating-shape shape-1" data-v-e6066295></div><div class="floating-shape shape-2" data-v-e6066295></div><div class="floating-shape shape-3" data-v-e6066295></div><div class="floating-shape shape-4" data-v-e6066295></div></div><div class="main-container" data-v-e6066295><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "check-email-container"])}" data-v-e6066295><div class="header-section" data-v-e6066295><div class="brand-logo" data-v-e6066295><div class="logo-icon" data-v-e6066295><svg viewBox="0 0 24 24" class="logo-svg" data-v-e6066295><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-e6066295></path><path d="M12 7v5l4 2-4 2v5" data-v-e6066295></path></svg></div><span class="brand-name" data-v-e6066295>OceanView Hotels</span></div></div><div class="email-icon-container" data-v-e6066295><div class="${ssrRenderClass([{ "success": emailSent.value }, "email-icon-wrapper"])}" data-v-e6066295><div class="email-icon" data-v-e6066295><div class="envelope" data-v-e6066295><div class="envelope-back" data-v-e6066295></div><div class="envelope-front" data-v-e6066295></div><div class="${ssrRenderClass([{ "sent": emailSent.value }, "letter"])}" data-v-e6066295><div class="letter-content" data-v-e6066295></div></div></div>`);
      if (emailSent.value) {
        _push(`<div class="check-mark" data-v-e6066295><svg viewBox="0 0 24 24" class="check-svg" data-v-e6066295><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-e6066295></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pulse-ring" data-v-e6066295></div><div class="pulse-ring pulse-ring-2" data-v-e6066295></div></div></div><div class="content-section" data-v-e6066295><h1 class="main-title" data-v-e6066295><span class="title-line" data-v-e6066295>Ki\u1EC3m tra</span><span class="title-highlight" data-v-e6066295>Email c\u1EE7a b\u1EA1n</span></h1><div class="description" data-v-e6066295><p class="description-text" data-v-e6066295> Ch\xFAng t\xF4i \u0111\xE3 g\u1EEDi link \u0111\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u \u0111\u1EBFn </p><div class="email-display" data-v-e6066295><div class="email-icon-small" data-v-e6066295><svg viewBox="0 0 24 24" data-v-e6066295><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-e6066295></path></svg></div><span class="email-address" data-v-e6066295>${ssrInterpolate(email.value)}</span><button class="edit-email-btn" title="Ch\u1EC9nh s\u1EEDa email" data-v-e6066295><svg viewBox="0 0 24 24" data-v-e6066295><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-e6066295></path></svg></button></div>`);
      if (showEditEmail.value) {
        _push(`<div class="edit-email-form" data-v-e6066295><div class="input-group" data-v-e6066295><input type="email"${ssrRenderAttr("value", newEmail.value)} placeholder="Nh\u1EADp email m\u1EDBi" class="email-input" data-v-e6066295><button class="update-btn"${ssrIncludeBooleanAttr(!newEmail.value) ? " disabled" : ""} data-v-e6066295> C\u1EADp nh\u1EADt </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="action-section" data-v-e6066295><button${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="${ssrRenderClass([{ "loading": isLoading.value }, "primary-btn"])}" data-v-e6066295><div class="btn-content" data-v-e6066295>`);
      if (!isLoading.value) {
        _push(`<svg viewBox="0 0 24 24" class="btn-icon" data-v-e6066295><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-e6066295></path></svg>`);
      } else {
        _push(`<div class="loading-spinner" data-v-e6066295></div>`);
      }
      _push(`<span data-v-e6066295>${ssrInterpolate(isLoading.value ? "\u0110ang m\u1EDF..." : "M\u1EDF \u1EE9ng d\u1EE5ng Email")}</span></div></button><div class="resend-section" data-v-e6066295><p class="resend-text" data-v-e6066295> Kh\xF4ng nh\u1EADn \u0111\u01B0\u1EE3c email? <button${ssrIncludeBooleanAttr(resendCooldown.value > 0) ? " disabled" : ""} class="${ssrRenderClass([{ "disabled": resendCooldown.value > 0 }, "resend-link"])}" data-v-e6066295>${ssrInterpolate(resendCooldown.value > 0 ? `G\u1EEDi l\u1EA1i sau ${resendCooldown.value}s` : "Nh\u1EA5n \u0111\u1EC3 g\u1EEDi l\u1EA1i")}</button></p>`);
      if (resendCooldown.value > 0) {
        _push(`<div class="cooldown-progress" data-v-e6066295><div class="progress-bar" style="${ssrRenderStyle({ width: `${(30 - resendCooldown.value) / 30 * 100}%` })}" data-v-e6066295></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="help-section" data-v-e6066295><div class="help-tips" data-v-e6066295><h4 data-v-e6066295>Kh\xF4ng t\xECm th\u1EA5y email?</h4><ul class="tips-list" data-v-e6066295><li data-v-e6066295><svg viewBox="0 0 24 24" class="tip-icon" data-v-e6066295><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-e6066295></path></svg> Ki\u1EC3m tra th\u01B0 m\u1EE5c Spam/Junk </li><li data-v-e6066295><svg viewBox="0 0 24 24" class="tip-icon" data-v-e6066295><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-e6066295></path></svg> \u0110\u1EA3m b\u1EA3o email ch\xEDnh x\xE1c </li><li data-v-e6066295><svg viewBox="0 0 24 24" class="tip-icon" data-v-e6066295><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-e6066295></path></svg> Ch\u1EDD v\xE0i ph\xFAt \u0111\u1EC3 email \u0111\u1EBFn </li></ul></div></div><div class="back-section" data-v-e6066295><a href="/Login" class="back-link" data-v-e6066295><svg viewBox="0 0 24 24" class="back-icon" data-v-e6066295><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z" data-v-e6066295></path></svg><span data-v-e6066295>Quay l\u1EA1i \u0111\u0103ng nh\u1EADp</span></a></div></div><div class="support-section" data-v-e6066295><p class="support-text" data-v-e6066295>C\u1EA7n h\u1ED7 tr\u1EE3?</p><div class="support-contacts" data-v-e6066295><a href="tel:1900-1234" class="support-contact" data-v-e6066295><svg viewBox="0 0 24 24" data-v-e6066295><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-e6066295></path></svg><span data-v-e6066295>1900-1234</span></a><a href="mailto:support@oceanview.com" class="support-contact" data-v-e6066295><svg viewBox="0 0 24 24" data-v-e6066295><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-e6066295></path></svg><span data-v-e6066295>support@oceanview.com</span></a></div></div></div></div>`);
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-e6066295><div class="toast-content" data-v-e6066295>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-e6066295><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-e6066295></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-e6066295><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-e6066295></path></svg>`);
        }
        _push(`<span data-v-e6066295>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/CheckYourEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckYourEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6066295"]]);

export { CheckYourEmail as default };
//# sourceMappingURL=CheckYourEmail-C4CbsFcV.mjs.map
