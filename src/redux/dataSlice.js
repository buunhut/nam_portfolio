import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: true,
  currency: "Vnđ",
  overlay: false,

  products: [
    {
      ma: "Q3_001",
      proName: "Nhà mặt tiền Quận 3",
      title: "Trần quốc thảo",
      address: "28 Trần Quốc Thảo, Phường 6, Quận 3",
      dienTich: "4.5 x 43m NH 20m, công nhận 553m2, DTS gần 2.000m2",
      ketCau: "Hầm 7 tầng ST",
      giaBan: "350 tỷ",
      hopDong: "800 triệu",
      huong: "Đông Nam",
      phapLy: "CTCP bán 100%",
      viTri: "Giữa Ngô Thời Nhiệm và Nguyễn Đình Chiểu",
      allPhoto: ["Q3_001_1.jpg", "Q3_001_2.jpg", "Q3_001_3.jpg"],
      categories: ["Nhà phố"],
    },
    {
      ma: "BT_BT001",
      proName: "Nhà biệt thự 200m2",
      title: "Đường 19E",
      address: "23 Đường 19E, Phường Bình Trị Đông B, Quận Bình Tân",
      dienTich: "20 x 20m, công nhận 400m2",
      ketCau: "1 triệt 2 tầng lầu, 1  ST",
      giaBan: "80 tỷ",
      hopDong: "50 triệu",
      huong: "Tây Ban",
      phapLy: "Cá nhân nắm sổ cứng ngắt",
      viTri: "Đường 19E và Đường 24",
      allPhoto: ["Q3_001_1.jpg", "Q3_001_2.jpg", "Q3_001_3.jpg"],
      categories: ["Biệt thự"],
    },
    {
      ma: "Q1_BQ001",
      proName: "Building Nguyễn Thị Minh Khai",
      title: "Nguyễn Thị Minh Khai",
      address: "10A Nguyễn Thị Minh Khai, Quận 1, Thành Phố Hồ Chí Minh",
      dienTich: "18 x 18m, công nhận 190m2",
      ketCau: "Hầm, 10 tầng",
      giaBan: "330 tỷ",
      hopDong: "1 tỷ",
      huong: "",
      phapLy: "Cá nhân",
      viTri: "Nguyễn Thị Minh Khai, Nguyễn Bỉnh Khiêm",
      allPhoto: ["Q1_BQ001_1.jpg", "Q1_BQ001_2.jpg", "Q1_BQ001_3.jpg"],
      categories: ["Building"],
    },
  ],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateLogin(state, action) {
      state.login = action.payload;
    },
    updateOverlay(state, action) {
      state.overlay = action.payload;
    },
  },
});

export const { updateLogin, updateOverlay } = dataSlice.actions;
export default dataSlice.reducer;
