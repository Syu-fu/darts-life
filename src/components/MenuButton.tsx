import React from "react";
import { Link } from "react-router-dom";

type MenuButtonProps = {
  to: string;
  label: string;
};

const MenuButton: React.FC<MenuButtonProps> = ({ to, label }) => {
  return (
    <Link
      to={to}
      aria-label={label}
      className="bg-gray-800 text-white py-4 w-5/6 block text-center rounded hover:bg-gray-700 transition duration-200 mx-auto"
    >
      {label}
    </Link>
  );
};

export default MenuButton;
