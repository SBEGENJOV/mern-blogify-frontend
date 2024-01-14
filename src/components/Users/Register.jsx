import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../../Redux/Slices/users/usersSlices";
import ErrorMsg from "../Alert/ErrorMsg";
import SuccesMsg from "../Alert/SuccesMsg";
import LoadingComponent from "../Alert/LoadingComponent";

const Register = () => {
  //! Nvaigation hook
  const navigate = useNavigate();
  //! Dispatch
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  //handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    //!dispatch
    dispatch(
      registerAction({
        username: formData.username,
        password: formData.password,
        email: formData?.email,
      })
    );
    // reset form
    setFormData({
      email: "",
      password: "",
      username: "",
    });
  };

  //store data
  const { user, error, isRegistered, loading } = useSelector(
    (state) => state?.users
  );
  //! Redirect
  useEffect(() => {
    if (user?.status === "OK") {
      navigate("/login");
    }
  }, [user?.status]);

  return (
    <form onSubmit={handleSubmit} className="w-full pl-2 lg:w-1/2">
      <div className="flex flex-col items-center p-10 xl:px-24 xl:pb-12 bg-white lg:max-w-xl lg:ml-auto rounded-4xl shadow-2xl">
        <h2 className="mb-4 text-2xl md:text-3xl text-coolGray-900 font-bold text-center">
          Topluluğumuza Katılın
        </h2>
        {/* Display error */}
        {error && <ErrorMsg message={error?.message} />}
        {/* success message */}
        {isRegistered && <SuccesMsg message="Register Success" />}
        <h3 className="mb-7 text-base md:text-lg text-coolGray-500 font-medium text-center">
          İlgi alanlarınızı paylaşan benzer düşünen bireylerden oluşan bir
          dünyayı keşfedin, Tutkular ve Hedefler
        </h3>
        <label className="mb-4 flex flex-col w-full">
          <span className="mb-1 text-coolGray-800 font-medium">Username</span>
          <input
            className="py-3 px-3 leading-5 w-full text-coolGray-400 font-normal border border-coolGray-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
        </label>
        <label className="mb-4 flex flex-col w-full">
          <span className="mb-1 text-coolGray-800 font-medium">Email</span>
          <input
            className="py-3 px-3 leading-5 w-full text-coolGray-400 font-normal border border-coolGray-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
            placeholder="Enter your username"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="mb-4 flex flex-col w-full">
          <span className="mb-1 text-coolGray-800 font-medium">Password</span>
          <input
            className="py-3 px-3 leading-5 w-full text-coolGray-400 font-normal border border-coolGray-200 outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-lg shadow-sm"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </label>

        {loading ? (
          <LoadingComponent />
        ) : (
          <button
            className="mb-4 inline-block py-3 px-7 w-full leading-6 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
            type="submit"
          >
            Başla
          </button>
        )}
        <p className="text-sm text-coolGray-400 font-medium text-center">
          <span>Zaten hesabınız var mı? </span>
          <Link className="text-green-500 hover:text-green-600" to="/login">
            Kayıt ol
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
