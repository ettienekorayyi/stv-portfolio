import React from "react";
import TypeIt from "typeit-react";

import "./aboutme.css";

const AboutMe = () => {
  const onType = () => {
    return (
      <div id="text">
        <p>
          <TypeIt element={"p"}>
            I'm an aspiring fullstack software developer from New South Wales
            and I specialise in C#/React with a goal of becoming a fullstack web
            developer. I'm a fan of PS4 games, TV series and camping. <br></br><br></br>

            I was a Customer Care Engineer(contractor) at Ricoh Australia for 8
            months and a software tester at Aabode for 10 months.
          </TypeIt>
        </p>
      </div>
    );
  };
  return (
    <section id="aboutme">
      <div className="ui container ">
        <div id="textContent">
          <section id="title">
            <h1>About Me</h1>
          </section>
          <section id="description">{onType()}</section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
