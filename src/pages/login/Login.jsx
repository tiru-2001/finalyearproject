import React from "react";
import { motion } from "framer-motion";
import "./login.scss";

const Login = () => {
  return (
    <div className="app__login-container">
      <motion.div
        whileInView={{ x: [200, 0] }}
        transition={{ ease: "easeIn", duration: 0.75 }}
        className="app__login-subcontainer"
      >
        <div className="left">
          <div className="title-container">
            <h1>Welcome back !</h1>
            <p>You can sign in to access with your existing profile</p>
          </div>
        </div>
        <div className="right">
          <div className="app__right-subContainer">
            <div className="app__sign-title">
              <h1>Sign In</h1>
              <p>
                Please enter your login information or click here to
                registration
              </p>
            </div>
            <div className="app__form">
              <form action="" className="form-container">
                <input type="email" placeholder="Enter your email" />
                <input placeholder="Enter your password" type="password" />
              </form>
            </div>

            <div className="btn-container">
              <button className="btn">log In</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
