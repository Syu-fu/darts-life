import React, { useState, useEffect } from "react";
import PracticeLayout from "../components/PracticeLayout";
import { calculateBullRate } from "../utils/calculateBullRate";
import { calculateZeroOneStats } from "../utils/calculateZeroOneStats";
import { calculateBullRoundRate } from "../utils/calculateBullRoundRate";
import {
  getLatestZeroOneBullRound,
  saveZeroOneBullRoundHits,
  getZeroOneBullHitsCountToday,
} from "../services/zeroOneBullDB";

const ZeroOneBullPage: React.FC = () => {
  const [round, setRound] = useState(1);
  const [stats, setStats] = useState<{ menu: string; value: string }[]>([]);

  const target = "Bull";
  const buttons = [0, 1, 2, 3];

  useEffect(() => {
    const initializeRound = async () => {
      const latestRound = await getLatestZeroOneBullRound();
      setRound(latestRound + 1);
    };
    initializeRound();
  }, []);

  useEffect(() => {
    const initializeRound = async () => {
      const latestRound = await getLatestZeroOneBullRound();
      setRound(latestRound + 1);
      await updateStats();
    };
    initializeRound();
  }, []);

  const handleHit = async (hit: number) => {
    await saveZeroOneBullRoundHits(round, hit);
    await updateStats();
  };

  const updateStats = async () => {
    const todayHits = await getZeroOneBullHitsCountToday();
    const oneHits = Number(todayHits.oneHits);
    const twoHits = Number(todayHits.twoHits);
    const threeHits = Number(todayHits.threeHits);
    const rounds = Number(todayHits.rounds);
    const bullHits = oneHits + twoHits * 2 + threeHits * 3;
    const lowTonRate = (twoHits / rounds) * 100;
    const hatRate = (threeHits / rounds) * 100;
    const bullRate = calculateBullRate(bullHits, rounds);
    const bullRoundRate = calculateBullRoundRate(
      todayHits.oneHits,
      todayHits.twoHits,
      todayHits.threeHits,
      todayHits.rounds,
    );
    const stats = calculateZeroOneStats(bullHits, todayHits.rounds);

    setRound(rounds + 1);

    setStats([
      { menu: "Bull Hit", value: bullHits.toString() },
      { menu: "Bull Rate", value: `${bullRate.toFixed(1)}%` },
      { menu: "LowTon", value: twoHits.toString() },
      { menu: "HatTrick", value: threeHits.toString() },
      { menu: "LowTon Rate", value: `${lowTonRate.toFixed(1)}%` },
      { menu: "Hat Rate", value: `${hatRate.toFixed(1)}%` },
      { menu: "Bull Round Rate", value: `${bullRoundRate.toFixed(1)}%` },
      { menu: "Stats", value: stats.toFixed(1) },
    ]);
  };

  return (
    <PracticeLayout
      target={target}
      round={round}
      buttons={buttons}
      stats={stats}
      onHit={handleHit}
    />
  );
};

export default ZeroOneBullPage;
