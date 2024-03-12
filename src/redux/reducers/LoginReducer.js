import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userService } from "../services/UserService";

// setting const

const initialState = {
  userLogin: {},
};

const LoginReducer = createSlice({
  name: "LoginReducer",
  initialState,
  reducers: {},
});

export const {} = LoginReducer.actions;

export default LoginReducer.reducer;

// *************** REDUX THUNK CALL API **************** //

/**
 * login funtion
 * @param {} userLogin
 * @returns
 */
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    try {
      const result = await userService.login(userLogin);

      console.log(result);
    } catch (error) {}
  };
};
