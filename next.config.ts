import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // standalone es para la imagen Docker (Linux). En Windows el trazado crea
  // symlinks que requieren permisos elevados, así que ahí se omite.
  output: process.platform === "win32" ? undefined : "standalone",
  // better-sqlite3 es un addon nativo (C++): no se puede bundlear, se carga
  // desde node_modules en runtime. postgres ya no se usa (migración a SQLite).
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
