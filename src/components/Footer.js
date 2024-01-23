import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import SFU_logo from "../images/SFU_block_logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>

      <div className="footer-logo">
        <img src={SFU_logo} alt="sfu-logo"></img>
      </div>

      <div className="contact-section">
        <h3>CONTACT US</h3>
        <p>8888 University Drive</p>
        <p>Burnaby, B.C.</p>
        <p>Canada V5A 1S6</p>
      </div>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
            <Link to='https://twitter.com/sfu' target="_blank" rel="noopener noreferrer" className="link-item"> 
              <FontAwesomeIcon icon={faTwitter} size="1.5x" color="white"/>
            </Link>

            <Link to='https://www.instagram.com/simonfraseru/' target="_blank" rel="noopener noreferrer" className="link-item">
              <FontAwesomeIcon icon={faInstagram} size="1.5x" color="white"/>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <p className='website-rights'>© SIMON FRASER UNIVERSITY </p>
      </div>


    </div>
  );
}

export default Footer;
