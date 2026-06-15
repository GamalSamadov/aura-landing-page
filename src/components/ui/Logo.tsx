import { cn } from "@/lib/cn";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="aura-mark" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" style={{ stopColor: "var(--brand)" }} />
            <stop offset="100%" style={{ stopColor: "var(--brand-2)" }} />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="5" fill="url(#aura-mark)" />
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke="url(#aura-mark)"
          strokeWidth="2"
          opacity="0.6"
        />
        <circle
          cx="16"
          cy="16"
          r="14.5"
          stroke="url(#aura-mark)"
          strokeWidth="1.5"
          opacity="0.25"
        />
      </svg>
      {showWordmark && (
        <span className="text-lg font-semibold tracking-tight">Aura</span>
      )}
    </span>
  );
}
