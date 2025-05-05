import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "RoomMap",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedRoom = ref(null);
    const rooms = ref([]);
    const floors = ref([]);
    const { $api } = useNuxtApp();
    const getRoomsByFloor = (floor) => rooms.value.filter((room) => room.tang === floor);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "room-map" }, _attrs))} data-v-b4e3d8a1><h2 class="heading animate__animated animate__fadeInDown" data-v-b4e3d8a1>🗺️ Sơ Đồ Phòng Khách Sạn OceanView</h2><div class="legend" data-v-b4e3d8a1><span class="legend-item standard" data-v-b4e3d8a1>Standard</span><span class="legend-item deluxe" data-v-b4e3d8a1>Deluxe</span><span class="legend-item suite" data-v-b4e3d8a1>Suite</span><span class="legend-item dorm" data-v-b4e3d8a1>Dorm</span></div><!--[-->`);
      ssrRenderList(floors.value, (floor) => {
        _push(`<div class="floor animate__animated animate__fadeInUp" data-v-b4e3d8a1><h3 class="floor-label" data-v-b4e3d8a1>Tầng ${ssrInterpolate(floor)}</h3><div class="floor-grid" data-v-b4e3d8a1><!--[-->`);
        ssrRenderList(getRoomsByFloor(floor), (room) => {
          _push(`<div class="${ssrRenderClass([room.typeClass, "room"])}" data-v-b4e3d8a1><span class="room-number" data-v-b4e3d8a1>${ssrInterpolate(room.maPhong)}</span><span class="room-type" data-v-b4e3d8a1>${ssrInterpolate(room.shortType)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
      if (selectedRoom.value) {
        _push(`<div class="modal" data-v-b4e3d8a1><div class="modal-content animate__animated animate__zoomIn" data-v-b4e3d8a1><div class="modal-left" data-v-b4e3d8a1><img${ssrRenderAttr("src", selectedRoom.value.urlAnhChinh)} alt="Room image" data-v-b4e3d8a1></div><div class="modal-right" data-v-b4e3d8a1><h2 data-v-b4e3d8a1>${ssrInterpolate(selectedRoom.value.loaiPhong)} (${ssrInterpolate(selectedRoom.value.maPhong)})</h2><ul class="room-details" data-v-b4e3d8a1><li data-v-b4e3d8a1><strong data-v-b4e3d8a1>Loại:</strong> ${ssrInterpolate(selectedRoom.value.loaiPhong)}</li><li data-v-b4e3d8a1><strong data-v-b4e3d8a1>Giường:</strong> ${ssrInterpolate(selectedRoom.value.kieuGiuong)}</li><li data-v-b4e3d8a1><strong data-v-b4e3d8a1>View:</strong> ${ssrInterpolate(selectedRoom.value.view || "Không xác định")}</li><li data-v-b4e3d8a1><strong data-v-b4e3d8a1>Diện tích:</strong> ${ssrInterpolate(selectedRoom.value.dienTich || "Không xác định")} m²</li><li data-v-b4e3d8a1><strong data-v-b4e3d8a1>Tiện ích:</strong> ${ssrInterpolate(selectedRoom.value.tienNghiList.join(", "))}</li><li data-v-b4e3d8a1><strong data-v-b4e3d8a1>Giá:</strong> ${ssrInterpolate(selectedRoom.value.giaPhong.toLocaleString())} VND</li></ul><button data-v-b4e3d8a1>Đóng</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/RoomMap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RoomMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4e3d8a1"]]);

export { RoomMap as default };
//# sourceMappingURL=RoomMap.vue.mjs.map
