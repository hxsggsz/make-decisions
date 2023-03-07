import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { ThemeProvider } from "styled-components";
import * as themes from "../styles/themes/themes";

interface ThemeTypes {
  children: ReactNode;
}

interface StateProps {
  colors: "dark" | "light";
  setColors: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext({} as StateProps);

export const useThemes = () => useContext(ThemeContext);

const getThemeByLocalStorage = () => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    return JSON.parse(currentTheme);
  }
  return "light";
};

export const ThemesProvider = ({ children }: ThemeTypes) => {
  const [colors, setColors] = useState(getThemeByLocalStorage());
  const [theme, setTheme] = useState(themes.Light);

  const setCurrentTheme = useCallback(() => {
    if (colors === "light") {
      localStorage.setItem("theme", JSON.stringify("light"));
      return themes.Light;
    }
    localStorage.setItem("theme", JSON.stringify("dark"));
    return themes.Dark;
  }, [colors, theme]);

  return (
    <ThemeContext.Provider value={{ colors, setColors }}>
      <ThemeProvider theme={setCurrentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};