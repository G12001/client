import "./Newsletter.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">News Letter</span>
        <span className="big-text">Sign up for latest updates & offers</span>
        <div className="form">
            <input type="text" placeholder="example@gmail.com" />
            <button>Subscribe</button>
        </div>
        <div>Will be used in accordance our Privacy & Policy</div>
        <div className="social-icons">
            <div className="icon"><FaFacebook size={14}/></div>
            <div className="icon"><FaTwitter size={14}/></div>
            <div className="icon"><FaInstagram size={14} /></div>
            <div className="icon"><FaLinkedin size={14}/></div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
