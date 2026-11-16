import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Language,
  TRANSLATIONS,
  TranslationDictionary,
  localizeCigar,
} from "./translations";
import { CigarLine } from "../types/cigar";

const STORAGE_KEY = "caoba_lang";

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") {
      return saved;
    }
    const browserLang = navigator.language?.toLowerCase() || "";
    if (browserLang.startsWith("en")) {
      return "en";
    }
  } catch {
    // Ignore storage access errors
  }
  return "es";
}

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: TranslationDictionary;
  getLocalizedCigar: (cigar: CigarLine) => CigarLine;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // Ignore storage write errors
    }
  };

  const toggleLang = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggleLang,
    t: TRANSLATIONS[lang],
    getLocalizedCigar: (cigar: CigarLine) => localizeCigar(cigar, lang),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
