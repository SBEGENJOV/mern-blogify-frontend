import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//initalstate
const INITIAL_STATE = {
  loading: false,
  error: null,
  users: [],
  user: null,
  success: false,
  isverified: false,
  isUpdated: false,
  isRegistered: false,
  isLogin: false,
  isCoverImageUploaded: false,
  isProfileImgUploaded: false,
  emailMessage: undefined,
  profile: {},
  isEmailSent: false,
  userAuth: {
    error: null,
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

//! Login Action
export const loginAction = createAsyncThunk(
  "users/login",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    //make request
    try {
      const respone = await axios.post(
        `http://localhost:5000/api/users/login`,
        payload
      );
      return respone;
    } catch (error) {
      return rejectWithValue(error?.response?.respone);
    }
  }
);
