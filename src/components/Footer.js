import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <div className="body">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-about footer-section">
            <div className="footer-header">
              <h3>About IEEE</h3>
            </div>
            <div className="footer-data">
              <div className="footer-data-description">
                <p>
                  IEEE is the world's largest technical professional
                  organization dedicated to advancing technology for the benefit
                  of humanity.
                </p>
              </div>
              <div className="footer-data-buttons footer-buttons">
                <a href="https://www.ieee.org/about/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=learn-more">
                  {" "}
                  <button className="btn"> {">"} Learn more about IEEE</button>
                </a>
                <a href="https://www.ieee.org/about/vision-mission.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=mission-vision">
                  <button className="btn"> {">"} IEEE Mission & Vision</button>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-locations footer-section">
            <div className="footer-header">
              <h3>Locations</h3>
            </div>
            <div className="footer-data">
              <div className="footer-data-description">
                <p>
                  IEEE has a global presence with seven offices internationally.
                </p>
              </div>
              <div className="footer-data-buttons footer-buttons">
                <a href="https://www.ieee.org/about/contact.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=office-locations">
                  <button className="btn"> {">"} IEEE office locations</button>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-membership footer-section">
            <div className="footer-header">
              <h3>Membership</h3>
            </div>
            <div className="footer-data-buttons footer-buttons">
              <a href="https://www.ieee.org/membership/join/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=join">
                <button className="btn">{">"} Join</button>
              </a>
              <a href="https://www.ieee.org/membership/renew.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=renew">
                {" "}
                <button className="btn">{">"} Renew</button>
              </a>
              <a href="https://www.ieee.org/membership/benefits/index.html">
                <button className="btn">{">"} Benefits</button>
              </a>
              <a href="https://ieee-collabratec.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=collabratec-membership-list">
                {" "}
                <button className="btn">{">"} IEEE Collabratec</button>
              </a>
            </div>
          </div>
          <div className="footer-connect footer-section">
            <div className="footer-header">
              <h3>Connect with IEEE</h3>
            </div>
            <div>
              <a href="https://www.ieee.org/about/contact.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=contact-support-button">
                {" "}
                <button className="btn-contact">Contact & Support</button>
              </a>
            </div>
            <div className="footer-data-buttons footer-buttons">
              <a href="https://ieee-collabratec.ieee.org/?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=collabratec">
                <button className="btn">{">"} IEEE Collabratec</button>
              </a>
              <a href="https://ieee.taleo.net/careersection/2/jobsearch.ftl?utm_source=mf&utm_campaign=taleo-jobs&utm_medium=footer&utm_term=taleo-jobs%20at%20ieee">
                <button className="btn">{">"} Careers at IEEE</button>
              </a>
              <a href="https://www.ieee.org/about/news/index.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=newsroom">
                {" "}
                <button className="btn">{">"} IEEE Newsroom</button>
              </a>
              <button className="btn">
                {">"}
                <Link
                  style={{
                    fontSize: "inherit",
                    color: "inherit",
                    fontFamily: "inherit",
                    textDecoration: "none",
                  }}
                  to="/branch"
                >
                  Admin Login
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="footer-icons">
          <div className="footer-socialedia">
            <a href="https://www.instagram.com/ieeeorg/?hl=en">
              {" "}
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* <i className="fa-brands fa-facebook"></i> */}
            <a href="https://www.linkedin.com/company/ieee-nit-jamshedpur/?originalSubdomain=in">
              {" "}
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <i className="fa-brands fa-youtube"></i>
            {/* <i class="fa-brands fa-x-twitter"></i> */}
            {/* <i className="fa-sharp fa-solid fa-share-nodes"></i> */}
          </div>
          <div className="footer-top">
            <i className="fa-solid fa-circle-up" onClick={goToBtn}></i>
            <p className="top-of-page">TOP OF PAGE</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-statement">
          <p>
            © Copyright 2023 IEEE Student NIT Jsr {"–"} All rights reserved. A
            not-for-profit organization, IEEE is the world's largest technical
            professional organization dedicated to advancing technology for the
            benefit of humanity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
