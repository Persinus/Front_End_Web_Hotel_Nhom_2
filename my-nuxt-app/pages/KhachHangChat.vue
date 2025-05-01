<template>
  <div class="chat-container">
    <h1>💬 Chat với Quản Trị Viên</h1>

    <!-- Khu vực chat -->
    <div class="chat-box">
      <div class="messages">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="message.isAdmin ? 'admin-message' : 'customer-message'"
        >
          {{ message.text }}
        </div>
      </div>
      <div class="chat-input">
        <input
          type="text"
          v-model="newMessage"
          placeholder="Nhập tin nhắn..."
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage">Gửi</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as signalR from '@microsoft/signalr';

const messages = ref([]); // Tin nhắn trong cuộc trò chuyện
const newMessage = ref(''); // Tin nhắn mới
const customerId = 'KH001'; // Mã khách hàng (tự động lấy từ hệ thống khách hàng)
const adminId = 'QT001'; // Mã quản trị viên (được gán tự động)

let connection = null;

// Thiết lập kết nối SignalR
const setupSignalR = async () => {
  connection = new signalR.HubConnectionBuilder()
    .withUrl('http://nhom2webkhachsan.runasp.net/chathub') // Đường dẫn tới SignalR Hub
    .withAutomaticReconnect()
    .build();

  // Lắng nghe tin nhắn nhận được từ quản trị viên
  connection.on('ReceiveMessage', (user, message) => {
    console.log('Tin nhắn nhận được từ:', user, 'Nội dung:', message); // Log tin nhắn nhận được
    if (user === adminId) {
      messages.value.push({ text: message, isAdmin: true }); // Tin nhắn từ quản trị viên
    }
  });

  try {
    await connection.start();
    console.log('SignalR đã kết nối'); // Log khi kết nối thành công
  } catch (error) {
    console.error('Lỗi khi kết nối SignalR:', error); // Log lỗi khi kết nối thất bại
  }
};

// Gửi tin nhắn tới quản trị viên
const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  const message = newMessage.value.trim();
  messages.value.push({ text: message, isAdmin: false }); // Tin nhắn từ khách hàng
  console.log('Tin nhắn gửi đi:', message); // Log tin nhắn gửi đi

  try {
    // Mã adminId ('QT001') được tự động gán tại đây
    await connection.invoke('SendMessageToAdmin', customerId, message);
    console.log(`Tin nhắn đã gửi đến quản trị viên ${adminId}:`, message); // Log khi gửi thành công
    newMessage.value = ''; // Xóa nội dung input sau khi gửi
  } catch (error) {
    console.error('Lỗi khi gửi tin nhắn:', error); // Log lỗi khi gửi tin nhắn
  }
};

onMounted(async () => {
  console.log('Khởi tạo SignalR...'); // Log khi bắt đầu khởi tạo
  await setupSignalR();
});

onBeforeUnmount(() => {
  if (connection) {
    connection.stop()
      .then(() => console.log('SignalR đã ngắt kết nối')) // Log khi ngắt kết nối thành công
      .catch(err => console.error('Lỗi khi ngắt kết nối SignalR:', err)); // Log lỗi khi ngắt kết nối
  }
});
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.chat-box {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.messages {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.admin-message {
  text-align: left;
  color: blue;
}

.customer-message {
  text-align: right;
  color: green;
}

.chat-input {
  display: flex;
  gap: 10px;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.chat-input button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #0056b3;
}
</style>
