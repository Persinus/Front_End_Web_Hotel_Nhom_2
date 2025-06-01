import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCookie } from '#app'
import { axiosBase, setAuthToken } from '~/utils/axiosBase'

function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (e) {
    return {}
  }
}

export const usePhanQuyenStore = defineStore('phanQuyen', () => {
  const user = ref(null)
  const role = ref(null)
  const userId = ref(null)
  // Sử dụng cookie thay cho localStorage
  const tokenCookie = useCookie('token')
  const roleCookie = useCookie('role')
  const userIdCookie = useCookie('userId')

  // Đăng nhập: lưu user, role, token, userId vào cookie
  async function login(username, password) {
    try {
      const res = await axiosBase.post('/TatCaTruyCap/dangnhap', {
        tenTaiKhoan: username,
        matKhau: password,
      })
      if (res.data && res.data.token) {
        setAuthToken(res.data.token)
        tokenCookie.value = res.data.token
        // Giải mã token để lấy sub và vai trò
        const payload = parseJwt(res.data.token)
        if (payload) {
          userId.value = payload.sub
          role.value = payload.Vaitro
          userIdCookie.value = payload.sub
          roleCookie.value = payload.Vaitro
        }
        // In ra token và vai trò để xác nhận
        console.log('Token:', res.data.token)
        console.log('Vai trò:', role.value)
        return true
      }
      return false
    } catch (e) {
      return false
    }
  }

  function logout() {
    setAuthToken(null)
    user.value = null
    role.value = null
    userId.value = null
    tokenCookie.value = null
    roleCookie.value = null
    userIdCookie.value = null
  }

  function isLoggedIn() {
    return !!tokenCookie.value
  }

  function hasRole(requiredRole) {
    return role.value === requiredRole
  }

  // Khi load lại trang, lấy token và role từ cookie nếu có
  if (tokenCookie.value) {
    setAuthToken(tokenCookie.value)
    role.value = roleCookie.value
    userId.value = userIdCookie.value
  }

  return {
    user,
    role,
    userId,
    token: tokenCookie,
    login,
    logout,
    isLoggedIn,
    hasRole,
  }
})