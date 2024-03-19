import { createSlice } from "@reduxjs/toolkit";
import { userService } from "../services/UserService";
import { STATUS_CODE } from "../../utils/constants/settingSystem";
import { getAllRoleApi, setRoleList } from "./RoleReducer";
import { setModalCancel } from "./ModalReducer";

const initialState = {
  userList: [],
  loading: false,
  accountEdit: {},
};

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    setUserListAction: (state, action) => {
      state.userList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAccountEdit: (state, action) => {
      // console.log("action", action);
      state.accountEdit = action.payload;
    },
  },
});

export const { setUserListAction, setLoading, setAccountEdit } =
  UserReducer.actions;

export default UserReducer.reducer;

// ----------------------- CALL API -----------------//

export const getAllUserWithRole = () => {
  return async (dispatch) => {
    try {
      await dispatch(getAllRoleApi());
      await dispatch(getAllUserApi());
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const getAllUserApi = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const result = await userService.getAllUser();
      if (result.status === STATUS_CODE.SUCCESS) {
        await dispatch(setUserListAction(result.data));
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const updateUserApi = (id, role_id) => {
  return async (dispatch) => {
    try {
      const result = await userService.updateUser(id, role_id);
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch(getAllUserApi());
        dispatch(setModalCancel());
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const setActiveUserApi = (id, is_active, role_id) => {
  return async (dispatch) => {
    try {
      const result = await userService.setActiveUser(id, is_active, role_id);
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch(getAllUserApi());
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const registerApi = (newAccount) => {
  return async (dispatch) => {
    try {
      console.log("newAccount", newAccount);
      const result = await userService.register(newAccount);
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch(getAllUserApi());
        dispatch(setModalCancel());
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
