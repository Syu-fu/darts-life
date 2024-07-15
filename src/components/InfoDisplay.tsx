import React from "react";

type InfoDisplayProps = {
  stats: { menu: string; value: number | string }[];
};

const InfoDisplay: React.FC<InfoDisplayProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          <div className="text-lg">{stat.menu}</div>
          <div className="text-2xl font-bold">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoDisplay;
