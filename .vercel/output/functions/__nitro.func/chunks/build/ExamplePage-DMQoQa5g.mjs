import { resolveComponent, ref, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = {
  __name: "CardSwap",
  __ssrInlineRender: true,
  props: {
    images: { type: Array, required: true },
    width: { type: Number, default: 500 },
    height: { type: Number, default: 400 },
    cardDistance: { type: Number, default: 60 },
    verticalDistance: { type: Number, default: 70 },
    delay: { type: Number, default: 5e3 }
  },
  setup(__props) {
    ref([]);
    ref([]);
    const cardTransforms = reactive([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "swap-flex" }, _attrs))} data-v-d6ae2b86><div class="swap-title" data-v-d6ae2b86><h1 data-v-d6ae2b86>Kh\xE1m ph\xE1 kh\xF4ng gian<br data-v-d6ae2b86>Kh\xE1ch s\u1EA1n \u0111\u1EB3ng c\u1EA5p</h1><p data-v-d6ae2b86>Tr\u1EA3i nghi\u1EC7m ti\u1EC7n nghi &amp; d\u1ECBch v\u1EE5 tuy\u1EC7t v\u1EDDi t\u1EA1i n\u01A1i l\u01B0u tr\xFA c\u1EE7a b\u1EA1n!</p></div><div class="card-swap-container" style="${ssrRenderStyle({
        width: `${__props.width}px`,
        height: `${__props.height}px`,
        perspective: "900px",
        position: "relative"
      })}" data-v-d6ae2b86><!--[-->`);
      ssrRenderList(__props.images, (image, index) => {
        var _a, _b;
        _push(`<div class="card" style="${ssrRenderStyle({
          width: `${__props.width}px`,
          height: `${__props.height}px`,
          position: "absolute",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: ((_a = cardTransforms[index]) == null ? void 0 : _a.transform) || "",
          zIndex: ((_b = cardTransforms[index]) == null ? void 0 : _b.zIndex) || 0
        })}" data-v-d6ae2b86><div class="card-overlay" data-v-d6ae2b86><span class="hotel-name" data-v-d6ae2b86>Hotel Luxury</span></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component/CardSwap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardSwap = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d6ae2b86"]]);
const _sfc_main = {
  components: {
    CardSwap
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CardSwap = resolveComponent("CardSwap");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CardSwap, {
    images: [
      "https://i.pinimg.com/736x/e7/5b/e9/e75be96bf71556ed0cc45f43a614a278.jpg",
      "https://i.pinimg.com/736x/3d/26/0f/3d260f8cc3108574e6cde1e990c26a31.jpg",
      "https://i.pinimg.com/736x/58/46/b8/5846b83d72c2fcd337f0c5e0cc180f23.jpg"
    ],
    width: 600,
    height: 400
  }, null, _parent));
  _push(`: </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ExamplePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ExamplePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { ExamplePage as default };
//# sourceMappingURL=ExamplePage-DMQoQa5g.mjs.map
