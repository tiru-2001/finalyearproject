import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="app__contact-container">
      <div className="app__contact-subcontainer">
        <div className="left-container">
          <div className="conatct-title">
            <h1>Contact Us</h1>
          </div>
          <div className="app__form-container">
            <form action="" className="form-container">
              <input placeholder="Name" id="name" type="text" />
              <input placeholder="Email" type="email" />
              <textarea
                name=""
                placeholder="message"
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
