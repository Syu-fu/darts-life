import React from "react";
import MenuList from "../components/MenuList";

const items = [
  { to: "/practice/cricket/15", label: "15" },
  { to: "/practice/cricket/16", label: "16" },
  { to: "/practice/cricket/17", label: "17" },
  { to: "/practice/cricket/18", label: "18" },
  { to: "/practice/cricket/19", label: "19" },
  { to: "/practice/cricket/20", label: "20" },
  { to: "/practice/cricket/Bull", label: "Bull" },
];

const CricketMenu: React.FC = () => {
  return (
    <div className="sub-menu">
      <nav>
        <MenuList title="CricketMenu" items={items} />
      </nav>
    </div>
  );
};

export default CricketMenu;
