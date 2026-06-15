import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16 renamed `middleware` to `proxy`. next-intl's request handler
// works the same way — we just expose it under the `proxy` convention.
export const proxy = createMiddleware(routing);

export const config = {
  // Run on every path except API routes, Next internals, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
