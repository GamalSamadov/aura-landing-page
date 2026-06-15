import { useTranslations } from "next-intl";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section id="cta" className="px-5 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-brand/20 bg-brand/[0.06] px-6 py-16 text-center sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div
              className="blob"
              style={{ width: 360, height: 360, bottom: -160, left: -60, background: "var(--brand)" }}
            />
            <div
              className="blob"
              style={{
                width: 360,
                height: 360,
                top: -160,
                right: -60,
                background: "var(--brand-2)",
                animationDelay: "-6s",
              }}
            />
          </div>

          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <WaitlistForm variant="hero" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
