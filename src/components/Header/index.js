import React, { useState, useEffect } from "react";
import "./style.css";

function Header() {
  const [scrollState, setScrollState] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollState(true);
      } else setScrollState(false);
    });
  }, []);

  return (
    <div className={`header ${scrollState && "nav_black"}`}>
      <div className="fk_div"></div>
      <h1>Guillermo Garcia</h1>
    </div>
  );
}

export default Header;
