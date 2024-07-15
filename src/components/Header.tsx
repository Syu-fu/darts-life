import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white h-18 flex items-center pl-4">
      <button
        onClick={() => navigate(-1)}
        aria-label="Back"
        className="bg-gray-700 p-2 rounded hover:bg-gray-600 transition duration-200 mt-6 mb-2"
      >
        Back
      </button>
    </div>
  );
};

export default Header;
