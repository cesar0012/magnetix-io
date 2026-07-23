import Database from "better-sqlite3";
import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { getEnv } from "@/lib/env";
import * as schema from "./schema";

/**
 * Cliente de BD único por proceso. En dev, Next recarga módulos: se cachea en
 * globalThis para no reabrir el archivo SQLite (y para no violar el singleton
 * de better-sqlite3 sobre el mismo handle).
 */
type SqliteClient = Database.Database;

const globalForDb = globalThis as unknown as {
  __voceroSqlite?: SqliteClient;
};

function resolveFilePath(url: string): string {
  return url.replace(/^file:/, "");
}

function createClient(): SqliteClient {
  const env = getEnv();
  const filePath = resolveFilePath(env.DATABASE_URL);
  const sqlite = new Database(filePath);
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");
  sqlite.pragma("busy_timeout = 5000");
  return sqlite;
}

function getSqlite(): SqliteClient {
  if (!globalForDb.__voceroSqlite) {
    globalForDb.__voceroSqlite = createClient();
  }
  return globalForDb.__voceroSqlite;
}

let cachedDb: BetterSQLite3Database<typeof schema> | null = null;

export function getDb() {
  if (!cachedDb) cachedDb = drizzle(getSqlite(), { schema });
  return cachedDb;
}

export function getSql() {
  return getSqlite();
}

export { schema };
