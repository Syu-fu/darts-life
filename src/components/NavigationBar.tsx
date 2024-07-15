import React from "react";
import { Link } from "react-router-dom";
import { GiDart } from "react-icons/gi";
import { SlGraph } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";

const NavigationBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around bg-gray-800 text-white p-4 h-12">
      <Link to="/">
        <GiDart />
      </Link>
      <Link to="/data">
        <SlGraph />
      </Link>
      <Link to="/settings">
        <IoIosSettings />
      </Link>
    </nav>
  );
};

export default NavigationBar;
