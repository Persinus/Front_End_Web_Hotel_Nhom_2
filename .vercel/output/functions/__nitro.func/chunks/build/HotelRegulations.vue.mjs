import { resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import { a as useThemeStore } from './server.mjs';
import { T as TheHeader } from './Header.vue.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';
import 'pinia';
import 'element-plus';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import './nuxt-link.mjs';

const _sfc_main = {
  __name: "HotelRegulations",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    theme.initializeDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = resolveComponent("el-card");
      const _component_el_divider = resolveComponent("el-divider");
      _push(`<!--[--><header data-v-0ce68e21>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="${ssrRenderClass(["rules-container", { "dark-mode": unref(theme).isDarkMode }])}" data-v-0ce68e21>`);
      _push(ssrRenderComponent(_component_el_card, {
        shadow: "hover",
        class: "rules-card animated-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="header" data-v-0ce68e21${_scopeId}><h1 class="rules-title" data-v-0ce68e21${_scopeId}>📜 Nội quy khách sạn</h1></div>`);
            _push2(ssrRenderComponent(_component_el_divider, {
              class: "custom-divider",
              "content-position": "left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="https://www.pinterest.com/pin/609604499595806135/" class="rule-icon" data-v-0ce68e21${_scopeId2}> 1. Xuất trình giấy tờ `);
                } else {
                  return [
                    createVNode("img", {
                      src: "https://www.pinterest.com/pin/609604499595806135/",
                      class: "rule-icon"
                    }),
                    createTextVNode(" 1. Xuất trình giấy tờ ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="rule-section" data-v-0ce68e21${_scopeId}><p class="vi" data-v-0ce68e21${_scopeId}>📌 Quý khách vui lòng xuất trình đầy đủ giấy tờ hợp lệ như Chứng minh nhân dân hoặc Hộ chiếu còn hạn thị thực để khách sạn đăng ký với cơ quan có thẩm quyền.</p><p class="en" data-v-0ce68e21${_scopeId}>👉 Please present your Identity Card or Passport with valid entry and exit Visa at Reception desk upon check in.</p></div>`);
            _push2(ssrRenderComponent(_component_el_divider, {
              class: "custom-divider",
              "content-position": "left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="https://i.imgur.com/2.png" alt="Icon" class="rule-icon" data-v-0ce68e21${_scopeId2}> 2. Giờ nhận &amp; trả phòng `);
                } else {
                  return [
                    createVNode("img", {
                      src: "https://i.imgur.com/2.png",
                      alt: "Icon",
                      class: "rule-icon"
                    }),
                    createTextVNode(" 2. Giờ nhận & trả phòng ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="rule-section" data-v-0ce68e21${_scopeId}><p class="vi" data-v-0ce68e21${_scopeId}>🕒 Giờ nhận phòng từ <strong data-v-0ce68e21${_scopeId}>14:00</strong> và giờ trả phòng là trước <strong data-v-0ce68e21${_scopeId}>12:00 trưa</strong>. Việc nhận phòng sớm hoặc trả phòng trễ sẽ bị tính thêm phí theo quy định.</p><p class="en" data-v-0ce68e21${_scopeId}>👉 Check-in time is from <strong data-v-0ce68e21${_scopeId}>14:00</strong> and check-out is before <strong data-v-0ce68e21${_scopeId}>12:00 noon</strong>. Early check-in or late check-out will be charged extra fees.</p></div>`);
            _push2(ssrRenderComponent(_component_el_divider, {
              class: "custom-divider",
              "content-position": "left"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="https://i.imgur.com/3.png" alt="Icon" class="rule-icon" data-v-0ce68e21${_scopeId2}> 3. Chìa khóa phòng `);
                } else {
                  return [
                    createVNode("img", {
                      src: "https://i.imgur.com/3.png",
                      alt: "Icon",
                      class: "rule-icon"
                    }),
                    createTextVNode(" 3. Chìa khóa phòng ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="rule-section" data-v-0ce68e21${_scopeId}><p class="vi" data-v-0ce68e21${_scopeId}>🔑 Vui lòng gửi lại chìa khóa phòng tại quầy lễ tân khi trả phòng. Nếu mất chìa khóa, khách sạn sẽ tính phí theo quy định.</p><p class="en" data-v-0ce68e21${_scopeId}>👉 Please return your room key card upon check-out at reception desk. In case the card is lost, the fee will be charged accordingly.</p></div>`);
          } else {
            return [
              createVNode("div", { class: "header" }, [
                createVNode("h1", { class: "rules-title" }, "📜 Nội quy khách sạn")
              ]),
              createVNode(_component_el_divider, {
                class: "custom-divider",
                "content-position": "left"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "https://www.pinterest.com/pin/609604499595806135/",
                    class: "rule-icon"
                  }),
                  createTextVNode(" 1. Xuất trình giấy tờ ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "rule-section" }, [
                createVNode("p", { class: "vi" }, "📌 Quý khách vui lòng xuất trình đầy đủ giấy tờ hợp lệ như Chứng minh nhân dân hoặc Hộ chiếu còn hạn thị thực để khách sạn đăng ký với cơ quan có thẩm quyền."),
                createVNode("p", { class: "en" }, "👉 Please present your Identity Card or Passport with valid entry and exit Visa at Reception desk upon check in.")
              ]),
              createVNode(_component_el_divider, {
                class: "custom-divider",
                "content-position": "left"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "https://i.imgur.com/2.png",
                    alt: "Icon",
                    class: "rule-icon"
                  }),
                  createTextVNode(" 2. Giờ nhận & trả phòng ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "rule-section" }, [
                createVNode("p", { class: "vi" }, [
                  createTextVNode("🕒 Giờ nhận phòng từ "),
                  createVNode("strong", null, "14:00"),
                  createTextVNode(" và giờ trả phòng là trước "),
                  createVNode("strong", null, "12:00 trưa"),
                  createTextVNode(". Việc nhận phòng sớm hoặc trả phòng trễ sẽ bị tính thêm phí theo quy định.")
                ]),
                createVNode("p", { class: "en" }, [
                  createTextVNode("👉 Check-in time is from "),
                  createVNode("strong", null, "14:00"),
                  createTextVNode(" and check-out is before "),
                  createVNode("strong", null, "12:00 noon"),
                  createTextVNode(". Early check-in or late check-out will be charged extra fees.")
                ])
              ]),
              createVNode(_component_el_divider, {
                class: "custom-divider",
                "content-position": "left"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "https://i.imgur.com/3.png",
                    alt: "Icon",
                    class: "rule-icon"
                  }),
                  createTextVNode(" 3. Chìa khóa phòng ")
                ]),
                _: 1
              }),
              createVNode("div", { class: "rule-section" }, [
                createVNode("p", { class: "vi" }, "🔑 Vui lòng gửi lại chìa khóa phòng tại quầy lễ tân khi trả phòng. Nếu mất chìa khóa, khách sạn sẽ tính phí theo quy định."),
                createVNode("p", { class: "en" }, "👉 Please return your room key card upon check-out at reception desk. In case the card is lost, the fee will be charged accordingly.")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/HotelRegulations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HotelRegulations = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0ce68e21"]]);

export { HotelRegulations as default };
//# sourceMappingURL=HotelRegulations.vue.mjs.map
