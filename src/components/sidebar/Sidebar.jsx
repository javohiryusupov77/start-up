import "./Global.css";
import { useDispatch } from "react-redux";
import { toogleSidebar } from "../../features/slice/toogleSidebar";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { logo } from "..//..//assets/images";
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Sidebar({ routes, title }) {
  const dispatch = useDispatch();
  const hideMenu = () => {
    if (window.innerWidth < 900) {
      dispatch(toogleSidebar());
    }
  };

  return (
    <div className="bg-white min-900:h-[100vh] min-300:h-[100%] min-300:w-[80%] sm:w-[50%] min-900:w-full py-8 px-4 border-r border-[lavender]">
      <div className="mini-header flex items-center justify-between">
        <h2 className="text-[26px] font-medium text-[darkslateblue] px-4 mx-5  mb-6 flex items-center gap-x-2">
          <div>
            <img className="w-28" src={logo} alt="err" />
          </div>
        </h2>
        <div
          onClick={() => dispatch(toogleSidebar())}
          className="hidemenu mb-6 min-300:block min-900:hidden"
        >
          <FaTimes className="text-[28px] text-[darkslateblue]" />
        </div>
      </div>

      <div className="links w-full flex flex-col gap-4 ">
        {routes &&
          // eslint-disable-next-line react/prop-types
          routes?.map(({ name, path, icon }, index) => (
            <NavLink
              onClick={hideMenu}
              className={({ isActive }) =>
                `font-medium hover:bg-[whitesmoke] px-11 rounded-[10px] items-center flex gap-x-4 text-[15px] leading-6 py-3 ${
                  isActive
                    ? "bg-[whitesmoke] text-blue-500 link"
                    : "border-transparent text-[darkgrey]"
                }`
              }
              key={index}
              to={path}
            >
              <div>{icon}</div>
              <span>{name}</span>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
