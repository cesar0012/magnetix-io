"use client";

import { createContext, useContext, type ReactNode } from "react";
import { dictionaries, type DictKey } from "@/lib/i18n/dict";
import type { Locale } from "@/lib/i18n/client";

type TFn = (key: DictKey) => string;

const LanguageContext = createContext<{ locale: Locale; t: TFn }>({
  locale: "es",
  t: (key) => dictionaries.es[key] ?? key,
});

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const dict = dictionaries[locale] ?? dictionaries.es;
  const t: TFn = (key) => dict[key] ?? dictionaries.es[key] ?? key;
  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  return useContext(LanguageContext).t;
}

export function useLocale() {
  return useContext(LanguageContext).locale;
}