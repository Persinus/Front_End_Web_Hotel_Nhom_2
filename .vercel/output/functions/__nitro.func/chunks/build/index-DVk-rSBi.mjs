import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { T as TheHeader } from './Header-D6Tmmpl_.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'chokidar';
import 'anymatch';
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
import './PhanQuyenCookie-BHQDydup.mjs';

const _imports_0 = "" + buildAssetsURL("logo.DOQet08F.png");
const _sfc_main$2 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-b576a8c4><div class="footer-container" data-v-b576a8c4><div class="footer-section company-info" data-v-b576a8c4><img${ssrRenderAttr("src", _imports_0)} alt="Logo Mixivivu" class="logo" data-v-b576a8c4><p data-v-b576a8c4>C\xF4ng ty TNHH Du L\u1ECBch v\xE0 D\u1ECBch V\u1EE5 Mixivivu</p><p data-v-b576a8c4> T\u1EA7ng 7, s\u1ED1 nh\xE0 25, ng\xF5 38 ph\u1ED1 Y\xEAn L\xE3ng,<br data-v-b576a8c4> ph\u01B0\u1EDDng L\xE1ng H\u1EA1, qu\u1EADn \u0110\u1ED1ng \u0110a, TP. H\xE0 N\u1ED9i </p><p data-v-b576a8c4> M\xE3 s\u1ED1 doanh nghi\u1EC7p: 0110376372<br data-v-b576a8c4> do S\u1EDF K\u1EBF ho\u1EA1ch v\xE0 \u0110\u1EA7u t\u01B0 TP. H\xE0 N\u1ED9i c\u1EA5p ng\xE0y 05/06/2023 </p></div><div class="footer-section" data-v-b576a8c4><h3 data-v-b576a8c4>Gi\u1EDBi thi\u1EC7u</h3><ul data-v-b576a8c4><li data-v-b576a8c4><a href="/about" data-v-b576a8c4>V\u1EC1 ch\xFAng t\xF4i</a></li><li data-v-b576a8c4><a href="/terms" data-v-b576a8c4>\u0110i\u1EC1u kho\u1EA3n v\xE0 \u0111i\u1EC1u ki\u1EC7n</a></li><li data-v-b576a8c4><a href="/privacy" data-v-b576a8c4>Ch\xEDnh s\xE1ch ri\xEAng t\u01B0</a></li><li data-v-b576a8c4><a href="/guide" data-v-b576a8c4>H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng</a></li><li data-v-b576a8c4><a href="/payment" data-v-b576a8c4>H\xECnh th\u1EE9c thanh to\xE1n</a></li><li data-v-b576a8c4><a href="/contact" data-v-b576a8c4>Li\xEAn h\u1EC7</a></li></ul></div><div class="footer-section" data-v-b576a8c4><h3 data-v-b576a8c4>\u0110i\u1EC3m \u0111\u1EBFn</h3><ul data-v-b576a8c4><li data-v-b576a8c4><a href="/ha-long" data-v-b576a8c4>H\u1EA1 Long</a></li><li data-v-b576a8c4><a href="/ha-noi" data-v-b576a8c4>H\xE0 N\u1ED9i</a></li><li data-v-b576a8c4><a href="/sapa" data-v-b576a8c4>Sapa</a></li><li data-v-b576a8c4><a href="/ninh-binh" data-v-b576a8c4>Ninh B\xECnh</a></li><li data-v-b576a8c4><a href="/da-nang" data-v-b576a8c4>\u0110\xE0 N\u1EB5ng</a></li><li data-v-b576a8c4><a href="/da-lat" data-v-b576a8c4>\u0110\xE0 L\u1EA1t</a></li><li data-v-b576a8c4><a href="/nha-trang" data-v-b576a8c4>Nha Trang</a></li><li data-v-b576a8c4><a href="/phu-quoc" data-v-b576a8c4>Ph\xFA Qu\u1ED1c</a></li><li data-v-b576a8c4><a href="/quy-nhon" data-v-b576a8c4>Quy Nh\u01A1n</a></li></ul></div><div class="footer-section" data-v-b576a8c4><h3 data-v-b576a8c4>Kh\xE1ch s\u1EA1n</h3><ul data-v-b576a8c4><li data-v-b576a8c4><a href="/blog" data-v-b576a8c4>Blog</a></li><li data-v-b576a8c4><a href="/rules" data-v-b576a8c4>Quy \u0111\u1ECBnh chung v\xE0 l\u01B0u \xFD</a></li><li data-v-b576a8c4><a href="/faq" data-v-b576a8c4>C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p</a></li></ul></div></div><div class="footer-bottom" data-v-b576a8c4><p data-v-b576a8c4>Hotline: 0922222016 | Email: info@mixivivu.com</p></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const TheFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b576a8c4"]]);
const _sfc_main$1 = {
  __name: "HomeHotelCard",
  __ssrInlineRender: true,
  props: {
    hotels: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_icon = resolveComponent("va-icon");
      const _component_va_button = resolveComponent("va-button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hotels-grid" }, _attrs))} data-v-042250d9><!--[-->`);
      ssrRenderList(__props.hotels, (item) => {
        _push(`<div class="hotel-card" data-v-042250d9><div class="hotel-image-container" data-v-042250d9><img${ssrRenderAttr("src", item.img)} class="hotel-img" data-v-042250d9><div class="hotel-badge" data-v-042250d9>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: "verified",
          size: "small"
        }, null, _parent));
        _push(` \u0110\u01B0\u1EE3c x\xE1c minh </div><button class="wishlist-btn" data-v-042250d9>`);
        _push(ssrRenderComponent(_component_va_icon, { name: "favorite_border" }, null, _parent));
        _push(`</button></div><div class="hotel-content" data-v-042250d9><div class="hotel-header" data-v-042250d9><h3 class="hotel-title" data-v-042250d9>${ssrInterpolate(item.title)}</h3><div class="hotel-rating" data-v-042250d9><div class="stars" data-v-042250d9><!--[-->`);
        ssrRenderList(item.stars, (n) => {
          _push(ssrRenderComponent(_component_va_icon, {
            name: "star",
            color: "warning",
            key: n,
            size: "small"
          }, null, _parent));
        });
        _push(`<!--]--></div><span class="rating-text" data-v-042250d9>${ssrInterpolate(item.stars)}.0</span></div></div><p class="hotel-desc" data-v-042250d9>${ssrInterpolate(item.desc)}</p><div class="hotel-amenities" data-v-042250d9><!--[-->`);
        ssrRenderList(item.amenities || ["WiFi", "B\u1EC3 b\u01A1i", "Spa"], (amenity) => {
          _push(`<span class="amenity" data-v-042250d9>${ssrInterpolate(amenity)}</span>`);
        });
        _push(`<!--]--></div><div class="hotel-footer" data-v-042250d9><div class="price-group" data-v-042250d9><span class="price-label" data-v-042250d9>T\u1EEB</span><span class="price" data-v-042250d9>${ssrInterpolate(item.price || "1,200,000")}\u20AB</span><span class="price-unit" data-v-042250d9>/\u0111\xEAm</span></div>`);
        _push(ssrRenderComponent(_component_va_button, {
          color: "primary",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0110\u1EB7t ngay `);
            } else {
              return [
                createTextVNode(" \u0110\u1EB7t ngay ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/HomeHotelCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeHotelCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-042250d9"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const email = ref("");
    const guestOptions = ["1 kh\xE1ch", "2 kh\xE1ch", "3 kh\xE1ch", "4+ kh\xE1ch"];
    const quickActions = [
      {
        title: "\u0110\u1EB7t ph\xF2ng nhanh",
        desc: "T\xECm v\xE0 \u0111\u1EB7t ph\xF2ng ch\u1EC9 trong v\xE0i ph\xFAt",
        icon: "hotel",
        color: "primary",
        buttonText: "\u0110\u1EB7t ngay"
      },
      {
        title: "\u01AFu \u0111\xE3i \u0111\u1ED9c quy\u1EC1n",
        desc: "Nh\u1EADn gi\xE1 t\u1ED1t nh\u1EA5t ch\u1EC9 c\xF3 t\u1EA1i \u0111\xE2y",
        icon: "local_offer",
        color: "success",
        buttonText: "Xem \u01B0u \u0111\xE3i"
      },
      {
        title: "H\u1ED7 tr\u1EE3 24/7",
        desc: "\u0110\u1ED9i ng\u0169 h\u1ED7 tr\u1EE3 lu\xF4n s\u1EB5n s\xE0ng gi\xFAp b\u1EA1n",
        icon: "support_agent",
        color: "info",
        buttonText: "Li\xEAn h\u1EC7"
      }
    ];
    const destinations = [
      {
        title: "Bali",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        hotels: "150+"
      },
      {
        title: "Rome",
        img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
        hotels: "200+"
      },
      {
        title: "Santorini",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        hotels: "80+"
      },
      {
        title: "Paris",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
        hotels: "300+"
      },
      {
        title: "London",
        img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
        hotels: "250+"
      },
      {
        title: "Tokyo",
        img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
        hotels: "180+"
      }
    ];
    const hotels = [
      {
        title: "Sunset Resort & Spa",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        stars: 5,
        desc: "Khu ngh\u1EC9 d\u01B0\u1EE1ng sang tr\u1ECDng v\u1EDBi view bi\u1EC3n tuy\u1EC7t \u0111\u1EB9p v\xE0 d\u1ECBch v\u1EE5 spa \u0111\u1EB3ng c\u1EA5p th\u1EBF gi\u1EDBi.",
        amenities: ["WiFi mi\u1EC5n ph\xED", "B\u1EC3 b\u01A1i", "Spa", "Nh\xE0 h\xE0ng"],
        price: "2,500,000"
      },
      {
        title: "Mountain Grand Lodge",
        img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
        stars: 4,
        desc: "Lodge \u1EA5m c\xFAng trong n\xFAi v\u1EDBi kh\xF4ng gian y\xEAn t\u0129nh v\xE0 phong c\u1EA3nh thi\xEAn nhi\xEAn tuy\u1EC7t v\u1EDDi.",
        amenities: ["WiFi mi\u1EC5n ph\xED", "Nh\xE0 h\xE0ng", "Bar", "Gym"],
        price: "1,800,000"
      },
      {
        title: "Metropolitan Hotel",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        stars: 4,
        desc: "Kh\xE1ch s\u1EA1n hi\u1EC7n \u0111\u1EA1i t\u1EA1i trung t\xE2m th\xE0nh ph\u1ED1 v\u1EDBi ti\u1EC7n nghi \u0111\u1EA7y \u0111\u1EE7 v\xE0 d\u1ECBch v\u1EE5 chuy\xEAn nghi\u1EC7p.",
        amenities: ["WiFi mi\u1EC5n ph\xED", "Ph\xF2ng gym", "Trung t\xE2m th\u01B0\u01A1ng m\u1EA1i", "Concierge"],
        price: "1,200,000"
      }
    ];
    const articles = [
      {
        title: "H\xE0nh tr\xECnh kh\xE1m ph\xE1 b\u1EDD bi\u1EC3n tuy\u1EC7t \u0111\u1EB9p",
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        desc: "Nh\u1EEFng m\u1EB9o h\u1EEFu \xEDch cho chuy\u1EBFn \u0111i d\xE0i ng\xE0y kh\xE1m ph\xE1 c\xE1c b\u1EDD bi\u1EC3n \u0111\u1EB9p nh\u1EA5t th\u1EBF gi\u1EDBi.",
        category: "H\u01B0\u1EDBng d\u1EABn",
        date: "3 ng\xE0y tr\u01B0\u1EDBc",
        readTime: "5 ph\xFAt \u0111\u1ECDc"
      },
      {
        title: "Tr\u1EA3i nghi\u1EC7m v\u0103n h\xF3a \u0111\u1ECBa ph\u01B0\u01A1ng",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
        desc: "C\xE1ch h\xF2a m\xECnh v\xE0o v\u0103n h\xF3a v\xE0 truy\u1EC1n th\u1ED1ng \u0111\u1ECBa ph\u01B0\u01A1ng \u0111\u1EC3 c\xF3 tr\u1EA3i nghi\u1EC7m du l\u1ECBch \xFD ngh\u0129a.",
        category: "V\u0103n h\xF3a",
        date: "1 tu\u1EA7n tr\u01B0\u1EDBc",
        readTime: "4 ph\xFAt \u0111\u1ECDc"
      },
      {
        title: "B\xED quy\u1EBFt \u0111\xF3ng g\xF3i h\xE0nh l\xFD th\xF4ng minh",
        img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
        desc: "H\u01B0\u1EDBng d\u1EABn chi ti\u1EBFt c\xE1ch \u0111\xF3ng g\xF3i h\xE0nh l\xFD hi\u1EC7u qu\u1EA3 cho m\u1ECDi lo\u1EA1i h\xECnh du l\u1ECBch.",
        category: "M\u1EB9o hay",
        date: "2 tu\u1EA7n tr\u01B0\u1EDBc",
        readTime: "3 ph\xFAt \u0111\u1ECDc"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_icon = resolveComponent("va-icon");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_select = resolveComponent("va-select");
      const _component_va_button = resolveComponent("va-button");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-landing" }, _attrs))} data-v-492d402b>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<section class="hero" data-v-492d402b><div class="hero-overlay" data-v-492d402b></div><div class="hero-content" data-v-492d402b><div class="hero-badge" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "verified",
        size: "small"
      }, null, _parent));
      _push(`<span data-v-492d402b>\u0110\xE1ng tin c\u1EADy t\u1EEB 2015</span></div><h1 class="hero-title" data-v-492d402b> Kh\xE1m ph\xE1 nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m <span class="highlight" data-v-492d402b>h\u1EA5p d\u1EABn nh\u1EA5t</span></h1><p class="hero-subtitle" data-v-492d402b> T\xECm ki\u1EBFm cu\u1ED9c phi\xEAu l\u01B0u ti\u1EBFp theo c\u1EE7a b\u1EA1n c\xF9ng ch\xFAng t\xF4i.<br data-v-492d402b> H\u01A1n 10,000+ kh\xE1ch s\u1EA1n v\xE0 \u0111i\u1EC3m \u0111\u1EBFn tr\xEAn to\xE0n th\u1EBF gi\u1EDBi. </p><div class="hero-search-container" data-v-492d402b><div class="search-tabs" data-v-492d402b><button class="search-tab active" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "hotel",
        size: "small"
      }, null, _parent));
      _push(` Kh\xE1ch s\u1EA1n </button><button class="search-tab" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "flight",
        size: "small"
      }, null, _parent));
      _push(` Chuy\u1EBFn bay </button><button class="search-tab" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "car",
        size: "small"
      }, null, _parent));
      _push(` Thu\xEA xe </button></div><div class="hero-search" data-v-492d402b><div class="search-field" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "location_on",
        class: "search-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_input, {
        placeholder: "\u0110i\u1EC3m \u0111\u1EBFn ho\u1EB7c t\xEAn kh\xE1ch s\u1EA1n...",
        class: "search-input",
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event
      }, null, _parent));
      _push(`</div><div class="search-field date-field" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "calendar_today",
        class: "search-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_input, {
        placeholder: "Ng\xE0y nh\u1EADn ph\xF2ng",
        class: "search-input",
        type: "date"
      }, null, _parent));
      _push(`</div><div class="search-field date-field" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "calendar_today",
        class: "search-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_input, {
        placeholder: "Ng\xE0y tr\u1EA3 ph\xF2ng",
        class: "search-input",
        type: "date"
      }, null, _parent));
      _push(`</div><div class="search-field guest-field" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "person",
        class: "search-icon"
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_select, {
        placeholder: "Kh\xE1ch",
        class: "search-input",
        options: guestOptions
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_va_button, {
        color: "primary",
        class: "search-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_va_icon, { name: "search" }, null, _parent2, _scopeId));
            _push2(` T\xECm ki\u1EBFm `);
          } else {
            return [
              createVNode(_component_va_icon, { name: "search" }),
              createTextVNode(" T\xECm ki\u1EBFm ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero-stats" data-v-492d402b><div class="stat-item" data-v-492d402b><span class="stat-number" data-v-492d402b>10,000+</span><span class="stat-label" data-v-492d402b>Kh\xE1ch s\u1EA1n</span></div><div class="stat-item" data-v-492d402b><span class="stat-number" data-v-492d402b>50+</span><span class="stat-label" data-v-492d402b>Qu\u1ED1c gia</span></div><div class="stat-item" data-v-492d402b><span class="stat-number" data-v-492d402b>1M+</span><span class="stat-label" data-v-492d402b>Kh\xE1ch h\xE0ng</span></div></div></div><div class="hero-visual" data-v-492d402b><img class="hero-bg" src="https://i.imgur.com/0y8Ftya.png" alt="Travel Destinations" data-v-492d402b><div class="floating-cards" data-v-492d402b><div class="floating-card" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "star",
        color: "warning"
      }, null, _parent));
      _push(`<span data-v-492d402b>4.8/5 \u0110\xE1nh gi\xE1</span></div><div class="floating-card" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "verified",
        color: "success"
      }, null, _parent));
      _push(`<span data-v-492d402b>\u0110\u1EB7t ph\xF2ng an to\xE0n</span></div></div></div></section><section class="quick-actions" data-v-492d402b><div class="container" data-v-492d402b><div class="action-cards" data-v-492d402b><!--[-->`);
      ssrRenderList(quickActions, (action) => {
        _push(`<div class="action-card" data-v-492d402b><div class="action-icon" data-v-492d402b>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: action.icon,
          size: "large",
          color: action.color
        }, null, _parent));
        _push(`</div><h3 data-v-492d402b>${ssrInterpolate(action.title)}</h3><p data-v-492d402b>${ssrInterpolate(action.desc)}</p>`);
        _push(ssrRenderComponent(_component_va_button, {
          preset: "plain",
          color: action.color
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(action.buttonText)} `);
              _push2(ssrRenderComponent(_component_va_icon, {
                name: "arrow_forward",
                size: "small"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(action.buttonText) + " ", 1),
                createVNode(_component_va_icon, {
                  name: "arrow_forward",
                  size: "small"
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="section destinations-section" data-v-492d402b><div class="container" data-v-492d402b><div class="section-header" data-v-492d402b><div class="section-title-group" data-v-492d402b><h2 class="section-title" data-v-492d402b>\u0110i\u1EC3m \u0111\u1EBFn ph\u1ED5 bi\u1EBFn</h2><p class="section-subtitle" data-v-492d402b>Kh\xE1m ph\xE1 nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m \u0111\u01B0\u1EE3c y\xEAu th\xEDch nh\u1EA5t</p></div>`);
      _push(ssrRenderComponent(_component_va_button, {
        preset: "plain",
        color: "primary",
        class: "see-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem t\u1EA5t c\u1EA3 `);
            _push2(ssrRenderComponent(_component_va_icon, {
              name: "arrow_forward",
              size: "small"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Xem t\u1EA5t c\u1EA3 "),
              createVNode(_component_va_icon, {
                name: "arrow_forward",
                size: "small"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="destinations-grid" data-v-492d402b>`);
      if (destinations[0]) {
        _push(`<div class="destination-card featured" data-v-492d402b><img${ssrRenderAttr("src", destinations[0].img)} class="destination-img" data-v-492d402b><div class="destination-overlay" data-v-492d402b><div class="destination-content" data-v-492d402b><h3 data-v-492d402b>${ssrInterpolate(destinations[0].title)}</h3><p data-v-492d402b>${ssrInterpolate(destinations[0].hotels || "120+")} kh\xE1ch s\u1EA1n</p><div class="destination-rating" data-v-492d402b>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: "star",
          color: "warning",
          size: "small"
        }, null, _parent));
        _push(`<span data-v-492d402b>4.8</span></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="destinations-list" data-v-492d402b><!--[-->`);
      ssrRenderList(destinations.slice(1), (item) => {
        _push(`<div class="destination-card" data-v-492d402b><img${ssrRenderAttr("src", item.img)} class="destination-img" data-v-492d402b><div class="destination-overlay" data-v-492d402b><div class="destination-content" data-v-492d402b><h4 data-v-492d402b>${ssrInterpolate(item.title)}</h4><p data-v-492d402b>${ssrInterpolate(item.hotels || "80+")} kh\xE1ch s\u1EA1n</p><div class="destination-rating" data-v-492d402b>`);
        _push(ssrRenderComponent(_component_va_icon, {
          name: "star",
          color: "warning",
          size: "small"
        }, null, _parent));
        _push(`<span data-v-492d402b>4.${ssrInterpolate(Math.floor(Math.random() * 3) + 6)}</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="section hotels-section" data-v-492d402b><div class="container" data-v-492d402b><div class="section-header" data-v-492d402b><div class="section-title-group" data-v-492d402b><h2 class="section-title" data-v-492d402b>Kh\xE1ch s\u1EA1n n\u1ED5i b\u1EADt</h2><p class="section-subtitle" data-v-492d402b> Nh\u1EEFng l\u1EF1a ch\u1ECDn h\xE0ng \u0111\u1EA7u \u0111\u01B0\u1EE3c kh\xE1ch h\xE0ng tin t\u01B0\u1EDFng </p></div>`);
      _push(ssrRenderComponent(_component_va_button, {
        preset: "plain",
        color: "primary",
        class: "see-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem t\u1EA5t c\u1EA3 `);
            _push2(ssrRenderComponent(_component_va_icon, {
              name: "arrow_forward",
              size: "small"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Xem t\u1EA5t c\u1EA3 "),
              createVNode(_component_va_icon, {
                name: "arrow_forward",
                size: "small"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(HomeHotelCard, { hotels }, null, _parent));
      _push(`</div></section><section class="section deals-section" data-v-492d402b><div class="container" data-v-492d402b><div class="deals-banner" data-v-492d402b><div class="deals-content" data-v-492d402b><div class="deals-badge" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "local_offer" }, null, _parent));
      _push(` \u01AFu \u0111\xE3i \u0111\u1EB7c bi\u1EC7t </div><h2 data-v-492d402b>Ti\u1EBFt ki\u1EC7m \u0111\u1EBFn 40% cho k\u1EF3 ngh\u1EC9 ti\u1EBFp theo</h2><p data-v-492d402b>\u0110\u1EB7t ph\xF2ng ngay h\xF4m nay v\xE0 nh\u1EADn ngay \u01B0u \u0111\xE3i h\u1EA5p d\u1EABn</p><div class="deals-actions" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_button, {
        color: "primary",
        size: "large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kh\xE1m ph\xE1 \u01B0u \u0111\xE3i `);
          } else {
            return [
              createTextVNode(" Kh\xE1m ph\xE1 \u01B0u \u0111\xE3i ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_va_button, {
        preset: "plain",
        color: "primary",
        size: "large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` T\xECm hi\u1EC3u th\xEAm `);
          } else {
            return [
              createTextVNode(" T\xECm hi\u1EC3u th\xEAm ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="deals-visual" data-v-492d402b><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="Special Deals" data-v-492d402b></div></div></div></section><section class="section articles-section" data-v-492d402b><div class="container" data-v-492d402b><div class="section-header" data-v-492d402b><div class="section-title-group" data-v-492d402b><h2 class="section-title" data-v-492d402b>C\u1EA9m nang du l\u1ECBch</h2><p class="section-subtitle" data-v-492d402b>Nh\u1EEFng b\xE0i vi\u1EBFt h\u1EEFu \xEDch cho chuy\u1EBFn \u0111i c\u1EE7a b\u1EA1n</p></div>`);
      _push(ssrRenderComponent(_component_va_button, {
        preset: "plain",
        color: "primary",
        class: "see-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem t\u1EA5t c\u1EA3 `);
            _push2(ssrRenderComponent(_component_va_icon, {
              name: "arrow_forward",
              size: "small"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Xem t\u1EA5t c\u1EA3 "),
              createVNode(_component_va_icon, {
                name: "arrow_forward",
                size: "small"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="articles-grid" data-v-492d402b><!--[-->`);
      ssrRenderList(articles, (item) => {
        _push(`<article class="article-card" data-v-492d402b><div class="article-image" data-v-492d402b><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.title)} data-v-492d402b><div class="article-category" data-v-492d402b>${ssrInterpolate(item.category || "M\u1EB9o du l\u1ECBch")}</div></div><div class="article-content" data-v-492d402b><h3 class="article-title" data-v-492d402b>${ssrInterpolate(item.title)}</h3><p class="article-desc" data-v-492d402b>${ssrInterpolate(item.desc)}</p><div class="article-meta" data-v-492d402b><span class="article-date" data-v-492d402b>${ssrInterpolate(item.date || "5 ng\xE0y tr\u01B0\u1EDBc")}</span><span class="article-read-time" data-v-492d402b>${ssrInterpolate(item.readTime || "3 ph\xFAt \u0111\u1ECDc")}</span></div></div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="section about-section" data-v-492d402b><div class="container" data-v-492d402b><div class="about-content" data-v-492d402b><div class="about-visual" data-v-492d402b><img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" class="about-img" data-v-492d402b><div class="about-stats" data-v-492d402b><div class="about-stat" data-v-492d402b><span class="stat-number" data-v-492d402b>8+</span><span class="stat-label" data-v-492d402b>N\u0103m kinh nghi\u1EC7m</span></div><div class="about-stat" data-v-492d402b><span class="stat-number" data-v-492d402b>99%</span><span class="stat-label" data-v-492d402b>Kh\xE1ch h\xE0ng h\xE0i l\xF2ng</span></div></div></div><div class="about-text" data-v-492d402b><div class="about-badge" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, { name: "verified" }, null, _parent));
      _push(` V\u1EC1 ch\xFAng t\xF4i </div><h2 data-v-492d402b>\u0110\u1ED1i t\xE1c \u0111\xE1ng tin c\u1EADy cho m\u1ECDi chuy\u1EBFn \u0111i</h2><p data-v-492d402b> Ch\xFAng t\xF4i \u0111am m\xEA du l\u1ECBch v\xE0 kh\xE1ch s\u1EA1n. V\u1EDBi h\u01A1n 8 n\u0103m kinh nghi\u1EC7m trong ng\xE0nh, s\u1EE9 m\u1EC7nh c\u1EE7a ch\xFAng t\xF4i l\xE0 gi\xFAp b\u1EA1n kh\xE1m ph\xE1 nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m v\xE0 tr\u1EA3i nghi\u1EC7m t\u1ED1t nh\u1EA5t tr\xEAn kh\u1EAFp th\u1EBF gi\u1EDBi v\u1EDBi gi\xE1 c\u1EA3 h\u1EE3p l\xFD nh\u1EA5t. </p><div class="about-features" data-v-492d402b><div class="feature-item" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "verified_user",
        color: "success"
      }, null, _parent));
      _push(`<span data-v-492d402b>\u0110\u1EB7t ph\xF2ng an to\xE0n &amp; b\u1EA3o m\u1EADt</span></div><div class="feature-item" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "support_agent",
        color: "primary"
      }, null, _parent));
      _push(`<span data-v-492d402b>H\u1ED7 tr\u1EE3 24/7</span></div><div class="feature-item" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_icon, {
        name: "price_check",
        color: "warning"
      }, null, _parent));
      _push(`<span data-v-492d402b>Gi\xE1 t\u1ED1t nh\u1EA5t \u0111\u01B0\u1EE3c \u0111\u1EA3m b\u1EA3o</span></div></div>`);
      _push(ssrRenderComponent(_component_va_button, {
        color: "primary",
        size: "large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` T\xECm hi\u1EC3u th\xEAm `);
          } else {
            return [
              createTextVNode(" T\xECm hi\u1EC3u th\xEAm ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="newsletter-section" data-v-492d402b><div class="container" data-v-492d402b><div class="newsletter-content" data-v-492d402b><div class="newsletter-text" data-v-492d402b><h2 data-v-492d402b>\u0110\u1EEBng b\u1ECF l\u1EE1 \u01B0u \u0111\xE3i \u0111\u1EB7c bi\u1EC7t</h2><p data-v-492d402b>\u0110\u0103ng k\xFD nh\u1EADn b\u1EA3n tin \u0111\u1EC3 c\u1EADp nh\u1EADt nh\u1EEFng \u01B0u \u0111\xE3i v\xE0 \u0111i\u1EC3m \u0111\u1EBFn m\u1EDBi nh\u1EA5t</p></div><div class="newsletter-form" data-v-492d402b>`);
      _push(ssrRenderComponent(_component_va_input, {
        placeholder: "Nh\u1EADp email c\u1EE7a b\u1EA1n...",
        class: "newsletter-input",
        modelValue: email.value,
        "onUpdate:modelValue": ($event) => email.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_va_button, {
        color: "primary",
        size: "large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0110\u0103ng k\xFD `);
          } else {
            return [
              createTextVNode(" \u0110\u0103ng k\xFD ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-492d402b"]]);

export { index as default };
//# sourceMappingURL=index-DVk-rSBi.mjs.map
