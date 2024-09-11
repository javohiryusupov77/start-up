import Sidebar from "../components/sidebar/AdminSidebar";
import Topbar from "../components/header/AdminHeader";
import { Outlet} from "react-router-dom";

import { useSelector } from "react-redux";

export default function Layout() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className="flex w-full justify-between">
      <aside
        className={`${
          isSidebarOpen
            ? "min-300:translate-x-0"
            : "min-900:hidden min-300:translate-x-[-100%]"
        } min-900:sticky min-900:translate-x-0 min-900:top-0 min-900:left-0 min-900:h-[100vh] min-300:h-screen w-full min-900:w-[240px] min-300:absolute z-20   }`}
      >
        <Sidebar />
      </aside>
      <div
        className={`w-full  ${
          !isSidebarOpen ? "min-900:max-w-calc2" : "min-900:max-w-calc1"
        }  `}
      >
        <header className="sticky top-0 right-0 w-full bg-red-400">
          <Topbar />
        </header>
        <main className="w-full bg-[whitesmoke]">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
