import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('light')
}