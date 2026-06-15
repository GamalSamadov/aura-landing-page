"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  variant = "default",
  className,
}: {
  variant?: "default" | "hero";
  className?: string;
}) {
  const t = useTranslations("waitlist");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError(t("errorEmail"));
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setError(t("errorGeneric"));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "glass flex items-start gap-3 rounded-2xl p-4 text-left",
          className,
        )}
        role="status"
      >
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(100deg,var(--brand),var(--brand-2))] text-brand-foreground">
          <Check size={16} />
        </span>
        <div>
          <p className="font-semibold">{t("success")}</p>
          <p className="text-sm text-muted-foreground">{t("successDesc")}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("w-full", className)}>
      <div
        className={cn(
          "flex flex-col gap-2.5 sm:flex-row",
          variant === "hero" &&
            "sm:rounded-full sm:border sm:border-border sm:bg-card/60 sm:p-1.5 sm:shadow-lg sm:shadow-black/5 sm:backdrop-blur",
        )}
      >
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={t("placeholder")}
          aria-label={t("placeholder")}
          aria-invalid={status === "error"}
          className={cn(
            "h-12 flex-1 rounded-full border border-border bg-card px-5 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-ring/30",
            variant === "hero" && "sm:border-transparent sm:bg-transparent sm:focus:ring-0",
          )}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium text-brand-foreground shadow-lg shadow-brand/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand/40 disabled:cursor-not-allowed disabled:opacity-70 bg-[linear-gradient(100deg,var(--brand),var(--brand-2))]"
        >
          {status === "loading" ? (
            t("submitting")
          ) : (
            <>
              {t("submit")}
              <ArrowRight size={17} />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-2 px-2 text-sm text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}
