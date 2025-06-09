import { ref, computed, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderList, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const itemsPerPage = 5;
const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("info");
    const tabAnimationKey = ref("info");
    const isVisible = ref(false);
    const editable = ref(false);
    const otpRequired = ref(false);
    const otpDigits = ref(["", "", "", "", "", ""]);
    ref([]);
    ref("");
    const successMessage = ref("");
    const showSuccessMessage = ref(false);
    const isSaving = ref(false);
    const resendCooldown = ref(0);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const currentPage = ref(1);
    const userProfile = ref({
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    });
    const bookingCount = ref(12);
    const loyaltyPoints = ref(2450);
    const membershipLevel = ref("Gold");
    const form = ref({
      fullName: "Nguy\u1EC5n V\u0103n A",
      email: "nguyenvana@gmail.com",
      phone: "+84987654321",
      idNumber: "012345678901",
      address: "123 V\xF5 Nguy\xEAn Gi\xE1p, \u0110\xE0 N\u1EB5ng"
    });
    const settings = ref({
      emailNotifications: true,
      smsNotifications: false,
      privateMode: false,
      twoFactorAuth: false
    });
    const filters = ref({
      keyword: "",
      type: "",
      time: ""
    });
    const history = ref([
      { id: 1, name: "Ph\xF2ng Deluxe Ocean View", type: "room", date: "2024-04-01", status: "Ho\xE0n t\u1EA5t", price: 15e5 },
      { id: 2, name: "Spa th\u01B0 gi\xE3n to\xE0n th\xE2n", type: "service", date: "2024-04-02", status: "Ho\xE0n t\u1EA5t", price: 4e5 },
      { id: 3, name: "Ph\xF2ng Superior Garden", type: "room", date: "2024-03-20", status: "\u0110ang x\u1EED l\xFD", price: 12e5 },
      { id: 4, name: "Tour B\xE0 N\xE0 Hills", type: "service", date: "2024-03-15", status: "Ho\xE0n t\u1EA5t", price: 8e5 },
      { id: 5, name: "Massage \u0111\xE1 n\xF3ng", type: "service", date: "2024-03-10", status: "Ho\xE0n t\u1EA5t", price: 35e4 },
      { id: 6, name: "Ph\xF2ng Standard", type: "room", date: "2024-02-28", status: "\u0110\xE3 h\u1EE7y", price: 9e5 },
      { id: 7, name: "Buffet t\u1ED1i", type: "service", date: "2024-02-25", status: "Ho\xE0n t\u1EA5t", price: 25e4 },
      { id: 8, name: "Ph\xF2ng Premium", type: "room", date: "2024-02-15", status: "Ho\xE0n t\u1EA5t", price: 18e5 }
    ]);
    const tabIndicatorStyle = computed(() => {
      const tabIndex = ["info", "history", "settings"].indexOf(currentTab.value);
      return {
        transform: `translateX(${tabIndex * 100}%)`
      };
    });
    const filteredHistory = computed(() => {
      return history.value.filter((item) => {
        const matchKeyword = item.name.toLowerCase().includes(filters.value.keyword.toLowerCase());
        const matchType = filters.value.type ? item.type === filters.value.type : true;
        const matchTime = filters.value.time ? (Date.now() - new Date(item.date).getTime()) / (1e3 * 3600 * 24) <= parseInt(filters.value.time) : true;
        return matchKeyword && matchType && matchTime;
      });
    });
    const totalPages = computed(() => Math.ceil(filteredHistory.value.length / itemsPerPage));
    const paginatedHistory = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return filteredHistory.value.slice(start, start + itemsPerPage);
    });
    const visiblePages = computed(() => {
      const total = totalPages.value;
      const current = currentPage.value;
      const delta = 2;
      const range = [];
      const rangeWithDots = [];
      for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
        range.push(i);
      }
      if (current - delta > 2) {
        rangeWithDots.push(1, "...");
      } else {
        rangeWithDots.push(1);
      }
      rangeWithDots.push(...range);
      if (current + delta < total - 1) {
        rangeWithDots.push("...", total);
      } else {
        rangeWithDots.push(total);
      }
      return rangeWithDots.filter((item) => item !== "..." || rangeWithDots.indexOf(item) === rangeWithDots.lastIndexOf(item));
    });
    computed(() => otpDigits.value.join(""));
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(price);
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "Ho\xE0n t\u1EA5t":
          return "completed";
        case "\u0110ang x\u1EED l\xFD":
          return "processing";
        case "\u0110\xE3 h\u1EE7y":
          return "cancelled";
        default:
          return "";
      }
    };
    watch(filters, () => {
      currentPage.value = 1;
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-page" }, _attrs))} data-v-9f5abf74><div class="background-animation" data-v-9f5abf74><div class="floating-shape shape-1" data-v-9f5abf74></div><div class="floating-shape shape-2" data-v-9f5abf74></div><div class="floating-shape shape-3" data-v-9f5abf74></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "profile-header"])}" data-v-9f5abf74><div class="header-content" data-v-9f5abf74><div class="profile-avatar-section" data-v-9f5abf74><div class="avatar-container" data-v-9f5abf74><img${ssrRenderAttr("src", userProfile.value.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face")} alt="Avatar" class="profile-avatar" data-v-9f5abf74><div class="avatar-badge" data-v-9f5abf74><svg viewBox="0 0 24 24" class="badge-icon" data-v-9f5abf74><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-9f5abf74></path></svg></div></div><div class="profile-info" data-v-9f5abf74><h1 class="profile-name" data-v-9f5abf74>${ssrInterpolate(form.value.fullName)}</h1><p class="profile-email" data-v-9f5abf74>${ssrInterpolate(form.value.email)}</p><div class="profile-stats" data-v-9f5abf74><div class="stat-item" data-v-9f5abf74><span class="stat-number" data-v-9f5abf74>${ssrInterpolate(bookingCount.value)}</span><span class="stat-label" data-v-9f5abf74>\u0110\u1EB7t ph\xF2ng</span></div><div class="stat-item" data-v-9f5abf74><span class="stat-number" data-v-9f5abf74>${ssrInterpolate(loyaltyPoints.value)}</span><span class="stat-label" data-v-9f5abf74>\u0110i\u1EC3m t\xEDch l\u0169y</span></div><div class="stat-item" data-v-9f5abf74><span class="stat-number" data-v-9f5abf74>${ssrInterpolate(membershipLevel.value)}</span><span class="stat-label" data-v-9f5abf74>H\u1EA1ng th\xE0nh vi\xEAn</span></div></div></div></div></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "tabs-container"])}" data-v-9f5abf74><div class="tabs-wrapper" data-v-9f5abf74><button class="${ssrRenderClass([{ "active": currentTab.value === "info" }, "tab-button"])}" data-v-9f5abf74><svg viewBox="0 0 24 24" class="tab-icon" data-v-9f5abf74><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-9f5abf74></path></svg><span data-v-9f5abf74>Th\xF4ng tin c\xE1 nh\xE2n</span></button><button class="${ssrRenderClass([{ "active": currentTab.value === "history" }, "tab-button"])}" data-v-9f5abf74><svg viewBox="0 0 24 24" class="tab-icon" data-v-9f5abf74><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" data-v-9f5abf74></path></svg><span data-v-9f5abf74>L\u1ECBch s\u1EED s\u1EED d\u1EE5ng</span></button><button class="${ssrRenderClass([{ "active": currentTab.value === "settings" }, "tab-button"])}" data-v-9f5abf74><svg viewBox="0 0 24 24" class="tab-icon" data-v-9f5abf74><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" data-v-9f5abf74></path></svg><span data-v-9f5abf74>C\xE0i \u0111\u1EB7t</span></button><div class="tab-indicator" style="${ssrRenderStyle(tabIndicatorStyle.value)}" data-v-9f5abf74></div></div></div><div class="profile-content" data-v-9f5abf74>`);
      if (currentTab.value === "info") {
        _push(`<div class="${ssrRenderClass([{ "animate-in": tabAnimationKey.value === "info" }, "tab-content"])}" data-v-9f5abf74><div class="content-card" data-v-9f5abf74><div class="card-header" data-v-9f5abf74><h2 class="card-title" data-v-9f5abf74><svg viewBox="0 0 24 24" class="title-icon" data-v-9f5abf74><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-9f5abf74></path></svg> Th\xF4ng tin c\xE1 nh\xE2n </h2><div class="card-actions" data-v-9f5abf74>`);
        if (!editable.value) {
          _push(`<button class="edit-btn" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-9f5abf74></path></svg> Ch\u1EC9nh s\u1EEDa </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><form class="profile-form" data-v-9f5abf74><div class="form-grid" data-v-9f5abf74><div class="form-group" data-v-9f5abf74><label class="form-label" data-v-9f5abf74><svg viewBox="0 0 24 24" class="label-icon" data-v-9f5abf74><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-9f5abf74></path></svg> H\u1ECD v\xE0 t\xEAn </label><div class="input-wrapper" data-v-9f5abf74><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.fullName)} class="${ssrRenderClass([{ "editable": editable.value }, "form-input"])}" data-v-9f5abf74>`);
        if (editable.value) {
          _push(`<div class="input-status" data-v-9f5abf74><svg viewBox="0 0 24 24" class="status-icon" data-v-9f5abf74><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-9f5abf74></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="form-group" data-v-9f5abf74><label class="form-label" data-v-9f5abf74><svg viewBox="0 0 24 24" class="label-icon" data-v-9f5abf74><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-9f5abf74></path></svg> Email </label><div class="input-wrapper" data-v-9f5abf74><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="email"${ssrRenderAttr("value", form.value.email)} class="${ssrRenderClass([{ "editable": editable.value }, "form-input"])}" data-v-9f5abf74>`);
        if (editable.value) {
          _push(`<div class="input-status" data-v-9f5abf74><svg viewBox="0 0 24 24" class="status-icon" data-v-9f5abf74><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-9f5abf74></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="form-group" data-v-9f5abf74><label class="form-label" data-v-9f5abf74><svg viewBox="0 0 24 24" class="label-icon" data-v-9f5abf74><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-9f5abf74></path></svg> S\u1ED1 \u0111i\u1EC7n tho\u1EA1i </label><div class="input-wrapper" data-v-9f5abf74><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="tel"${ssrRenderAttr("value", form.value.phone)} class="${ssrRenderClass([{ "editable": editable.value }, "form-input"])}" data-v-9f5abf74>`);
        if (editable.value) {
          _push(`<div class="input-status" data-v-9f5abf74><svg viewBox="0 0 24 24" class="status-icon" data-v-9f5abf74><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-9f5abf74></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="form-group" data-v-9f5abf74><label class="form-label" data-v-9f5abf74><svg viewBox="0 0 24 24" class="label-icon" data-v-9f5abf74><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z" data-v-9f5abf74></path></svg> S\u1ED1 CCCD/H\u1ED9 chi\u1EBFu </label><div class="input-wrapper" data-v-9f5abf74><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.idNumber)} class="${ssrRenderClass([{ "editable": editable.value }, "form-input"])}" data-v-9f5abf74>`);
        if (editable.value) {
          _push(`<div class="input-status" data-v-9f5abf74><svg viewBox="0 0 24 24" class="status-icon" data-v-9f5abf74><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-9f5abf74></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="form-group full-width" data-v-9f5abf74><label class="form-label" data-v-9f5abf74><svg viewBox="0 0 24 24" class="label-icon" data-v-9f5abf74><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-9f5abf74></path></svg> \u0110\u1ECBa ch\u1EC9 li\xEAn l\u1EA1c </label><div class="input-wrapper" data-v-9f5abf74><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.address)} class="${ssrRenderClass([{ "editable": editable.value }, "form-input"])}" data-v-9f5abf74>`);
        if (editable.value) {
          _push(`<div class="input-status" data-v-9f5abf74><svg viewBox="0 0 24 24" class="status-icon" data-v-9f5abf74><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-9f5abf74></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
        if (otpRequired.value) {
          _push(`<div class="otp-section" data-v-9f5abf74><div class="otp-header" data-v-9f5abf74><h3 data-v-9f5abf74>X\xE1c th\u1EF1c OTP</h3><p data-v-9f5abf74>Vui l\xF2ng nh\u1EADp m\xE3 OTP \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn email c\u1EE7a b\u1EA1n</p></div><div class="otp-input-group" data-v-9f5abf74><div class="otp-inputs" data-v-9f5abf74><!--[-->`);
          ssrRenderList(otpDigits.value, (digit, index) => {
            _push(`<input type="text" maxlength="1"${ssrRenderAttr("value", otpDigits.value[index])} class="otp-digit" data-v-9f5abf74>`);
          });
          _push(`<!--]--></div><button type="button" class="resend-btn"${ssrIncludeBooleanAttr(resendCooldown.value > 0) ? " disabled" : ""} data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" data-v-9f5abf74></path></svg> ${ssrInterpolate(resendCooldown.value > 0 ? `G\u1EEDi l\u1EA1i sau ${resendCooldown.value}s` : "G\u1EEDi l\u1EA1i OTP")}</button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (editable.value) {
          _push(`<div class="form-actions" data-v-9f5abf74><button type="button" class="cancel-btn" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-9f5abf74></path></svg> H\u1EE7y </button><button type="submit" class="save-btn"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} data-v-9f5abf74>`);
          if (!isSaving.value) {
            _push(`<svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-9f5abf74></path></svg>`);
          } else {
            _push(`<div class="loading-spinner" data-v-9f5abf74></div>`);
          }
          _push(` ${ssrInterpolate(isSaving.value ? "\u0110ang l\u01B0u..." : "L\u01B0u thay \u0111\u1ED5i")}</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value === "history") {
        _push(`<div class="${ssrRenderClass([{ "animate-in": tabAnimationKey.value === "history" }, "tab-content"])}" data-v-9f5abf74><div class="content-card" data-v-9f5abf74><div class="card-header" data-v-9f5abf74><h2 class="card-title" data-v-9f5abf74><svg viewBox="0 0 24 24" class="title-icon" data-v-9f5abf74><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" data-v-9f5abf74></path></svg> L\u1ECBch s\u1EED s\u1EED d\u1EE5ng d\u1ECBch v\u1EE5 </h2><div class="card-actions" data-v-9f5abf74><button class="export-btn" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" data-v-9f5abf74></path></svg> Xu\u1EA5t d\u1EEF li\u1EC7u </button></div></div><div class="filters-section" data-v-9f5abf74><div class="filter-group" data-v-9f5abf74><label class="filter-label" data-v-9f5abf74><svg viewBox="0 0 24 24" class="filter-icon" data-v-9f5abf74><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" data-v-9f5abf74></path></svg> T\xECm ki\u1EBFm </label><input${ssrRenderAttr("value", filters.value.keyword)} placeholder="T\xECm theo t\xEAn d\u1ECBch v\u1EE5/ph\xF2ng..." class="filter-input" data-v-9f5abf74></div><div class="filter-group" data-v-9f5abf74><label class="filter-label" data-v-9f5abf74><svg viewBox="0 0 24 24" class="filter-icon" data-v-9f5abf74><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-9f5abf74></path></svg> Lo\u1EA1i d\u1ECBch v\u1EE5 </label><select class="filter-select" data-v-9f5abf74><option value="" data-v-9f5abf74${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "") : ssrLooseEqual(filters.value.type, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3</option><option value="room" data-v-9f5abf74${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "room") : ssrLooseEqual(filters.value.type, "room")) ? " selected" : ""}>\u0110\u1EB7t ph\xF2ng</option><option value="service" data-v-9f5abf74${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "service") : ssrLooseEqual(filters.value.type, "service")) ? " selected" : ""}>D\u1ECBch v\u1EE5</option></select></div><div class="filter-group" data-v-9f5abf74><label class="filter-label" data-v-9f5abf74><svg viewBox="0 0 24 24" class="filter-icon" data-v-9f5abf74><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-9f5abf74></path></svg> Th\u1EDDi gian </label><select class="filter-select" data-v-9f5abf74><option value="" data-v-9f5abf74${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "") : ssrLooseEqual(filters.value.time, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 th\u1EDDi gian</option><option value="7" data-v-9f5abf74${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "7") : ssrLooseEqual(filters.value.time, "7")) ? " selected" : ""}>7 ng\xE0y qua</option><option value="30" data-v-9f5abf74${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "30") : ssrLooseEqual(filters.value.time, "30")) ? " selected" : ""}>30 ng\xE0y qua</option><option value="90" data-v-9f5abf74${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "90") : ssrLooseEqual(filters.value.time, "90")) ? " selected" : ""}>3 th\xE1ng qua</option></select></div></div><div class="table-container" data-v-9f5abf74><table class="history-table" data-v-9f5abf74><thead data-v-9f5abf74><tr data-v-9f5abf74><th data-v-9f5abf74>D\u1ECBch v\u1EE5</th><th data-v-9f5abf74>Lo\u1EA1i</th><th data-v-9f5abf74>Ng\xE0y s\u1EED d\u1EE5ng</th><th data-v-9f5abf74>Tr\u1EA1ng th\xE1i</th><th data-v-9f5abf74>Chi ph\xED</th><th data-v-9f5abf74>Thao t\xE1c</th></tr></thead><tbody data-v-9f5abf74><!--[-->`);
        ssrRenderList(paginatedHistory.value, (item, index) => {
          _push(`<tr class="table-row" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}" data-v-9f5abf74><td data-v-9f5abf74><div class="service-info" data-v-9f5abf74><div class="service-icon" data-v-9f5abf74>`);
          if (item.type === "room") {
            _push(`<svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-9f5abf74></path></svg>`);
          } else {
            _push(`<svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-9f5abf74></path></svg>`);
          }
          _push(`</div><span class="service-name" data-v-9f5abf74>${ssrInterpolate(item.name)}</span></div></td><td data-v-9f5abf74><span class="${ssrRenderClass([item.type, "service-type"])}" data-v-9f5abf74>${ssrInterpolate(item.type === "room" ? "\u0110\u1EB7t ph\xF2ng" : "D\u1ECBch v\u1EE5")}</span></td><td data-v-9f5abf74>${ssrInterpolate(formatDate(item.date))}</td><td data-v-9f5abf74><span class="${ssrRenderClass([getStatusClass(item.status), "status-badge"])}" data-v-9f5abf74>${ssrInterpolate(item.status)}</span></td><td class="price-cell" data-v-9f5abf74>${ssrInterpolate(formatPrice(item.price))}</td><td data-v-9f5abf74><div class="action-buttons" data-v-9f5abf74><button class="action-btn view" title="Xem chi ti\u1EBFt" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" data-v-9f5abf74></path></svg></button><button class="action-btn download" title="T\u1EA3i h\xF3a \u0111\u01A1n" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" data-v-9f5abf74></path></svg></button></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
        if (totalPages.value > 1) {
          _push(`<div class="pagination-container" data-v-9f5abf74><div class="pagination-info" data-v-9f5abf74> Hi\u1EC3n th\u1ECB ${ssrInterpolate((currentPage.value - 1) * itemsPerPage + 1)} - ${ssrInterpolate(Math.min(currentPage.value * itemsPerPage, filteredHistory.value.length))} trong t\u1ED5ng s\u1ED1 ${ssrInterpolate(filteredHistory.value.length)} b\u1EA3n ghi </div><div class="pagination" data-v-9f5abf74><button class="page-btn"${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" data-v-9f5abf74></path></svg></button><!--[-->`);
          ssrRenderList(visiblePages.value, (page) => {
            _push(`<button class="${ssrRenderClass([{ "active": currentPage.value === page }, "page-btn"])}" data-v-9f5abf74>${ssrInterpolate(page)}</button>`);
          });
          _push(`<!--]--><button class="page-btn"${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" data-v-9f5abf74></path></svg></button></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value === "settings") {
        _push(`<div class="${ssrRenderClass([{ "animate-in": tabAnimationKey.value === "settings" }, "tab-content"])}" data-v-9f5abf74><div class="content-card" data-v-9f5abf74><div class="card-header" data-v-9f5abf74><h2 class="card-title" data-v-9f5abf74><svg viewBox="0 0 24 24" class="title-icon" data-v-9f5abf74><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" data-v-9f5abf74></path></svg> C\xE0i \u0111\u1EB7t t\xE0i kho\u1EA3n </h2></div><div class="settings-grid" data-v-9f5abf74><div class="setting-card" data-v-9f5abf74><div class="setting-icon" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-9f5abf74></path></svg></div><div class="setting-content" data-v-9f5abf74><h3 data-v-9f5abf74>Th\xF4ng b\xE1o Email</h3><p data-v-9f5abf74>Nh\u1EADn th\xF4ng b\xE1o v\u1EC1 \u0111\u1EB7t ph\xF2ng v\xE0 \u01B0u \u0111\xE3i</p><label class="toggle-switch" data-v-9f5abf74><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(settings.value.emailNotifications) ? ssrLooseContain(settings.value.emailNotifications, null) : settings.value.emailNotifications) ? " checked" : ""} data-v-9f5abf74><span class="slider" data-v-9f5abf74></span></label></div></div><div class="setting-card" data-v-9f5abf74><div class="setting-icon" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-9f5abf74></path></svg></div><div class="setting-content" data-v-9f5abf74><h3 data-v-9f5abf74>Th\xF4ng b\xE1o SMS</h3><p data-v-9f5abf74>Nh\u1EADn SMS x\xE1c nh\u1EADn v\xE0 nh\u1EAFc nh\u1EDF</p><label class="toggle-switch" data-v-9f5abf74><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(settings.value.smsNotifications) ? ssrLooseContain(settings.value.smsNotifications, null) : settings.value.smsNotifications) ? " checked" : ""} data-v-9f5abf74><span class="slider" data-v-9f5abf74></span></label></div></div><div class="setting-card" data-v-9f5abf74><div class="setting-icon" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-9f5abf74></path></svg></div><div class="setting-content" data-v-9f5abf74><h3 data-v-9f5abf74>Ch\u1EBF \u0111\u1ED9 ri\xEAng t\u01B0</h3><p data-v-9f5abf74>\u1EA8n th\xF4ng tin c\xE1 nh\xE2n kh\u1ECFi ng\u01B0\u1EDDi kh\xE1c</p><label class="toggle-switch" data-v-9f5abf74><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(settings.value.privateMode) ? ssrLooseContain(settings.value.privateMode, null) : settings.value.privateMode) ? " checked" : ""} data-v-9f5abf74><span class="slider" data-v-9f5abf74></span></label></div></div><div class="setting-card" data-v-9f5abf74><div class="setting-icon" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-9f5abf74></path></svg></div><div class="setting-content" data-v-9f5abf74><h3 data-v-9f5abf74>\u0110\u0103ng nh\u1EADp 2 l\u1EDBp</h3><p data-v-9f5abf74>T\u0103ng c\u01B0\u1EDDng b\u1EA3o m\u1EADt v\u1EDBi x\xE1c th\u1EF1c 2 y\u1EBFu t\u1ED1</p><label class="toggle-switch" data-v-9f5abf74><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(settings.value.twoFactorAuth) ? ssrLooseContain(settings.value.twoFactorAuth, null) : settings.value.twoFactorAuth) ? " checked" : ""} data-v-9f5abf74><span class="slider" data-v-9f5abf74></span></label></div></div></div><div class="danger-zone" data-v-9f5abf74><h3 data-v-9f5abf74>V\xF9ng nguy hi\u1EC3m</h3><div class="danger-actions" data-v-9f5abf74><button class="danger-btn" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" data-v-9f5abf74></path></svg> \u0110\u1ED5i m\u1EADt kh\u1EA9u </button><button class="danger-btn delete" data-v-9f5abf74><svg viewBox="0 0 24 24" data-v-9f5abf74><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" data-v-9f5abf74></path></svg> X\xF3a t\xE0i kho\u1EA3n </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (successMessage.value) {
        _push(`<div class="${ssrRenderClass([{ "show": showSuccessMessage.value }, "success-message"])}" data-v-9f5abf74><div class="message-content" data-v-9f5abf74><svg viewBox="0 0 24 24" class="message-icon" data-v-9f5abf74><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-9f5abf74></path></svg><span data-v-9f5abf74>${ssrInterpolate(successMessage.value)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-9f5abf74><div class="toast-content" data-v-9f5abf74>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-9f5abf74><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-9f5abf74></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-9f5abf74><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-9f5abf74></path></svg>`);
        }
        _push(`<span data-v-9f5abf74>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f5abf74"]]);

export { Profile as default };
//# sourceMappingURL=Profile-DY7j4SKs.mjs.map
