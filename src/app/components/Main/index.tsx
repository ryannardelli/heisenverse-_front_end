import useToggle from "../../utils/useToggle";
import { CardsStatistic } from "../CardsStatistic";

import "/public/styles/sidebar.css";
import { InfoStatisticAdm } from "../InfoStatisticAdm";
import { ListUsers } from "../ListUsers";
import { GraphBox } from "../GraphBox";
import { SearchTop } from "../SearchTop";
import { SwitchTheme } from "../SwitchTheme";
import { IoMenuOutline } from "react-icons/io5";

export const Main = () => {
  const { isActive: menuActive, toggle: toggleMenu } = useToggle(false);
  return (
      <div className={`main ${menuActive ? "active" : ""} dark:bg-dark`}>

      <div className="topbar">
        <div className="toggle cursor-pointer" onClick={toggleMenu}>
          <IoMenuOutline className="dark:text-light" size={32} />
        </div>

        <SearchTop />
        <SwitchTheme />

        <div className="user">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="Image User"
          />
        </div>
      </div>

      <CardsStatistic />
      <GraphBox />
      <ListUsers />
      <InfoStatisticAdm />
    </div>
  );
};
