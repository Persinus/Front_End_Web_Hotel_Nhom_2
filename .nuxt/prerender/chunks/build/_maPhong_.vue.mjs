import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, resolveComponent, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue-router/dist/vue-router.node.mjs';
import { a as useThemeStore, b as useNuxtApp } from './server.mjs';
import { T as TheHeader } from './Header.vue.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/axios/index.js';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vuestic-ui/dist/esm-node/main.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/qrcode.vue/dist/qrcode.vue.esm.js';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/element-plus/es/index.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unhead/dist/utils.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/devalue/index.js';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unhead/dist/plugins.mjs';

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
    const closeImage = () => {
      isImageModalOpen.value = false;
    };
    const shareRoom = async () => {
      const link = (void 0).location.href;
      try {
        await (void 0).clipboard.writeText(link);
        alert("📤 Đã sao chép link phòng vào clipboard!");
      } catch (err) {
        alert("❌ Sao chép thất bại, vui lòng thử lại.");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_button = resolveComponent("va-button");
      const _component_va_card = resolveComponent("va-card");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_va_loading = resolveComponent("va-loading");
      _push(`<!--[--><header data-v-68d31b05>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["room-details-container", { "dark-mode": unref(theme).isDarkMode }])}" data-v-68d31b05><div class="room-gallery" data-v-68d31b05><div class="main-image" data-v-68d31b05><img${ssrRenderAttr("src", images.value[0])} alt="Ảnh chính" class="gallery-img" data-v-68d31b05></div><div class="sub-images" data-v-68d31b05><!--[-->`);
      ssrRenderList(subImages.value, (img, index) => {
        _push(`<div class="sub-image" data-v-68d31b05><img${ssrRenderAttr("src", img)} alt="&#39;Ảnh phụ &#39; + (index + 1)" class="gallery-img" data-v-68d31b05></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (isImageModalOpen.value) {
        _push(`<div class="image-modal" data-v-68d31b05><div class="modal-content" data-v-68d31b05><img${ssrRenderAttr("src", images.value[currentSlide.value])} alt="Phóng to ảnh" class="modal-img zoom-img" data-v-68d31b05>`);
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
            _push2(`<div class="info-content" data-v-68d31b05${_scopeId}><h1 class="room-title" data-v-68d31b05${_scopeId}>${ssrInterpolate(room.value.loaiPhong)} (Mã: ${ssrInterpolate(room.value.maPhong)})</h1><p data-v-68d31b05${_scopeId}><strong data-v-68d31b05${_scopeId}>💵 Giá:</strong> ${ssrInterpolate(room.value.giaPhong)} VND</p><p data-v-68d31b05${_scopeId}><strong data-v-68d31b05${_scopeId}>🏢 Tầng:</strong> ${ssrInterpolate(room.value.tang)}</p><p data-v-68d31b05${_scopeId}><strong data-v-68d31b05${_scopeId}>🛏️ Kiểu giường:</strong> ${ssrInterpolate(room.value.kieuGiuong)}</p><p data-v-68d31b05${_scopeId}><strong data-v-68d31b05${_scopeId}>📝 Mô tả:</strong> ${ssrInterpolate(room.value.moTa)}</p><p data-v-68d31b05${_scopeId}><strong data-v-68d31b05${_scopeId}>📶 Tiện nghi:</strong> ${ssrInterpolate(room.value.tienNghiList.join(", "))}</p><p data-v-68d31b05${_scopeId}><strong data-v-68d31b05${_scopeId}>🔥 Trạng thái:</strong><span class="${ssrRenderClass(room.value.tinhTrang === "1" ? "status-available" : "status-unavailable")}" data-v-68d31b05${_scopeId}>${ssrInterpolate(room.value.tinhTrang === "1" ? "Còn trống" : "Đã đặt")}</span></p></div><div class="actions" data-v-68d31b05${_scopeId}>`);
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
                        _push4(` 📩 Đặt phòng `);
                      } else {
                        return [
                          createTextVNode(" 📩 Đặt phòng ")
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
                        createTextVNode(" 📩 Đặt phòng ")
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
                  _push3(` 📤 Chia sẻ phòng `);
                } else {
                  return [
                    createTextVNode(" 📤 Chia sẻ phòng ")
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
                  _push3(`Quay lại danh sách phòng`);
                } else {
                  return [
                    createTextVNode("Quay lại danh sách phòng")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "info-content" }, [
                createVNode("h1", { class: "room-title" }, toDisplayString(room.value.loaiPhong) + " (Mã: " + toDisplayString(room.value.maPhong) + ")", 1),
                createVNode("p", null, [
                  createVNode("strong", null, "💵 Giá:"),
                  createTextVNode(" " + toDisplayString(room.value.giaPhong) + " VND", 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "🏢 Tầng:"),
                  createTextVNode(" " + toDisplayString(room.value.tang), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "🛏️ Kiểu giường:"),
                  createTextVNode(" " + toDisplayString(room.value.kieuGiuong), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "📝 Mô tả:"),
                  createTextVNode(" " + toDisplayString(room.value.moTa), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "📶 Tiện nghi:"),
                  createTextVNode(" " + toDisplayString(room.value.tienNghiList.join(", ")), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "🔥 Trạng thái:"),
                  createVNode("span", {
                    class: room.value.tinhTrang === "1" ? "status-available" : "status-unavailable"
                  }, toDisplayString(room.value.tinhTrang === "1" ? "Còn trống" : "Đã đặt"), 3)
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
                        createTextVNode(" 📩 Đặt phòng ")
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
                    createTextVNode(" 📤 Chia sẻ phòng ")
                  ]),
                  _: 1
                }),
                createVNode(_component_nuxt_link, {
                  to: "/Phong",
                  class: "back-button"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Quay lại danh sách phòng")
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
const _maPhong_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-68d31b05"]]);

export { _maPhong_ as default };
//# sourceMappingURL=_maPhong_.vue.mjs.map
