import { ref, resolveComponent, withCtx, createBlock, openBlock, createVNode, toDisplayString, createTextVNode, Fragment, renderList, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import { useRoute } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue-router/dist/vue-router.node.mjs';
import { b as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/h3/dist/index.mjs';
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

const _sfc_main = {
  __name: "DatPhong",
  __ssrInlineRender: true,
  setup(__props) {
    const bookingData = ref({
      cccd: "",
      sdt: "",
      ngayNhan: "",
      ngayTra: "",
      soNguoiLon: 1,
      soTreEm: 0,
      yeuCau: ""
    });
    const roomData = ref({
      tienNghiList: []
    });
    const loading = ref(true);
    const route = useRoute();
    const { $api } = useNuxtApp();
    route.params.maPhong;
    const getAmenityIcon = (amenity) => {
      const icons = {
        "Máy lạnh": "https://cdn-icons-png.flaticon.com/512/606/606792.png",
        "Tivi": "https://cdn-icons-png.flaticon.com/512/5110/5110853.png",
        "Wifi miễn phí": "https://cdn-icons-png.flaticon.com/512/2957/2957496.png",
        "Minibar": "https://cdn-icons-png.flaticon.com/512/1511/1511863.png",
        "Bộ trà/cà phê": "https://cdn-icons-png.flaticon.com/512/892/892668.png",
        "Tivi 55 inch": "https://cdn-icons-png.flaticon.com/512/1762/1762766.png"
      };
      return icons[amenity] || "https://cdn-icons-png.flaticon.com/512/565/565547.png";
    };
    const parsedAmenities = ref([]);
    const submitBooking = () => {
      if (!bookingData.value.cccd || !bookingData.value.sdt || !bookingData.value.ngayNhan || !bookingData.value.ngayTra) {
        alert("❌ Vui lòng điền đầy đủ thông tin!");
        return;
      }
      alert("🎉 Đặt phòng thành công!");
      console.log("Dữ liệu đặt phòng:", bookingData.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = resolveComponent("TheHeader");
      const _component_va_card = resolveComponent("va-card");
      const _component_va_loading = resolveComponent("va-loading");
      const _component_va_input = resolveComponent("va-input");
      const _component_VaCounter = resolveComponent("VaCounter");
      const _component_va_button = resolveComponent("va-button");
      _push(`<!--[--><header data-v-a20b01e1>`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      _push(`</header><div class="booking-page" data-v-a20b01e1><div class="room-info" data-v-a20b01e1>`);
      _push(ssrRenderComponent(_component_va_card, {
        outlined: "",
        class: "room-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(`<div class="loading-container" data-v-a20b01e1${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_loading, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div data-v-a20b01e1${_scopeId}><h2 class="room-title" data-v-a20b01e1${_scopeId}>${ssrInterpolate(roomData.value.loaiPhong)}</h2><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>Mã phòng:</strong> ${ssrInterpolate(roomData.value.maPhong)}</p><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>Giá:</strong> ${ssrInterpolate(roomData.value.giaPhong.toLocaleString())} VND</p><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>Tầng:</strong> ${ssrInterpolate(roomData.value.tang)}</p><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>Kiểu giường:</strong> ${ssrInterpolate(roomData.value.kieuGiuong)}</p><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>Mô tả:</strong> ${ssrInterpolate(roomData.value.moTa)}</p><div class="amenities" data-v-a20b01e1${_scopeId}><h3 data-v-a20b01e1${_scopeId}>📶 Tiện nghi:</h3><ul data-v-a20b01e1${_scopeId}><!--[-->`);
              ssrRenderList(parsedAmenities.value, (amenity, index) => {
                _push2(`<li class="amenity-item" data-v-a20b01e1${_scopeId}><img${ssrRenderAttr("src", getAmenityIcon(amenity))} alt="icon" class="amenity-icon" data-v-a20b01e1${_scopeId}><span class="amenity-text" data-v-a20b01e1${_scopeId}>${ssrInterpolate(amenity)}</span></li>`);
              });
              _push2(`<!--]--></ul></div><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>🔥 Trạng thái:</strong><span class="${ssrRenderClass(roomData.value.tinhTrang === "1" ? "status-available" : "status-unavailable")}" data-v-a20b01e1${_scopeId}>${ssrInterpolate(roomData.value.tinhTrang === "1" ? "Còn trống" : "Đã đặt")}</span></p></div>`);
            }
          } else {
            return [
              loading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "loading-container"
              }, [
                createVNode(_component_va_loading)
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("h2", { class: "room-title" }, toDisplayString(roomData.value.loaiPhong), 1),
                createVNode("p", null, [
                  createVNode("strong", null, "Mã phòng:"),
                  createTextVNode(" " + toDisplayString(roomData.value.maPhong), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Giá:"),
                  createTextVNode(" " + toDisplayString(roomData.value.giaPhong.toLocaleString()) + " VND", 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Tầng:"),
                  createTextVNode(" " + toDisplayString(roomData.value.tang), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Kiểu giường:"),
                  createTextVNode(" " + toDisplayString(roomData.value.kieuGiuong), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Mô tả:"),
                  createTextVNode(" " + toDisplayString(roomData.value.moTa), 1)
                ]),
                createVNode("div", { class: "amenities" }, [
                  createVNode("h3", null, "📶 Tiện nghi:"),
                  createVNode("ul", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList(parsedAmenities.value, (amenity, index) => {
                      return openBlock(), createBlock("li", {
                        key: index,
                        class: "amenity-item"
                      }, [
                        createVNode("img", {
                          src: getAmenityIcon(amenity),
                          alt: "icon",
                          class: "amenity-icon"
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "amenity-text" }, toDisplayString(amenity), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "🔥 Trạng thái:"),
                  createVNode("span", {
                    class: roomData.value.tinhTrang === "1" ? "status-available" : "status-unavailable"
                  }, toDisplayString(roomData.value.tinhTrang === "1" ? "Còn trống" : "Đã đặt"), 3)
                ])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="booking-form-container" data-v-a20b01e1>`);
      _push(ssrRenderComponent(_component_va_card, {
        outlined: "",
        class: "booking-form"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="form-title" data-v-a20b01e1${_scopeId}>Đặt Phòng</h2><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.cccd,
              "onUpdate:modelValue": ($event) => bookingData.value.cccd = $event,
              label: "Số CCCD *",
              placeholder: "Nhập số CCCD",
              outlined: "",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.sdt,
              "onUpdate:modelValue": ($event) => bookingData.value.sdt = $event,
              label: "Số Điện Thoại *",
              placeholder: "Nhập số điện thoại",
              outlined: "",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.ngayNhan,
              "onUpdate:modelValue": ($event) => bookingData.value.ngayNhan = $event,
              label: "Ngày Nhận Phòng *",
              placeholder: "YYYY-MM-DD",
              outlined: "",
              required: "",
              type: "date"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.ngayTra,
              "onUpdate:modelValue": ($event) => bookingData.value.ngayTra = $event,
              label: "Ngày Trả Phòng *",
              placeholder: "YYYY-MM-DD",
              outlined: "",
              required: "",
              type: "date"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}><label class="counter-label" data-v-a20b01e1${_scopeId}>Số Người Lớn *</label>`);
            _push2(ssrRenderComponent(_component_VaCounter, {
              modelValue: bookingData.value.soNguoiLon,
              "onUpdate:modelValue": ($event) => bookingData.value.soNguoiLon = $event,
              min: 1,
              max: 10,
              "decrease-button-text": "-",
              "increase-button-text": "+"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}><label class="counter-label" data-v-a20b01e1${_scopeId}>Số Trẻ Em *</label>`);
            _push2(ssrRenderComponent(_component_VaCounter, {
              modelValue: bookingData.value.soTreEm,
              "onUpdate:modelValue": ($event) => bookingData.value.soTreEm = $event,
              min: 0,
              max: 10,
              "decrease-button-text": "-",
              "increase-button-text": "+"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.yeuCau,
              "onUpdate:modelValue": ($event) => bookingData.value.yeuCau = $event,
              label: "Yêu cầu của bạn",
              type: "textarea",
              placeholder: "Nhập các yêu cầu đặc biệt (nếu có)",
              outlined: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-actions" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_button, {
              color: "primary",
              class: "submit-button",
              disabled: !roomData.value.tinhTrang === "1",
              onClick: submitBooking
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Xác Nhận Đặt Phòng `);
                } else {
                  return [
                    createTextVNode(" Xác Nhận Đặt Phòng ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h2", { class: "form-title" }, "Đặt Phòng"),
              createVNode("div", { class: "form-group" }, [
                createVNode(_component_va_input, {
                  modelValue: bookingData.value.cccd,
                  "onUpdate:modelValue": ($event) => bookingData.value.cccd = $event,
                  label: "Số CCCD *",
                  placeholder: "Nhập số CCCD",
                  outlined: "",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode(_component_va_input, {
                  modelValue: bookingData.value.sdt,
                  "onUpdate:modelValue": ($event) => bookingData.value.sdt = $event,
                  label: "Số Điện Thoại *",
                  placeholder: "Nhập số điện thoại",
                  outlined: "",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode(_component_va_input, {
                  modelValue: bookingData.value.ngayNhan,
                  "onUpdate:modelValue": ($event) => bookingData.value.ngayNhan = $event,
                  label: "Ngày Nhận Phòng *",
                  placeholder: "YYYY-MM-DD",
                  outlined: "",
                  required: "",
                  type: "date"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode(_component_va_input, {
                  modelValue: bookingData.value.ngayTra,
                  "onUpdate:modelValue": ($event) => bookingData.value.ngayTra = $event,
                  label: "Ngày Trả Phòng *",
                  placeholder: "YYYY-MM-DD",
                  outlined: "",
                  required: "",
                  type: "date"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode("label", { class: "counter-label" }, "Số Người Lớn *"),
                createVNode(_component_VaCounter, {
                  modelValue: bookingData.value.soNguoiLon,
                  "onUpdate:modelValue": ($event) => bookingData.value.soNguoiLon = $event,
                  min: 1,
                  max: 10,
                  "decrease-button-text": "-",
                  "increase-button-text": "+"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode("label", { class: "counter-label" }, "Số Trẻ Em *"),
                createVNode(_component_VaCounter, {
                  modelValue: bookingData.value.soTreEm,
                  "onUpdate:modelValue": ($event) => bookingData.value.soTreEm = $event,
                  min: 0,
                  max: 10,
                  "decrease-button-text": "-",
                  "increase-button-text": "+"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode(_component_va_input, {
                  modelValue: bookingData.value.yeuCau,
                  "onUpdate:modelValue": ($event) => bookingData.value.yeuCau = $event,
                  label: "Yêu cầu của bạn",
                  type: "textarea",
                  placeholder: "Nhập các yêu cầu đặc biệt (nếu có)",
                  outlined: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-actions" }, [
                createVNode(_component_va_button, {
                  color: "primary",
                  class: "submit-button",
                  disabled: !roomData.value.tinhTrang === "1",
                  onClick: submitBooking
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Xác Nhận Đặt Phòng ")
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DatPhong.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DatPhong = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a20b01e1"]]);

export { DatPhong as default };
//# sourceMappingURL=DatPhong.vue.mjs.map
