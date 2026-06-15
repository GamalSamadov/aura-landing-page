"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

type Tier = {
  name: string;
  priceMonthly: number;
  desc: string;
  features: string[];
  cta: string;
};

function formatPrice(value: number) {
  if (value === 0) return "$0";
  return value % 1 === 0 ? `$${value}` : `$${value.toFixed(2)}`;
}

export function Pricing() {
  const t = useTranslations("pricing");
  const tiers = t.raw("tiers") as Tier[];
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="inline-flex rounded-full border border-border bg-card p-1 text-sm">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-4 py-1.5 font-medium transition-colors",
                !annual ? "bg-muted text-foreground" : "text-muted-foreground",
              )}
            >
              {t("monthly")}
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-4 py-1.5 font-medium transition-colors",
                annual ? "bg-muted text-foreground" : "text-muted-foreground",
              )}
            >
              {t("annual")}
            </button>
          </div>
          <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
            {t("save")}
          </span>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => {
            const popular = i === 1;
            const price = annual ? tier.priceMonthly * 0.8 : tier.priceMonthly;
            return (
              <Reveal key={tier.name} delay={i * 90}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-6 sm:p-7",
                    popular
                      ? "border-brand/50 bg-card shadow-xl shadow-brand/10 md:-translate-y-3"
                      : "border-border bg-card",
                  )}
                >
                  {popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] px-3 py-1 text-xs font-semibold text-brand-foreground shadow-md">
                      {t("popular")}
                    </span>
                  )}

                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.desc}</p>

                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      {formatPrice(price)}
                    </span>
                    {tier.priceMonthly > 0 && (
                      <span className="mb-1 text-sm text-muted-foreground">
                        {t("perMonth")}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 h-4 text-xs text-muted-foreground">
                    {annual && tier.priceMonthly > 0 ? t("billedAnnually") : ""}
                  </p>

                  <Button
                    href={site.waitlistAnchor}
                    variant={popular ? "brand" : "outline"}
                    className="mt-6 w-full"
                  >
                    {tier.cta}
                  </Button>

                  <ul className="mt-7 space-y-3 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          size={18}
                          className="mt-0.5 shrink-0 text-brand"
                          strokeWidth={2.5}
                        />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
