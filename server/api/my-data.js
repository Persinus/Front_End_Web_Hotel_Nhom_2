export default defineEventHandler(async (event) => {
  const cache = useStorage('cache'); // Sử dụng useStorage thay vì useNitroStorage
  const cacheKey = 'phong-rutgon-data1';

  // Kiểm tra cache
  const cachedData = await cache.getItem(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  // Nếu không có cache, gọi API thực tế
  const data = await $fetch('https://nhom2webkhachsan.runasp.net/api/tatcatruycap/phong-rutgon');

  // Lưu dữ liệu vào cache với TTL 10 phút (600 giây)
  await cache.setItem(cacheKey, data, { ttl: 600 });

  return data;
});
