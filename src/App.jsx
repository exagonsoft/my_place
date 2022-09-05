import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Seo from "./components/Seo";
import { ThemeContext } from "./context/ThemeProvider";
import { GREETING_DESCRIPTION, IMAGE, KEYWORDS, NAME, URL } from "./data/data";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showMenu, SetShowMenu] = useState(false);
  return(
  <>
    <Seo
      url={URL}
      lang="en"
      metaDescription={GREETING_DESCRIPTION}
      keywords={KEYWORDS}
      image={IMAGE}
      title={NAME}
      author={NAME}
      theme={theme}
    />
    <NavBar showMenu={showMenu} SetShowMenu={SetShowMenu}/>
  </>);
}

export default App;
