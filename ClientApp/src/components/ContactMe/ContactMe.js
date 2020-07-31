import React, { useState, useEffect } from "react";

import { imageRenderer } from "../../common/renderImages";
import axios from "axios";

import "./contactme.css";

const ContactMe = () => {
  const [trigger, setTrigger] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //const [sendEmail, setSendEmail] = useState(); https://localhost:5001/api

  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = "https://localhost:5001/api/contact";

  useEffect(() => {
    if (trigger) {
      axios({
        method: "post",
        url: `${proxy} + ${url}`,
        headers: { "Content-Type": "application/json" },
        data: {
          "Name": name,
          "Email": email,
          "Message": message,
        },
      }).then((response) => {
        console.log(response.config.data);
      });
    }
  }, [trigger]);

  const handleSubmit = (e) => {
    const {} = e.target;
    e.preventDefault();
    setTrigger(true);
    console.log("clicked");
  };

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
              <input
                type="text"
                className="textbox"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                type="email"
                className="textbox"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
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
