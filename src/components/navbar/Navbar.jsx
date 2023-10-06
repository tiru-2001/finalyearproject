import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { images } from "../../constants/assets";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log("RENDRR");
  return (
    <div className="app__navbar">
      <div className="logo app__flex">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__flex   app__links-container">
        <li>
          <Link className="app__links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/Login">
            Login
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/Register">
            Register
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/contactus">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="app__links" to="/aboutus">
            About Us
          </Link>
        </li>
      </ul>

      <div className="app__responsive-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(!toggle);
          }}
        />

        {toggle && (
          <>
            <motion.div
              whileInView={{ y: [500, 0] }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className=" app__menu-container"
            >
              <ul className="">
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/Login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/Register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="app__links"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    to="/aboutus"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
              <HiX
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
