import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Users/Login";
import UserProfile from "./components/Users/UserProfile";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import { useSelector } from "react-redux";
import ProctedRoute from "./components/AuthRoute/ProctedRoute";
import PublicPosts from "./components/Posts/PublicPosts";
import AddPost from "./components/Posts/AddPost";
import PostDetails from "./components/Posts/PostDetails";
import PostLists from "./components/Posts/PostLists";
import UpdatePost from "./components/Posts/UpdatePost";
import Register from "./components/Users/Register";

export default function App() {
  const { userAuth } = useSelector((state) => state?.users);
  const isLogin = userAuth?.userInfo?.token;
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
          path="/user-profile"
          element={
            <ProctedRoute>
              <UserProfile />
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
      </Routes>
    </BrowserRouter>
  );
}
