import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  // localStorage'dan verileri al
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLang = localStorage.getItem("language");

    if (savedTheme) setTheme(savedTheme);
    if (savedLang) setLanguage(savedLang);
  }, []);

  // localStorage'a yaz
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLanguage = () => setLanguage(language === "en" ? "tr" : "en");

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  );
};
