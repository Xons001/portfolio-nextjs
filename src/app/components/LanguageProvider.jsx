"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLanguage, translations } from "../lib/i18n";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const value = useMemo(() => {
    const setAndPersistLanguage = (nextLanguage) => {
      if (!translations[nextLanguage]) {
        return;
      }

      setLanguage(nextLanguage);
      window.localStorage.setItem("portfolio-language", nextLanguage);
      document.documentElement.lang = nextLanguage;
    };

    return {
      language,
      setLanguage: setAndPersistLanguage,
      t: translations[language],
    };
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
};
