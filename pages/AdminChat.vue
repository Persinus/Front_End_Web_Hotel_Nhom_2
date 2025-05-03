<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import axios from 'axios';

const customers = ref([]);
const selectedCustomer = ref(null);
const messages = ref([]);
const newMessage = ref('');
const defaultAvatar = 'https://via.placeholder.com/50';

// SignalR connection instance
const connection = new HubConnectionBuilder()
  .withUrl('http://nhom2webkhachsan.runasp.net/chathub') // Thay bằng URL SignalR của bạn
  .configureLogging(LogLevel.Information)
  .build();

// Lấy danh sách khách hàng
const fetchCustomers = async () => {
  try {
    const response = await axios.get('http://nhom2webkhachsan.runasp.net/api/KhachHang');
    customers.value = response.data;
    console.log('Danh sách khách hàng:', customers.value);
  } catch (error) {
    console.error('Lỗi khi lấy danh sách khách hàng:', error);
  }
};

// Kết nối SignalR
const setupSignalR = async () => {
  connection.on('ReceiveMessage', (sender, message) => {
    console.log('Tin nhắn nhận được từ:', sender, 'Nội dung:', message);
    if (selectedCustomer.value && sender === selectedCustomer.value.maKhachHang) {
      messages.value.push({ text: message, isAdmin: false });
    }
  });

  connection.on('AdminNotAvailable', (message) => {
    console.error(message);
  });

  connection.on('CustomerNotAvailable', (message) => {
    console.error(message);
  });

  try {
    await connection.start();
    console.log('SignalR connected.');
  } catch (error) {
    console.error('SignalR connection error:', error);
  }
};

// Chọn khách hàng
const selectCustomer = (customer) => {
  console.log('Khách hàng được chọn:', customer);
  selectedCustomer.value = customer;
  messages.value = [];
};

// Gửi tin nhắn
const sendMessage = async () => {
  console.log('Tin nhắn gửi đi:', newMessage.value);
  if (!newMessage.value.trim()) return;

  const message = newMessage.value.trim();
  messages.value.push({ text: message, isAdmin: true });

  try {
    await connection.invoke('SendMessageToCustomer', selectedCustomer.value.maKhachHang, message);
    newMessage.value = '';
  } catch (error) {
    console.error('Lỗi khi gửi tin nhắn:', error);
  }
};

onMounted(async () => {
  await fetchCustomers();
  await setupSignalR();
});

onBeforeUnmount(() => {
  connection.stop();
});
</script>

<template>
  <div class="chat-container">
    <!-- Sidebar -->
    <div v-if="customers.length > 0" class="sidebar">
      <h2>Danh sách khách hàng</h2>
      <ul>
        <li
          v-for="customer in customers"
          :key="customer.maKhachHang"
          @click="selectCustomer(customer)"
          :class="{ active: selectedCustomer?.maKhachHang === customer.maKhachHang }"
        >
          <img :src="customer.hinhAnh || defaultAvatar" alt="Avatar" class="avatar" />
          <span>{{ customer.hoTen }}</span>
        </li>
      </ul>
    </div>
    <div v-else class="no-customer">
      <p>Không có khách hàng nào để hiển thị.</p>
    </div>

    <!-- Chat Box -->
    <div v-if="selectedCustomer" class="chat-box">
      <h2>Chat với {{ selectedCustomer.hoTen }}</h2>
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

<style scoped>
.chat-container {
  display: flex;
  height: 100vh;
  max-width: 1200px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.sidebar {
  width: 300px;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.sidebar h2 {
  margin-bottom: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sidebar li:last-child {
  border-bottom: none;
}

.sidebar li:hover {
  background-color: #e9ecef;
}

.sidebar li.active {
  background-color: #007bff;
  color: white;
}

.sidebar .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.chat-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #ffffff;
}

.chat-box h2 {
  margin-bottom: 10px;
}

.messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.admin-message {
  text-align: right;
  color: blue;
  margin: 5px 0;
}

.customer-message {
  text-align: left;
  color: green;
  margin: 5px 0;
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

.no-customer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 18px;
  color: #6c757d;
}
</style>
