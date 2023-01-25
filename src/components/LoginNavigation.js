import React, { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { MdGTranslate } from "react-icons/md";
import ContextTheme from "../contexts/ContextTheme";

function LoginNavigation() {
  const { theme, toggleTheme } = useContext(ContextTheme);
  return (
    <>
      <button className="toggle-locale" type="button">
        <MdGTranslate />
      </button>
      <button className="toggle-theme" type="button" onClick={toggleTheme}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
    </>
  );
}

export default LoginNavigation;
