import React from "react";

import TypeIt from "typeit-react";
import { imageRenderer } from "../../common/renderImages";
import "./aboutme.css";

const AboutMe = () => {
  const onType = () => {
    return (
      <div id="text">
        <p id="txtcontent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p id="txtcontent">
          Has assum adversarium te, ex vis tale nostrud eruditi. Ei prima mazim
          per, eu vis justo doctus expetenda. At nostro aliquando qui, at
          efficiantur philosophia eum. Eius dolores has ad. Ea mea alterum
          molestiae, ius ex augue graeci tractatos, vim duis rebum id. Id novum
          virtute corrumpit qui, sea id quidam nominavi. Mel nusquam fastidii
          ponderum ea, ut choro animal disputando eos. Cum id audire nominavi,
          ne vim mazim graecis voluptaria. An dico minim tacimates nec, qui stet
          verear consectetuer at, semper maluisset constituam ex vel. Pri at
          summo admodum, vide vidit voluptua an sit, soluta voluptatum
          liberavisse nam ne.
        </p>
      </div>
    );
  };
  return (
    <section
      id="aboutme"
      style={{ backgroundImage: `url(${imageRenderer()})` }}
    >
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
