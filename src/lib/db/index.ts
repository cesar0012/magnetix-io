import { createClient, type Client } from "@libsql/client";
import { drizzle, type LibSQLDatabase } from "drizzle-orm/libsql";
import { getEnv } from "@/lib/env";
import * as schema from "./schema";

/**
 * Cliente de BD único por proceso. En dev, Next recarga módulos: se cachea en
 * globalThis para no abrir múltiples conexiones al mismo archivo SQLite.
 */
const globalForDb = globalThis as unknown as {
  __voceroLibsql?: Client;
};

function resolveUrl(url: string): string {
  // libsql admite "file:" para SQLite local y URLs remotas (turso).
  // libsql admite "file:" para SQLite local y URLs remotas (turso).
  // Drizzle/Estándar libSQL usa "file:path" sin "./" (estilo URI).
  if (url.startsWith("file:")) return url;
  return `file:${url}`;
}

function createLibsqlClient(): Client {
  const env = getEnv();
  return createClient({ url: resolveUrl(env.DATABASE_URL) });
}

function getLibsql(): Client {
  if (!globalForDb.__voceroLibsql) {
    globalForDb.__voceroLibsql = createLibsqlClient();
  }
  return globalForDb.__voceroLibsql;
}

let cachedDb: LibSQLDatabase<typeof schema> | null = null;

export function getDb() {
  if (!cachedDb) cachedDb = drizzle(getLibsql(), { schema });
  return cachedDb;
}

export function getSql() {
  return getLibsql();
}

export { schema };
