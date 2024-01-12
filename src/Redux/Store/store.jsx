import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Slices/users/usersSlices";

//! Store
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
