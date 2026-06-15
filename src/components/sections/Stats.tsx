import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

type Stat = { value: string; label: string };

export function Stats() {
  const t = useTranslations("stats");
  const items = t.raw("items") as Stat[];

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="text-center">
                <dt className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
