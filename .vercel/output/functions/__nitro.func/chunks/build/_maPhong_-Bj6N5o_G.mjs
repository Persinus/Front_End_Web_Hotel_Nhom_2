import { ref, resolveComponent, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { e as useThemeStore } from './server.mjs';
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

const _sfc_main = {
  __name: "[maPhong]",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    theme.initializeDarkMode();
    const route = useRoute();
    const router = useRouter();
    route.params.maPhong;
    const room = ref({});
    ref([]);
    ref([]);
    ref([]);
    const feedbacks = ref([]);
    ref([]);
    function goToBooking() {
      router.push({ name: "DatPhong", params: { maPhong: room.value.maPhong } });
    }
    function renderStars(soSao) {
      soSao = Number(soSao) || 0;
      return "\u2605".repeat(soSao) + "\u2606".repeat(5 - soSao);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_button = resolveComponent("va-button");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<div class="${ssrRenderClass(["room-detail-theme", { "dark-mode": unref(theme).isDarkMode }])}" data-v-d522239b><div class="room-detail-wrapper" data-v-d522239b><div class="room-detail-left" data-v-d522239b><div class="main-image" data-v-d522239b><img${ssrRenderAttr("src", room.value.urlAnhChinh)} alt="\u1EA2nh ch\xEDnh" data-v-d522239b></div><div class="sub-images" data-v-d522239b><!--[-->`);
      ssrRenderList(room.value.urlAnhPhu, (img, idx) => {
        _push(`<img${ssrRenderAttr("src", img.urlAnh)} alt="\u1EA2nh ph\u1EE5" class="sub-img" data-v-d522239b>`);
      });
      _push(`<!--]--></div></div><div class="room-detail-right" data-v-d522239b><h1 class="room-title" data-v-d522239b>${ssrInterpolate(room.value.loaiPhong)} (M\xE3: ${ssrInterpolate(room.value.maPhong)})</h1><div class="room-price" data-v-d522239b><span data-v-d522239b>\u{1F4B5} Gi\xE1:</span> ${ssrInterpolate(room.value.giaPhong != null ? room.value.giaPhong.toLocaleString() : "\u0110ang c\u1EADp nh\u1EADt")} VND / ${ssrInterpolate(room.value.donViTinh || "")}</div><div class="room-status" data-v-d522239b><span data-v-d522239b>\u{1F525} Tr\u1EA1ng th\xE1i:</span><span class="${ssrRenderClass(room.value.tinhTrang === "1" ? "status-available" : "status-unavailable")}" data-v-d522239b>${ssrInterpolate(room.value.tinhTrang === "1" ? "C\xF2n tr\u1ED1ng" : "\u0110\xE3 \u0111\u1EB7t")}</span></div><div class="room-info-list" data-v-d522239b><div data-v-d522239b><strong data-v-d522239b>\u{1F3E2} T\u1EA7ng:</strong> ${ssrInterpolate(room.value.tang)}</div><div data-v-d522239b><strong data-v-d522239b>\u{1F6CF}\uFE0F Ki\u1EC3u gi\u01B0\u1EDDng:</strong> ${ssrInterpolate(room.value.kieuGiuong)}</div><div data-v-d522239b><strong data-v-d522239b>\u{1F465} S\u1EE9c ch\u1EE9a:</strong> ${ssrInterpolate(room.value.sucChua)} ng\u01B0\u1EDDi</div><div data-v-d522239b><strong data-v-d522239b>\u2B50 \u0110\xE1nh gi\xE1:</strong> ${ssrInterpolate(room.value.soSaoTrungBinh)}/5</div></div><div class="room-desc" data-v-d522239b><strong data-v-d522239b>\u{1F4DD} M\xF4 t\u1EA3:</strong> ${ssrInterpolate(room.value.moTa || room.value.motaPhong)}</div><div class="amenities" data-v-d522239b><strong data-v-d522239b>\u{1F4F6} Ti\u1EC7n nghi:</strong><div class="amenity-list" data-v-d522239b><!--[-->`);
      ssrRenderList(_ctx.tienNghi, (t) => {
        _push(`<span class="amenity-item"${ssrRenderAttr("title", t.moTa)} data-v-d522239b><i class="fa fa-check-circle amenity-icon" data-v-d522239b></i> ${ssrInterpolate(t.tenTienNghi)}</span>`);
      });
      _push(`<!--]--></div></div><div class="feedbacks" data-v-d522239b><strong data-v-d522239b>\u{1F5E8}\uFE0F \u0110\xE1nh gi\xE1 kh\xE1ch h\xE0ng:</strong>`);
      if (Array.isArray(feedbacks.value) && feedbacks.value.length) {
        _push(`<div data-v-d522239b><!--[-->`);
        ssrRenderList(feedbacks.value, (fb, idx) => {
          _push(`<div class="feedback-item" data-v-d522239b><span class="feedback-stars" data-v-d522239b>${ssrInterpolate(renderStars(fb.soSao))}</span><span class="${ssrRenderClass([fb.phanLoai === "T\xEDch c\u1EF1c" ? "positive" : "negative", "feedback-type"])}" data-v-d522239b>${ssrInterpolate(fb.phanLoai)}</span><div class="feedback-comment" data-v-d522239b>${ssrInterpolate(fb.binhLuan)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="feedback-empty" data-v-d522239b>Ch\u01B0a c\xF3 \u0111\xE1nh gi\xE1 n\xE0o.</div>`);
      }
      _push(`</div><div class="actions" data-v-d522239b>`);
      _push(ssrRenderComponent(_component_va_button, {
        disabled: room.value.tinhTrang !== "1",
        color: "primary",
        class: "book-button",
        onClick: goToBooking
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u{1F4E9} \u0110\u1EB7t ph\xF2ng `);
          } else {
            return [
              createTextVNode(" \u{1F4E9} \u0110\u1EB7t ph\xF2ng ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/phong/[maPhong].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _maPhong_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d522239b"]]);

export { _maPhong_ as default };
//# sourceMappingURL=_maPhong_-Bj6N5o_G.mjs.map
