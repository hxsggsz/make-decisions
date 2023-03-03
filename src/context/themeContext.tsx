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
  colors: boolean;
  setColors: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext({} as StateProps);

export const useThemes = () => useContext(ThemeContext);
// pega o nome do tema pelo localStorage
const getThemeByLocalStorage = () => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    return JSON.parse(currentTheme);
  }
  return "false";
};

export const ThemesProvider = ({ children }: ThemeTypes) => {
  const [colors, setColors] = useState(getThemeByLocalStorage());
  const [theme, setTheme] = useState(themes.Light);

  /**
   * retorna o tema com base no useState colors
   * useCallback pra essa função só ser executada quando o usuario mudar o tema
   */
  const setCurrentTheme = useCallback(() => {
    if (colors) {
      localStorage.setItem("theme", JSON.stringify(true));
      return themes.Light;
    }
    localStorage.setItem("theme", JSON.stringify(false));
    return themes.Dark;
  }, [colors, theme]);

  return (
    <ThemeContext.Provider value={{ colors, setColors }}>
      <ThemeProvider theme={setCurrentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};