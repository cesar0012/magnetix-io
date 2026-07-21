import { SettingsNav } from "@/components/settings/settings-nav";
import { getLocale, t } from "@/lib/i18n";

export default async function SettingsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return (
    <div className="flex h-full flex-col">
      <header className="border-b px-6 py-4">
        <h2 className="font-semibold">{t(locale, "settings.title")}</h2>
      </header>
      <div className="flex min-h-0 flex-1">
        <SettingsNav />
        <div className="min-w-0 flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
