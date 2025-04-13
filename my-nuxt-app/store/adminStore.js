import { defineStore } from "pinia";

export const useAdminStore = defineStore("adminStore", {
  state: () => ({
    rooms: [],
    receptionists: [],
    customers: [],
    feedbacks: [],
  }),
  actions: {
    addRoom(room) {
      this.rooms.push(room);
    },
    deleteRoom(id) {
      this.rooms = this.rooms.filter((room) => room.id !== id);
    },
  },
});
