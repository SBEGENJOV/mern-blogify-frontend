import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initialstate
const INITIAL_STATE = {
  loading: false,
  error: null,
  posts: [],
  post: null,
  success: false,
};

//!Fetch public posts
export const fetchPublicPostsAction = createAsyncThunk(
  "posts/fetch-public-posts",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //make request
    try {
      const { data } = await axios.get(
        `https://blogify-api-v1-wo4n.onrender.com/posts/public`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);


//! post slices
const postSlice = createSlice({
    name: "posts",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
      //fetch public posts
      builder.addCase(fetchPublicPostsAction.pending, (state, action) => {
        state.loading = true;
      });
      //handle fulfilled state
      builder.addCase(fetchPublicPostsAction.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = null;
      });
      //* Handle the rejection
      builder.addCase(fetchPublicPostsAction.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    },
  });
  
  //! generate reducer
  const postsReducer = postSlice.reducer;
  
  export default postsReducer;