import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { b as useNuxtApp } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main = {
  __name: "RoomMap",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedRoom = ref(null);
    const rooms = ref([]);
    const floors = ref([]);
    const isVisible = ref(false);
    const searchQuery = ref("");
    const selectedFloor = ref("");
    const selectedType = ref("");
    const viewMode = ref("grid");
    const activeFloor = ref(1);
    const collapsedFloors = ref([]);
    const showToast = ref(false);
    const toastMessage = ref("");
    const toastType = ref("success");
    const { $api } = useNuxtApp();
    const filteredFloors = computed(() => {
      if (selectedFloor.value) {
        return [parseInt(selectedFloor.value)];
      }
      return floors.value;
    });
    const filteredRooms = computed(() => {
      return rooms.value.filter((room) => {
        const matchesSearch = room.maPhong.toLowerCase().includes(searchQuery.value.toLowerCase()) || room.loaiPhong.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesFloor = !selectedFloor.value || room.tang === parseInt(selectedFloor.value);
        const matchesType = !selectedType.value || room.typeClass === selectedType.value;
        return matchesSearch && matchesFloor && matchesType;
      });
    });
    const formatPrice = (price) => {
      return new Intl.NumberFormat("vi-VN").format(price);
    };
    const getFilteredRoomsByFloor = (floor) => {
      return filteredRooms.value.filter((room) => room.tang === floor);
    };
    const getRoomCountByType = (type) => {
      return rooms.value.filter((room) => room.typeClass === type).length;
    };
    const getRoomStatus = (room) => {
      const statuses = ["available", "occupied", "maintenance"];
      return statuses[Math.floor(Math.random() * statuses.length)];
    };
    const getRoomPosition = (room, index, totalRooms) => {
      const cols = Math.ceil(Math.sqrt(totalRooms));
      const row = Math.floor(index / cols);
      const col = index % cols;
      return {
        left: `${col * 120 + 50}px`,
        top: `${row * 100 + 50}px`
      };
    };
    const getDefaultRoomImage = (type) => {
      const images = {
        standard: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        deluxe: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        suite: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        dorm: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5"
      };
      return images[type] || images.standard;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "room-map-page" }, _attrs))} data-v-8af0c52e><div class="background-animation" data-v-8af0c52e><div class="floating-shape shape-1" data-v-8af0c52e></div><div class="floating-shape shape-2" data-v-8af0c52e></div><div class="floating-shape shape-3" data-v-8af0c52e></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "map-header"])}" data-v-8af0c52e><div class="header-content" data-v-8af0c52e><div class="header-icon" data-v-8af0c52e><svg viewBox="0 0 24 24" class="icon-svg" data-v-8af0c52e><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-8af0c52e></path></svg></div><h1 class="page-title" data-v-8af0c52e><span class="title-line" data-v-8af0c52e>S\u01A1 \u0111\u1ED3 ph\xF2ng</span><span class="title-highlight" data-v-8af0c52e>OceanView Hotels</span></h1><p class="page-subtitle" data-v-8af0c52e>Kh\xE1m ph\xE1 b\u1ED1 c\u1EE5c v\xE0 v\u1ECB tr\xED c\xE1c ph\xF2ng trong kh\xE1ch s\u1EA1n c\u1EE7a ch\xFAng t\xF4i</p></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "controls-section"])}" data-v-8af0c52e><div class="controls-container" data-v-8af0c52e><div class="search-filter" data-v-8af0c52e><div class="search-box" data-v-8af0c52e><svg viewBox="0 0 24 24" class="search-icon" data-v-8af0c52e><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" data-v-8af0c52e></path></svg><input type="text"${ssrRenderAttr("value", searchQuery.value)} placeholder="T\xECm ki\u1EBFm ph\xF2ng..." class="search-input" data-v-8af0c52e></div><div class="filter-dropdown" data-v-8af0c52e><select class="floor-select" data-v-8af0c52e><option value="" data-v-8af0c52e${ssrIncludeBooleanAttr(Array.isArray(selectedFloor.value) ? ssrLooseContain(selectedFloor.value, "") : ssrLooseEqual(selectedFloor.value, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 t\u1EA7ng</option><!--[-->`);
      ssrRenderList(floors.value, (floor) => {
        _push(`<option${ssrRenderAttr("value", floor)} data-v-8af0c52e${ssrIncludeBooleanAttr(Array.isArray(selectedFloor.value) ? ssrLooseContain(selectedFloor.value, floor) : ssrLooseEqual(selectedFloor.value, floor)) ? " selected" : ""}> T\u1EA7ng ${ssrInterpolate(floor)}</option>`);
      });
      _push(`<!--]--></select></div><div class="filter-dropdown" data-v-8af0c52e><select class="type-select" data-v-8af0c52e><option value="" data-v-8af0c52e${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "") : ssrLooseEqual(selectedType.value, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3 lo\u1EA1i ph\xF2ng</option><option value="standard" data-v-8af0c52e${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "standard") : ssrLooseEqual(selectedType.value, "standard")) ? " selected" : ""}>Standard</option><option value="deluxe" data-v-8af0c52e${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "deluxe") : ssrLooseEqual(selectedType.value, "deluxe")) ? " selected" : ""}>Deluxe</option><option value="suite" data-v-8af0c52e${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "suite") : ssrLooseEqual(selectedType.value, "suite")) ? " selected" : ""}>Suite</option><option value="dorm" data-v-8af0c52e${ssrIncludeBooleanAttr(Array.isArray(selectedType.value) ? ssrLooseContain(selectedType.value, "dorm") : ssrLooseEqual(selectedType.value, "dorm")) ? " selected" : ""}>Dorm</option></select></div></div><div class="view-controls" data-v-8af0c52e><div class="view-toggle" data-v-8af0c52e><button class="${ssrRenderClass([{ "active": viewMode.value === "grid" }, "view-btn"])}" title="Xem d\u1EA1ng l\u01B0\u1EDBi" data-v-8af0c52e><svg viewBox="0 0 24 24" data-v-8af0c52e><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2h8v8h-8v-8zm2 2h4v4h-4v-4z" data-v-8af0c52e></path></svg></button><button class="${ssrRenderClass([{ "active": viewMode.value === "map" }, "view-btn"])}" title="Xem d\u1EA1ng b\u1EA3n \u0111\u1ED3" data-v-8af0c52e><svg viewBox="0 0 24 24" data-v-8af0c52e><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" data-v-8af0c52e></path></svg></button></div><button class="zoom-btn" title="\u0110\u1EB7t l\u1EA1i zoom" data-v-8af0c52e><svg viewBox="0 0 24 24" data-v-8af0c52e><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" data-v-8af0c52e></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "legend-section"])}" data-v-8af0c52e><div class="legend-container" data-v-8af0c52e><h3 class="legend-title" data-v-8af0c52e><svg viewBox="0 0 24 24" class="legend-icon" data-v-8af0c52e><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-8af0c52e></path></svg> Ch\xFA th\xEDch </h3><div class="legend-items" data-v-8af0c52e><div class="legend-item standard" data-v-8af0c52e><div class="legend-color" data-v-8af0c52e></div><span class="legend-text" data-v-8af0c52e>Standard Room</span><span class="legend-count" data-v-8af0c52e>(${ssrInterpolate(getRoomCountByType("standard"))})</span></div><div class="legend-item deluxe" data-v-8af0c52e><div class="legend-color" data-v-8af0c52e></div><span class="legend-text" data-v-8af0c52e>Deluxe Room</span><span class="legend-count" data-v-8af0c52e>(${ssrInterpolate(getRoomCountByType("deluxe"))})</span></div><div class="legend-item suite" data-v-8af0c52e><div class="legend-color" data-v-8af0c52e></div><span class="legend-text" data-v-8af0c52e>Suite Room</span><span class="legend-count" data-v-8af0c52e>(${ssrInterpolate(getRoomCountByType("suite"))})</span></div><div class="legend-item dorm" data-v-8af0c52e><div class="legend-color" data-v-8af0c52e></div><span class="legend-text" data-v-8af0c52e>Dorm Room</span><span class="legend-count" data-v-8af0c52e>(${ssrInterpolate(getRoomCountByType("dorm"))})</span></div></div></div></div><div class="map-content" data-v-8af0c52e>`);
      if (viewMode.value === "grid") {
        _push(`<div class="grid-view" data-v-8af0c52e><!--[-->`);
        ssrRenderList(filteredFloors.value, (floor) => {
          _push(`<div class="${ssrRenderClass([{ "animate-in": isVisible.value }, "floor-section"])}" style="${ssrRenderStyle({ animationDelay: `${floor * 0.1}s` })}" data-v-8af0c52e><div class="floor-header" data-v-8af0c52e><div class="floor-info" data-v-8af0c52e><h3 class="floor-title" data-v-8af0c52e><svg viewBox="0 0 24 24" class="floor-icon" data-v-8af0c52e><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" data-v-8af0c52e></path></svg> T\u1EA7ng ${ssrInterpolate(floor)}</h3><span class="room-count" data-v-8af0c52e>${ssrInterpolate(getFilteredRoomsByFloor(floor).length)} ph\xF2ng</span></div><button class="${ssrRenderClass([{ "collapsed": collapsedFloors.value.includes(floor) }, "collapse-btn"])}" data-v-8af0c52e><svg viewBox="0 0 24 24" data-v-8af0c52e><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" data-v-8af0c52e></path></svg></button></div><div class="floor-grid" style="${ssrRenderStyle([
            !collapsedFloors.value.includes(floor) ? null : { display: "none" },
            { "--room-count": getFilteredRoomsByFloor(floor).length }
          ])}" data-v-8af0c52e><!--[-->`);
          ssrRenderList(getFilteredRoomsByFloor(floor), (room, index) => {
            var _a;
            _push(`<div class="${ssrRenderClass([[room.typeClass, { "selected": ((_a = selectedRoom.value) == null ? void 0 : _a.maPhong) === room.maPhong }], "room-card"])}" style="${ssrRenderStyle({ animationDelay: `${index * 0.05}s` })}" data-v-8af0c52e><div class="room-header" data-v-8af0c52e><span class="room-number" data-v-8af0c52e>${ssrInterpolate(room.maPhong)}</span><div class="${ssrRenderClass([getRoomStatus(), "room-status"])}" data-v-8af0c52e><svg viewBox="0 0 24 24" class="status-icon" data-v-8af0c52e><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-8af0c52e></path></svg></div></div><div class="room-info" data-v-8af0c52e><span class="room-type" data-v-8af0c52e>${ssrInterpolate(room.shortType)}</span><span class="room-price" data-v-8af0c52e>${ssrInterpolate(formatPrice(room.giaPhong))}</span></div><div class="room-features" data-v-8af0c52e><!--[-->`);
            ssrRenderList(room.tienNghiList.slice(0, 2), (feature) => {
              _push(`<div class="feature-item" data-v-8af0c52e><svg viewBox="0 0 24 24" class="feature-icon" data-v-8af0c52e><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-8af0c52e></path></svg><span data-v-8af0c52e>${ssrInterpolate(feature)}</span></div>`);
            });
            _push(`<!--]-->`);
            if (room.tienNghiList.length > 2) {
              _push(`<span class="more-features" data-v-8af0c52e> +${ssrInterpolate(room.tienNghiList.length - 2)} ti\u1EC7n nghi kh\xE1c </span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="map-view" data-v-8af0c52e><div class="interactive-map" data-v-8af0c52e><!--[-->`);
        ssrRenderList(filteredFloors.value, (floor) => {
          _push(`<div class="${ssrRenderClass([{ "active": activeFloor.value === floor }, "floor-map"])}" data-v-8af0c52e><div class="floor-layout" data-v-8af0c52e><div class="building-structure" data-v-8af0c52e><div class="elevator" data-v-8af0c52e><svg viewBox="0 0 24 24" class="elevator-icon" data-v-8af0c52e><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 6h2v5H8V6zm6 12h-4v-5h4v5zm0-7h-4V6h4v5z" data-v-8af0c52e></path></svg><span data-v-8af0c52e>Thang m\xE1y</span></div><div class="stairs" data-v-8af0c52e><svg viewBox="0 0 24 24" class="stairs-icon" data-v-8af0c52e><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" data-v-8af0c52e></path></svg><span data-v-8af0c52e>C\u1EA7u thang</span></div><!--[-->`);
          ssrRenderList(getFilteredRoomsByFloor(floor), (room, index) => {
            var _a;
            _push(`<div class="${ssrRenderClass([[room.typeClass, { "selected": ((_a = selectedRoom.value) == null ? void 0 : _a.maPhong) === room.maPhong }], "room-marker"])}" style="${ssrRenderStyle(getRoomPosition(room, index, getFilteredRoomsByFloor(floor).length))}" data-v-8af0c52e><div class="marker-content" data-v-8af0c52e><span class="marker-number" data-v-8af0c52e>${ssrInterpolate(room.maPhong)}</span><div class="marker-popup" data-v-8af0c52e><div class="popup-content" data-v-8af0c52e><h4 data-v-8af0c52e>${ssrInterpolate(room.loaiPhong)}</h4><p data-v-8af0c52e>${ssrInterpolate(formatPrice(room.giaPhong))}/\u0111\xEAm</p></div></div></div></div>`);
          });
          _push(`<!--]--></div></div></div>`);
        });
        _push(`<!--]--><div class="floor-navigation" data-v-8af0c52e><!--[-->`);
        ssrRenderList(floors.value, (floor) => {
          _push(`<button class="${ssrRenderClass([{ "active": activeFloor.value === floor }, "floor-nav-btn"])}" data-v-8af0c52e>${ssrInterpolate(floor)}</button>`);
        });
        _push(`<!--]--></div></div></div>`);
      }
      _push(`</div>`);
      if (selectedRoom.value) {
        _push(`<div class="modal-overlay" data-v-8af0c52e><div class="${ssrRenderClass([{ "animate-in": selectedRoom.value }, "modal-container"])}" data-v-8af0c52e><div class="modal-header" data-v-8af0c52e><div class="modal-title" data-v-8af0c52e><h2 data-v-8af0c52e>${ssrInterpolate(selectedRoom.value.loaiPhong)}</h2><span class="room-number-badge" data-v-8af0c52e>Ph\xF2ng ${ssrInterpolate(selectedRoom.value.maPhong)}</span></div><button class="close-btn" data-v-8af0c52e><svg viewBox="0 0 24 24" data-v-8af0c52e><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-8af0c52e></path></svg></button></div><div class="modal-content" data-v-8af0c52e><div class="modal-left" data-v-8af0c52e><div class="room-image" data-v-8af0c52e><img${ssrRenderAttr("src", selectedRoom.value.urlAnhChinh || getDefaultRoomImage(selectedRoom.value.typeClass))}${ssrRenderAttr("alt", selectedRoom.value.loaiPhong)} data-v-8af0c52e><div class="image-overlay" data-v-8af0c52e><div class="${ssrRenderClass([selectedRoom.value.typeClass, "room-type-badge"])}" data-v-8af0c52e>${ssrInterpolate(selectedRoom.value.loaiPhong)}</div></div></div>`);
        if (selectedRoom.value.gallery) {
          _push(`<div class="room-gallery" data-v-8af0c52e><!--[-->`);
          ssrRenderList(selectedRoom.value.gallery, (image, index) => {
            _push(`<div class="gallery-item" data-v-8af0c52e><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `Room ${selectedRoom.value.maPhong} - ${index + 1}`)} data-v-8af0c52e></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="modal-right" data-v-8af0c52e><div class="room-details" data-v-8af0c52e><div class="detail-section" data-v-8af0c52e><h3 data-v-8af0c52e><svg viewBox="0 0 24 24" class="section-icon" data-v-8af0c52e><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-8af0c52e></path></svg> Th\xF4ng tin c\u01A1 b\u1EA3n </h3><div class="detail-grid" data-v-8af0c52e><div class="detail-item" data-v-8af0c52e><span class="detail-label" data-v-8af0c52e>Lo\u1EA1i gi\u01B0\u1EDDng:</span><span class="detail-value" data-v-8af0c52e>${ssrInterpolate(selectedRoom.value.kieuGiuong || "Kh\xF4ng x\xE1c \u0111\u1ECBnh")}</span></div><div class="detail-item" data-v-8af0c52e><span class="detail-label" data-v-8af0c52e>T\u1EA7ng:</span><span class="detail-value" data-v-8af0c52e>${ssrInterpolate(selectedRoom.value.tang)}</span></div><div class="detail-item" data-v-8af0c52e><span class="detail-label" data-v-8af0c52e>View:</span><span class="detail-value" data-v-8af0c52e>${ssrInterpolate(selectedRoom.value.view || "Kh\xF4ng x\xE1c \u0111\u1ECBnh")}</span></div><div class="detail-item" data-v-8af0c52e><span class="detail-label" data-v-8af0c52e>Di\u1EC7n t\xEDch:</span><span class="detail-value" data-v-8af0c52e>${ssrInterpolate(selectedRoom.value.dienTich || "Kh\xF4ng x\xE1c \u0111\u1ECBnh")} m\xB2</span></div></div></div><div class="detail-section" data-v-8af0c52e><h3 data-v-8af0c52e><svg viewBox="0 0 24 24" class="section-icon" data-v-8af0c52e><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" data-v-8af0c52e></path></svg> Ti\u1EC7n nghi </h3><div class="amenities-list" data-v-8af0c52e><!--[-->`);
        ssrRenderList(selectedRoom.value.tienNghiList, (amenity) => {
          _push(`<div class="amenity-item" data-v-8af0c52e><svg viewBox="0 0 24 24" class="amenity-icon" data-v-8af0c52e><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-8af0c52e></path></svg><span data-v-8af0c52e>${ssrInterpolate(amenity)}</span></div>`);
        });
        _push(`<!--]--></div></div><div class="detail-section" data-v-8af0c52e><h3 data-v-8af0c52e><svg viewBox="0 0 24 24" class="section-icon" data-v-8af0c52e><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" data-v-8af0c52e></path></svg> Gi\xE1 ph\xF2ng </h3><div class="price-info" data-v-8af0c52e><div class="price-main" data-v-8af0c52e><span class="price-amount" data-v-8af0c52e>${ssrInterpolate(formatPrice(selectedRoom.value.giaPhong))}</span><span class="price-unit" data-v-8af0c52e>VN\u0110 / \u0111\xEAm</span></div><div class="price-note" data-v-8af0c52e>* Gi\xE1 \u0111\xE3 bao g\u1ED3m thu\u1EBF v\xE0 ph\xED d\u1ECBch v\u1EE5</div></div></div></div><div class="modal-actions" data-v-8af0c52e><button class="action-btn secondary" data-v-8af0c52e><svg viewBox="0 0 24 24" data-v-8af0c52e><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" data-v-8af0c52e></path></svg> \u0110\xF3ng </button><button class="action-btn primary" data-v-8af0c52e><svg viewBox="0 0 24 24" data-v-8af0c52e><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" data-v-8af0c52e></path></svg> \u0110\u1EB7t ph\xF2ng ngay </button></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showToast.value) {
        _push(`<div class="${ssrRenderClass([[toastType.value, { "show": showToast.value }], "toast"])}" data-v-8af0c52e><div class="toast-content" data-v-8af0c52e>`);
        if (toastType.value === "success") {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-8af0c52e><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" data-v-8af0c52e></path></svg>`);
        } else {
          _push(`<svg viewBox="0 0 24 24" class="toast-icon" data-v-8af0c52e><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" data-v-8af0c52e></path></svg>`);
        }
        _push(`<span data-v-8af0c52e>${ssrInterpolate(toastMessage.value)}</span></div></div>`);
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
const RoomMap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8af0c52e"]]);

export { RoomMap as default };
//# sourceMappingURL=RoomMap-QGmmOI8R.mjs.map
