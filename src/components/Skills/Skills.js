import React from "react";

import { imageRenderer } from '../../common/renderImages';
import "./skills.css";

const Skills = () => {

  return (
    <section id="skills" style={{ backgroundImage: `url(${imageRenderer()})` }}>
      <div className="ui container">
        <div id="skillsContent">
          <section id="title">
            <h1 id="text">Skills</h1>
          </section>
          <div id="skills-container">
            <section id="skill-icons">
              <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">
                <i className="devicon-csharp-plain-wordmark colored"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Git">
                <i className="devicon-git-plain-wordmark colored"></i>
              </a>

              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <i className="devicon-javascript-plain colored"></i>
              </a>
            </section>
            <section id="skill-icons">
              <a href="https://reactjs.org/">
                <i className="devicon-react-original colored"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/HTML#:~:text=Hypertext%20Markup%20Language%20(HTML)%20is,scripting%20languages%20such%20as%20JavaScript.">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </a>
            </section>
            <section id="skill-icons">
              <a href="https://en.wikipedia.org/wiki/Ubuntu">
                <i className="devicon-ubuntu-plain-wordmark colored"></i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Windows_10">
                <i className="devicon-windows8-original colored"></i>
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
