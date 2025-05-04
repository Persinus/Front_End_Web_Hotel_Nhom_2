import axios, { AxiosError } from 'axios';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { maChiTietDichVu } = event.context.params || {}; // Lấy tham số từ URL

  try {
    // Gọi API backend với mã chi tiết dịch vụ
    const res = await axios.get(`${config.apiBase}/DichVu/${maChiTietDichVu}`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw createError({
      statusCode: axiosError.response?.status || 500,
      statusMessage: (axiosError.response?.data as { message?: string })?.message || 'Internal Server Error',
    });
  }
});