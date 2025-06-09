import { d as defineEventHandler, a as useStorage } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'chokidar';
import 'anymatch';
import 'node:crypto';

const myData = defineEventHandler(async (event) => {
  const cache = useStorage("cache");
  const cacheKey = "phong-rutgon-data1";
  const cachedData = await cache.getItem(cacheKey);
  if (cachedData) {
    return cachedData;
  }
  const data = await $fetch("https://nhom2webkhachsan.runasp.net/api/tatcatruycap/phong-rutgon");
  await cache.setItem(cacheKey, data, { ttl: 600 });
  return data;
});

export { myData as default };
//# sourceMappingURL=my-data.mjs.map
