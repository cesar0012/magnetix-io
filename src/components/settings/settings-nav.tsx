"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useT } from "@/components/language-provider";
import type { DictKey } from "@/lib/i18n/dict";

const TABS = [
  { href: "/settings/whatsapp", label: "settings.whatsapp" as const },
  { href: "/settings/branding", label: "settings.branding" as const },
  { href: "/settings/templates", label: "settings.templates" as const },
  { href: "/settings/team", label: "settings.team" as const },
] as const;

export function SettingsNav() {
  const pathname = usePathname();
  const t = useT();
  return (
    <nav className="w-44 shrink-0 space-y-1 border-r p-3">
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={cn(
            "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
            pathname.startsWith(tab.href)
              ? "bg-brand-tint text-brand-text"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          )}
        >
          {t(tab.label as DictKey)}
        </Link>
      ))}
    </nav>
  );
}
