import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { am, en, type DictKey } from "./dict";
import type { L } from "@/config/clinic";

export type Lang = "en" | "am";
const STORAGE_KEY = "rheum-lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string; l: (v: L) => string };

const I18nContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always render English on the server and first client paint, then apply the saved choice.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "am" || saved === "en") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback(
    (k: DictKey) => {
      if (lang === "am") {
        const v = am[k];
        if (v) return v;
        if (import.meta.env.DEV) console.warn(`[i18n] missing Amharic for "${k}"`);
      }
      return en[k];
    },
    [lang],
  );

  const l = useCallback((v: L) => (lang === "am" && v.am ? v.am : v.en), [lang]);

  return <I18nContext.Provider value={{ lang, setLang, t, l }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
