import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  let year = new Date();
  year = year.getFullYear();

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="footer">
      <div className="footer_row">
        <ul>
          <Link to="/" style={linkStyle}>
            <li>Home</li>
          </Link>

          <Link to="/projects" style={linkStyle}>
            <li>Projects</li>
          </Link>
          <Link to="/about" style={linkStyle}>
            <li>About Me</li>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <li>Keep in Touch</li>
          </Link>
        </ul>
      </div>
      <div className="footer_column">
        <div className="footer_col">
          <h3> My Recent Projects</h3>
          <a href="https://google.com">project 1</a>
          <a href="https://google.com">project 2</a>
          <a href="https://google.com">project 3</a>
          <a href="https://google.com">spot api</a>
        </div>
        <div className="footer_col">
          <h3> My new landing page info</h3>
          <a href="https://google.com">its awesome </a>
          <a href="https://google.com">i had help</a>
          <a href="https://google.com">its taking a while</a>
          <a href="https://google.com">room for improvement</a>
        </div>
        <div className="footer_col">
          <h3> My future</h3>
          <a href="https://google.com">is underway</a>
          <a href="https://google.com">my new job is almost upon me</a>
          <a href="https://google.com">starting up now</a>
          <a href="https://google.com">tons of regrets</a>
        </div>
        <div className="footer_col">
          <h3> contact us</h3>
          <a href="https://google.com">strap on in</a>
          <a href="https://google.com">i got a little bit left to go</a>
          <a href="https://google.com">almost done</a>
          <a href="https://google.com">i will succeed</a>
        </div>
      </div>

      <br />
      <br />
      <p id="footer_copyright">&copy; project page &nbsp; {year}</p>
    </div>
  );
}

export default Footer;
