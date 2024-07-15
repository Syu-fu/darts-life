import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";

let db: SQLiteDBConnection;

const initializeDatabase = async () => {
  try {
    const sqlite = new SQLiteConnection(CapacitorSQLite);
    db = await sqlite.createConnection(
      "darts-life",
      false,
      "no-encryption",
      1,
      false,
    );

    await db.open();

    await db.execute(`
      CREATE TABLE IF NOT EXISTS zero_one_bull (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL,
        round INTEGER NOT NULL,
        hits INTEGER NOT NULL
      );
    `);

    await db.execute(`
    CREATE TABLE IF NOT EXISTS zero_one_bull_stats (
      date TEXT PRIMARY KEY,
      bull_count INTEGER,
      low_ton_count INTEGER,
      hat_count INTEGER,
      ton_80_count INTEGER
    );
  `);
  } catch (err) {
    console.error("Failed to initialize database", err);
  }
};

initializeDatabase();

export const getDatabase = () => db;
