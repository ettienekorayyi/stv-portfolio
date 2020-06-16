import React from "react";

import "./aboutme.css";

function AboutMe() {
  return (
    <section id="aboutme">
      <div className="ui container ">
        <div id="textContent">
          <section id="title">
            <h1>About Me</h1>
          </section>
          <section id="description">
            <div id="text">
              <p>
                I'm an aspiring fullstack software developer from New South
                Wales and I specialise in C#/React with a goal of becoming a
                fullstack web developer. I'm
                a fan of PS4 games, TV series and camping.
              </p>
              <p>
                I was a Customer Care Engineer(contractor) at Ricoh Australia
                for 8 months and a software tester at Aabode for 10 months. 
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
