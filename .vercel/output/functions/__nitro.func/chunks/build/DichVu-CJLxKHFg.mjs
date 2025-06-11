import { ref, computed, resolveComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { e as useThemeStore } from './server.mjs';
import { useRouter } from 'vue-router';
import { T as TheHeader } from './Header-gOHbRZPv.mjs';
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
import './nuxt-link-UMPBbWdB.mjs';
import './PhanQuyenCookie-BHQDydup.mjs';

const _sfc_main$1 = {
  __name: "CardService",
  __ssrInlineRender: true,
  props: {
    services: { type: Array, required: true }
  },
  setup(__props) {
    function formatPrice(val) {
      if (!val) return "";
      return val.toLocaleString("vi-VN") + "\u20AB";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_icon = resolveComponent("va-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-grid" }, _attrs))} data-v-55f7f63e><!--[-->`);
      ssrRenderList(__props.services, (service) => {
        _push(`<div class="service-card" data-v-55f7f63e><div class="service-image-container" data-v-55f7f63e><img class="service-image"${ssrRenderAttr(
          "src",
          service.hinhAnhDichVu || "https://i.pinimg.com/474x/4f/25/4c/4f254c0dc7c7175f5b05990585c9d1bc.jpg"
        )}${ssrRenderAttr("alt", service.tenDichVu)} data-v-55f7f63e><div class="${ssrRenderClass([service.trangThai === "H\u1EBFt h\xE0ng" ? "status-out" : "status-available", "service-status"])}" data-v-55f7f63e>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: service.trangThai === "H\u1EBFt h\xE0ng" ? "block" : "check_circle",
          color: service.trangThai === "H\u1EBFt h\xE0ng" ? "danger" : "success",
          size: "small"
        }, null, _parent));
        _push(` ${ssrInterpolate(service.trangThai === "H\u1EBFt h\xE0ng" ? "H\u1EBFt h\xE0ng" : "C\xF2n")}</div><div class="overlay-content" data-v-55f7f63e><div style="${ssrRenderStyle({ "font-size": "1.1rem", "font-weight": "700" })}" data-v-55f7f63e> M\xE3 d\u1ECBch v\u1EE5: ${ssrInterpolate(service.maDichVu)}</div><div data-v-55f7f63e>${ssrInterpolate(service.tenDichVu)}</div><div data-v-55f7f63e>Gi\xE1: ${ssrInterpolate(formatPrice(service.donGia))}</div><div data-v-55f7f63e>Tr\u1EA1ng th\xE1i: ${ssrInterpolate(service.trangThai)}</div></div></div><div class="service-card-content" data-v-55f7f63e><h3 class="service-title" data-v-55f7f63e>${ssrInterpolate(service.tenDichVu)}</h3><div class="service-info-row" data-v-55f7f63e><span class="service-type" data-v-55f7f63e>${ssrInterpolate(service.loaiDichVu)}</span><span class="service-unit" data-v-55f7f63e>${ssrInterpolate(service.donViTinh)}</span></div><div class="service-desc" data-v-55f7f63e>${ssrInterpolate(service.moTaDichVu)}</div><div class="service-price-group" data-v-55f7f63e><span class="service-price" data-v-55f7f63e>${ssrInterpolate(formatPrice(service.donGia))}</span></div><button class="order-btn"${ssrIncludeBooleanAttr(service.trangThai === "H\u1EBFt h\xE0ng") ? " disabled" : ""} data-v-55f7f63e><i class="fa fa-cart-plus" data-v-55f7f63e></i> \u0110\u1EB7t d\u1ECBch v\u1EE5 </button></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/CardService.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardService = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-55f7f63e"]]);
const _sfc_main = {
  __name: "DichVu",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    useRouter();
    const services = ref([]);
    const filterName = ref("");
    const filterPrice = ref(null);
    const sortBy = ref("name");
    const selectedCategory = ref("");
    const viewMode = ref("grid");
    const isLoading = ref(true);
    const isVisible = ref(false);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const priceOptions = [
      { value: null, text: "T\u1EA5t c\u1EA3 m\u1EE9c gi\xE1" },
      { value: "low", text: "D\u01B0\u1EDBi 500,000\u20AB" },
      { value: "medium", text: "500,000\u20AB - 1,000,000\u20AB" },
      { value: "high", text: "Tr\xEAn 1,000,000\u20AB" }
    ];
    const sortOptions = [
      { value: "name", text: "T\xEAn A-Z" },
      { value: "price-asc", text: "Gi\xE1 t\u0103ng d\u1EA7n" },
      { value: "price-desc", text: "Gi\xE1 gi\u1EA3m d\u1EA7n" },
      { value: "popular", text: "Ph\u1ED5 bi\u1EBFn nh\u1EA5t" }
    ];
    const serviceCategories = [
      { value: "", label: "T\u1EA5t c\u1EA3", icon: "apps" },
      { value: "spa", label: "Spa & Wellness", icon: "spa" },
      { value: "food", label: "\u1EA8m th\u1EF1c", icon: "restaurant" },
      { value: "transport", label: "V\u1EADn chuy\u1EC3n", icon: "directions_car" },
      { value: "entertainment", label: "Gi\u1EA3i tr\xED", icon: "sports_esports" },
      { value: "business", label: "Doanh nghi\u1EC7p", icon: "business_center" }
    ];
    const hasActiveFilters = computed(() => {
      return filterName.value || filterPrice.value || selectedCategory.value || sortBy.value !== "name";
    });
    const filteredServices = computed(() => {
      let filtered = [...services.value];
      if (filterName.value) {
        filtered = filtered.filter(
          (service) => service.tenDichVu.toLowerCase().includes(filterName.value.toLowerCase())
        );
      }
      if (filterPrice.value) {
        filtered = filtered.filter((service) => {
          const price = service.donGia;
          switch (filterPrice.value) {
            case "low":
              return price < 5e5;
            case "medium":
              return price >= 5e5 && price <= 1e6;
            case "high":
              return price > 1e6;
            default:
              return true;
          }
        });
      }
      if (selectedCategory.value) {
        filtered = filtered.filter(
          (service) => getServiceCategory(service.tenDichVu).toLowerCase().includes(selectedCategory.value)
        );
      }
      switch (sortBy.value) {
        case "name":
          filtered.sort((a, b) => a.tenDichVu.localeCompare(b.tenDichVu));
          break;
        case "price-asc":
          filtered.sort((a, b) => a.donGia - b.donGia);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.donGia - a.donGia);
          break;
        case "popular":
          filtered.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
          break;
      }
      return filtered;
    });
    const getServiceCategory = (serviceName) => {
      const name = serviceName.toLowerCase();
      if (name.includes("spa") || name.includes("massage")) return "Spa & Wellness";
      if (name.includes("\u0103n") || name.includes("th\u1EE9c \u0103n") || name.includes("buffet"))
        return "\u1EA8m th\u1EF1c";
      if (name.includes("xe") || name.includes("\u0111\u01B0a \u0111\xF3n")) return "V\u1EADn chuy\u1EC3n";
      if (name.includes("game") || name.includes("gi\u1EA3i tr\xED")) return "Gi\u1EA3i tr\xED";
      if (name.includes("h\u1ED9i ngh\u1ECB") || name.includes("meeting")) return "Doanh nghi\u1EC7p";
      return "D\u1ECBch v\u1EE5 kh\xE1c";
    };
    const onFilterChange = () => {
    };
    const getResultsDescription = () => {
      if (hasActiveFilters.value) {
        return "K\u1EBFt qu\u1EA3 \u0111\u01B0\u1EE3c l\u1ECDc theo ti\xEAu ch\xED c\u1EE7a b\u1EA1n";
      }
      return "T\u1EA5t c\u1EA3 d\u1ECBch v\u1EE5 c\xF3 s\u1EB5n";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_icon = resolveComponent("va-icon");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_select = resolveComponent("va-select");
      const _component_NuxtChild = resolveComponent("NuxtChild");
      _push(`<!--[--><header data-v-8d07daa5>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["service-list-container", { "dark-mode": unref(theme).isDarkMode }])}" data-v-8d07daa5><div class="background-animation" data-v-8d07daa5><div class="floating-shape shape-1" data-v-8d07daa5></div><div class="floating-shape shape-2" data-v-8d07daa5></div><div class="floating-shape shape-3" data-v-8d07daa5></div><div class="floating-shape shape-4" data-v-8d07daa5></div></div><section class="hero-section" data-v-8d07daa5><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "hero-content"])}" data-v-8d07daa5><div class="hero-icon" data-v-8d07daa5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "room_service",
        size: "large"
      }, null, _parent));
      _push(`</div><h1 class="page-title" data-v-8d07daa5><span class="title-line" data-v-8d07daa5>D\u1ECBch v\u1EE5</span><span class="title-highlight" data-v-8d07daa5>\u0110\u1EB3ng c\u1EA5p</span></h1><p class="page-subtitle" data-v-8d07daa5> Kh\xE1m ph\xE1 nh\u1EEFng d\u1ECBch v\u1EE5 cao c\u1EA5p \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF \u0111\u1EB7c bi\u1EC7t \u0111\u1EC3 mang \u0111\u1EBFn tr\u1EA3i nghi\u1EC7m ho\xE0n h\u1EA3o </p><div class="service-stats" data-v-8d07daa5><div class="stat-item" data-v-8d07daa5><div class="stat-number" data-v-8d07daa5>${ssrInterpolate(services.value.length)}+</div><div class="stat-label" data-v-8d07daa5>D\u1ECBch v\u1EE5</div></div><div class="stat-item" data-v-8d07daa5><div class="stat-number" data-v-8d07daa5>24/7</div><div class="stat-label" data-v-8d07daa5>H\u1ED7 tr\u1EE3</div></div><div class="stat-item" data-v-8d07daa5><div class="stat-number" data-v-8d07daa5>5\u2605</div><div class="stat-label" data-v-8d07daa5>\u0110\xE1nh gi\xE1</div></div></div></div></section><section class="filter-section" data-v-8d07daa5><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "filter-container"])}" data-v-8d07daa5><div class="filter-header" data-v-8d07daa5><h2 data-v-8d07daa5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "tune" }, null, _parent));
      _push(` T\xECm ki\u1EBFm d\u1ECBch v\u1EE5 </h2><p data-v-8d07daa5>L\u1ECDc theo nhu c\u1EA7u c\u1EE7a b\u1EA1n</p></div><div class="filter-bar" data-v-8d07daa5><div class="filter-group" data-v-8d07daa5><label class="filter-label" data-v-8d07daa5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "search" }, null, _parent));
      _push(` T\xECm ki\u1EBFm d\u1ECBch v\u1EE5 </label><div class="input-wrapper" data-v-8d07daa5>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "search",
        class: "input-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: filterName.value,
        "onUpdate:modelValue": ($event) => filterName.value = $event,
        placeholder: "Nh\u1EADp t\xEAn d\u1ECBch v\u1EE5...",
        class: "filter-input",
        onInput: onFilterChange
      }, null, _parent));
      _push(`</div></div><div class="filter-group" data-v-8d07daa5><label class="filter-label" data-v-8d07daa5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "attach_money" }, null, _parent));
      _push(` Kho\u1EA3ng gi\xE1 </label>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: filterPrice.value,
        "onUpdate:modelValue": [($event) => filterPrice.value = $event, onFilterChange],
        options: priceOptions,
        placeholder: "Ch\u1ECDn kho\u1EA3ng gi\xE1",
        class: "filter-select"
      }, null, _parent));
      _push(`</div><div class="filter-group" data-v-8d07daa5><label class="filter-label" data-v-8d07daa5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "sort" }, null, _parent));
      _push(` S\u1EAFp x\u1EBFp theo </label>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: sortBy.value,
        "onUpdate:modelValue": [($event) => sortBy.value = $event, onFilterChange],
        options: sortOptions,
        placeholder: "S\u1EAFp x\u1EBFp",
        class: "filter-select"
      }, null, _parent));
      _push(`</div><div class="filter-actions" data-v-8d07daa5>`);
      if (hasActiveFilters.value) {
        _push(`<button class="clear-filters-btn" data-v-8d07daa5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "clear" }, null, _parent));
        _push(` X\xF3a b\u1ED9 l\u1ECDc </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="quick-filters" data-v-8d07daa5><h3 data-v-8d07daa5>Danh m\u1EE5c ph\u1ED5 bi\u1EBFn</h3><div class="category-chips" data-v-8d07daa5><!--[-->`);
      ssrRenderList(serviceCategories, (category) => {
        _push(`<div class="${ssrRenderClass([{ active: selectedCategory.value === category.value }, "category-chip"])}" data-v-8d07daa5>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: category.icon
        }, null, _parent));
        _push(`<span data-v-8d07daa5>${ssrInterpolate(category.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
      if (filteredServices.value.length > 0) {
        _push(`<section class="results-section" data-v-8d07daa5><div class="results-header" data-v-8d07daa5><div class="results-info" data-v-8d07daa5><h2 data-v-8d07daa5> T\xECm th\u1EA5y <span class="highlight-number" data-v-8d07daa5>${ssrInterpolate(filteredServices.value.length)}</span> d\u1ECBch v\u1EE5 </h2><p data-v-8d07daa5>${ssrInterpolate(getResultsDescription())}</p></div><div class="view-controls" data-v-8d07daa5><div class="view-toggle" data-v-8d07daa5><button class="${ssrRenderClass([{ active: viewMode.value === "grid" }, "view-btn"])}" title="Xem d\u1EA1ng l\u01B0\u1EDBi" data-v-8d07daa5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "grid_view" }, null, _parent));
        _push(`</button><button class="${ssrRenderClass([{ active: viewMode.value === "list" }, "view-btn"])}" title="Xem d\u1EA1ng danh s\xE1ch" data-v-8d07daa5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "view_list" }, null, _parent));
        _push(`</button></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="services-section" data-v-8d07daa5><div class="${ssrRenderClass([[`view-${viewMode.value}`, { loading: isLoading.value }], "service-cards"])}" data-v-8d07daa5>`);
      _push(ssrRenderComponent(CardService, { services: filteredServices.value }, null, _parent));
      _push(`</div>`);
      if (filteredServices.value.length === 0 && !isLoading.value) {
        _push(`<div class="empty-state" data-v-8d07daa5><div class="empty-icon" data-v-8d07daa5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "search_off" }, null, _parent));
        _push(`</div><h3 data-v-8d07daa5>Kh\xF4ng t\xECm th\u1EA5y d\u1ECBch v\u1EE5 ph\xF9 h\u1EE3p</h3><p data-v-8d07daa5>H\xE3y th\u1EED \u0111i\u1EC1u ch\u1EC9nh b\u1ED9 l\u1ECDc ho\u1EB7c t\xECm ki\u1EBFm v\u1EDBi t\u1EEB kh\xF3a kh\xE1c</p><button class="clear-filters-btn" data-v-8d07daa5>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "refresh" }, null, _parent));
        _push(` X\xF3a b\u1ED9 l\u1ECDc </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value) {
        _push(`<div class="loading-state" data-v-8d07daa5><div class="loading-spinner" data-v-8d07daa5><div class="spinner" data-v-8d07daa5></div></div><p data-v-8d07daa5>\u0110ang t\u1EA3i d\u1ECBch v\u1EE5...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="cta-section" data-v-8d07daa5><div class="cta-content" data-v-8d07daa5><div class="cta-text" data-v-8d07daa5><h2 data-v-8d07daa5>C\u1EA7n t\u01B0 v\u1EA5n d\u1ECBch v\u1EE5?</h2><p data-v-8d07daa5>\u0110\u1ED9i ng\u0169 chuy\xEAn vi\xEAn c\u1EE7a ch\xFAng t\xF4i s\u1EB5n s\xE0ng h\u1ED7 tr\u1EE3 b\u1EA1n 24/7</p></div><div class="cta-actions" data-v-8d07daa5><button class="cta-btn primary" data-v-8d07daa5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "phone" }, null, _parent));
      _push(` G\u1ECDi ngay: 1900-1234 </button><button class="cta-btn secondary" data-v-8d07daa5>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "chat" }, null, _parent));
      _push(` Chat tr\u1EF1c tuy\u1EBFn </button></div></div></section>`);
      _push(ssrRenderComponent(_component_NuxtChild, null, null, _parent));
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { show: showToast.value }], "toast"])}" data-v-8d07daa5><div class="toast-content" data-v-8d07daa5>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: toastType.value === "success" ? "check_circle" : "info",
          class: "toast-icon"
        }, null, _parent));
        _push(`<span data-v-8d07daa5>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DichVu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DichVu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d07daa5"]]);

export { DichVu as default };
//# sourceMappingURL=DichVu-CJLxKHFg.mjs.map
