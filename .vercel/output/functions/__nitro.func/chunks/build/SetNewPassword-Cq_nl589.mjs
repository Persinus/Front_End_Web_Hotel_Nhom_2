import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "SetNewPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const password = ref("");
    const confirmPassword = ref("");
    const showPassword = ref(false);
    const resetSuccess = ref(false);
    const isVisible = ref(false);
    ref(false);
    ref(false);
    const isLoading = ref(false);
    const passwordError = ref("");
    const confirmPasswordError = ref("");
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const hasMinLength = computed(() => password.value.length >= 8);
    const hasSpecialChar = computed(() => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password.value));
    const hasUpperCase = computed(() => /[A-Z]/.test(password.value));
    const hasNumber = computed(() => /[0-9]/.test(password.value));
    const passwordStrength = computed(() => {
      const password_val = password.value;
      if (!password_val) return { percentage: 0, text: "", class: "" };
      let score = 0;
      if (hasMinLength.value) score += 25;
      if (hasSpecialChar.value) score += 25;
      if (hasUpperCase.value) score += 25;
      if (hasNumber.value) score += 25;
      if (score < 50) return { percentage: score, text: "Y\u1EBFu", class: "weak" };
      if (score < 75) return { percentage: score, text: "Trung b\xECnh", class: "medium" };
      if (score < 100) return { percentage: score, text: "M\u1EA1nh", class: "strong" };
      return { percentage: score, text: "R\u1EA5t m\u1EA1nh", class: "very-strong" };
    });
    const isFormValid = computed(() => {
      return hasMinLength.value && hasSpecialChar.value && hasUpperCase.value && hasNumber.value && password.value === confirmPassword.value && password.value !== "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "set-password-page" }, _attrs))} data-v-f5a5bcb1><div class="background-animation" data-v-f5a5bcb1><div class="floating-shape shape-1" data-v-f5a5bcb1></div><div class="floating-shape shape-2" data-v-f5a5bcb1></div><div class="floating-shape shape-3" data-v-f5a5bcb1></div><div class="floating-shape shape-4" data-v-f5a5bcb1></div></div><div class="main-container" data-v-f5a5bcb1><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "set-password-container"])}" data-v-f5a5bcb1><div class="header-section" data-v-f5a5bcb1><div class="brand-logo" data-v-f5a5bcb1><div class="logo-icon" data-v-f5a5bcb1><svg viewBox="0 0 24 24" class="logo-svg" data-v-f5a5bcb1><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-f5a5bcb1></path><path d="M12 7v5l4 2-4 2v5" data-v-f5a5bcb1></path></svg></div><span class="brand-name" data-v-f5a5bcb1>OceanView Hotels</span></div></div><div class="lock-icon-container" data-v-f5a5bcb1><div class="${ssrRenderClass([{ "animate": isVisible.value }, "lock-icon-wrapper"])}" data-v-f5a5bcb1><div class="lock-icon" data-v-f5a5bcb1><svg viewBox="0 0 24 24" class="lock-svg" data-v-f5a5bcb1><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" data-v-f5a5bcb1></path></svg></div><div class="pulse-ring" data-v-f5a5bcb1></div><div class="pulse-ring pulse-ring-2" data-v-f5a5bcb1></div></div></div><div class="content-section" data-v-f5a5bcb1><h1 class="main-title" data-v-f5a5bcb1><span class="title-line" data-v-f5a5bcb1>\u0110\u1EB7t m\u1EADt kh\u1EA9u</span><span class="title-highlight" data-v-f5a5bcb1>M\u1EDBi</span></h1><div class="description" data-v-f5a5bcb1><p class="description-text" data-v-f5a5bcb1> M\u1EADt kh\u1EA9u m\u1EDBi ph\u1EA3i kh\xE1c v\u1EDBi m\u1EADt kh\u1EA9u \u0111\xE3 s\u1EED d\u1EE5ng tr\u01B0\u1EDBc \u0111\xF3 </p><p class="description-subtext" data-v-f5a5bcb1> T\u1EA1o m\u1EADt kh\u1EA9u m\u1EA1nh \u0111\u1EC3 b\u1EA3o v\u1EC7 t\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n </p></div></div><form class="password-form" data-v-f5a5bcb1><div class="form-group" data-v-f5a5bcb1><label for="password" class="form-label" data-v-f5a5bcb1><svg viewBox="0 0 24 24" class="label-icon" data-v-f5a5bcb1><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" data-v-f5a5bcb1></path></svg> M\u1EADt kh\u1EA9u m\u1EDBi * </label><div class="input-wrapper" data-v-f5a5bcb1><input${ssrRenderAttr("type", showPassword.value ? "text" : "password")} id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", password.value, null)} placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi" class="${ssrRenderClass([{ "error": passwordError.value, "success": password.value && !passwordError.value }, "form-input"])}" required data-v-f5a5bcb1><button type="button" class="password-toggle"${ssrRenderAttr("title", showPassword.value ? "\u1EA8n m\u1EADt kh\u1EA9u" : "Hi\u1EC3n th\u1ECB m\u1EADt kh\u1EA9u")} data-v-f5a5bcb1>`);
      if (showPassword.value) {
        _push(`<svg viewBox="0 0 24 24" data-v-f5a5bcb1><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" data-v-f5a5bcb1></path></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" data-v-f5a5bcb1><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" data-v-f5a5bcb1></path></svg>`);
      }
      _push(`</button></div>`);
      if (password.value) {
        _push(`<div class="password-strength" data-v-f5a5bcb1><div class="strength-bar" data-v-f5a5bcb1><div class="${ssrRenderClass([passwordStrength.value.class, "strength-fill"])}" style="${ssrRenderStyle({ width: `${passwordStrength.value.percentage}%` })}" data-v-f5a5bcb1></div></div><span class="${ssrRenderClass([passwordStrength.value.class, "strength-text"])}" data-v-f5a5bcb1>${ssrInterpolate(passwordStrength.value.text)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-f5a5bcb1><label for="confirmPassword" class="form-label" data-v-f5a5bcb1><svg viewBox="0 0 24 24" class="label-icon" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg> X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u * </label><div class="input-wrapper" data-v-f5a5bcb1><input${ssrRenderAttr("type", showPassword.value ? "text" : "password")} id="confirmPassword"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", confirmPassword.value, null)} placeholder="Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi" class="${ssrRenderClass([{ "error": confirmPasswordError.value, "success": confirmPassword.value && !confirmPasswordError.value }, "form-input"])}" required data-v-f5a5bcb1>`);
      if (confirmPassword.value && !confirmPasswordError.value) {
        _push(`<div class="input-status" data-v-f5a5bcb1><svg viewBox="0 0 24 24" class="status-icon success" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (confirmPasswordError.value) {
        _push(`<div class="error-message" data-v-f5a5bcb1><svg viewBox="0 0 24 24" class="error-icon" data-v-f5a5bcb1><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-f5a5bcb1></path></svg> ${ssrInterpolate(confirmPasswordError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="requirements-section" data-v-f5a5bcb1><h4 class="requirements-title" data-v-f5a5bcb1><svg viewBox="0 0 24 24" class="requirements-icon" data-v-f5a5bcb1><path d="M12 1L3 5v6c0 5.55 3.84 10 9 11 5.16-1 9-5.45 9-11V5l-9-4z" data-v-f5a5bcb1></path></svg> Y\xEAu c\u1EA7u m\u1EADt kh\u1EA9u </h4><div class="requirements-list" data-v-f5a5bcb1><div class="${ssrRenderClass([{ "valid": hasMinLength.value }, "requirement-item"])}" data-v-f5a5bcb1><div class="requirement-icon" data-v-f5a5bcb1>`);
      if (hasMinLength.value) {
        _push(`<svg viewBox="0 0 24 24" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg>`);
      } else {
        _push(`<div class="requirement-dot" data-v-f5a5bcb1></div>`);
      }
      _push(`</div><span class="requirement-text" data-v-f5a5bcb1>T\u1ED1i thi\u1EC3u 8 k\xFD t\u1EF1</span></div><div class="${ssrRenderClass([{ "valid": hasSpecialChar.value }, "requirement-item"])}" data-v-f5a5bcb1><div class="requirement-icon" data-v-f5a5bcb1>`);
      if (hasSpecialChar.value) {
        _push(`<svg viewBox="0 0 24 24" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg>`);
      } else {
        _push(`<div class="requirement-dot" data-v-f5a5bcb1></div>`);
      }
      _push(`</div><span class="requirement-text" data-v-f5a5bcb1>\xCDt nh\u1EA5t m\u1ED9t k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t</span></div><div class="${ssrRenderClass([{ "valid": hasUpperCase.value }, "requirement-item"])}" data-v-f5a5bcb1><div class="requirement-icon" data-v-f5a5bcb1>`);
      if (hasUpperCase.value) {
        _push(`<svg viewBox="0 0 24 24" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg>`);
      } else {
        _push(`<div class="requirement-dot" data-v-f5a5bcb1></div>`);
      }
      _push(`</div><span class="requirement-text" data-v-f5a5bcb1>\xCDt nh\u1EA5t m\u1ED9t ch\u1EEF hoa</span></div><div class="${ssrRenderClass([{ "valid": hasNumber.value }, "requirement-item"])}" data-v-f5a5bcb1><div class="requirement-icon" data-v-f5a5bcb1>`);
      if (hasNumber.value) {
        _push(`<svg viewBox="0 0 24 24" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg>`);
      } else {
        _push(`<div class="requirement-dot" data-v-f5a5bcb1></div>`);
      }
      _push(`</div><span class="requirement-text" data-v-f5a5bcb1>\xCDt nh\u1EA5t m\u1ED9t ch\u1EEF s\u1ED1</span></div></div></div><button type="submit"${ssrIncludeBooleanAttr(!isFormValid.value || isLoading.value) ? " disabled" : ""} class="${ssrRenderClass([{ "loading": isLoading.value }, "submit-button"])}" data-v-f5a5bcb1><div class="btn-content" data-v-f5a5bcb1>`);
      if (!isLoading.value) {
        _push(`<svg viewBox="0 0 24 24" class="btn-icon" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg>`);
      } else {
        _push(`<div class="loading-spinner" data-v-f5a5bcb1></div>`);
      }
      _push(`<span data-v-f5a5bcb1>${ssrInterpolate(isLoading.value ? "\u0110ang x\u1EED l\xFD..." : "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u")}</span></div></button></form><div class="back-section" data-v-f5a5bcb1><a href="/Login" class="back-link" data-v-f5a5bcb1><svg viewBox="0 0 24 24" class="back-icon" data-v-f5a5bcb1><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z" data-v-f5a5bcb1></path></svg><span data-v-f5a5bcb1>Quay l\u1EA1i trang \u0111\u0103ng nh\u1EADp</span></a></div><div class="security-tips" data-v-f5a5bcb1><h4 data-v-f5a5bcb1>\u{1F4A1} M\u1EB9o b\u1EA3o m\u1EADt</h4><ul class="tips-list" data-v-f5a5bcb1><li data-v-f5a5bcb1>S\u1EED d\u1EE5ng m\u1EADt kh\u1EA9u duy nh\u1EA5t cho m\u1ED7i t\xE0i kho\u1EA3n</li><li data-v-f5a5bcb1>Kh\xF4ng chia s\u1EBB m\u1EADt kh\u1EA9u v\u1EDBi ng\u01B0\u1EDDi kh\xE1c</li><li data-v-f5a5bcb1>C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u \u0111\u1ECBnh k\u1EF3</li></ul></div></div></div>`);
      if (resetSuccess.value) {
        _push(`<div class="success-modal" data-v-f5a5bcb1><div class="${ssrRenderClass([{ "animate-in": resetSuccess.value }, "success-container"])}" data-v-f5a5bcb1><div class="success-icon" data-v-f5a5bcb1><svg viewBox="0 0 24 24" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg></div><h3 data-v-f5a5bcb1>\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng!</h3><p data-v-f5a5bcb1>M\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt. B\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c chuy\u1EC3n h\u01B0\u1EDBng \u0111\u1EBFn trang \u0111\u0103ng nh\u1EADp.</p><button class="success-btn" data-v-f5a5bcb1><svg viewBox="0 0 24 24" data-v-f5a5bcb1><path d="M10 17l5-5-5-5v10z" data-v-f5a5bcb1></path></svg> Ti\u1EBFp t\u1EE5c \u0111\u0103ng nh\u1EADp </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-f5a5bcb1><div class="toast-content" data-v-f5a5bcb1>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-f5a5bcb1><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-f5a5bcb1></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-f5a5bcb1><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-f5a5bcb1></path></svg>`);
        }
        _push(`<span data-v-f5a5bcb1>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SetNewPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SetNewPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5a5bcb1"]]);

export { SetNewPassword as default };
//# sourceMappingURL=SetNewPassword-Cq_nl589.mjs.map
