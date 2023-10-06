import React from "react";
import "./register.scss";
//import { motion } from "framer-motion";


const Register = () => {
  return (
    <div className="app__register-container">
      
      
      <div className="app__register-subcontainer">
      
        <div className="left">
          <div className="app__left-subcontainer">
            <div className="app__signup-title">
              <h1>Sign up</h1>
              <p>
                Please enter your login information to register
              </p>
            </div>
            <div className="app__form">
              <form action="" className="form-container">
               
                  
                  <input placeholder="Enter the name" id="name" type="text" />
                  
                  
                  
                  <input
                    placeholder="Enter the email"
                    id="email"
                    type="email"
                  />
                  
                  
                  
                  <input
                    placeholder="Enter the password"
                    id="pass"
                    type="password"
                  />
                  
                  
                  <input
                    placeholder="Enter the number"
                    id="phone"
                    type="number"
                  />
                  
                  <div className="btn_container">
                      <button className="btn">Sign Up</button>
                  </div>
                  
                
              </form>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title-container">
            <h1>Hello & Welcome!</h1>
            <p>Service Recommendation System!</p>
          </div>
        </div>
      </div>
    </div>
  );

  
};

export default Register;
