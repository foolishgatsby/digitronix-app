import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  passWord: "",
};

const LoginReducer = createSlice({
  name: "LoginReducer",
  initialState,
  reducers: {},
});

export const {} = LoginReducer.actions;

export default LoginReducer.reducer;
