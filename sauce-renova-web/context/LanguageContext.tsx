"use client";

import { createContext, useContext, useState } from "react";

export const LANGUAGES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

interface LanguageContextType {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  setLang: () => {},
});

export function LanguageProvider({
  children,
  initialLang = "es",
}: {
  children: React.ReactNode;
  initialLang?: LangCode;
}) {
  const [lang, setLangState] = useState<LangCode>(initialLang);

  const setLang = (next: LangCode) => {
    setLangState(next);
    document.cookie = `lang=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = next;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);