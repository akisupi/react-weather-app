import logo from "../assets/new_logo_w.png";
import { WiDaySunny } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex justify-between my-auto w-full text-[#e1e2e4]">
      <div className="flex">
        <img
          src={logo}
          alt="moses logo"
          className="h-[20px] w-[20px] rounded-full bg-[#1a1d2e]"
        />
        <p className="text-xs font-bold pt-1 ps-1 text-slate-700">Moses</p>
      </div>
      <div className="flex justify-between">
        <WiDaySunny />
        <GiNightSleep />
      </div>
    </div>
  );
};
export default Header;
