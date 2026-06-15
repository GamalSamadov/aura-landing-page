# Aura — landing page

AI personal-finance waitlist landing page. Built with **Next.js 16 (App Router)**,
**TypeScript**, **Tailwind CSS v4**, **next-intl** (EN / UZ / RU) and **next-themes**
(light / dark).

## Run it

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

`npm run build` makes a production build; `npm start` serves it.

## Where to edit things

| You want to change… | Edit this |
| --- | --- |
| All text / copy (3 languages) | `messages/en.json`, `messages/uz.json`, `messages/ru.json` |
| Brand colors, dark mode, radius | `src/app/globals.css` (the `:root` / `.dark` token blocks) |
| Product name, nav links | `src/lib/site.ts` |
| The page sections & order | `src/app/[locale]/page.tsx` + files in `src/components/sections/` |
| Where waitlist emails go | `src/app/api/waitlist/route.ts` |
| Social / OG preview image | `src/app/[locale]/opengraph-image.tsx` |
| SEO title/description per language | the `meta` block in each `messages/*.json` |

All three language files **must have the same keys** — add a key to one, add it to all.

## Add a language

1. Add the code to `locales` in `src/i18n/routing.ts` (e.g. `"kk"`).
2. Copy `messages/en.json` to `messages/kk.json` and translate the values.
3. Add a label in `src/components/ui/LanguageSwitcher.tsx` (`LABELS` / `SHORT`).
4. Add it to `alternates.languages` in `src/app/[locale]/layout.tsx`.

## Theme

Default is the visitor's system preference. Change `defaultTheme` in
`src/app/[locale]/layout.tsx` to `"light"` or `"dark"` to force one.

## Still to provide before launch

- A real logo (replace the SVG in `src/components/ui/Logo.tsx`).
- A backend for the waitlist (database / email service) — wire it in
  `src/app/api/waitlist/route.ts`. Right now it validates and logs the email.
- Real testimonials and final pricing (placeholders live in the message files).
- Your production domain in `src/lib/site.ts` (`url`) so SEO/OG links are absolute.
