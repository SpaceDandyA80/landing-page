import React from "react";
import "./style.css";
import ImageGallery from ".././Images";
import Homefooter from ".././Homefooter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home_text">
        <div className="about_me_info">
          <p>
            <span>Insight</span>
          </p>
          <h1>Collection of Code</h1>
          <p className="about_me_text">
            A demonstration of my ever growing experience
          </p>
          <Link to="/projects">
            <button id="browse_projects">BROWSE</button>
          </Link>
        </div>
      </div>

      <div className="empty"></div>
      <ImageGallery />
      <Homefooter />
    </div>
  );
}

export default Home;

// renders out the main page with all the components leading here the parent type renderer respectfully
