import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useThemeStore } from "../store/DarkMode.mjs";
import "../utils/axiosBase.mjs";
/* empty css            */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const itemsPerPage = 5;
const itemsPerPageService = 5;
const _sfc_main = {
  __name: "letan",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    theme.initializeDarkMode();
    const currentTab = ref("phong");
    const rooms = ref([]);
    const services = ref([]);
    const currentPage = ref(0);
    const currentPageService = ref(0);
    const showEditModal = ref(false);
    const showEditServiceModal = ref(false);
    const editingRoom = ref(null);
    const editingService = ref(null);
    const sidebarItems = [
      { key: "khachhang", title: "Khách hàng", icon: "person" },
      { key: "phong", title: "Phòng", icon: "hotel" },
      { key: "dichvu", title: "Dịch vụ", icon: "shopping_cart" },
      { key: "caidat", title: "Cài đặt", icon: "settings" }
    ];
    const paginatedRooms = computed(() => {
      const start = currentPage.value * itemsPerPage;
      return rooms.value.slice(start, start + itemsPerPage);
    });
    const totalPages = computed(() => Math.ceil(rooms.value.length / itemsPerPage));
    const paginatedServices = computed(() => {
      const start = currentPageService.value * itemsPerPageService;
      return services.value.slice(start, start + itemsPerPageService);
    });
    const totalPagesService = computed(
      () => Math.ceil(services.value.length / itemsPerPageService)
    );
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
      }, _attrs))} data-v-9074db44>`);
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
      _push(`<div class="main-content" data-v-9074db44><h1 class="page-title" data-v-9074db44>Trang Lễ Tân</h1>`);
      if (currentTab.value === "phong") {
        _push(`<div class="tab-content" data-v-9074db44><h2 class="section-title" data-v-9074db44>Quản lý phòng</h2><p class="section-description" data-v-9074db44>Danh sách phòng, tình trạng phòng, và đặt phòng.</p><div class="table-wrapper" data-v-9074db44><table class="custom-table" data-v-9074db44><thead data-v-9074db44><tr data-v-9074db44><th data-v-9074db44>#</th><th data-v-9074db44>Tên phòng</th><th data-v-9074db44>Tiện nghi</th><th data-v-9074db44>Trạng thái</th><th data-v-9074db44>Hành động</th></tr></thead><tbody data-v-9074db44><!--[-->`);
        ssrRenderList(paginatedRooms.value, (room, index) => {
          _push(`<tr data-v-9074db44><td data-v-9074db44>${ssrInterpolate(currentPage.value * itemsPerPage + index + 1)}</td><td data-v-9074db44>${ssrInterpolate(room.loaiPhong)}</td><td data-v-9074db44>${ssrInterpolate(room.tienNghiList.join(", "))}</td><td data-v-9074db44><span class="${ssrRenderClass(getStatusClass(room.tinhTrang))}" data-v-9074db44>${ssrInterpolate(getStatusText(room.tinhTrang))}</span></td><td data-v-9074db44><button class="btn-edit" data-v-9074db44>`);
          _push(ssrRenderComponent(_component_VaIcon, { name: "edit" }, null, _parent));
          _push(` Sửa </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="pagination" data-v-9074db44><!--[-->`);
        ssrRenderList(totalPages.value, (page) => {
          _push(`<button class="${ssrRenderClass({ active: currentPage.value === page - 1 })}" data-v-9074db44>${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showEditModal.value) {
        _push(`<div class="modal" data-v-9074db44><div class="modal-content" data-v-9074db44><h3 data-v-9074db44>Sửa thông tin phòng</h3><label for="roomName" data-v-9074db44>Tên phòng:</label><input id="roomName" type="text"${ssrRenderAttr("value", editingRoom.value.loaiPhong)} data-v-9074db44><label for="roomStatus" data-v-9074db44>Trạng thái:</label><select id="roomStatus" data-v-9074db44><option value="1" data-v-9074db44${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "1") : ssrLooseEqual(editingRoom.value.tinhTrang, "1")) ? " selected" : ""}>Còn Trống</option><option value="2" data-v-9074db44${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "2") : ssrLooseEqual(editingRoom.value.tinhTrang, "2")) ? " selected" : ""}>Đã Đặt</option><option value="3" data-v-9074db44${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "3") : ssrLooseEqual(editingRoom.value.tinhTrang, "3")) ? " selected" : ""}>Đang Sử Dụng</option><option value="4" data-v-9074db44${ssrIncludeBooleanAttr(Array.isArray(editingRoom.value.tinhTrang) ? ssrLooseContain(editingRoom.value.tinhTrang, "4") : ssrLooseEqual(editingRoom.value.tinhTrang, "4")) ? " selected" : ""}>Đang Vệ Sinh</option></select><div class="modal-actions" data-v-9074db44><button class="btn-primary" data-v-9074db44>Lưu</button><button class="btn-secondary" data-v-9074db44>Hủy</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value === "dichvu") {
        _push(`<div class="tab-content" data-v-9074db44><h2 class="section-title" data-v-9074db44>Quản lý dịch vụ</h2><p class="section-description" data-v-9074db44>Danh sách dịch vụ và giá cả.</p><div class="table-wrapper" data-v-9074db44><table class="custom-table" data-v-9074db44><thead data-v-9074db44><tr data-v-9074db44><th data-v-9074db44>#</th><th data-v-9074db44>Tên dịch vụ</th><th data-v-9074db44>Giá</th><th data-v-9074db44>Hành động</th></tr></thead><tbody data-v-9074db44><!--[-->`);
        ssrRenderList(paginatedServices.value, (service, index) => {
          _push(`<tr data-v-9074db44><td data-v-9074db44>${ssrInterpolate(currentPageService.value * itemsPerPageService + index + 1)}</td><td data-v-9074db44>${ssrInterpolate(service.tenDichVu)}</td><td data-v-9074db44>${ssrInterpolate(service.donGia.toLocaleString())} VND</td><td data-v-9074db44><button class="btn-edit" data-v-9074db44>`);
          _push(ssrRenderComponent(_component_VaIcon, { name: "edit" }, null, _parent));
          _push(` Sửa </button></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="pagination" data-v-9074db44><!--[-->`);
        ssrRenderList(totalPagesService.value, (page) => {
          _push(`<button class="${ssrRenderClass({ active: currentPageService.value === page - 1 })}" data-v-9074db44>${ssrInterpolate(page)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showEditServiceModal.value) {
        _push(`<div class="modal" data-v-9074db44><div class="modal-content" data-v-9074db44><h3 data-v-9074db44>Sửa thông tin dịch vụ</h3><label for="serviceName" data-v-9074db44>Tên dịch vụ:</label><input id="serviceName" type="text"${ssrRenderAttr("value", editingService.value.tenDichVu)} data-v-9074db44><label for="servicePrice" data-v-9074db44>Giá:</label><input id="servicePrice" type="number"${ssrRenderAttr("value", editingService.value.donGia)} data-v-9074db44><div class="modal-actions" data-v-9074db44><button class="btn-primary" data-v-9074db44>Lưu</button><button class="btn-secondary" data-v-9074db44>Hủy</button></div></div></div>`);
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
const letan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9074db44"]]);
export {
  letan as default
};
//# sourceMappingURL=letan.vue.mjs.map
