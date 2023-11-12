import React, { useState } from "react";
import logo from "../resources/logo.png";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
                        <li>
                            <a className="navbar-buttons" href="/">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="navbar-buttons" href="/events">
                                Events
                            </a>
                        </li>
                        <li>
                            <a className="navbar-buttons" href="/">
                                Branch Chapters
                            </a>
                        </li>
                        <li>
                            <a className="navbar-buttons" href="/">
                                Membership
                            </a>
                        </li>
                        <li>
                            <a className="navbar-buttons" href="/">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a className="navbar-buttons" href="/">
                                Our team
                            </a>
                        </li>
                    </ul>
                </div>

                {/* hamburget menu start  */}
                <div className="hamburger-menu">
                    <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu className="hamburger-logo" />
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;