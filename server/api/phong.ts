import axios, { AxiosError } from 'axios';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const res = await axios.get(`${config.apiBase}/PhongWithTienNghi`);
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError; // Ép kiểu error thành AxiosError
    throw createError({
      statusCode: axiosError.response?.status || 500,
      statusMessage: axiosError.message || 'Internal Server Error',
    });
  }
});