import React from "react";
import "./style.css";

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <br /> <br />
      <p>
        I am an up and coming Full-Stack Web Developer and waiting to make a
        splash in the industry
      </p>
      <br />
      <br />
      <p>
        Additionally I have found that with good practice and mindset that I
        have been able to overcome the obstacles in my way in order to further
        my education when it comes to code such as mental blocks, organizing and
        formatting code. I find perserverance to be an important essence of
        myself when it comes to finding out what's wrong and what to do next as
        well as how to better myself when it comes to building Web Apps.
      </p>
      <br />
      <br />
      <p>
        Ever since graduating from UCSD Extension's Bootcamp for the Full Stack
        Web Developer course I have realized that I belong in this world of tech
        . My goal since realizing I have potential with dealing with was to
        enhance it and become and asset with a promising organziation.
      </p>
      <br />
      <br />
      <h3> Stealers Wheel</h3>
      <br />
      <div className="videos">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tD46805xg_Q"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/l8ZiDlWWpb4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hdjHcyZuCIk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FQEjL4idcCA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
