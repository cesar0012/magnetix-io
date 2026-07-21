"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOCALES } from "@/lib/i18n/client";
import { useLocale, useT } from "@/components/language-provider";

const LABELS: Record<string, string> = {
  es: "Español",
  en: "English",
};

export function LanguageSelector({ dropUp = true }: { dropUp?: boolean }) {
  const t = useT();
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  async function change(next: string) {
    setOpen(false);
    if (next === locale || saving) return;
    setSaving(true);
    try {
      await fetch("/api/settings/locale", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ locale: next }),
      });
    } catch {
      // ignore — cookie may still be set
    }
    setSaving(false);
    router.refresh();
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={t("lang.label")}
        title={t("lang.label")}
        disabled={saving}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded p-1 text-text-3 hover:text-foreground transition-colors disabled:opacity-40"
      >
        <Globe className="h-4 w-4" strokeWidth={1.7} />
        <span className="text-[11px] font-medium uppercase">{locale}</span>
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            className={cn(
              "absolute left-0 z-50 w-36 rounded-lg border border-slate-800 bg-popover p-1 shadow-lg",
              dropUp ? "bottom-full mb-1" : "top-full mt-1"
            )}
          >
            {LOCALES.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => void change(l)}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-2.5 py-1.5 text-sm transition-colors",
                  l === locale
                    ? "bg-brand-tint font-medium text-brand-text"
                    : "text-text-2 hover:bg-accent hover:text-foreground"
                )}
              >
                {LABELS[l]}
                {l === locale && <Check className="h-3.5 w-3.5" strokeWidth={2} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}