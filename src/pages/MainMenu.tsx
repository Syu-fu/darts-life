import React from "react";
import MenuList from "../components/MenuList";

const MainMenu: React.FC = () => {
  const menuItems = [
    { to: "/submenu/01", label: "01" },
    { to: "/submenu/cricket", label: "Cricket" },
  ];

  return <MenuList title="MainMenu" items={menuItems} />;
};

export default MainMenu;
