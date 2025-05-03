import { defineStore } from "pinia";
const useLanguageStore = defineStore("language", {
  state: () => ({
    currentLanguage: "vn",
    // Ngôn ngữ mặc định
    translations: {
      vn: {
        title: "Danh Sách Phòng",
        roomId: "Mã phòng",
        enterRoomId: "Nhập mã phòng",
        roomType: "Loại phòng",
        enterRoomType: "Nhập loại phòng",
        maxPrice: "Giá tối đa",
        enterMaxPrice: "Nhập giá tối đa",
        floor: "Tầng",
        enterFloor: "Nhập tầng",
        status: "Trạng thái",
        all: "Tất cả",
        available: "Còn trống",
        booked: "Đã đặt",
        sortAsc: "Giá tăng dần",
        sortDesc: "Giá giảm dần",
        price: "Giá",
        bedType: "Kiểu giường",
        viewDetails: "Xem Chi Tiết",
        addToCart: "Thêm vào giỏ",
        noRooms: "Không có phòng nào."
      },
      en: {
        title: "Room List",
        roomId: "Room ID",
        enterRoomId: "Enter Room ID",
        roomType: "Room Type",
        enterRoomType: "Enter Room Type",
        maxPrice: "Max Price",
        enterMaxPrice: "Enter Max Price",
        floor: "Floor",
        enterFloor: "Enter Floor",
        status: "Status",
        all: "All",
        available: "Available",
        booked: "Booked",
        sortAsc: "Sort Ascending",
        sortDesc: "Sort Descending",
        price: "Price",
        bedType: "Bed Type",
        viewDetails: "View Details",
        addToCart: "Add to Cart",
        noRooms: "No rooms available."
      }
    }
  }),
  getters: {
    t(state) {
      return state.translations[state.currentLanguage];
    }
  },
  actions: {
    initializeLanguage() {
    },
    setLanguage(language) {
    }
  }
});
export {
  useLanguageStore
};
//# sourceMappingURL=Language.mjs.map
