import React, { useState, useEffect } from "react";

import { imageRenderer } from "../../common/renderImages";
import axios from "axios";

import "./contactme.css";

let contact = {
  name: "stephen",
  email: "sss@bbb.com.au",
  message:
    "Proident id qui mollit cillum consequat ipsum est sunt culpa non. Cillum enim mollit commodo amet deserunt mollit cupidatat. Commodo adipisicing esse exercitation ut nostrud pariatur cillum cillum commodo ullamco esse incididunt consectetur velit. Nisi sint laboris cupidatat sint voluptate. Labore culpa et dolore officia commodo.",
};
const ContactMe = () => {
  const [trigger, setTrigger] = useState(false);
  //const [sendEmail, setSendEmail] = useState(); https://localhost:5001/api

  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = "https://localhost:5001/api/contact";

  useEffect(() => {
    if (trigger) {
      axios({
        method: "post",
        url:
          `${proxy} + ${url}`,
        headers: { "Content-Type": "application/json" },
        data: {
          data: contact, // This is the body part
        },
      }).then((response) => {
        console.log(response.config.data);
      });
    }
  }, [trigger]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrigger(true);
    console.log("clicked");
  };

  const consumeApi = () => {};

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
              <button onClick={handleSubmit} className="ui inverted button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
