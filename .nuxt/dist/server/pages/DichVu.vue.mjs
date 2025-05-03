import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, computed, resolveComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import "C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/klona/dist/index.mjs";
import "C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { useThemeStore } from "../store/DarkMode.mjs";
import TheHeader from "../Components/Header.vue.mjs";
/* empty css             */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "DichVu",
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
    const { $api } = useNuxtApp();
    useRouter();
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
      _push(`<!--[--><header data-v-4cb1ec28>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["service-list-container", { "dark-mode": unref(theme).isDarkMode }])}" data-v-4cb1ec28><h1 class="page-title" data-v-4cb1ec28>Danh sách dịch vụ</h1><div class="filter-bar" data-v-4cb1ec28>`);
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
      _push(`</div><div class="service-cards" data-v-4cb1ec28><!--[-->`);
      ssrRenderList(filteredServices.value, (service) => {
        _push(ssrRenderComponent(_component_va_card, {
          key: service.maChiTietDichVu,
          class: "service-card",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", service.urlAnh)} alt="Hình ảnh dịch vụ" class="service-image" data-v-4cb1ec28${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_card_title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="service-title"${ssrRenderAttr("title", service.tenDichVu)} data-v-4cb1ec28${_scopeId2}>${ssrInterpolate(service.tenDichVu)}</div>`);
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
                    _push3(`<p class="service-price" data-v-4cb1ec28${_scopeId2}>${ssrInterpolate(service.donGia.toLocaleString())} VND / 1 đêm </p>`);
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
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DichVu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DichVu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4cb1ec28"]]);
export {
  DichVu as default
};
//# sourceMappingURL=DichVu.vue.mjs.map
