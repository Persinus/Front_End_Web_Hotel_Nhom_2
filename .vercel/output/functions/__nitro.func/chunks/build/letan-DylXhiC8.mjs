import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from 'vue/server-renderer';
import { e as useThemeStore } from './server.mjs';
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
import 'vue-router';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';
import 'pinia';

const itemsPerPage = 5;
const itemsPerPageService = 5;
const _sfc_main = {
  __name: "letan",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    theme.initializeDarkMode();
    const currentTab = ref("phong");
    const sidebarCollapsed = ref(false);
    const isVisible = ref(false);
    const rooms = ref([]);
    const services = ref([]);
    const currentPage = ref(0);
    const currentPageService = ref(0);
    const showEditModal = ref(false);
    const showEditServiceModal = ref(false);
    const editingRoom = ref(null);
    const editingService = ref(null);
    const isSaving = ref(false);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const roomFilter = ref("");
    const searchRoom = ref("");
    const searchService = ref("");
    const notificationsEnabled = ref(true);
    const autoRefresh = ref(false);
    const todayCheckins = ref(12);
    const todayCheckouts = ref(8);
    const occupancyRate = ref(85);
    const sidebarItems = [
      { key: "khachhang", title: "Kh\xE1ch h\xE0ng", icon: "person" },
      { key: "phong", title: "Qu\u1EA3n l\xFD ph\xF2ng", icon: "hotel" },
      { key: "dichvu", title: "D\u1ECBch v\u1EE5", icon: "shopping_cart" },
      { key: "caidat", title: "C\xE0i \u0111\u1EB7t", icon: "settings" }
    ];
    const filteredRooms = computed(() => {
      let filtered = rooms.value;
      if (roomFilter.value) {
        filtered = filtered.filter((room) => room.tinhTrang === roomFilter.value);
      }
      if (searchRoom.value) {
        filtered = filtered.filter(
          (room) => room.loaiPhong.toLowerCase().includes(searchRoom.value.toLowerCase()) || room.maPhong.toLowerCase().includes(searchRoom.value.toLowerCase())
        );
      }
      return filtered;
    });
    const filteredServices = computed(() => {
      let filtered = services.value;
      if (searchService.value) {
        filtered = filtered.filter(
          (service) => service.tenDichVu.toLowerCase().includes(searchService.value.toLowerCase())
        );
      }
      return filtered;
    });
    const paginatedRooms = computed(() => {
      const start = currentPage.value * itemsPerPage;
      return filteredRooms.value.slice(start, start + itemsPerPage);
    });
    const paginatedServices = computed(() => {
      const start = currentPageService.value * itemsPerPageService;
      return filteredServices.value.slice(start, start + itemsPerPageService);
    });
    const totalPages = computed(() => Math.ceil(filteredRooms.value.length / itemsPerPage));
    const totalPagesService = computed(() => Math.ceil(filteredServices.value.length / itemsPerPageService));
    const visiblePages = computed(() => {
      const total = totalPages.value;
      const current = currentPage.value + 1;
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
    const visiblePagesService = computed(() => {
      const total = totalPagesService.value;
      const current = currentPageService.value + 1;
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
    const availableRooms = computed(() => rooms.value.filter((room) => room.tinhTrang === "1").length);
    const bookedRooms = computed(() => rooms.value.filter((room) => room.tinhTrang === "2").length);
    const occupiedRooms = computed(() => rooms.value.filter((room) => room.tinhTrang === "3").length);
    const cleaningRooms = computed(() => rooms.value.filter((room) => room.tinhTrang === "4").length);
    const getIconPath = (iconName) => {
      const icons = {
        person: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
        hotel: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
        shopping_cart: "M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
        settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
      };
      return icons[iconName] || "";
    };
    const getStatusText = (status) => {
      switch (status) {
        case "1":
          return "C\xF2n tr\u1ED1ng";
        case "2":
          return "\u0110\xE3 \u0111\u1EB7t";
        case "3":
          return "\u0110ang s\u1EED d\u1EE5ng";
        case "4":
          return "\u0110ang v\u1EC7 sinh";
        default:
          return "Kh\xF4ng x\xE1c \u0111\u1ECBnh";
      }
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "1":
          return "status-available";
        case "2":
          return "status-booked";
        case "3":
          return "status-in-use";
        case "4":
          return "status-cleaning";
        default:
          return "";
      }
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN").format(price);
    };
    const getServiceDescription = (serviceName) => {
      const descriptions = {
        "Spa": "D\u1ECBch v\u1EE5 massage v\xE0 th\u01B0 gi\xE3n cao c\u1EA5p",
        "Buffet": "\u0102n s\xE1ng buffet phong ph\xFA",
        "Gym": "Ph\xF2ng t\u1EADp gym hi\u1EC7n \u0111\u1EA1i",
        "Pool": "H\u1ED3 b\u01A1i ngo\xE0i tr\u1EDDi",
        "Laundry": "D\u1ECBch v\u1EE5 gi\u1EB7t \u1EE7i",
        "Transport": "D\u1ECBch v\u1EE5 \u0111\u01B0a \u0111\xF3n"
      };
      for (const [key, desc] of Object.entries(descriptions)) {
        if (serviceName.toLowerCase().includes(key.toLowerCase())) {
          return desc;
        }
      }
      return "D\u1ECBch v\u1EE5 ch\u1EA5t l\u01B0\u1EE3ng cao";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["letan-page", { "dark-mode": unref(theme).isDarkMode }]
      }, _attrs))} data-v-72009d8d><div class="background-animation" data-v-72009d8d><div class="floating-shape shape-1" data-v-72009d8d></div><div class="floating-shape shape-2" data-v-72009d8d></div><div class="floating-shape shape-3" data-v-72009d8d></div></div><div class="${ssrRenderClass([{ "collapsed": sidebarCollapsed.value }, "modern-sidebar"])}" data-v-72009d8d><div class="sidebar-header" data-v-72009d8d><div class="hotel-logo" data-v-72009d8d><div class="logo-icon" data-v-72009d8d><svg viewBox="0 0 24 24" class="logo-svg" data-v-72009d8d><path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.76.21 3.91 0 5.16-1 9-5.45 9-11V7l-10-5z" data-v-72009d8d></path><path d="M12 7v5l4 2-4 2v5" data-v-72009d8d></path></svg></div>`);
      if (!sidebarCollapsed.value) {
        _push(`<div class="logo-text" data-v-72009d8d><h3 data-v-72009d8d>OceanView</h3><span data-v-72009d8d>Qu\u1EA3n l\xFD l\u1EC5 t\xE2n</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="sidebar-toggle" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" data-v-72009d8d></path></svg></button></div><nav class="sidebar-nav" data-v-72009d8d><!--[-->`);
      ssrRenderList(sidebarItems, (item) => {
        _push(`<div class="${ssrRenderClass([{ "active": currentTab.value === item.key }, "nav-item"])}" data-v-72009d8d><div class="nav-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path${ssrRenderAttr("d", getIconPath(item.icon))} data-v-72009d8d></path></svg></div>`);
        if (!sidebarCollapsed.value) {
          _push(`<span class="nav-label" data-v-72009d8d>${ssrInterpolate(item.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (currentTab.value === item.key) {
          _push(`<div class="nav-indicator" data-v-72009d8d></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></nav>`);
      if (!sidebarCollapsed.value) {
        _push(`<div class="sidebar-footer" data-v-72009d8d><div class="user-profile" data-v-72009d8d><div class="user-avatar" data-v-72009d8d><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face" alt="User Avatar" data-v-72009d8d><div class="status-indicator online" data-v-72009d8d></div></div><div class="user-info" data-v-72009d8d><span class="user-name" data-v-72009d8d>Nguy\u1EC5n V\u0103n A</span><span class="user-role" data-v-72009d8d>L\u1EC5 t\xE2n tr\u01B0\u1EDFng</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "sidebar-collapsed": sidebarCollapsed.value }, "main-content"])}" data-v-72009d8d><div class="dashboard-header" data-v-72009d8d><div class="header-content" data-v-72009d8d><h1 class="page-title" data-v-72009d8d><span class="title-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-72009d8d></path></svg></span> H\u1EC7 th\u1ED1ng qu\u1EA3n l\xFD l\u1EC5 t\xE2n </h1><div class="header-stats" data-v-72009d8d><div class="stat-card" data-v-72009d8d><div class="stat-icon checkin" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-72009d8d></path></svg></div><div class="stat-info" data-v-72009d8d><span class="stat-number" data-v-72009d8d>${ssrInterpolate(todayCheckins.value)}</span><span class="stat-label" data-v-72009d8d>Check-in h\xF4m nay</span></div></div><div class="stat-card" data-v-72009d8d><div class="stat-icon checkout" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6l-1 1H5v2h14V4z" data-v-72009d8d></path></svg></div><div class="stat-info" data-v-72009d8d><span class="stat-number" data-v-72009d8d>${ssrInterpolate(todayCheckouts.value)}</span><span class="stat-label" data-v-72009d8d>Check-out h\xF4m nay</span></div></div><div class="stat-card" data-v-72009d8d><div class="stat-icon occupancy" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-72009d8d></path></svg></div><div class="stat-info" data-v-72009d8d><span class="stat-number" data-v-72009d8d>${ssrInterpolate(occupancyRate.value)}%</span><span class="stat-label" data-v-72009d8d>T\u1EF7 l\u1EC7 l\u1EA5p \u0111\u1EA7y</span></div></div></div></div></div><div class="tab-container" data-v-72009d8d>`);
      if (currentTab.value === "phong") {
        _push(`<div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "tab-content"])}" data-v-72009d8d><div class="content-header" data-v-72009d8d><div class="section-info" data-v-72009d8d><h2 class="section-title" data-v-72009d8d><svg viewBox="0 0 24 24" class="section-icon" data-v-72009d8d><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-72009d8d></path></svg> Qu\u1EA3n l\xFD ph\xF2ng kh\xE1ch s\u1EA1n </h2><p class="section-description" data-v-72009d8d>Theo d\xF5i t\xECnh tr\u1EA1ng ph\xF2ng, \u0111\u1EB7t ph\xF2ng v\xE0 qu\u1EA3n l\xFD kh\xE1ch h\xE0ng</p></div><div class="content-actions" data-v-72009d8d><button class="action-btn primary" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" data-v-72009d8d></path></svg> L\xE0m m\u1EDBi </button><button class="action-btn secondary" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" data-v-72009d8d></path></svg> Xu\u1EA5t d\u1EEF li\u1EC7u </button></div></div><div class="room-overview" data-v-72009d8d><div class="overview-card available" data-v-72009d8d><div class="overview-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-72009d8d></path></svg></div><div class="overview-info" data-v-72009d8d><span class="overview-number" data-v-72009d8d>${ssrInterpolate(availableRooms.value)}</span><span class="overview-label" data-v-72009d8d>Ph\xF2ng tr\u1ED1ng</span></div></div><div class="overview-card booked" data-v-72009d8d><div class="overview-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-72009d8d></path></svg></div><div class="overview-info" data-v-72009d8d><span class="overview-number" data-v-72009d8d>${ssrInterpolate(bookedRooms.value)}</span><span class="overview-label" data-v-72009d8d>\u0110\xE3 \u0111\u1EB7t</span></div></div><div class="overview-card occupied" data-v-72009d8d><div class="overview-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-72009d8d></path></svg></div><div class="overview-info" data-v-72009d8d><span class="overview-number" data-v-72009d8d>${ssrInterpolate(occupiedRooms.value)}</span><span class="overview-label" data-v-72009d8d>\u0110ang s\u1EED d\u1EE5ng</span></div></div><div class="overview-card cleaning" data-v-72009d8d><div class="overview-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19.36 2.72L20.78 4.14l-1.93 1.93c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5-.62 0-1.19-.2-1.64-.55L12.93 12l5.78 5.78c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L11.52 13.4 9.8 15.12c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5c.62 0 1.19.2 1.64.55l1.72-1.72L4.43 7.31c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5.78 5.78 2.33-2.33c-.35-.45-.55-1.02-.55-1.64 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .62-.2 1.19-.55 1.64l1.93-1.93z" data-v-72009d8d></path></svg></div><div class="overview-info" data-v-72009d8d><span class="overview-number" data-v-72009d8d>${ssrInterpolate(cleaningRooms.value)}</span><span class="overview-label" data-v-72009d8d>\u0110ang d\u1ECDn d\u1EB9p</span></div></div></div><div class="table-container" data-v-72009d8d><div class="table-header" data-v-72009d8d><h3 data-v-72009d8d>Danh s\xE1ch ph\xF2ng</h3><div class="table-filters" data-v-72009d8d><select class="filter-select" data-v-72009d8d><option value="" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(roomFilter.value) ? ssrLooseContain(roomFilter.value, "") : ssrLooseEqual(roomFilter.value, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i</option><option value="1" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(roomFilter.value) ? ssrLooseContain(roomFilter.value, "1") : ssrLooseEqual(roomFilter.value, "1")) ? " selected" : ""}>C\xF2n tr\u1ED1ng</option><option value="2" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(roomFilter.value) ? ssrLooseContain(roomFilter.value, "2") : ssrLooseEqual(roomFilter.value, "2")) ? " selected" : ""}>\u0110\xE3 \u0111\u1EB7t</option><option value="3" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(roomFilter.value) ? ssrLooseContain(roomFilter.value, "3") : ssrLooseEqual(roomFilter.value, "3")) ? " selected" : ""}>\u0110ang s\u1EED d\u1EE5ng</option><option value="4" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(roomFilter.value) ? ssrLooseContain(roomFilter.value, "4") : ssrLooseEqual(roomFilter.value, "4")) ? " selected" : ""}>\u0110ang v\u1EC7 sinh</option></select><input type="text"${ssrRenderAttr("value", searchRoom.value)} placeholder="T\xECm ki\u1EBFm ph\xF2ng..." class="search-input" data-v-72009d8d></div></div><div class="modern-table" data-v-72009d8d><table data-v-72009d8d><thead data-v-72009d8d><tr data-v-72009d8d><th data-v-72009d8d>#</th><th data-v-72009d8d>T\xEAn ph\xF2ng</th><th data-v-72009d8d>Ti\u1EC7n nghi</th><th data-v-72009d8d>Tr\u1EA1ng th\xE1i</th><th data-v-72009d8d>Kh\xE1ch h\xE0ng</th><th data-v-72009d8d>Thao t\xE1c</th></tr></thead><tbody data-v-72009d8d><!--[-->`);
        ssrRenderList(paginatedRooms.value, (room, index) => {
          _push(`<tr class="table-row" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}" data-v-72009d8d><td data-v-72009d8d>${ssrInterpolate(currentPage.value * itemsPerPage + index + 1)}</td><td data-v-72009d8d><div class="room-info" data-v-72009d8d><div class="room-number" data-v-72009d8d>${ssrInterpolate(room.loaiPhong)}</div><div class="room-code" data-v-72009d8d>${ssrInterpolate(room.maPhong)}</div></div></td><td data-v-72009d8d><div class="amenities-list" data-v-72009d8d><!--[-->`);
          ssrRenderList(room.tienNghiList.slice(0, 2), (amenity) => {
            _push(`<span class="amenity-tag" data-v-72009d8d>${ssrInterpolate(amenity)}</span>`);
          });
          _push(`<!--]-->`);
          if (room.tienNghiList.length > 2) {
            _push(`<span class="more-amenities" data-v-72009d8d> +${ssrInterpolate(room.tienNghiList.length - 2)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></td><td data-v-72009d8d><div class="${ssrRenderClass([getStatusClass(room.tinhTrang), "status-badge"])}" data-v-72009d8d><div class="status-indicator" data-v-72009d8d></div><span data-v-72009d8d>${ssrInterpolate(getStatusText(room.tinhTrang))}</span></div></td><td data-v-72009d8d><div class="guest-info" data-v-72009d8d>`);
          if (room.tinhTrang === "2" || room.tinhTrang === "3") {
            _push(`<span data-v-72009d8d> Nguy\u1EC5n V\u0103n ${ssrInterpolate(String.fromCharCode(65 + index))}</span>`);
          } else {
            _push(`<span class="no-guest" data-v-72009d8d>Ch\u01B0a c\xF3 kh\xE1ch</span>`);
          }
          _push(`</div></td><td data-v-72009d8d><div class="action-buttons" data-v-72009d8d><button class="action-btn edit" title="Ch\u1EC9nh s\u1EEDa" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-72009d8d></path></svg></button><button class="action-btn view" title="Xem chi ti\u1EBFt" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" data-v-72009d8d></path></svg></button></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="pagination-container" data-v-72009d8d><div class="pagination-info" data-v-72009d8d> Hi\u1EC3n th\u1ECB ${ssrInterpolate(currentPage.value * itemsPerPage + 1)} - ${ssrInterpolate(Math.min((currentPage.value + 1) * itemsPerPage, filteredRooms.value.length))} trong t\u1ED5ng s\u1ED1 ${ssrInterpolate(filteredRooms.value.length)} ph\xF2ng </div><div class="pagination" data-v-72009d8d><button class="page-btn"${ssrIncludeBooleanAttr(currentPage.value === 0) ? " disabled" : ""} data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" data-v-72009d8d></path></svg></button><!--[-->`);
        ssrRenderList(visiblePages.value, (page) => {
          _push(`<button class="${ssrRenderClass([{ "active": currentPage.value === page - 1 }, "page-btn"])}" data-v-72009d8d>${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--><button class="page-btn"${ssrIncludeBooleanAttr(currentPage.value >= totalPages.value - 1) ? " disabled" : ""} data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" data-v-72009d8d></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value === "dichvu") {
        _push(`<div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "tab-content"])}" data-v-72009d8d><div class="content-header" data-v-72009d8d><div class="section-info" data-v-72009d8d><h2 class="section-title" data-v-72009d8d><svg viewBox="0 0 24 24" class="section-icon" data-v-72009d8d><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" data-v-72009d8d></path></svg> Qu\u1EA3n l\xFD d\u1ECBch v\u1EE5 kh\xE1ch s\u1EA1n </h2><p class="section-description" data-v-72009d8d>Qu\u1EA3n l\xFD c\xE1c d\u1ECBch v\u1EE5 v\xE0 gi\xE1 c\u1EA3 cho kh\xE1ch h\xE0ng</p></div><div class="content-actions" data-v-72009d8d><button class="action-btn primary" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" data-v-72009d8d></path></svg> Th\xEAm d\u1ECBch v\u1EE5 </button></div></div><div class="table-container" data-v-72009d8d><div class="table-header" data-v-72009d8d><h3 data-v-72009d8d>Danh s\xE1ch d\u1ECBch v\u1EE5</h3><div class="table-filters" data-v-72009d8d><input type="text"${ssrRenderAttr("value", searchService.value)} placeholder="T\xECm ki\u1EBFm d\u1ECBch v\u1EE5..." class="search-input" data-v-72009d8d></div></div><div class="modern-table" data-v-72009d8d><table data-v-72009d8d><thead data-v-72009d8d><tr data-v-72009d8d><th data-v-72009d8d>#</th><th data-v-72009d8d>T\xEAn d\u1ECBch v\u1EE5</th><th data-v-72009d8d>M\xF4 t\u1EA3</th><th data-v-72009d8d>Gi\xE1</th><th data-v-72009d8d>Tr\u1EA1ng th\xE1i</th><th data-v-72009d8d>Thao t\xE1c</th></tr></thead><tbody data-v-72009d8d><!--[-->`);
        ssrRenderList(paginatedServices.value, (service, index) => {
          _push(`<tr class="table-row" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}" data-v-72009d8d><td data-v-72009d8d>${ssrInterpolate(currentPageService.value * itemsPerPageService + index + 1)}</td><td data-v-72009d8d><div class="service-info" data-v-72009d8d><div class="service-name" data-v-72009d8d>${ssrInterpolate(service.tenDichVu)}</div><div class="service-code" data-v-72009d8d>${ssrInterpolate(service.maDichVu)}</div></div></td><td data-v-72009d8d><div class="service-description" data-v-72009d8d>${ssrInterpolate(getServiceDescription(service.tenDichVu))}</div></td><td data-v-72009d8d><div class="price-info" data-v-72009d8d><span class="price" data-v-72009d8d>${ssrInterpolate(formatPrice(service.donGia))}</span><span class="currency" data-v-72009d8d>VN\u0110</span></div></td><td data-v-72009d8d><div class="status-badge active" data-v-72009d8d><div class="status-indicator" data-v-72009d8d></div><span data-v-72009d8d>\u0110ang ho\u1EA1t \u0111\u1ED9ng</span></div></td><td data-v-72009d8d><div class="action-buttons" data-v-72009d8d><button class="action-btn edit" title="Ch\u1EC9nh s\u1EEDa" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-72009d8d></path></svg></button><button class="action-btn delete" title="X\xF3a" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" data-v-72009d8d></path></svg></button></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="pagination-container" data-v-72009d8d><div class="pagination-info" data-v-72009d8d> Hi\u1EC3n th\u1ECB ${ssrInterpolate(currentPageService.value * itemsPerPageService + 1)} - ${ssrInterpolate(Math.min((currentPageService.value + 1) * itemsPerPageService, filteredServices.value.length))} trong t\u1ED5ng s\u1ED1 ${ssrInterpolate(filteredServices.value.length)} d\u1ECBch v\u1EE5 </div><div class="pagination" data-v-72009d8d><button class="page-btn"${ssrIncludeBooleanAttr(currentPageService.value === 0) ? " disabled" : ""} data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" data-v-72009d8d></path></svg></button><!--[-->`);
        ssrRenderList(visiblePagesService.value, (page) => {
          _push(`<button class="${ssrRenderClass([{ "active": currentPageService.value === page - 1 }, "page-btn"])}" data-v-72009d8d>${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--><button class="page-btn"${ssrIncludeBooleanAttr(currentPageService.value >= totalPagesService.value - 1) ? " disabled" : ""} data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" data-v-72009d8d></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value === "khachhang") {
        _push(`<div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "tab-content"])}" data-v-72009d8d><div class="content-header" data-v-72009d8d><div class="section-info" data-v-72009d8d><h2 class="section-title" data-v-72009d8d><svg viewBox="0 0 24 24" class="section-icon" data-v-72009d8d><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.3-1.74-2.39-1.74-.4 0-.8.1-1.15.29l-3.12 1.7c-.3.17-.65.25-1 .25-.53 0-1.04-.21-1.41-.59L9 6.41c-.38-.38-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41L11.41 1c.38-.38.88-.59 1.41-.59.53 0 1.04.21 1.41.59L16.59 3c.38.38.59.88.59 1.41 0 .53-.21 1.04-.59 1.41L15.18 7.23l2.54 7.63H20v6h-4z" data-v-72009d8d></path></svg> Qu\u1EA3n l\xFD kh\xE1ch h\xE0ng </h2><p class="section-description" data-v-72009d8d>Th\xF4ng tin v\xE0 l\u1ECBch s\u1EED kh\xE1ch h\xE0ng</p></div></div><div class="coming-soon" data-v-72009d8d><div class="coming-soon-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-72009d8d></path></svg></div><h3 data-v-72009d8d>T\xEDnh n\u0103ng \u0111ang ph\xE1t tri\u1EC3n</h3><p data-v-72009d8d>Ch\u1EE9c n\u0103ng qu\u1EA3n l\xFD kh\xE1ch h\xE0ng s\u1EBD s\u1EDBm \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value === "caidat") {
        _push(`<div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "tab-content"])}" data-v-72009d8d><div class="content-header" data-v-72009d8d><div class="section-info" data-v-72009d8d><h2 class="section-title" data-v-72009d8d><svg viewBox="0 0 24 24" class="section-icon" data-v-72009d8d><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" data-v-72009d8d></path></svg> C\xE0i \u0111\u1EB7t h\u1EC7 th\u1ED1ng </h2><p class="section-description" data-v-72009d8d>C\u1EA5u h\xECnh v\xE0 t\xF9y ch\u1EC9nh h\u1EC7 th\u1ED1ng</p></div></div><div class="settings-grid" data-v-72009d8d><div class="setting-card" data-v-72009d8d><div class="setting-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-72009d8d></path></svg></div><h3 data-v-72009d8d>Ch\u1EBF \u0111\u1ED9 t\u1ED1i</h3><p data-v-72009d8d>B\u1EADt/t\u1EAFt giao di\u1EC7n t\u1ED1i</p><label class="toggle-switch" data-v-72009d8d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(theme).isDarkMode) ? ssrLooseContain(unref(theme).isDarkMode, null) : unref(theme).isDarkMode) ? " checked" : ""} data-v-72009d8d><span class="slider" data-v-72009d8d></span></label></div><div class="setting-card" data-v-72009d8d><div class="setting-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-72009d8d></path></svg></div><h3 data-v-72009d8d>Th\xF4ng b\xE1o</h3><p data-v-72009d8d>C\xE0i \u0111\u1EB7t th\xF4ng b\xE1o h\u1EC7 th\u1ED1ng</p><label class="toggle-switch" data-v-72009d8d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(notificationsEnabled.value) ? ssrLooseContain(notificationsEnabled.value, null) : notificationsEnabled.value) ? " checked" : ""} data-v-72009d8d><span class="slider" data-v-72009d8d></span></label></div><div class="setting-card" data-v-72009d8d><div class="setting-icon" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-72009d8d></path></svg></div><h3 data-v-72009d8d>T\u1EF1 \u0111\u1ED9ng l\xE0m m\u1EDBi</h3><p data-v-72009d8d>T\u1EF1 \u0111\u1ED9ng c\u1EADp nh\u1EADt d\u1EEF li\u1EC7u</p><label class="toggle-switch" data-v-72009d8d><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(autoRefresh.value) ? ssrLooseContain(autoRefresh.value, null) : autoRefresh.value) ? " checked" : ""} data-v-72009d8d><span class="slider" data-v-72009d8d></span></label></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (showEditModal.value) {
        _push(`<div class="modal-overlay" data-v-72009d8d><div class="modal-container" data-v-72009d8d><div class="modal-header" data-v-72009d8d><h3 data-v-72009d8d><svg viewBox="0 0 24 24" class="modal-icon" data-v-72009d8d><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-72009d8d></path></svg> Ch\u1EC9nh s\u1EEDa th\xF4ng tin ph\xF2ng </h3><button class="close-btn" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-72009d8d></path></svg></button></div><div class="modal-content" data-v-72009d8d><div class="form-group" data-v-72009d8d><label for="roomName" data-v-72009d8d>T\xEAn ph\xF2ng:</label><input id="roomName" type="text"${ssrRenderAttr("value", editingRoom.value.loaiPhong)} class="form-input" data-v-72009d8d></div><div class="form-group" data-v-72009d8d><label for="roomStatus" data-v-72009d8d>Tr\u1EA1ng th\xE1i ph\xF2ng:</label><select id="roomStatus" class="form-select" data-v-72009d8d><option value="1" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "1") : ssrLooseEqual(editingRoom.value.tinhTrang, "1")) ? " selected" : ""}>C\xF2n tr\u1ED1ng</option><option value="2" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "2") : ssrLooseEqual(editingRoom.value.tinhTrang, "2")) ? " selected" : ""}>\u0110\xE3 \u0111\u1EB7t</option><option value="3" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "3") : ssrLooseEqual(editingRoom.value.tinhTrang, "3")) ? " selected" : ""}>\u0110ang s\u1EED d\u1EE5ng</option><option value="4" data-v-72009d8d${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "4") : ssrLooseEqual(editingRoom.value.tinhTrang, "4")) ? " selected" : ""}>\u0110ang v\u1EC7 sinh</option></select></div></div><div class="modal-actions" data-v-72009d8d><button class="btn-secondary" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-72009d8d></path></svg> H\u1EE7y </button><button class="btn-primary"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} data-v-72009d8d>`);
        if (!isSaving.value) {
          _push(`<svg viewBox="0 0 24 24" data-v-72009d8d><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-72009d8d></path></svg>`);
        } else {
          _push(`<div class="loading-spinner" data-v-72009d8d></div>`);
        }
        _push(` ${ssrInterpolate(isSaving.value ? "\u0110ang l\u01B0u..." : "L\u01B0u thay \u0111\u1ED5i")}</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showEditServiceModal.value) {
        _push(`<div class="modal-overlay" data-v-72009d8d><div class="modal-container" data-v-72009d8d><div class="modal-header" data-v-72009d8d><h3 data-v-72009d8d><svg viewBox="0 0 24 24" class="modal-icon" data-v-72009d8d><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" data-v-72009d8d></path></svg> Ch\u1EC9nh s\u1EEDa th\xF4ng tin d\u1ECBch v\u1EE5 </h3><button class="close-btn" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-72009d8d></path></svg></button></div><div class="modal-content" data-v-72009d8d><div class="form-group" data-v-72009d8d><label for="serviceName" data-v-72009d8d>T\xEAn d\u1ECBch v\u1EE5:</label><input id="serviceName" type="text"${ssrRenderAttr("value", editingService.value.tenDichVu)} class="form-input" data-v-72009d8d></div><div class="form-group" data-v-72009d8d><label for="servicePrice" data-v-72009d8d>Gi\xE1 d\u1ECBch v\u1EE5 (VN\u0110):</label><input id="servicePrice" type="number"${ssrRenderAttr("value", editingService.value.donGia)} class="form-input" min="0" data-v-72009d8d></div></div><div class="modal-actions" data-v-72009d8d><button class="btn-secondary" data-v-72009d8d><svg viewBox="0 0 24 24" data-v-72009d8d><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-72009d8d></path></svg> H\u1EE7y </button><button class="btn-primary"${ssrIncludeBooleanAttr(isSaving.value) ? " disabled" : ""} data-v-72009d8d>`);
        if (!isSaving.value) {
          _push(`<svg viewBox="0 0 24 24" data-v-72009d8d><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-72009d8d></path></svg>`);
        } else {
          _push(`<div class="loading-spinner" data-v-72009d8d></div>`);
        }
        _push(` ${ssrInterpolate(isSaving.value ? "\u0110ang l\u01B0u..." : "L\u01B0u thay \u0111\u1ED5i")}</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-72009d8d><div class="toast-content" data-v-72009d8d>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-72009d8d><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-72009d8d></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-72009d8d><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-72009d8d></path></svg>`);
        }
        _push(`<span data-v-72009d8d>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/letan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const letan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72009d8d"]]);

export { letan as default };
//# sourceMappingURL=letan-DylXhiC8.mjs.map
