import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { T as TheHeader } from './Header-Bzw_yIJv.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './nuxt-link-UMPBbWdB.mjs';
import './server.mjs';
import 'vue-router';
import 'axios';
import 'vuestic-ui';
import 'qrcode.vue';
import 'pinia';
import 'element-plus';
import './PhanQuyenCookie-BjQyveNS.mjs';

const _imports_0 = "" + buildAssetsURL("logo.DOQet08F.png");
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-b576a8c4><div class="footer-container" data-v-b576a8c4><div class="footer-section company-info" data-v-b576a8c4><img${ssrRenderAttr("src", _imports_0)} alt="Logo Mixivivu" class="logo" data-v-b576a8c4><p data-v-b576a8c4>C\xF4ng ty TNHH Du L\u1ECBch v\xE0 D\u1ECBch V\u1EE5 Mixivivu</p><p data-v-b576a8c4> T\u1EA7ng 7, s\u1ED1 nh\xE0 25, ng\xF5 38 ph\u1ED1 Y\xEAn L\xE3ng,<br data-v-b576a8c4> ph\u01B0\u1EDDng L\xE1ng H\u1EA1, qu\u1EADn \u0110\u1ED1ng \u0110a, TP. H\xE0 N\u1ED9i </p><p data-v-b576a8c4> M\xE3 s\u1ED1 doanh nghi\u1EC7p: 0110376372<br data-v-b576a8c4> do S\u1EDF K\u1EBF ho\u1EA1ch v\xE0 \u0110\u1EA7u t\u01B0 TP. H\xE0 N\u1ED9i c\u1EA5p ng\xE0y 05/06/2023 </p></div><div class="footer-section" data-v-b576a8c4><h3 data-v-b576a8c4>Gi\u1EDBi thi\u1EC7u</h3><ul data-v-b576a8c4><li data-v-b576a8c4><a href="/about" data-v-b576a8c4>V\u1EC1 ch\xFAng t\xF4i</a></li><li data-v-b576a8c4><a href="/terms" data-v-b576a8c4>\u0110i\u1EC1u kho\u1EA3n v\xE0 \u0111i\u1EC1u ki\u1EC7n</a></li><li data-v-b576a8c4><a href="/privacy" data-v-b576a8c4>Ch\xEDnh s\xE1ch ri\xEAng t\u01B0</a></li><li data-v-b576a8c4><a href="/guide" data-v-b576a8c4>H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng</a></li><li data-v-b576a8c4><a href="/payment" data-v-b576a8c4>H\xECnh th\u1EE9c thanh to\xE1n</a></li><li data-v-b576a8c4><a href="/contact" data-v-b576a8c4>Li\xEAn h\u1EC7</a></li></ul></div><div class="footer-section" data-v-b576a8c4><h3 data-v-b576a8c4>\u0110i\u1EC3m \u0111\u1EBFn</h3><ul data-v-b576a8c4><li data-v-b576a8c4><a href="/ha-long" data-v-b576a8c4>H\u1EA1 Long</a></li><li data-v-b576a8c4><a href="/ha-noi" data-v-b576a8c4>H\xE0 N\u1ED9i</a></li><li data-v-b576a8c4><a href="/sapa" data-v-b576a8c4>Sapa</a></li><li data-v-b576a8c4><a href="/ninh-binh" data-v-b576a8c4>Ninh B\xECnh</a></li><li data-v-b576a8c4><a href="/da-nang" data-v-b576a8c4>\u0110\xE0 N\u1EB5ng</a></li><li data-v-b576a8c4><a href="/da-lat" data-v-b576a8c4>\u0110\xE0 L\u1EA1t</a></li><li data-v-b576a8c4><a href="/nha-trang" data-v-b576a8c4>Nha Trang</a></li><li data-v-b576a8c4><a href="/phu-quoc" data-v-b576a8c4>Ph\xFA Qu\u1ED1c</a></li><li data-v-b576a8c4><a href="/quy-nhon" data-v-b576a8c4>Quy Nh\u01A1n</a></li></ul></div><div class="footer-section" data-v-b576a8c4><h3 data-v-b576a8c4>Kh\xE1ch s\u1EA1n</h3><ul data-v-b576a8c4><li data-v-b576a8c4><a href="/blog" data-v-b576a8c4>Blog</a></li><li data-v-b576a8c4><a href="/rules" data-v-b576a8c4>Quy \u0111\u1ECBnh chung v\xE0 l\u01B0u \xFD</a></li><li data-v-b576a8c4><a href="/faq" data-v-b576a8c4>C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p</a></li></ul></div></div><div class="footer-bottom" data-v-b576a8c4><p data-v-b576a8c4>Hotline: 0922222016 | Email: info@mixivivu.com</p></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b576a8c4"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const tags = ["Bi\u1EC3n", "N\xFAi", "Th\xE0nh ph\u1ED1", "Thi\xEAn nhi\xEAn", "Phi\xEAu l\u01B0u"];
    const destinations = [
      { title: "Bali", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
      { title: "Rome", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b" },
      { title: "Santorini", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
      { title: "Paris", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca" },
      { title: "London", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99" },
      { title: "Tokyo", img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad" }
    ];
    const hotels = [
      { title: "Sunset Resort", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", stars: 5, desc: "Khu ngh\u1EC9 d\u01B0\u1EE1ng sang tr\u1ECDng v\u1EDBi view bi\u1EC3n." },
      { title: "Mountain Lodge", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b", stars: 4, desc: "Lodge \u1EA5m c\xFAng trong n\xFAi." },
      { title: "City Hotel", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", stars: 4, desc: "Kh\xE1ch s\u1EA1n hi\u1EC7n \u0111\u1EA1i t\u1EA1i trung t\xE2m th\xE0nh ph\u1ED1." }
    ];
    const articles = [
      { title: "H\xE0nh tr\xECnh d\xE0i \u0111\u1EBFn Ocean", img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", desc: "M\u1EB9o cho chuy\u1EBFn \u0111i d\xE0i c\u1EE7a b\u1EA1n." },
      { title: "Tr\u1EA3i nghi\u1EC7m v\u0103n h\xF3a", img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca", desc: "Kh\xE1m ph\xE1 v\u0103n h\xF3a v\xE0 truy\u1EC1n th\u1ED1ng \u0111\u1ECBa ph\u01B0\u01A1ng." },
      { title: "Ba l\xF4 tuy\u1EC7t v\u1EDDi", img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99", desc: "C\xE1ch \u0111\xF3ng g\xF3i cho cu\u1ED9c phi\xEAu l\u01B0u c\u1EE7a b\u1EA1n." }
    ];
    const activities = [
      { title: "L\u01B0\u1EDBt s\xF3ng", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
      { title: "Leo n\xFAi", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b" },
      { title: "Kayak", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_button = resolveComponent("va-button");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_chip = resolveComponent("va-chip");
      const _component_va_card = resolveComponent("va-card");
      const _component_va_card_title = resolveComponent("va-card-title");
      const _component_va_card_content = resolveComponent("va-card-content");
      const _component_va_icon = resolveComponent("va-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-landing" }, _attrs))} data-v-cd21cb35>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<section class="hero" data-v-cd21cb35><div class="hero-content" data-v-cd21cb35><h1 data-v-cd21cb35>Kh\xE1m ph\xE1 nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m h\u1EA5p d\u1EABn nh\u1EA5t</h1><p data-v-cd21cb35>T\xECm ki\u1EBFm cu\u1ED9c phi\xEAu l\u01B0u ti\u1EBFp theo c\u1EE7a b\u1EA1n c\xF9ng ch\xFAng t\xF4i</p>`);
      _push(ssrRenderComponent(_component_va_button, {
        color: "primary",
        class: "hero-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kh\xE1m ph\xE1 ngay`);
          } else {
            return [
              createTextVNode("Kh\xE1m ph\xE1 ngay")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hero-search" data-v-cd21cb35>`);
      _push(ssrRenderComponent(_component_va_input, {
        placeholder: "T\xECm ki\u1EBFm \u0111i\u1EC3m \u0111\u1EBFn, kh\xE1ch s\u1EA1n...",
        class: "search-input"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_button, {
        color: "primary",
        class: "search-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`T\xECm ki\u1EBFm`);
          } else {
            return [
              createTextVNode("T\xECm ki\u1EBFm")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hero-tags" data-v-cd21cb35><!--[-->`);
      ssrRenderList(tags, (tag) => {
        _push(ssrRenderComponent(_component_va_chip, {
          key: tag,
          class: "mr-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><img class="hero-bg" src="https://i.imgur.com/0y8Ftya.png" alt="Earth" data-v-cd21cb35></section><section class="section" data-v-cd21cb35><div class="section-header" data-v-cd21cb35><h2 data-v-cd21cb35>\u0110i\u1EC3m \u0111\u1EBFn ph\u1ED5 bi\u1EBFn</h2>`);
      _push(ssrRenderComponent(_component_va_button, {
        preset: "plain",
        color: "primary",
        class: "see-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Xem t\u1EA5t c\u1EA3`);
          } else {
            return [
              createTextVNode("Xem t\u1EA5t c\u1EA3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-row" data-v-cd21cb35><!--[-->`);
      ssrRenderList(destinations, (item) => {
        _push(ssrRenderComponent(_component_va_card, {
          key: item.title,
          class: "mini-card",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.img)} class="mini-card-img" data-v-cd21cb35${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_card_title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("img", {
                  src: item.img,
                  class: "mini-card-img"
                }, null, 8, ["src"]),
                createVNode(_component_va_card_title, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="section" data-v-cd21cb35><div class="section-header" data-v-cd21cb35><h2 data-v-cd21cb35>Kh\xE1ch s\u1EA1n v\xE0 Nh\xE0 h\xE0ng</h2>`);
      _push(ssrRenderComponent(_component_va_button, {
        preset: "plain",
        color: "primary",
        class: "see-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Xem t\u1EA5t c\u1EA3`);
          } else {
            return [
              createTextVNode("Xem t\u1EA5t c\u1EA3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-row" data-v-cd21cb35><!--[-->`);
      ssrRenderList(hotels, (item) => {
        _push(ssrRenderComponent(_component_va_card, {
          key: item.title,
          class: "hotel-card",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.img)} class="hotel-card-img" data-v-cd21cb35${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_card_title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_va_card_content, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="stars" data-v-cd21cb35${_scopeId2}><!--[-->`);
                    ssrRenderList(item.stars, (n) => {
                      _push3(ssrRenderComponent(_component_va_icon, {
                        name: "star",
                        color: "warning",
                        key: n
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div><p data-v-cd21cb35${_scopeId2}>${ssrInterpolate(item.desc)}</p>`);
                  } else {
                    return [
                      createVNode("div", { class: "stars" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.stars, (n) => {
                          return openBlock(), createBlock(_component_va_icon, {
                            name: "star",
                            color: "warning",
                            key: n
                          });
                        }), 128))
                      ]),
                      createVNode("p", null, toDisplayString(item.desc), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("img", {
                  src: item.img,
                  class: "hotel-card-img"
                }, null, 8, ["src"]),
                createVNode(_component_va_card_title, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_va_card_content, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "stars" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.stars, (n) => {
                        return openBlock(), createBlock(_component_va_icon, {
                          name: "star",
                          color: "warning",
                          key: n
                        });
                      }), 128))
                    ]),
                    createVNode("p", null, toDisplayString(item.desc), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="section" data-v-cd21cb35><div class="section-header" data-v-cd21cb35><h2 data-v-cd21cb35>M\u1EB9o v\xE0 B\xE0i vi\u1EBFt du l\u1ECBch</h2>`);
      _push(ssrRenderComponent(_component_va_button, {
        preset: "plain",
        color: "primary",
        class: "see-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Xem t\u1EA5t c\u1EA3`);
          } else {
            return [
              createTextVNode("Xem t\u1EA5t c\u1EA3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-row" data-v-cd21cb35><!--[-->`);
      ssrRenderList(articles, (item) => {
        _push(ssrRenderComponent(_component_va_card, {
          key: item.title,
          class: "article-card",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.img)} class="article-card-img" data-v-cd21cb35${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_card_title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_va_card_content, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p data-v-cd21cb35${_scopeId2}>${ssrInterpolate(item.desc)}</p>`);
                  } else {
                    return [
                      createVNode("p", null, toDisplayString(item.desc), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("img", {
                  src: item.img,
                  class: "article-card-img"
                }, null, 8, ["src"]),
                createVNode(_component_va_card_title, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_va_card_content, null, {
                  default: withCtx(() => [
                    createVNode("p", null, toDisplayString(item.desc), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="section" data-v-cd21cb35><div class="section-header" data-v-cd21cb35><h2 data-v-cd21cb35>Ho\u1EA1t \u0111\u1ED9ng</h2>`);
      _push(ssrRenderComponent(_component_va_button, {
        preset: "plain",
        color: "primary",
        class: "see-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Xem t\u1EA5t c\u1EA3`);
          } else {
            return [
              createTextVNode("Xem t\u1EA5t c\u1EA3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="card-row" data-v-cd21cb35><!--[-->`);
      ssrRenderList(activities, (item) => {
        _push(ssrRenderComponent(_component_va_card, {
          key: item.title,
          class: "activity-card",
          outlined: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", item.img)} class="activity-card-img" data-v-cd21cb35${_scopeId}>`);
              _push2(ssrRenderComponent(_component_va_card_title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("img", {
                  src: item.img,
                  class: "activity-card-img"
                }, null, 8, ["src"]),
                createVNode(_component_va_card_title, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.title), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="section about" data-v-cd21cb35><div class="about-content" data-v-cd21cb35><img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" class="about-img" data-v-cd21cb35><div data-v-cd21cb35><h2 data-v-cd21cb35>V\u1EC1 ch\xFAng t\xF4i</h2><p data-v-cd21cb35> Ch\xFAng t\xF4i \u0111am m\xEA du l\u1ECBch v\xE0 kh\xE1ch s\u1EA1n. S\u1EE9 m\u1EC7nh c\u1EE7a ch\xFAng t\xF4i l\xE0 gi\xFAp b\u1EA1n kh\xE1m ph\xE1 nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m v\xE0 tr\u1EA3i nghi\u1EC7m t\u1ED1t nh\u1EA5t tr\xEAn kh\u1EAFp th\u1EBF gi\u1EDBi. </p></div></div></section>`);
      _push(ssrRenderComponent(TheFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd21cb35"]]);

export { index as default };
//# sourceMappingURL=index-k-dz9N9E.mjs.map
