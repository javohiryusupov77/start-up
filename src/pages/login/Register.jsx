import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { logo } from "..//..//assets/images";
import { login_image } from "..//..//assets/images";


const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });

    if (name === "rePassword") {
      if (value !== state.password) {
        setPasswordError("Passwords do not match.");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(state.email)) {
      setError("Invalid email format.");
      return;
    }

    if (state.password !== state.rePassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setPasswordError("");

    const hashedPassword = state.password;

    localStorage.setItem(
      "user",
      JSON.stringify({ email: state.email, password: hashedPassword })
    );
    setState({ email: "", password: "", rePassword: "" });
    navigate("/dashboard/admin");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  return (
    <div className="flex h-screen">
      <div>
        <div className="h-screen hidden min-900:flex items-center justify-center bg-cover bg-[midnightblue] bg-center">
          <img className="object-cover" src={login_image} alt="Login image" />
        </div>
      </div>
      <div className="w-full min-900:w-1/2 flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-transparent sm:bg-white sm:shadow-lg rounded-lg sm:p-8 px-6 space-y-6">
          <img className="w-28 mx-auto" src={logo} alt="Logo" />
          <h2 className="text-[17px] text-[#646464] font-medium mb-4 text-center uppercase">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="mb-4 w-full">
              <label className="block mb-4 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full border border-gray-300 rounded-[5px] shadow-sm outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
                required
                onChange={handleChange}
                name="email"
                value={state.email}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block mb-4 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex relative items-center justify-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="block w-full border border-gray-300 rounded-[5px] shadow-sm outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
                  required
                  onChange={handleChange}
                  value={state.password}
                  name="password"
                  id="password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute w-12 h-[100%] shadow-sm border border-gray-300 bg-white right-0 rounded-r-[5px] flex items-center px-3 cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500 text-[20px]" />
                  ) : (
                    <FaEye className="text-gray-500 text-[16px]" />
                  )}
                </button>
              </div>
            </div>
            <div className="mb-4 relative">
              <label className="block mb-4 text-sm font-medium text-gray-700">
                Re-enter Password
              </label>
              <div className="flex relative items-center justify-center">
                <input
                  type={showRePassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className="block w-full border border-gray-300 rounded-[5px] shadow-sm outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
                  required
                  onChange={handleChange}
                  value={state.rePassword}
                  name="rePassword"
                  id="rePassword"
                />
                <button
                  type="button"
                  onClick={toggleRePasswordVisibility}
                  className="absolute w-12 h-[100%] shadow-sm border border-gray-300 bg-white right-0 rounded-r-[5px] flex items-center px-3 cursor-pointer"
                >
                  {showRePassword ? (
                    <FaEyeSlash className="text-gray-500 text-[20px]" />
                  ) : (
                    <FaEye className="text-gray-500 text-[16px]" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[midnightblue] text-white py-2 mt-6 px-4 rounded-[5px] shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
            >
              Register
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
