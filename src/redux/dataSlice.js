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
      name: "Những tòa nhà tiềm năng 100 - 300 tỷ",
      file: "sample2.pdf",
    },
     {
      name: "Những tòa nhà tiềm năng dưới 200 tỷ",
      file: "sample4.pdf",
    },
  ],
  // bắt đầu product


products: [
  {
  ma: "q301",
  proName: "TOÀ NHÀ VĂN PHÒNG",
  title: "28 Trần Quốc Thảo",
  address: "28 Trần Quốc Thảo, Phường Xuân Hoà (P.VTS Q3 cũ), TP HCM",
  dienTich: "ngang 4.5m x dài 43m NH 20m, công nhận 553.3m², DTS 1.922m²",
  ketCau: "Hầm, 7 tầng, Sân thượng",
  giaBan: "350 tỷ",
  hopDong: "800 triệu",
  huong: "Tây Nam",
  phapLy: "CTCP bán 100% cổ phần",
  viTri: "Giữa đường trần quốc thảo và lý chính thắng",
  allPhoto: ["28tqt1.jpg","28tqt2.jpg","28tqt3.jpg","28tqt4.jpg"],
  categories: ["Nhà phố","Building",]
  },
  {
  ma: "q101",
  proName: "Khách sạn Quận 1",
  title: "18 Bùi Thị Xuân",
  address: "18 Bùi Thị Xuân, Phường Phường Bến Thành (Quận 1 cũ), TP HCM ",
  dienTich: "ngang 5.3m x dài 23m, công nhận 113m², DTS gần 112.8m²",
  ketCau: "Hầm, 12 tầng",
  giaBan: "115 tỷ",
  hopDong: "400 triệu",
  huong: "Đông Nam",
  phapLy: "cá nhân",
  viTri: "Giữa  đường Bùi THị Xuân với Cách Mạng Tháng Tám",
  allPhoto: ["btx1.jpg","btx2.jpg","btx3.jpg","btx4.jpg"],
  categories: ["Nhà phố","Building",]
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
  dienTich: "ngang 8m x dài 22m, công nhận 183m², DTS 876m²",
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
