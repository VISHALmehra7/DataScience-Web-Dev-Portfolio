import React, { createContext, useContext, useEffect, useState } from "react";

export const LightAndDarkContext = createContext();

export const useLightAndDarkTheme = () => {
  return useContext(LightAndDarkContext);
};

const LightAndDarkContextProvider = ({ children }) => {
  const [theme, settheme] = useState(() => {
    const existingTheme = localStorage.getItem("theme");
    return existingTheme ? JSON.parse(existingTheme) : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme) || "dark");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    settheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <LightAndDarkContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </LightAndDarkContext.Provider>
  );
};

export default LightAndDarkContextProvider;
