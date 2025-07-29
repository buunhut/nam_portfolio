import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: true,
  currency: "Vnđ",
  overlay: false,

  selectedCategory: "All",

  baiPhanTich: [
    {
      name: "Tòa 45 - 47 Phan Đăng Lưu",
      file: "sample.pdf",
    },
    {
      name: "Nhừng tòa nhà tiềm năng 100 - 300 tỷ",
      file: "sample2.pdf",
    },
  ],

  products: [
    {
      ma: "q301",
      proName: "nhà phố quận 3",
      title: "trần quốc thảo",
      address: "100 trân quốc thảo",
      dienTich: "ngang 4.5m x dài 43m NH 20m, công nhận 553m2, DTS gần 2.000m2",
      ketCau: "Hầm, 7 tầng",
      giaBan: "700 tỷ",
      hopDong: "800 triệu",
      huong: "đông nam",
      phapLy: "cá nhân",
      viTri: "Giữa đường trần quốc thảo và lý chính thắng",
      allPhoto: ["Q3_001_1.jpg", "Q3_001_2.jpg", "Q3_001_3.jpg"],
      categories: ["Nhà phố", "Building", "Biệt thự"],
    },
    {
      ma: "q10001",
      proName: "nhà phố quận 1",
      title: "lê lợi",
      address: "1 bis lê lợi",
      dienTich: "ngang 10m x dài 30m NH 20m, công nhận 300m2,",
      ketCau: "Hầm, 17 tầng",
      giaBan: "900 tỷ",
      hopDong: "3 tỷ",
      huong: "đông nam",
      phapLy: "công ty",
      viTri: "giữa hàm nghi và lê lợi",
      allPhoto: [""],
      categories: ["Nhà phố", "Building", "Biệt thự"],
    },
    {
      ma: "q301",
      proName: "nhà phố quận 3",
      title: "trần quốc thảo",
      address: "100 trân quốc thảo",
      dienTich: "ngang 4.5m x dài 43m NH 20m, công nhận 553m2, DTS gần 2.000m2",
      ketCau: "Hầm, 7 tầng",
      giaBan: "700 tỷ",
      hopDong: "800 triệu",
      huong: "đông nam",
      phapLy: "cá nhân",
      viTri: "Giữa đường trần quốc thảo và lý chính thắng",
      allPhoto: ["Q3_001_1.jpg", "Q3_001_2.jpg", "Q3_001_3.jpg"],
      categories: ["Nhà phố", "Building", "Biệt thự"],
    },
    {
      ma: "q10001",
      proName: "nhà phố quận 1",
      title: "lê lợi",
      address: "1 bis lê lợi",
      dienTich: "ngang 10m x dài 30m NH 20m, công nhận 300m2,",
      ketCau: "Hầm, 17 tầng",
      giaBan: "900 tỷ",
      hopDong: "3 tỷ",
      huong: "đông nam",
      phapLy: "công ty",
      viTri: "giữa hàm nghi và lê lợi",
      allPhoto: [""],
      categories: ["Nhà phố", "Building", "Biệt thự"],
    },
    {
      ma: "q301",
      proName: "nhà phố quận 3",
      title: "trần quốc thảo",
      address: "100 trân quốc thảo",
      dienTich: "ngang 4.5m x dài 43m NH 20m, công nhận 553m2, DTS gần 2.000m2",
      ketCau: "Hầm, 7 tầng",
      giaBan: "700 tỷ",
      hopDong: "800 triệu",
      huong: "đông nam",
      phapLy: "cá nhân",
      viTri: "Giữa đường trần quốc thảo và lý chính thắng",
      allPhoto: ["Q3_001_1.jpg", "Q3_001_2.jpg", "Q3_001_3.jpg"],
      categories: ["Nhà phố", "Building", "Biệt thự"],
    },
    {
      ma: "q10001",
      proName: "nhà phố quận 1",
      title: "lê lợi",
      address: "1 bis lê lợi",
      dienTich: "ngang 10m x dài 30m NH 20m, công nhận 300m2,",
      ketCau: "Hầm, 17 tầng",
      giaBan: "900 tỷ",
      hopDong: "3 tỷ",
      huong: "đông nam",
      phapLy: "công ty",
      viTri: "giữa hàm nghi và lê lợi",
      allPhoto: [""],
      categories: ["Nhà phố", "Building", "Biệt thự"],
    },
    {
      ma: "q301",
      proName: "nhà phố quận 3",
      title: "trần quốc thảo",
      address: "100 trân quốc thảo",
      dienTich: "ngang 4.5m x dài 43m NH 20m, công nhận 553m2, DTS gần 2.000m2",
      ketCau: "Hầm, 7 tầng",
      giaBan: "700 tỷ",
      hopDong: "800 triệu",
      huong: "đông nam",
      phapLy: "cá nhân",
      viTri: "Giữa đường trần quốc thảo và lý chính thắng",
      allPhoto: ["Q3_001_1.jpg", "Q3_001_2.jpg", "Q3_001_3.jpg"],
      categories: ["Nhà phố", "Building", "Biệt thự"],
    },
    {
      ma: "q10001",
      proName: "nhà phố quận 1",
      title: "lê lợi",
      address: "1 bis lê lợi",
      dienTich: "ngang 10m x dài 30m NH 20m, công nhận 300m2,",
      ketCau: "Hầm, 17 tầng",
      giaBan: "900 tỷ",
      hopDong: "3 tỷ",
      huong: "đông nam",
      phapLy: "công ty",
      viTri: "giữa hàm nghi và lê lợi",
      allPhoto: [""],
      categories: ["Nhà phố", "Building", "Biệt thự"],
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
    updateSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { updateLogin, updateOverlay, updateSelectedCategory } =
  dataSlice.actions;
export default dataSlice.reducer;
