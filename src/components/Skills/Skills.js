import React from "react";
import "./skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="ui container">
        <div id="skillsContent">
          <section id="title">
            <h1>Skills</h1>
          </section>
          <div id="skills-container">
            <section id="skill-icons">
            <i class="devicon-csharp-plain-wordmark colored"></i>
              <i className="devicon-git-plain-wordmark colored"></i>
              <i className="devicon-javascript-plain colored"></i>
            </section>
            <section id="skill-icons">
              <i className="devicon-react-original colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-html5-plain-wordmark colored"></i>
            </section>
            <section id="skill-icons">
              <i className="devicon-ubuntu-plain-wordmark colored"></i>
              <i className="devicon-windows8-original colored"></i>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
