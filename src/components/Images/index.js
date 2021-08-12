import React from "react";
import "./style.css";
import IMAGES from "../../Zphoto/index.js";

function ImageGallery() {
  return (
    <div className="image_gallery">
      <h3>The instant project deployment!</h3>
      <div className="gallery_cont">
        <a
          href="https://spacedandya80.github.io/project1/jobcitysearch.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IMAGES.citySearch} alt="city project" />
        </a>

        <a
          href="https://spacedandya80.github.io/spotifyapi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IMAGES.spotifyApi} alt="API for spotify" />
        </a>
        <a
          href="https://spacedandya80.github.io/traversing/weatherDash/weather.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IMAGES.weatherDash} alt="weather dashboard" />
        </a>
      </div>
    </div>
  );
}

export default ImageGallery;
