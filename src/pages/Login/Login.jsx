import React, { useEffect, useState } from "react";
import img from "./../../assets/img/LandingPageCarousel_4.jpg";
import Logo from "../../assets/img/Logo.png";
import { loginApi } from "../../redux/reducers/LoginReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { TOKEN, USER_ROLE } from "../../utils/constants/settingSystem";

export default function Login(props) {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const userLoginInfo = useSelector((state) => state.LoginReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
  };
  // console.log(userLogin);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submit");
    dispatch(loginApi(userLogin));
  };

  useEffect(() => {
    if (localStorage.getItem(TOKEN) !== null) {
      console.log(localStorage.getItem(USER_ROLE));
      switch (localStorage.getItem(USER_ROLE)) {
        case "1":
          navigate("/admin");
          break;
        case "2":
          break;
        case "3":
          navigate("/warehouse");
          break;
        case "4":
          navigate("/sale");
          break;
        case "5":
          break;
        default:
          break;
      }
    }
  }, [userLoginInfo]);

  return (
    <div className="grid grid-cols-10 h-screen">
      <div className="md:col-span-4 sm:col-span-12">
        <div className="inline-block w-full h-1/4 bg-[#FFD700] relative">
          <img
            src={Logo}
            alt="logo"
            className="absolute"
            style={{
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%) translateY(50%)",
            }}
          />
        </div>
        <form className="space-y-6 mt-20 mx-40" onSubmit={handleSubmit}>
          <h3 className="text-center font-bold text-4xl">WELCOME</h3>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="text-sm flex justify-between">
            <div className="remember flex items-center">
              <input
                className="me-1"
                id="remember"
                name="remember"
                type="checkbox"
              ></input>
              <label htmlFor="remember" className="font-semibold">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div
        className="sm:hidden md:block col-span-6"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
