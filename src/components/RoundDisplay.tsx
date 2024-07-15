import React from "react";

type RoundDisplayProps = {
  round: number;
};

const RoundDisplay: React.FC<RoundDisplayProps> = ({ round }) => {
  return (
    <div className="mt-4 mb-4">
      <div className="text-center text-4xl font-bold">Round:</div>
      <div className="text-center text-6xl font-bold">{round}</div>
    </div>
  );
};

export default RoundDisplay;
