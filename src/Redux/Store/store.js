import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/posts/postsSlice";
import categoriesReducer from "../slices/categories/categoriesSlice";
import commentReducer from "../slices/comments/commentsSlice";
import usersReducer from "../slices/users/usersSlices";

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
