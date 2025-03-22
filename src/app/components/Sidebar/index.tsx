"use client";

import useToggle from "../../utils/useToggle";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoSettingsOutline,
  IoHelpBuoyOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoPersonCircleOutline,
  IoTrophyOutline,
} from "react-icons/io5";

import "/public/styles/sidebar.css";

export const SideBar = () => {
  const { isActive: menuActive } = useToggle(false);
  return (
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
                <IoTrophyOutline size={20} />
              </span>
              <span className="title">Ranking</span>
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
        </ul>
      </div>
    </div>
  );
};
