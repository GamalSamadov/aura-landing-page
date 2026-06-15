// Central place for product-wide constants. Edit the name, URL, and nav here.
export const site = {
  name: "Aura",
  url: "https://aura.example.com",
  // In-page anchor links. `key` maps to a string in the `nav` namespace.
  nav: [
    { key: "features", href: "#features" },
    { key: "how", href: "#how" },
    { key: "pricing", href: "#pricing" },
    { key: "faq", href: "#faq" },
  ],
  // Primary call-to-action target (the waitlist form in the hero).
  waitlistAnchor: "#waitlist",
} as const;

export type NavItem = (typeof site.nav)[number];
