import { ref, computed } from 'vue'

export function useRegister() {
  // Thêm firstName và lastName
  const firstName = ref('')
  const lastName = ref('')
  
  // Sử dụng computed để tính toán fullName từ firstName và lastName
  const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`.trim()
  })
  
  const nationality = ref('')
  const phone = ref('')
  const birthDate = ref('')
  const idType = ref('')
  const idNumber = ref('')
  const address = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const otp = ref('')
  const generatedOtp = ref('')
  const successMessage = ref('')
  const showPassword = ref(false)

  const sendOtp = () => {
    if (!phone.value && !email.value) {
      alert('Vui lòng nhập số điện thoại hoặc email trước khi gửi OTP')
      return
    }
    generatedOtp.value = (Math.floor(Math.random() * 900000) + 100000).toString()
    alert(`Mã OTP của bạn là: ${generatedOtp.value} (demo)`)
  }

  const handleSubmit = () => {
    if (password.value !== confirmPassword.value) {
      alert('Mật khẩu không khớp')
      return
    }

    if (otp.value !== generatedOtp.value) {
      alert('Mã OTP không hợp lệ hoặc đã hết hạn')
      return
    }

    successMessage.value = `Đăng ký thành công! Xin chào, ${fullName.value}`
  }

  return {
    firstName,
    lastName,
    fullName,
    nationality,
    phone,
    birthDate,
    idType,
    idNumber,
    address,
    email,
    password,
    confirmPassword,
    otp,
    successMessage,
    showPassword,
    sendOtp,
    handleSubmit,
  }
}
