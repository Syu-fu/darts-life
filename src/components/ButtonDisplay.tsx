import React from "react";

type ButtonDisplayProps = {
  buttons: number[];
  onHit: (hit: number) => void;
};

const ButtonDisplay: React.FC<ButtonDisplayProps> = ({ buttons, onHit }) => {
  return (
    <div className="flex justify-center space-x-4 w-full mb-20">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => onHit(button)}
          className="bg-gray-800 text-white py-12 px-16 rounded  max-w-xs hover:bg-gray-700 text-6xl text-center text-bold"
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonDisplay;
