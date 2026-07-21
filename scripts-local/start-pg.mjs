import EmbeddedPostgres from "embedded-postgres";

const PORT = 5432;
const USER = "postgres";
const PASSWORD = "postgres";
const DATA_DIR =
  "C:\\Users\\Usuario\\AppData\\Local\\Temp\\kilo\\vocero-pg";

const pg = new EmbeddedPostgres({
  databaseDir: DATA_DIR,
  user: USER,
  password: PASSWORD,
  port: PORT,
  persistent: false,
});

async function main() {
  console.log("[pg] iniciando Postgres embebido en puerto", PORT);
  await pg.initialise();
  await pg.start();
  console.log("[pg] corriendo. creando base de datos 'vocero'...");
  try {
    await pg.createDatabase("vocero");
    console.log("[pg] base de datos 'vocero' lista");
  } catch (e) {
    console.log(
      "[pg] (base ya existe o error ignorable):",
      e && e.message ? e.message : e
    );
  }
  console.log("[pg] LISTO. Deja esta ventana abierta.");
}

main().catch((e) => {
  console.error("[pg] ERROR:", e);
  process.exit(1);
});
