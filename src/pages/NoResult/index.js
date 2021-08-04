import React from "react";
import "./style.css";

function NoResult() {
  return (
    <div className="no_results">
      <p> Sorry! We goofed, try opening the home page or refreshing.</p>
      <img
        src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F019%2F907%2Fmaxresdefault.jpg"
        alt="to be continued . . ."
      ></img>
    </div>
  );
}

export default NoResult;
