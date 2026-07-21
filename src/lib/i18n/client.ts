import { type DictKey, type Dictionary } from "./dict";

export type { DictKey, Dictionary };

export const DEFAULT_LOCALE = "es" as const;
export const LOCALE_COOKIE = "vocero.locale";
export const LOCALES = ["es", "en"] as const;
export const LOCALE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export type Locale = (typeof LOCALES)[number];