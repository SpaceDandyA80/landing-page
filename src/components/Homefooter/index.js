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
          img="https://images.unsplash.com/photo-1484589065579-248aad0d8b13"
          title="Uses of API's"
          content="Being able to apply knowledge of a programming language and succesfully have a functioning web app that is able to utilize information from another database is essential. Keep exploring and maybe you'll find one around here."
          alt="API Info"
        />
        <CardFooter
          color="white"
          img="https://images.unsplash.com/photo-1515405295579-ba7b45403062"
          title="MERN Stack Applications"
          content="Another useful web by far one of the poplular one in terms of functionality is being able to connect not only API's but being able to deploy the app with the use of Database. You can find one here on the this page or on my projects page."
          alt="MERN Info"
        />
        <CardFooter
          color="white"
          img="https://images.unsplash.com/photo-1549490349-8643362247b5"
          title="Backend Connections"
          content="The backbone of a web app and can depending how well its structured can lead to pleasant user experience."
          alt="Backend Info"
        />
        <CardFooter
          color="white"
          img="https://images.unsplash.com/photo-1547922374-968968e3f658"
          title="Gradual Improvement"
          content="As time comes by so does new information, in this line of work being up to date on new features and algorithms and easier and faster ways of coding is a necessity to know and with a look around here there is always room for improvement if judged from my previous projects."
          alt="Improve Summary"
        />
      </div>
    </div>
  );
}

export default HomeFooter;
