import React, { useState } from "react";
import "./style.css";
import IMAGES from "../../Zphoto";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "",
      title: "About Me",
      desc: "I am an up and coming Full-Stack Web Developer and waiting to make a splash in the industry, I graduated from the UCSD Extension Full-Stack Web Developer Course while during the early stages of the Covid 19 pandemic and with determination and perserverance I was successful in completing the course.",
    },
    {
      id: "2",
      icon: "",
      title: "More Info",
      desc: "Additionally I have found that with good practice and mindset that I have been able to overcome the obstacles in my way in order to furthermy education when it comes to code such as mental blocks, organizing and formatting code. I find perserverance to be an important essence of myself when it comes to finding out what's wrong and what to do next as well as how to better myself when it comes to building Web Apps.",
    },
    {
      id: "3",
      icon: "",
      title: "My Passion",
      desc: "Ever since graduating from UCSD Extension's Bootcamp for the Full Stack Web Developer course I have realized that I belong in this world of tech. My goal since realizing I have potential with dealing with was to enhance it and become and asset with a promising organziation.",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="about" id="about">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {/* object mapping */}
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img
                      className="image"
                      src="	https://image.flaticon.com/icons/png/512/114/114734.png"
                      alt="the laptop"
                    />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={IMAGES.newScene} alt="beach walk" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src={IMAGES.theArrow}
        className="leftArrow"
        alt="arrow facing left"
        onClick={() => handleClick("left")}
      />
      <img
        src={IMAGES.theArrow}
        className="rightArrow"
        alt="arrow facing right"
        onClick={() => handleClick()}
      />
    </div>
  );
}

export default About;
