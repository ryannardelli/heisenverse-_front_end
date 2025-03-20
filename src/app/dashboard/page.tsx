"use client";

import useToggle from "../utils/useToggle";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoSettingsOutline,
  IoHelpBuoyOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoMenuOutline,
  IoSearchOutline,
  IoMoonOutline,
  IoSunnyOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

import "/public/styles/sidebar.css";

export default function Dashboard() {
  // Usando hook sem conflito
  const { isActive: menuActive, toggle: toggleMenu } = useToggle(false);

  return (
    <>
      <div className={`container-dashboard ${menuActive ? "active" : ""}`}>
        <div className={`navigation ${menuActive ? "active" : ""}`}>
          <ul>
            <li>
              <a>
                <span className="icon">
                  <IoPersonCircleOutline size={24} />
                </span>
                <div className="flex flex-col ml-2">
                  <span className="text-sm font-medium">Ryan Nardelli</span>
                  <span className="text-xs text-gray-400">Admin</span>
                </div>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoHomeOutline size={20} />
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoNewspaperOutline size={20} />
                </span>
                <span className="title">Feed</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoChatbubbleOutline size={20} />
                </span>
                <span className="title">Mensagem</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoHelpBuoyOutline size={20} />
                </span>
                <span className="title">Quiz</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoSettingsOutline size={20} />
                </span>
                <span className="title">Configurações</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="icon">
                  <IoLogOutOutline size={20} />
                </span>
                <span className="title">Sair</span>
              </a>
            </li>

            {/* Toggle Light/Dark */}
            <div className="relative inline-block w-14 h-7 mt-10 ml-4">
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
          </ul>
        </div>
      </div>

      {/* MAIN */}
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
    </>
  );
}