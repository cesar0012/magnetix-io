/**
 * CLI del seed demo: `pnpm seed:demo` (local) o `node seed-demo.mjs` dentro
 * del contenedor. Acepta --force para recargar aunque haya datos.
 * Se bundlea con esbuild (alias @ → ./src).
 */
import { readFileSync } from "node:fs";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "@/lib/db/schema";
import { seedDemo, isDomainEmpty } from "@/server/seed/demo";

function loadEnvVar(name: string): string | undefined {
  if (process.env[name]) return process.env[name];
  try {
    const env = readFileSync(".env", "utf8");
    const line = env.split(/\r?\n/).find((l) => l.startsWith(`${name}=`));
    return line?.slice(name.length + 1).trim();
  } catch {
    return undefined;
  }
}

const url = loadEnvVar("DATABASE_URL") || "file:./data/db.sqlite";
const filePath = url.replace(/^file:/, "");

const client = createClient({ url });
const db = drizzle(client, { schema });

const orgs = await db.select().from(schema.organization).limit(1);
const org = orgs[0];
if (!org) {
  console.error(
    "[seed] No hay organización: regístrate primero en la app y vuelve a correr el seed"
  );
  client.close();
  process.exit(1);
}

const force = process.argv.includes("--force");
if (!force && !(await isDomainEmpty(db, org.id))) {
  console.error(
    "[seed] La organización ya tiene datos. Usa --force para recargar la demo."
  );
  client.close();
  process.exit(1);
}

const result = await seedDemo(db, org.id);
console.log(
  `[seed] Ferretería El Martillo cargada: ${result.contacts} contactos, ${result.kbEntries} entradas de KB, 1 corrida de ejemplo`
);
client.close();
process.exit(0);
