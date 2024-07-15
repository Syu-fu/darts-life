import { describe, it, expect } from "vitest";
import { calculateBullRate } from "./calculateBullRate";

describe("calculateBullRate", () => {
  it("should return the correct bull rate for valid inputs", () => {
    const bullHits = 15;
    const rounds = 5;

    const expected = 100;

    const result = calculateBullRate(bullHits, rounds);

    expect(result).toBeCloseTo(expected);
  });

  it("should return 0 when rounds are 0", () => {
    const bullHits = 0;
    const rounds = 0;

    const expected = 0;

    const result = calculateBullRate(bullHits, rounds);

    expect(result).toBe(expected);
  });

  it("should handle cases with zero bull hits correctly", () => {
    const bullHits = 0;
    const rounds = 5;

    const expected = 0;

    const result = calculateBullRate(bullHits, rounds);

    expect(result).toBeCloseTo(expected);
  });
});
