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
  proName: "Toà nhà văn phòng",
  title: "Lê Quang Định",
  address: "473 Lê Quang Định, Phường Hạnh Thông (P.1, Gò Vấp cũ), TP.HCM",
  dienTich: "ngang 8m x dài 22m, công nhận 183m2",
  ketCau: "1 hầm + 7 tầng",
  giaBan: "72 tỷ",
  hopDong: "70 triệu",
  huong: "Đông Bắc",
  phapLy: "cá nhân",
  viTri: "Lê Quang Định Gò Vấp củ ",
  allPhoto: ["lqd1.jpg","lqd2.jpg","lqd3.jpg","lqd4.jpg"],
  categories: ["Building"]
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
