import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  const [scrollState, setScrollState] = useState(false);

  const brandHead = {
    color: "white",
    textDecoration: "none",
  };
  //controls the navbar to be displayed after being scrolled
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
      <Link to="/" style={brandHead}>
        <h1>Guillermo Garcia</h1>
      </Link>
    </div>
  );
}

export default Header;
