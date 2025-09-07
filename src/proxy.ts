import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";

const supportedLanguages = ['en', 'de'];

function isInternalPath(path: string): boolean {
  return path == "favicon.ico" || path.startsWith("/_next");
}

export function proxy(request: NextRequest) {
  const requestedPath = request.nextUrl.pathname;
  if (isInternalPath(requestedPath)) {
    return;
  }

  const pathContainsLocale = supportedLanguages.some(l => requestedPath.startsWith(`/${l}`));
  if (pathContainsLocale) {
    return;
  }

  const negotiator = new Negotiator({
    headers: { 'accept-language': request.headers.get('accept-language') ?? undefined },
  });

  const bestLanguage = negotiator.language(supportedLanguages);

  request.nextUrl.pathname = `/${bestLanguage}/${requestedPath}`;
  return NextResponse.redirect(request.nextUrl);
}
