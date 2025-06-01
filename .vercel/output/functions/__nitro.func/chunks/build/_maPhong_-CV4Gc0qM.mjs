import { _ as __nuxt_component_0 } from './nuxt-link-UMPBbWdB.mjs';
import { ref, resolveComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { e as useThemeStore, b as useNuxtApp } from './server.mjs';
import { T as TheHeader } from './Header-Bzw_yIJv.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
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
import 'element-plus';
import './PhanQuyenCookie-BjQyveNS.mjs';

const defaultAmenityIcon = "ri-question-line";
const _sfc_main = {
  __name: "[maPhong]",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    theme.initializeDarkMode();
    const room = ref({ tienNghiList: [] });
    const loading = ref(true);
    ref(null);
    const route = useRoute();
    const { $api } = useNuxtApp();
    route.params.maPhong;
    const images = ref([]);
    const subImages = ref([]);
    const currentSlide = ref(0);
    const isImageModalOpen = ref(false);
    const amenitiesMap = {
      "M\xE1y l\u1EA1nh": { icon: "fas fa-snowflake" },
      // Icon điều hòa
      "Wifi mi\u1EC5n ph\xED": { icon: "fas fa-wifi" },
      // Icon wifi
      "B\u1ED9 tr\xE0/c\xE0 ph\xEA": { icon: "fas fa-mug-hot" },
      // Icon tách trà/cà phê
      "Tivi": { icon: "fa-solid fa-tv" },
      // Icon TV
      "T\u1EE7 l\u1EA1nh": { icon: "fas fa-ice-cream" },
      // Icon tủ lạnh
      "B\u1ED3n t\u1EAFm": { icon: "fas fa-bath" },
      // Icon bồn tắm
      "Mini Bar": { icon: "fa-solid fa-martini-glass-empty" },
      // Icon mini bar (chọn chai rượu làm biểu tượng)
      // Icon mini bar
      "M\xE1y s\u1EA5y t\xF3c": { icon: "fas fa-blow-dryer" },
      // Icon máy sấy tóc
      "B\xE0n l\xE0m vi\u1EC7c": { icon: "fas fa-desktop" },
      // Icon bàn làm việc
      "B\u1ED3n c\u1EA7u": { icon: "fas fa-toilet" },
      // Icon bồn cầu
      "B\u1ED3n r\u1EEDa m\u1EB7t": { icon: "fas fa-sink" },
      // Icon bồn rửa mặt
      "M\xE1y gi\u1EB7t": { icon: "fas fa-washing-machine" },
      // Icon máy giặt
      "B\u1EBFp": { icon: "fas fa-utensils" }
      // Icon bếp
    };
    const closeImage = () => {
      isImageModalOpen.value = false;
    };
    const shareRoom = async () => {
      const link = (void 0).location.href;
      try {
        await (void 0).clipboard.writeText(link);
        alert("\u{1F4E4} \u0110\xE3 sao ch\xE9p link ph\xF2ng v\xE0o clipboard!");
      } catch (err) {
        alert("\u274C Sao ch\xE9p th\u1EA5t b\u1EA1i, vui l\xF2ng th\u1EED l\u1EA1i.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_button = resolveComponent("va-button");
      const _component_va_card = resolveComponent("va-card");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_va_loading = resolveComponent("va-loading");
      _push(`<!--[--><header data-v-2d3e3bf2>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["room-details-container", { "dark-mode": unref(theme).isDarkMode }])}" data-v-2d3e3bf2><div class="room-gallery" data-v-2d3e3bf2><div class="main-image" data-v-2d3e3bf2><img${ssrRenderAttr("src", images.value[0])} alt="\u1EA2nh ch\xEDnh" class="gallery-img" data-v-2d3e3bf2></div><div class="sub-images" data-v-2d3e3bf2><!--[-->`);
      ssrRenderList(subImages.value, (img, index) => {
        _push(`<div class="sub-image" data-v-2d3e3bf2><img${ssrRenderAttr("src", img)} alt="&#39;\u1EA2nh ph\u1EE5 &#39; + (index + 1)" class="gallery-img" data-v-2d3e3bf2></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (isImageModalOpen.value) {
        _push(`<div class="image-modal" data-v-2d3e3bf2><div class="modal-content" data-v-2d3e3bf2><img${ssrRenderAttr("src", images.value[currentSlide.value])} alt="Ph\xF3ng to \u1EA3nh" class="modal-img zoom-img" data-v-2d3e3bf2>`);
        _push(ssrRenderComponent(_component_va_button, {
          color: "danger",
          class: "close-button",
          onClick: closeImage
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`X`);
            } else {
              return [
                createTextVNode("X")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_va_card, {
        class: "room-info",
        outlined: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="info-content" data-v-2d3e3bf2${_scopeId}><h1 class="room-title" data-v-2d3e3bf2${_scopeId}>${ssrInterpolate(room.value.loaiPhong)} (M\xE3: ${ssrInterpolate(room.value.maPhong)})</h1><p data-v-2d3e3bf2${_scopeId}><strong data-v-2d3e3bf2${_scopeId}>\u{1F4B5} Gi\xE1:</strong> ${ssrInterpolate(room.value.giaPhong)} VND</p><p data-v-2d3e3bf2${_scopeId}><strong data-v-2d3e3bf2${_scopeId}>\u{1F3E2} T\u1EA7ng:</strong> ${ssrInterpolate(room.value.tang)}</p><p data-v-2d3e3bf2${_scopeId}><strong data-v-2d3e3bf2${_scopeId}>\u{1F6CF}\uFE0F Ki\u1EC3u gi\u01B0\u1EDDng:</strong> ${ssrInterpolate(room.value.kieuGiuong)}</p><p data-v-2d3e3bf2${_scopeId}><strong data-v-2d3e3bf2${_scopeId}>\u{1F4DD} M\xF4 t\u1EA3:</strong> ${ssrInterpolate(room.value.moTa)}</p><p data-v-2d3e3bf2${_scopeId}><strong data-v-2d3e3bf2${_scopeId}>\u{1F4F6} Ti\u1EC7n nghi:</strong></p><div class="amenities animate__animated animate__fadeIn" data-v-2d3e3bf2${_scopeId}><!--[-->`);
            ssrRenderList(room.value.tienNghiList, (amenity, index) => {
              var _a;
              _push2(`<div class="amenity animate__animated animate__bounce" data-v-2d3e3bf2${_scopeId}><i class="${ssrRenderClass([((_a = amenitiesMap[amenity]) == null ? void 0 : _a.icon) || defaultAmenityIcon, "amenity-icon"])}" data-v-2d3e3bf2${_scopeId}></i><span class="amenity-name" data-v-2d3e3bf2${_scopeId}>${ssrInterpolate(amenity)}</span></div>`);
            });
            _push2(`<!--]--></div><p data-v-2d3e3bf2${_scopeId}><strong data-v-2d3e3bf2${_scopeId}>\u{1F525} Tr\u1EA1ng th\xE1i:</strong><span class="${ssrRenderClass(room.value.tinhTrang === "1" ? "status-available" : "status-unavailable")}" data-v-2d3e3bf2${_scopeId}>${ssrInterpolate(room.value.tinhTrang === "1" ? "C\xF2n tr\u1ED1ng" : "\u0110\xE3 \u0111\u1EB7t")}</span></p></div><div class="actions" data-v-2d3e3bf2${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_button, {
              disabled: room.value.tinhTrang !== "1",
              color: "primary",
              class: "book-button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_nuxt_link, {
                    to: {
                      name: "DatPhong",
                      params: { maPhong: room.value.maPhong }
                    },
                    class: "link-inside-button"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u{1F4E9} \u0110\u1EB7t ph\xF2ng `);
                      } else {
                        return [
                          createTextVNode(" \u{1F4E9} \u0110\u1EB7t ph\xF2ng ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_nuxt_link, {
                      to: {
                        name: "DatPhong",
                        params: { maPhong: room.value.maPhong }
                      },
                      class: "link-inside-button"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u{1F4E9} \u0110\u1EB7t ph\xF2ng ")
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_va_button, {
              color: "secondary",
              class: "share-button",
              onClick: shareRoom
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u{1F4E4} Chia s\u1EBB ph\xF2ng `);
                } else {
                  return [
                    createTextVNode(" \u{1F4E4} Chia s\u1EBB ph\xF2ng ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/Phong",
              class: "back-button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Quay l\u1EA1i danh s\xE1ch ph\xF2ng`);
                } else {
                  return [
                    createTextVNode("Quay l\u1EA1i danh s\xE1ch ph\xF2ng")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "info-content" }, [
                createVNode("h1", { class: "room-title" }, toDisplayString(room.value.loaiPhong) + " (M\xE3: " + toDisplayString(room.value.maPhong) + ")", 1),
                createVNode("p", null, [
                  createVNode("strong", null, "\u{1F4B5} Gi\xE1:"),
                  createTextVNode(" " + toDisplayString(room.value.giaPhong) + " VND", 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "\u{1F3E2} T\u1EA7ng:"),
                  createTextVNode(" " + toDisplayString(room.value.tang), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "\u{1F6CF}\uFE0F Ki\u1EC3u gi\u01B0\u1EDDng:"),
                  createTextVNode(" " + toDisplayString(room.value.kieuGiuong), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "\u{1F4DD} M\xF4 t\u1EA3:"),
                  createTextVNode(" " + toDisplayString(room.value.moTa), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "\u{1F4F6} Ti\u1EC7n nghi:")
                ]),
                createVNode("div", { class: "amenities animate__animated animate__fadeIn" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(room.value.tienNghiList, (amenity, index) => {
                    var _a;
                    return openBlock(), createBlock("div", {
                      class: "amenity animate__animated animate__bounce",
                      key: index
                    }, [
                      createVNode("i", {
                        class: [((_a = amenitiesMap[amenity]) == null ? void 0 : _a.icon) || defaultAmenityIcon, "amenity-icon"]
                      }, null, 2),
                      createVNode("span", { class: "amenity-name" }, toDisplayString(amenity), 1)
                    ]);
                  }), 128))
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "\u{1F525} Tr\u1EA1ng th\xE1i:"),
                  createVNode("span", {
                    class: room.value.tinhTrang === "1" ? "status-available" : "status-unavailable"
                  }, toDisplayString(room.value.tinhTrang === "1" ? "C\xF2n tr\u1ED1ng" : "\u0110\xE3 \u0111\u1EB7t"), 3)
                ])
              ]),
              createVNode("div", { class: "actions" }, [
                createVNode(_component_va_button, {
                  disabled: room.value.tinhTrang !== "1",
                  color: "primary",
                  class: "book-button"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_nuxt_link, {
                      to: {
                        name: "DatPhong",
                        params: { maPhong: room.value.maPhong }
                      },
                      class: "link-inside-button"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u{1F4E9} \u0110\u1EB7t ph\xF2ng ")
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                createVNode(_component_va_button, {
                  color: "secondary",
                  class: "share-button",
                  onClick: shareRoom
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u{1F4E4} Chia s\u1EBB ph\xF2ng ")
                  ]),
                  _: 1
                }),
                createVNode(_component_nuxt_link, {
                  to: "/Phong",
                  class: "back-button"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Quay l\u1EA1i danh s\xE1ch ph\xF2ng")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (loading.value) {
        _push(ssrRenderComponent(_component_va_loading, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Phong/[maPhong].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _maPhong_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d3e3bf2"]]);

export { _maPhong_ as default };
//# sourceMappingURL=_maPhong_-CV4Gc0qM.mjs.map
