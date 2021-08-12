import React from "react";
import "./style.css";

function Footer() {
  let year = new Date();
  year = year.getFullYear();

  return (
    <div className="footer">
      <div className="footer_column">
        <div className="footer_col">
          <a
            href="https://www.linkedin.com/in/guillermo-garcia-57140a1a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6UmCBUGjTc%2BdLUjxi5%2BrgQ%3D%3D"
            alt="reroute to linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-512/linkedin-circle-1868976-1583140.png"
              alt="Linkedin logo"
              className="imgLogo"
            />
          </a>
        </div>
        <div className="footer_col">
          <a
            href="https://github.com/SpaceDandyA80"
            alt="reroute to github"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
              alt="Github logo"
              className="imgLogo"
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <p id="footer_copyright">&copy; project page&nbsp; {year}</p>
    </div>
  );
}

export default Footer;
