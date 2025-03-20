import { IoMenuOutline, IoMoonOutline, IoSearchOutline, IoSunnyOutline } from "react-icons/io5";
import useToggle from "../../utils/useToggle";
import { CardsStatistic } from "../CardsStatistic";

import "/public/styles/sidebar.css";
import { InfoStatisticAdm } from "../InfoStatisticAdm";
import { ListUsers } from "../ListUsers";

export const Main = () => {
  const { isActive: menuActive, toggle: toggleMenu } = useToggle(false);
  return (
    <div className={`main ${menuActive ? "active" : ""}`}>
      <div className="topbar">
        <div className="toggle cursor-pointer" onClick={toggleMenu}>
          <IoMenuOutline size={32} />
        </div>
        <div className="search">
          <label>
            <input type="text" placeholder="Pesquise aqui" />
            <IoSearchOutline className="icon-search" size={20} />
          </label>
        </div>

        <div className="relative inline-block w-14 h-7">
          <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-yellow-500">
            <IoSunnyOutline size={16} />
          </div>

          <input
            defaultChecked
            id="switch-component-1"
            type="checkbox"
            className="peer appearance-none w-14 h-7 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
          />

          <label
            htmlFor="switch-component-1"
            className="absolute top-0 left-0 w-7 h-7 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-7 peer-checked:border-slate-800 cursor-pointer"
          ></label>

          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-slate-300 peer-checked:text-white">
            <IoMoonOutline size={16} />
          </div>
        </div>

        <div className="user">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="Image User"
          />
        </div>
      </div>
      <CardsStatistic />
      <ListUsers />
      <InfoStatisticAdm />
    </div>
  );
};
