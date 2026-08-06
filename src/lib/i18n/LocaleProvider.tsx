"use client";
import { createContext, useContext, useState } from "react";
import { dictionary, type Locale, type Dictionary } from "@/lib/i18n/dictionary";

interface LocaleContextValue {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const LOCALE_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("locale");
    if (stored === "en") document.documentElement.setAttribute("lang", "en");
  } catch (e) {}
})();
`;

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return "tr";
  try {
    return localStorage.getItem("locale") === "en" ? "en" : "tr";
  } catch {
    return "tr";
  }
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    document.documentElement.setAttribute("lang", next);
    try {
      localStorage.setItem("locale", next);
    } catch {
      // localStorage unavailable — selection just won't persist
    }
  };

  const toggleLocale = () => setLocale(locale === "tr" ? "en" : "tr");

  return (
    <LocaleContext.Provider value={{ locale, t: dictionary[locale], setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
