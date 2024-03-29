import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Users/Login";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import { useDispatch, useSelector } from "react-redux";
import ProctedRoute from "./components/AuthRoute/ProctedRoute";
import PublicPosts from "./components/Posts/PublicPosts";
import AddPost from "./components/Posts/AddPost";
import PostDetails from "./components/Posts/PostDetails";
import PostLists from "./components/Posts/PostLists";
import UpdatePost from "./components/Posts/UpdatePost";
import Register from "./components/Users/Register";
import PublicUserProfile from "./components/Users/PublicUserProfile";
import PrivateUserProfile from "./components/Users/PrivateUserProfile";
import UploadProfileImage from "./components/Users/UploadProfileImage";
import UploadCoverImage from "./components/Users/UploadCoverImage";
import AccountVerification from "./components/Users/AccountVerification";
import PasswordResetRequest from "./components/Users/PasswordResetRequest";
import PasswordReset from "./components/Users/PasswordReset";
import UpdateUser from "./components/Users/UpdateUser";
import SchedulePost from "./components/Posts/SchedulePost";
import { logoutAction } from "./Redux/Slices/Users/usersSlices";

export default function App() {
  const { userAuth, error } = useSelector((state) => state?.users);
  const isLogin = userAuth?.userInfo?.token;
  const dispatch = useDispatch();
  if (error?.message === "Geçersiz token") {
    dispatch(logoutAction());
    //Sayfayı yenileme
    window.location.reload();
  }
  return (
    <BrowserRouter>
      {isLogin ? <PrivateNavbar /> : <PublicNavbar />}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* Public yazılar */}
        <Route path="/public-posts" element={<PublicPosts />}></Route>
        {/* add post */}
        <Route
          path="/add-post"
          element={
            <ProctedRoute>
              <AddPost />
            </ProctedRoute>
          }
        ></Route>
        {/* post details */}
        <Route
          path="/posts/:postId"
          element={
            <ProctedRoute>
              <PostDetails />
            </ProctedRoute>
          }
        ></Route>
        {/* Profil yönlendirmeleri */}
        <Route
          path="/user-public-profile/:userId"
          element={
            <ProctedRoute>
              <PublicUserProfile />
            </ProctedRoute>
          }
        ></Route>
        {/* Ana sayfa postlar */}
        <Route
          path="/posts"
          element={
            <ProctedRoute>
              <PostLists />
            </ProctedRoute>
          }
        ></Route>
        {/* update */}
        <Route
          path="/posts/:postId/update"
          element={
            <ProctedRoute>
              <UpdatePost />
            </ProctedRoute>
          }
        ></Route>
        {/* private user profile */}
        <Route
          path="/user-profile"
          element={
            <ProctedRoute>
              <PrivateUserProfile />
            </ProctedRoute>
          }
        ></Route>
        {/* private upload profile image */}
        <Route
          path="/upload-profile-image"
          element={
            <ProctedRoute>
              <UploadProfileImage />
            </ProctedRoute>
          }
        ></Route>
        {/* private upload cover image */}
        <Route
          path="/upload-cover-image"
          element={
            <ProctedRoute>
              <UploadCoverImage />
            </ProctedRoute>
          }
        ></Route>
        {/* Verify account */}
        <Route
          path="/verify-account/:token"
          element={
            <ProctedRoute>
              <AccountVerification />
            </ProctedRoute>
          }
        ></Route>
        {/* forgot password request */}
        <Route
          path="/forgot-password"
          element={<PasswordResetRequest />}
        ></Route>
        {/* reset password */}
        <Route
          path="/reset-password/:token"
          element={<PasswordReset />}
        ></Route>
        {/* Update user */}
        <Route
          path="/update-profile"
          element={
            <ProctedRoute>
              <UpdateUser />
            </ProctedRoute>
          }
        ></Route>
        {/* Schedule Post Route */}
        <Route
          path="/posts/schedule/:postId"
          element={
            <ProctedRoute>
              <SchedulePost />
            </ProctedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
