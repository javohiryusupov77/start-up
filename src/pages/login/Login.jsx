// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// import {login_image, logo} from "..//..//assets/images"
// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const login_state = { email: "", password: "" };
//   const [state, setState] = useState(login_state);
//   const navigate = useNavigate();

//   const handelChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };
//   const handelSubmit = (e) => {
//     e.preventDefault();
//     setState({ email: "", password: "" });
//     navigate("/dashboard/admin");
//     console.log(state);
//   };
//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="w-1/2  h-screen hidden min-900:flex items-center justify-center bg-cover bg-[midnightblue] bg-center">
//         <img className=" object-cover " src={login_image} alt="Login image is not defined" />
//       </div>

//       <div className="w-full min-900:w-1/2 flex flex-col items-center justify-center  bg-gray-50">
//         <div className="max-w-md w-full bg-transparent sm:bg-white sm:shadow-lg  rounded-lg sm:p-8 px-6  space-y-6">
//           <img
//             className="w-28 mx-auto"
//             src={logo}
//             alt="Logo is not defined"
//           />
//           <h2 className="text-[17px] text-[#646464] font-medium mb-4 text-center uppercase">
//             Surprise Manager
//           </h2>
//           <form onSubmit={handelSubmit}>
//             <div className="mb-4 w-full">
//               <label className="block mb-4 text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 className="mt-1 block w-full border border-gray-300 rounded-[5px] shadow-sm outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
//                 required
//                 onChange={handelChange}
//                 name="email"
//                 value={state.email}
//               />
//             </div>
//             <div className="mb-4 relative">
//               <label className="block mb-4 text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="flex relative items-center justify-center">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   className=" block w-full border border-gray-300 rounded-[5px] shadow-sm outline-none  focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4"
//                   required
//                   onChange={handelChange}
//                   value={state.password}
//                   name="password"
//                   id="password"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute  w-12 h-[100%] shadow-sm border border-gray-300 bg-white right-0 rounded-r-[5px]   flex items-center px-3 cursor-pointer"
//                 >
//                   {showPassword ? (
//                     <FaEyeSlash className="text-gray-500 text-[20px]" />
//                   ) : (
//                     <FaEye className="text-gray-500 text-[16px]" />
//                   )}
//                 </button>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[midnightblue] text-white py-2  mt-6 px-4 rounded-[5px] shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
//             >
//               Login
//             </button>
//             <p className="mt-4 text-sm text-gray-600 text-center">
//               Dont & have an account?{" "}
//               <a href="#" className="text-indigo-600 hover:text-indigo-700">
//                 Sign Up
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
// LoginPage.jsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { login_image, logo } from "..//..//assets/images";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("No user found. Please register first.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(state.email)) {
      setError("Invalid email format.");
      return;
    }

    if (
      user.email === state.email &&
      user.password === state.password
    ) {
      setState({ email: "", password: "" });
      navigate("/dashboard/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-screen hidden min-900:flex items-center justify-center bg-cover bg-[midnightblue] bg-center">
        <img className="object-cover" src={login_image} alt="Login image" />
      </div>

      <div className="w-full min-900:w-1/2 flex flex-col items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-transparent sm:bg-white sm:shadow-lg rounded-lg sm:p-8 px-6 space-y-6">
          <img className="w-28 mx-auto" src={logo} alt="Logo" />
          <h2 className="text-[17px] text-[#646464] font-medium mb-4 text-center uppercase">
            Surprise Manager
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
            <button
              type="submit"
              className="w-full bg-[midnightblue] text-white py-2 mt-6 px-4 rounded-[5px] shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Don't have an account?
              <a
                href="/register"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
