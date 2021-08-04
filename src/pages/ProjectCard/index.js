import React from "react";
import "./style.css";
import CancelIcon from "@material-ui/icons/Cancel";

const style = {
  position: "fixed",
  padding: "15px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
};

const margin = {
  margin: "10px 0",
};

function ProjectCard({ closeCard, cardDetails }) {
  return (
    <div className="expand_card" style={style}>
      <CancelIcon onClick={closeCard} className="close_btn" fontSize="small" />
      <img src={cardDetails[0]} alt={cardDetails[1]} />
      <h2 style={margin}> {cardDetails[1]}</h2>
      <p style={margin}>{cardDetails[2]}</p>
      <div className="emt_card"></div>
      <a
        href={cardDetails[3]}
        className="expand_btn"
        target="_blank"
        rel="noreferrer"
      >
        project
      </a>
    </div>
  );
}

export default ProjectCard;
