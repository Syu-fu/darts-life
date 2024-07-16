import { getDatabase } from "./database";

export const getLatestZeroOneBullRound = async (): Promise<number> => {
  const db = getDatabase();
  const today = new Date().toISOString().split("T")[0];
  const result = await db.query(
    `SELECT round FROM zero_one_bull WHERE date = ? ORDER BY round DESC LIMIT 1;`,
    [today],
  );
  return result &&
    result.values &&
    result.values.length > 0 &&
    result.values[0].round !== undefined
    ? result.values[0].round
    : 0;
};

export const saveZeroOneBullRoundHits = async (round: number, hit: number) => {
  const db = getDatabase();
  const date = new Date().toISOString().split("T")[0];

  await db.run(
    `INSERT INTO zero_one_bull (date, round, hits) VALUES (?, ?, ?)`,
    [date, round, hit],
  );
};

export const getZeroOneBullHitsCountToday = async () => {
  const db = getDatabase();
  const today = new Date().toISOString().split("T")[0];

  const result = await db.query(
    `
    SELECT 
      SUM(CASE WHEN hits = 0 THEN 1 ELSE 0 END) AS zeroHits,
      SUM(CASE WHEN hits = 1 THEN 1 ELSE 0 END) AS oneHits,
      SUM(CASE WHEN hits = 2 THEN 1 ELSE 0 END) AS twoHits,
      SUM(CASE WHEN hits = 3 THEN 1 ELSE 0 END) AS threeHits,
      MAX(round) AS rounds
    FROM zero_one_bull
    WHERE date = ?
  `,
    [today],
  );

  const { zeroHits, oneHits, twoHits, threeHits, rounds } = (result.values &&
    result.values[0]) || {
    zeroHits: 0,
    oneHits: 0,
    twoHits: 0,
    threeHits: 0,
    rounds: 0,
  };

  return {
    zeroHits,
    oneHits,
    twoHits,
    threeHits,
    rounds,
  };
};

export const getZeroOneBullStats = async (date: string) => {
  const db = getDatabase();
  const result = await db.query(
    `
    SELECT * FROM zero_one_bull_stats WHERE date = ?
  `,
    [date],
  );

  return result.values ? result.values[0] : null;
};

export const saveZeroOneBullStats = async (
  date: string,
  stats: {
    bull_count: number;
    low_ton_count: number;
    hat_count: number;
  },
) => {
  const db = getDatabase();
  await db.run(
    `
    INSERT OR REPLACE INTO zero_one_bull_stats (date, bull_count, low_ton_count, hat_count)
    VALUES (?, ?, ?, ?)
  `,
    [date, stats.bull_count, stats.low_ton_count, stats.hat_count],
  );
};

export const getZeroOneBullHitsForDate = async (date: string) => {
  const db = getDatabase();
  const result = await db.query(
    `
    SELECT 
      SUM(CASE WHEN hits = 0 THEN 1 ELSE 0 END) AS zeroHits,
      SUM(CASE WHEN hits = 1 THEN 1 ELSE 0 END) AS oneHits,
      SUM(CASE WHEN hits = 2 THEN 1 ELSE 0 END) AS twoHits,
      SUM(CASE WHEN hits = 3 THEN 1 ELSE 0 END) AS threeHits
    FROM zero_one_bull 
      WHERE date = ?
  `,
    [date],
  );

  const { zeroHits, oneHits, twoHits, threeHits } = (result.values &&
    result.values[0]) || {
    zeroHits: 0,
    oneHits: 0,
    twoHits: 0,
    threeHits: 0,
  };

  return {
    zeroHits,
    oneHits,
    twoHits,
    threeHits,
  };
};

export const getZeroOneBullHitsCount = async () => {
  const db = getDatabase();

  const result = await db.query(
    `
    SELECT 
      SUM(CASE WHEN hits = 0 THEN 1 ELSE 0 END) AS zeroHits,
      SUM(CASE WHEN hits = 1 THEN 1 ELSE 0 END) AS oneHits,
      SUM(CASE WHEN hits = 2 THEN 1 ELSE 0 END) AS twoHits,
      SUM(CASE WHEN hits = 3 THEN 1 ELSE 0 END) AS threeHits
    FROM zero_one_bull
  `,
  );

  const { zeroHits, oneHits, twoHits, threeHits } = (result.values &&
    result.values[0]) || {
    zeroHits: 0,
    oneHits: 0,
    twoHits: 0,
    threeHits: 0,
  };

  return {
    zeroHits,
    oneHits,
    twoHits,
    threeHits,
  };
};

export const getLatestZeroOneBullStatsDate = async (): Promise<
  string | null
> => {
  const db = getDatabase();
  const result = await db.query(
    `SELECT date FROM zero_one_bull_stats ORDER BY date DESC LIMIT 1;`,
  );

  return result.values && result.values.length > 0
    ? result.values[0].date
    : null;
};

export const getLast14DaysBullCount = async () => {
  const db = getDatabase();
  const result = await db.query(
    `
    SELECT date, (COALESCE(bull_count, 0) + COALESCE(low_ton_count, 0) * 2 + COALESCE(hat_count, 0) * 3) AS total_bull_count 
    FROM zero_one_bull_stats 
    WHERE date >= DATE('now', '-14 days') 
    ORDER BY date ASC;
  `,
  );

  return result.values ? result.values : [];
};
