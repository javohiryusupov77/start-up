import {
  FaBell,
  FaChevronDown,
  FaCog,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";

import ToogleButton from "./toogleButton/ToogleButton";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function BaseHeader({ title }) {
  const [menu, setMenu] = useState(false);
  const routes = [
    {
      path: "/settings",
      icon: <FaCog className="text-[slategray] text-[20px]" />,
      label: "Settings",
    },
    {
      path: "/change-password",
      icon: <FaLock className="text-[slategray] text-[20px]" />,
      label: "Change Password",
    },
    {
      path: "/login",
      icon: <FaSignOutAlt className="text-[#962e2e] text-[20px]" />,
      label: "Logout",
    },
  ];
  return (
    <div className="w-full z-20 static">
      <div className="flex justify-between items-center bg-white py-6 px-4 shadow-md">
       
        <div className="header-text flex items-center gap-x-2">
        <ToogleButton />
          <span className="text-[24px] font-medium text-[darkslateblue]">
           {title}
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative flex">
            <FaBell
              fontSize="30px"
              className="text-[#dfbcbc] cursor-pointer "
            />
            <span className="left-3 bottom-3 absolute w-5 h-5 rounded-[50%] bg-[#7e6fd6] text-white font-bold text-[13px] flex items-center justify-center">
              2
            </span>
          </div>

          <div className="profile flex gap-2 items-center relative ">
            <div
              onClick={() => setMenu(!menu)}
              className="flex gap-x-2 items-center"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <FaChevronDown className="sm:hidden block text-[20px] text-[darkslateblue]" />
              <div className="text">
                <p className="font-bold text-[17px] text-[#1e0961] sm:block hidden">
                  David Beckhem
                </p>
                <span className="font-normal text-[darkgrey] text-[15px] sm:block hidden">
                  {title}
                </span>
                
              </div>
            </div>
            <div
              className={`${
                menu ? "block" : "hidden"
              } absolute    bg-white top-[120%] right-0 shadow-lg py-4 w-[240px] px-4`}
            >
             
              {routes.map((route) => (
                <NavLink
                  onClick={()=>setMenu(!menu)}
                  key={route.path}
                  to={route.path}
                  className=" flex gap-x-3 items-center  py-2 px-4 transition-colors duration-300 hover:bg-gray-200"
                  
                >
                  {route.icon}
                  <span className="text-[16px] text-[grey]">{route.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
