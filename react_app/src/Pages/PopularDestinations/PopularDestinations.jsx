import React from "react";
import Navbar from "../Navbar/Navbar";
import PopularDestinationsCSS from "./PopularDestinations.module.css";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

import PopularDestinations01 from "./../../assets/destination01.jpg";
import PopularDestinations02 from "./../../assets/destination02.jpg";
import PopularDestinations03 from "./../../assets/destination03.jpg";
import PopularDestinations04 from "./../../assets/destination04.jpg";
import PopularDestinations05 from "./../../assets/destination05.jpg";
import PopularDestinations06 from "./../../assets/destination06.jpg";
import PopularDestinations07 from "./../../assets/destination07.jpg";
import PopularDestinations08 from "./../../assets/destination08.jpg";
import PopularDestinations09 from "./../../assets/destination09.jpg";
import PopularDestinations10 from "./../../assets/destination10.jpg";
import PopularDestinations11 from "./../../assets/destination11.jpg";
import PopularDestinations12 from "./../../assets/destination12.jpg";

function PopularDestinations() {
  return (
    <div>
      <Navbar />

      <div className={`${PopularDestinationsCSS.PopularDestinations_wrapper} section`}
        id="PopularDestinations">
        <h1>Popular Destinations</h1>

        <div className={PopularDestinationsCSS.PopularDestinationsCards}>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations01} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Europe</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations02} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Japan</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations03} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Singapore</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations04} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Indonesia</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations05} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>China</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations06} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Thailand</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations07} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Vietnam</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations08} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>India</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations09} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Sri Lanka</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations10} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Maldives</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations11} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>South Korea</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
          <div className={PopularDestinationsCSS.PopularDestinationsCard}>
            <img src={PopularDestinations12} alt="img-destination" />
            <div className={PopularDestinationsCSS.PopularDestinationsDetails}>
              <h3>Bali</h3>
              <div className={PopularDestinationsCSS.btns}>
                <Link to="/moretrips">Deals</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PopularDestinations;
