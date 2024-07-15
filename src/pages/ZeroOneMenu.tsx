import React from "react";
import MenuList from "../components/MenuList";

const items = [
  { to: "/practice/01/Bull", label: "Bull" },
  { to: "/practice/01/T20", label: "T20" },
];

const ZeroOneMenu: React.FC = () => {
  return (
    <div className="sub-menu">
      <nav>
        <MenuList title="01Menu" items={items} />
      </nav>
    </div>
  );
};

export default ZeroOneMenu;
