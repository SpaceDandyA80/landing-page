import React from "react";
import "./style.css";
import CardFooter from "../CardFooter";

function HomeFooter() {
  return (
    <div className="home_footer">
      <h2> What is included in the projects?</h2>
      <div className="home_footer_cards">
        <CardFooter
          color="white"
          img="https://wallpapercave.com/wp/wp5930464.png"
          title="Why Sailor Moon?"
          content="The reason sailor moon has such a huge following is because of its nuances of childlike actions that help people to
        enact out similar behavior it allows people to bring out either their feminine side as well as their masculine side of their personality."
          alt="pretty guardian "
        />
        <CardFooter
          color="white"
          img="https://wallpapercave.com/wp/wp5179762.jpg"
          title="In the name of the moon"
          content='one of the main catchphrases from our pretty sailor guardian is "In the name of the moon i&apos;ll punish you" and is more renown
        throughout the fanbase than people that of the franchise.'
          alt="sailor moon"
        />
        <CardFooter
          color="white"
          img="https://wallpapercave.com/wp/wp5474104.jpg"
          title="I still don't know how to use a computer"
          content='A very memorable scene from the series where when confronted about her knowledge with technology and more specifically
        a computer she then anwers with "I still don&apos;t know how to use a computer"'
          alt="pretty guardian"
        />
        <CardFooter
          color="white"
          img="https://wallpapercave.com/wp/wp4653141.jpg"
          title="Moon Prism Power Make-Up"
          content="Another one of the pretty guardia\'s catchphrases and is announced whenever she makes her transformation from usagi
        the day to actual self to the gaurdian sailor moon"
          alt="sailor moon"
        />
      </div>
    </div>
  );
}

export default HomeFooter;
