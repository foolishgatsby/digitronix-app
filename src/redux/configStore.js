import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./reducers/LoginReducer";
import FunctionPopupReducer from "./reducers/FunctionPopupReducer";
import UserReducer from "./reducers/UserReducer";
import RoleReducer from "./reducers/RoleReducer";
import ModalReducer from "./reducers/ModalReducer";
import ProductReducer from "./reducers/ProductReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import TagsReducer from "./reducers/TagsReducer";

export const store = configureStore({
  reducer: {
    // reducer
    LoginReducer: LoginReducer,
    FunctionPopupReducer: FunctionPopupReducer,
    UserReducer: UserReducer,
    RoleReducer: RoleReducer,
    ModalReducer: ModalReducer,
    ProductReducer: ProductReducer,
    CategoryReducer: CategoryReducer,
    TagsReducer: TagsReducer,
  },
});
