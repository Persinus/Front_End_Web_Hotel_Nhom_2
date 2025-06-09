import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "RoomMNG",
  __ssrInlineRender: true,
  setup(__props) {
    const floors = [1, 2, 3];
    const isVisible = ref(false);
    const searchQuery = ref("");
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const rooms = ref([
      { id: 1, number: "101", floor: 1, type: "Ph\xF2ng \u0111\u01A1n", price: 8e5, status: "available" },
      { id: 2, number: "102", floor: 1, type: "Ph\xF2ng \u0111\xF4i", price: 12e5, status: "occupied" },
      { id: 3, number: "103", floor: 1, type: "Ph\xF2ng VIP", price: 18e5, status: "cleaning" },
      { id: 4, number: "201", floor: 2, type: "Suite", price: 2e6, status: "available" },
      { id: 5, number: "202", floor: 2, type: "Gia \u0111\xECnh", price: 25e5, status: "occupied" },
      { id: 6, number: "203", floor: 2, type: "Deluxe", price: 15e5, status: "available" },
      { id: 7, number: "301", floor: 3, type: "Presidential", price: 5e6, status: "cleaning" },
      { id: 8, number: "302", floor: 3, type: "Suite VIP", price: 35e5, status: "available" }
    ]);
    const statusMap = {
      available: "Ph\xF2ng tr\u1ED1ng",
      occupied: "\u0110ang s\u1EED d\u1EE5ng",
      cleaning: "C\u1EA7n d\u1ECDn d\u1EB9p"
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
      checkOut: "",
      phone: ""
    });
    const receipt = ref(null);
    const today = computed(() => {
      return (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    });
    const filteredRooms = computed(() => {
      return rooms.value.filter((r) => {
        const matchesFloor = !selectedFloor.value || r.floor == selectedFloor.value;
        const matchesStatus = !selectedStatus.value || r.status === selectedStatus.value;
        const matchesSearch = !searchQuery.value || r.number.toLowerCase().includes(searchQuery.value.toLowerCase());
        return matchesFloor && matchesStatus && matchesSearch;
      });
    });
    const availableRooms = computed(() => rooms.value.filter((r) => r.status === "available").length);
    const occupiedRooms = computed(() => rooms.value.filter((r) => r.status === "occupied").length);
    const cleaningRooms = computed(() => rooms.value.filter((r) => r.status === "cleaning").length);
    const occupancyRate = computed(() => Math.round(occupiedRooms.value / rooms.value.length * 100));
    const isFormValid = computed(() => {
      return guest.value.name && guest.value.id && guest.value.checkIn && guest.value.checkOut;
    });
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN").format(price) + " \u20AB";
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const calculateNights = () => {
      if (!guest.value.checkIn || !guest.value.checkOut) return 0;
      const checkIn = new Date(guest.value.checkIn);
      const checkOut = new Date(guest.value.checkOut);
      const diffTime = Math.abs(checkOut - checkIn);
      return Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    };
    const calculateTotal = () => {
      return selectedRoom.value.price * calculateNights();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "room-management-page" }, _attrs))} data-v-5fe4a0e0><div class="background-animation" data-v-5fe4a0e0><div class="floating-shape shape-1" data-v-5fe4a0e0></div><div class="floating-shape shape-2" data-v-5fe4a0e0></div><div class="floating-shape shape-3" data-v-5fe4a0e0></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "management-header"])}" data-v-5fe4a0e0><div class="header-content" data-v-5fe4a0e0><div class="header-icon" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="icon-svg" data-v-5fe4a0e0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-5fe4a0e0></path></svg></div><h1 class="page-title" data-v-5fe4a0e0><span class="title-line" data-v-5fe4a0e0>Qu\u1EA3n l\xFD tr\u1EA1ng th\xE1i</span><span class="title-highlight" data-v-5fe4a0e0>Ph\xF2ng kh\xE1ch s\u1EA1n</span></h1><p class="page-subtitle" data-v-5fe4a0e0>Theo d\xF5i v\xE0 qu\u1EA3n l\xFD t\xECnh tr\u1EA1ng ph\xF2ng theo th\u1EDDi gian th\u1EF1c</p></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "dashboard-stats"])}" data-v-5fe4a0e0><div class="stats-container" data-v-5fe4a0e0><div class="stat-card available" data-v-5fe4a0e0><div class="stat-icon" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-5fe4a0e0></path></svg></div><div class="stat-content" data-v-5fe4a0e0><span class="stat-number" data-v-5fe4a0e0>${ssrInterpolate(availableRooms.value)}</span><span class="stat-label" data-v-5fe4a0e0>Ph\xF2ng tr\u1ED1ng</span></div></div><div class="stat-card occupied" data-v-5fe4a0e0><div class="stat-icon" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-5fe4a0e0></path></svg></div><div class="stat-content" data-v-5fe4a0e0><span class="stat-number" data-v-5fe4a0e0>${ssrInterpolate(occupiedRooms.value)}</span><span class="stat-label" data-v-5fe4a0e0>\u0110ang s\u1EED d\u1EE5ng</span></div></div><div class="stat-card cleaning" data-v-5fe4a0e0><div class="stat-icon" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M19.36 2.72L20.78 4.14l-1.93 1.93c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5-.62 0-1.19-.2-1.64-.55L12.93 12l5.78 5.78c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L11.52 13.4 9.8 15.12c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5c.62 0 1.19.2 1.64.55l1.72-1.72L4.43 7.31c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5.78 5.78 2.33-2.33c-.35-.45-.55-1.02-.55-1.64 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .62-.2 1.19-.55 1.64l1.93-1.93z" data-v-5fe4a0e0></path></svg></div><div class="stat-content" data-v-5fe4a0e0><span class="stat-number" data-v-5fe4a0e0>${ssrInterpolate(cleaningRooms.value)}</span><span class="stat-label" data-v-5fe4a0e0>C\u1EA7n d\u1ECDn d\u1EB9p</span></div></div><div class="stat-card revenue" data-v-5fe4a0e0><div class="stat-icon" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" data-v-5fe4a0e0></path></svg></div><div class="stat-content" data-v-5fe4a0e0><span class="stat-number" data-v-5fe4a0e0>${ssrInterpolate(occupancyRate.value)}%</span><span class="stat-label" data-v-5fe4a0e0>T\u1EF7 l\u1EC7 l\u1EA5p \u0111\u1EA7y</span></div></div></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "controls-section"])}" data-v-5fe4a0e0><div class="controls-container" data-v-5fe4a0e0><div class="filters-group" data-v-5fe4a0e0><h3 class="filters-title" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="filter-icon" data-v-5fe4a0e0><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" data-v-5fe4a0e0></path></svg> B\u1ED9 l\u1ECDc </h3><div class="filter-controls" data-v-5fe4a0e0><div class="filter-group" data-v-5fe4a0e0><label class="filter-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-5fe4a0e0></path></svg> T\u1EA7ng </label><select class="filter-select" data-v-5fe4a0e0><option value="" data-v-5fe4a0e0${ssrIncludeBooleanAttr(Array.isArray(selectedFloor.value) ? ssrLooseContain(selectedFloor.value, "") : ssrLooseEqual(selectedFloor.value, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 t\u1EA7ng</option><!--[-->`);
      ssrRenderList(floors, (f) => {
        _push(`<option${ssrRenderAttr("value", f)} data-v-5fe4a0e0${ssrIncludeBooleanAttr(Array.isArray(selectedFloor.value) ? ssrLooseContain(selectedFloor.value, f) : ssrLooseEqual(selectedFloor.value, f)) ? " selected" : ""}>T\u1EA7ng ${ssrInterpolate(f)}</option>`);
      });
      _push(`<!--]--></select></div><div class="filter-group" data-v-5fe4a0e0><label class="filter-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-5fe4a0e0></path></svg> Tr\u1EA1ng th\xE1i </label><select class="filter-select" data-v-5fe4a0e0><option value="" data-v-5fe4a0e0${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "") : ssrLooseEqual(selectedStatus.value, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 tr\u1EA1ng th\xE1i</option><option value="available" data-v-5fe4a0e0${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "available") : ssrLooseEqual(selectedStatus.value, "available")) ? " selected" : ""}>Ph\xF2ng tr\u1ED1ng</option><option value="occupied" data-v-5fe4a0e0${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "occupied") : ssrLooseEqual(selectedStatus.value, "occupied")) ? " selected" : ""}>\u0110ang s\u1EED d\u1EE5ng</option><option value="cleaning" data-v-5fe4a0e0${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "cleaning") : ssrLooseEqual(selectedStatus.value, "cleaning")) ? " selected" : ""}>C\u1EA7n d\u1ECDn d\u1EB9p</option></select></div><div class="filter-group" data-v-5fe4a0e0><label class="filter-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" data-v-5fe4a0e0></path></svg> T\xECm ki\u1EBFm </label><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="T\xECm theo s\u1ED1 ph\xF2ng..." class="search-input" data-v-5fe4a0e0></div></div></div><div class="action-buttons" data-v-5fe4a0e0><button class="action-btn refresh" title="L\xE0m m\u1EDBi" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" data-v-5fe4a0e0></path></svg> L\xE0m m\u1EDBi </button><button class="action-btn export" title="Xu\u1EA5t b\xE1o c\xE1o" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" data-v-5fe4a0e0></path></svg> Xu\u1EA5t b\xE1o c\xE1o </button></div></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "room-grid-section"])}" data-v-5fe4a0e0><div class="grid-header" data-v-5fe4a0e0><h3 class="grid-title" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="grid-icon" data-v-5fe4a0e0><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2h8v8h-8v-8zm2 2h4v4h-4v-4z" data-v-5fe4a0e0></path></svg> S\u01A1 \u0111\u1ED3 ph\xF2ng </h3><span class="room-count" data-v-5fe4a0e0>${ssrInterpolate(filteredRooms.value.length)} ph\xF2ng</span></div><div class="room-grid" data-v-5fe4a0e0><!--[-->`);
      ssrRenderList(filteredRooms.value, (room, index) => {
        var _a;
        _push(`<div class="${ssrRenderClass([[room.status, { "selected": ((_a = selectedRoom.value) == null ? void 0 : _a.id) === room.id }], "room-card"])}" style="${ssrRenderStyle({ animationDelay: `${index * 0.1}s` })}" data-v-5fe4a0e0><div class="room-header" data-v-5fe4a0e0><span class="room-number" data-v-5fe4a0e0>${ssrInterpolate(room.number)}</span><div class="${ssrRenderClass([room.status, "room-status-indicator"])}" data-v-5fe4a0e0>`);
        if (room.status === "available") {
          _push(`<svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-5fe4a0e0></path></svg>`);
        } else if (room.status === "occupied") {
          _push(`<svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-5fe4a0e0></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M19.36 2.72L20.78 4.14l-1.93 1.93c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5-.62 0-1.19-.2-1.64-.55L12.93 12l5.78 5.78c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L11.52 13.4 9.8 15.12c.35.45.55 1.02.55 1.64 0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5c.62 0 1.19.2 1.64.55l1.72-1.72L4.43 7.31c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l5.78 5.78 2.33-2.33c-.35-.45-.55-1.02-.55-1.64 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .62-.2 1.19-.55 1.64l1.93-1.93z" data-v-5fe4a0e0></path></svg>`);
        }
        _push(`</div></div><div class="room-info" data-v-5fe4a0e0><h4 class="room-type" data-v-5fe4a0e0>${ssrInterpolate(room.type)}</h4><p class="room-floor" data-v-5fe4a0e0>T\u1EA7ng ${ssrInterpolate(room.floor)}</p><p class="room-price" data-v-5fe4a0e0>${ssrInterpolate(formatPrice(room.price))}/\u0111\xEAm</p></div><div class="room-status" data-v-5fe4a0e0><span class="${ssrRenderClass([room.status, "status-label"])}" data-v-5fe4a0e0>${ssrInterpolate(room.statusLabel)}</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (selectedRoom.value) {
        _push(`<div class="${ssrRenderClass([{ "animate-in": selectedRoom.value }, "checkin-section"])}" data-v-5fe4a0e0><div class="checkin-container" data-v-5fe4a0e0><div class="checkin-header" data-v-5fe4a0e0><h3 class="checkin-title" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="checkin-icon" data-v-5fe4a0e0><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-5fe4a0e0></path></svg> Nh\u1EADn ph\xF2ng: ${ssrInterpolate(selectedRoom.value.number)} - ${ssrInterpolate(selectedRoom.value.type)}</h3><button class="close-btn" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-5fe4a0e0></path></svg></button></div><form class="checkin-form" data-v-5fe4a0e0><div class="form-grid" data-v-5fe4a0e0><div class="form-group" data-v-5fe4a0e0><label class="form-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" data-v-5fe4a0e0></path></svg> H\u1ECD v\xE0 t\xEAn kh\xE1ch h\xE0ng * </label><input${ssrRenderAttr("value", guest.value.name)} placeholder="Nh\u1EADp h\u1ECD v\xE0 t\xEAn \u0111\u1EA7y \u0111\u1EE7" class="form-input" required data-v-5fe4a0e0></div><div class="form-group" data-v-5fe4a0e0><label class="form-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z" data-v-5fe4a0e0></path></svg> S\u1ED1 CCCD/H\u1ED9 chi\u1EBFu * </label><input${ssrRenderAttr("value", guest.value.id)} placeholder="Nh\u1EADp s\u1ED1 CCCD ho\u1EB7c h\u1ED9 chi\u1EBFu" class="form-input" required data-v-5fe4a0e0></div><div class="form-group" data-v-5fe4a0e0><label class="form-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-1.02-1.3-1.74-2.39-1.74-.4 0-.8.1-1.15.29l-3.12 1.7c-.3.17-.65.25-1 .25-.53 0-1.04-.21-1.41-.59L9 6.41c-.38-.38-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41L11.41 1c.38-.38.88-.59 1.41-.59.53 0 1.04.21 1.41.59L16.59 3c.38.38.59.88.59 1.41 0 .53-.21 1.04-.59 1.41L15.18 7.23l2.54 7.63H20v6h-4z" data-v-5fe4a0e0></path></svg> S\u1ED1 ng\u01B0\u1EDDi * </label><input type="number"${ssrRenderAttr("value", guest.value.people)} placeholder="S\u1ED1 l\u01B0\u1EE3ng kh\xE1ch" class="form-input" min="1" max="10" required data-v-5fe4a0e0></div><div class="form-group" data-v-5fe4a0e0><label class="form-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-5fe4a0e0></path></svg> Ng\xE0y nh\u1EADn ph\xF2ng * </label><input type="date"${ssrRenderAttr("value", guest.value.checkIn)} class="form-input"${ssrRenderAttr("min", today.value)} required data-v-5fe4a0e0></div><div class="form-group" data-v-5fe4a0e0><label class="form-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2-7h-3l-1-1h-6l-1 1H5v2h14V4z" data-v-5fe4a0e0></path></svg> Ng\xE0y tr\u1EA3 ph\xF2ng * </label><input type="date"${ssrRenderAttr("value", guest.value.checkOut)} class="form-input"${ssrRenderAttr("min", guest.value.checkIn || today.value)} required data-v-5fe4a0e0></div><div class="form-group" data-v-5fe4a0e0><label class="form-label" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="label-icon" data-v-5fe4a0e0><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" data-v-5fe4a0e0></path></svg> S\u1ED1 \u0111i\u1EC7n tho\u1EA1i </label><input${ssrRenderAttr("value", guest.value.phone)} placeholder="S\u1ED1 \u0111i\u1EC7n tho\u1EA1i li\xEAn l\u1EA1c" class="form-input" data-v-5fe4a0e0></div></div>`);
        if (guest.value.checkIn && guest.value.checkOut) {
          _push(`<div class="booking-summary" data-v-5fe4a0e0><h4 class="summary-title" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="summary-icon" data-v-5fe4a0e0><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" data-v-5fe4a0e0></path></svg> T\xF3m t\u1EAFt \u0111\u1EB7t ph\xF2ng </h4><div class="summary-details" data-v-5fe4a0e0><div class="summary-row" data-v-5fe4a0e0><span class="summary-label" data-v-5fe4a0e0>S\u1ED1 \u0111\xEAm:</span><span class="summary-value" data-v-5fe4a0e0>${ssrInterpolate(calculateNights())} \u0111\xEAm</span></div><div class="summary-row" data-v-5fe4a0e0><span class="summary-label" data-v-5fe4a0e0>Gi\xE1 ph\xF2ng/\u0111\xEAm:</span><span class="summary-value" data-v-5fe4a0e0>${ssrInterpolate(formatPrice(selectedRoom.value.price))}</span></div><div class="summary-row total" data-v-5fe4a0e0><span class="summary-label" data-v-5fe4a0e0>T\u1ED5ng ti\u1EC1n:</span><span class="summary-value" data-v-5fe4a0e0>${ssrInterpolate(formatPrice(calculateTotal()))}</span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="form-actions" data-v-5fe4a0e0><button type="button" class="btn-secondary" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-5fe4a0e0></path></svg> H\u1EE7y </button><button type="submit" class="btn-primary"${ssrIncludeBooleanAttr(!isFormValid.value) ? " disabled" : ""} data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-5fe4a0e0></path></svg> X\xE1c nh\u1EADn &amp; In phi\u1EBFu </button></div></form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (receipt.value) {
        _push(`<div class="receipt-modal" data-v-5fe4a0e0><div class="${ssrRenderClass([{ "animate-in": receipt.value }, "receipt-container"])}" data-v-5fe4a0e0><div class="receipt-header" data-v-5fe4a0e0><h3 class="receipt-title" data-v-5fe4a0e0><svg viewBox="0 0 24 24" class="receipt-icon" data-v-5fe4a0e0><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H7v-2h6v2zm3-4H7V5h9v2z" data-v-5fe4a0e0></path></svg> Phi\u1EBFu nh\u1EADn ph\xF2ng </h3><button class="close-btn" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-5fe4a0e0></path></svg></button></div><div class="receipt-content" data-v-5fe4a0e0><div class="receipt-info" data-v-5fe4a0e0><div class="hotel-info" data-v-5fe4a0e0><h4 data-v-5fe4a0e0>OceanView Hotels</h4><p data-v-5fe4a0e0>123 V\xF5 Nguy\xEAn Gi\xE1p, \u0110\xE0 N\u1EB5ng</p><p data-v-5fe4a0e0>Hotline: 1900-1234</p></div><div class="booking-details" data-v-5fe4a0e0><div class="detail-row" data-v-5fe4a0e0><span class="detail-label" data-v-5fe4a0e0>M\xE3 \u0111\u1EB7t ph\xF2ng:</span><span class="detail-value" data-v-5fe4a0e0>${ssrInterpolate(receipt.value.code)}</span></div><div class="detail-row" data-v-5fe4a0e0><span class="detail-label" data-v-5fe4a0e0>T\xEAn kh\xE1ch h\xE0ng:</span><span class="detail-value" data-v-5fe4a0e0>${ssrInterpolate(receipt.value.name)}</span></div><div class="detail-row" data-v-5fe4a0e0><span class="detail-label" data-v-5fe4a0e0>Ph\xF2ng:</span><span class="detail-value" data-v-5fe4a0e0>${ssrInterpolate(selectedRoom.value.number)} - ${ssrInterpolate(selectedRoom.value.type)}</span></div><div class="detail-row" data-v-5fe4a0e0><span class="detail-label" data-v-5fe4a0e0>Ng\xE0y nh\u1EADn ph\xF2ng:</span><span class="detail-value" data-v-5fe4a0e0>${ssrInterpolate(formatDate(receipt.value.checkIn))}</span></div><div class="detail-row" data-v-5fe4a0e0><span class="detail-label" data-v-5fe4a0e0>Ng\xE0y tr\u1EA3 ph\xF2ng:</span><span class="detail-value" data-v-5fe4a0e0>${ssrInterpolate(formatDate(receipt.value.checkOut))}</span></div><div class="detail-row" data-v-5fe4a0e0><span class="detail-label" data-v-5fe4a0e0>S\u1ED1 \u0111\xEAm:</span><span class="detail-value" data-v-5fe4a0e0>${ssrInterpolate(receipt.value.nights)} \u0111\xEAm</span></div><div class="detail-row total" data-v-5fe4a0e0><span class="detail-label" data-v-5fe4a0e0>T\u1ED5ng ti\u1EC1n:</span><span class="detail-value" data-v-5fe4a0e0>${ssrInterpolate(formatPrice(receipt.value.total))}</span></div></div></div><div class="receipt-actions" data-v-5fe4a0e0><button class="action-btn print" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" data-v-5fe4a0e0></path></svg> In phi\u1EBFu </button><button class="action-btn email" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-5fe4a0e0></path></svg> G\u1EEDi email </button><button class="action-btn close" data-v-5fe4a0e0><svg viewBox="0 0 24 24" data-v-5fe4a0e0><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-5fe4a0e0></path></svg> Ho\xE0n t\u1EA5t </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-5fe4a0e0><div class="toast-content" data-v-5fe4a0e0>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-5fe4a0e0><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-5fe4a0e0></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-5fe4a0e0><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-5fe4a0e0></path></svg>`);
        }
        _push(`<span data-v-5fe4a0e0>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
const RoomMNG = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5fe4a0e0"]]);

export { RoomMNG as default };
//# sourceMappingURL=RoomMNG-CdsJvmpC.mjs.map
