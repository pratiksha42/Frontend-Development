import React from "react";
import TripCSS from "../Trips/Trips.module.css";
import { Link } from "react-router-dom";

import trip01 from "./../../assets/trip01.jpg";
import trip02 from "./../../assets/trip02.jpg";
import trip03 from "./../../assets/trip03.jpg";
import trip04 from "./../../assets/trip04.jpg";
import trip05 from "./../../assets/trip05.jpg";
import trip06 from "./../../assets/trip06.jpg";
import trip07 from "./../../assets/trip07.jpg";
import trip08 from "./../../assets/trip08.jpg";

function Trips() {
  return (
    <div className={`${TripCSS.trips_wrapper} section`} id="trips">
      <h2>Popular Trips</h2>

      <div className={TripCSS.cards}>
        <div className={TripCSS.card}>
          <img src={trip01} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>

            <h3>Classic China Tour</h3>

            <div className={TripCSS.TripDetails}>
              <span>
                <i className="ri-calendar-line"></i>6 Days{" "}
              </span>
              <span>
                <i className="ri-map-pin-line"></i>5 Activities{" "}
              </span>
              <span>
                <i className="ri-flag-line"></i>China{" "}
              </span>
            </div>

            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>Rs. 1,05,499 </span>
              <button className={TripCSS.book}> Book Now</button>
            </div>
          </div>
        </div>

        <div className={TripCSS.card}>
          <img src={trip02} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>

            <h3>Best of Thailand</h3>

            <div className={TripCSS.TripDetails}>
              <span>
                <i className="ri-calendar-line"></i>6 Days{" "}
              </span>
              <span>
                <i className="ri-map-pin-line"></i>7 Activities{" "}
              </span>
              <span>
                <i className="ri-flag-line"></i>Thailand{" "}
              </span>
            </div>

            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>Rs. 69,999 </span>
              <button className={TripCSS.book}> Book Now</button>
            </div>
          </div>
        </div>

        <div className={TripCSS.card}>
          <img src={trip03} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-line"></i>
            </div>

            <h3>Incredible Italy Trip</h3>

            <div className={TripCSS.TripDetails}>
              <span>
                <i className="ri-calendar-line"></i>12 Days{" "}
              </span>
              <span>
                <i className="ri-map-pin-line"></i>10 Activities{" "}
              </span>
              <span>
                <i className="ri-flag-line"></i>Italy{" "}
              </span>
            </div>

            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>Rs. 2,12,400 </span>
              <button className={TripCSS.book}> Book Now</button>
            </div>
          </div>
        </div>

        <div className={TripCSS.card}>
          <img src={trip04} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>

            <h3>Maldives</h3>

            <div className={TripCSS.TripDetails}>
              <span>
                <i className="ri-calendar-line"></i>5 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i>4 Activities
              </span>
              <span>
                <i className="ri-flag-line"></i>Maldives
              </span>
            </div>

            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>Rs. 1,36,000 </span>
              <button className={TripCSS.book}> Book Now</button>
            </div>
          </div>
        </div>

        <div className={TripCSS.card}>
          <img src={trip05} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
            </div>

            <h3>South India Holiday Package</h3>

            <div className={TripCSS.TripDetails}>
              <span>
                <i className="ri-calendar-line"></i>6 Days{" "}
              </span>
              <span>
                <i className="ri-map-pin-line"></i>10 Activities{" "}
              </span>
              <span>
                <i className="ri-flag-line"></i> India{" "}
              </span>
            </div>

            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>Rs. 40,000 </span>
              <button className={TripCSS.book}> Book Now</button>
            </div>
          </div>
        </div>

        <div className={TripCSS.card}>
          <img src={trip06} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-line"></i>
            </div>

            <h3>Epic Singapore Vacation</h3>

            <div className={TripCSS.TripDetails}>
              <span>
                <i className="ri-calendar-line"></i>7 Days{" "}
              </span>
              <span>
                <i className="ri-map-pin-line"></i>5 Activities{" "}
              </span>
              <span>
                <i className="ri-flag-line"></i> Singapore{" "}
              </span>
            </div>

            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>Rs. 1,12,000 </span>
              <button className={TripCSS.book}> Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip07} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>

            <h3>Cherry Blossom in Japan</h3>

            <div className={TripCSS.TripDetails}>
              <span>
                <i className="ri-calendar-line"></i>8 Days{" "}
              </span>
              <span>
                <i className="ri-map-pin-line"></i>14 Activities{" "}
              </span>
              <span>
                <i className="ri-flag-line"></i> Japan{" "}
              </span>
            </div>

            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>Rs. 2,65,000</span>
              <button className={TripCSS.book}> Book Now</button>
            </div>
          </div>
        </div>
        <div className={TripCSS.card}>
          <img src={trip08} alt="" />
          <div className={TripCSS.TripContent}>
            <div className={TripCSS.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>

            <h3>Explore Bali 10-Days Tour</h3>

            <div className={TripCSS.TripDetails}>
              <span>
                <i className="ri-calendar-line"></i>10 Days{" "}
              </span>
              <span>
                <i className="ri-map-pin-line"></i>25 Activities{" "}
              </span>
              <span>
                <i className="ri-flag-line"></i> Bali{" "}
              </span>
            </div>

            <div className={TripCSS.Pricing}>
              <span className={TripCSS.price}>Rs. 1,27,059 </span>
              <button className={TripCSS.book}> Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className={TripCSS.loadMore}>
      <Link to="/moreTrips">
          <button className={TripCSS.loadBtn}> Load More </button>
        </Link>
      </div>
    </div>
  );
}

export default Trips;
