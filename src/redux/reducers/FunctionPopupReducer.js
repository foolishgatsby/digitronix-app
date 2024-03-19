import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Components: [],
};

const FunctionPopupReducer = createSlice({
  name: "FunctionPopupReducer",
  initialState,
  reducers: {
    setComponentsAction: (state, action) => {
      //   console.log(action);
      state.Components = action.payload;
    },
  },
});

export const { setComponentsAction } = FunctionPopupReducer.actions;

export default FunctionPopupReducer.reducer;
