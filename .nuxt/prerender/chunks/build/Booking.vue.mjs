import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import { ref, computed, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { T as TheHeader } from './Header.vue.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import './nuxt-link.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/defu/dist/defu.mjs';
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
        name: "Phòng đơn tiêu chuẩn",
        description: "Phòng cho 1 người, tiện nghi cơ bản.",
        price: 6e5,
        area: 20,
        beds: 1,
        type: "Phòng đơn",
        hasWifi: true,
        hasPool: false,
        viewSea: false,
        image: "https://images.unsplash.com/photo-1552903023-4ec5593ec660"
      },
      {
        id: 2,
        name: "Phòng đôi view biển",
        description: "Thoải mái cho 2 người, tầm nhìn hướng biển.",
        price: 12e5,
        area: 35,
        beds: 2,
        type: "Phòng đôi",
        hasWifi: true,
        hasPool: true,
        viewSea: true,
        image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d3"
      },
      {
        id: 3,
        name: "Suite Gia đình",
        description: "Không gian rộng rãi cho gia đình 4 người.",
        price: 19e5,
        area: 60,
        beds: 3,
        type: "Gia đình",
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
      _push(`<!--[--><header data-v-e4b8247b>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`</header><div class="booking-page" data-v-e4b8247b><div class="search-form" data-v-e4b8247b><h2 data-v-e4b8247b>🔍 Tìm phòng</h2><div class="form-row" data-v-e4b8247b><input type="date"${ssrRenderAttr("value", search.value.checkIn)} data-v-e4b8247b><input type="date"${ssrRenderAttr("value", search.value.checkOut)} data-v-e4b8247b><input type="number"${ssrRenderAttr("value", search.value.adults)} placeholder="Người lớn" min="1" data-v-e4b8247b><input type="number"${ssrRenderAttr("value", search.value.children)} placeholder="Trẻ em" min="0" data-v-e4b8247b><button class="btn-primary" data-v-e4b8247b>Tìm phòng</button></div><div class="filters" data-v-e4b8247b><select data-v-e4b8247b><option value="" data-v-e4b8247b${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, "") : ssrLooseEqual(filter.value.type, "")) ? " selected" : ""}>Tất cả loại phòng</option><option data-v-e4b8247b${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, null) : ssrLooseEqual(filter.value.type, null)) ? " selected" : ""}>Phòng đơn</option><option data-v-e4b8247b${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, null) : ssrLooseEqual(filter.value.type, null)) ? " selected" : ""}>Phòng đôi</option><option data-v-e4b8247b${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, null) : ssrLooseEqual(filter.value.type, null)) ? " selected" : ""}>Gia đình</option><option data-v-e4b8247b${ssrIncludeBooleanAttr(Array.isArray(filter.value.type) ? ssrLooseContain(filter.value.type, null) : ssrLooseEqual(filter.value.type, null)) ? " selected" : ""}>Suite</option></select><select data-v-e4b8247b><option value="asc" data-v-e4b8247b${ssrIncludeBooleanAttr(Array.isArray(filter.value.sort) ? ssrLooseContain(filter.value.sort, "asc") : ssrLooseEqual(filter.value.sort, "asc")) ? " selected" : ""}>Giá tăng dần</option><option value="desc" data-v-e4b8247b${ssrIncludeBooleanAttr(Array.isArray(filter.value.sort) ? ssrLooseContain(filter.value.sort, "desc") : ssrLooseEqual(filter.value.sort, "desc")) ? " selected" : ""}>Giá giảm dần</option></select><label data-v-e4b8247b><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filter.value.viewSea) ? ssrLooseContain(filter.value.viewSea, null) : filter.value.viewSea) ? " checked" : ""} data-v-e4b8247b> View biển</label><label data-v-e4b8247b><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filter.value.hasPool) ? ssrLooseContain(filter.value.hasPool, null) : filter.value.hasPool) ? " checked" : ""} data-v-e4b8247b> Hồ bơi</label><label data-v-e4b8247b><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(filter.value.hasWifi) ? ssrLooseContain(filter.value.hasWifi, null) : filter.value.hasWifi) ? " checked" : ""} data-v-e4b8247b> Wifi miễn phí</label></div></div><div class="room-list" data-v-e4b8247b><!--[-->`);
      ssrRenderList(filteredRooms.value, (room) => {
        _push(`<div class="room-card" data-v-e4b8247b><img${ssrRenderAttr("src", room.image)}${ssrRenderAttr("alt", room.name)} data-v-e4b8247b><div class="room-info" data-v-e4b8247b><h3 data-v-e4b8247b>${ssrInterpolate(room.name)}</h3><p data-v-e4b8247b>${ssrInterpolate(room.description)}</p><ul class="features" data-v-e4b8247b><li data-v-e4b8247b>${ssrInterpolate(room.area)} m²</li><li data-v-e4b8247b>${ssrInterpolate(room.beds)} giường</li><li data-v-e4b8247b>💸 ${ssrInterpolate(room.price)} đ/đêm</li>`);
        if (room.hasWifi) {
          _push(`<li data-v-e4b8247b>📶 Wifi</li>`);
        } else {
          _push(`<!---->`);
        }
        if (room.hasPool) {
          _push(`<li data-v-e4b8247b>🏊 Hồ bơi</li>`);
        } else {
          _push(`<!---->`);
        }
        if (room.viewSea) {
          _push(`<li data-v-e4b8247b>🌊 View biển</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul><div class="room-actions" data-v-e4b8247b><button class="btn-secondary" data-v-e4b8247b>Đặt phòng</button></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (selectedRoom.value) {
        _push(`<div class="service-addon" data-v-e4b8247b><h3 data-v-e4b8247b>🎁 Dịch vụ kèm theo (${ssrInterpolate(selectedRoom.value.name)})</h3><label data-v-e4b8247b><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(addons.value.breakfast) ? ssrLooseContain(addons.value.breakfast, null) : addons.value.breakfast) ? " checked" : ""} data-v-e4b8247b> Ăn sáng</label><label data-v-e4b8247b><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(addons.value.spa) ? ssrLooseContain(addons.value.spa, null) : addons.value.spa) ? " checked" : ""} data-v-e4b8247b> Spa thư giãn</label><label data-v-e4b8247b><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(addons.value.shuttle) ? ssrLooseContain(addons.value.shuttle, null) : addons.value.shuttle) ? " checked" : ""} data-v-e4b8247b> Đưa đón sân bay</label><button class="btn-primary" data-v-e4b8247b>Xác nhận đặt phòng</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (message.value) {
        _push(`<div class="success-msg" data-v-e4b8247b>${ssrInterpolate(message.value)}</div>`);
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
const Booking = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4b8247b"]]);

export { Booking as default };
//# sourceMappingURL=Booking.vue.mjs.map
