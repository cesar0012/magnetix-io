import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // standalone es para la imagen Docker (Linux). En Windows el trazado crea
  // symlinks que requieren permisos elevados, así que ahí se omite.
  output: process.platform === "win32" ? undefined : "standalone",
  // @libsql/client es el driver SQLite (async, soporta transactions con Promises).
  serverExternalPackages: ["@libsql/client"],
};

export default nextConfig;
