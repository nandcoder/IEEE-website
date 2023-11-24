import React, { useState } from "react";
import logo from "../resources/logo.png";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleHamburgerClick = (e) => {
    e.preventDefault();
    setShowMediaIcons(!showMediaIcons);
  };

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
            <li>
              <a className="navbar-buttons" href="/">
                About
              </a>
            </li>
            <li>
              <Link className="navbar-buttons" to="/events">
                Events
              </Link>
            </li>
            <li>
              <a className="navbar-buttons" href="/">
                Branch Chapters
              </a>
            </li>
            <li>
              <a className="navbar-buttons" href="#membership">
                Membership
              </a>
            </li>
            <li>
              <a className="navbar-buttons" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* hamburger menu start  */}
        <div className="hamburger-menu">
          <a href="/" onClick={handleHamburgerClick}>
            <GiHamburgerMenu className="hamburger-logo" />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
