import { IoMenuOutline } from "react-icons/io5";
import { SearchTop } from "../SearchTop";
import { SwitchTheme } from "../SwitchTheme";
import { FC } from "react";

interface TopbarProps {
  toggleMenu: () => void;
}

export const Topbar: FC<TopbarProps> = ({ toggleMenu }) => {
  return (
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
  );
};
