import * as signalR from '@microsoft/signalr';

export default class ChatService {
  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://nhom2webkhachsan.runasp.net/chathub')
      .configureLogging(signalR.LogLevel.Information)
      .withAutomaticReconnect()
      .build();
  }

  async startConnection() {
    try {
      await this.hubConnection.start();
      console.log('SignalR Connected');
    } catch (err) {
      console.error('Error while starting connection: ' + err);
    }
  }

  async sendMessageToCustomer(customerId, message) {
    try {
      await this.hubConnection.invoke('SendMessageToCustomer', customerId, message);
    } catch (err) {
      console.error('Error sending message to customer: ' + err);
    }
  }

  async sendMessageToAdmin(adminId, message) {
    try {
      await this.hubConnection.invoke('SendMessageToAdmin', adminId, message);
    } catch (err) {
      console.error('Error sending message to admin: ' + err);
    }
  }

  onReceiveMessage(callback) {
    this.hubConnection.on('ReceiveMessage', (user, message) => {
      callback(user, message);
    });
  }

  stopConnection() {
    this.hubConnection.stop()
      .then(() => console.log('SignalR Disconnected'))
      .catch(err => console.error('Error while stopping connection: ' + err));
  }
}