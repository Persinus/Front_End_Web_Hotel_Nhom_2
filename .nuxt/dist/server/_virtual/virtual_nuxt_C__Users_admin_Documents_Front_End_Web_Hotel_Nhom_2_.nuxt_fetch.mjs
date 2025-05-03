import { $fetch } from "ofetch";
import { baseURL } from "#internal/nuxt/paths";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
//# sourceMappingURL=virtual_nuxt_C__Users_admin_Documents_Front_End_Web_Hotel_Nhom_2_.nuxt_fetch.mjs.map
