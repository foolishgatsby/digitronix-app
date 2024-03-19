import { createSlice } from "@reduxjs/toolkit";
import { roleService } from "../services/RoleService";
import { STATUS_CODE } from "../../utils/constants/settingSystem";

const initialState = {
  roleList: [],
};

const RoleReducer = createSlice({
  name: "RoleReducer",
  initialState,
  reducers: {
    setRoleList: (state, action) => {
      state.roleList = action.payload;
    },
  },
});

export const { setRoleList } = RoleReducer.actions;

export default RoleReducer.reducer;

// ---------------- API CALL -------------- //
export const getAllRoleApi = () => {
  return async (dispatch) => {
    try {
      const result = await roleService.getAllRole();
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch(setRoleList(result.data));
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
