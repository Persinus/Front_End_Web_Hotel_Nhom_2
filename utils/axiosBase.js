import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "https://nhom2webkhachsan.runasp.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Hàm này để set token cho mọi request
export function setAuthToken(token) {
  if (token) {
    axiosBase.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosBase.defaults.headers.common["Authorization"];
  }
}