import { _ as __nuxt_component_0 } from './nuxt-link-UMPBbWdB.mjs';
import { ref, computed, resolveComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { e as useThemeStore } from './server.mjs';
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
import 'vue-router';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';
import 'pinia';
import 'element-plus';
import './PhanQuyenCookie-BjQyveNS.mjs';

const _sfc_main = {
  __name: "dichvu",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    const services = ref([]);
    const filterName = ref("");
    const filterPrice = ref(null);
    const priceOptions = [
      { value: "low", label: "D\u01B0\u1EDBi 500,000 VND" },
      { value: "medium", label: "500,000 - 1,000,000 VND" },
      { value: "high", label: "Tr\xEAn 1,000,000 VND" }
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
      _push(`<!--[--><header data-v-60a09288>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["service-list-container", { "dark-mode": unref(theme).isDarkMode }])}" data-v-60a09288><h1 class="page-title" data-v-60a09288>Danh s\xE1ch d\u1ECBch v\u1EE5</h1><div class="filter-bar" data-v-60a09288>`);
      _push(ssrRenderComponent(_component_va_input, {
        modelValue: filterName.value,
        "onUpdate:modelValue": ($event) => filterName.value = $event,
        placeholder: "T\xECm ki\u1EBFm theo t\xEAn d\u1ECBch v\u1EE5",
        class: "filter-input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: filterPrice.value,
        "onUpdate:modelValue": ($event) => filterPrice.value = $event,
        options: priceOptions,
        placeholder: "L\u1ECDc theo gi\xE1",
        class: "filter-select"
      }, null, _parent));
      _push(`</div><div class="service-cards" data-v-60a09288><!--[-->`);
      ssrRenderList(filteredServices.value, (service) => {
        _push(ssrRenderComponent(_component_va_card, {
          key: service.maChiTietDichVu,
          class: "service-card",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", service.urlAnh)} alt="H\xECnh \u1EA3nh d\u1ECBch v\u1EE5" class="service-image" data-v-60a09288${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_card_title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="service-title"${ssrRenderAttr("title", service.tenDichVu)} data-v-60a09288${_scopeId2}>${ssrInterpolate(service.tenDichVu)}</div>`);
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
                    _push3(`<p class="service-price" data-v-60a09288${_scopeId2}>${ssrInterpolate(service.donGia.toLocaleString())} VND / 1 \u0111\xEAm </p>`);
                  } else {
                    return [
                      createVNode("p", { class: "service-price" }, toDisplayString(service.donGia.toLocaleString()) + " VND / 1 \u0111\xEAm ", 1)
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
                                _push5(`Xem Chi Ti\u1EBFt`);
                              } else {
                                return [
                                  createTextVNode("Xem Chi Ti\u1EBFt")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_va_button, { color: "primary" }, {
                              default: withCtx(() => [
                                createTextVNode("Xem Chi Ti\u1EBFt")
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
                              createTextVNode("Xem Chi Ti\u1EBFt")
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
                  alt: "H\xECnh \u1EA3nh d\u1ECBch v\u1EE5",
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
                    createVNode("p", { class: "service-price" }, toDisplayString(service.donGia.toLocaleString()) + " VND / 1 \u0111\xEAm ", 1)
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
                            createTextVNode("Xem Chi Ti\u1EBFt")
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
const dichvu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60a09288"]]);

export { dichvu as default };
//# sourceMappingURL=dichvu-Bfl4dUjg.mjs.map
