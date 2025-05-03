import { ref } from "vue";
import "C:/Users/admin/Documents/Front_End_Web_Hotel_Nhom_2/node_modules/hookable/dist/index.mjs";
function useLogin() {
  const email = ref("");
  const facebookName = ref("");
  const formEmail = ref("");
  const formPassword = ref("");
  const showPassword = ref(false);
  const images = [
    "https://i.pinimg.com/474x/a0/fb/38/a0fb38a030da2a14a39767bfd21d48d2.jpg",
    "https://i.pinimg.com/474x/d4/54/76/d45476a670996cd4ae936d99ad0b24e2.jpg",
    "https://i.pinimg.com/474x/f7/41/c8/f741c8636021870390f124e5acaa55e4.jpg"
  ];
  const currentImageIndex = ref(0);
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  const emailLogin = () => {
    if (formEmail.value === "admin@example.com" && formPassword.value === "password") {
      email.value = `Đăng nhập email: ${formEmail.value}`;
      facebookName.value = "";
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };
  const facebookLogin = () => {
    FB.login((response) => {
      if (response.status === "connected") {
        FB.api("/me", { fields: "name,email" }, (userInfo) => {
          facebookName.value = `Đăng nhập Facebook: ${userInfo.name}`;
          email.value = `Email: ${userInfo.email}`;
        });
      } else {
        facebookName.value = "Chưa đăng nhập Facebook";
      }
    }, { scope: "email" });
  };
  return {
    email,
    facebookName,
    formEmail,
    formPassword,
    images,
    currentImageIndex,
    showPassword,
    togglePassword,
    emailLogin,
    facebookLogin
  };
}
export {
  useLogin
};
//# sourceMappingURL=useLogin.mjs.map
