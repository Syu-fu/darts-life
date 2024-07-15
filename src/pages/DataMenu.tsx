import React from "react";
import MenuList from "../components/MenuList";

const DataMenu: React.FC = () => {
  const menuItems = [
    { to: "/data/01", label: "01" },
    { to: "/data/cricket", label: "Cricket" },
  ];

  return <MenuList title="DataMenu" items={menuItems} />;
};

export default DataMenu;
