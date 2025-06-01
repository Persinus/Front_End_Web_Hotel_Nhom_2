import { ref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {
  __name: "Payment",
  __ssrInlineRender: true,
  setup(__props) {
    const order = ref({
      room: {
        name: "Suite Ocean View",
        price: 18e5
      },
      checkIn: "2025-04-20",
      checkOut: "2025-04-23",
      services: ["\u0102n s\xE1ng", "Spa th\u01B0 gi\xE3n"]
    });
    const method = ref("prepay");
    const gateway = ref("");
    const nights = computed(() => {
      const inDate = new Date(order.value.checkIn);
      const outDate = new Date(order.value.checkOut);
      const diff = (outDate - inDate) / (1e3 * 3600 * 24);
      return Math.max(1, diff);
    });
    const baseTotal = computed(() => {
      return order.value.room.price * nights.value;
    });
    const serviceFee = computed(() => {
      return order.value.services.length * 1e5;
    });
    const taxFee = computed(() => {
      return Math.round((baseTotal.value + serviceFee.value) * 0.1);
    });
    const total = computed(() => {
      return baseTotal.value + serviceFee.value + taxFee.value;
    });
    const status = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment-page" }, _attrs))} data-v-de9b62dd><h2 data-v-de9b62dd><i class="fa-solid fa-pen-nib" data-v-de9b62dd></i> X\xE1c nh\u1EADn \u0111\u01A1n h\xE0ng &amp; Thanh to\xE1n</h2><section class="order-summary" data-v-de9b62dd><h3 data-v-de9b62dd><i class="fa-regular fa-bookmark" data-v-de9b62dd></i> Th\xF4ng tin \u0111\u01A1n h\xE0ng</h3><p data-v-de9b62dd><strong data-v-de9b62dd>Ph\xF2ng:</strong> ${ssrInterpolate(order.value.room.name)}</p><p data-v-de9b62dd><strong data-v-de9b62dd>Ng\xE0y nh\u1EADn:</strong> ${ssrInterpolate(order.value.checkIn)}</p><p data-v-de9b62dd><strong data-v-de9b62dd>Ng\xE0y tr\u1EA3:</strong> ${ssrInterpolate(order.value.checkOut)}</p><p data-v-de9b62dd><strong data-v-de9b62dd>S\u1ED1 \u0111\xEAm:</strong> ${ssrInterpolate(nights.value)} \u0111\xEAm</p><ul data-v-de9b62dd><li data-v-de9b62dd><i class="fa-solid fa-check" data-v-de9b62dd></i> Gi\xE1 ph\xF2ng m\u1ED7i \u0111\xEAm: ${ssrInterpolate(order.value.room.price.toLocaleString())} VND</li>`);
      if (order.value.services.length) {
        _push(`<li data-v-de9b62dd><i class="fa-solid fa-check" data-v-de9b62dd></i> D\u1ECBch v\u1EE5 k\xE8m theo: <ul data-v-de9b62dd><!--[-->`);
        ssrRenderList(order.value.services, (svc) => {
          _push(`<li data-v-de9b62dd>${ssrInterpolate(svc)}</li>`);
        });
        _push(`<!--]--></ul></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul><p data-v-de9b62dd><i class="fa-solid fa-coins" data-v-de9b62dd></i> Thu\u1EBF &amp; ph\xED (10%): ${ssrInterpolate(taxFee.value.toLocaleString())} VND</p><p class="total" data-v-de9b62dd><i class="fa-solid fa-arrow-right" data-v-de9b62dd></i> <strong data-v-de9b62dd>T\u1ED5ng c\u1ED9ng:</strong> ${ssrInterpolate(total.value.toLocaleString())} VND</p></section><section class="payment-methods" data-v-de9b62dd><h3 data-v-de9b62dd><i class="fa-solid fa-money-bill" data-v-de9b62dd></i> Ch\u1ECDn ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n</h3><div class="method-options" data-v-de9b62dd><button class="${ssrRenderClass({ active: method.value === "prepay" })}" data-v-de9b62dd>Tr\u1EA3 tr\u01B0\u1EDBc</button><button class="${ssrRenderClass({ active: method.value === "postpay" })}" data-v-de9b62dd>Tr\u1EA3 sau</button></div>`);
      if (method.value === "prepay") {
        _push(`<div class="gateway-options" data-v-de9b62dd><label data-v-de9b62dd><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "visa")) ? " checked" : ""} value="visa" data-v-de9b62dd> <i class="fa-solid fa-credit-card" data-v-de9b62dd></i> Th\u1EBB Visa/Mastercard</label><label data-v-de9b62dd><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "momo")) ? " checked" : ""} value="momo" data-v-de9b62dd> \u{1F4F1} MoMo</label><label data-v-de9b62dd><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "paypal")) ? " checked" : ""} value="paypal" data-v-de9b62dd> <i class="fa-solid fa-wallet" data-v-de9b62dd></i> PayPal</label><label data-v-de9b62dd><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(gateway.value, "bank")) ? " checked" : ""} value="bank" data-v-de9b62dd> <i class="fa-solid fa-landmark" data-v-de9b62dd></i> Chuy\u1EC3n kho\u1EA3n ng\xE2n h\xE0ng</label></div>`);
      } else {
        _push(`<!---->`);
      }
      if (method.value === "postpay") {
        _push(`<div class="note" data-v-de9b62dd><i class="fa-solid fa-comments-dollar" data-v-de9b62dd></i> B\u1EA1n s\u1EBD thanh to\xE1n khi nh\u1EADn ph\xF2ng t\u1EA1i kh\xE1ch s\u1EA1n. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><section class="confirm" data-v-de9b62dd><button class="btn-primary" data-v-de9b62dd>X\xE1c nh\u1EADn thanh to\xE1n</button></section>`);
      if (status.value === "success") {
        _push(`<div class="result success-msg" data-v-de9b62dd> \u2705 Thanh to\xE1n th\xE0nh c\xF4ng! H\xF3a \u0111\u01A1n \u0111\xE3 g\u1EEDi qua email. </div>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value === "error") {
        _push(`<div class="result error-msg" data-v-de9b62dd> \u274C Thanh to\xE1n th\u1EA5t b\u1EA1i. Vui l\xF2ng th\u1EED l\u1EA1i ho\u1EB7c ch\u1ECDn ph\u01B0\u01A1ng th\u1EE9c kh\xE1c. </div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Payment = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de9b62dd"]]);

export { Payment as default };
//# sourceMappingURL=Payment-qd7nVUXR.mjs.map
