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
            <span>Portfolio</span>
          </p>
          <h1> Congregation of coding skills </h1>
          <p className="about_me_text">
            This home page will demonstrate what I have accomplished so far
          </p>
          <Link to="/projects">
          <button id="browse_projects">BROWSE MY PROJECTS</button>
            </Link>
        </div>
      </div>

      <div className="empty"></div>
      <ImageGallery />
      <div className="empty"></div>
      <Homefooter />
    </div>
  );
}

export default Home;

// renders out the main page with all the components leading here the parent type renderer respectfully
