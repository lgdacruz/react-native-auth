import { createContext, useContext } from "react";

const theme = {
  darkGreen: "#001500",
  green: "#1D4817",
  lightGreen: "#3A7C2D",
};
export const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const ThemeUse = () => useContext(ThemeContext);
