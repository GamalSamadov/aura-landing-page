import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation helpers — links keep the active language.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
