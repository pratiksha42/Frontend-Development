import React from "react";
import destinationCSS from "./../Destinations/Destination.module.css";
import { Link } from "react-router-dom";

import destination01 from "./../../assets/destination01.jpg";
import destination02 from "./../../assets/destination02.jpg";
import destination03 from "./../../assets/destination03.jpg";
import destination04 from "./../../assets/destination04.jpg";
import destination05 from "./../../assets/destination05.jpg";
import destination06 from "./../../assets/destination06.jpg";

function Destination() {
  return (
    <div
      className={`${destinationCSS.destination_wrapper} section`}
      id="destinations"
    >
      <h2>Popular Destinations</h2>

      <div className={destinationCSS.DestinationCards}>
        <div className={destinationCSS.DestinationCard}>
          <img src={destination01} alt="img-destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>Europe</h3>
            <div className={destinationCSS.btns}>
              <Link to="/populardestinations">All Destinations</Link>
              <Link to="/moretrips">Deals</Link>
            </div>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={destination02} alt="img-destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>Japan</h3>
            <div className={destinationCSS.btns}>
              <Link to="/populardestinations">All Destinations</Link>
              <Link to="/moretrips">Deals</Link>
            </div>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={destination03} alt="img-destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>Singapore</h3>
            <div className={destinationCSS.btns}>
              <Link to="/populardestinations">All Destinations</Link>
              <Link to="/moretrips">Deals</Link>
            </div>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={destination04} alt="img-destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>Indonesia</h3>
            <div className={destinationCSS.btns}>
              <Link to="/populardestinations">All Destinations</Link>
              <Link to="/moretrips">Deals</Link>
            </div>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={destination05} alt="img-destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>China</h3>
            <div className={destinationCSS.btns}>
              <Link to="/populardestinations">All Destinations</Link>
              <Link to="/moretrips">Deals</Link>
            </div>
          </div>
        </div>
        <div className={destinationCSS.DestinationCard}>
          <img src={destination06} alt="img-destination" />
          <div className={destinationCSS.DestinationDetails}>
            <h3>Thailand</h3>
            <div className={destinationCSS.btns}>
              <Link to="/populardestinations">All Destinations</Link>
              <Link to="/moretrips">Deals</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
