import { resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { e as useThemeStore } from './server.mjs';
import { T as TheHeader } from './Header-Bzw_yIJv.mjs';
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
import 'vue-router';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';
import 'pinia';
import 'element-plus';
import './nuxt-link-UMPBbWdB.mjs';
import './PhanQuyenCookie-BjQyveNS.mjs';

const _sfc_main$1 = {
  __name: "RuleSection",
  __ssrInlineRender: true,
  props: {
    number: String,
    title: String,
    vi: String,
    en: String,
    image: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_divider = resolveComponent("el-divider");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "rule" }, _attrs))} data-v-2d0ea95d>`);
      _push(ssrRenderComponent(_component_el_divider, {
        class: "rule-title",
        "content-position": "left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.number)}. ${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.number) + ". " + toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text vi" data-v-2d0ea95d>${ssrInterpolate(__props.vi)}</p><p class="text en" data-v-2d0ea95d>${ssrInterpolate(__props.en)}</p><img${ssrRenderAttr("src", __props.image)} class="rule-img"${ssrRenderAttr("alt", __props.title)} data-v-2d0ea95d></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Components/RuleSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RuleSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2d0ea95d"]]);
const _sfc_main = {
  __name: "HotelRegulations",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useThemeStore();
    theme.initializeDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = resolveComponent("el-card");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["rules-wrapper", { "dark": unref(theme).isDarkMode }]
      }, _attrs))} data-v-87a98f43>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<main class="rules-content" data-v-87a98f43>`);
      _push(ssrRenderComponent(_component_el_card, { class: "rules-card" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="title" data-v-87a98f43${_scopeId}>\u{1F4DC} N\u1ED9i quy kh\xE1ch s\u1EA1n</h1>`);
            _push2(ssrRenderComponent(RuleSection, {
              number: "1",
              title: "Xu\u1EA5t tr\xECnh gi\u1EA5y t\u1EDD",
              vi: "\u{1F4CC} Qu\xFD kh\xE1ch vui l\xF2ng xu\u1EA5t tr\xECnh \u0111\u1EA7y \u0111\u1EE7 gi\u1EA5y t\u1EDD h\u1EE3p l\u1EC7 nh\u01B0 CMND ho\u1EB7c H\u1ED9 chi\u1EBFu c\xF2n h\u1EA1n th\u1ECB th\u1EF1c \u0111\u1EC3 kh\xE1ch s\u1EA1n \u0111\u0103ng k\xFD.",
              en: "\u{1F449} Please present your valid ID or Passport with visa at check-in.",
              image: "https://www.pinterest.com/pin/38632509300511548"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(RuleSection, {
              number: "2",
              title: "Gi\u1EDD nh\u1EADn & tr\u1EA3 ph\xF2ng",
              vi: "\u{1F552} Nh\u1EADn ph\xF2ng t\u1EEB 14:00 v\xE0 tr\u1EA3 ph\xF2ng tr\u01B0\u1EDBc 12:00 tr\u01B0a. Tr\u1EC5 gi\u1EDD c\xF3 th\u1EC3 t\xEDnh th\xEAm ph\xED.",
              en: "\u{1F449} Check-in from 14:00 and check-out before 12:00 noon. Late check-out may incur a fee.",
              image: "https://images.unsplash.com/photo-1559599189-14d4c7f7cde5?auto=format&fit=crop&w=800&q=80"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(RuleSection, {
              number: "3",
              title: "Ch\xECa kh\xF3a ph\xF2ng",
              vi: "\u{1F511} Vui l\xF2ng tr\u1EA3 l\u1EA1i ch\xECa kh\xF3a khi check-out. M\u1EA5t ch\xECa kh\xF3a s\u1EBD b\u1ECB t\xEDnh ph\xED theo quy \u0111\u1ECBnh.",
              en: "\u{1F449} Please return your key at check-out. Lost key will be charged accordingly.",
              image: "https://images.unsplash.com/photo-1588774069262-3b23e0f8fc4b?auto=format&fit=crop&w=800&q=80"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("h1", { class: "title" }, "\u{1F4DC} N\u1ED9i quy kh\xE1ch s\u1EA1n"),
              createVNode(RuleSection, {
                number: "1",
                title: "Xu\u1EA5t tr\xECnh gi\u1EA5y t\u1EDD",
                vi: "\u{1F4CC} Qu\xFD kh\xE1ch vui l\xF2ng xu\u1EA5t tr\xECnh \u0111\u1EA7y \u0111\u1EE7 gi\u1EA5y t\u1EDD h\u1EE3p l\u1EC7 nh\u01B0 CMND ho\u1EB7c H\u1ED9 chi\u1EBFu c\xF2n h\u1EA1n th\u1ECB th\u1EF1c \u0111\u1EC3 kh\xE1ch s\u1EA1n \u0111\u0103ng k\xFD.",
                en: "\u{1F449} Please present your valid ID or Passport with visa at check-in.",
                image: "https://www.pinterest.com/pin/38632509300511548"
              }),
              createVNode(RuleSection, {
                number: "2",
                title: "Gi\u1EDD nh\u1EADn & tr\u1EA3 ph\xF2ng",
                vi: "\u{1F552} Nh\u1EADn ph\xF2ng t\u1EEB 14:00 v\xE0 tr\u1EA3 ph\xF2ng tr\u01B0\u1EDBc 12:00 tr\u01B0a. Tr\u1EC5 gi\u1EDD c\xF3 th\u1EC3 t\xEDnh th\xEAm ph\xED.",
                en: "\u{1F449} Check-in from 14:00 and check-out before 12:00 noon. Late check-out may incur a fee.",
                image: "https://images.unsplash.com/photo-1559599189-14d4c7f7cde5?auto=format&fit=crop&w=800&q=80"
              }),
              createVNode(RuleSection, {
                number: "3",
                title: "Ch\xECa kh\xF3a ph\xF2ng",
                vi: "\u{1F511} Vui l\xF2ng tr\u1EA3 l\u1EA1i ch\xECa kh\xF3a khi check-out. M\u1EA5t ch\xECa kh\xF3a s\u1EBD b\u1ECB t\xEDnh ph\xED theo quy \u0111\u1ECBnh.",
                en: "\u{1F449} Please return your key at check-out. Lost key will be charged accordingly.",
                image: "https://images.unsplash.com/photo-1588774069262-3b23e0f8fc4b?auto=format&fit=crop&w=800&q=80"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/HotelRegulations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HotelRegulations = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87a98f43"]]);

export { HotelRegulations as default };
//# sourceMappingURL=HotelRegulations-vofl3vX2.mjs.map
