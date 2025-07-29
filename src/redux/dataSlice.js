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
  // bắt đầu product


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
  allPhoto: ["Q3_001_1.jpg","Q3_001_2.jpg","Q3_001_3.jpg"],
  categories: ["Nhà phố","Building","Biệt thự"]
  },
  {
  ma: "btpkb",
  proName: "biệt thự phan kế bính",
  title: "quận 1 , sài gòn",
  address: "20 phan kế bính, phường sài gòn, tp hcm",
  dienTich: "ngang 9m x dài 25m,, công nhận 224m2",
  ketCau: "2 tầng",
  giaBan: "140 tỷ",
  hopDong: "145 triệu",
  huong: "tây bắc",
  phapLy: "cá nhân",
  viTri: "phan kế bính",
  allPhoto: ["btpkb_1.jpg","btpkb_2.jpg","btpkb_3.jpg"],
  categories: ["Biệt thự"]
  },
  {
  ma: "cheh1",
  proName: "căn hộ ehome 3333333",
  title: "hồ học lãm",
  address: "103 hồ học lãm",
  dienTich: "ngang 8m x dài 7m, công nhận 63m2",
  ketCau: "2 phòng ngủ, 2 totlet",
  giaBan: "2ty2",
  hopDong: "7 triệu",
  huong: "đông nam",
  phapLy: "cá nhân",
  viTri: "quận 8, quận bình",
  allPhoto: ["ehome1.jpg","ehome2.jpg","ehome3.jpg","ehome4.jpg"],
  categories: []
  }
]


  // kết thúc product
}

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
