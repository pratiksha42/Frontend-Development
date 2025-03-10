import React from "react";
import footerCSS from "./../Footer/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={`${footerCSS.Footer_wrapper} section`}>
      <div className={footerCSS.top_container}>
        <div className={footerCSS.logo}>
          <a href="#">TRAVELOGIC</a>
        </div>
        <div className={footerCSS.social}>
          <i className="ri-facebook-line"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-twitter-x-line"></i>
          <i className="ri-youtube-line"></i>
        </div>
      </div>
      <div className={footerCSS.bottom_container}>
        <div className={footerCSS.footerLinks}>
            <h3>About Travelogic</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/MoreTrips">Trips</Link></li>
                <li><Link to="/AboutPage">About</Link></li>
                <li><Link to="/PopularDestinations">Popular Destinations</Link></li>
            </ul>
        </div>

        <div className={footerCSS.footerLinks}>
            <h3>Destinations</h3>
            <ul>
                <li><a href="#">India</a></li>
                <li><a href="#">China</a></li>
                <li><a href="#">Japan</a></li>
                <li><a href="#">Europe</a></li>
            </ul>
        </div>

        <div className={footerCSS.footerLinks}>
            <h3>Support</h3>
            <ul>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Booking Conditions</a></li>
                <li><a href="#">Recommendations</a></li>
            </ul>
        </div>

        <div className={footerCSS.footerLinks}>
            <h3>Our NewsLetter</h3>
            <p> <strong>🌍 Stay Inspired, Travel More!</strong> <br />
            Subscribe to our newsletter and get the latest travel deals, tips, and exclusive discounts straight to your inbox.</p>

            <div className={footerCSS.inputWrapper}>
                <input type="email" placeholder="Enter Your email" />
                <button>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
