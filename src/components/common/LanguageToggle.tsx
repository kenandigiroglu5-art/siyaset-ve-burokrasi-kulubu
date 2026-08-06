"use client";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      aria-label={locale === "tr" ? "Switch to English" : "Türkçeye geç"}
      className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-105 ${className}`}
      style={{ background: "var(--surface-5)", color: "var(--color-text-body)" }}
      suppressHydrationWarning
    >
      {locale === "tr" ? "EN" : "TR"}
    </button>
  );
}
