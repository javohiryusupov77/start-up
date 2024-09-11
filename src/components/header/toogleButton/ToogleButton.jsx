import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toogleSidebar } from "../../../features/slice/toogleSidebar";

export default function ToogleButton() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toogleSidebar())}
      className="menu flex gap-x-2  items-center font-medium text-[darkslateblue] "
    >
      <FaBars fontSize="24px" className="cursor-pointer " />
    </div>
  );
}
