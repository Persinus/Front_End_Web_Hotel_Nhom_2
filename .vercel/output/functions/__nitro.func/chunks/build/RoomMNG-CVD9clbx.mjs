import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "RoomMNG",
  __ssrInlineRender: true,
  setup(__props) {
    const floors = [1, 2, 3];
    const rooms = ref([
      { id: 1, number: "101", floor: 1, type: "Ph\xF2ng \u0111\u01A1n", price: 8e5, status: "available" },
      { id: 2, number: "102", floor: 1, type: "Ph\xF2ng \u0111\xF4i", price: 12e5, status: "occupied" },
      { id: 3, number: "201", floor: 2, type: "Suite", price: 2e6, status: "cleaning" },
      { id: 4, number: "202", floor: 2, type: "Gia \u0111\xECnh", price: 25e5, status: "available" }
    ]);
    const statusMap = {
      available: "Tr\u1ED1ng",
      occupied: "\u0110ang thu\xEA",
      cleaning: "C\u1EA7n d\u1ECDn"
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "room-management" }, _attrs))} data-v-f368abf3><h2 data-v-f368abf3>\u{1F3E8} Qu\u1EA3n L\xFD Tr\u1EA1ng Th\xE1i Ph\xF2ng</h2><div class="filters" data-v-f368abf3><select data-v-f368abf3><option value="" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedFloor.value) ? ssrLooseContain(selectedFloor.value, "") : ssrLooseEqual(selectedFloor.value, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 t\u1EA7ng</option><!--[-->`);
      ssrRenderList(floors, (f) => {
        _push(`<option data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedFloor.value) ? ssrLooseContain(selectedFloor.value, null) : ssrLooseEqual(selectedFloor.value, null)) ? " selected" : ""}>T\u1EA7ng ${ssrInterpolate(f)}</option>`);
      });
      _push(`<!--]--></select><select data-v-f368abf3><option value="" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "") : ssrLooseEqual(selectedStatus.value, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i</option><option value="available" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "available") : ssrLooseEqual(selectedStatus.value, "available")) ? " selected" : ""}>Tr\u1ED1ng</option><option value="occupied" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "occupied") : ssrLooseEqual(selectedStatus.value, "occupied")) ? " selected" : ""}>\u0110ang thu\xEA</option><option value="cleaning" data-v-f368abf3${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "cleaning") : ssrLooseEqual(selectedStatus.value, "cleaning")) ? " selected" : ""}>C\u1EA7n d\u1ECDn</option></select></div><div class="room-grid" data-v-f368abf3><!--[-->`);
      ssrRenderList(filteredRooms.value, (room) => {
        _push(`<div class="${ssrRenderClass([room.status, "room-card"])}" data-v-f368abf3><h3 data-v-f368abf3>${ssrInterpolate(room.number)}</h3><p data-v-f368abf3>${ssrInterpolate(room.type)}</p><span class="status-label" data-v-f368abf3>${ssrInterpolate(room.statusLabel)}</span></div>`);
      });
      _push(`<!--]--></div>`);
      if (selectedRoom.value) {
        _push(`<div class="checkin-box" data-v-f368abf3><h3 data-v-f368abf3>\u{1F9FE} Nh\u1EADn Ph\xF2ng: ${ssrInterpolate(selectedRoom.value.number)} - ${ssrInterpolate(selectedRoom.value.type)}</h3><input${ssrRenderAttr("value", guest.value.name)} placeholder="H\u1ECD t\xEAn kh\xE1ch h\xE0ng" data-v-f368abf3><input${ssrRenderAttr("value", guest.value.id)} placeholder="S\u1ED1 CCCD/H\u1ED9 chi\u1EBFu" data-v-f368abf3><input type="number"${ssrRenderAttr("value", guest.value.people)} placeholder="S\u1ED1 ng\u01B0\u1EDDi" data-v-f368abf3><input type="date"${ssrRenderAttr("value", guest.value.checkIn)} data-v-f368abf3><input type="date"${ssrRenderAttr("value", guest.value.checkOut)} data-v-f368abf3><button class="btn-primary" data-v-f368abf3>\u2714\uFE0F X\xE1c nh\u1EADn &amp; In phi\u1EBFu</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (receipt.value) {
        _push(`<div class="receipt" data-v-f368abf3> \u{1F9FE} <strong data-v-f368abf3>Phi\u1EBFu nh\u1EADn ph\xF2ng:</strong> M\xE3: ${ssrInterpolate(receipt.value.code)} <br data-v-f368abf3> T\xEAn kh\xE1ch: ${ssrInterpolate(receipt.value.name)} <br data-v-f368abf3> Th\u1EDDi gian: ${ssrInterpolate(receipt.value.checkIn)} \u2192 ${ssrInterpolate(receipt.value.checkOut)} (${ssrInterpolate(receipt.value.nights)} \u0111\xEAm) <br data-v-f368abf3> T\u1ED5ng ti\u1EC1n: ${ssrInterpolate(receipt.value.total.toLocaleString())} VND </div>`);
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

export { RoomMNG as default };
//# sourceMappingURL=RoomMNG-CVD9clbx.mjs.map
