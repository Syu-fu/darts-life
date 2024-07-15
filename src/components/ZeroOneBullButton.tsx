import React from "react";

type ZeroOneBullButtonProps = {
  recordRound: (hitCount: number) => void;
};

const ZeroOneBullButton: React.FC<ZeroOneBullButtonProps> = ({
  recordRound,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {[0, 1, 2, 3].map((i) => (
        <button
          key={i}
          className="bg-gray-300 p-4 rounded text-lg font-semibold"
          onClick={() => recordRound(i)}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default ZeroOneBullButton;
