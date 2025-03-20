import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import useToggle from "../../utils/useToggle";

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

        <div className="user">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
            alt="Image User"
          />
        </div>
      </div>
    </div>
  );
};
