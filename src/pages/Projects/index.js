import React, { useState } from "react";
import "./style.css";
import CancelIcon from "@material-ui/icons/Cancel";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import ProjectList from "../ProjectList/index.js";
import NoResult from "../NoResult";
import IMAGES from "../../Zphoto";

const projects_shown = [];

projects_shown[0] = {
  projectName: "Blog App",
  img: [IMAGES.blogApp],
  projectInfo:
    "This App created with react while using various dependencies to push users that are created on this App. username, email and password is sent to a database so the user can register and login and create blog posts to create a replica of social media.",
  link: "https://spacedandya80.github.io/blogstack/",
};
projects_shown[1] = {
  projectName: "Previous Portfolio",
  img: [IMAGES.oldLanding],
  projectInfo:
    "This is my first portfolio made with javascript, html and css styles, it was meant to start me off with a sense of can do attitude which has followed me ever since.",
  link: "https://spacedandya80.github.io/traversing/about.html",
};
projects_shown[2] = {
  projectName: "Password Generator",
  img: [IMAGES.passwordGen],
  projectInfo:
    "A smaller project to ensure that your new password is encrypted very well by adding lowercase and capital letters with optional symbols and numbers with just a few clicks away.",
  link: "https://spacedandya80.github.io/passwordgen/",
};
projects_shown[3] = {
  projectName: "API for Spotify",
  img: [IMAGES.spotifyApi],
  projectInfo:
    "Using spotify's API to track genres and their according subgenres to show you 10 songs that you can enjoy with an image and artist and album accordingly.",
  link: "https://spacedandya80.github.io/spotifyapi",
};
projects_shown[4] = {
  projectName: "Weather Dashboard",
  img: [IMAGES.weatherDash],
  projectInfo:
    "A very nice project that was mainly handled by using the weather API with a tad bit more practicality with your own choice of city to display the weather, temperature a description of weather and humidity.",
  link: "https://spacedandya80.github.io/traversing/weatherDash/weather.html",
};
projects_shown[5] = {
  projectName: "CRUD App Counter",
  img: [IMAGES.burgerCounter],
  projectInfo:
    "A demonstration of what a simple routes App can do clicking on the submit button will append a new order for a burger which is creating a new id and clicking on devour.",
  link: "https://lower-backbacon-46203.herokuapp.com/",
};
projects_shown[6] = {
  projectName: "Previous Portfolio",
  img: [IMAGES.oldLanding],
  projectInfo:
    "This is my first portfolio made with javascript, html and css styles, it was meant to start me off with a sense of can do attitude which has followed me ever since.",
  link: "https://spacedandya80.github.io/traversing/about.html",
};


function Projects() {
  const [search, setsearch] = useState("");
  const [results, setresults] = useState(false);
  const [noresultpage, setnoresultpage] = useState(false);
  const [resultsArray, setresultsArray] = useState([]);

  const projectResult = (name) => {
    let arr = [];
    if (name === "") {
      setresults(false);
      return alert("enter a possible project name in the search bar");
    }
    setresultsArray([]);

    // converts the input project name to lowercase
    projects_shown.map((e, i) => {
      let str = e.projectName.toLowerCase();
      name = name.toLowerCase();
      arr.push(str.match(name));

      if (str.match(name) !== null) {
        //if it matches the text then it will push to the array
        setresultsArray((previousResults) => [...previousResults, e]);
        if (i === projects_shown.length - 1) {
          if (arr.every((element) => element === null)) {
            return setnoresultpage(true);
          } else return setnoresultpage(false);
        }
        return setresults(true);
      } else {
        if (i === projects_shown.length - 1) {
          if (arr.every((element) => element === null)) {
            return setnoresultpage(true);
          } else return setnoresultpage(false);
        } else {
          return "";
        }
      }
    });
  };

  return (
    <div className="projects">
      <div className="search_sect">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          placeholder="Search for some nice projects"
        />
        <FindInPageIcon
          className="search_icon"
          onClick={() => {
            projectResult(search);
          }}
        />

        {results ? (
          <CancelIcon
            className="cancel_icon"
            onClick={() => {
              setsearch("");
              setresults(false);
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="projects_sect">
        {noresultpage ? <NoResult /> : ""}

        {results ? (
          <ProjectList projects_shown={resultsArray} />
        ) : (
          <ProjectList projects_shown={projects_shown} />
        )}
      </div>
    </div>
  );
}

export default Projects;
