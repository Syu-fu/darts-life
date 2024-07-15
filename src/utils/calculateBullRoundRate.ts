export const calculateBullRoundRate = (
  oneHits: number,
  twoHits: number,
  threeHits: number,
  rounds: number,
): number => {
  return rounds > 0 ? ((oneHits + twoHits + threeHits) / rounds) * 100 : 0;
};
