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
  },
  {
    icon: React.createElement(IoNewspaperOutline, { size: 20 }),
    title: "Feed",
  },
  {
    icon: React.createElement(IoChatbubbleOutline, { size: 20 }),
    title: "Mensagem",
  },
  { icon: React.createElement(IoHelpBuoyOutline, { size: 20 }), title: "Quiz" },
  {
    icon: React.createElement(IoTrophyOutline, { size: 20 }),
    title: "Ranking",
  },
  {
    icon: React.createElement(IoSettingsOutline, { size: 20 }),
    title: "Configurações",
  },
  { icon: React.createElement(IoLogOutOutline, { size: 20 }), title: "Sair" },
];
