import { z } from "zod";
import { NextResponse } from "next/server";
import { parseBody } from "@/lib/api";
import {
  LOCALE_COOKIE,
  LOCALE_MAX_AGE,
  LOCALES,
  getLocale,
} from "@/lib/i18n";

export const dynamic = "force-dynamic";

/** GET público: devuelve el locale actual leído de la cookie. */
export async function GET() {
  const locale = await getLocale();
  return NextResponse.json({ locale, locales: LOCALES });
}

const postSchema = z.object({
  locale: z.enum(LOCALES),
});

/** POST público: setea la cookie de locale. No requiere sesión para que el
 * selector funcione también en la pantalla de login. */
export async function POST(req: Request) {
  const body = await parseBody(req, postSchema);
  if (!body.ok) return body.response;
  const res = NextResponse.json({ ok: true, locale: body.data.locale });
  res.cookies.set(LOCALE_COOKIE, body.data.locale, {
    path: "/",
    maxAge: LOCALE_MAX_AGE,
    sameSite: "lax",
    httpOnly: true,
    secure: false,
  });
  return res;
}