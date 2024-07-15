import { describe, it, expect } from "vitest";
import { calculateZeroOneStats } from "./calculateZeroOneStats";

describe("calculateZeroOneStats", () => {
  it("should return correct stats for valid inputs", () => {
    const bullHits = 15;
    const rounds = 5;
    const expected = 150;

    const result = calculateZeroOneStats(bullHits, rounds);

    expect(result).toBeCloseTo(expected);
  });

  it("should return correct stats for valid inputs2", () => {
    const bullHits = 5;
    const rounds = 5;
    const expected = 70;

    const result = calculateZeroOneStats(bullHits, rounds);

    expect(result).toBeCloseTo(expected);
  });

  it("should return 0 when rounds are 0", () => {
    const bullHits = 0;
    const rounds = 0;

    const result = calculateZeroOneStats(bullHits, rounds);

    expect(result).toBe(0);
  });

  it("should handle bullHits of 0 correctly", () => {
    const bullHits = 0;
    const rounds = 5;
    const expected = 30;

    const result = calculateZeroOneStats(bullHits, rounds);

    expect(result).toBeCloseTo(expected);
  });
});
