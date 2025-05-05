import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { ref, computed, resolveComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import { a as useThemeStore } from './server.mjs';
import { T as TheHeader } from './Header.vue.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue-router/dist/vue-router.node.mjs';
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
  __name: "dichvu",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    const services = ref([]);
    const filterName = ref("");
    const filterPrice = ref(null);
    const priceOptions = [
      { value: "low", label: "Dưới 500,000 VND" },
      { value: "medium", label: "500,000 - 1,000,000 VND" },
      { value: "high", label: "Trên 1,000,000 VND" }
    ];
    const filteredServices = computed(() => {
      return services.value.filter((service) => {
        const matchesName = service.tenDichVu.toLowerCase().includes(filterName.value.toLowerCase());
        const matchesPrice = !filterPrice.value || filterPrice.value === "low" && service.donGia < 5e5 || filterPrice.value === "medium" && service.donGia >= 5e5 && service.donGia <= 1e6 || filterPrice.value === "high" && service.donGia > 1e6;
        return matchesName && matchesPrice;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_input = resolveComponent("va-input");
      const _component_va_select = resolveComponent("va-select");
      const _component_va_card = resolveComponent("va-card");
      const _component_va_card_title = resolveComponent("va-card-title");
      const _component_va_card_content = resolveComponent("va-card-content");
      const _component_va_card_actions = resolveComponent("va-card-actions");
      const _component_nuxt_link = __nuxt_component_0;
      const _component_va_button = resolveComponent("va-button");
      const _component_NuxtChild = resolveComponent("NuxtChild");
      _push(`<!--[--><header data-v-10ec7810>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["service-list-container", { "dark-mode": unref(theme).isDarkMode }])}" data-v-10ec7810><h1 class="page-title" data-v-10ec7810>Danh sách dịch vụ</h1><div class="filter-bar" data-v-10ec7810>`);
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: filterName.value,
        "onUpdate:modelValue": ($event) => filterName.value = $event,
        placeholder: "Tìm kiếm theo tên dịch vụ",
        class: "filter-input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: filterPrice.value,
        "onUpdate:modelValue": ($event) => filterPrice.value = $event,
        options: priceOptions,
        placeholder: "Lọc theo giá",
        class: "filter-select"
      }, null, _parent));
      _push(`</div><div class="service-cards" data-v-10ec7810><!--[-->`);
      ssrRenderList(filteredServices.value, (service) => {
        _push(ssrRenderComponent(_component_va_card, {
          key: service.maChiTietDichVu,
          class: "service-card",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", service.urlAnh)} alt="Hình ảnh dịch vụ" class="service-image" data-v-10ec7810${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_card_title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="service-title"${ssrRenderAttr("title", service.tenDichVu)} data-v-10ec7810${_scopeId2}>${ssrInterpolate(service.tenDichVu)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "service-title",
                        title: service.tenDichVu
                      }, toDisplayString(service.tenDichVu), 9, ["title"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_va_card_content, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="service-price" data-v-10ec7810${_scopeId2}>${ssrInterpolate(service.donGia.toLocaleString())} VND / 1 đêm </p>`);
                  } else {
                    return [
                      createVNode("p", { class: "service-price" }, toDisplayString(service.donGia.toLocaleString()) + " VND / 1 đêm ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_va_card_actions, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: `/DichVu/${service.maChiTietDichVu}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_va_button, { color: "primary" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Xem Chi Tiết`);
                              } else {
                                return [
                                  createTextVNode("Xem Chi Tiết")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_va_button, { color: "primary" }, {
                              default: withCtx(() => [
                                createTextVNode("Xem Chi Tiết")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_nuxt_link, {
                        to: `/DichVu/${service.maChiTietDichVu}`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_va_button, { color: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode("Xem Chi Tiết")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("img", {
                  src: service.urlAnh,
                  alt: "Hình ảnh dịch vụ",
                  class: "service-image"
                }, null, 8, ["src"]),
                createVNode(_component_va_card_title, null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: "service-title",
                      title: service.tenDichVu
                    }, toDisplayString(service.tenDichVu), 9, ["title"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_va_card_content, null, {
                  default: withCtx(() => [
                    createVNode("p", { class: "service-price" }, toDisplayString(service.donGia.toLocaleString()) + " VND / 1 đêm ", 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_va_card_actions, null, {
                  default: withCtx(() => [
                    createVNode(_component_nuxt_link, {
                      to: `/DichVu/${service.maChiTietDichVu}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_va_button, { color: "primary" }, {
                          default: withCtx(() => [
                            createTextVNode("Xem Chi Tiết")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtChild, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dichvu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dichvu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10ec7810"]]);

export { dichvu as default };
//# sourceMappingURL=dichvu.vue.mjs.map
