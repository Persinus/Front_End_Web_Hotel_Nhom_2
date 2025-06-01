import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { ref, computed, useSSRContext } from 'vue';
import { T as TheHeader } from './Header-Bzw_yIJv.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './nuxt-link-UMPBbWdB.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import './server.mjs';
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
import './PhanQuyenCookie-BjQyveNS.mjs';

const _sfc_main = {
  __name: "Booking",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref({
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0
    });
    const filter = ref({
      type: "",
      sort: "asc",
      viewSea: false,
      hasPool: false,
      hasWifi: false
    });
    const rooms = ref([
      {
        id: 1,
        name: "Ph\xF2ng \u0111\u01A1n ti\xEAu chu\u1EA9n",
        description: "Ph\xF2ng cho 1 ng\u01B0\u1EDDi, ti\u1EC7n nghi c\u01A1 b\u1EA3n.",
        price: 6e5,
        area: 20,
        beds: 1,
        type: "Ph\xF2ng \u0111\u01A1n",
        hasWifi: true,
        hasPool: false,
        viewSea: false,
        image: "https://images.unsplash.com/photo-1552903023-4ec5593ec660"
      },
      {
        id: 2,
        name: "Ph\xF2ng \u0111\xF4i view bi\u1EC3n",
        description: "Tho\u1EA3i m\xE1i cho 2 ng\u01B0\u1EDDi, t\u1EA7m nh\xECn h\u01B0\u1EDBng bi\u1EC3n.",
        price: 12e5,
        area: 35,
        beds: 2,
        type: "Ph\xF2ng \u0111\xF4i",
        hasWifi: true,
        hasPool: true,
        viewSea: true,
        image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d3"
      },
      {
        id: 3,
        name: "Suite Gia \u0111\xECnh",
        description: "Kh\xF4ng gian r\u1ED9ng r\xE3i cho gia \u0111\xECnh 4 ng\u01B0\u1EDDi.",
        price: 19e5,
        area: 60,
        beds: 3,
        type: "Gia \u0111\xECnh",
        hasWifi: true,
        hasPool: true,
        viewSea: false,
        image: "https://images.unsplash.com/photo-1560067174-894dc1c5079a"
      }
    ]);
    const selectedRoom = ref(null);
    const addons = ref({
      breakfast: false,
      spa: false,
      shuttle: false
    });
    const message = ref("");
    const filteredRooms = computed(() => {
      let filtered = rooms.value;
      if (filter.value.type) {
        filtered = filtered.filter((r) => r.type === filter.value.type);
      }
      if (filter.value.viewSea) {
        filtered = filtered.filter((r) => r.viewSea);
      }
      if (filter.value.hasPool) {
        filtered = filtered.filter((r) => r.hasPool);
      }
      if (filter.value.hasWifi) {
        filtered = filtered.filter((r) => r.hasWifi);
      }
      if (filter.value.sort === "asc") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }
      return filtered;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header data-v-82bf6ffb>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="booking-page" data-v-82bf6ffb><div class="search-form" data-v-82bf6ffb><h2 data-v-82bf6ffb>\u{1F50D} T\xECm ph\xF2ng</h2><div class="form-row" data-v-82bf6ffb><input type="date"${ssrRenderAttr("value", search.value.checkIn)} data-v-82bf6ffb><input type="date"${ssrRenderAttr("value", search.value.checkOut)} data-v-82bf6ffb><input type="number"${ssrRenderAttr("value", search.value.adults)} placeholder="Ng\u01B0\u1EDDi l\u1EDBn" min="1" data-v-82bf6ffb><input type="number"${ssrRenderAttr("value", search.value.children)} placeholder="Tr\u1EBB em" min="0" data-v-82bf6ffb><button class="btn-primary" data-v-82bf6ffb>T\xECm ph\xF2ng</button></div><div class="filters" data-v-82bf6ffb><select data-v-82bf6ffb><option value="" data-v-82bf6ffb${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, "") : ssrLooseEqual(filter.value.type, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 lo\u1EA1i ph\xF2ng</option><option data-v-82bf6ffb${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, null) : ssrLooseEqual(filter.value.type, null)) ? " selected" : ""}>Ph\xF2ng \u0111\u01A1n</option><option data-v-82bf6ffb${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, null) : ssrLooseEqual(filter.value.type, null)) ? " selected" : ""}>Ph\xF2ng \u0111\xF4i</option><option data-v-82bf6ffb${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, null) : ssrLooseEqual(filter.value.type, null)) ? " selected" : ""}>Gia \u0111\xECnh</option><option data-v-82bf6ffb${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, null) : ssrLooseEqual(filter.value.type, null)) ? " selected" : ""}>Suite</option></select><select data-v-82bf6ffb><option value="asc" data-v-82bf6ffb${ssrIncludeBooleanAttr(Array.isArray(filter.value.sort) ? ssrLooseContain(filter.value.sort, "asc") : ssrLooseEqual(filter.value.sort, "asc")) ? " selected" : ""}>Gi\xE1 t\u0103ng d\u1EA7n</option><option value="desc" data-v-82bf6ffb${ssrIncludeBooleanAttr(Array.isArray(filter.value.sort) ? ssrLooseContain(filter.value.sort, "desc") : ssrLooseEqual(filter.value.sort, "desc")) ? " selected" : ""}>Gi\xE1 gi\u1EA3m d\u1EA7n</option></select><label data-v-82bf6ffb><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filter.value.viewSea) ? ssrLooseContain(filter.value.viewSea, null) : filter.value.viewSea) ? " checked" : ""} data-v-82bf6ffb> View bi\u1EC3n</label><label data-v-82bf6ffb><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filter.value.hasPool) ? ssrLooseContain(filter.value.hasPool, null) : filter.value.hasPool) ? " checked" : ""} data-v-82bf6ffb> H\u1ED3 b\u01A1i</label><label data-v-82bf6ffb><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filter.value.hasWifi) ? ssrLooseContain(filter.value.hasWifi, null) : filter.value.hasWifi) ? " checked" : ""} data-v-82bf6ffb> Wifi mi\u1EC5n ph\xED</label></div></div><div class="room-list" data-v-82bf6ffb><!--[-->`);
      ssrRenderList(filteredRooms.value, (room) => {
        _push(`<div class="room-card" data-v-82bf6ffb><img${ssrRenderAttr("src", room.image)}${ssrRenderAttr("alt", room.name)} data-v-82bf6ffb><div class="room-info" data-v-82bf6ffb><h3 data-v-82bf6ffb>${ssrInterpolate(room.name)}</h3><p data-v-82bf6ffb>${ssrInterpolate(room.description)}</p><ul class="features" data-v-82bf6ffb><li data-v-82bf6ffb>${ssrInterpolate(room.area)} m\xB2</li><li data-v-82bf6ffb>${ssrInterpolate(room.beds)} gi\u01B0\u1EDDng</li><li data-v-82bf6ffb>\u{1F4B8} ${ssrInterpolate(room.price)} \u0111/\u0111\xEAm</li>`);
        if (room.hasWifi) {
          _push(`<li data-v-82bf6ffb>\u{1F4F6} Wifi</li>`);
        } else {
          _push(`<!---->`);
        }
        if (room.hasPool) {
          _push(`<li data-v-82bf6ffb>\u{1F3CA} H\u1ED3 b\u01A1i</li>`);
        } else {
          _push(`<!---->`);
        }
        if (room.viewSea) {
          _push(`<li data-v-82bf6ffb>\u{1F30A} View bi\u1EC3n</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul><div class="room-actions" data-v-82bf6ffb><button class="btn-secondary" data-v-82bf6ffb>\u0110\u1EB7t ph\xF2ng</button></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (selectedRoom.value) {
        _push(`<div class="service-addon" data-v-82bf6ffb><h3 data-v-82bf6ffb>\u{1F381} D\u1ECBch v\u1EE5 k\xE8m theo (${ssrInterpolate(selectedRoom.value.name)})</h3><label data-v-82bf6ffb><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(addons.value.breakfast) ? ssrLooseContain(addons.value.breakfast, null) : addons.value.breakfast) ? " checked" : ""} data-v-82bf6ffb> \u0102n s\xE1ng</label><label data-v-82bf6ffb><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(addons.value.spa) ? ssrLooseContain(addons.value.spa, null) : addons.value.spa) ? " checked" : ""} data-v-82bf6ffb> Spa th\u01B0 gi\xE3n</label><label data-v-82bf6ffb><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(addons.value.shuttle) ? ssrLooseContain(addons.value.shuttle, null) : addons.value.shuttle) ? " checked" : ""} data-v-82bf6ffb> \u0110\u01B0a \u0111\xF3n s\xE2n bay</label><button class="btn-primary" data-v-82bf6ffb>X\xE1c nh\u1EADn \u0111\u1EB7t ph\xF2ng</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (message.value) {
        _push(`<div class="success-msg" data-v-82bf6ffb>${ssrInterpolate(message.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Booking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Booking = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82bf6ffb"]]);

export { Booking as default };
//# sourceMappingURL=Booking-BbL8iMRv.mjs.map
