import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { ref, computed, unref, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import "C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/klona/dist/index.mjs";
import "C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { useThemeStore } from "../store/DarkMode.mjs";
import { useLanguageStore } from "../store/Language.mjs";
import TheHeader from "../Components/Header.vue.mjs";
import { VaCard, VaInput, VaSelect, VaButton, VaInnerLoading, VaCardTitle, VaCardContent, VaCardActions, VaAlert } from "vuestic-ui";
/* empty css            */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "phong",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    const languageStore = useLanguageStore();
    const rooms = ref([]);
    const filteredRooms = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const filters = ref({ maPhong: "", loaiPhong: "", giaPhong: "", tang: "", trangThai: "" });
    const { $api } = useNuxtApp();
    const translations = computed(() => {
      const lang = languageStore.currentLanguage;
      return {
        title: lang === "vn" ? "Danh Sách Phòng" : "Room List",
        roomId: lang === "vn" ? "Mã phòng" : "Room ID",
        enterRoomId: lang === "vn" ? "Nhập mã phòng" : "Enter Room ID",
        roomType: lang === "vn" ? "Loại phòng" : "Room Type",
        enterRoomType: lang === "vn" ? "Nhập loại phòng" : "Enter Room Type",
        maxPrice: lang === "vn" ? "Giá tối đa" : "Max Price",
        enterMaxPrice: lang === "vn" ? "Nhập giá tối đa" : "Enter Max Price",
        floor: lang === "vn" ? "Tầng" : "Floor",
        enterFloor: lang === "vn" ? "Nhập tầng" : "Enter Floor",
        status: lang === "vn" ? "Trạng thái" : "Status",
        all: lang === "vn" ? "Tất cả" : "All",
        available: lang === "vn" ? "Còn trống" : "Available",
        booked: lang === "vn" ? "Đã đặt" : "Booked",
        sortAsc: lang === "vn" ? "Giá tăng dần" : "Sort Ascending",
        sortDesc: lang === "vn" ? "Giá giảm dần" : "Sort Descending",
        price: lang === "vn" ? "Giá" : "Price",
        bedType: lang === "vn" ? "Kiểu giường" : "Bed Type",
        viewDetails: lang === "vn" ? "Xem Chi Tiết" : "View Details",
        addToCart: lang === "vn" ? "Thêm vào giỏ" : "Add to Cart",
        noRooms: lang === "vn" ? "Không có phòng nào." : "No rooms available."
      };
    });
    const filterRooms = () => {
      filteredRooms.value = rooms.value.filter((room) => {
        return (filters.value.maPhong ? room.maPhong.includes(filters.value.maPhong) : true) && (filters.value.loaiPhong ? room.loaiPhong.includes(filters.value.loaiPhong) : true) && (filters.value.giaPhong ? room.giaPhong <= filters.value.giaPhong : true) && (filters.value.tang ? room.tang == filters.value.tang : true) && (filters.value.trangThai ? room.trangThai.includes(filters.value.trangThai) : true);
      });
    };
    const sortRooms = (order) => {
      filteredRooms.value = filteredRooms.value.sort((a, b) => {
        return order === "asc" ? a.giaPhong - b.giaPhong : b.giaPhong - a.giaPhong;
      });
    };
    const addToCart = (room) => {
      alert(`${translations.value.addToCart}: ${room.loaiPhong}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><header data-v-b14486ec>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["container", { "dark-mode": unref(themeStore).isDarkMode }])}" data-v-b14486ec><h1 class="header" data-v-b14486ec>${ssrInterpolate(translations.value.title)}</h1>`);
      _push(ssrRenderComponent(unref(VaCard), {
        outlined: "",
        class: "filter-form"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="filter-group" data-v-b14486ec${_scopeId}><label for="maPhong" data-v-b14486ec${_scopeId}>${ssrInterpolate(translations.value.roomId)}:</label>`);
            _push2(ssrRenderComponent(unref(VaInput), {
              id: "maPhong",
              modelValue: filters.value.maPhong,
              "onUpdate:modelValue": ($event) => filters.value.maPhong = $event,
              placeholder: translations.value.enterRoomId,
              outlined: "",
              onInput: filterRooms
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="filter-group" data-v-b14486ec${_scopeId}><label for="loaiPhong" data-v-b14486ec${_scopeId}>${ssrInterpolate(translations.value.roomType)}:</label>`);
            _push2(ssrRenderComponent(unref(VaInput), {
              id: "loaiPhong",
              modelValue: filters.value.loaiPhong,
              "onUpdate:modelValue": ($event) => filters.value.loaiPhong = $event,
              placeholder: translations.value.enterRoomType,
              outlined: "",
              onInput: filterRooms
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="filter-group" data-v-b14486ec${_scopeId}><label for="giaPhong" data-v-b14486ec${_scopeId}>${ssrInterpolate(translations.value.maxPrice)}:</label>`);
            _push2(ssrRenderComponent(unref(VaInput), {
              id: "giaPhong",
              modelValue: filters.value.giaPhong,
              "onUpdate:modelValue": ($event) => filters.value.giaPhong = $event,
              placeholder: translations.value.enterMaxPrice,
              outlined: "",
              type: "number",
              onInput: filterRooms
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="filter-group" data-v-b14486ec${_scopeId}><label for="tang" data-v-b14486ec${_scopeId}>${ssrInterpolate(translations.value.floor)}:</label>`);
            _push2(ssrRenderComponent(unref(VaInput), {
              id: "tang",
              modelValue: filters.value.tang,
              "onUpdate:modelValue": ($event) => filters.value.tang = $event,
              placeholder: translations.value.enterFloor,
              outlined: "",
              type: "number",
              onInput: filterRooms
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="filter-group" data-v-b14486ec${_scopeId}><label for="trangThai" data-v-b14486ec${_scopeId}>${ssrInterpolate(translations.value.status)}:</label>`);
            _push2(ssrRenderComponent(unref(VaSelect), {
              id: "trangThai",
              modelValue: filters.value.trangThai,
              "onUpdate:modelValue": ($event) => filters.value.trangThai = $event,
              options: [
                { value: "", label: translations.value.all },
                { value: "Còn trống", label: translations.value.available },
                { value: "Đã đặt", label: translations.value.booked }
              ],
              outlined: "",
              onChange: filterRooms
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="filter-actions" data-v-b14486ec${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VaButton), {
              color: "primary",
              onClick: ($event) => sortRooms("asc")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(translations.value.sortAsc)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(translations.value.sortAsc), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VaButton), {
              color: "primary",
              onClick: ($event) => sortRooms("desc")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(translations.value.sortDesc)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(translations.value.sortDesc), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "filter-group" }, [
                createVNode("label", { for: "maPhong" }, toDisplayString(translations.value.roomId) + ":", 1),
                createVNode(unref(VaInput), {
                  id: "maPhong",
                  modelValue: filters.value.maPhong,
                  "onUpdate:modelValue": ($event) => filters.value.maPhong = $event,
                  placeholder: translations.value.enterRoomId,
                  outlined: "",
                  onInput: filterRooms
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ]),
              createVNode("div", { class: "filter-group" }, [
                createVNode("label", { for: "loaiPhong" }, toDisplayString(translations.value.roomType) + ":", 1),
                createVNode(unref(VaInput), {
                  id: "loaiPhong",
                  modelValue: filters.value.loaiPhong,
                  "onUpdate:modelValue": ($event) => filters.value.loaiPhong = $event,
                  placeholder: translations.value.enterRoomType,
                  outlined: "",
                  onInput: filterRooms
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ]),
              createVNode("div", { class: "filter-group" }, [
                createVNode("label", { for: "giaPhong" }, toDisplayString(translations.value.maxPrice) + ":", 1),
                createVNode(unref(VaInput), {
                  id: "giaPhong",
                  modelValue: filters.value.giaPhong,
                  "onUpdate:modelValue": ($event) => filters.value.giaPhong = $event,
                  placeholder: translations.value.enterMaxPrice,
                  outlined: "",
                  type: "number",
                  onInput: filterRooms
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ]),
              createVNode("div", { class: "filter-group" }, [
                createVNode("label", { for: "tang" }, toDisplayString(translations.value.floor) + ":", 1),
                createVNode(unref(VaInput), {
                  id: "tang",
                  modelValue: filters.value.tang,
                  "onUpdate:modelValue": ($event) => filters.value.tang = $event,
                  placeholder: translations.value.enterFloor,
                  outlined: "",
                  type: "number",
                  onInput: filterRooms
                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])
              ]),
              createVNode("div", { class: "filter-group" }, [
                createVNode("label", { for: "trangThai" }, toDisplayString(translations.value.status) + ":", 1),
                createVNode(unref(VaSelect), {
                  id: "trangThai",
                  modelValue: filters.value.trangThai,
                  "onUpdate:modelValue": ($event) => filters.value.trangThai = $event,
                  options: [
                    { value: "", label: translations.value.all },
                    { value: "Còn trống", label: translations.value.available },
                    { value: "Đã đặt", label: translations.value.booked }
                  ],
                  outlined: "",
                  onChange: filterRooms
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
              ]),
              createVNode("div", { class: "filter-actions" }, [
                createVNode(unref(VaButton), {
                  color: "primary",
                  onClick: ($event) => sortRooms("asc")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(translations.value.sortAsc), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(unref(VaButton), {
                  color: "primary",
                  onClick: ($event) => sortRooms("desc")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(translations.value.sortDesc), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(VaInnerLoading), {
        loading: loading.value,
        color: "danger",
        type: "rectangle-bounce"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (error.value) {
              _push2(`<div class="error-message" data-v-b14486ec${_scopeId}> Lỗi: ${ssrInterpolate(error.value)}</div>`);
            } else if (filteredRooms.value.length) {
              _push2(`<div class="services-grid" data-v-b14486ec${_scopeId}><!--[-->`);
              ssrRenderList(filteredRooms.value, (room) => {
                _push2(ssrRenderComponent(unref(VaCard), {
                  key: room.maPhong,
                  class: "room-card",
                  outlined: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", room.urlAnhChinh)} alt="Hình ảnh phòng" class="room-image" data-v-b14486ec${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(VaCardTitle), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="room-title" data-v-b14486ec${_scopeId3}>${ssrInterpolate(room.loaiPhong)}</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "room-title" }, toDisplayString(room.loaiPhong), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(VaCardContent), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<p class="room-price" data-v-b14486ec${_scopeId3}>${ssrInterpolate(translations.value.price)}: <strong data-v-b14486ec${_scopeId3}>${ssrInterpolate(room.giaPhong.toLocaleString())} VND</strong></p><p class="room-floor" data-v-b14486ec${_scopeId3}>${ssrInterpolate(translations.value.floor)}: ${ssrInterpolate(room.tang)}</p><p class="room-bed-type" data-v-b14486ec${_scopeId3}>${ssrInterpolate(translations.value.bedType)}: ${ssrInterpolate(room.kieuGiuong)}</p><span class="${ssrRenderClass([room.trangThai === "Còn trống" ? "available" : "booked", "room-status"])}" data-v-b14486ec${_scopeId3}>${ssrInterpolate(room.trangThai === "Còn trống" ? translations.value.available : translations.value.booked)}</span>`);
                          } else {
                            return [
                              createVNode("p", { class: "room-price" }, [
                                createTextVNode(toDisplayString(translations.value.price) + ": ", 1),
                                createVNode("strong", null, toDisplayString(room.giaPhong.toLocaleString()) + " VND", 1)
                              ]),
                              createVNode("p", { class: "room-floor" }, toDisplayString(translations.value.floor) + ": " + toDisplayString(room.tang), 1),
                              createVNode("p", { class: "room-bed-type" }, toDisplayString(translations.value.bedType) + ": " + toDisplayString(room.kieuGiuong), 1),
                              createVNode("span", {
                                class: ["room-status", room.trangThai === "Còn trống" ? "available" : "booked"]
                              }, toDisplayString(room.trangThai === "Còn trống" ? translations.value.available : translations.value.booked), 3)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(unref(VaCardActions), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_nuxt_link, {
                              to: `/phong/${room.maPhong}`,
                              class: "view-details"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(unref(VaButton), { color: "primary" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(translations.value.viewDetails)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(translations.value.viewDetails), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(unref(VaButton), { color: "primary" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(translations.value.viewDetails), 1)
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(unref(VaButton), {
                              color: "success",
                              onClick: ($event) => addToCart(room)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(translations.value.addToCart)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(translations.value.addToCart), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_nuxt_link, {
                                to: `/phong/${room.maPhong}`,
                                class: "view-details"
                              }, {
                                default: withCtx(() => [
                                  createVNode(unref(VaButton), { color: "primary" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(translations.value.viewDetails), 1)
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["to"]),
                              createVNode(unref(VaButton), {
                                color: "success",
                                onClick: ($event) => addToCart(room)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(translations.value.addToCart), 1)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("img", {
                          src: room.urlAnhChinh,
                          alt: "Hình ảnh phòng",
                          class: "room-image"
                        }, null, 8, ["src"]),
                        createVNode(unref(VaCardTitle), null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "room-title" }, toDisplayString(room.loaiPhong), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(VaCardContent), null, {
                          default: withCtx(() => [
                            createVNode("p", { class: "room-price" }, [
                              createTextVNode(toDisplayString(translations.value.price) + ": ", 1),
                              createVNode("strong", null, toDisplayString(room.giaPhong.toLocaleString()) + " VND", 1)
                            ]),
                            createVNode("p", { class: "room-floor" }, toDisplayString(translations.value.floor) + ": " + toDisplayString(room.tang), 1),
                            createVNode("p", { class: "room-bed-type" }, toDisplayString(translations.value.bedType) + ": " + toDisplayString(room.kieuGiuong), 1),
                            createVNode("span", {
                              class: ["room-status", room.trangThai === "Còn trống" ? "available" : "booked"]
                            }, toDisplayString(room.trangThai === "Còn trống" ? translations.value.available : translations.value.booked), 3)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(unref(VaCardActions), null, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, {
                              to: `/phong/${room.maPhong}`,
                              class: "view-details"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(VaButton), { color: "primary" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(translations.value.viewDetails), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["to"]),
                            createVNode(unref(VaButton), {
                              color: "success",
                              onClick: ($event) => addToCart(room)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(translations.value.addToCart), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!--[-->`);
              if (!loading.value) {
                _push2(ssrRenderComponent(unref(VaAlert), {
                  type: "info",
                  class: "no-services"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(translations.value.noRooms)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(translations.value.noRooms), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              error.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "error-message"
              }, " Lỗi: " + toDisplayString(error.value), 1)) : filteredRooms.value.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "services-grid"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(filteredRooms.value, (room) => {
                  return openBlock(), createBlock(unref(VaCard), {
                    key: room.maPhong,
                    class: "room-card",
                    outlined: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: room.urlAnhChinh,
                        alt: "Hình ảnh phòng",
                        class: "room-image"
                      }, null, 8, ["src"]),
                      createVNode(unref(VaCardTitle), null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "room-title" }, toDisplayString(room.loaiPhong), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(VaCardContent), null, {
                        default: withCtx(() => [
                          createVNode("p", { class: "room-price" }, [
                            createTextVNode(toDisplayString(translations.value.price) + ": ", 1),
                            createVNode("strong", null, toDisplayString(room.giaPhong.toLocaleString()) + " VND", 1)
                          ]),
                          createVNode("p", { class: "room-floor" }, toDisplayString(translations.value.floor) + ": " + toDisplayString(room.tang), 1),
                          createVNode("p", { class: "room-bed-type" }, toDisplayString(translations.value.bedType) + ": " + toDisplayString(room.kieuGiuong), 1),
                          createVNode("span", {
                            class: ["room-status", room.trangThai === "Còn trống" ? "available" : "booked"]
                          }, toDisplayString(room.trangThai === "Còn trống" ? translations.value.available : translations.value.booked), 3)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(VaCardActions), null, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_link, {
                            to: `/phong/${room.maPhong}`,
                            class: "view-details"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(VaButton), { color: "primary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(translations.value.viewDetails), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          createVNode(unref(VaButton), {
                            color: "success",
                            onClick: ($event) => addToCart(room)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(translations.value.addToCart), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                !loading.value ? (openBlock(), createBlock(unref(VaAlert), {
                  key: 0,
                  type: "info",
                  class: "no-services"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(translations.value.noRooms), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ], 64))
            ];
          }
        }),
        _: 1
      }, _parent));
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
const phong = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b14486ec"]]);
export {
  phong as default
};
//# sourceMappingURL=phong.vue.mjs.map
