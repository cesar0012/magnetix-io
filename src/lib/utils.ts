import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Iniciales (máx 2) para el avatar de un contacto. */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0]?.[0] ?? "";
  const second = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + second).toUpperCase() || "?";
}

/* Paleta desaturada (AV): sobria pero con suficiente luminosidad sobre fondo oscuro. */
const AVATAR_COLORS = [
  "bg-[#6b8aa8]", // steel
  "bg-[#74849a]", // slate
  "bg-[#7fa08d]", // sage
  "bg-[#a89478]", // taupe
  "bg-[#b88a80]", // clay
  "bg-[#8a82a0]", // dusk
  "bg-[#5fa09a]", // teal
  "bg-[#7b8595]", // graphite
] as const;

/** Color estable por contacto: hash simple del id/teléfono → misma clase siempre. */
export function avatarColor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return AVATAR_COLORS[hash % AVATAR_COLORS.length] ?? AVATAR_COLORS[0];
}

export function formatPhone(phone: string): string {
  return `+${phone}`;
}
