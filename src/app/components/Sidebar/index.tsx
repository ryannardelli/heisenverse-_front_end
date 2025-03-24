"use client";

import useToggle from "../../utils/useToggle";
import { SidebarItem } from "../SidebarItem";

import {
  IoPersonCircleOutline,
} from "react-icons/io5";

import "/public/styles/sidebar.css";
import { menuItems } from "@/app/utils/menuItems";
import { useState } from "react";

export const SideBar = () => {
  const { isActive: menuActive } = useToggle(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

          {menuItems.map((item, index) => (
            <SidebarItem
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
