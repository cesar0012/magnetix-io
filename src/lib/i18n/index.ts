import { cookies } from "next/headers";
import { dictionaries, type DictKey, type Dictionary } from "./dict";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALES,
  LOCALE_MAX_AGE,
  type Locale,
} from "./client";

export { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, LOCALE_MAX_AGE };
export type { DictKey, Dictionary, Locale };

const localeSet = new Set<string>(LOCALES);

/** Lee el locale desde la cookie (server-side). */
export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  return localeSet.has(raw ?? "") ? (raw as Locale) : DEFAULT_LOCALE;
}

/** Traduce una clave al locale dado. */
export function t(locale: Locale, key: DictKey): string {
  const dict: Dictionary = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  return dict[key] ?? dictionaries[DEFAULT_LOCALE][key] ?? key;
}