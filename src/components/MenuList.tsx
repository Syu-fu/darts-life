import React from "react";
import { Link } from "react-router-dom";

type MenuListProps = {
  title: string;
  items: { to: string; label: string }[];
};

const MenuList: React.FC<MenuListProps> = ({ title, items }) => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-6 mb-2">{title}</h2>
      <div className="flex flex-col h-full w-full pt-4">
        <ul className="flex flex-col space-y-2 w-full">
          {items.map((item) => (
            <li key={item.to} className="w-full">
              <div className="w-full">
                <Link
                  to={item.to}
                  aria-label={item.label}
                  className="bg-gray-800 text-white py-4 w-5/6 block text-center rounded hover:bg-gray-700 transition duration-200 mx-auto"
                >
                  {item.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
