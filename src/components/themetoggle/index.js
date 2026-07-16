import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "dark");
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button className="theme-toggle" onClick={themetoggle} aria-label="Toggle theme" title="Toggle theme">
      <WiMoonAltWaningCrescent4 />
    </button>
  );
};

export default Themetoggle;
