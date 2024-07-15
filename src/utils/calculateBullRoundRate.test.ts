import { describe, it, expect } from "vitest";
import { calculateBullRoundRate } from "./calculateBullRoundRate";

describe("calculateZeroOneStats", () => {
  it("should return the correct average for valid inputs", () => {
    const oneHits = 5;
    const twoHits = 2;
    const threeHits = 1;
    const rounds = 10;

    const expected = 80;

    const result = calculateBullRoundRate(oneHits, twoHits, threeHits, rounds);

    expect(result).toBeCloseTo(expected);
  });

  it("should return 0 when rounds are 0", () => {
    const oneHits = 0;
    const rounds = 0;
    const twoHits = 0;
    const threeHits = 0;

    const expected = 0;

    const result = calculateBullRoundRate(oneHits, twoHits, threeHits, rounds);

    expect(result).toBe(expected);
  });

  it("should handle cases with zero hits correctly", () => {
    const oneHits = 0;
    const rounds = 5;
    const twoHits = 0;
    const threeHits = 0;

    const expected = 0;

    const result = calculateBullRoundRate(oneHits, twoHits, threeHits, rounds);

    expect(result).toBe(expected);
  });
});
