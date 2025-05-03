// composables/useAuth.js
import { useNuxtApp } from '#app';

export function useAuth() {
  const { $axios } = useNuxtApp();
  const user = useState('user', () => null); // Lưu thông tin người dùng
  const token = useState('token', () => null); // Lưu token

  const login = async (credentials, role) => {
    try {
      const response = await $axios.post('/api/login', { ...credentials, role });

      const userData = response.data.user;
      const userToken = response.data.jwk;

      user.value = { ...userData, role };
      token.value = userToken;

      // Lưu thông tin vào localStorage
      localStorage.setItem('auth_token', userToken || '');
      localStorage.setItem('auth_user', JSON.stringify(userData));

      return userData;
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      throw error;
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;

    // Xóa thông tin trong localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  };

  const isAuthenticated = computed(() => !!token.value);

  const initializeAuth = () => {
    const savedToken = localStorage.getItem('auth_token');
    const savedUser = localStorage.getItem('auth_user');

    if (savedToken && savedUser) {
      token.value = savedToken;
      user.value = JSON.parse(savedUser);
    }
  };

  return {
    user,
    token,
    login,
    logout,
    isAuthenticated,
    initializeAuth,
  };
}
