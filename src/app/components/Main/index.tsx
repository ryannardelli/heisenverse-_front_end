import useToggle from "../../utils/useToggle";
import { CardsStatistic } from "../CardsStatistic";

import "/public/styles/sidebar.css";
import { InfoStatisticAdm } from "../InfoStatisticAdm";
import { ListUsers } from "../ListUsers";
import { GraphBox } from "../GraphBox";

import { ReactNode } from "react";
import { Topbar } from "../Topbar";

export const Main = ({ children }: { children: ReactNode }) => {
  const { isActive: menuActive, toggle: toggleMenu} = useToggle(false);
  
  return (
    <div className={`main ${menuActive ? "active" : ""} dark:bg-dark`}>
      <Topbar toggleMenu={toggleMenu} />

      <div>
        {children}
      </div>

      <CardsStatistic />
      <GraphBox />
      <ListUsers />
      <InfoStatisticAdm />
    </div>
  );
};
