import React from "react";

type TargetDisplayProps = {
  target: string;
};

const TargetDisplay: React.FC<TargetDisplayProps> = ({ target }) => {
  return (
    <div className="mt-4 mb-4">
      <div className="text-center text-4xl font-bold">Target: </div>
      <div className="text-center text-6xl font-bold">{target}</div>
    </div>
  );
};

export default TargetDisplay;
