import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as usePhanQuyenStore } from './PhanQuyenCookie-BjQyveNS.mjs';
import { f as axiosBase } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'pinia';
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
import 'element-plus';

const _sfc_main = {
  __name: "DangNhapPhu",
  __ssrInlineRender: true,
  setup(__props) {
    const username = ref("");
    const password = ref("");
    const loading = ref(false);
    const error = ref("");
    const profile = ref("");
    const phanQuyenStore = usePhanQuyenStore();
    const handleLogin = async () => {
      error.value = "";
      profile.value = "";
      loading.value = true;
      const ok = await phanQuyenStore.login(username.value, password.value);
      loading.value = false;
      if (ok) {
        try {
          const res = await axiosBase.get("/xacthuc/profile");
          profile.value = JSON.stringify(res.data, null, 2);
        } catch (e) {
          profile.value = "Kh\xF4ng l\u1EA5y \u0111\u01B0\u1EE3c th\xF4ng tin ng\u01B0\u1EDDi d\xF9ng!";
        }
      } else {
        error.value = "Sai t\xE0i kho\u1EA3n ho\u1EB7c m\u1EADt kh\u1EA9u!";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_card = resolveComponent("va-card");
      const _component_va_card_title = resolveComponent("va-card-title");
      const _component_va_card_content = resolveComponent("va-card-content");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_alert = resolveComponent("va-alert");
      const _component_va_button = resolveComponent("va-button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-container" }, _attrs))} data-v-a0fa9e75>`);
      _push(ssrRenderComponent(_component_va_card, {
        class: "login-card",
        outlined: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_va_card_title, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0110\u0103ng nh\u1EADp`);
                } else {
                  return [
                    createTextVNode("\u0110\u0103ng nh\u1EADp")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_va_card_content, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_va_input, {
                    modelValue: username.value,
                    "onUpdate:modelValue": ($event) => username.value = $event,
                    label: "T\xEAn t\xE0i kho\u1EA3n",
                    class: "mb-3"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_va_input, {
                    modelValue: password.value,
                    "onUpdate:modelValue": ($event) => password.value = $event,
                    label: "M\u1EADt kh\u1EA9u",
                    type: "password",
                    class: "mb-3"
                  }, null, _parent3, _scopeId2));
                  if (error.value) {
                    _push3(ssrRenderComponent(_component_va_alert, {
                      color: "danger",
                      class: "mb-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(error.value)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(error.value), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_va_button, {
                    loading: loading.value,
                    color: "primary",
                    onClick: handleLogin,
                    block: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0110\u0103ng nh\u1EADp `);
                      } else {
                        return [
                          createTextVNode(" \u0110\u0103ng nh\u1EADp ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (profile.value) {
                    _push3(`<div class="mt-4" data-v-a0fa9e75${_scopeId2}><h4 data-v-a0fa9e75${_scopeId2}>Th\xF4ng tin ng\u01B0\u1EDDi d\xF9ng:</h4><pre style="${ssrRenderStyle({ "white-space": "pre-wrap" })}" data-v-a0fa9e75${_scopeId2}>${ssrInterpolate(profile.value)}</pre></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_va_input, {
                      modelValue: username.value,
                      "onUpdate:modelValue": ($event) => username.value = $event,
                      label: "T\xEAn t\xE0i kho\u1EA3n",
                      class: "mb-3"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_va_input, {
                      modelValue: password.value,
                      "onUpdate:modelValue": ($event) => password.value = $event,
                      label: "M\u1EADt kh\u1EA9u",
                      type: "password",
                      class: "mb-3"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    error.value ? (openBlock(), createBlock(_component_va_alert, {
                      key: 0,
                      color: "danger",
                      class: "mb-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(error.value), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_component_va_button, {
                      loading: loading.value,
                      color: "primary",
                      onClick: handleLogin,
                      block: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0110\u0103ng nh\u1EADp ")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    profile.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-4"
                    }, [
                      createVNode("h4", null, "Th\xF4ng tin ng\u01B0\u1EDDi d\xF9ng:"),
                      createVNode("pre", { style: { "white-space": "pre-wrap" } }, toDisplayString(profile.value), 1)
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_va_card_title, null, {
                default: withCtx(() => [
                  createTextVNode("\u0110\u0103ng nh\u1EADp")
                ]),
                _: 1
              }),
              createVNode(_component_va_card_content, null, {
                default: withCtx(() => [
                  createVNode(_component_va_input, {
                    modelValue: username.value,
                    "onUpdate:modelValue": ($event) => username.value = $event,
                    label: "T\xEAn t\xE0i kho\u1EA3n",
                    class: "mb-3"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_va_input, {
                    modelValue: password.value,
                    "onUpdate:modelValue": ($event) => password.value = $event,
                    label: "M\u1EADt kh\u1EA9u",
                    type: "password",
                    class: "mb-3"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  error.value ? (openBlock(), createBlock(_component_va_alert, {
                    key: 0,
                    color: "danger",
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(error.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_va_button, {
                    loading: loading.value,
                    color: "primary",
                    onClick: handleLogin,
                    block: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0110\u0103ng nh\u1EADp ")
                    ]),
                    _: 1
                  }, 8, ["loading"]),
                  profile.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mt-4"
                  }, [
                    createVNode("h4", null, "Th\xF4ng tin ng\u01B0\u1EDDi d\xF9ng:"),
                    createVNode("pre", { style: { "white-space": "pre-wrap" } }, toDisplayString(profile.value), 1)
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/DangNhapPhu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DangNhapPhu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a0fa9e75"]]);

export { DangNhapPhu as default };
//# sourceMappingURL=DangNhapPhu-DSmeRRJL.mjs.map
