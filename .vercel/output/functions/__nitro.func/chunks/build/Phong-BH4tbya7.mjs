import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { ref, watch, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { a as useRouter, f as axiosBase } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { T as TheHeader } from './Header-gOHbRZPv.mjs';
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
import './nuxt-link-UMPBbWdB.mjs';
import './PhanQuyenCookie-BHQDydup.mjs';

const _sfc_main$2 = {
  __name: "CardRooms",
  __ssrInlineRender: true,
  props: {
    rooms: { type: Array, required: true },
    maxPrice: Number,
    minPrice: Number,
    maxRating: Number
  },
  setup(__props) {
    const props = __props;
    function formatPrice(val) {
      if (!val) return "";
      return val.toLocaleString("vi-VN") + "\u20AB";
    }
    const sortedRooms = computed(
      () => [...props.rooms].sort((a, b) => a.maPhong.localeCompare(b.maPhong))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_icon = resolveComponent("va-icon");
      const _component_va_button = resolveComponent("va-button");
      const _component_PixelatedImageCard = resolveComponent("PixelatedImageCard");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hotels-grid" }, _attrs))} data-v-85cf68c7><!--[-->`);
      ssrRenderList(unref(sortedRooms), (room) => {
        _push(`<div class="hotel-card" data-v-85cf68c7><div class="hotel-image-container" data-v-85cf68c7><img${ssrRenderAttr(
          "src",
          room.urlAnhChinh || "https://i.pinimg.com/736x/5c/f2/cd/5cf2cd74c675ddbd78c0defbce34a63d.jpg"
        )} class="hotel-img"${ssrRenderAttr("alt", room.loaiPhong || "Ph\xF2ng kh\xE1ch s\u1EA1n")} data-v-85cf68c7><div class="hotel-badge" data-v-85cf68c7>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: "verified",
          size: "small"
        }, null, _parent));
        _push(` \u0110\xE3 x\xE1c minh </div><div class="special-badges" data-v-85cf68c7>`);
        if (room.soSaoTrungBinh === __props.maxRating) {
          _push(`<div class="special-badge" style="${ssrRenderStyle({ "background": "#a78bfa", "color": "white" })}" data-v-85cf68c7> Best </div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.giaPhong === __props.minPrice) {
          _push(`<div class="special-badge" style="${ssrRenderStyle({ "background": "#22c55e", "color": "white" })}" data-v-85cf68c7> Low </div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.giaPhong === __props.maxPrice) {
          _push(`<div class="special-badge" style="${ssrRenderStyle({ "background": "#ef4444", "color": "white" })}" data-v-85cf68c7> High </div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.isNew) {
          _push(`<div class="special-badge" style="${ssrRenderStyle({ "background": "#f59e42", "color": "white" })}" data-v-85cf68c7> M\u1EDBi </div>`);
        } else {
          _push(`<!---->`);
        }
        if (room.isHot) {
          _push(`<div class="special-badge" style="${ssrRenderStyle({ "background": "#ef4444", "color": "white" })}" data-v-85cf68c7> Hot </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="overlay-content" data-v-85cf68c7><div style="${ssrRenderStyle({ "font-size": "1.3rem", "font-weight": "700" })}" data-v-85cf68c7> M\xE3 ph\xF2ng: ${ssrInterpolate(room.maPhong)}</div></div></div><div class="hotel-content" data-v-85cf68c7><div class="hotel-header" data-v-85cf68c7><h3 class="hotel-title" data-v-85cf68c7>${ssrInterpolate(room.loaiPhong)}</h3><div class="hotel-rating" data-v-85cf68c7><div class="stars" data-v-85cf68c7><!--[-->`);
        ssrRenderList(Math.round(room.soSaoTrungBinh || 0), (n) => {
          _push(ssrRenderComponent(_component_va_icon, {
            name: "star",
            color: "warning",
            key: n,
            size: "small"
          }, null, _parent));
        });
        _push(`<!--]--></div><span class="rating-text" data-v-85cf68c7>${ssrInterpolate(room.soSaoTrungBinh || 0)}</span></div></div><div class="hotel-info" data-v-85cf68c7><span class="info-item" data-v-85cf68c7>T\u1EA7ng: ${ssrInterpolate(room.tang)}</span><span class="info-item" data-v-85cf68c7> T\xECnh tr\u1EA1ng: <span class="${ssrRenderClass(room.tinhTrang === "1" ? "status-available" : "status-unavailable")}" data-v-85cf68c7>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: room.tinhTrang === "1" ? "check_circle" : "block",
          color: room.tinhTrang === "1" ? "success" : "danger"
        }, null, _parent));
        _push(` ${ssrInterpolate(room.tinhTrang === "1" ? "C\xF2n tr\u1ED1ng" : "\u0110\xE3 \u0111\u01B0\u1EE3c \u0111\u1EB7t")}</span></span></div><div class="hotel-footer" data-v-85cf68c7><div class="price-group" data-v-85cf68c7>`);
        if (room.giaUuDai && room.giaUuDai < room.giaPhong) {
          _push(`<span class="price" data-v-85cf68c7><span class="old-price" data-v-85cf68c7>${ssrInterpolate(formatPrice(room.giaPhong))}</span><span class="discount-price" data-v-85cf68c7>${ssrInterpolate(formatPrice(room.giaUuDai))}</span></span>`);
        } else {
          _push(`<span class="price" data-v-85cf68c7>${ssrInterpolate(formatPrice(room.giaPhong))}</span>`);
        }
        _push(`<span class="price-unit" data-v-85cf68c7>/ ${ssrInterpolate(room.donViTinh || "\u0111\xEAm")}</span></div>`);
        _push(ssrRenderComponent(_component_va_button, {
          color: "primary",
          size: "medium",
          class: "book-btn",
          onClick: ($event) => _ctx.$emit("book-room", room)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Xem chi ti\u1EBFt `);
            } else {
              return [
                createTextVNode(" Xem chi ti\u1EBFt ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div><div class="pixelated-image-card" style="${ssrRenderStyle({ "position": "relative", "overflow": "hidden" })}" data-v-85cf68c7>`);
        _push(ssrRenderComponent(_component_PixelatedImageCard, {
          "first-content": room,
          "second-content": room,
          "grid-size": 10,
          "pixel-color": "#000",
          "animation-step-duration": 0.2,
          "aspect-ratio": "75%"
        }, {
          firstContent: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", room.urlAnhChinh)} style="${ssrRenderStyle({ "width": "100%", "height": "200px", "object-fit": "cover" })}" data-v-85cf68c7${_scopeId}><div data-v-85cf68c7${_scopeId}>${ssrInterpolate(room.loaiPhong)}</div>`);
            } else {
              return [
                createVNode("img", {
                  src: room.urlAnhChinh,
                  style: { "width": "100%", "height": "200px", "object-fit": "cover" }
                }, null, 8, ["src"]),
                createVNode("div", null, toDisplayString(room.loaiPhong), 1)
              ];
            }
          }),
          secondContent: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="overlay-content" data-v-85cf68c7${_scopeId}><div data-v-85cf68c7${_scopeId}>M\xE3 ph\xF2ng: ${ssrInterpolate(room.maPhong)}</div><div data-v-85cf68c7${_scopeId}>Lo\u1EA1i ph\xF2ng: ${ssrInterpolate(room.loaiPhong)}</div><div data-v-85cf68c7${_scopeId}>Gi\xE1: ${ssrInterpolate(room.giaPhong.toLocaleString("vi-VN"))}\u20AB</div><div data-v-85cf68c7${_scopeId}>Gi\xE1 \u01B0u \u0111\xE3i: ${ssrInterpolate(room.giaUuDai.toLocaleString("vi-VN"))}\u20AB</div><div data-v-85cf68c7${_scopeId}>T\u1EA7ng: ${ssrInterpolate(room.tang)}</div><div data-v-85cf68c7${_scopeId}>T\xECnh tr\u1EA1ng: ${ssrInterpolate(room.tinhTrang === "1" ? "C\xF2n tr\u1ED1ng" : "\u0110\xE3 \u0111\u1EB7t")}</div><div data-v-85cf68c7${_scopeId}>\u0110\u01A1n v\u1ECB: ${ssrInterpolate(room.donViTinh)}</div><div data-v-85cf68c7${_scopeId}>Sao: ${ssrInterpolate(room.soSaoTrungBinh)}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "overlay-content" }, [
                  createVNode("div", null, "M\xE3 ph\xF2ng: " + toDisplayString(room.maPhong), 1),
                  createVNode("div", null, "Lo\u1EA1i ph\xF2ng: " + toDisplayString(room.loaiPhong), 1),
                  createVNode("div", null, "Gi\xE1: " + toDisplayString(room.giaPhong.toLocaleString("vi-VN")) + "\u20AB", 1),
                  createVNode("div", null, "Gi\xE1 \u01B0u \u0111\xE3i: " + toDisplayString(room.giaUuDai.toLocaleString("vi-VN")) + "\u20AB", 1),
                  createVNode("div", null, "T\u1EA7ng: " + toDisplayString(room.tang), 1),
                  createVNode("div", null, "T\xECnh tr\u1EA1ng: " + toDisplayString(room.tinhTrang === "1" ? "C\xF2n tr\u1ED1ng" : "\u0110\xE3 \u0111\u1EB7t"), 1),
                  createVNode("div", null, "\u0110\u01A1n v\u1ECB: " + toDisplayString(room.donViTinh), 1),
                  createVNode("div", null, "Sao: " + toDisplayString(room.soSaoTrungBinh), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/CardRooms.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardRooms = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-85cf68c7"]]);
const _sfc_main$1 = {
  props: {
    totalPages: {
      type: Number,
      default: 15
    },
    modelValue: {
      type: Number,
      default: 1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaPagination = resolveComponent("VaPagination");
  _push(ssrRenderComponent(_component_VaPagination, mergeProps({
    modelValue: $options.value,
    "onUpdate:modelValue": ($event) => $options.value = $event,
    pages: $props.totalPages,
    "visible-pages": 4,
    class: "justify-center sm:justify-start"
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const pageSize = 9;
const _sfc_main = {
  __name: "Phong",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const rooms = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const page = ref(1);
    const totalPages = ref(1);
    const fetchRooms = async () => {
      loading.value = true;
      try {
        const res = await axiosBase.get(
          `/TatCaTruyCap/phong-rutgon?page=${page.value}&pageSize=${pageSize}`
        );
        rooms.value = res.data.data || res.data;
        totalPages.value = 3;
      } catch (err) {
        error.value = err.message || "L\u1ED7i khi g\u1ECDi API";
      } finally {
        loading.value = false;
      }
    };
    watch(page, fetchRooms);
    const maxRating = computed(
      () => Math.max(...rooms.value.map((r) => r.soSaoTrungBinh || 0))
    );
    const maxPrice = computed(() => Math.max(...rooms.value.map((r) => r.giaPhong || 0)));
    const minPrice = computed(() => Math.min(...rooms.value.map((r) => r.giaPhong || 0)));
    const bookedMap = computed(
      () => Object.fromEntries(
        rooms.value.map((r) => [r.maPhong, Math.floor(Math.random() * 500) + 1])
      )
    );
    const maxBooked = computed(() => Math.max(...Object.values(bookedMap.value)));
    function goToBooking(room) {
      router.push(`/phong/${room.maPhong}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<div class="page-container" data-v-8db8a41c>`);
      if (loading.value) {
        _push(`<div class="modal-loading" data-v-8db8a41c><div class="modal-loading-backdrop" data-v-8db8a41c></div><div class="modal-loading-content" data-v-8db8a41c><span class="loader" data-v-8db8a41c></span><span data-v-8db8a41c>\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (error.value) {
        _push(`<div class="error-message" data-v-8db8a41c>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<div data-v-8db8a41c>`);
        _push(ssrRenderComponent(CardRooms, {
          rooms: rooms.value,
          "max-rating": maxRating.value,
          "max-booked": maxBooked.value,
          "max-price": maxPrice.value,
          "min-price": minPrice.value,
          "booked-map": bookedMap.value,
          onBookRoom: goToBooking
        }, null, _parent));
        _push(ssrRenderComponent(Pagination, {
          modelValue: page.value,
          "onUpdate:modelValue": ($event) => page.value = $event,
          "total-pages": totalPages.value,
          class: "mt-6"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Phong.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Phong = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8db8a41c"]]);

export { Phong as default };
//# sourceMappingURL=Phong-BH4tbya7.mjs.map
