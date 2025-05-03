import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
/* empty css              */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "RoomMNG",
  __ssrInlineRender: true,
  setup(__props) {
    const floors = [1, 2, 3];
    const rooms = ref([
      { id: 1, number: "101", floor: 1, type: "Phòng đơn", price: 8e5, status: "available" },
      { id: 2, number: "102", floor: 1, type: "Phòng đôi", price: 12e5, status: "occupied" },
      { id: 3, number: "201", floor: 2, type: "Suite", price: 2e6, status: "cleaning" },
      { id: 4, number: "202", floor: 2, type: "Gia đình", price: 25e5, status: "available" }
    ]);
    const statusMap = {
      available: "Trống",
      occupied: "Đang thuê",
      cleaning: "Cần dọn"
    };
    rooms.value.forEach((r) => r.statusLabel = statusMap[r.status]);
    const selectedFloor = ref("");
    const selectedStatus = ref("");
    const selectedRoom = ref(null);
    const guest = ref({
      name: "",
      id: "",
      people: 1,
      checkIn: "",
      checkOut: ""
    });
    const receipt = ref(null);
    const filteredRooms = computed(() => {
      return rooms.value.filter(
        (r) => (!selectedFloor.value || r.floor == selectedFloor.value) && (!selectedStatus.value || r.status === selectedStatus.value)
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "room-management" }, _attrs))} data-v-f368abf3><h2 data-v-f368abf3>🏨 Quản Lý Trạng Thái Phòng</h2><div class="filters" data-v-f368abf3><select data-v-f368abf3><option value="" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedFloor.value) ? ssrLooseContain(selectedFloor.value, "") : ssrLooseEqual(selectedFloor.value, "")) ? " selected" : ""}>Tất cả tầng</option><!--[-->`);
      ssrRenderList(floors, (f) => {
        _push(`<option data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedFloor.value) ? ssrLooseContain(selectedFloor.value, null) : ssrLooseEqual(selectedFloor.value, null)) ? " selected" : ""}>Tầng ${ssrInterpolate(f)}</option>`);
      });
      _push(`<!--]--></select><select data-v-f368abf3><option value="" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "") : ssrLooseEqual(selectedStatus.value, "")) ? " selected" : ""}>Tất cả trạng thái</option><option value="available" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "available") : ssrLooseEqual(selectedStatus.value, "available")) ? " selected" : ""}>Trống</option><option value="occupied" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "occupied") : ssrLooseEqual(selectedStatus.value, "occupied")) ? " selected" : ""}>Đang thuê</option><option value="cleaning" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "cleaning") : ssrLooseEqual(selectedStatus.value, "cleaning")) ? " selected" : ""}>Cần dọn</option></select></div><div class="room-grid" data-v-f368abf3><!--[-->`);
      ssrRenderList(filteredRooms.value, (room) => {
        _push(`<div class="${ssrRenderClass([room.status, "room-card"])}" data-v-f368abf3><h3 data-v-f368abf3>${ssrInterpolate(room.number)}</h3><p data-v-f368abf3>${ssrInterpolate(room.type)}</p><span class="status-label" data-v-f368abf3>${ssrInterpolate(room.statusLabel)}</span></div>`);
      });
      _push(`<!--]--></div>`);
      if (selectedRoom.value) {
        _push(`<div class="checkin-box" data-v-f368abf3><h3 data-v-f368abf3>🧾 Nhận Phòng: ${ssrInterpolate(selectedRoom.value.number)} - ${ssrInterpolate(selectedRoom.value.type)}</h3><input${ssrRenderAttr("value", guest.value.name)} placeholder="Họ tên khách hàng" data-v-f368abf3><input${ssrRenderAttr("value", guest.value.id)} placeholder="Số CCCD/Hộ chiếu" data-v-f368abf3><input type="number"${ssrRenderAttr("value", guest.value.people)} placeholder="Số người" data-v-f368abf3><input type="date"${ssrRenderAttr("value", guest.value.checkIn)} data-v-f368abf3><input type="date"${ssrRenderAttr("value", guest.value.checkOut)} data-v-f368abf3><button class="btn-primary" data-v-f368abf3>✔️ Xác nhận &amp; In phiếu</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (receipt.value) {
        _push(`<div class="receipt" data-v-f368abf3> 🧾 <strong data-v-f368abf3>Phiếu nhận phòng:</strong> Mã: ${ssrInterpolate(receipt.value.code)} <br data-v-f368abf3> Tên khách: ${ssrInterpolate(receipt.value.name)} <br data-v-f368abf3> Thời gian: ${ssrInterpolate(receipt.value.checkIn)} → ${ssrInterpolate(receipt.value.checkOut)} (${ssrInterpolate(receipt.value.nights)} đêm) <br data-v-f368abf3> Tổng tiền: ${ssrInterpolate(receipt.value.total.toLocaleString())} VND </div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/RoomMNG.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RoomMNG = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f368abf3"]]);
export {
  RoomMNG as default
};
//# sourceMappingURL=RoomMNG.vue.mjs.map
