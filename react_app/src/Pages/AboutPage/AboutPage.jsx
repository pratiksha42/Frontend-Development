import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutPageCSS from "./AboutPage.module.css";
import Footer from "../../Components/Footer/Footer";

import aboutImg from "./../../assets/aboutus.jpg";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className={AboutPageCSS.about_section} id="aboutpage">
        <div class={AboutPageCSS.about_content}>
          <h1>About Us</h1>
          <div className={AboutPageCSS.about_image}>
            <img src={aboutImg} alt="aboutus" />
          </div>
          <h2>
            🌍 <strong>Explore the World with Us!</strong>
          </h2>
          <p>
            At <strong>Traveler's Hub</strong>, we believe in the magic of
            travel. Whether you seek adventure, relaxation, or cultural
            immersion, we bring you the best destinations, handpicked
            itineraries, and expert travel tips.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>
            <strong>Expertly Curated Trips</strong> – Handpicked travel
              destinations and itineraries tailored to your needs.
            </li>
            <li>
            <strong>Affordable & Flexible Packages</strong> –
              Budget-friendly options for solo travelers, families, and groups.
            </li>
            <li>
            <strong>24/7 Customer Support</strong> – We are always here to
              assist you on your journey.
            </li>
            <li>
            <strong>Local Insights</strong> – Discover hidden gems and
              authentic experiences with our travel guides.
            </li>
          </ul>

          <h3>Our Mission</h3>
          <p>
            Our mission is simple <strong>:</strong> to inspire and help travelers explore the
            world with ease. Whether you dream of relaxing on tropical beaches,
            hiking through breathtaking landscapes, or discovering vibrant
            cities, we provide the resources and guidance to turn your travel
            dreams into reality. <br />
            Let’s embark on an adventure together! Pack your bags, book your
            trip, and experience the world like never before. ✈️✨
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
