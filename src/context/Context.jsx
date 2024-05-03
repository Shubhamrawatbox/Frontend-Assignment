/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [initialTheme, setTheme] = useState(
    localStorage?.getItem("mode") ?? "light"
  );

  // Update local storage when dark mode state changes
  useEffect(() => {
    localStorage.setItem("mode", initialTheme);
  }, [initialTheme]);

  const toggleTheme = () => {
    setTheme(initialTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ initialTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume context
export const useTheme = () => useContext(ThemeContext);
