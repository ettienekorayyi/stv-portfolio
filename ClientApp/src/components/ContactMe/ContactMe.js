import React from "react";

import { imageRenderer } from "../../common/renderImages";
import ContactForm from './ContactForm';
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
