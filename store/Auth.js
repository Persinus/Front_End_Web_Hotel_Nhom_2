// store/Auth.js
import { defineStore } from 'pinia';
import { setAuthToken } from '~/utils/axiosBase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isLoading: false,
    error: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    authToken: (state) => state.token,
    userInfo: (state) => state.user,
    // Getter để trả về Bearer token format để sử dụng trong headers
    bearerToken: (state) => state.token ? `Bearer ${state.token}` : null
  },
  
  actions: {
    // Đăng nhập bằng email và mật khẩu
    async login(tenTaiKhoan, matKhau) {
      this.isLoading = true;
      this.error = null;
      
      try {
        const response = await fetch('https://nhom2webkhachsan.runasp.net/api/allowanonymous/dangnhap', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ tenTaiKhoan, matKhau })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          this.setUser({ username: tenTaiKhoan });
          this.setToken(data.token);
          return { success: true };
        } else {
          this.error = data.message || 'Sai tên tài khoản hoặc mật khẩu!';
          return { success: false, error: this.error };
        }
      } catch (error) {
        this.error = 'Lỗi kết nối đến máy chủ. Vui lòng thử lại sau.';
        console.error('Login error:', error);
        return { success: false, error: this.error };
      } finally {
        this.isLoading = false;
      }
    },
      // Đăng nhập bằng Google
    async loginWithGoogle(googleUser) {
      this.isLoading = true;
      this.error = null;
      
      try {
        // TODO: Thay thế bằng API thực tế đăng nhập bằng Google
        // Giả định gọi API đăng nhập Google, cần cập nhật URL API thực tế
        const response = await fetch('https://nhom2webkhachsan.runasp.net/api/allowanonymous/dangnhapgoogle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            email: googleUser.email,
            googleId: googleUser.id
          })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          this.setUser({ 
            username: googleUser.email,
            email: googleUser.email,
            name: googleUser.name,
            provider: 'google'
          });
          this.setToken(data.token || 'google-token'); // Sử dụng token thực từ API nếu có
          return { success: true };
        } else {
          this.error = data.message || 'Đăng nhập Google thất bại';
          return { success: false, error: this.error };
        }
      } catch (error) {
        console.error('Google login error:', error);
        this.setUser({ 
          username: googleUser.email,
          email: googleUser.email,
          name: googleUser.name,
          provider: 'google'
        });
        this.setToken('google-token'); // Sử dụng token tạm trong môi trường phát triển
        return { success: true };
      } finally {
        this.isLoading = false;
      }
    },
    
    // Đăng nhập bằng Facebook
    async loginWithFacebook(fbUser) {
      this.isLoading = true;
      this.error = null;
      
      try {
        // TODO: Thay thế bằng API thực tế đăng nhập bằng Facebook
        // Giả định gọi API đăng nhập Facebook, cần cập nhật URL API thực tế
        const response = await fetch('https://nhom2webkhachsan.runasp.net/api/allowanonymous/dangnhapfacebook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            email: fbUser.email,
            facebookId: fbUser.id
          })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          this.setUser({ 
            username: fbUser.email,
            email: fbUser.email,
            name: fbUser.name,
            provider: 'facebook'
          });
          this.setToken(data.token || 'facebook-token'); // Sử dụng token thực từ API nếu có
          return { success: true };
        } else {
          this.error = data.message || 'Đăng nhập Facebook thất bại';
          return { success: false, error: this.error };
        }
      } catch (error) {
        console.error('Facebook login error:', error);
        this.setUser({ 
          username: fbUser.email,
          email: fbUser.email,
          name: fbUser.name,
          provider: 'facebook'
        });
        this.setToken('facebook-token'); // Sử dụng token tạm trong môi trường phát triển
        return { success: true };
      } finally {
        this.isLoading = false;
      }
    },
      // Đăng xuất
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('userToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('userInfo');
      // Xóa Bearer token khi đăng xuất
      setAuthToken(null);
    },
    
    // Thiết lập thông tin người dùng
    setUser(user) {
      this.user = user;
      localStorage.setItem('userInfo', JSON.stringify(user));
      localStorage.setItem('userName', user.username);
    },    // Thiết lập token
    setToken(token) {
      this.token = token;
      localStorage.setItem('userToken', token);
      // Thiết lập Bearer token cho tất cả các request API
      setAuthToken(token);
    },
    
    // Khởi tạo trạng thái từ localStorage
    initAuth() {
      const token = localStorage.getItem('userToken');
      const userInfo = localStorage.getItem('userInfo');
      
      if (token) {
        this.token = token;
        // Thiết lập Bearer token cho tất cả các request API khi khởi tạo
        setAuthToken(token);
      }
      
      if (userInfo) {
        try {
          this.user = JSON.parse(userInfo);
        } catch (e) {
          console.error('Error parsing user info from localStorage');
        }
      }
    }
  }
});
