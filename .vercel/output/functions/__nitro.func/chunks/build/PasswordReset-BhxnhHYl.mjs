import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "PasswordReset",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    const isSuccess = ref(false);
    const isLoading = ref(false);
    const showConfetti = ref(false);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const getConfettiStyle = (index) => {
      const colors = ["#667eea", "#764ba2", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
      return {
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        backgroundColor: colors[index % colors.length],
        animationDuration: `${3 + Math.random() * 2}s`
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "password-reset-page" }, _attrs))} data-v-7512d950><div class="background-animation" data-v-7512d950><div class="floating-shape shape-1" data-v-7512d950></div><div class="floating-shape shape-2" data-v-7512d950></div><div class="floating-shape shape-3" data-v-7512d950></div><div class="floating-shape shape-4" data-v-7512d950></div></div><div class="main-container" data-v-7512d950><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "password-reset-container"])}" data-v-7512d950><div class="header-section" data-v-7512d950><div class="brand-logo" data-v-7512d950><div class="logo-icon" data-v-7512d950><svg viewBox="0 0 24 24" class="logo-svg" data-v-7512d950><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-7512d950></path><path d="M12 7v5l4 2-4 2v5" data-v-7512d950></path></svg></div><span class="brand-name" data-v-7512d950>OceanView Hotels</span></div></div><div class="success-icon-container" data-v-7512d950><div class="${ssrRenderClass([{ "success": isSuccess.value }, "success-icon-wrapper"])}" data-v-7512d950><div class="success-icon" data-v-7512d950><div class="checkmark-circle" data-v-7512d950><div class="${ssrRenderClass([{ "animate": isSuccess.value }, "checkmark"])}" data-v-7512d950><svg viewBox="0 0 24 24" class="checkmark-svg" data-v-7512d950><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-7512d950></path></svg></div></div><div class="success-particles" data-v-7512d950><!--[-->`);
      ssrRenderList(6, (n) => {
        _push(`<div class="particle" style="${ssrRenderStyle({ animationDelay: `${n * 0.1}s` })}" data-v-7512d950></div>`);
      });
      _push(`<!--]--></div></div><div class="pulse-ring" data-v-7512d950></div><div class="pulse-ring pulse-ring-2" data-v-7512d950></div></div></div><div class="content-section" data-v-7512d950><h1 class="main-title" data-v-7512d950><span class="title-line" data-v-7512d950>\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u</span><span class="title-highlight" data-v-7512d950>Th\xE0nh c\xF4ng</span></h1><div class="description" data-v-7512d950><p class="description-text" data-v-7512d950> M\u1EADt kh\u1EA9u c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c \u0111\u1EB7t l\u1EA1i th\xE0nh c\xF4ng. </p><p class="description-subtext" data-v-7512d950> Nh\u1EA5n n\xFAt b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 \u0111\u0103ng nh\u1EADp v\u1EDBi m\u1EADt kh\u1EA9u m\u1EDBi </p></div></div><div class="action-section" data-v-7512d950><button${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="${ssrRenderClass([{ "loading": isLoading.value }, "continue-button"])}" data-v-7512d950><div class="btn-content" data-v-7512d950>`);
      if (!isLoading.value) {
        _push(`<svg viewBox="0 0 24 24" class="btn-icon" data-v-7512d950><path d="M10 17l5-5-5-5v10z" data-v-7512d950></path></svg>`);
      } else {
        _push(`<div class="loading-spinner" data-v-7512d950></div>`);
      }
      _push(`<span data-v-7512d950>${ssrInterpolate(isLoading.value ? "\u0110ang chuy\u1EC3n h\u01B0\u1EDBng..." : "Ti\u1EBFp t\u1EE5c \u0111\u0103ng nh\u1EADp")}</span></div></button><div class="additional-actions" data-v-7512d950><div class="security-tips" data-v-7512d950><h4 data-v-7512d950>L\u1EDDi khuy\xEAn b\u1EA3o m\u1EADt</h4><ul class="tips-list" data-v-7512d950><li data-v-7512d950><svg viewBox="0 0 24 24" class="tip-icon" data-v-7512d950><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-7512d950></path></svg><span data-v-7512d950>S\u1EED d\u1EE5ng m\u1EADt kh\u1EA9u m\u1EA1nh v\u1EDBi \xEDt nh\u1EA5t 8 k\xFD t\u1EF1</span></li><li data-v-7512d950><svg viewBox="0 0 24 24" class="tip-icon" data-v-7512d950><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-7512d950></path></svg><span data-v-7512d950>Kh\xF4ng chia s\u1EBB m\u1EADt kh\u1EA9u v\u1EDBi ng\u01B0\u1EDDi kh\xE1c</span></li><li data-v-7512d950><svg viewBox="0 0 24 24" class="tip-icon" data-v-7512d950><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-7512d950></path></svg><span data-v-7512d950>Thay \u0111\u1ED5i m\u1EADt kh\u1EA9u \u0111\u1ECBnh k\u1EF3 \u0111\u1EC3 b\u1EA3o m\u1EADt</span></li></ul></div></div></div><div class="back-section" data-v-7512d950><a href="/Login" class="back-link" data-v-7512d950><svg viewBox="0 0 24 24" class="back-icon" data-v-7512d950><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.42-1.41L7.83 13H20v-2z" data-v-7512d950></path></svg><span data-v-7512d950>Quay l\u1EA1i trang \u0111\u0103ng nh\u1EADp</span></a></div><div class="support-section" data-v-7512d950><p class="support-text" data-v-7512d950>C\u1EA7n h\u1ED7 tr\u1EE3 th\xEAm?</p><div class="support-contacts" data-v-7512d950><a href="tel:1900-1234" class="support-contact" data-v-7512d950><svg viewBox="0 0 24 24" data-v-7512d950><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-7512d950></path></svg><span data-v-7512d950>1900-1234</span></a><a href="mailto:support@oceanview.com" class="support-contact" data-v-7512d950><svg viewBox="0 0 24 24" data-v-7512d950><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-7512d950></path></svg><span data-v-7512d950>support@oceanview.com</span></a></div></div></div></div>`);
      if (showConfetti.value) {
        _push(`<div class="confetti-container" data-v-7512d950><!--[-->`);
        ssrRenderList(50, (n) => {
          _push(`<div class="confetti" style="${ssrRenderStyle(getConfettiStyle(n))}" data-v-7512d950></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-7512d950><div class="toast-content" data-v-7512d950>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-7512d950><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-7512d950></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span data-v-7512d950>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/PasswordReset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PasswordReset = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7512d950"]]);

export { PasswordReset as default };
//# sourceMappingURL=PasswordReset-BhxnhHYl.mjs.map
