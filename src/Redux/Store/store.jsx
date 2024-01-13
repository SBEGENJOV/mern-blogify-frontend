import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Slices/users/usersSlices";
import postsReducer from "../slices/posts/postsSlice";

//! Store
const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});

export default store;
