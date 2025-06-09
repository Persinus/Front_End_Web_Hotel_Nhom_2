import { ref, computed, defineComponent, resolveComponent, mergeProps, createVNode, resolveDynamicComponent, unref, withCtx, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderVNode, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { VaSwitch, VaInput, VaFileUpload, useColors } from 'vuestic-ui';
import { _ as _sfc_main$3$1 } from './server.mjs';
import { SfButton } from '@storefront-ui/vue';
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
import 'qrcode.vue';
import 'pinia';

const _sfc_main$l = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  const _component_VaAlert = resolveComponent("VaAlert");
  _push(ssrRenderComponent(_component_VaAlert, mergeProps({ description: "Hello World! I'm an alert with an important message! I use Primary blue color by default but you can choose another one :)" }, _attrs), null, _parent));
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Alert.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Alert = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$k = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  const _component_VaButton = resolveComponent("VaButton");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VaButton, {
    color: "info",
    gradient: "",
    class: "mr-6 mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Info `);
      } else {
        return [
          createTextVNode(" Info ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_VaButton, {
    color: "danger",
    gradient: "",
    class: "mr-6 mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Danger `);
      } else {
        return [
          createTextVNode(" Danger ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_VaButton, {
    color: "warning",
    gradient: "",
    class: "mr-6 mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Warning `);
      } else {
        return [
          createTextVNode(" Warning ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Button.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$j = {
  data() {
    return {
      value: 0,
      items: [
        "https://picsum.photos/1500",
        "https://picsum.photos/1501",
        "https://picsum.photos/1502",
        "https://picsum.photos/1503",
        "https://picsum.photos/1504"
      ]
    };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaCarousel = resolveComponent("VaCarousel");
  _push(ssrRenderComponent(_component_VaCarousel, mergeProps({
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    items: $data.items
  }, _attrs), null, _parent));
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Carousel.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$i = defineComponent({
  data() {
    const items = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info"
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz"
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info"
      }
    ];
    return {
      items
    };
  }
});
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaDataTable = resolveComponent("VaDataTable");
  _push(ssrRenderComponent(_component_VaDataTable, mergeProps({ items: _ctx.items }, _attrs), null, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/DataTable.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const DataTable = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$h = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_VaIcon = resolveComponent("VaIcon");
  _push(`<!--[--><p> Material Design Icons<br>`);
  _push(ssrRenderComponent(_component_VaIcon, { class: "material-icons" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` book `);
      } else {
        return [
          createTextVNode(" book ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_VaIcon, { name: "book" }, null, _parent));
  _push(`</p><p> Font Awesome 5<br>`);
  _push(ssrRenderComponent(_component_VaIcon, { class: "fas fa-book" }, null, _parent));
  _push(ssrRenderComponent(_component_VaIcon, { name: "fas-book" }, null, _parent));
  _push(`</p><p> Ionic<br>`);
  _push(ssrRenderComponent(_component_VaIcon, {
    name: "ion-book-outline",
    tag: "ion-icon"
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaIcon, { name: "ion-book-outline" }, null, _parent));
  _push(`</p><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Icon.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$g = {
  __name: "Modal",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VaButton = resolveComponent("VaButton");
      const _component_VaModal = resolveComponent("VaModal");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VaButton, {
        onClick: ($event) => showModal.value = !showModal.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Show modal `);
          } else {
            return [
              createTextVNode(" Show modal ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VaModal, {
        modelValue: showModal.value,
        "onUpdate:modelValue": ($event) => showModal.value = $event,
        "ok-text": "Apply"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="va-h3"${_scopeId}> Title </h3><p${_scopeId}> Classic modal overlay which represents a dialog box or other interactive component, such as a dismissible alert, sub-window, etc. </p>`);
          } else {
            return [
              createVNode("h3", { class: "va-h3" }, " Title "),
              createVNode("p", null, " Classic modal overlay which represents a dialog box or other interactive component, such as a dismissible alert, sub-window, etc. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Modal.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = defineComponent({
  data() {
    return {
      users: [
        {
          id: 1,
          fullName: "Ashley Mcdaniel",
          email: "ashleymcdaniel@nebulean.com",
          country: "Cayman Islands",
          status: "warning"
        },
        {
          id: 2,
          fullName: "Todd Sellers",
          email: "sellerstodd@nebulean.com",
          country: "Togo",
          status: "info"
        },
        {
          id: 3,
          fullName: "Sherman Knowles",
          email: "shermanknowles@nebulean.com",
          country: "Central African Republic",
          status: "warning"
        },
        {
          id: 4,
          fullName: "Vasquez Lawson",
          email: "vasquezlawson@nebulean.com",
          country: "Bouvet Island",
          status: "info"
        }
      ]
    };
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaBadge = resolveComponent("VaBadge");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "va-table-responsive" }, _attrs))}><table class="va-table va-table--clickable"><thead><tr><th>Name</th><th>Email</th><th>Country</th><th>Status</th></tr></thead><tbody><!--[-->`);
  ssrRenderList(_ctx.users, (user) => {
    _push(`<tr><td>${ssrInterpolate(user.fullName)}</td><td>${ssrInterpolate(user.email)}</td><td>${ssrInterpolate(user.country)}</td><td>`);
    _push(ssrRenderComponent(_component_VaBadge, {
      text: user.status,
      color: user.status
    }, null, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Table_Clickable.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const TableClickable = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$e = {
  data() {
    return {
      value: true,
      label: "Label",
      longLabel: "This label is pretty long, but still perfectly fits the layout...",
      leftLabel: "Left label"
    };
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaCheckbox = resolveComponent("VaCheckbox");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_VaCheckbox, {
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    class: "mb-6",
    label: $data.label
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaCheckbox, {
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    class: "mb-6",
    label: $data.longLabel
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaCheckbox, {
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    label: $data.leftLabel,
    "left-label": ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Label.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Label = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$d = {
  data() {
    return {
      value: new Date(2e3, 0, 1)
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaDateInput = resolveComponent("VaDateInput");
  _push(ssrRenderComponent(_component_VaDateInput, mergeProps({
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event
  }, _attrs), null, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Date_Input.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Date_Input = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$c = {
  components: { VaFileUpload, VaInput, VaSwitch },
  data: () => ({
    isGalleryViewEnabled: false,
    undoDuration: 5e3,
    deletedFileMessage: "File exterminated",
    undoButtonText: "Cancel",
    basic: [{ name: "example 1.png", url: "https://picsum.photos/100" }]
  }),
  computed: {
    galleryType() {
      return this.isGalleryViewEnabled ? "gallery" : "list";
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaSwitch = resolveComponent("VaSwitch");
  const _component_VaInput = resolveComponent("VaInput");
  const _component_VaFileUpload = resolveComponent("VaFileUpload");
  _push(`<!--[--><div class="w-80">`);
  _push(ssrRenderComponent(_component_VaSwitch, {
    modelValue: _ctx.isGalleryViewEnabled,
    "onUpdate:modelValue": ($event) => _ctx.isGalleryViewEnabled = $event,
    label: "Enable gallery view",
    class: "mb-6"
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaInput, {
    modelValue: _ctx.undoDuration,
    "onUpdate:modelValue": ($event) => _ctx.undoDuration = $event,
    modelModifiers: { number: true },
    label: "Undo duration",
    class: "mb-6"
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaInput, {
    modelValue: _ctx.deletedFileMessage,
    "onUpdate:modelValue": ($event) => _ctx.deletedFileMessage = $event,
    label: "Cancel button text",
    class: "mb-6"
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaInput, {
    modelValue: _ctx.undoButtonText,
    "onUpdate:modelValue": ($event) => _ctx.undoButtonText = $event,
    label: "Deleted file message",
    class: "mb-6"
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_VaFileUpload, {
    modelValue: _ctx.basic,
    "onUpdate:modelValue": ($event) => _ctx.basic = $event,
    undo: "",
    type: $options.galleryType,
    "undo-duration": _ctx.undoDuration,
    "undo-button-text": _ctx.undoButtonText,
    "deleted-file-message": _ctx.deletedFileMessage
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/FileUpload.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const FileUpload = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$b = {
  data() {
    return {
      selectedOption: "One"
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaRadio = resolveComponent("VaRadio");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VaRadio, {
    modelValue: $data.selectedOption,
    "onUpdate:modelValue": ($event) => $data.selectedOption = $event,
    option: "One",
    name: "radio-group"
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaRadio, {
    modelValue: $data.selectedOption,
    "onUpdate:modelValue": ($event) => $data.selectedOption = $event,
    option: "Two",
    name: "radio-group"
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaRadio, {
    modelValue: $data.selectedOption,
    "onUpdate:modelValue": ($event) => $data.selectedOption = $event,
    option: "Three",
    name: "radio-group"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Radio.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Radio = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$a = {
  data() {
    return {
      value: 3
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaRating = resolveComponent("VaRating");
  _push(ssrRenderComponent(_component_VaRating, mergeProps({
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    "text-color": "danger",
    texts: ["Bad", "Quite bad", "Normal", "Not bad", "Good"]
  }, _attrs), null, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Rating.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Rating = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {
  data() {
    return {
      value: "",
      options: [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaSelect = resolveComponent("VaSelect");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-xs" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_VaSelect, {
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    options: $data.options,
    placeholder: "Select an option"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Select.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Select = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Stepped",
  __ssrInlineRender: true,
  setup(__props) {
    const step = ref(0);
    const steps = [
      { label: "Choose your product" },
      { label: "Checkout" },
      { label: "Review order" },
      { label: "Confirm and pay" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VaStepper = resolveComponent("VaStepper");
      _push(ssrRenderComponent(_component_VaStepper, mergeProps({
        modelValue: step.value,
        "onUpdate:modelValue": ($event) => step.value = $event,
        steps
      }, _attrs), {
        "step-content-0": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}>Select a category</li><li${_scopeId}>Browse products</li><li${_scopeId}>Add to cart</li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, "Select a category"),
                createVNode("li", null, "Browse products"),
                createVNode("li", null, "Add to cart")
              ])
            ];
          }
        }),
        "step-content-1": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}>Fill out shipping information</li><li${_scopeId}>Choose payment method</li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, "Fill out shipping information"),
                createVNode("li", null, "Choose payment method")
              ])
            ];
          }
        }),
        "step-content-2": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}>View order summary</li><li${_scopeId}>Edit shipping information</li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, "View order summary"),
                createVNode("li", null, "Edit shipping information")
              ])
            ];
          }
        }),
        "step-content-3": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul${_scopeId}><li${_scopeId}>Review order details</li><li${_scopeId}>Complete payment</li></ul>`);
          } else {
            return [
              createVNode("ul", null, [
                createVNode("li", null, "Review order details"),
                createVNode("li", null, "Complete payment")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Stepped.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  data() {
    return {
      value: 3
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaPagination = resolveComponent("VaPagination");
  _push(ssrRenderComponent(_component_VaPagination, mergeProps({
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    pages: 15,
    "visible-pages": 4,
    class: "justify-center sm:justify-start"
  }, _attrs), null, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Pagination.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {
  data() {
    return {
      value: 10
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaCounter = resolveComponent("VaCounter");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-8 flex-wrap" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_VaCounter, {
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    "increase-icon": "add_circle_outline",
    "decrease-icon": "remove_circle_outline",
    color: "#6938D1"
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaCounter, {
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    outline: "",
    "increase-icon": "arrow_upward",
    "decrease-icon": "arrow_downward",
    color: "#0FB58D"
  }, null, _parent));
  _push(ssrRenderComponent(_component_VaCounter, {
    modelValue: $data.value,
    "onUpdate:modelValue": ($event) => $data.value = $event,
    outline: "",
    preset: "secondary",
    margins: "0",
    color: "#262824",
    buttons: ""
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Counter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Counter = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const showSidebar = ref(false);
    const page = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VaLayout = resolveComponent("VaLayout");
      const _component_VaNavbar = resolveComponent("VaNavbar");
      const _component_VaButton = resolveComponent("VaButton");
      const _component_VaNavbarItem = resolveComponent("VaNavbarItem");
      const _component_VaSidebar = resolveComponent("VaSidebar");
      const _component_VaSidebarItem = resolveComponent("VaSidebarItem");
      const _component_VaSidebarItemContent = resolveComponent("VaSidebarItemContent");
      const _component_VaIcon = resolveComponent("VaIcon");
      const _component_VaSidebarItemTitle = resolveComponent("VaSidebarItemTitle");
      _push(ssrRenderComponent(_component_VaLayout, mergeProps({ style: { "height": "500px" } }, _attrs), {
        top: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VaNavbar, {
              color: "primary",
              class: "py-2"
            }, {
              left: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaButton, {
                    icon: showSidebar.value ? "menu_open" : "menu",
                    onClick: ($event) => showSidebar.value = !showSidebar.value
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaButton, {
                      icon: showSidebar.value ? "menu_open" : "menu",
                      onClick: ($event) => showSidebar.value = !showSidebar.value
                    }, null, 8, ["icon", "onClick"])
                  ];
                }
              }),
              center: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaNavbarItem, { class: "font-bold text-lg" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` LOGO `);
                      } else {
                        return [
                          createTextVNode(" LOGO ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaNavbarItem, { class: "font-bold text-lg" }, {
                      default: withCtx(() => [
                        createTextVNode(" LOGO ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VaNavbar, {
                color: "primary",
                class: "py-2"
              }, {
                left: withCtx(() => [
                  createVNode(_component_VaButton, {
                    icon: showSidebar.value ? "menu_open" : "menu",
                    onClick: ($event) => showSidebar.value = !showSidebar.value
                  }, null, 8, ["icon", "onClick"])
                ]),
                center: withCtx(() => [
                  createVNode(_component_VaNavbarItem, { class: "font-bold text-lg" }, {
                    default: withCtx(() => [
                      createTextVNode(" LOGO ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VaSidebar, {
              modelValue: showSidebar.value,
              "onUpdate:modelValue": ($event) => showSidebar.value = $event,
              class: "py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaSidebarItem, {
                    active: page.value === 1,
                    onClick: ($event) => page.value = 1
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VaSidebarItemContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VaIcon, { name: "home" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VaSidebarItemTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Home `);
                                  } else {
                                    return [
                                      createTextVNode(" Home ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VaIcon, { name: "home" }),
                                createVNode(_component_VaSidebarItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" Home ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VaSidebarItemContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_VaIcon, { name: "home" }),
                              createVNode(_component_VaSidebarItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" Home ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_VaSidebarItem, {
                    active: page.value === 2,
                    onClick: ($event) => page.value = 2
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_VaSidebarItemContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_VaIcon, { name: "phone" }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_VaSidebarItemTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` About `);
                                  } else {
                                    return [
                                      createTextVNode(" About ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_VaIcon, { name: "phone" }),
                                createVNode(_component_VaSidebarItemTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" About ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_VaSidebarItemContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_VaIcon, { name: "phone" }),
                              createVNode(_component_VaSidebarItemTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(" About ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaSidebarItem, {
                      active: page.value === 1,
                      onClick: ($event) => page.value = 1
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VaSidebarItemContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_VaIcon, { name: "home" }),
                            createVNode(_component_VaSidebarItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" Home ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["active", "onClick"]),
                    createVNode(_component_VaSidebarItem, {
                      active: page.value === 2,
                      onClick: ($event) => page.value = 2
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VaSidebarItemContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_VaIcon, { name: "phone" }),
                            createVNode(_component_VaSidebarItemTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(" About ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["active", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VaSidebar, {
                modelValue: showSidebar.value,
                "onUpdate:modelValue": ($event) => showSidebar.value = $event,
                class: "py-4"
              }, {
                default: withCtx(() => [
                  createVNode(_component_VaSidebarItem, {
                    active: page.value === 1,
                    onClick: ($event) => page.value = 1
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VaSidebarItemContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_VaIcon, { name: "home" }),
                          createVNode(_component_VaSidebarItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" Home ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["active", "onClick"]),
                  createVNode(_component_VaSidebarItem, {
                    active: page.value === 2,
                    onClick: ($event) => page.value = 2
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_VaSidebarItemContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_VaIcon, { name: "phone" }),
                          createVNode(_component_VaSidebarItemTitle, null, {
                            default: withCtx(() => [
                              createTextVNode(" About ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["active", "onClick"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (page.value === 1) {
              _push2(`<main class="p-4"${_scopeId}><h3 class="va-h3"${_scopeId}> Page 1 </h3><p${_scopeId}>Page content must be wrapped in main tag. You must do it manually. Here you can place any blocks you need in your application.</p><p${_scopeId}>For example, you can place here your router view, add sidebar with navigation in #left slot.</p><p${_scopeId}>If you&#39;re using VaSidebar for page navigation don&#39;t forget to wrap it in nav tag.</p></main>`);
            } else if (page.value === 2) {
              _push2(`<main class="p-4"${_scopeId}><h3 class="va-h3"${_scopeId}> Page 2 </h3><p${_scopeId}>Page content must be wrapped in main tag. You must do it manually. Here you can place any blocks you need in your application.</p><p${_scopeId}>For example, you can place here your router view, add sidebar with navigation in #left slot.</p><p${_scopeId}>If you&#39;re using VaSidebar for page navigation don&#39;t forget to wrap it in nav tag.</p></main>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              page.value === 1 ? (openBlock(), createBlock("main", {
                key: 0,
                class: "p-4"
              }, [
                createVNode("h3", { class: "va-h3" }, " Page 1 "),
                createVNode("p", null, "Page content must be wrapped in main tag. You must do it manually. Here you can place any blocks you need in your application."),
                createVNode("p", null, "For example, you can place here your router view, add sidebar with navigation in #left slot."),
                createVNode("p", null, "If you're using VaSidebar for page navigation don't forget to wrap it in nav tag.")
              ])) : page.value === 2 ? (openBlock(), createBlock("main", {
                key: 1,
                class: "p-4"
              }, [
                createVNode("h3", { class: "va-h3" }, " Page 2 "),
                createVNode("p", null, "Page content must be wrapped in main tag. You must do it manually. Here you can place any blocks you need in your application."),
                createVNode("p", null, "For example, you can place here your router view, add sidebar with navigation in #left slot."),
                createVNode("p", null, "If you're using VaSidebar for page navigation don't forget to wrap it in nav tag.")
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Layout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  data() {
    return {
      contacts: [
        {
          name: "Audrey Clay",
          address: "644 Vermont Court, Freelandville, Kentucky, 2619",
          img: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
          name: "Aguirre Klein",
          address: "626 Carroll Street, Roulette, Ohio, 1477",
          img: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          name: "Tucker Kaufman",
          address: "887 Winthrop Street, Tryon, Florida, 3912",
          img: "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
          name: "Herbert Keller",
          address: "286 NW. Shore St.Longwood, FL 32779",
          img: "https://randomuser.me/api/portraits/men/5.jpg"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_VaList = resolveComponent("VaList");
  const _component_VaListLabel = resolveComponent("VaListLabel");
  const _component_VaListItem = resolveComponent("VaListItem");
  const _component_VaListItemSection = resolveComponent("VaListItemSection");
  const _component_VaAvatar = resolveComponent("VaAvatar");
  const _component_VaListItemLabel = resolveComponent("VaListItemLabel");
  const _component_VaIcon = resolveComponent("VaIcon");
  _push(ssrRenderComponent(_component_VaList, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_VaListLabel, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Contacts `);
            } else {
              return [
                createTextVNode(" Contacts ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<!--[-->`);
        ssrRenderList($data.contacts, (contact, index) => {
          _push2(ssrRenderComponent(_component_VaListItem, {
            key: index,
            class: "list__item"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_VaListItemSection, { avatar: "" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_VaAvatar, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<img${ssrRenderAttr("src", contact.img)}${ssrRenderAttr("alt", contact.name)}${_scopeId4}>`);
                          } else {
                            return [
                              createVNode("img", {
                                src: contact.img,
                                alt: contact.name
                              }, null, 8, ["src", "alt"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_VaAvatar, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: contact.img,
                              alt: contact.name
                            }, null, 8, ["src", "alt"])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_VaListItemSection, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_VaListItemLabel, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(contact.name)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(contact.name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(ssrRenderComponent(_component_VaListItemLabel, { caption: "" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`${ssrInterpolate(contact.address)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(contact.address), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_VaListItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(contact.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_VaListItemLabel, { caption: "" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(contact.address), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_VaListItemSection, { icon: "" }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_VaIcon, {
                        name: "remove_red_eye",
                        color: "background-element"
                      }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_VaIcon, {
                          name: "remove_red_eye",
                          color: "background-element"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_VaListItemSection, { avatar: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_VaAvatar, null, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: contact.img,
                            alt: contact.name
                          }, null, 8, ["src", "alt"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_VaListItemSection, null, {
                    default: withCtx(() => [
                      createVNode(_component_VaListItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(contact.name), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_VaListItemLabel, { caption: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(contact.address), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_VaListItemSection, { icon: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_VaIcon, {
                        name: "remove_red_eye",
                        color: "background-element"
                      })
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode(_component_VaListLabel, null, {
            default: withCtx(() => [
              createTextVNode(" Contacts ")
            ]),
            _: 1
          }),
          (openBlock(true), createBlock(Fragment, null, renderList($data.contacts, (contact, index) => {
            return openBlock(), createBlock(_component_VaListItem, {
              key: index,
              class: "list__item"
            }, {
              default: withCtx(() => [
                createVNode(_component_VaListItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_VaAvatar, null, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: contact.img,
                          alt: contact.name
                        }, null, 8, ["src", "alt"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_VaListItemSection, null, {
                  default: withCtx(() => [
                    createVNode(_component_VaListItemLabel, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(contact.name), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_VaListItemLabel, { caption: "" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(contact.address), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_VaListItemSection, { icon: "" }, {
                  default: withCtx(() => [
                    createVNode(_component_VaIcon, {
                      name: "remove_red_eye",
                      color: "background-element"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/List.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const { currentPresetName } = useColors();
    const darkNavbarColors = computed(() => {
      if (currentPresetName.value === "light") {
        return {
          color: "#111111",
          textColor: "#BAFFC5"
        };
      } else {
        return {
          color: "#FBCAF6",
          textColor: "#481269"
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VaNavbar = resolveComponent("VaNavbar");
      const _component_VaNavbarItem = resolveComponent("VaNavbarItem");
      const _component_VaIcon = resolveComponent("VaIcon");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_VaNavbar, {
        color: "primary",
        class: "mb-3"
      }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "logo" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` LOGO `);
                } else {
                  return [
                    createTextVNode(" LOGO ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VaNavbarItem, { class: "logo" }, {
                default: withCtx(() => [
                  createTextVNode(" LOGO ")
                ]),
                _: 1
              })
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dashboard `);
                } else {
                  return [
                    createTextVNode(" Dashboard ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reports `);
                } else {
                  return [
                    createTextVNode(" Reports ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Users `);
                } else {
                  return [
                    createTextVNode(" Users ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaIcon, { name: "mdi-magnify" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaIcon, { name: "mdi-magnify" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaIcon, { name: "mdi-account-circle-outline" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaIcon, { name: "mdi-account-circle-outline" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Dashboard ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Reports ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Users ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VaIcon, { name: "mdi-magnify" })
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VaIcon, { name: "mdi-account-circle-outline" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VaNavbar, {
        color: "warning",
        class: "mb-3"
      }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "logo" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` LOGO `);
                } else {
                  return [
                    createTextVNode(" LOGO ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VaNavbarItem, { class: "logo" }, {
                default: withCtx(() => [
                  createTextVNode(" LOGO ")
                ]),
                _: 1
              })
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dashboard `);
                } else {
                  return [
                    createTextVNode(" Dashboard ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reports `);
                } else {
                  return [
                    createTextVNode(" Reports ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Users `);
                } else {
                  return [
                    createTextVNode(" Users ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaIcon, { name: "mdi-magnify" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaIcon, { name: "mdi-magnify" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaIcon, { name: "mdi-account-circle-outline" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaIcon, { name: "mdi-account-circle-outline" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Dashboard ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Reports ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Users ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VaIcon, { name: "mdi-magnify" })
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VaIcon, { name: "mdi-account-circle-outline" })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_VaNavbar, mergeProps(darkNavbarColors.value, { class: "mb-3" }), {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "logo" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` LOGO `);
                } else {
                  return [
                    createTextVNode(" LOGO ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VaNavbarItem, { class: "logo" }, {
                default: withCtx(() => [
                  createTextVNode(" LOGO ")
                ]),
                _: 1
              })
            ];
          }
        }),
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Dashboard `);
                } else {
                  return [
                    createTextVNode(" Dashboard ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reports `);
                } else {
                  return [
                    createTextVNode(" Reports ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, { class: "hidden sm:block" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Users `);
                } else {
                  return [
                    createTextVNode(" Users ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaIcon, {
                    color: darkNavbarColors.value.textColor,
                    name: "mdi-magnify"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaIcon, {
                      color: darkNavbarColors.value.textColor,
                      name: "mdi-magnify"
                    }, null, 8, ["color"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_VaNavbarItem, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VaIcon, {
                    color: darkNavbarColors.value.textColor,
                    name: "mdi-account-circle-outline"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VaIcon, {
                      color: darkNavbarColors.value.textColor,
                      name: "mdi-account-circle-outline"
                    }, null, 8, ["color"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Dashboard ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Reports ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, { class: "hidden sm:block" }, {
                default: withCtx(() => [
                  createTextVNode(" Users ")
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VaIcon, {
                    color: darkNavbarColors.value.textColor,
                    name: "mdi-magnify"
                  }, null, 8, ["color"])
                ]),
                _: 1
              }),
              createVNode(_component_VaNavbarItem, null, {
                default: withCtx(() => [
                  createVNode(_component_VaIcon, {
                    color: darkNavbarColors.value.textColor,
                    name: "mdi-account-circle-outline"
                  }, null, 8, ["color"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/NavBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c3f0d74e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  setup(__props) {
    const cardDetails = [
      {
        image: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/card-3.png",
        title: "Sip Sustainably: The Rise of Boxed Water",
        description: "Boxed water is a sustainable alternative to traditional plastic bottles, made from renewable resources.",
        button: "Read more"
      },
      {
        image: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/card-2.png",
        title: "Ride the Future: Exploring the Benefits of e-Bikes",
        description: "Eco-friendly, efficient, and fun modes of transportation that provide a range of benefits for riders and the environment.",
        button: "Read more"
      },
      {
        image: "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/card-1.png",
        title: "Unleash the Ultimate Listening Experience",
        description: "Audiophile headphones offer unmatched sound quality and clarity, making them the go-to choice for music enthusiasts.",
        button: "Read more"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap" }, _attrs))}><!--[-->`);
      ssrRenderList(cardDetails, ({ image, title, description, button }, index) => {
        _push(`<div class="flex flex-col min-w-[325px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-md hover:shadow-xl"><a class="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md" href="#"></a><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", title)} class="object-cover h-auto rounded-t-md aspect-video"><div class="flex flex-col items-start p-4 grow"><p class="font-medium typography-text-base">${ssrInterpolate(title)}</p><p class="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">${ssrInterpolate(description)}</p>`);
        _push(ssrRenderComponent(unref(SfButton), {
          size: "sm",
          variant: "tertiary",
          class: "relative mt-auto"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(button)}`);
            } else {
              return [
                createTextVNode(toDisplayString(button), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_VueStoreFront/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Card",
  __ssrInlineRender: true,
  setup(__props) {
    const room = {
      image: "https://i.pinimg.com/736x/5c/f2/cd/5cf2cd74c675ddbd78c0defbce34a63d.jpg",
      title: "Ph\xF2ng Deluxe View Bi\u1EC3n",
      rating: 4.2,
      booked: 500,
      desc: "2 kh\xE1ch \u2022 1 gi\u01B0\u1EDDng \u0111\xF4i l\u1EDBn \u2022 B\u1ED3n t\u1EAFm \u2022 H\u01B0\u1EDBng bi\u1EC3n",
      price: 188e4,
      // số để so sánh
      oldPrice: 235e4,
      discountPercent: 20
    };
    const allRooms = [
      { rating: 4.5, booked: 123, price: 21e5 },
      { rating: 4.8, booked: 80, price: 32e5 },
      { rating: 4.2, booked: 200, price: 15e5 },
      { rating: 4.2, booked: 500, price: 188e4 }
      // phòng hiện tại
    ];
    const maxRating = Math.max(...allRooms.map((r) => r.rating));
    const maxBooked = Math.max(...allRooms.map((r) => r.booked));
    const maxPrice = Math.max(...allRooms.map((r) => r.price));
    const minPrice = Math.min(...allRooms.map((r) => r.price));
    const isBestRating = room.rating === maxRating;
    const isMostBooked = room.booked === maxBooked;
    const isHighestPrice = room.price === maxPrice;
    const isLowestPrice = room.price === minPrice;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hotel-card" }, _attrs))} data-v-20a8a439><div class="hotel-image-wrapper" data-v-20a8a439><img class="hotel-image"${ssrRenderAttr("src", room.image)}${ssrRenderAttr("alt", room.title)} data-v-20a8a439><button class="favorite-btn" title="Y\xEAu th\xEDch" data-v-20a8a439><i class="fa fa-heart" data-v-20a8a439></i></button>`);
      {
        _push(`<div class="discount-badge" data-v-20a8a439> -${ssrInterpolate(room.discountPercent)}% </div>`);
      }
      _push(`<div class="badge-stack" data-v-20a8a439>`);
      if (isBestRating) {
        _push(`<div class="badge badge-green" title="Best rating" data-v-20a8a439> Best </div>`);
      } else {
        _push(`<!---->`);
      }
      if (isMostBooked) {
        _push(`<div class="badge badge-blue" title="Most booked" data-v-20a8a439> Hot </div>`);
      } else {
        _push(`<!---->`);
      }
      if (isHighestPrice) {
        _push(`<div class="badge badge-orange" title="Highest price" data-v-20a8a439> High </div>`);
      } else {
        _push(`<!---->`);
      }
      if (isLowestPrice) {
        _push(`<div class="badge badge-purple" title="Lowest price" data-v-20a8a439> Low </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="hotel-card-content" data-v-20a8a439><h3 class="hotel-title" data-v-20a8a439>${ssrInterpolate(room.title)}</h3><div class="hotel-rating" data-v-20a8a439><span class="star" data-v-20a8a439>\u2605</span><span data-v-20a8a439>${ssrInterpolate(room.rating)}</span><span class="hotel-booked" data-v-20a8a439>(${ssrInterpolate(room.booked)} l\u01B0\u1EE3t \u0111\u1EB7t)</span></div><p class="hotel-desc" data-v-20a8a439>${ssrInterpolate(room.desc)}</p><div class="hotel-price-group" data-v-20a8a439>`);
      {
        _push(`<span class="hotel-old-price" data-v-20a8a439>${ssrInterpolate(room.oldPrice)}</span>`);
      }
      _push(`<span class="hotel-price" data-v-20a8a439>${ssrInterpolate(room.price)}</span><span class="per-night" data-v-20a8a439>/ \u0111\xEAm</span></div><button class="book-btn" data-v-20a8a439><i class="fa fa-bed" data-v-20a8a439></i> \u0110\u1EB7t ph\xF2ng </button></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Component_Vuestic/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-20a8a439"]]);
const _sfc_main = {
  __name: "TestcomponentVuestic",
  __ssrInlineRender: true,
  setup(__props) {
    const options = [
      "Alert",
      "Button",
      "Carousel",
      "DataTable",
      "Icon",
      "Modal",
      "TableClickable",
      "Label",
      "Date_Input",
      "FileUpload",
      "Radio",
      "Rating",
      "Select",
      "Toast",
      "Stepped",
      "Pagination",
      "Layout",
      "List",
      "Toast",
      "Stepped",
      "Pagination",
      "Counter",
      "Layout",
      "Navbar",
      "Card",
      "Card1"
    ];
    const selected = ref("Alert");
    const componentsMap = {
      Alert,
      Button,
      Carousel,
      DataTable,
      Icon,
      Modal: _sfc_main$g,
      TableClickable,
      Label,
      Date_Input,
      FileUpload,
      Radio,
      Rating,
      Select,
      Toast: _sfc_main$3$1,
      Stepped: _sfc_main$8,
      Pagination,
      Counter,
      Layout: _sfc_main$5,
      List,
      Navbar,
      Card,
      Card1: _sfc_main$2
    };
    const selectedComponent = computed(() => componentsMap[selected.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_va_select = resolveComponent("va-select");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ui-demo-layout" }, _attrs))} data-v-21a2ee2a><div class="ui-list" data-v-21a2ee2a>`);
      _push(ssrRenderComponent(_component_va_select, {
        modelValue: selected.value,
        "onUpdate:modelValue": ($event) => selected.value = $event,
        options,
        label: "Ch\u1ECDn component",
        class: "mb-4"
      }, null, _parent));
      _push(`</div><div class="ui-preview" data-v-21a2ee2a>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(selectedComponent.value), null, null), _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/TestcomponentVuestic.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TestcomponentVuestic = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21a2ee2a"]]);

export { TestcomponentVuestic as default };
//# sourceMappingURL=TestcomponentVuestic-DANQLdKt.mjs.map
