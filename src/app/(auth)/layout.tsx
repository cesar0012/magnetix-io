import { DEFAULT_BRANDING } from "@/lib/branding";
import { getBranding } from "@/server/branding";
import { getLocale, t } from "@/lib/i18n";
import { LanguageSelector } from "@/components/language-selector";

export default async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [branding, locale] = await Promise.all([
    getBranding().catch(() => DEFAULT_BRANDING),
    getLocale(),
  ]);
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#0B0F19] p-4">
      <div className="absolute right-4 top-4">
        <LanguageSelector />
      </div>
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-lg font-bold text-white">
            {branding.name.charAt(0).toUpperCase()}
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{branding.name}</h1>
            <p className="text-sm text-text-3">{t(locale, "auth.subtitle")}</p>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
