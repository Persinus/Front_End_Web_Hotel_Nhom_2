import { ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { ElRow, ElCol, ElButton } from 'element-plus';
import { useToast } from 'vuestic-ui';
import { useRouter } from 'vue-router';
import { c as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'axios';
import 'qrcode.vue';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {
  __name: "Check-in-outconfirmation",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    const bookingId = ref("123456");
    const qrData = ref(`https://hotel-booking-system.com/api/checkin/${bookingId.value}`);
    const expirationTime = computed(() => {
      const expiration = /* @__PURE__ */ new Date();
      expiration.setMinutes(expiration.getMinutes() + 30);
      return expiration.toLocaleTimeString();
    });
    const toast = useToast();
    useRouter();
    const handleCheckIn = async () => {
      try {
        const response = await $api.post(`/api/checkin/${bookingId.value}`);
        if (response.status === 200) {
          toast.success("Check-in thành công!", { duration: 3e3 });
        } else {
          toast.error("Check-in thất bại!", { duration: 3e3 });
        }
      } catch (error) {
        toast.error("Lỗi khi check-in!", { duration: 3e3 });
      }
    };
    const handleCheckOut = async () => {
      try {
        const response = await $api.post(`/api/checkout/${bookingId.value}`);
        if (response.status === 200) {
          toast.success("Check-out thành công!", { duration: 3e3 });
        } else {
          toast.error("Check-out thất bại!", { duration: 3e3 });
        }
      } catch (error) {
        toast.error("Lỗi khi check-out!", { duration: 3e3 });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "check-in-check-out" }, _attrs))} data-v-36f44d8b><h1 data-v-36f44d8b>Xác nhận Check-in / Check-out</h1><div class="notes" data-v-36f44d8b><p data-v-36f44d8b><strong data-v-36f44d8b>Ghi chú:</strong> Vui lòng quét mã QR để xác nhận check-in hoặc check-out. Mã QR có hiệu lực trong vòng 30 phút kể từ lúc tạo.</p></div>`);
      _push(ssrRenderComponent(unref(ElRow), { gutter: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElCol), { span: 8 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="room-info" data-v-36f44d8b${_scopeId2}><img src="https://i.pinimg.com/474x/c5/7d/17/c57d17ca6d5b5e3616f578a2b4887da7.jpg" alt="Room Image" class="room-image" data-v-36f44d8b${_scopeId2}><div class="room-details" data-v-36f44d8b${_scopeId2}><h3 data-v-36f44d8b${_scopeId2}>Phòng: Deluxe Suite</h3><p data-v-36f44d8b${_scopeId2}>Tầng: 5</p><p data-v-36f44d8b${_scopeId2}>Giá: 2,000,000 VND</p><p data-v-36f44d8b${_scopeId2}>ID Phòng: 123456</p><p data-v-36f44d8b${_scopeId2}>Người đặt: John Doe</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "room-info" }, [
                      createVNode("img", {
                        src: "https://i.pinimg.com/474x/c5/7d/17/c57d17ca6d5b5e3616f578a2b4887da7.jpg",
                        alt: "Room Image",
                        class: "room-image"
                      }),
                      createVNode("div", { class: "room-details" }, [
                        createVNode("h3", null, "Phòng: Deluxe Suite"),
                        createVNode("p", null, "Tầng: 5"),
                        createVNode("p", null, "Giá: 2,000,000 VND"),
                        createVNode("p", null, "ID Phòng: 123456"),
                        createVNode("p", null, "Người đặt: John Doe")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ElCol), { span: 16 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="qr-info" data-v-36f44d8b${_scopeId2}><h3 data-v-36f44d8b${_scopeId2}>Thông tin mã QR</h3><p data-v-36f44d8b${_scopeId2}>Mã QR có hiệu lực trong vòng 30 phút kể từ lúc tạo.</p>`);
                  _push3(ssrRenderComponent(unref(VueQrcode), {
                    value: qrData.value,
                    class: "qrcode"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p data-v-36f44d8b${_scopeId2}><strong data-v-36f44d8b${_scopeId2}>Thời gian hết hạn:</strong> ${ssrInterpolate(expirationTime.value)}</p><div class="action-buttons" data-v-36f44d8b${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(ElButton), {
                    type: "primary",
                    onClick: handleCheckIn
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Check-in`);
                      } else {
                        return [
                          createTextVNode("Check-in")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ElButton), {
                    type: "danger",
                    onClick: handleCheckOut
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Check-out`);
                      } else {
                        return [
                          createTextVNode("Check-out")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "qr-info" }, [
                      createVNode("h3", null, "Thông tin mã QR"),
                      createVNode("p", null, "Mã QR có hiệu lực trong vòng 30 phút kể từ lúc tạo."),
                      createVNode(unref(VueQrcode), {
                        value: qrData.value,
                        class: "qrcode"
                      }, null, 8, ["value"]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Thời gian hết hạn:"),
                        createTextVNode(" " + toDisplayString(expirationTime.value), 1)
                      ]),
                      createVNode("div", { class: "action-buttons" }, [
                        createVNode(unref(ElButton), {
                          type: "primary",
                          onClick: handleCheckIn
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Check-in")
                          ]),
                          _: 1
                        }),
                        createVNode(unref(ElButton), {
                          type: "danger",
                          onClick: handleCheckOut
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Check-out")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElCol), { span: 8 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "room-info" }, [
                    createVNode("img", {
                      src: "https://i.pinimg.com/474x/c5/7d/17/c57d17ca6d5b5e3616f578a2b4887da7.jpg",
                      alt: "Room Image",
                      class: "room-image"
                    }),
                    createVNode("div", { class: "room-details" }, [
                      createVNode("h3", null, "Phòng: Deluxe Suite"),
                      createVNode("p", null, "Tầng: 5"),
                      createVNode("p", null, "Giá: 2,000,000 VND"),
                      createVNode("p", null, "ID Phòng: 123456"),
                      createVNode("p", null, "Người đặt: John Doe")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(ElCol), { span: 16 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "qr-info" }, [
                    createVNode("h3", null, "Thông tin mã QR"),
                    createVNode("p", null, "Mã QR có hiệu lực trong vòng 30 phút kể từ lúc tạo."),
                    createVNode(unref(VueQrcode), {
                      value: qrData.value,
                      class: "qrcode"
                    }, null, 8, ["value"]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Thời gian hết hạn:"),
                      createTextVNode(" " + toDisplayString(expirationTime.value), 1)
                    ]),
                    createVNode("div", { class: "action-buttons" }, [
                      createVNode(unref(ElButton), {
                        type: "primary",
                        onClick: handleCheckIn
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Check-in")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(ElButton), {
                        type: "danger",
                        onClick: handleCheckOut
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Check-out")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Check-in-outconfirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckInOutconfirmation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-36f44d8b"]]);

export { CheckInOutconfirmation as default };
//# sourceMappingURL=Check-in-outconfirmation.vue.mjs.map
