import React from "react";

type HitButtonProps = {
  value: number;
  onClick: (value: number) => void;
};

const HitButton: React.FC<HitButtonProps> = ({ value, onClick }) => {
  return (
    <button
      className="m-2 p-4 bg-blue-500 text-white rounded"
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default HitButton;
