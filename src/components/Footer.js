import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
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
              <h3>Location</h3>
            </div>
            <div className="footer-data">
              <div className="footer-data-description">
                <p>
                  Our IEEE student branch is located within the NIT Jamshepur
                  campus, Adityapur, Jharkhand - 831014
                </p>
              </div>
              <div className="footer-data-buttons footer-buttons">
                <a href="https://www.ieee.org/about/contact.html?utm_source=dhtml_footer&utm_medium=hp&utm_campaign=office-locations">
                  <button className="btn"> {">"} IEEE office locations</button>
                </a>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14714.745506649784!2d86.12609155541993!3d22.77701740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1702625360018!5m2!1sen!2sin"
                  style={{ width: "15em", height: "8em" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="NIT Jamshedpur Location on Google Maps"
                ></iframe>
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
                  to="https://eager-twill-ray.cyclic.app/admin/dashboard"
                >
                  Admin Login
                </Link>
              </button>
            </div>
          </div>
          {/* <div className="footer-connect footer-section">
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
                <button className="btn">{">"} IEEE Collabrate</button>
              </a>
              <a href="https://ieee.taleo.net/careersection/2/jobsearch.ftl?utm_source=mf&utm_campaign=taleo-jobs&utm_medium=footer&utm_term=taleo-jobs%20at%20ieee">
                <button className="btn">{">"} Careers at IEEE</button>
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
          </div> */}
        </div>
        {/* </div> */}
        <div
          className="footer-icons"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "98%",
            // margin: "1em",
          }}
        >
          <div className="footer-socialedia">
            <a
              href="https://www.instagram.com/ieee.nitjsr/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* <i className="fa-brands fa-facebook"></i> */}
            <a href="https://www.linkedin.com/company/ieee-nit-jamshedpur/?originalSubdomain=in">
              {" "}
              <i
                className="fa-brands fa-linkedin-in"
                target="_blank"
                rel="noreferrer"
              ></i>
            </a>
            <a href="https://www.youtube.com/@IEEEStudentBranchNITJamshedpur">
              <i className="fa-brands fa-youtube"></i>
            </a>
            {/* <i class="fa-brands fa-x-twitter"></i> */}
            {/* <i className="fa-sharp fa-solid fa-share-nodes"></i> */}
          </div>
          <div className="footer-top" onClick={goToBtn}>
            <i className="fa-solid fa-circle-up"></i>
            <ScrollLink
              to="carousel"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              onClick={() => {
                navigate("/");
              }}
            >
              <p className="top-of-page">TOP OF PAGE</p>
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-statement" style={{ width: "100%" }}>
          <p>
            Copyright © 2023 All rights reserved | Made with ❤️ by IEEE-NIT JSR
          </p>
          {/* <p>
            © Copyright 2023 IEEE Student NIT Jsr {"–"} All rights reserved. A
            not-for-profit organization, IEEE is the world's largest technical
            professional organization dedicated to advancing technology for the
            benefit of humanity.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
