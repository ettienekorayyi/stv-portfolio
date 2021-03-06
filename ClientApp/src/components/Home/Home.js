import React from "react";
import TypeIt from "typeit-react";

import { imageRenderer } from '../../common/renderImages';
import "./home.css";

const Home = () => {
  return (
    <section
      id="content"
      style={{ backgroundImage: `url(${imageRenderer()})` }}
    >
      <div className="ui container content-wrapper">
        <div id="textContent">
          <h1>Hey, I'm</h1>
          <TypeIt
            element="h1"
            getBeforeInit={(instance) => {
              instance.type("stv").pause(750).delete(14).type("Stephen");
              console.log(instance);
              instance.reset();
              return instance;
            }}
          />
          <h3>A Junior Fullstack Developer</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
