import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

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
      fullName: "Nguy\u1EC5n V\u0103n A",
      email: "nguyenvana@gmail.com",
      phone: "+84987654321",
      idNumber: "012345678901",
      address: "123 V\xF5 Nguy\xEAn Gi\xE1p, \u0110\xE0 N\u1EB5ng"
    });
    const filters = ref({
      keyword: "",
      type: "",
      time: ""
    });
    const history = ref([
      { id: 1, name: "Ph\xF2ng Deluxe", type: "room", date: "2024-04-01", status: "Ho\xE0n t\u1EA5t", price: 15e5 },
      { id: 2, name: "Spa th\u01B0 gi\xE3n", type: "service", date: "2024-04-02", status: "Ho\xE0n t\u1EA5t", price: 4e5 },
      { id: 3, name: "Ph\xF2ng Superior", type: "room", date: "2024-03-20", status: "\u0110ang x\u1EED l\xFD", price: 12e5 },
      { id: 4, name: "Tour B\xE0 N\xE0 Hills", type: "service", date: "2024-03-15", status: "Ho\xE0n t\u1EA5t", price: 8e5 }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile-container" }, _attrs))} data-v-c5d783a5><h2 data-v-c5d783a5>\u{1F464} H\u1ED3 S\u01A1 C\xE1 Nh\xE2n</h2><div class="tabs" data-v-c5d783a5><button class="${ssrRenderClass({ active: currentTab.value === "info" })}" data-v-c5d783a5>Th\xF4ng tin c\xE1 nh\xE2n</button><button class="${ssrRenderClass({ active: currentTab.value === "history" })}" data-v-c5d783a5>L\u1ECBch s\u1EED s\u1EED d\u1EE5ng</button></div>`);
      if (currentTab.value === "info") {
        _push(`<div class="form-section" data-v-c5d783a5><form data-v-c5d783a5><div class="form-grid" data-v-c5d783a5><div class="form-group" data-v-c5d783a5><label data-v-c5d783a5>H\u1ECD v\xE0 t\xEAn</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.fullName)} data-v-c5d783a5></div><div class="form-group" data-v-c5d783a5><label data-v-c5d783a5>Email</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="email"${ssrRenderAttr("value", form.value.email)} data-v-c5d783a5></div><div class="form-group" data-v-c5d783a5><label data-v-c5d783a5>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="tel"${ssrRenderAttr("value", form.value.phone)} data-v-c5d783a5></div><div class="form-group" data-v-c5d783a5><label data-v-c5d783a5>S\u1ED1 CCCD/H\u1ED9 chi\u1EBFu</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.idNumber)} data-v-c5d783a5></div><div class="form-group full-width" data-v-c5d783a5><label data-v-c5d783a5>\u0110\u1ECBa ch\u1EC9 li\xEAn l\u1EA1c</label><input${ssrIncludeBooleanAttr(!editable.value) ? " readonly" : ""} type="text"${ssrRenderAttr("value", form.value.address)} data-v-c5d783a5></div></div>`);
        if (otpRequired.value) {
          _push(`<div class="otp-group" data-v-c5d783a5><input type="text"${ssrRenderAttr("value", otp.value)} placeholder="Nh\u1EADp m\xE3 OTP..." data-v-c5d783a5><button type="button" class="btn-secondary" data-v-c5d783a5>G\u1EEDi OTP</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="form-actions" data-v-c5d783a5>`);
        if (!editable.value) {
          _push(`<button class="btn-secondary" data-v-c5d783a5>S\u1EEDa th\xF4ng tin</button>`);
        } else {
          _push(`<button type="submit" class="btn-primary" data-v-c5d783a5>L\u01B0u</button>`);
        }
        _push(`</div></form></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentTab.value === "history") {
        _push(`<div class="history-section" data-v-c5d783a5><div class="filters" data-v-c5d783a5><input${ssrRenderAttr("value", filters.value.keyword)} placeholder="T\xECm theo t\xEAn d\u1ECBch v\u1EE5/ph\xF2ng..." data-v-c5d783a5><select data-v-c5d783a5><option value="" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "") : ssrLooseEqual(filters.value.type, "")) ? " selected" : ""}>T\u1EA5t c\u1EA3</option><option value="room" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "room") : ssrLooseEqual(filters.value.type, "room")) ? " selected" : ""}>\u0110\u1EB7t ph\xF2ng</option><option value="service" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.type) ? ssrLooseContain(filters.value.type, "service") : ssrLooseEqual(filters.value.type, "service")) ? " selected" : ""}>D\u1ECBch v\u1EE5</option></select><select data-v-c5d783a5><option value="" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "") : ssrLooseEqual(filters.value.time, "")) ? " selected" : ""}>Th\u1EDDi gian</option><option value="7" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "7") : ssrLooseEqual(filters.value.time, "7")) ? " selected" : ""}>7 ng\xE0y qua</option><option value="30" data-v-c5d783a5${ssrIncludeBooleanAttr(Array.isArray(filters.value.time) ? ssrLooseContain(filters.value.time, "30") : ssrLooseEqual(filters.value.time, "30")) ? " selected" : ""}>Th\xE1ng n\xE0y</option></select></div><table class="history-table" data-v-c5d783a5><thead data-v-c5d783a5><tr data-v-c5d783a5><th data-v-c5d783a5>T\xEAn</th><th data-v-c5d783a5>Lo\u1EA1i</th><th data-v-c5d783a5>Ng\xE0y</th><th data-v-c5d783a5>Tr\u1EA1ng th\xE1i</th><th data-v-c5d783a5>Chi ph\xED</th></tr></thead><tbody data-v-c5d783a5><!--[-->`);
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
//# sourceMappingURL=Profile-DaAvpHw5.mjs.map
