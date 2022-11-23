import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) ?? false
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContextProvider, DarkModeContext };
