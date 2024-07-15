import React from "react";

type RecentRoundsProps = {
  rounds: number[];
};

const RecentRounds: React.FC<RecentRoundsProps> = ({ rounds }) => {
  return (
    <div>
      <h2>Recent Rounds</h2>
      <ul>
        {rounds.slice(-8).map((hit, index) => (
          <li key={index}>
            Round {rounds.length - 8 + index + 1}: {hit} hits
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentRounds;
