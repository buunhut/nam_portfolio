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
     {
      name: "Khác sạn ",
      file: "sample3.pdf",
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
  allPhoto: ["Q3_001_1.jpg","Q3_001_2.jpg","Q3_001_3.jpg"],
  categories: ["Nhà phố","Building","Biệt thự"],
  map: ''
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
  allPhoto: ["pkb_1.jpg","pkb_2.jpg","pkb_3.jpg","videopkb.mp4"],
  categories: ["Biệt thự"],
  map: ''
  },
  {
  ma: "cheh1",
  proName: "căn hộ ehome 3",
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
  categories: [],
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.269617709981!2d106.6988459!3d10.7906501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ca96141627%3A0x41c7fdc05beaac35!2zMjAgUGhhbiBL4bq_IELDrW5oLCDEkGEgS2FvLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1753775690244!5m2!1svi!2s"
  }
]


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
