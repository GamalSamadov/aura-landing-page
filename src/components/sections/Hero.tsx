import { useTranslations } from "next-intl";
import { Sparkles, TrendingUp } from "lucide-react";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-36">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div
          className="blob"
          style={{ width: 440, height: 440, top: -140, left: -90, background: "var(--brand)" }}
        />
        <div
          className="blob"
          style={{
            width: 480,
            height: 480,
            top: -80,
            right: -110,
            background: "var(--brand-2)",
            animationDelay: "-5s",
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          {t("badge")}
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {t("title")} <span className="text-gradient">{t("titleAccent")}</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {t("subtitle")}
        </p>

        <div id="waitlist" className="mx-auto mt-8 max-w-md">
          <WaitlistForm variant="hero" />
          <p className="mt-3 text-sm text-muted-foreground">{t("trust")}</p>
          <a
            href="#how"
            className="mt-4 inline-block text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            {t("secondary")} →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-5 sm:px-6">
        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  const t = useTranslations("mockup");

  const categories = [
    { key: "dining", amount: "$420", pct: 70 },
    { key: "groceries", amount: "$380", pct: 76 },
    { key: "transport", amount: "$160", pct: 53 },
    { key: "subscriptions", amount: "$96", pct: 80 },
  ] as const;

  const bars = [38, 64, 47, 80, 56, 92, 70];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-x-8 -top-6 bottom-0 -z-10 rounded-[2rem] bg-[linear-gradient(120deg,var(--brand),var(--brand-2))] opacity-20 blur-2xl"
      />
      <div className="glass overflow-hidden rounded-[1.5rem] p-4 shadow-2xl shadow-black/10 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">{t("balance")}</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
              $14,208<span className="text-muted-foreground">.50</span>
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand">
            <Sparkles size={13} />
            {t("aiTag")}
          </span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-[1.3fr_1fr]">
          {/* Weekly spend chart */}
          <div className="rounded-2xl border border-border bg-card/50 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t("spent")}</span>
              <span className="font-semibold">$2,540</span>
            </div>
            <div className="mt-4 flex h-24 items-end gap-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-[linear-gradient(to_top,var(--brand),var(--brand-2))] opacity-90"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Budget summary */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card/50 p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{t("left")}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                <TrendingUp size={12} />
                {t("onTrack")}
              </span>
            </div>
            <p className="mt-1 text-2xl font-semibold tracking-tight">$1,460</p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-[linear-gradient(100deg,var(--brand),var(--brand-2))]"
                style={{ width: "63%" }}
              />
            </div>
          </div>
        </div>

        {/* Category breakdown */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {categories.map((c) => (
            <div
              key={c.key}
              className="rounded-2xl border border-border bg-card/50 p-3.5"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{t(c.key)}</span>
                <span className="text-muted-foreground">{c.amount}</span>
              </div>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-[linear-gradient(100deg,var(--brand),var(--brand-2))]"
                  style={{ width: `${c.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* AI insight banner */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-brand/20 bg-brand/[0.07] p-3.5">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] text-brand-foreground">
            <Sparkles size={16} />
          </span>
          <p className="text-sm text-foreground/90">{t("insight")}</p>
        </div>
      </div>
    </div>
  );
}
