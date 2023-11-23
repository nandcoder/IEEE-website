import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='team'>
      <div className='body'>
        <div className='footer'>
          <div className='footer-content'>
            <div className='footer-about footer-section'>
              <div className='footer-header'>
                <h3>About IEEE</h3>
              </div>
              <div className='footer-data'>
                <div className='footer-data-description'>
                  <p>
                    IEEE is the world's largest technical professional
                    organization dedicated to advancing technology for the
                    benefit of humanity.
                  </p>
                </div>
                <div className='footer-data-buttons footer-buttons'>
                  <button className='btn'> {'>'} Learn more about IEEE</button>
                  <button className='btn'> {'>'} IEEE Mission & Vision</button>
                </div>
              </div>
            </div>
            <div className='footer-locations footer-section'>
              <div className='footer-header'>
                <h3>Locations</h3>
              </div>
              <div className='footer-data'>
                <div className='footer-data-description'>
                  <p>
                    IEEE has a global presence with seven offices
                    internationally.
                  </p>
                </div>
                <div className='footer-data-buttons footer-buttons'>
                  <button className='btn'> {'>'} IEEE office locations</button>
                </div>
              </div>
            </div>
            <div className='footer-membership footer-section'>
              <div className='footer-header'>
                <h3>Membership</h3>
              </div>
              <div className='footer-data-buttons footer-buttons'>
                <button className='btn'>{'>'} Join</button>
                <button className='btn'>{'>'} Renew</button>
                <button className='btn'>{'>'} Benefits</button>
                <button className='btn'>{'>'} IEEE Collabratec</button>
              </div>
            </div>
            <div className='footer-connect footer-section'>
              <div className='footer-header'>
                <h3>Connect with IEEE</h3>
              </div>
              <div>
                <button className='btn-contact'>Contact & Support</button>
              </div>
              <div className='footer-data-buttons footer-buttons'>
                <button className='btn'>{'>'} IEEE Collabratec</button>
                <button className='btn'>{'>'} Careers at IEEE</button>
                <button className='btn'>{'>'} IEEE Newsroom</button>
                <button className='btn'>
                  {'>'}
                  <Link
                    style={{
                      fontSize: 'inherit',
                      color: 'inherit',
                      fontFamily: 'inherit',
                      textDecoration: 'none',
                    }}
                    to='/branch'
                  >
                    Admin Login
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className='footer-icons'>
            <div className='footer-socialedia'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-linkedin-in'></i>
              <i className='fa-brands fa-youtube'></i>
              <i class='fa-brands fa-x-twitter'></i>
              <i className='fa-sharp fa-solid fa-share-nodes'></i>
            </div>
            <div className='footer-top'>
              <i className='fa-solid fa-circle-up'></i>
              <p className='top-of-page'>TOP OF PAGE</p>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='footer-copyright-statement'>
            <p>
              © Copyright 2023 IEEE {'–'} All rights reserved. A not-for-profit
              organization, IEEE is the world's largest technical professional
              organization dedicated to advancing technology for the benefit of
              humanity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
