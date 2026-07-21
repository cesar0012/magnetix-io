/** Utilidades de presentación de la bandeja. */

import type { Locale } from "@/lib/i18n/client";
import type { DictKey } from "@/lib/i18n/dict";

export const DATE_LOCALE: Record<Locale, string> = {
  es: "es-MX",
  en: "en-US",
};

export function formatTime(iso: string | null, locale: Locale): string {
  if (!iso) return "";
  const d = new Date(iso);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  const loc = DATE_LOCALE[locale];
  if (sameDay) {
    return d.toLocaleTimeString(loc, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return d.toLocaleDateString(loc, { day: "numeric", month: "short" });
}

export function formatRemaining(ms: number): string {
  const totalMin = Math.floor(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

const MEDIA_KEYS: Record<string, DictKey> = {
  image: "media.image",
  audio: "media.audio",
  video: "media.video",
  document: "media.document",
  sticker: "media.sticker",
  location: "media.location",
  contacts: "media.contacts",
  template: "media.template",
};

export function mediaLabel(
  type: string,
  t: (key: DictKey) => string
): string {
  const key = MEDIA_KEYS[type];
  return key ? t(key) : t("media.unknown");
}

export function previewText(
  preview: string | null,
  t: (key: DictKey) => string
): string {
  if (!preview) return "";
  const key = MEDIA_KEYS[preview];
  return key ? `📎 ${t(key)}` : preview;
}