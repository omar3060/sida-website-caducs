"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    const savedDirection = localStorage.getItem("direction") || "ltr";
    setDirection(savedDirection);
    document.documentElement.dir = savedDirection;
    document.documentElement.lang = savedDirection === "ltr" ? "en" : "ar";
  }, []);

  const toggleDirection = () => {
    const newDirection = direction === "ltr" ? "rtl" : "ltr";
    setDirection(newDirection);
    localStorage.setItem("direction", newDirection);
    document.documentElement.dir = newDirection;
    document.documentElement.lang = newDirection === "ltr" ? "en" : "ar";
  };

  return (
    <LanguageContext.Provider value={{ direction, toggleDirection }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
