import React from "react";

import { imageRenderer } from "../../common/renderImages";
import "./contactme.css";

const ContactMe = () => {
  return (
    <section
      id="contactme"
      style={{ backgroundImage: `url(${imageRenderer()})` }}
    >
      <div className="ui container ">
        <div id="textContent">
          <section id="title">
            <h1 id="collaborate">Let's Collaborate</h1>
          </section>
          <form className="ui form">
            <div className="field">
              <input type="text" className="textbox" placeholder="Name" />
            </div>
            <div className="field">
              <input type="email" className="textbox" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                className="textbox"
                placeholder="Your Message"
                name="message"
                rows="4"
                cols="35"
              ></textarea>
            </div>
            <div className="field">
              <button 
                className="ui inverted button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
