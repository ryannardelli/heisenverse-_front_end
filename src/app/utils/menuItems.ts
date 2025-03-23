import React from "react";

import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoSettingsOutline,
  IoHelpBuoyOutline,
  IoLogOutOutline,
  IoNewspaperOutline,
  IoTrophyOutline,
} from "react-icons/io5";

export const menuItems = [
  {
    icon: React.createElement(IoHomeOutline, { size: 20 }),
    title: "Dashboard",
    link: "/feed"
  },
  {
    icon: React.createElement(IoNewspaperOutline, { size: 20 }),
    title: "Feed",
    link: "/feed"
  },
  {
    icon: React.createElement(IoChatbubbleOutline, { size: 20 }),
    title: "Mensagem",
    link: "/feed"
  },
  { icon: React.createElement(IoHelpBuoyOutline, { size: 20 }), title: "Quiz",  link: "/feed" },
  {
    icon: React.createElement(IoTrophyOutline, { size: 20 }),
    title: "Ranking",
    link: "/feed"
  },
  {
    icon: React.createElement(IoSettingsOutline, { size: 20 }),
    title: "Configurações",
    link: "/feed"
  },
  { icon: React.createElement(IoLogOutOutline, { size: 20 }), title: "Sair", link: "/feed" },
];
