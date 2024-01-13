import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/posts/postsSlice";
import categoriesReducer from "../slices/categories/categoriesSlice";
import usersReducer from "../Slices/users/usersSlices";

//! Store
const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    categories: categoriesReducer,
  },
});

export default store;
