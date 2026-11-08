import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeName = "dark" | "light";

const STORAGE_KEY = "rheum-theme";
/** Dark is the house style: the hero and the anatomy work read best on it. */
const DEFAULT_THEME: ThemeName = "dark";

/**
 * Runs before first paint so a returning visitor never sees the wrong theme.
 * Exported as a string because it has to be inline in <head>.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}");var d=document.documentElement;if(t==="light"){d.classList.remove("dark")}else{d.classList.add("dark")}d.style.colorScheme=t==="light"?"light":"dark"}catch(e){}})();`;

type ThemeContextValue = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // SSR and first paint are always dark; the inline script corrects returning
  // light-mode visitors before paint, and this effect re-syncs React state.
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") setThemeState(saved);
    } catch {
      /* storage can be blocked; dark stays the fallback */
    }
  }, []);

  const apply = useCallback((next: ThemeName) => {
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;
  }, []);

  const setTheme = useCallback(
    (next: ThemeName) => {
      setThemeState(next);
      apply(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore blocked storage */
      }
    },
    [apply],
  );

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next: ThemeName = current === "dark" ? "light" : "dark";
      apply(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore blocked storage */
      }
      return next;
    });
  }, [apply]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
