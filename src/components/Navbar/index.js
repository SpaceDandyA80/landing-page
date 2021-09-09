import React, { useState } from "react";
import "./style.css";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import InfoIcon from "@material-ui/icons/Info";
import ContactsIcon from "@material-ui/icons/Contacts";
import { Link } from "react-router-dom";
//navbar functionality

function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const openNav = () => {
    navbarState ? setNavbarState(false) : setNavbarState(true);
  };
  // operates the menu to open on the usestate and close when false ** as in click on the screen elsewhere

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="Nav">
      <button className="menu_btn" onClick={() => openNav()}>
        <MenuIcon fontSize="medium" />
      </button>

      <div className={navbarState ? "nav_cont nav_open" : "nav_cont nav_close"}>
        <div className="nav_items">
          <ul>
            <Link to="/" style={linkStyle}>
              <HomeIcon />
              <li>Home</li>
            </Link>

            <Link to="/projects" style={linkStyle}>
              <LibraryBooksIcon />
              <li>Projects</li>
            </Link>
            <Link to="/about" style={linkStyle}>
              <InfoIcon />
              <li>About Me</li>
            </Link>
            <Link to="/contact" style={linkStyle}>
              <ContactsIcon />
              <li>Keep in Touch</li>
            </Link>
          </ul>
        </div>
        <div className="close_nav" onClick={() => openNav()}></div>
      </div>
    </div>
  );
}

export default Navbar;
