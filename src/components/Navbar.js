import React, { useState } from "react";
import logo from "../resources/logo.png";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import ieeeLogo from '../resources/ieee_logo.png';


// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ScrollLink } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <React.Fragment>
      <nav className="main-nav" id="navbar">
        {/* 1st logo part  */}
        <div className="head">
          <div className="logo-div">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="heading">
            <div className="main-heading">IEEE Student Branch</div>
            <div className="sub-heading">NIT Jamshedpur</div>
          </div>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li className="navbar-buttons cursor-pointer">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={() => {
                  navigate("/");
                }}
              >
                About
              </ScrollLink>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <ScrollLink
                to="event"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={() => {
                  navigate("/");
                }}
              >
                Events
              </ScrollLink>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <ScrollLink
                to="branchchapters"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={() => {
                  navigate("/");
                }}
              >
                Branch Chapters
              </ScrollLink>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <ScrollLink
                to="membership"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={() => {
                  navigate("/");
                }}
              >
                Membership
              </ScrollLink>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <ScrollLink
                to="contactus"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={() => {
                  navigate("/");
                }}
              >
                Contact Us
              </ScrollLink>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <ScrollLink
                to="team"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={() => {
                  navigate("/");
                }}
              >
                Our team
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <p onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className="hamburger-logo" />
          </p>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
