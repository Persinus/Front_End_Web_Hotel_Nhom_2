import { ref, computed, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { T as TheHeader } from './Header-B66BpTxb.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-UMPBbWdB.mjs';
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
import './server.mjs';
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
import './PhanQuyenCookie-BHQDydup.mjs';

const _sfc_main = {
  __name: "Booking",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref({
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0
    });
    const filter = ref({
      type: "",
      sort: "asc",
      viewSea: false,
      hasPool: false,
      hasWifi: false,
      hasBreakfast: false,
      hasSpa: false,
      priceMin: 0,
      priceMax: 5e6
    });
    const rooms = ref([
      {
        id: 1,
        name: "Ph\xF2ng \u0111\u01A1n ti\xEAu chu\u1EA9n",
        description: "Ph\xF2ng cho 1 ng\u01B0\u1EDDi v\u1EDBi thi\u1EBFt k\u1EBF hi\u1EC7n \u0111\u1EA1i, ti\u1EC7n nghi c\u01A1 b\u1EA3n \u0111\u1EA7y \u0111\u1EE7.",
        price: 6e5,
        area: 20,
        beds: 1,
        maxGuests: 1,
        type: "Ph\xF2ng \u0111\u01A1n",
        rating: 4.2,
        hasWifi: true,
        hasPool: false,
        viewSea: false,
        hasBreakfast: false,
        hasSpa: false,
        isPopular: false,
        isWishlisted: false,
        galleryCount: 6,
        image: "https://images.unsplash.com/photo-1552903023-4ec5593ec660"
      },
      {
        id: 2,
        name: "Ph\xF2ng \u0111\xF4i view bi\u1EC3n",
        description: "Tho\u1EA3i m\xE1i cho 2 ng\u01B0\u1EDDi v\u1EDBi t\u1EA7m nh\xECn h\u01B0\u1EDBng bi\u1EC3n tuy\u1EC7t \u0111\u1EB9p v\xE0 ban c\xF4ng ri\xEAng.",
        price: 12e5,
        area: 35,
        beds: 2,
        maxGuests: 2,
        type: "Ph\xF2ng \u0111\xF4i",
        rating: 4.8,
        hasWifi: true,
        hasPool: true,
        viewSea: true,
        hasBreakfast: true,
        hasSpa: false,
        isPopular: true,
        isWishlisted: false,
        galleryCount: 12,
        image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d3"
      },
      {
        id: 3,
        name: "Suite Gia \u0111\xECnh",
        description: "Kh\xF4ng gian r\u1ED9ng r\xE3i cho gia \u0111\xECnh 4 ng\u01B0\u1EDDi v\u1EDBi ph\xF2ng kh\xE1ch ri\xEAng bi\u1EC7t.",
        price: 19e5,
        area: 60,
        beds: 3,
        maxGuests: 4,
        type: "Gia \u0111\xECnh",
        rating: 4.6,
        hasWifi: true,
        hasPool: true,
        viewSea: false,
        hasBreakfast: true,
        hasSpa: true,
        isPopular: false,
        isWishlisted: true,
        galleryCount: 15,
        image: "https://images.unsplash.com/photo-1560067174-894dc1c5079a"
      }
    ]);
    const selectedRoom = ref(null);
    const addons = ref({
      breakfast: false,
      spa: false,
      shuttle: false
    });
    const message = ref("");
    const showMessage = ref(false);
    const isSearching = ref(false);
    const isFormFocused = ref(false);
    const viewMode = ref("grid");
    const roomTypes = [
      { text: "T\u1EA5t c\u1EA3 lo\u1EA1i ph\xF2ng", value: "" },
      { text: "Ph\xF2ng \u0111\u01A1n", value: "Ph\xF2ng \u0111\u01A1n" },
      { text: "Ph\xF2ng \u0111\xF4i", value: "Ph\xF2ng \u0111\xF4i" },
      { text: "Gia \u0111\xECnh", value: "Gia \u0111\xECnh" },
      { text: "Suite", value: "Suite" }
    ];
    const sortOptions = [
      { text: "Gi\xE1 t\u0103ng d\u1EA7n", value: "asc" },
      { text: "Gi\xE1 gi\u1EA3m d\u1EA7n", value: "desc" },
      { text: "\u0110\xE1nh gi\xE1 cao nh\u1EA5t", value: "rating" }
    ];
    const hasActiveFilters = computed(() => {
      return filter.value.type || filter.value.viewSea || filter.value.hasPool || filter.value.hasWifi || filter.value.hasBreakfast || filter.value.hasSpa;
    });
    const calculateNights = () => {
      if (!search.value.checkIn || !search.value.checkOut) return 0;
      const checkIn = new Date(search.value.checkIn);
      const checkOut = new Date(search.value.checkOut);
      const diffTime = Math.abs(checkOut - checkIn);
      return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    };
    const calculateTotal = () => {
      if (!selectedRoom.value) return 0;
      let total = selectedRoom.value.price * calculateNights();
      if (addons.value.breakfast) {
        total += 2e5 * search.value.adults * calculateNights();
      }
      if (addons.value.spa) {
        total += 8e5;
      }
      if (addons.value.shuttle) {
        total += 5e5;
      }
      return total;
    };
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN").format(price);
    };
    const filteredRooms = computed(() => {
      let filtered = rooms.value;
      if (filter.value.type) {
        filtered = filtered.filter((r) => r.type === filter.value.type);
      }
      if (filter.value.viewSea) {
        filtered = filtered.filter((r) => r.viewSea);
      }
      if (filter.value.hasPool) {
        filtered = filtered.filter((r) => r.hasPool);
      }
      if (filter.value.hasWifi) {
        filtered = filtered.filter((r) => r.hasWifi);
      }
      if (filter.value.hasBreakfast) {
        filtered = filtered.filter((r) => r.hasBreakfast);
      }
      if (filter.value.hasSpa) {
        filtered = filtered.filter((r) => r.hasSpa);
      }
      filtered = filtered.filter((r) => r.price >= filter.value.priceMin && r.price <= filter.value.priceMax);
      if (filter.value.sort === "asc") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (filter.value.sort === "desc") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      } else if (filter.value.sort === "rating") {
        filtered = filtered.sort((a, b) => b.rating - a.rating);
      }
      return filtered;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_icon = resolveComponent("va-icon");
      const _component_va_select = resolveComponent("va-select");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "booking-page" }, _attrs))} data-v-5b610de9>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<section class="hero-search" data-v-5b610de9><div class="hero-overlay" data-v-5b610de9></div><div class="container" data-v-5b610de9><div class="hero-content" data-v-5b610de9><h1 class="hero-title" data-v-5b610de9><span class="title-line" data-v-5b610de9>T\xECm ki\u1EBFm</span><span class="title-highlight" data-v-5b610de9>Ph\xF2ng Ho\xE0n H\u1EA3o</span></h1><p class="hero-subtitle" data-v-5b610de9>Kh\xE1m ph\xE1 nh\u1EEFng ph\xF2ng ngh\u1EC9 tuy\u1EC7t v\u1EDDi v\u1EDBi gi\xE1 t\u1ED1t nh\u1EA5t</p></div><div class="search-form-container" data-v-5b610de9><div class="${ssrRenderClass([{ "form-focused": isFormFocused.value }, "search-form"])}" data-v-5b610de9><h2 class="search-title" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "search",
        class: "search-icon"
      }, null, _parent));
      _push(` T\xECm ph\xF2ng l\xFD t\u01B0\u1EDFng </h2><div class="form-grid" data-v-5b610de9><div class="form-group" data-v-5b610de9><label data-v-5b610de9>Ng\xE0y nh\u1EADn ph\xF2ng</label><div class="input-wrapper" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "calendar_today",
        class: "input-icon"
      }, null, _parent));
      _push(`<input type="date"${ssrRenderAttr("value", search.value.checkIn)} class="form-input" data-v-5b610de9></div></div><div class="form-group" data-v-5b610de9><label data-v-5b610de9>Ng\xE0y tr\u1EA3 ph\xF2ng</label><div class="input-wrapper" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "calendar_today",
        class: "input-icon"
      }, null, _parent));
      _push(`<input type="date"${ssrRenderAttr("value", search.value.checkOut)} class="form-input" data-v-5b610de9></div></div><div class="form-group" data-v-5b610de9><label data-v-5b610de9>Ng\u01B0\u1EDDi l\u1EDBn</label><div class="input-wrapper" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "person",
        class: "input-icon"
      }, null, _parent));
      _push(`<input type="number"${ssrRenderAttr("value", search.value.adults)} placeholder="1" min="1" class="form-input" data-v-5b610de9></div></div><div class="form-group" data-v-5b610de9><label data-v-5b610de9>Tr\u1EBB em</label><div class="input-wrapper" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "child_care",
        class: "input-icon"
      }, null, _parent));
      _push(`<input type="number"${ssrRenderAttr("value", search.value.children)} placeholder="0" min="0" class="form-input" data-v-5b610de9></div></div></div><button class="${ssrRenderClass([{ "searching": isSearching.value }, "search-btn"])}" data-v-5b610de9>`);
      if (!isSearching.value) {
        _push(ssrRenderComponent(_component_va_icon, { name: "search" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_va_icon, {
          name: "refresh",
          class: "spinning"
        }, null, _parent));
      }
      _push(`<span data-v-5b610de9>${ssrInterpolate(isSearching.value ? "\u0110ang t\xECm ki\u1EBFm..." : "T\xECm ph\xF2ng")}</span></button></div></div></div></section><section class="filters-section" data-v-5b610de9><div class="container" data-v-5b610de9><div class="filters-container" data-v-5b610de9><div class="filters-header" data-v-5b610de9><h3 data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "tune" }, null, _parent));
      _push(` B\u1ED9 l\u1ECDc t\xECm ki\u1EBFm </h3>`);
      if (hasActiveFilters.value) {
        _push(`<button class="clear-filters" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "clear" }, null, _parent));
        _push(` X\xF3a b\u1ED9 l\u1ECDc </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="filters-grid" data-v-5b610de9><div class="filter-group" data-v-5b610de9><label data-v-5b610de9>Lo\u1EA1i ph\xF2ng</label>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: filter.value.type,
        "onUpdate:modelValue": ($event) => filter.value.type = $event,
        options: roomTypes,
        placeholder: "T\u1EA5t c\u1EA3 lo\u1EA1i ph\xF2ng",
        class: "filter-select"
      }, null, _parent));
      _push(`</div><div class="filter-group" data-v-5b610de9><label data-v-5b610de9>S\u1EAFp x\u1EBFp theo gi\xE1</label>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: filter.value.sort,
        "onUpdate:modelValue": ($event) => filter.value.sort = $event,
        options: sortOptions,
        class: "filter-select"
      }, null, _parent));
      _push(`</div><div class="filter-group" data-v-5b610de9><label data-v-5b610de9>Gi\xE1 ph\xF2ng (VN\u0110)</label><div class="price-range" data-v-5b610de9><input type="range"${ssrRenderAttr("value", filter.value.priceMin)} min="0" max="5000000" step="100000" class="price-slider" data-v-5b610de9><div class="price-display" data-v-5b610de9>${ssrInterpolate(formatPrice(filter.value.priceMin))} - ${ssrInterpolate(formatPrice(filter.value.priceMax))}</div></div></div></div><div class="amenities-filters" data-v-5b610de9><h4 data-v-5b610de9>Ti\u1EC7n nghi</h4><div class="amenity-chips" data-v-5b610de9><div class="${ssrRenderClass([{ "active": filter.value.viewSea }, "amenity-chip"])}" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "waves" }, null, _parent));
      _push(`<span data-v-5b610de9>View bi\u1EC3n</span></div><div class="${ssrRenderClass([{ "active": filter.value.hasPool }, "amenity-chip"])}" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "pool" }, null, _parent));
      _push(`<span data-v-5b610de9>H\u1ED3 b\u01A1i</span></div><div class="${ssrRenderClass([{ "active": filter.value.hasWifi }, "amenity-chip"])}" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "wifi" }, null, _parent));
      _push(`<span data-v-5b610de9>Wifi mi\u1EC5n ph\xED</span></div><div class="${ssrRenderClass([{ "active": filter.value.hasBreakfast }, "amenity-chip"])}" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "restaurant" }, null, _parent));
      _push(`<span data-v-5b610de9>\u0102n s\xE1ng</span></div><div class="${ssrRenderClass([{ "active": filter.value.hasSpa }, "amenity-chip"])}" data-v-5b610de9>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "spa" }, null, _parent));
      _push(`<span data-v-5b610de9>Spa</span></div></div></div></div></div></section>`);
      if (filteredRooms.value.length > 0) {
        _push(`<section class="results-header" data-v-5b610de9><div class="container" data-v-5b610de9><div class="results-info" data-v-5b610de9><h2 data-v-5b610de9>T\xECm th\u1EA5y ${ssrInterpolate(filteredRooms.value.length)} ph\xF2ng ph\xF9 h\u1EE3p</h2><p data-v-5b610de9>\u0110\u01B0\u1EE3c s\u1EAFp x\u1EBFp theo ${ssrInterpolate(filter.value.sort === "asc" ? "gi\xE1 t\u0103ng d\u1EA7n" : "gi\xE1 gi\u1EA3m d\u1EA7n")}</p></div><div class="view-toggle" data-v-5b610de9><button class="${ssrRenderClass([{ "active": viewMode.value === "grid" }, "view-btn"])}" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "grid_view" }, null, _parent));
        _push(`</button><button class="${ssrRenderClass([{ "active": viewMode.value === "list" }, "view-btn"])}" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "view_list" }, null, _parent));
        _push(`</button></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="rooms-section" data-v-5b610de9><div class="container" data-v-5b610de9><div class="${ssrRenderClass([[`view-${viewMode.value}`, { "loading": isSearching.value }], "room-list"])}" data-v-5b610de9><!--[-->`);
      ssrRenderList(filteredRooms.value, (room, index) => {
        var _a;
        _push(`<div style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}" class="${ssrRenderClass([{ "selected": ((_a = selectedRoom.value) == null ? void 0 : _a.id) === room.id }, "room-card"])}" data-v-5b610de9><div class="room-image-container" data-v-5b610de9><img${ssrRenderAttr("src", room.image)}${ssrRenderAttr("alt", room.name)} class="room-image" data-v-5b610de9>`);
        if (room.isPopular) {
          _push(`<div class="room-badge" data-v-5b610de9>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "star" }, null, _parent));
          _push(` Ph\u1ED5 bi\u1EBFn </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="${ssrRenderClass([{ "active": room.isWishlisted }, "wishlist-btn"])}" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: room.isWishlisted ? "favorite" : "favorite_border"
        }, null, _parent));
        _push(`</button><div class="room-gallery-indicator" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "photo_library" }, null, _parent));
        _push(`<span data-v-5b610de9>${ssrInterpolate(room.galleryCount || 8)}+</span></div></div><div class="room-content" data-v-5b610de9><div class="room-header" data-v-5b610de9><h3 class="room-name" data-v-5b610de9>${ssrInterpolate(room.name)}</h3><div class="room-rating" data-v-5b610de9><div class="stars" data-v-5b610de9><!--[-->`);
        ssrRenderList(5, (n) => {
          _push(ssrRenderComponent(_component_va_icon, {
            key: n,
            name: "star",
            class: { "filled": n <= room.rating }
          }, null, _parent));
        });
        _push(`<!--]--></div><span class="rating-text" data-v-5b610de9>${ssrInterpolate(room.rating)}/5</span></div></div><p class="room-description" data-v-5b610de9>${ssrInterpolate(room.description)}</p><div class="room-features" data-v-5b610de9><div class="feature-item" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "square_foot" }, null, _parent));
        _push(`<span data-v-5b610de9>${ssrInterpolate(room.area)} m\xB2</span></div><div class="feature-item" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "bed" }, null, _parent));
        _push(`<span data-v-5b610de9>${ssrInterpolate(room.beds)} gi\u01B0\u1EDDng</span></div>`);
        if (room.maxGuests) {
          _push(`<div class="feature-item" data-v-5b610de9>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "people" }, null, _parent));
          _push(`<span data-v-5b610de9>${ssrInterpolate(room.maxGuests)} kh\xE1ch</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="room-amenities" data-v-5b610de9>`);
        if (room.hasWifi) {
          _push(`<div class="amenity-tag" data-v-5b610de9>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "wifi" }, null, _parent));
          _push(`<span data-v-5b610de9>Wifi</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.hasPool) {
          _push(`<div class="amenity-tag" data-v-5b610de9>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "pool" }, null, _parent));
          _push(`<span data-v-5b610de9>H\u1ED3 b\u01A1i</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.viewSea) {
          _push(`<div class="amenity-tag" data-v-5b610de9>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "waves" }, null, _parent));
          _push(`<span data-v-5b610de9>View bi\u1EC3n</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.hasBreakfast) {
          _push(`<div class="amenity-tag" data-v-5b610de9>`);
          _push(ssrRenderComponent(_component_va_icon, { name: "restaurant" }, null, _parent));
          _push(`<span data-v-5b610de9>\u0102n s\xE1ng</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="room-footer" data-v-5b610de9><div class="price-section" data-v-5b610de9><div class="price-main" data-v-5b610de9><span class="currency" data-v-5b610de9>\u20AB</span><span class="price" data-v-5b610de9>${ssrInterpolate(formatPrice(room.price))}</span></div><div class="price-unit" data-v-5b610de9>/\u0111\xEAm</div>`);
        if (calculateNights() > 0) {
          _push(`<div class="price-total" data-v-5b610de9> T\u1ED5ng: ${ssrInterpolate(formatPrice(room.price * calculateNights()))} (${ssrInterpolate(calculateNights())} \u0111\xEAm) </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button class="book-btn" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "hotel" }, null, _parent));
        _push(` Ch\u1ECDn ph\xF2ng </button></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (filteredRooms.value.length === 0 && !isSearching.value) {
        _push(`<div class="empty-state" data-v-5b610de9><div class="empty-icon" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "search_off" }, null, _parent));
        _push(`</div><h3 data-v-5b610de9>Kh\xF4ng t\xECm th\u1EA5y ph\xF2ng ph\xF9 h\u1EE3p</h3><p data-v-5b610de9>H\xE3y th\u1EED \u0111i\u1EC1u ch\u1EC9nh b\u1ED9 l\u1ECDc ho\u1EB7c thay \u0111\u1ED5i ng\xE0y \u0111\u1EC3 t\xECm th\xEAm l\u1EF1a ch\u1ECDn</p><button class="clear-filters-btn" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "refresh" }, null, _parent));
        _push(` X\xF3a b\u1ED9 l\u1ECDc </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
      if (selectedRoom.value) {
        _push(`<div class="modal-overlay" data-v-5b610de9><div class="service-modal" data-v-5b610de9><div class="modal-header" data-v-5b610de9><h3 data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "room_service" }, null, _parent));
        _push(` D\u1ECBch v\u1EE5 k\xE8m theo </h3><button class="close-btn" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "close" }, null, _parent));
        _push(`</button></div><div class="modal-content" data-v-5b610de9><div class="selected-room-info" data-v-5b610de9><img${ssrRenderAttr("src", selectedRoom.value.image)}${ssrRenderAttr("alt", selectedRoom.value.name)} class="room-thumb" data-v-5b610de9><div data-v-5b610de9><h4 data-v-5b610de9>${ssrInterpolate(selectedRoom.value.name)}</h4><p class="room-price" data-v-5b610de9>${ssrInterpolate(formatPrice(selectedRoom.value.price))}\u20AB/\u0111\xEAm</p></div></div><div class="addons-section" data-v-5b610de9><h4 data-v-5b610de9>Ch\u1ECDn d\u1ECBch v\u1EE5 b\u1ED5 sung</h4><div class="addon-list" data-v-5b610de9><div class="${ssrRenderClass([{ "selected": addons.value.breakfast }, "addon-item"])}" data-v-5b610de9><div class="addon-icon" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "restaurant" }, null, _parent));
        _push(`</div><div class="addon-info" data-v-5b610de9><h5 data-v-5b610de9>\u0102n s\xE1ng buffet</h5><p data-v-5b610de9>Buffet s\xE1ng phong ph\xFA v\u1EDBi m\xF3n \xC1 - \xC2u</p><span class="addon-price" data-v-5b610de9>+200,000\u20AB/ng\u01B0\u1EDDi/ng\xE0y</span></div><div class="addon-checkbox" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: addons.value.breakfast ? "check_circle" : "radio_button_unchecked"
        }, null, _parent));
        _push(`</div></div><div class="${ssrRenderClass([{ "selected": addons.value.spa }, "addon-item"])}" data-v-5b610de9><div class="addon-icon" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "spa" }, null, _parent));
        _push(`</div><div class="addon-info" data-v-5b610de9><h5 data-v-5b610de9>Spa th\u01B0 gi\xE3n</h5><p data-v-5b610de9>Massage to\xE0n th\xE2n 60 ph\xFAt</p><span class="addon-price" data-v-5b610de9>+800,000\u20AB/l\u1EA7n</span></div><div class="addon-checkbox" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: addons.value.spa ? "check_circle" : "radio_button_unchecked"
        }, null, _parent));
        _push(`</div></div><div class="${ssrRenderClass([{ "selected": addons.value.shuttle }, "addon-item"])}" data-v-5b610de9><div class="addon-icon" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "airport_shuttle" }, null, _parent));
        _push(`</div><div class="addon-info" data-v-5b610de9><h5 data-v-5b610de9>\u0110\u01B0a \u0111\xF3n s\xE2n bay</h5><p data-v-5b610de9>D\u1ECBch v\u1EE5 \u0111\u01B0a \u0111\xF3n 2 chi\u1EC1u</p><span class="addon-price" data-v-5b610de9>+500,000\u20AB/chuy\u1EBFn</span></div><div class="addon-checkbox" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: addons.value.shuttle ? "check_circle" : "radio_button_unchecked"
        }, null, _parent));
        _push(`</div></div></div></div><div class="booking-summary" data-v-5b610de9><div class="summary-row" data-v-5b610de9><span data-v-5b610de9>Gi\xE1 ph\xF2ng (${ssrInterpolate(calculateNights())} \u0111\xEAm)</span><span data-v-5b610de9>${ssrInterpolate(formatPrice(selectedRoom.value.price * calculateNights()))}\u20AB</span></div>`);
        if (addons.value.breakfast) {
          _push(`<div class="summary-row" data-v-5b610de9><span data-v-5b610de9>\u0102n s\xE1ng (${ssrInterpolate(search.value.adults)} ng\u01B0\u1EDDi \xD7 ${ssrInterpolate(calculateNights())} ng\xE0y)</span><span data-v-5b610de9>${ssrInterpolate(formatPrice(2e5 * search.value.adults * calculateNights()))}\u20AB</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (addons.value.spa) {
          _push(`<div class="summary-row" data-v-5b610de9><span data-v-5b610de9>Spa th\u01B0 gi\xE3n</span><span data-v-5b610de9>800,000\u20AB</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (addons.value.shuttle) {
          _push(`<div class="summary-row" data-v-5b610de9><span data-v-5b610de9>\u0110\u01B0a \u0111\xF3n s\xE2n bay</span><span data-v-5b610de9>500,000\u20AB</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="summary-total" data-v-5b610de9><span data-v-5b610de9>T\u1ED5ng c\u1ED9ng</span><span data-v-5b610de9>${ssrInterpolate(formatPrice(calculateTotal()))}\u20AB</span></div></div></div><div class="modal-footer" data-v-5b610de9><button class="btn-secondary" data-v-5b610de9>H\u1EE7y</button><button class="btn-primary" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "check" }, null, _parent));
        _push(` X\xE1c nh\u1EADn \u0111\u1EB7t ph\xF2ng </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (message.value) {
        _push(`<div class="${ssrRenderClass([{ "show": showMessage.value }, "success-toast"])}" data-v-5b610de9><div class="toast-content" data-v-5b610de9>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: "check_circle",
          class: "toast-icon"
        }, null, _parent));
        _push(`<span data-v-5b610de9>${ssrInterpolate(message.value)}</span></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Booking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Booking = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b610de9"]]);

export { Booking as default };
//# sourceMappingURL=Booking-B1CEoJKs.mjs.map
