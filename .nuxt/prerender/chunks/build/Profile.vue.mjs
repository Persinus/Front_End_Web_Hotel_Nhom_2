import { ref, computed, mergeProps, useSSRContext } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'file://C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';

const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const currentTab = ref("info");
    const editable = ref(false);
    const otpRequired = ref(false);
    const otp = ref("");
    ref("");
    const successMessage = ref("");
    const form = ref({
      fullName: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      phone: "+84987654321",
      idNumber: "012345678901",
      address: "123 Võ Nguyên Giáp, Đà Nẵng"
    });
    const filters = ref({
      keyword: "",
      type: "",
      time: ""
    });
    const history = ref([
      { id: 1, name: "Phòng Deluxe", type: "room", date: "2024-04-01", status: "Hoàn tất", price: 15e5 },
      { id: 2, name: "Spa thư giãn", type: "service", date: "2024-04-02", status: "Hoàn tất", price: 4e5 },
      { id: 3, name: "Phòng Superior", type: "room", date: "2024-03-20", status: "Đang xử lý", price: 12e5 },
      { id: 4, name: "Tour Bà Nà Hills", type: "service", date: "2024-03-15", status: "Hoàn tất", price: 8e5 }
    ]);
    const filteredHistory = computed(() => {
      return history.value.filter((item) => {
        const matchKeyword = item.name.toLowerCase().includes(filters.value.keyword.toLowerCase());
        const matchType = filters.value.type ? item.type === filters.value.type : true;
        const matchTime = filters.value.time ? (Date.now() - new Date(item.date).getTime()) / (1e3 * 3600 * 24) <= parseInt(filters.value.time) : true;
        return matchKeyword && matchType && matchTime;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-container" }, _attrs))} data-v-c5d783a5><h2 data-v-c5d783a5>👤 Hồ Sơ Cá Nhân</h2><div class="tabs" data-v-c5d783a5><button class="${ssrRenderClass({ active: currentTab.value === "info" })}" data-v-c5d783a5>Thông tin cá nhân</button><button class="${ssrRenderClass({ active: currentTab.value === "history" })}" data-v-c5d783a5>Lịch sử sử dụng</button></div>`);
      if (currentTab.value === "info") {
        _push(`<div class="form-section" data-v-c5d783a5><form data-v-c5d783a5><div class="form-grid" data-v-c5d783a5><div class="form-group" data-v-c5d783a5><label data-v-c5d783a5>Họ và tên</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.fullName)} data-v-c5d783a5></div><div class="form-group" data-v-c5d783a5><label data-v-c5d783a5>Email</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="email"${ssrRenderAttr("value", form.value.email)} data-v-c5d783a5></div><div class="form-group" data-v-c5d783a5><label data-v-c5d783a5>Số điện thoại</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="tel"${ssrRenderAttr("value", form.value.phone)} data-v-c5d783a5></div><div class="form-group" data-v-c5d783a5><label data-v-c5d783a5>Số CCCD/Hộ chiếu</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.idNumber)} data-v-c5d783a5></div><div class="form-group full-width" data-v-c5d783a5><label data-v-c5d783a5>Địa chỉ liên lạc</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.address)} data-v-c5d783a5></div></div>`);
        if (otpRequired.value) {
          _push(`<div class="otp-group" data-v-c5d783a5><input type="text"${ssrRenderAttr("value", otp.value)} placeholder="Nhập mã OTP..." data-v-c5d783a5><button type="button" class="btn-secondary" data-v-c5d783a5>Gửi OTP</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="form-actions" data-v-c5d783a5>`);
        if (!editable.value) {
          _push(`<button class="btn-secondary" data-v-c5d783a5>Sửa thông tin</button>`);
        } else {
          _push(`<button type="submit" class="btn-primary" data-v-c5d783a5>Lưu</button>`);
        }
        _push(`</div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value === "history") {
        _push(`<div class="history-section" data-v-c5d783a5><div class="filters" data-v-c5d783a5><input${ssrRenderAttr("value", filters.value.keyword)} placeholder="Tìm theo tên dịch vụ/phòng..." data-v-c5d783a5><select data-v-c5d783a5><option value="" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "") : ssrLooseEqual(filters.value.type, "")) ? " selected" : ""}>Tất cả</option><option value="room" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "room") : ssrLooseEqual(filters.value.type, "room")) ? " selected" : ""}>Đặt phòng</option><option value="service" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "service") : ssrLooseEqual(filters.value.type, "service")) ? " selected" : ""}>Dịch vụ</option></select><select data-v-c5d783a5><option value="" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "") : ssrLooseEqual(filters.value.time, "")) ? " selected" : ""}>Thời gian</option><option value="7" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "7") : ssrLooseEqual(filters.value.time, "7")) ? " selected" : ""}>7 ngày qua</option><option value="30" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "30") : ssrLooseEqual(filters.value.time, "30")) ? " selected" : ""}>Tháng này</option></select></div><table class="history-table" data-v-c5d783a5><thead data-v-c5d783a5><tr data-v-c5d783a5><th data-v-c5d783a5>Tên</th><th data-v-c5d783a5>Loại</th><th data-v-c5d783a5>Ngày</th><th data-v-c5d783a5>Trạng thái</th><th data-v-c5d783a5>Chi phí</th></tr></thead><tbody data-v-c5d783a5><!--[-->`);
        ssrRenderList(filteredHistory.value, (item) => {
          _push(`<tr data-v-c5d783a5><td data-v-c5d783a5>${ssrInterpolate(item.name)}</td><td data-v-c5d783a5>${ssrInterpolate(item.type)}</td><td data-v-c5d783a5>${ssrInterpolate(item.date)}</td><td data-v-c5d783a5>${ssrInterpolate(item.status)}</td><td data-v-c5d783a5>${ssrInterpolate(item.price.toLocaleString())} VND</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
      } else {
        _push(`<!---->`);
      }
      if (successMessage.value) {
        _push(`<div class="success-msg" data-v-c5d783a5>${ssrInterpolate(successMessage.value)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c5d783a5"]]);

export { Profile as default };
//# sourceMappingURL=Profile.vue.mjs.map
