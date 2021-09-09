import React from "react";
import "./style.css";
import CancelIcon from "@material-ui/icons/Cancel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const style = {
  position: "fixed",
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
      <CancelIcon onClick={closeCard} className="close_btn" fontSize="medium" />
      <img src={cardDetails[0]} alt={cardDetails[1]} />
      <div className="emt_card"></div>
      <div className="card_txt">
        <h2 style={margin}> {cardDetails[1]}</h2>
        <p style={margin}>{cardDetails[2]}</p>
        <a
          className="expand_btn"
          href={cardDetails[3]}
          target="_blank"
          rel="noreferrer"
        >
          project <ArrowForwardIosIcon />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
