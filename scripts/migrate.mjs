/**
 * Migraciones al ARRANQUE del contenedor (no en pre-deploy: el pre-deploy de
 * plataformas como Coolify corre en el contenedor viejo). Se bundlea con
 * esbuild dentro de la imagen y corre antes de `node server.js`.
 */
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import { mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const url = process.env.DATABASE_URL || "file:./data/db.sqlite";
const filePath = url.replace(/^file:/, "");

const here = path.dirname(fileURLToPath(import.meta.url));
const migrationsFolder =
  process.env.MIGRATIONS_DIR ?? path.join(here, "drizzle");

function ensureDir(p) {
  const dir = path.dirname(p);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

const maxAttempts = 15;
for (let attempt = 1; attempt <= maxAttempts; attempt++) {
  let client = null;
  try {
    ensureDir(filePath);
    client = createClient({ url });
    const db = drizzle(client);
    await migrate(db, { migrationsFolder });
    console.log("[migrate] migraciones aplicadas");
    client.close();
    process.exit(0);
  } catch (err) {
    if (client) client.close();
    if (attempt === maxAttempts) {
      console.error("[migrate] falló tras varios intentos:", err);
      process.exit(1);
    }
    console.log(
      `[migrate] BD no lista (intento ${attempt}/${maxAttempts}), reintento en 2s…`
    );
    await new Promise((r) => setTimeout(r, 2000));
  }
}
