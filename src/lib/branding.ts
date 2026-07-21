/**
 * White-label: nombre del CRM + acento por organización.
 * Presets del sistema Magnetix (tema oscuro): soft/tint se derivan con
 * opacidad sobre superficies oscuras; text es una versión clara del acento.
 */

export type AccentSet = {
  accent: string;
  hover: string;
  soft: string;
  tint: string;
  text: string;
};

export type Branding = {
  name: string;
  accent: string; // hex del acento base elegido
};

export const DEFAULT_BRANDING: Branding = { name: "Magnetix IO", accent: "#3f5972" };

/** Presets del handoff (valores exactos, derivados para tema oscuro). */
export const ACCENT_PRESETS: Record<string, { label: string; set: AccentSet }> = {
  "#3f5972": {
    label: "Azul acero",
    set: { accent: "#3f5972", hover: "#4a6884", soft: "rgba(63, 89, 114, 0.15)", tint: "rgba(63, 89, 114, 0.08)", text: "#7da3c9" },
  },
  "#4b5563": {
    label: "Grafito",
    set: { accent: "#4b5563", hover: "#5e6a78", soft: "rgba(75, 85, 99, 0.15)", tint: "rgba(75, 85, 99, 0.08)", text: "#9ca6b4" },
  },
  "#3f6b66": {
    label: "Verde apagado",
    set: { accent: "#3f6b66", hover: "#4d8580", soft: "rgba(63, 107, 102, 0.15)", tint: "rgba(63, 107, 102, 0.08)", text: "#7db0a9" },
  },
  "#5f5470": {
    label: "Ciruela",
    set: { accent: "#5f5470", hover: "#736880", soft: "rgba(95, 84, 112, 0.15)", tint: "rgba(95, 84, 112, 0.08)", text: "#a89bb8" },
  },
};

type Rgb = { r: number; g: number; b: number };

export function isValidHex(hex: string): boolean {
  return /^#[0-9a-fA-F]{6}$/.test(hex);
}

function hexToRgb(hex: string): Rgb {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

function rgbToHex({ r, g, b }: Rgb): string {
  const c = (n: number) =>
    Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`;
}

/** Mezcla `color` hacia `target` en proporción t (0..1). */
function mix(color: Rgb, target: Rgb, t: number): Rgb {
  return {
    r: color.r + (target.r - color.r) * t,
    g: color.g + (target.g - color.g) * t,
    b: color.b + (target.b - color.b) * t,
  };
}

const WHITE: Rgb = { r: 255, g: 255, b: 255 };
const BLACK: Rgb = { r: 0, g: 0, b: 0 };

/** Luminancia relativa (WCAG). */
function luminance({ r, g, b }: Rgb): number {
  const f = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/**
 * Set completo para cualquier acento: preset exacto si existe; si no, se
 * deriva. Un base demasiado claro (texto blanco ilegible encima) se oscurece
 * hasta contraste ≥ 3:1 con blanco. En tema oscuro, hover va más claro y
 * soft/tint usan opacidad sobre la superficie oscura.
 */
export function resolveAccentSet(accentHex: string): AccentSet {
  const preset = ACCENT_PRESETS[accentHex.toLowerCase()];
  if (preset) return preset.set;
  if (!isValidHex(accentHex)) return ACCENT_PRESETS["#3f5972"]!.set;

  let base = hexToRgb(accentHex.toLowerCase());
  // contraste con blanco = (1.05) / (L + 0.05); exigir ≥ 3
  while (1.05 / (luminance(base) + 0.05) < 3 && luminance(base) > 0.005) {
    base = mix(base, BLACK, 0.12);
  }
  const { r, g, b } = base;
  return {
    accent: rgbToHex(base),
    hover: rgbToHex(mix(base, WHITE, 0.15)),
    soft: `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.15)`,
    tint: `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, 0.08)`,
    text: rgbToHex(mix(base, WHITE, 0.45)),
  };
}

/** CSS de variables para inyectar en el <head> (SSR, sin flash). */
export function accentCssVariables(accentHex: string): string {
  const s = resolveAccentSet(accentHex);
  return `:root{--accent:${s.accent};--accent-hover:${s.hover};--accent-soft:${s.soft};--accent-tint:${s.tint};--accent-text:${s.text};}`;
}

export function normalizeBranding(input: Partial<Branding> | null): Branding {
  const name = input?.name?.trim().slice(0, 30) || DEFAULT_BRANDING.name;
  const accent =
    input?.accent && isValidHex(input.accent)
      ? input.accent.toLowerCase()
      : DEFAULT_BRANDING.accent;
  return { name, accent };
}