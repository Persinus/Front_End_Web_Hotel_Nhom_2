import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCookie } from '#app'
import { axiosBase, setAuthToken } from '~/utils/axiosBase'

// Hàm parseJwt để giải mã payload trong JWT (lấy userId và vai trò)
function parseJwt(token) {
  try {
    return JSON.parse(atob(token.split('.')[1])) // Giải mã phần giữa của token
  } catch (e) {
    return {} // Nếu lỗi, trả về object rỗng
  }
}

// Khởi tạo store Pinia tên là 'phanQuyen'
export const usePhanQuyenStore = defineStore('phanQuyen', () => {
  // Biến lưu trữ thông tin người dùng
  const user = ref(null)
  const role = ref(null)        // Vai trò (quyền) người dùng
  const userId = ref(null)      // ID người dùng

  // Cookie dùng để lưu token và thông tin khi reload lại trang
  const tokenCookie = useCookie('token')
  const roleCookie = useCookie('role')
  const userIdCookie = useCookie('userId')

  // Hàm đăng nhập: gọi API và lưu token, role, userId vào cookie
  async function login(username, password) {
    try {
      const res = await axiosBase.post('/TatCaTruyCap/dangnhap', {
        tenTaiKhoan: username,
        matKhau: password,
      })

      // Nếu có token trả về thì xử lý
      if (res.data && res.data.token) {
        setAuthToken(res.data.token)          // Thiết lập token cho axios
        tokenCookie.value = res.data.token    // Lưu token vào cookie

        const payload = parseJwt(res.data.token) // Giải mã token
        if (payload) {
          userId.value = payload.sub              // Lưu userId vào biến và cookie
          role.value = payload.Vaitro             // Lưu role vào biến và cookie
          userIdCookie.value = payload.sub
          roleCookie.value = payload.Vaitro
        }

        // Log ra console để kiểm tra
        console.log('Token:', res.data.token)
        console.log('Vai trò:', role.value)
        return true // Đăng nhập thành công
      }

      return false // Không có token
    } catch (e) {
      return false // Có lỗi xảy ra
    }
  }

  // Hàm đăng xuất: xóa token và các thông tin khỏi biến và cookie
  function logout() {
    setAuthToken(null)       // Xóa token khỏi axios
    user.value = null
    role.value = null
    userId.value = null
    tokenCookie.value = null
    roleCookie.value = null
    userIdCookie.value = null
  }

  // Kiểm tra đã đăng nhập chưa (dựa trên token trong cookie)
  function isLoggedIn() {
    return !!tokenCookie.value
  }

  // Kiểm tra người dùng có vai trò cụ thể không (ví dụ: admin)
  function hasRole(requiredRole) {
    return role.value === requiredRole
  }

  // Khi tải lại trang, nếu có token thì gán lại role và userId từ cookie
  if (tokenCookie.value) {
    setAuthToken(tokenCookie.value)
    role.value = roleCookie.value
    userId.value = userIdCookie.value
  }

  // Trả về các biến và hàm để sử dụng bên ngoài component
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