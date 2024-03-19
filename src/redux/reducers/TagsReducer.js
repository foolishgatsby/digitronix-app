import { createSlice } from "@reduxjs/toolkit";
import { tagService } from "../services/TagService";
import { STATUS_CODE } from "../../utils/constants/settingSystem";

const initialState = {
  tagList: [],
};

const TagsReducer = createSlice({
  name: "TagsReducer",
  initialState,
  reducers: {
    setTagList: (state, action) => {
      state.tagList = action.payload;
    },
  },
});

export const { setTagList } = TagsReducer.actions;

export default TagsReducer.reducer;

// ----------------------- CALL API -----------------//

export const getAllTagsApi = () => {
  return async (dispatch) => {
    try {
      const result = await tagService.getAllTag();
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch(setTagList(result.data));
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
export const createTagsApi = () => {};
export const updateTagsApi = () => {};
export const deleteTagsApi = () => {};
