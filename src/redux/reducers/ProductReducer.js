import { createSlice } from "@reduxjs/toolkit";
import { productService } from "../services/ProductService";
import { STATUS_CODE } from "../../utils/constants/settingSystem";
import { setModalCancel } from "./ModalReducer";

const initialState = {
  productList: [],
  page: 0,
  limit: 10,
  totalPage: 0,
  loading: false,
  productEdit: {},
};

const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState,
  reducers: {
    setLoadingProducts: (state, action) => {
      state.loading = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setTotalPage: (state, action) => {
      state.totalPage = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setProductEdit: (state, action) => {
      state.productEdit = action.payload;
    },
  },
});

export const {
  setProductList,
  setLoadingProducts,
  setTotalPage,
  setLimit,
  setCurrentPage,
  setProductEdit,
} = ProductReducer.actions;

export default ProductReducer.reducer;

// ----------------------- CALL API -----------------//
export const getAllProductApi = (page, limit) => {
  return async (dispatch) => {
    dispatch(setLoadingProducts(true));
    await dispatch(setLimit(limit));
    await dispatch(setCurrentPage(page));
    try {
      const result = await productService.getAllProduct(page, limit);
      // console.log("result", result);
      if (result.status === STATUS_CODE.SUCCESS) {
        await dispatch(setProductList(result.data.products));
        await dispatch(setTotalPage(result.data.totalPage));
        dispatch(setLoadingProducts(false));
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const searchProductApi = (page, limit, keyword, category_id, tag) => {
  return async (dispatch) => {
    dispatch(setLoadingProducts(true));
    await dispatch(setLimit(limit));
    await dispatch(setCurrentPage(page));
    try {
      const result = await productService.searchProduct(
        page,
        limit,
        keyword,
        category_id,
        tag
      );
      if (result.status === STATUS_CODE.SUCCESS) {
        await dispatch(setProductList(result.data.products));
        await dispatch(setTotalPage(result.data.totalPage));
        dispatch(setLoadingProducts(false));
      }
    } catch (error) {}
  };
};

export const createProductApi = (newProduct) => {
  return async (dispatch) => {
    try {
      const result = await productService.createProduct(newProduct);
      if (result.status === STATUS_CODE.SUCCESS) {
        dispatch(getAllProductApi(0, 10));
        dispatch(setModalCancel());
      }
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};


