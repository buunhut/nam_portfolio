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
  ß
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
