import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import { a as useThemeStore, b as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ufo/dist/index.mjs';
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

const itemsPerPage = 5;
const _sfc_main = {
  __name: "letan",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    theme.initializeDarkMode();
    const currentTab = ref("phong");
    const rooms = ref([]);
    const currentPage = ref(0);
    const showEditModal = ref(false);
    const editingRoom = ref(null);
    const sidebarItems = [
      { key: "khachhang", title: "Khách hàng", icon: "person" },
      { key: "phong", title: "Phòng", icon: "hotel" },
      { key: "dichvu", title: "Dịch vụ", icon: "shopping_cart" },
      { key: "caidat", title: "Cài đặt", icon: "settings" }
    ];
    const { $api } = useNuxtApp();
    const paginatedRooms = computed(() => {
      const start = currentPage.value * itemsPerPage;
      return rooms.value.slice(start, start + itemsPerPage);
    });
    const totalPages = computed(() => Math.ceil(rooms.value.length / itemsPerPage));
    const getStatusText = (status) => {
      switch (status) {
        case "1":
          return "Còn Trống";
        case "2":
          return "Đã Đặt";
        case "3":
          return "Đang Sử Dụng";
        case "4":
          return "Đang Vệ Sinh";
        default:
          return "Không xác định";
      }
    };
    const getStatusClass = (status) => {
      switch (status) {
        case "1":
          return "status-available";
        case "2":
          return "status-booked";
        case "3":
          return "status-in-use";
        case "4":
          return "status-cleaning";
        default:
          return "";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VaSidebar = resolveComponent("VaSidebar");
      const _component_VaSidebarItem = resolveComponent("VaSidebarItem");
      const _component_VaSidebarItemContent = resolveComponent("VaSidebarItemContent");
      const _component_VaIcon = resolveComponent("VaIcon");
      const _component_VaSidebarItemTitle = resolveComponent("VaSidebarItemTitle");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["letan-page", { "dark-mode": unref(theme).isDarkMode }]
      }, _attrs))} data-v-3fddae5d>`);
      _push(ssrRenderComponent(_component_VaSidebar, {
        color: "primary",
        class: "sidebar"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(sidebarItems, (item) => {
              _push2(ssrRenderComponent(_component_VaSidebarItem, {
                key: item.key,
                onClick: ($event) => currentTab.value = item.key,
                class: { active: currentTab.value === item.key }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_VaSidebarItemContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_VaIcon, {
                            name: item.icon
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_VaSidebarItemTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_VaIcon, {
                              name: item.icon
                            }, null, 8, ["name"]),
                            createVNode(_component_VaSidebarItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_VaSidebarItemContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_VaIcon, {
                            name: item.icon
                          }, null, 8, ["name"]),
                          createVNode(_component_VaSidebarItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(sidebarItems, (item) => {
                return createVNode(_component_VaSidebarItem, {
                  key: item.key,
                  onClick: ($event) => currentTab.value = item.key,
                  class: { active: currentTab.value === item.key }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_VaSidebarItemContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_VaIcon, {
                          name: item.icon
                        }, null, 8, ["name"]),
                        createVNode(_component_VaSidebarItemTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="main-content" data-v-3fddae5d><h1 class="page-title" data-v-3fddae5d>Trang Lễ Tân</h1>`);
      if (currentTab.value === "phong") {
        _push(`<div class="tab-content" data-v-3fddae5d><h2 class="section-title" data-v-3fddae5d>Quản lý phòng</h2><p class="section-description" data-v-3fddae5d>Danh sách phòng, tình trạng phòng, và đặt phòng.</p><div class="table-wrapper" data-v-3fddae5d><table class="custom-table" data-v-3fddae5d><thead data-v-3fddae5d><tr data-v-3fddae5d><th data-v-3fddae5d>#</th><th data-v-3fddae5d>Tên phòng</th><th data-v-3fddae5d>Tiện nghi</th><th data-v-3fddae5d>Trạng thái</th><th data-v-3fddae5d>Hành động</th></tr></thead><tbody data-v-3fddae5d><!--[-->`);
        ssrRenderList(paginatedRooms.value, (room, index) => {
          _push(`<tr data-v-3fddae5d><td data-v-3fddae5d>${ssrInterpolate(currentPage.value * itemsPerPage + index + 1)}</td><td data-v-3fddae5d>${ssrInterpolate(room.loaiPhong)}</td><td data-v-3fddae5d>${ssrInterpolate(room.tienNghiList.join(", "))}</td><td data-v-3fddae5d><span class="${ssrRenderClass(getStatusClass(room.tinhTrang))}" data-v-3fddae5d>${ssrInterpolate(getStatusText(room.tinhTrang))}</span></td><td data-v-3fddae5d><button class="btn-edit" data-v-3fddae5d>`);
          _push(ssrRenderComponent(_component_VaIcon, { name: "edit" }, null, _parent));
          _push(` Sửa </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="pagination" data-v-3fddae5d><!--[-->`);
        ssrRenderList(totalPages.value, (page) => {
          _push(`<button class="${ssrRenderClass({ active: currentPage.value === page - 1 })}" data-v-3fddae5d>${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showEditModal.value) {
        _push(`<div class="modal" data-v-3fddae5d><div class="modal-content" data-v-3fddae5d><h3 data-v-3fddae5d>Sửa thông tin phòng</h3><label for="roomName" data-v-3fddae5d>Tên phòng:</label><input id="roomName" type="text"${ssrRenderAttr("value", editingRoom.value.loaiPhong)} data-v-3fddae5d><label for="roomStatus" data-v-3fddae5d>Trạng thái:</label><select id="roomStatus" data-v-3fddae5d><option value="1" data-v-3fddae5d${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "1") : ssrLooseEqual(editingRoom.value.tinhTrang, "1")) ? " selected" : ""}>Còn Trống</option><option value="2" data-v-3fddae5d${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "2") : ssrLooseEqual(editingRoom.value.tinhTrang, "2")) ? " selected" : ""}>Đã Đặt</option><option value="3" data-v-3fddae5d${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "3") : ssrLooseEqual(editingRoom.value.tinhTrang, "3")) ? " selected" : ""}>Đang Sử Dụng</option><option value="4" data-v-3fddae5d${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "4") : ssrLooseEqual(editingRoom.value.tinhTrang, "4")) ? " selected" : ""}>Đang Vệ Sinh</option></select><div class="modal-actions" data-v-3fddae5d><button class="btn-primary" data-v-3fddae5d>Lưu</button><button class="btn-secondary" data-v-3fddae5d>Hủy</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/letan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const letan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3fddae5d"]]);

export { letan as default };
//# sourceMappingURL=letan.vue.mjs.map
