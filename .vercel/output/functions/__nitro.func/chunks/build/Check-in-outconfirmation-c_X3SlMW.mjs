import { ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { ElRow, ElCol, ElButton } from 'element-plus';
import { useToast } from 'vuestic-ui';
import { useRouter } from 'vue-router';
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
import 'qrcode.vue';
import 'pinia';

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
          toast.success("Check-in th\xE0nh c\xF4ng!", { duration: 3e3 });
        } else {
          toast.error("Check-in th\u1EA5t b\u1EA1i!", { duration: 3e3 });
        }
      } catch (error) {
        toast.error("L\u1ED7i khi check-in!", { duration: 3e3 });
      }
    };
    const handleCheckOut = async () => {
      try {
        const response = await $api.post(`/api/checkout/${bookingId.value}`);
        if (response.status === 200) {
          toast.success("Check-out th\xE0nh c\xF4ng!", { duration: 3e3 });
        } else {
          toast.error("Check-out th\u1EA5t b\u1EA1i!", { duration: 3e3 });
        }
      } catch (error) {
        toast.error("L\u1ED7i khi check-out!", { duration: 3e3 });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "check-in-check-out" }, _attrs))} data-v-36f44d8b><h1 data-v-36f44d8b>X\xE1c nh\u1EADn Check-in / Check-out</h1><div class="notes" data-v-36f44d8b><p data-v-36f44d8b><strong data-v-36f44d8b>Ghi ch\xFA:</strong> Vui l\xF2ng qu\xE9t m\xE3 QR \u0111\u1EC3 x\xE1c nh\u1EADn check-in ho\u1EB7c check-out. M\xE3 QR c\xF3 hi\u1EC7u l\u1EF1c trong v\xF2ng 30 ph\xFAt k\u1EC3 t\u1EEB l\xFAc t\u1EA1o.</p></div>`);
      _push(ssrRenderComponent(unref(ElRow), { gutter: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElCol), { span: 8 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="room-info" data-v-36f44d8b${_scopeId2}><img src="https://i.pinimg.com/474x/c5/7d/17/c57d17ca6d5b5e3616f578a2b4887da7.jpg" alt="Room Image" class="room-image" data-v-36f44d8b${_scopeId2}><div class="room-details" data-v-36f44d8b${_scopeId2}><h3 data-v-36f44d8b${_scopeId2}>Ph\xF2ng: Deluxe Suite</h3><p data-v-36f44d8b${_scopeId2}>T\u1EA7ng: 5</p><p data-v-36f44d8b${_scopeId2}>Gi\xE1: 2,000,000 VND</p><p data-v-36f44d8b${_scopeId2}>ID Ph\xF2ng: 123456</p><p data-v-36f44d8b${_scopeId2}>Ng\u01B0\u1EDDi \u0111\u1EB7t: John Doe</p></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "room-info" }, [
                      createVNode("img", {
                        src: "https://i.pinimg.com/474x/c5/7d/17/c57d17ca6d5b5e3616f578a2b4887da7.jpg",
                        alt: "Room Image",
                        class: "room-image"
                      }),
                      createVNode("div", { class: "room-details" }, [
                        createVNode("h3", null, "Ph\xF2ng: Deluxe Suite"),
                        createVNode("p", null, "T\u1EA7ng: 5"),
                        createVNode("p", null, "Gi\xE1: 2,000,000 VND"),
                        createVNode("p", null, "ID Ph\xF2ng: 123456"),
                        createVNode("p", null, "Ng\u01B0\u1EDDi \u0111\u1EB7t: John Doe")
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
                  _push3(`<div class="qr-info" data-v-36f44d8b${_scopeId2}><h3 data-v-36f44d8b${_scopeId2}>Th\xF4ng tin m\xE3 QR</h3><p data-v-36f44d8b${_scopeId2}>M\xE3 QR c\xF3 hi\u1EC7u l\u1EF1c trong v\xF2ng 30 ph\xFAt k\u1EC3 t\u1EEB l\xFAc t\u1EA1o.</p>`);
                  _push3(ssrRenderComponent(unref(VueQrcode), {
                    value: qrData.value,
                    class: "qrcode"
                  }, null, _parent3, _scopeId2));
                  _push3(`<p data-v-36f44d8b${_scopeId2}><strong data-v-36f44d8b${_scopeId2}>Th\u1EDDi gian h\u1EBFt h\u1EA1n:</strong> ${ssrInterpolate(expirationTime.value)}</p><div class="action-buttons" data-v-36f44d8b${_scopeId2}>`);
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
                      createVNode("h3", null, "Th\xF4ng tin m\xE3 QR"),
                      createVNode("p", null, "M\xE3 QR c\xF3 hi\u1EC7u l\u1EF1c trong v\xF2ng 30 ph\xFAt k\u1EC3 t\u1EEB l\xFAc t\u1EA1o."),
                      createVNode(unref(VueQrcode), {
                        value: qrData.value,
                        class: "qrcode"
                      }, null, 8, ["value"]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Th\u1EDDi gian h\u1EBFt h\u1EA1n:"),
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
                      createVNode("h3", null, "Ph\xF2ng: Deluxe Suite"),
                      createVNode("p", null, "T\u1EA7ng: 5"),
                      createVNode("p", null, "Gi\xE1: 2,000,000 VND"),
                      createVNode("p", null, "ID Ph\xF2ng: 123456"),
                      createVNode("p", null, "Ng\u01B0\u1EDDi \u0111\u1EB7t: John Doe")
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(ElCol), { span: 16 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "qr-info" }, [
                    createVNode("h3", null, "Th\xF4ng tin m\xE3 QR"),
                    createVNode("p", null, "M\xE3 QR c\xF3 hi\u1EC7u l\u1EF1c trong v\xF2ng 30 ph\xFAt k\u1EC3 t\u1EEB l\xFAc t\u1EA1o."),
                    createVNode(unref(VueQrcode), {
                      value: qrData.value,
                      class: "qrcode"
                    }, null, 8, ["value"]),
                    createVNode("p", null, [
                      createVNode("strong", null, "Th\u1EDDi gian h\u1EBFt h\u1EA1n:"),
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
//# sourceMappingURL=Check-in-outconfirmation-c_X3SlMW.mjs.map
