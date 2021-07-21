import React from "react";
import "./style.css";
import IMAGES from "../../Zphoto/index.js";

function ImageGallery() {
  return (
    <div className="image_gallery">
      <h3> Get ready for amazing projects!</h3>
      <div className="gallery_cont">
        <a href="https://spacedandya80.github.io/project1/jobcitysearch.html">
          <img src={IMAGES.citySearch} alt="city project" />
        </a>
        <a href="https://spacedandya80.github.io/passwordgen/">
          <img src={IMAGES.passwordGen} alt="password generator" />
        </a>
        <a href="https://spacedandya80.github.io/spotifyapi">
          <img src={IMAGES.spotifyApi} alt="API for spotify" />
        </a>
        <a href="https://spacedandya80.github.io/traversing/weatherDash/weather.html">
          <img src={IMAGES.weatherDash} alt="weather dashboard" />
        </a>
        <img
          src="https://wallpaper.dog/large/10704464.jpg"
          alt="sailormoon pose"
        />
        <img
          src="https://wallpaper.dog/large/10704895.jpg"
          alt="sailormoon pose"
        />
      </div>
    </div>
  );
}

export default ImageGallery;
