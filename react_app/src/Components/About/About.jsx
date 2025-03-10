import React from "react";
import aboutCSS from "./../About/About.module.css";
import Nav from "../Nav/Nav";

import aboutImg from "./../../assets/about-bg.jpg";

function About() {
  return (
    <div>
        <Nav />
      <div className={`${aboutCSS.about_wrapper} section`} id="about">
        <div className={aboutCSS.about_image}>
          <img src={aboutImg} alt="about-img" />
        </div>
        <div className={aboutCSS.about_content}>
          <h2>
            Discover Organized <br /> Adventures the, <br />
            Ultimate Travel Hack
          </h2>

          <p>
          At Travelogic, we believe that every journey should be effortless, exciting, and unforgettable.
          Whether you're looking for a serene escape or an action-packed adventure, we've curated the  
  ultimate travel experiences to make your dream trips a reality. Our organized tours take the  
  stress out of planning, so you can focus on making memories.
          </p>

          <div className={aboutCSS.about}>
            <p>
              <i className="ri-building-4-line"></i> Accommodation
            </p>
            <p>
              <i className="ri-car-line"></i> Transportation allowance
            </p>
            <p>
              <i className="ri-magic-line"></i> Exclusive Experience
            </p>
            <p>
              <i className="ri-instance-line"></i> Local recommendations
            </p>
            <p>
              <i className="ri-pin-distance-line"></i> Personalized trip
              crafting
            </p>
            <p>
              <i className="ri-phone-line"></i> 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
