// utils/axiosBase.ts
import axios from 'axios';

export const axiosBase = axios.create({
  baseURL: 'http://nhom2webkhachsan.runasp.net/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
