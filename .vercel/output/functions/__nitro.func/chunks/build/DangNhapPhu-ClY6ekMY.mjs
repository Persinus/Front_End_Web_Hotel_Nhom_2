import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderDynamicModel, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { u as usePhanQuyenStore } from './PhanQuyenCookie-BHQDydup.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'pinia';
import './server.mjs';
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
import 'vue-router';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';

const _sfc_main = {
  __name: "DangNhapPhu",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref("");
    const profile = ref("");
    const isVisible = ref(false);
    const showPassword = ref(false);
    const rememberMe = ref(false);
    ref(false);
    ref(false);
    const usernameError = ref("");
    const passwordError = ref("");
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    usePhanQuyenStore();
    const hasUsernameError = computed(() => !!usernameError.value);
    const hasPasswordError = computed(() => !!passwordError.value);
    const isFormValid = computed(() => {
      return username.value && password.value && !hasUsernameError.value && !hasPasswordError.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-dcfd6af9><div class="background-animation" data-v-dcfd6af9><div class="floating-shape shape-1" data-v-dcfd6af9></div><div class="floating-shape shape-2" data-v-dcfd6af9></div><div class="floating-shape shape-3" data-v-dcfd6af9></div><div class="floating-shape shape-4" data-v-dcfd6af9></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "login-wrapper"])}" data-v-dcfd6af9><div class="hotel-branding" data-v-dcfd6af9><div class="logo-section" data-v-dcfd6af9><div class="logo-icon" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="logo-svg" data-v-dcfd6af9><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-dcfd6af9></path><path d="M12 7v5l4 2-4 2v5" data-v-dcfd6af9></path></svg></div><div class="logo-text" data-v-dcfd6af9><h1 data-v-dcfd6af9>OceanView Hotels</h1><p data-v-dcfd6af9>Luxury Experience</p></div></div><div class="welcome-text" data-v-dcfd6af9><h2 data-v-dcfd6af9>Ch\xE0o m\u1EEBng tr\u1EDF l\u1EA1i</h2><p data-v-dcfd6af9>\u0110\u0103ng nh\u1EADp \u0111\u1EC3 truy c\u1EADp t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n</p></div></div><div class="login-card" data-v-dcfd6af9><div class="card-header" data-v-dcfd6af9><div class="header-icon" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="icon-svg" data-v-dcfd6af9><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-dcfd6af9></path></svg></div><h3 data-v-dcfd6af9>\u0110\u0103ng nh\u1EADp t\xE0i kho\u1EA3n</h3><p data-v-dcfd6af9>Vui l\xF2ng nh\u1EADp th\xF4ng tin \u0111\u0103ng nh\u1EADp c\u1EE7a b\u1EA1n</p></div><form class="login-form" data-v-dcfd6af9><div class="form-group" data-v-dcfd6af9><label for="username" class="form-label" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="label-icon" data-v-dcfd6af9><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-dcfd6af9></path></svg> T\xEAn t\xE0i kho\u1EA3n </label><div class="input-wrapper" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="input-icon" data-v-dcfd6af9><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-dcfd6af9></path></svg><input id="username"${ssrRenderAttr("value", username.value)} type="text" placeholder="Nh\u1EADp t\xEAn t\xE0i kho\u1EA3n" class="${ssrRenderClass([{ "error": hasUsernameError.value, "success": username.value && !hasUsernameError.value }, "form-input"])}" required data-v-dcfd6af9>`);
      if (username.value && !hasUsernameError.value) {
        _push(`<div class="input-status" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="status-icon success" data-v-dcfd6af9><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-dcfd6af9></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (usernameError.value) {
        _push(`<div class="error-message" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="error-icon" data-v-dcfd6af9><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-dcfd6af9></path></svg> ${ssrInterpolate(usernameError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-dcfd6af9><label for="password" class="form-label" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="label-icon" data-v-dcfd6af9><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" data-v-dcfd6af9></path></svg> M\u1EADt kh\u1EA9u </label><div class="input-wrapper" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="input-icon" data-v-dcfd6af9><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" data-v-dcfd6af9></path></svg><input id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", password.value, null)}${ssrRenderAttr("type", showPassword.value ? "text" : "password")} placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u" class="${ssrRenderClass([{ "error": hasPasswordError.value, "success": password.value && !hasPasswordError.value }, "form-input"])}" required data-v-dcfd6af9><button type="button" class="password-toggle"${ssrRenderAttr("title", showPassword.value ? "\u1EA8n m\u1EADt kh\u1EA9u" : "Hi\u1EC3n th\u1ECB m\u1EADt kh\u1EA9u")} data-v-dcfd6af9>`);
      if (showPassword.value) {
        _push(`<svg viewBox="0 0 24 24" data-v-dcfd6af9><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" data-v-dcfd6af9></path></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" data-v-dcfd6af9><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" data-v-dcfd6af9></path></svg>`);
      }
      _push(`</button></div>`);
      if (passwordError.value) {
        _push(`<div class="error-message" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="error-icon" data-v-dcfd6af9><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-dcfd6af9></path></svg> ${ssrInterpolate(passwordError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-options" data-v-dcfd6af9><label class="remember-me" data-v-dcfd6af9><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(rememberMe.value) ? ssrLooseContain(rememberMe.value, null) : rememberMe.value) ? " checked" : ""} data-v-dcfd6af9><span class="checkmark" data-v-dcfd6af9></span><span class="remember-text" data-v-dcfd6af9>Ghi nh\u1EDB \u0111\u0103ng nh\u1EADp</span></label><a href="/forgot-password" class="forgot-link" data-v-dcfd6af9>Qu\xEAn m\u1EADt kh\u1EA9u?</a></div>`);
      if (error.value) {
        _push(`<div class="error-alert" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="alert-icon" data-v-dcfd6af9><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-dcfd6af9></path></svg><span data-v-dcfd6af9>${ssrInterpolate(error.value)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(!isFormValid.value || loading.value) ? " disabled" : ""} class="${ssrRenderClass([{ "loading": loading.value }, "login-button"])}" data-v-dcfd6af9><div class="btn-content" data-v-dcfd6af9>`);
      if (!loading.value) {
        _push(`<svg viewBox="0 0 24 24" class="btn-icon" data-v-dcfd6af9><path d="M10 17l5-5-5-5v10z" data-v-dcfd6af9></path></svg>`);
      } else {
        _push(`<div class="loading-spinner" data-v-dcfd6af9></div>`);
      }
      _push(`<span data-v-dcfd6af9>${ssrInterpolate(loading.value ? "\u0110ang \u0111\u0103ng nh\u1EADp..." : "\u0110\u0103ng nh\u1EADp")}</span></div></button></form><div class="additional-options" data-v-dcfd6af9><div class="divider" data-v-dcfd6af9><span data-v-dcfd6af9>ho\u1EB7c</span></div><div class="social-login" data-v-dcfd6af9><button class="social-btn google" type="button" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="social-icon" data-v-dcfd6af9><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" data-v-dcfd6af9></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" data-v-dcfd6af9></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" data-v-dcfd6af9></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" data-v-dcfd6af9></path></svg><span data-v-dcfd6af9>\u0110\u0103ng nh\u1EADp v\u1EDBi Google</span></button><button class="social-btn facebook" type="button" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="social-icon" data-v-dcfd6af9><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" data-v-dcfd6af9></path></svg><span data-v-dcfd6af9>\u0110\u0103ng nh\u1EADp v\u1EDBi Facebook</span></button></div></div><div class="register-section" data-v-dcfd6af9><p data-v-dcfd6af9>Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? <a href="/register" class="register-link" data-v-dcfd6af9>\u0110\u0103ng k\xFD ngay</a></p></div></div>`);
      if (profile.value) {
        _push(`<div class="profile-section" data-v-dcfd6af9><div class="profile-card" data-v-dcfd6af9><div class="profile-header" data-v-dcfd6af9><svg viewBox="0 0 24 24" class="profile-icon" data-v-dcfd6af9><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-dcfd6af9></path></svg><h4 data-v-dcfd6af9>\u0110\u0103ng nh\u1EADp th\xE0nh c\xF4ng!</h4></div><div class="profile-content" data-v-dcfd6af9><h5 data-v-dcfd6af9>Th\xF4ng tin ng\u01B0\u1EDDi d\xF9ng:</h5><pre class="profile-data" data-v-dcfd6af9>${ssrInterpolate(profile.value)}</pre></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="support-section" data-v-dcfd6af9><p data-v-dcfd6af9>C\u1EA7n h\u1ED7 tr\u1EE3?</p><div class="support-contacts" data-v-dcfd6af9><a href="tel:1900-1234" class="support-contact" data-v-dcfd6af9><svg viewBox="0 0 24 24" data-v-dcfd6af9><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-dcfd6af9></path></svg><span data-v-dcfd6af9>1900-1234</span></a><a href="mailto:support@oceanview.com" class="support-contact" data-v-dcfd6af9><svg viewBox="0 0 24 24" data-v-dcfd6af9><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-dcfd6af9></path></svg><span data-v-dcfd6af9>support@oceanview.com</span></a></div></div>`);
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-dcfd6af9><div class="toast-content" data-v-dcfd6af9>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-dcfd6af9><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-dcfd6af9></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-dcfd6af9><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-dcfd6af9></path></svg>`);
        }
        _push(`<span data-v-dcfd6af9>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DangNhapPhu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DangNhapPhu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dcfd6af9"]]);

export { DangNhapPhu as default };
//# sourceMappingURL=DangNhapPhu-ClY6ekMY.mjs.map
