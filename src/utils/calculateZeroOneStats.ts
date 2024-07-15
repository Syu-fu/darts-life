export const calculateZeroOneStats = (
  bullHits: number,
  rounds: number,
): number => {
  return rounds > 0
    ? (bullHits * 50 + (3 * rounds - bullHits) * 10) / rounds
    : 0;
};
