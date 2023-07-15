import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Feature/userReducer";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
