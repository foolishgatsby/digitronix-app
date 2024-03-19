import { createSlice } from "@reduxjs/toolkit";
import { categoryService } from "../services/CategoryService";
import { STATUS_CODE } from "../../utils/constants/settingSystem";

const initialState = {
  categoryList: [],
};

const CategoryReducer = createSlice({
  name: "CategoryReducer",
  initialState,
  reducers: {
    setCategoryList: (state, action) => {
      state.categoryList = action.payload;
    },
  },
});

export const { setCategoryList } = CategoryReducer.actions;

export default CategoryReducer.reducer;

// ----------------------- CALL API -----------------//

export const getAllCategoryApi = () => {
  return async (dispatch) => {
    try {
      const result = await categoryService.getAllCategory();
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch(setCategoryList(result.data));
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
