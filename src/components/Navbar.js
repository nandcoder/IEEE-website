<<<<<<< HEAD
import React from 'react';
import logo from '../resources/logo.png';
import ieeeLogo from '../resources/ieee_logo.png';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className='head-wrapper'>
        <img
          src={logo}
          alt='Logo'
          className='logo'
          style={{ marginLeft: '5%', height: 'auto', width: 'auto' }}
        />
        <div className='heading'>
          <div className='text-2xl font-bold'>
            IEEE Student Branch NIT Jamshedpur
          </div>
          <div style={{ marginTop: '-2%' }} className='text-lg font-medium'>
            The professional home for the engineering <br></br> and technology
            community at NIT Jamshedpur
          </div>
        </div>
        <img src={ieeeLogo} alt='IEEE Logo' className='ieee-logo' />
      </div>
      <div className='container buttons'>
        <button>
          <u style={{ textUnderlinePosition: 'under' }}>About</u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: 'under' }}>Events</u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: 'under' }}>Branch Chapters</u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: 'under' }}>Resources</u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: 'under' }}>Membership</u>
        </button>
        <button>
          <u style={{ textUnderlinePosition: 'under' }}>Contact Us</u>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
=======
import React, { useState } from "react";
import logo from "../resources/logo.png";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

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
>>>>>>> main
