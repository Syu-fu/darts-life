export const calculateBullRate = (bullHits: number, rounds: number): number => {
  return rounds > 0 ? (bullHits / (rounds * 3)) * 100 : 0;
};
