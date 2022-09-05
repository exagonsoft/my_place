// TODO
import { createContext, useContext } from "react";

export const ThemeContextProps = {
  theme: string,
  setTheme: (theme) => void {}
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const useTheme = () => {
  return useContext<ThemeContextProps>(ThemeContext);
};
