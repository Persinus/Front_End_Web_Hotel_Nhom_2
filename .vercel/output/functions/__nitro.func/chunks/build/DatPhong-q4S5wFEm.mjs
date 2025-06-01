import { ref, resolveComponent, withCtx, createBlock, openBlock, createVNode, toDisplayString, createTextVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { b as useNuxtApp } from './server.mjs';
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
        "M\xE1y l\u1EA1nh": "https://cdn-icons-png.flaticon.com/512/606/606792.png",
        "Tivi": "https://cdn-icons-png.flaticon.com/512/5110/5110853.png",
        "Wifi mi\u1EC5n ph\xED": "https://cdn-icons-png.flaticon.com/512/2957/2957496.png",
        "Minibar": "https://cdn-icons-png.flaticon.com/512/1511/1511863.png",
        "B\u1ED9 tr\xE0/c\xE0 ph\xEA": "https://cdn-icons-png.flaticon.com/512/892/892668.png",
        "Tivi 55 inch": "https://cdn-icons-png.flaticon.com/512/1762/1762766.png"
      };
      return icons[amenity] || "https://cdn-icons-png.flaticon.com/512/565/565547.png";
    };
    const parsedAmenities = ref([]);
    const submitBooking = () => {
      if (!bookingData.value.cccd || !bookingData.value.sdt || !bookingData.value.ngayNhan || !bookingData.value.ngayTra) {
        alert("\u274C Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin!");
        return;
      }
      alert("\u{1F389} \u0110\u1EB7t ph\xF2ng th\xE0nh c\xF4ng!");
      console.log("D\u1EEF li\u1EC7u \u0111\u1EB7t ph\xF2ng:", bookingData.value);
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
              _push2(`<div data-v-a20b01e1${_scopeId}><h2 class="room-title" data-v-a20b01e1${_scopeId}>${ssrInterpolate(roomData.value.loaiPhong)}</h2><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>M\xE3 ph\xF2ng:</strong> ${ssrInterpolate(roomData.value.maPhong)}</p><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>Gi\xE1:</strong> ${ssrInterpolate(roomData.value.giaPhong.toLocaleString())} VND</p><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>T\u1EA7ng:</strong> ${ssrInterpolate(roomData.value.tang)}</p><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>Ki\u1EC3u gi\u01B0\u1EDDng:</strong> ${ssrInterpolate(roomData.value.kieuGiuong)}</p><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>M\xF4 t\u1EA3:</strong> ${ssrInterpolate(roomData.value.moTa)}</p><div class="amenities" data-v-a20b01e1${_scopeId}><h3 data-v-a20b01e1${_scopeId}>\u{1F4F6} Ti\u1EC7n nghi:</h3><ul data-v-a20b01e1${_scopeId}><!--[-->`);
              ssrRenderList(parsedAmenities.value, (amenity, index) => {
                _push2(`<li class="amenity-item" data-v-a20b01e1${_scopeId}><img${ssrRenderAttr("src", getAmenityIcon(amenity))} alt="icon" class="amenity-icon" data-v-a20b01e1${_scopeId}><span class="amenity-text" data-v-a20b01e1${_scopeId}>${ssrInterpolate(amenity)}</span></li>`);
              });
              _push2(`<!--]--></ul></div><p data-v-a20b01e1${_scopeId}><strong data-v-a20b01e1${_scopeId}>\u{1F525} Tr\u1EA1ng th\xE1i:</strong><span class="${ssrRenderClass(roomData.value.tinhTrang === "1" ? "status-available" : "status-unavailable")}" data-v-a20b01e1${_scopeId}>${ssrInterpolate(roomData.value.tinhTrang === "1" ? "C\xF2n tr\u1ED1ng" : "\u0110\xE3 \u0111\u1EB7t")}</span></p></div>`);
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
                  createVNode("strong", null, "M\xE3 ph\xF2ng:"),
                  createTextVNode(" " + toDisplayString(roomData.value.maPhong), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Gi\xE1:"),
                  createTextVNode(" " + toDisplayString(roomData.value.giaPhong.toLocaleString()) + " VND", 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "T\u1EA7ng:"),
                  createTextVNode(" " + toDisplayString(roomData.value.tang), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "Ki\u1EC3u gi\u01B0\u1EDDng:"),
                  createTextVNode(" " + toDisplayString(roomData.value.kieuGiuong), 1)
                ]),
                createVNode("p", null, [
                  createVNode("strong", null, "M\xF4 t\u1EA3:"),
                  createTextVNode(" " + toDisplayString(roomData.value.moTa), 1)
                ]),
                createVNode("div", { class: "amenities" }, [
                  createVNode("h3", null, "\u{1F4F6} Ti\u1EC7n nghi:"),
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
                  createVNode("strong", null, "\u{1F525} Tr\u1EA1ng th\xE1i:"),
                  createVNode("span", {
                    class: roomData.value.tinhTrang === "1" ? "status-available" : "status-unavailable"
                  }, toDisplayString(roomData.value.tinhTrang === "1" ? "C\xF2n tr\u1ED1ng" : "\u0110\xE3 \u0111\u1EB7t"), 3)
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
            _push2(`<h2 class="form-title" data-v-a20b01e1${_scopeId}>\u0110\u1EB7t Ph\xF2ng</h2><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.cccd,
              "onUpdate:modelValue": ($event) => bookingData.value.cccd = $event,
              label: "S\u1ED1 CCCD *",
              placeholder: "Nh\u1EADp s\u1ED1 CCCD",
              outlined: "",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.sdt,
              "onUpdate:modelValue": ($event) => bookingData.value.sdt = $event,
              label: "S\u1ED1 \u0110i\u1EC7n Tho\u1EA1i *",
              placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
              outlined: "",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.ngayNhan,
              "onUpdate:modelValue": ($event) => bookingData.value.ngayNhan = $event,
              label: "Ng\xE0y Nh\u1EADn Ph\xF2ng *",
              placeholder: "YYYY-MM-DD",
              outlined: "",
              required: "",
              type: "date"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}>`);
            _push2(ssrRenderComponent(_component_va_input, {
              modelValue: bookingData.value.ngayTra,
              "onUpdate:modelValue": ($event) => bookingData.value.ngayTra = $event,
              label: "Ng\xE0y Tr\u1EA3 Ph\xF2ng *",
              placeholder: "YYYY-MM-DD",
              outlined: "",
              required: "",
              type: "date"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}><label class="counter-label" data-v-a20b01e1${_scopeId}>S\u1ED1 Ng\u01B0\u1EDDi L\u1EDBn *</label>`);
            _push2(ssrRenderComponent(_component_VaCounter, {
              modelValue: bookingData.value.soNguoiLon,
              "onUpdate:modelValue": ($event) => bookingData.value.soNguoiLon = $event,
              min: 1,
              max: 10,
              "decrease-button-text": "-",
              "increase-button-text": "+"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form-group" data-v-a20b01e1${_scopeId}><label class="counter-label" data-v-a20b01e1${_scopeId}>S\u1ED1 Tr\u1EBB Em *</label>`);
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
              label: "Y\xEAu c\u1EA7u c\u1EE7a b\u1EA1n",
              type: "textarea",
              placeholder: "Nh\u1EADp c\xE1c y\xEAu c\u1EA7u \u0111\u1EB7c bi\u1EC7t (n\u1EBFu c\xF3)",
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
                  _push3(` X\xE1c Nh\u1EADn \u0110\u1EB7t Ph\xF2ng `);
                } else {
                  return [
                    createTextVNode(" X\xE1c Nh\u1EADn \u0110\u1EB7t Ph\xF2ng ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h2", { class: "form-title" }, "\u0110\u1EB7t Ph\xF2ng"),
              createVNode("div", { class: "form-group" }, [
                createVNode(_component_va_input, {
                  modelValue: bookingData.value.cccd,
                  "onUpdate:modelValue": ($event) => bookingData.value.cccd = $event,
                  label: "S\u1ED1 CCCD *",
                  placeholder: "Nh\u1EADp s\u1ED1 CCCD",
                  outlined: "",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode(_component_va_input, {
                  modelValue: bookingData.value.sdt,
                  "onUpdate:modelValue": ($event) => bookingData.value.sdt = $event,
                  label: "S\u1ED1 \u0110i\u1EC7n Tho\u1EA1i *",
                  placeholder: "Nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                  outlined: "",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode(_component_va_input, {
                  modelValue: bookingData.value.ngayNhan,
                  "onUpdate:modelValue": ($event) => bookingData.value.ngayNhan = $event,
                  label: "Ng\xE0y Nh\u1EADn Ph\xF2ng *",
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
                  label: "Ng\xE0y Tr\u1EA3 Ph\xF2ng *",
                  placeholder: "YYYY-MM-DD",
                  outlined: "",
                  required: "",
                  type: "date"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              createVNode("div", { class: "form-group" }, [
                createVNode("label", { class: "counter-label" }, "S\u1ED1 Ng\u01B0\u1EDDi L\u1EDBn *"),
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
                createVNode("label", { class: "counter-label" }, "S\u1ED1 Tr\u1EBB Em *"),
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
                  label: "Y\xEAu c\u1EA7u c\u1EE7a b\u1EA1n",
                  type: "textarea",
                  placeholder: "Nh\u1EADp c\xE1c y\xEAu c\u1EA7u \u0111\u1EB7c bi\u1EC7t (n\u1EBFu c\xF3)",
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
                    createTextVNode(" X\xE1c Nh\u1EADn \u0110\u1EB7t Ph\xF2ng ")
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
//# sourceMappingURL=DatPhong-q4S5wFEm.mjs.map
