import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Slices/posts/postsSlice";
import categoriesReducer from "../Slices/categories/categoriesSlice";
import commentReducer from "../Slices/comments/commentsSlice";
import usersReducer from "../Slices/Users/usersSlices";

//! Store
const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    categories: categoriesReducer,
    comments: commentReducer,
  },
});

export default store;
