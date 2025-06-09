import { ref, reactive, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderDynamicModel, ssrLooseContain, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const isLoading = ref(false);
    const message = ref("");
    const messageType = ref("");
    const errors = reactive({});
    const isVisible = ref(false);
    ref("");
    const showPassword = ref(false);
    const acceptTerms = ref(false);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const form = ref({
      email: "",
      tenTaiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDienThoai: "",
      diaChi: "",
      ngaySinh: "",
      gioiTinh: "Nu",
      hinhAnhUrl: "",
      canCuocCongDan: "",
      ngayTao: (/* @__PURE__ */ new Date()).toISOString()
    });
    const benefits = ref([
      {
        title: "V\u1ECB tr\xED \u0111\u1EAFc \u0111\u1ECBa",
        description: "Ngay trung t\xE2m th\xE0nh ph\u1ED1 v\u1EDBi view bi\u1EC3n tuy\u1EC7t \u0111\u1EB9p",
        icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      },
      {
        title: "D\u1ECBch v\u1EE5 5 sao",
        description: "\u0110\u1ED9i ng\u0169 nh\xE2n vi\xEAn chuy\xEAn nghi\u1EC7p, t\u1EADn t\xE2m 24/7",
        icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      },
      {
        title: "Ti\u1EC7n nghi hi\u1EC7n \u0111\u1EA1i",
        description: "Ph\xF2ng \u1ED1c sang tr\u1ECDng v\u1EDBi \u0111\u1EA7y \u0111\u1EE7 ti\u1EC7n nghi cao c\u1EA5p",
        icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"
      },
      {
        title: "\u01AFu \u0111\xE3i h\u1EA5p d\u1EABn",
        description: "Nhi\u1EC1u ch\u01B0\u01A1ng tr\xECnh khuy\u1EBFn m\xE3i v\xE0 t\xEDch \u0111i\u1EC3m",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      }
    ]);
    const formProgress = computed(() => {
      const fields = ["hoTen", "canCuocCongDan", "soDienThoai", "email", "diaChi", "ngaySinh", "tenTaiKhoan", "matKhau"];
      const filledFields = fields.filter((field) => form.value[field] && !errors[field]);
      return filledFields.length / fields.length * 100;
    });
    const passwordStrength = computed(() => {
      const password = form.value.matKhau;
      if (!password) return { percentage: 0, text: "", class: "" };
      let score = 0;
      if (password.length >= 6) score += 25;
      if (password.length >= 8) score += 25;
      if (/[A-Z]/.test(password)) score += 25;
      if (/[0-9]/.test(password)) score += 25;
      if (score < 50) return { percentage: score, text: "Y\u1EBFu", class: "weak" };
      if (score < 75) return { percentage: score, text: "Trung b\xECnh", class: "medium" };
      return { percentage: score, text: "M\u1EA1nh", class: "strong" };
    });
    const isFormValid = computed(() => {
      const requiredFields = ["hoTen", "canCuocCongDan", "soDienThoai", "email", "diaChi", "ngaySinh", "tenTaiKhoan", "matKhau"];
      const hasAllFields = requiredFields.every((field) => form.value[field]);
      const hasNoErrors = !Object.values(errors).some((error) => error);
      return hasAllFields && hasNoErrors && acceptTerms.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "register-page" }, _attrs))} data-v-de7a2da7><div class="background-animation" data-v-de7a2da7><div class="floating-shape shape-1" data-v-de7a2da7></div><div class="floating-shape shape-2" data-v-de7a2da7></div><div class="floating-shape shape-3" data-v-de7a2da7></div><div class="floating-shape shape-4" data-v-de7a2da7></div></div><div class="register-container" data-v-de7a2da7><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "register-form-section"])}" data-v-de7a2da7><div class="form-header" data-v-de7a2da7><div class="hotel-branding" data-v-de7a2da7><div class="logo-icon" data-v-de7a2da7><svg viewBox="0 0 24 24" class="logo-svg" data-v-de7a2da7><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-de7a2da7></path><path d="M12 7v5l4 2-4 2v5" data-v-de7a2da7></path></svg></div><div class="logo-text" data-v-de7a2da7><h1 data-v-de7a2da7>OceanView Hotels</h1><span data-v-de7a2da7>Luxury Experience</span></div></div><div class="welcome-section" data-v-de7a2da7><h2 class="page-title" data-v-de7a2da7><span class="title-line" data-v-de7a2da7>T\u1EA1o t\xE0i kho\u1EA3n</span><span class="title-highlight" data-v-de7a2da7>Kh\xE1ch h\xE0ng</span></h2><p class="page-subtitle" data-v-de7a2da7> \u0110\xE3 c\xF3 t\xE0i kho\u1EA3n? <a href="/login" class="login-link" data-v-de7a2da7>\u0110\u0103ng nh\u1EADp ngay</a></p></div></div><form class="registration-form" data-v-de7a2da7><div class="form-progress" data-v-de7a2da7><div class="progress-bar" data-v-de7a2da7><div class="progress-fill" style="${ssrRenderStyle({ width: `${formProgress.value}%` })}" data-v-de7a2da7></div></div><span class="progress-text" data-v-de7a2da7>${ssrInterpolate(Math.round(formProgress.value))}% ho\xE0n th\xE0nh</span></div><div class="form-grid" data-v-de7a2da7><div class="form-group" data-v-de7a2da7><label for="name" class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-de7a2da7></path></svg> H\u1ECD v\xE0 t\xEAn * </label><div class="input-wrapper" data-v-de7a2da7><input type="text" id="name"${ssrRenderAttr("value", form.value.hoTen)} placeholder="Nh\u1EADp h\u1ECD v\xE0 t\xEAn \u0111\u1EA7y \u0111\u1EE7" class="${ssrRenderClass([{ "error": errors.hoTen, "success": form.value.hoTen && !errors.hoTen }, "form-input"])}" required data-v-de7a2da7>`);
      if (form.value.hoTen && !errors.hoTen) {
        _push(`<div class="input-status" data-v-de7a2da7><svg viewBox="0 0 24 24" class="status-icon success" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errors.hoTen) {
        _push(`<span class="error-message" data-v-de7a2da7><svg viewBox="0 0 24 24" class="error-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg> ${ssrInterpolate(errors.hoTen)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-de7a2da7><label for="idCard" class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z" data-v-de7a2da7></path></svg> C\u0103n c\u01B0\u1EDBc c\xF4ng d\xE2n * </label><div class="input-wrapper" data-v-de7a2da7><input type="text" id="idCard"${ssrRenderAttr("value", form.value.canCuocCongDan)} placeholder="Nh\u1EADp s\u1ED1 CCCD (9-12 s\u1ED1)" class="${ssrRenderClass([{ "error": errors.canCuocCongDan, "success": form.value.canCuocCongDan && !errors.canCuocCongDan }, "form-input"])}" required data-v-de7a2da7>`);
      if (form.value.canCuocCongDan && !errors.canCuocCongDan) {
        _push(`<div class="input-status" data-v-de7a2da7><svg viewBox="0 0 24 24" class="status-icon success" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errors.canCuocCongDan) {
        _push(`<span class="error-message" data-v-de7a2da7><svg viewBox="0 0 24 24" class="error-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg> ${ssrInterpolate(errors.canCuocCongDan)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-de7a2da7><label for="phone" class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-de7a2da7></path></svg> S\u1ED1 \u0111i\u1EC7n tho\u1EA1i * </label><div class="input-wrapper" data-v-de7a2da7><input type="tel" id="phone"${ssrRenderAttr("value", form.value.soDienThoai)} placeholder="Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i (10-11 s\u1ED1)" class="${ssrRenderClass([{ "error": errors.soDienThoai, "success": form.value.soDienThoai && !errors.soDienThoai }, "form-input"])}" required data-v-de7a2da7>`);
      if (form.value.soDienThoai && !errors.soDienThoai) {
        _push(`<div class="input-status" data-v-de7a2da7><svg viewBox="0 0 24 24" class="status-icon success" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errors.soDienThoai) {
        _push(`<span class="error-message" data-v-de7a2da7><svg viewBox="0 0 24 24" class="error-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg> ${ssrInterpolate(errors.soDienThoai)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-de7a2da7><label for="email" class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-de7a2da7></path></svg> \u0110\u1ECBa ch\u1EC9 Email * </label><div class="input-wrapper" data-v-de7a2da7><input type="email" id="email"${ssrRenderAttr("value", form.value.email)} placeholder="Nh\u1EADp \u0111\u1ECBa ch\u1EC9 email" class="${ssrRenderClass([{ "error": errors.email, "success": form.value.email && !errors.email }, "form-input"])}" required data-v-de7a2da7>`);
      if (form.value.email && !errors.email) {
        _push(`<div class="input-status" data-v-de7a2da7><svg viewBox="0 0 24 24" class="status-icon success" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errors.email) {
        _push(`<span class="error-message" data-v-de7a2da7><svg viewBox="0 0 24 24" class="error-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg> ${ssrInterpolate(errors.email)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group full-width" data-v-de7a2da7><label for="address" class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-de7a2da7></path></svg> \u0110\u1ECBa ch\u1EC9 li\xEAn l\u1EA1c * </label><div class="input-wrapper" data-v-de7a2da7><input type="text" id="address"${ssrRenderAttr("value", form.value.diaChi)} placeholder="Nh\u1EADp \u0111\u1ECBa ch\u1EC9 \u0111\u1EA7y \u0111\u1EE7" class="${ssrRenderClass([{ "error": errors.diaChi, "success": form.value.diaChi && !errors.diaChi }, "form-input"])}" required data-v-de7a2da7>`);
      if (form.value.diaChi && !errors.diaChi) {
        _push(`<div class="input-status" data-v-de7a2da7><svg viewBox="0 0 24 24" class="status-icon success" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errors.diaChi) {
        _push(`<span class="error-message" data-v-de7a2da7><svg viewBox="0 0 24 24" class="error-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg> ${ssrInterpolate(errors.diaChi)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-de7a2da7><label for="dob" class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-de7a2da7></path></svg> Ng\xE0y sinh * </label><div class="input-wrapper" data-v-de7a2da7><input type="date" id="dob"${ssrRenderAttr("value", form.value.ngaySinh)} class="${ssrRenderClass([{ "error": errors.ngaySinh, "success": form.value.ngaySinh && !errors.ngaySinh }, "form-input"])}" required data-v-de7a2da7>`);
      if (form.value.ngaySinh && !errors.ngaySinh) {
        _push(`<div class="input-status" data-v-de7a2da7><svg viewBox="0 0 24 24" class="status-icon success" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errors.ngaySinh) {
        _push(`<span class="error-message" data-v-de7a2da7><svg viewBox="0 0 24 24" class="error-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg> ${ssrInterpolate(errors.ngaySinh)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-de7a2da7><label class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-de7a2da7></path></svg> Gi\u1EDBi t\xEDnh * </label><div class="gender-options" data-v-de7a2da7><label class="gender-option" data-v-de7a2da7><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.gioiTinh, "Nam")) ? " checked" : ""} value="Nam" data-v-de7a2da7><span class="radio-custom" data-v-de7a2da7></span><span class="gender-text" data-v-de7a2da7>Nam</span></label><label class="gender-option" data-v-de7a2da7><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(form.value.gioiTinh, "Nu")) ? " checked" : ""} value="Nu" data-v-de7a2da7><span class="radio-custom" data-v-de7a2da7></span><span class="gender-text" data-v-de7a2da7>N\u1EEF</span></label></div></div><div class="form-group" data-v-de7a2da7><label for="username" class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-de7a2da7></path></svg> T\xEAn t\xE0i kho\u1EA3n * </label><div class="input-wrapper" data-v-de7a2da7><input type="text" id="username"${ssrRenderAttr("value", form.value.tenTaiKhoan)} placeholder="Nh\u1EADp t\xEAn t\xE0i kho\u1EA3n (t\u1ED1i thi\u1EC3u 5 k\xFD t\u1EF1)" class="${ssrRenderClass([{ "error": errors.tenTaiKhoan, "success": form.value.tenTaiKhoan && !errors.tenTaiKhoan }, "form-input"])}" required data-v-de7a2da7>`);
      if (form.value.tenTaiKhoan && !errors.tenTaiKhoan) {
        _push(`<div class="input-status" data-v-de7a2da7><svg viewBox="0 0 24 24" class="status-icon success" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errors.tenTaiKhoan) {
        _push(`<span class="error-message" data-v-de7a2da7><svg viewBox="0 0 24 24" class="error-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg> ${ssrInterpolate(errors.tenTaiKhoan)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group" data-v-de7a2da7><label for="password" class="form-label" data-v-de7a2da7><svg viewBox="0 0 24 24" class="label-icon" data-v-de7a2da7><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" data-v-de7a2da7></path></svg> M\u1EADt kh\u1EA9u * </label><div class="input-wrapper" data-v-de7a2da7><input${ssrRenderAttr("type", showPassword.value ? "text" : "password")} id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", form.value.matKhau, null)} placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u (t\u1ED1i thi\u1EC3u 6 k\xFD t\u1EF1)" class="${ssrRenderClass([{ "error": errors.matKhau, "success": form.value.matKhau && !errors.matKhau }, "form-input"])}" required data-v-de7a2da7><button type="button" class="password-toggle"${ssrRenderAttr("title", showPassword.value ? "\u1EA8n m\u1EADt kh\u1EA9u" : "Hi\u1EC3n th\u1ECB m\u1EADt kh\u1EA9u")} data-v-de7a2da7>`);
      if (showPassword.value) {
        _push(`<svg viewBox="0 0 24 24" data-v-de7a2da7><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" data-v-de7a2da7></path></svg>`);
      } else {
        _push(`<svg viewBox="0 0 24 24" data-v-de7a2da7><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" data-v-de7a2da7></path></svg>`);
      }
      _push(`</button></div>`);
      if (form.value.matKhau) {
        _push(`<div class="password-strength" data-v-de7a2da7><div class="strength-bar" data-v-de7a2da7><div class="${ssrRenderClass([passwordStrength.value.class, "strength-fill"])}" style="${ssrRenderStyle({ width: `${passwordStrength.value.percentage}%` })}" data-v-de7a2da7></div></div><span class="${ssrRenderClass([passwordStrength.value.class, "strength-text"])}" data-v-de7a2da7>${ssrInterpolate(passwordStrength.value.text)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (errors.matKhau) {
        _push(`<span class="error-message" data-v-de7a2da7><svg viewBox="0 0 24 24" class="error-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg> ${ssrInterpolate(errors.matKhau)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="terms-section" data-v-de7a2da7><label class="terms-checkbox" data-v-de7a2da7><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(acceptTerms.value) ? ssrLooseContain(acceptTerms.value, null) : acceptTerms.value) ? " checked" : ""} required data-v-de7a2da7><span class="checkbox-custom" data-v-de7a2da7></span><span class="terms-text" data-v-de7a2da7> T\xF4i \u0111\u1ED3ng \xFD v\u1EDBi <a href="#" class="terms-link" data-v-de7a2da7>\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng</a> v\xE0 <a href="#" class="terms-link" data-v-de7a2da7>Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt</a></span></label></div><button type="submit"${ssrIncludeBooleanAttr(isLoading.value || !isFormValid.value) ? " disabled" : ""} class="${ssrRenderClass([{ "loading": isLoading.value }, "submit-button"])}" data-v-de7a2da7><div class="btn-content" data-v-de7a2da7>`);
      if (!isLoading.value) {
        _push(`<svg viewBox="0 0 24 24" class="btn-icon" data-v-de7a2da7><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-de7a2da7></path></svg>`);
      } else {
        _push(`<div class="loading-spinner" data-v-de7a2da7></div>`);
      }
      _push(`<span data-v-de7a2da7>${ssrInterpolate(isLoading.value ? "\u0110ang x\u1EED l\xFD..." : "T\u1EA1o t\xE0i kho\u1EA3n")}</span></div></button>`);
      if (message.value) {
        _push(`<div class="${ssrRenderClass([messageType.value, "message-container"])}" data-v-de7a2da7>`);
        if (messageType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="message-icon" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="message-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg>`);
        }
        _push(`<span data-v-de7a2da7>${ssrInterpolate(message.value)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "illustration-section"])}" data-v-de7a2da7><div class="illustration-container" data-v-de7a2da7><div class="hotel-illustration" data-v-de7a2da7><div class="building" data-v-de7a2da7><div class="building-base" data-v-de7a2da7></div><div class="building-floors" data-v-de7a2da7><!--[-->`);
      ssrRenderList(6, (n) => {
        _push(`<div class="floor" style="${ssrRenderStyle({ animationDelay: `${n * 0.2}s` })}" data-v-de7a2da7><!--[-->`);
        ssrRenderList(4, (w) => {
          _push(`<div class="window" data-v-de7a2da7></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="building-top" data-v-de7a2da7><div class="logo-sign" data-v-de7a2da7>OceanView</div></div></div><div class="decorative-elements" data-v-de7a2da7><div class="cloud cloud-1" data-v-de7a2da7></div><div class="cloud cloud-2" data-v-de7a2da7></div><div class="sun" data-v-de7a2da7></div><div class="birds" data-v-de7a2da7><!--[-->`);
      ssrRenderList(3, (b) => {
        _push(`<div class="bird" style="${ssrRenderStyle({ animationDelay: `${b * 0.5}s` })}" data-v-de7a2da7></div>`);
      });
      _push(`<!--]--></div></div></div><div class="benefits-list" data-v-de7a2da7><h3 data-v-de7a2da7>T\u1EA1i sao ch\u1ECDn OceanView?</h3><!--[-->`);
      ssrRenderList(benefits.value, (benefit, index) => {
        _push(`<div class="benefit-item" style="${ssrRenderStyle({ animationDelay: `${index * 0.2}s` })}" data-v-de7a2da7><div class="benefit-icon" data-v-de7a2da7><svg viewBox="0 0 24 24" data-v-de7a2da7><path${ssrRenderAttr("d", benefit.icon)} data-v-de7a2da7></path></svg></div><div class="benefit-content" data-v-de7a2da7><h4 data-v-de7a2da7>${ssrInterpolate(benefit.title)}</h4><p data-v-de7a2da7>${ssrInterpolate(benefit.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-de7a2da7><div class="toast-content" data-v-de7a2da7>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-de7a2da7><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-de7a2da7></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-de7a2da7><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-de7a2da7></path></svg>`);
        }
        _push(`<span data-v-de7a2da7>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de7a2da7"]]);

export { Register as default };
//# sourceMappingURL=Register-BYpFKWDt.mjs.map
