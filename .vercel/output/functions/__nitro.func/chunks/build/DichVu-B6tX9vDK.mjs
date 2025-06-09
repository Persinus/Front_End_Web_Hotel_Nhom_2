import { ref, computed, resolveComponent, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { e as useThemeStore } from './server.mjs';
import { useRouter } from 'vue-router';
import { T as TheHeader } from './Header-B66BpTxb.mjs';
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
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN").format(price);
    };
    const getServiceIcon = (serviceName) => {
      const name = serviceName.toLowerCase();
      if (name.includes("spa") || name.includes("massage")) return "spa";
      if (name.includes("\u0103n") || name.includes("th\u1EE9c \u0103n") || name.includes("buffet"))
        return "restaurant";
      if (name.includes("xe") || name.includes("\u0111\u01B0a \u0111\xF3n")) return "directions_car";
      if (name.includes("game") || name.includes("gi\u1EA3i tr\xED")) return "sports_esports";
      if (name.includes("h\u1ED9i ngh\u1ECB") || name.includes("meeting")) return "business_center";
      return "room_service";
    };
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
    const getServiceDescription = (serviceName) => {
      const descriptions = {
        spa: "Th\u01B0 gi\xE3n v\xE0 t\xE1i t\u1EA1o n\u0103ng l\u01B0\u1EE3ng v\u1EDBi c\xE1c li\u1EC7u ph\xE1p chuy\xEAn nghi\u1EC7p",
        massage: "Massage th\u01B0 gi\xE3n v\u1EDBi k\u1EF9 thu\u1EADt truy\u1EC1n th\u1ED1ng v\xE0 hi\u1EC7n \u0111\u1EA1i",
        buffet: "Th\u01B0\u1EDFng th\u1EE9c \u1EA9m th\u1EF1c \u0111a d\u1EA1ng v\u1EDBi ch\u1EA5t l\u01B0\u1EE3ng cao c\u1EA5p",
        xe: "D\u1ECBch v\u1EE5 v\u1EADn chuy\u1EC3n an to\xE0n v\xE0 ti\u1EC7n l\u1EE3i",
        game: "Gi\u1EA3i tr\xED \u0111a d\u1EA1ng cho m\u1ECDi l\u1EE9a tu\u1ED5i"
      };
      const name = serviceName.toLowerCase();
      for (const [key, desc] of Object.entries(descriptions)) {
        if (name.includes(key)) return desc;
      }
      return "D\u1ECBch v\u1EE5 ch\u1EA5t l\u01B0\u1EE3ng cao v\u1EDBi \u0111\u1ED9i ng\u0169 chuy\xEAn nghi\u1EC7p";
    };
    const getServiceFeatures = (serviceName) => {
      const features = {
        spa: ["Chuy\xEAn vi\xEAn c\xF3 kinh nghi\u1EC7m", "S\u1EA3n ph\u1EA9m thi\xEAn nhi\xEAn", "Kh\xF4ng gian ri\xEAng t\u01B0"],
        massage: ["K\u1EF9 thu\u1EADt chuy\xEAn nghi\u1EC7p", "Th\u1EDDi gian linh ho\u1EA1t", "Gi\xE1 c\u1EA3 h\u1EE3p l\xFD"],
        buffet: ["\u0110a d\u1EA1ng m\xF3n \u0103n", "Nguy\xEAn li\u1EC7u t\u01B0\u01A1i ngon", "Ph\u1EE5c v\u1EE5 24/7"],
        xe: ["Xe \u0111\u1EDDi m\u1EDBi", "T\xE0i x\u1EBF kinh nghi\u1EC7m", "An to\xE0n tuy\u1EC7t \u0111\u1ED1i"],
        game: ["Thi\u1EBFt b\u1ECB hi\u1EC7n \u0111\u1EA1i", "Kh\xF4ng gian r\u1ED9ng r\xE3i", "Gi\xE1 \u01B0u \u0111\xE3i"]
      };
      const name = serviceName.toLowerCase();
      for (const [key, featureList] of Object.entries(features)) {
        if (name.includes(key)) return featureList;
      }
      return ["Ch\u1EA5t l\u01B0\u1EE3ng cao", "Gi\xE1 c\u1EA3 h\u1EE3p l\xFD", "D\u1ECBch v\u1EE5 t\u1EADn t\xE2m"];
    };
    const getServiceRating = () => {
      return Math.floor(Math.random() * 2) + 4;
    };
    const getDefaultServiceImage = () => {
      return "https://images.unsplash.com/photo-1571896349842-33c89424de2d";
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
      _push(`<!--[--><header data-v-e8f574dc>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["service-list-container", { "dark-mode": unref(theme).isDarkMode }])}" data-v-e8f574dc><div class="background-animation" data-v-e8f574dc><div class="floating-shape shape-1" data-v-e8f574dc></div><div class="floating-shape shape-2" data-v-e8f574dc></div><div class="floating-shape shape-3" data-v-e8f574dc></div><div class="floating-shape shape-4" data-v-e8f574dc></div></div><section class="hero-section" data-v-e8f574dc><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "hero-content"])}" data-v-e8f574dc><div class="hero-icon" data-v-e8f574dc>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "room_service",
        size: "large"
      }, null, _parent));
      _push(`</div><h1 class="page-title" data-v-e8f574dc><span class="title-line" data-v-e8f574dc>D\u1ECBch v\u1EE5</span><span class="title-highlight" data-v-e8f574dc>\u0110\u1EB3ng c\u1EA5p</span></h1><p class="page-subtitle" data-v-e8f574dc> Kh\xE1m ph\xE1 nh\u1EEFng d\u1ECBch v\u1EE5 cao c\u1EA5p \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF \u0111\u1EB7c bi\u1EC7t \u0111\u1EC3 mang \u0111\u1EBFn tr\u1EA3i nghi\u1EC7m ho\xE0n h\u1EA3o </p><div class="service-stats" data-v-e8f574dc><div class="stat-item" data-v-e8f574dc><div class="stat-number" data-v-e8f574dc>${ssrInterpolate(services.value.length)}+</div><div class="stat-label" data-v-e8f574dc>D\u1ECBch v\u1EE5</div></div><div class="stat-item" data-v-e8f574dc><div class="stat-number" data-v-e8f574dc>24/7</div><div class="stat-label" data-v-e8f574dc>H\u1ED7 tr\u1EE3</div></div><div class="stat-item" data-v-e8f574dc><div class="stat-number" data-v-e8f574dc>5\u2605</div><div class="stat-label" data-v-e8f574dc>\u0110\xE1nh gi\xE1</div></div></div></div></section><section class="filter-section" data-v-e8f574dc><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "filter-container"])}" data-v-e8f574dc><div class="filter-header" data-v-e8f574dc><h2 data-v-e8f574dc>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "tune" }, null, _parent));
      _push(` T\xECm ki\u1EBFm d\u1ECBch v\u1EE5 </h2><p data-v-e8f574dc>L\u1ECDc theo nhu c\u1EA7u c\u1EE7a b\u1EA1n</p></div><div class="filter-bar" data-v-e8f574dc><div class="filter-group" data-v-e8f574dc><label class="filter-label" data-v-e8f574dc>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "search" }, null, _parent));
      _push(` T\xECm ki\u1EBFm d\u1ECBch v\u1EE5 </label><div class="input-wrapper" data-v-e8f574dc>`);
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
      _push(`</div></div><div class="filter-group" data-v-e8f574dc><label class="filter-label" data-v-e8f574dc>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "attach_money" }, null, _parent));
      _push(` Kho\u1EA3ng gi\xE1 </label>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: filterPrice.value,
        "onUpdate:modelValue": [($event) => filterPrice.value = $event, onFilterChange],
        options: priceOptions,
        placeholder: "Ch\u1ECDn kho\u1EA3ng gi\xE1",
        class: "filter-select"
      }, null, _parent));
      _push(`</div><div class="filter-group" data-v-e8f574dc><label class="filter-label" data-v-e8f574dc>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "sort" }, null, _parent));
      _push(` S\u1EAFp x\u1EBFp theo </label>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: sortBy.value,
        "onUpdate:modelValue": [($event) => sortBy.value = $event, onFilterChange],
        options: sortOptions,
        placeholder: "S\u1EAFp x\u1EBFp",
        class: "filter-select"
      }, null, _parent));
      _push(`</div><div class="filter-actions" data-v-e8f574dc>`);
      if (hasActiveFilters.value) {
        _push(`<button class="clear-filters-btn" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "clear" }, null, _parent));
        _push(` X\xF3a b\u1ED9 l\u1ECDc </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="quick-filters" data-v-e8f574dc><h3 data-v-e8f574dc>Danh m\u1EE5c ph\u1ED5 bi\u1EBFn</h3><div class="category-chips" data-v-e8f574dc><!--[-->`);
      ssrRenderList(serviceCategories, (category) => {
        _push(`<div class="${ssrRenderClass([{ active: selectedCategory.value === category.value }, "category-chip"])}" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: category.icon
        }, null, _parent));
        _push(`<span data-v-e8f574dc>${ssrInterpolate(category.label)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
      if (filteredServices.value.length > 0) {
        _push(`<section class="results-section" data-v-e8f574dc><div class="results-header" data-v-e8f574dc><div class="results-info" data-v-e8f574dc><h2 data-v-e8f574dc> T\xECm th\u1EA5y <span class="highlight-number" data-v-e8f574dc>${ssrInterpolate(filteredServices.value.length)}</span> d\u1ECBch v\u1EE5 </h2><p data-v-e8f574dc>${ssrInterpolate(getResultsDescription())}</p></div><div class="view-controls" data-v-e8f574dc><div class="view-toggle" data-v-e8f574dc><button class="${ssrRenderClass([{ active: viewMode.value === "grid" }, "view-btn"])}" title="Xem d\u1EA1ng l\u01B0\u1EDBi" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "grid_view" }, null, _parent));
        _push(`</button><button class="${ssrRenderClass([{ active: viewMode.value === "list" }, "view-btn"])}" title="Xem d\u1EA1ng danh s\xE1ch" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "view_list" }, null, _parent));
        _push(`</button></div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="services-section" data-v-e8f574dc><div class="${ssrRenderClass([[`view-${viewMode.value}`, { loading: isLoading.value }], "service-cards"])}" data-v-e8f574dc><!--[-->`);
      ssrRenderList(filteredServices.value, (service, index) => {
        _push(`<div class="service-card" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}" data-v-e8f574dc><div class="service-image-container" data-v-e8f574dc><img${ssrRenderAttr("src", service.urlAnh || getDefaultServiceImage())}${ssrRenderAttr("alt", service.tenDichVu)} class="service-image" data-v-e8f574dc><div class="image-overlay" data-v-e8f574dc><div class="service-category" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: getServiceIcon(service.tenDichVu)
        }, null, _parent));
        _push(`<span data-v-e8f574dc>${ssrInterpolate(getServiceCategory(service.tenDichVu))}</span></div></div><button class="${ssrRenderClass([{ active: service.isFavorite }, "favorite-btn"])}" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: service.isFavorite ? "favorite" : "favorite_border"
        }, null, _parent));
        _push(`</button>`);
        if (service.isPopular) {
          _push(`<div class="service-badge" data-v-e8f574dc>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "star" }, null, _parent));
          _push(`<span data-v-e8f574dc>Ph\u1ED5 bi\u1EBFn</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="service-content" data-v-e8f574dc><div class="service-header" data-v-e8f574dc><h3 class="service-title"${ssrRenderAttr("title", service.tenDichVu)} data-v-e8f574dc>${ssrInterpolate(service.tenDichVu)}</h3><div class="service-rating" data-v-e8f574dc><div class="stars" data-v-e8f574dc><!--[-->`);
        ssrRenderList(5, (n) => {
          _push(ssrRenderComponent(_component_va_icon, {
            name: "star",
            key: n,
            class: ["star", { filled: n <= getServiceRating() }]
          }, null, _parent));
        });
        _push(`<!--]--></div><span class="rating-text" data-v-e8f574dc>${ssrInterpolate(getServiceRating())}/5</span></div></div><p class="service-description" data-v-e8f574dc>${ssrInterpolate(getServiceDescription(service.tenDichVu))}</p><div class="service-features" data-v-e8f574dc><!--[-->`);
        ssrRenderList(getServiceFeatures(service.tenDichVu), (feature) => {
          _push(`<div class="feature-item" data-v-e8f574dc>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "check_circle" }, null, _parent));
          _push(`<span data-v-e8f574dc>${ssrInterpolate(feature)}</span></div>`);
        });
        _push(`<!--]--></div><div class="service-footer" data-v-e8f574dc><div class="price-section" data-v-e8f574dc><div class="price-main" data-v-e8f574dc><span class="currency" data-v-e8f574dc>\u20AB</span><span class="price" data-v-e8f574dc>${ssrInterpolate(formatPrice(service.donGia))}</span></div><div class="price-unit" data-v-e8f574dc>/ \u0111\xEAm</div><div class="price-note" data-v-e8f574dc>\u0110\xE3 bao g\u1ED3m VAT</div></div><div class="service-actions" data-v-e8f574dc><button class="detail-btn" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "visibility" }, null, _parent));
        _push(`<span data-v-e8f574dc>Chi ti\u1EBFt</span></button><button class="book-btn" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "add_shopping_cart" }, null, _parent));
        _push(`<span data-v-e8f574dc>\u0110\u1EB7t ngay</span></button></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (filteredServices.value.length === 0 && !isLoading.value) {
        _push(`<div class="empty-state" data-v-e8f574dc><div class="empty-icon" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "search_off" }, null, _parent));
        _push(`</div><h3 data-v-e8f574dc>Kh\xF4ng t\xECm th\u1EA5y d\u1ECBch v\u1EE5 ph\xF9 h\u1EE3p</h3><p data-v-e8f574dc>H\xE3y th\u1EED \u0111i\u1EC1u ch\u1EC9nh b\u1ED9 l\u1ECDc ho\u1EB7c t\xECm ki\u1EBFm v\u1EDBi t\u1EEB kh\xF3a kh\xE1c</p><button class="clear-filters-btn" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "refresh" }, null, _parent));
        _push(` X\xF3a b\u1ED9 l\u1ECDc </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLoading.value) {
        _push(`<div class="loading-state" data-v-e8f574dc><div class="loading-spinner" data-v-e8f574dc><div class="spinner" data-v-e8f574dc></div></div><p data-v-e8f574dc>\u0110ang t\u1EA3i d\u1ECBch v\u1EE5...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="cta-section" data-v-e8f574dc><div class="cta-content" data-v-e8f574dc><div class="cta-text" data-v-e8f574dc><h2 data-v-e8f574dc>C\u1EA7n t\u01B0 v\u1EA5n d\u1ECBch v\u1EE5?</h2><p data-v-e8f574dc>\u0110\u1ED9i ng\u0169 chuy\xEAn vi\xEAn c\u1EE7a ch\xFAng t\xF4i s\u1EB5n s\xE0ng h\u1ED7 tr\u1EE3 b\u1EA1n 24/7</p></div><div class="cta-actions" data-v-e8f574dc><button class="cta-btn primary" data-v-e8f574dc>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "phone" }, null, _parent));
      _push(` G\u1ECDi ngay: 1900-1234 </button><button class="cta-btn secondary" data-v-e8f574dc>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "chat" }, null, _parent));
      _push(` Chat tr\u1EF1c tuy\u1EBFn </button></div></div></section>`);
      _push(ssrRenderComponent(_component_NuxtChild, null, null, _parent));
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { show: showToast.value }], "toast"])}" data-v-e8f574dc><div class="toast-content" data-v-e8f574dc>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: toastType.value === "success" ? "check_circle" : "info",
          class: "toast-icon"
        }, null, _parent));
        _push(`<span data-v-e8f574dc>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
const DichVu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e8f574dc"]]);

export { DichVu as default };
//# sourceMappingURL=DichVu-B6tX9vDK.mjs.map
