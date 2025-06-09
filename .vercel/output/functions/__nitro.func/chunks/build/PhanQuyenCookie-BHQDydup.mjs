import { defineStore } from 'pinia';
import { ref } from 'vue';
import { s as setAuthToken, b as useNuxtApp, f as axiosBase, g as useRequestEvent } from './server.mjs';
import { y as destr, z as klona, A as getRequestHeader, B as isEqual, C as setCookie, D as getCookie, E as deleteCookie } from '../_/nitro.mjs';

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2, _b;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  (_a2 = opts.filter) != null ? _a2 : opts.filter = (key) => key === name;
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : (_b = cookies[name]) != null ? _b : (_a = opts.default) == null ? void 0 : _a.call(opts));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return {};
  }
}
const usePhanQuyenStore = defineStore("phanQuyen", () => {
  const user = ref(null);
  const role = ref(null);
  const userId = ref(null);
  const tokenCookie = useCookie("token");
  const roleCookie = useCookie("role");
  const userIdCookie = useCookie("userId");
  async function login(username, password) {
    try {
      const res = await axiosBase.post("/TatCaTruyCap/dangnhap", {
        tenTaiKhoan: username,
        matKhau: password
      });
      if (res.data && res.data.token) {
        setAuthToken(res.data.token);
        tokenCookie.value = res.data.token;
        const payload = parseJwt(res.data.token);
        if (payload) {
          userId.value = payload.sub;
          role.value = payload.Vaitro;
          userIdCookie.value = payload.sub;
          roleCookie.value = payload.Vaitro;
        }
        console.log("Token:", res.data.token);
        console.log("Vai tr\xF2:", role.value);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  function logout() {
    setAuthToken(null);
    user.value = null;
    role.value = null;
    userId.value = null;
    tokenCookie.value = null;
    roleCookie.value = null;
    userIdCookie.value = null;
  }
  function isLoggedIn() {
    return !!tokenCookie.value;
  }
  function hasRole(requiredRole) {
    return role.value === requiredRole;
  }
  if (tokenCookie.value) {
    setAuthToken(tokenCookie.value);
    role.value = roleCookie.value;
    userId.value = userIdCookie.value;
  }
  return {
    user,
    role,
    userId,
    token: tokenCookie,
    login,
    logout,
    isLoggedIn,
    hasRole
  };
});

export { usePhanQuyenStore as u };
//# sourceMappingURL=PhanQuyenCookie-BHQDydup.mjs.map
