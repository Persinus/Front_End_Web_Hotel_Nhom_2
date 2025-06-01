import axios from 'axios';

// Tạo instance axios
export const axiosBase = axios.create({
  baseURL: 'https://nhom2webkhachsan.runasp.net/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hàm thiết lập token xác thực - gọi khi đăng nhập thành công
export const setAuthToken = (token) => {
  if (token) {
    // Thiết lập bearer token
    axiosBase.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Xóa header khi đăng xuất
    delete axiosBase.defaults.headers.common['Authorization'];
  }
};