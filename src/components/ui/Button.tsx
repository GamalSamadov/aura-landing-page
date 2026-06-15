import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "brand" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  brand:
    "text-brand-foreground shadow-lg shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5 bg-[linear-gradient(100deg,var(--brand),var(--brand-2))]",
  outline:
    "border border-border bg-card/40 text-foreground hover:bg-muted hover:-translate-y-0.5",
  ghost: "text-foreground hover:bg-muted",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  "aria-label"?: string;
};

export function Button({
  children,
  href,
  variant = "brand",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  ...rest
}: Props) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
