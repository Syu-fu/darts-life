import {
  saveZeroOneBullStats,
  getZeroOneBullHitsForDate,
} from "../services/zeroOneBullDB";

export const calculateZeroOneBullStats = async (date: string) => {
  const hits = await getZeroOneBullHitsForDate(date);

  const stats = {
    bull_count: hits.oneHits,
    low_ton_count: hits.twoHits,
    hat_count: hits.threeHits,
  };

  return stats;
};

export const calculateAndSaveZeroOneBullStats = async (date: string) => {
  const stats = await calculateZeroOneBullStats(date);
  await saveZeroOneBullStats(date, stats);
};
