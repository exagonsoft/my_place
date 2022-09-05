import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeProvider';

const NavBar = ({props}) => {
  let listener = null;
  const [scrollState, setScrollState] = useState(false);
  const { setTheme } = useContext(ThemeContext);
  useEffect(() => {
    listener = document.addEventListener("scroll", () => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (!scrollState) {
          setScrollState(true);
        }
      } else {
        if (scrollState) {
          setScrollState(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  return (
    <></>
  )
}

export default NavBar