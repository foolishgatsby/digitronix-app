import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  title: "",
  contentComponentType: null, // Lưu trữ loại component thay vì chính component
  submitFunc: null, // Lưu trữ function name thay vì function
};

const ModalReducer = createSlice({
  name: "ModalReducer",
  initialState,
  reducers: {
    setModalOpen: (state, action) => {
      // console.log("action", action);
      const { title, contentComponentType } = action;
      state.isModalOpen = true;
      state.title = title;
      state.contentComponentType = contentComponentType;
    },
    setModalCancel: (state, action) => {
      state.title = "";
      state.contentComponentType = null;
      state.submitFunc = null;
      state.isModalOpen = false;
    },
    setSubmitFunc: (state, action) => {
      state.submitFunc = action.payload;
    },
  },
});

export const { setModalOpen, setSubmitFunc, setModalCancel } =
  ModalReducer.actions;

export default ModalReducer.reducer;
