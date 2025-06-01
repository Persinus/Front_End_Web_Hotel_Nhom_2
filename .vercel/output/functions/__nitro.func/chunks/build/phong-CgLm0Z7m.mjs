import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { T as TheHeader } from './Header-Bzw_yIJv.mjs';
import './nuxt-link-UMPBbWdB.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
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
import 'element-plus';
import './PhanQuyenCookie-BjQyveNS.mjs';

const _sfc_main$1 = {
  __name: "CardRooms",
  __ssrInlineRender: true,
  props: {
    rooms: { type: Array, required: true },
    maxRating: { type: Number, required: true },
    maxBooked: { type: Number, required: true },
    maxPrice: { type: Number, required: true },
    minPrice: { type: Number, required: true },
    bookedMap: { type: Object, required: true }
  },
  setup(__props) {
    function getDiscountPercent(room) {
      var _a;
      const giamGia = (_a = room.giamGia) == null ? void 0 : _a[0];
      if (giamGia && giamGia.giaTriGiam > 0 && room.giaPhong > 0) {
        return Math.round(giamGia.giaTriGiam / room.giaPhong * 100);
      }
      return 0;
    }
    function getFinalPrice(room) {
      var _a;
      const giamGia = (_a = room.giamGia) == null ? void 0 : _a[0];
      if (giamGia && giamGia.giaTriGiam > 0) {
        return room.giaPhong - giamGia.giaTriGiam;
      }
      return room.giaPhong;
    }
    function formatPrice(val) {
      if (!val) return "";
      return val.toLocaleString("vi-VN") + "\u20AB";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "services-grid" }, _attrs))} data-v-81a40ab1><!--[-->`);
      ssrRenderList(__props.rooms, (room) => {
        _push(`<div class="hotel-card" data-v-81a40ab1><div class="hotel-image-wrapper" data-v-81a40ab1><img class="hotel-image"${ssrRenderAttr("src", room.urlAnhChinh || "https://i.pinimg.com/736x/5c/f2/cd/5cf2cd74c675ddbd78c0defbce34a63d.jpg")}${ssrRenderAttr("alt", room.loaiPhong || "Ph\xF2ng kh\xE1ch s\u1EA1n")} data-v-81a40ab1>`);
        if (getDiscountPercent(room) > 0) {
          _push(`<div class="discount-badge" data-v-81a40ab1> -${ssrInterpolate(getDiscountPercent(room))}% </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="badge-stack" data-v-81a40ab1>`);
        if (room.soSaoTrungBinh === __props.maxRating) {
          _push(`<div class="badge badge-green" title="Best rating" data-v-81a40ab1>Best</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.bookedMap[room.maPhong] === __props.maxBooked) {
          _push(`<div class="badge badge-blue" title="Most booked" data-v-81a40ab1>Hot</div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.giaPhong === __props.maxPrice) {
          _push(`<div class="badge badge-orange" title="Highest price" data-v-81a40ab1>High</div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.giaPhong === __props.minPrice) {
          _push(`<div class="badge badge-purple" title="Lowest price" data-v-81a40ab1>Low</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="hotel-card-content" data-v-81a40ab1><h3 class="hotel-title" data-v-81a40ab1>${ssrInterpolate(room.loaiPhong)}</h3><div class="hotel-info-row" data-v-81a40ab1><span class="hotel-type" data-v-81a40ab1>${ssrInterpolate(room.loaiPhong)}</span><span class="${ssrRenderClass([room.tinhTrang === "2" ? "status-booked" : "status-available", "hotel-status"])}" data-v-81a40ab1>${ssrInterpolate(room.tinhTrang === "2" ? "\u0110\xE3 \u0111\u1EB7t" : "C\xF2n tr\u1ED1ng")}</span></div><div class="hotel-rating" data-v-81a40ab1><span class="star" data-v-81a40ab1>\u2605</span><span data-v-81a40ab1>${ssrInterpolate(room.soSaoTrungBinh)}</span><span class="hotel-booked" data-v-81a40ab1>(${ssrInterpolate(__props.bookedMap[room.maPhong] || 0)} l\u01B0\u1EE3t \u0111\u1EB7t)</span></div><div class="hotel-price-group" data-v-81a40ab1>`);
        if (getDiscountPercent(room) > 0) {
          _push(`<span class="hotel-old-price" data-v-81a40ab1>${ssrInterpolate(formatPrice(room.giaPhong))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="hotel-price" data-v-81a40ab1>${ssrInterpolate(formatPrice(getFinalPrice(room)))}</span><span class="per-night" data-v-81a40ab1>/ ${ssrInterpolate(room.donViTinh || "\u0111\xEAm")}</span></div><button class="book-btn"${ssrIncludeBooleanAttr(room.tinhTrang === "2") ? " disabled" : ""} data-v-81a40ab1><i class="fa fa-bed" data-v-81a40ab1></i> \u0110\u1EB7t ph\xF2ng </button></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/CardRooms.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardRooms = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-81a40ab1"]]);
const _sfc_main = {
  __name: "phong",
  __ssrInlineRender: true,
  setup(__props) {
    const rooms = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const maxRating = computed(() => Math.max(...rooms.value.map((r) => r.soSaoTrungBinh || 0)));
    const maxPrice = computed(() => Math.max(...rooms.value.map((r) => r.giaPhong || 0)));
    const minPrice = computed(() => Math.min(...rooms.value.map((r) => r.giaPhong || 0)));
    const bookedMap = computed(
      () => Object.fromEntries(rooms.value.map((r) => [r.maPhong, Math.floor(Math.random() * 500) + 1]))
    );
    const maxBooked = computed(() => Math.max(...Object.values(bookedMap.value)));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<div class="page-container" data-v-1e3ffc0b>`);
      if (loading.value) {
        _push(`<div class="modal-loading" data-v-1e3ffc0b><div class="modal-loading-backdrop" data-v-1e3ffc0b></div><div class="modal-loading-content" data-v-1e3ffc0b><span class="loader" data-v-1e3ffc0b></span><span data-v-1e3ffc0b>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="error-message" data-v-1e3ffc0b>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<div data-v-1e3ffc0b>`);
        _push(ssrRenderComponent(CardRooms, {
          rooms: rooms.value,
          "max-rating": maxRating.value,
          "max-booked": maxBooked.value,
          "max-price": maxPrice.value,
          "min-price": minPrice.value,
          "booked-map": bookedMap.value
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/phong.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const phong = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e3ffc0b"]]);

export { phong as default };
//# sourceMappingURL=phong-CgLm0Z7m.mjs.map
