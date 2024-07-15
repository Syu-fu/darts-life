import React from "react";
import TargetDisplay from "./TargetDisplay";
import RoundDisplay from "./RoundDisplay";
import ButtonDisplay from "./ButtonDisplay";
import InfoDisplay from "./InfoDisplay";

type PracticeLayoutProps = {
  target: string;
  round: number;
  buttons: number[];
  stats: { menu: string; value: number | string }[];
  onHit: (hit: number) => void;
};

const PracticeLayout: React.FC<PracticeLayoutProps> = ({
  target,
  round,
  buttons,
  stats,
  onHit,
}) => {
  return (
    <div className="flex flex-col  bg-gray-100">
      <div className="flex flex-col flex-grow justify-between items-center p-4 h-full">
        <div className="w-full flex justify-center mb-4">
          <TargetDisplay target={target} />
        </div>
        <div className="w-full flex justify-center mb-4">
          <RoundDisplay round={round} />
        </div>
        <div className="w-full flex justify-center mb-4 flex-grow">
          <ButtonDisplay buttons={buttons} onHit={onHit} />
        </div>
        <div className="w-full flex justify-center">
          <InfoDisplay stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default PracticeLayout;
