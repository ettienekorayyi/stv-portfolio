import React, { useState, useEffect } from "react";

import { imageRenderer } from "../../common/renderImages";
import axios from "axios";

import "./contactme.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const url = "https://localhost:5001/api/contact";

  const data = JSON.stringify({
    Name: name,
    Email: email,
    Message: message,
  });

  useEffect(() => {
    if (trigger) {
      axios({
        method: "post",
        url: `${url}`,
        headers: { "Content-Type": "application/json" },
        data: data, // sends the data to our controller
      }).then(() => {
        onClear();
      });
    }
  }, [trigger]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTrigger(true);
    setLoading(true);
  };

  const onClear = () => {
    setTrigger(false);
    setLoading(false);
    setName();
    setEmail("");
    setMessage("");
  };

  return (
      <React.Fragment>
        <form className="ui form" onSubmit={onSubmit}>
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
            <button className="ui inverted button">Submit</button>
          </div>
        </form>
        {!loading ? <div style={{display: 'none'}}></div> : <LoadingSpinner />}
      </React.Fragment>
  );
};

export default ContactForm;
