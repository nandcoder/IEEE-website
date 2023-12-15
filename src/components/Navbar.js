import React, { useState } from "react";
import logo from "../resources/logo.png";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <React.Fragment>
      <nav className="main-nav" id="navbar" style={{ marginBottom: "10px" }}>
        {/* 1st logo part  */}
        {/* <NavLink to='/' > */}
        <div className="head">
          <NavLink to="/" style={{ color: "black" }}>
            <div className="logo-div">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="heading">
              <div className="main-heading">IEEE Student Branch</div>
              <div className="sub-heading">NIT Jamshedpur</div>
            </div>
          </NavLink>
        </div>
        {/* </NavLink> */}

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li className="navbar-buttons cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <Link
                to="event"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Events
              </Link>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <Link
                to="branchchapters"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Branch Chapters
              </Link>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <Link
                to="membership"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Membership
              </Link>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <Link
                to="contactus"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li className="navbar-buttons cursor-pointer">
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Our team
              </Link>
            </li>
          </ul>
        </div>

        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <div onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className="hamburger-logo" />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
