import {
  saveZeroOneBullStats,
  getZeroOneBullHitsForDate,
} from "../services/zeroOneBullDB";

export const calculateZeroOneBullStats = async (date: string) => {
  const hits = await getZeroOneBullHitsForDate(date);

  const bullCount = hits.filter((hit) => hit === 3).length;
  const lowTonCount = hits.filter((hit) => hit === 2).length;
  const hatCount = hits.filter((hit) => hit === 1).length;

  const stats = {
    bull_count: bullCount,
    low_ton_count: lowTonCount,
    hat_count: hatCount,
  };

  return stats;
};

export const calculateAndSaveZeroOneBullStats = async (date: string) => {
  const stats = await calculateZeroOneBullStats(date);
  await saveZeroOneBullStats(date, stats);
};
