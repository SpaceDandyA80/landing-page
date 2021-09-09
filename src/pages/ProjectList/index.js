import React, { useState } from "react";
import ProjectCard from "../ProjectCard";
import "./style.css";

function ProjectList({ projects_shown }) {
  const [clickstate, setclickstate] = useState(false);
  const [projectcard, setprojectcard] = useState([]);
  const [close, setclose] = useState(false);
  const closeCard = () => {
    setclose(false);
    setclickstate(false);
  };

  return (
    <div className="project_list">
      {/* mapped over from projectM and displayed over on the card */}
      {/* projects are grabbed from the ProjectList {project_shown} and are mapped over and displayed throughtout th card accordingly */}
      {projects_shown.map((projects) => (
        <div
          className="project_card"
          onClick={() => {
            setprojectcard([
              projects.img,
              projects.projectName,
              projects.projectInfo,
              projects.link,
            ]);
            setclickstate(true);
            setclose(true);
          }}
        >
          <img src={projects.img} alt={projects.projectName} />
          <h3>{projects.projectName}</h3>
        </div>
      ))}
      <div>
        {clickstate ? (
          // displaying here because its passed in from project card and stated there
          <ProjectCard closeCard={closeCard} cardDetails={projectcard} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ProjectList;
