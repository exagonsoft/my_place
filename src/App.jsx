import { useContext, useState } from "react";
import "./App.css";
import Seo from "./components/Seo";
import { ThemeContext } from "./context/ThemeProvider";
import { GREETING_DESCRIPTION, IMAGE, KEYWORDS, NAME, URL } from "./data/data";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuShow, showMenu] = useState(false);
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
  </>);
}

export default App;
