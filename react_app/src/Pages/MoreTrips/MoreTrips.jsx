import React from "react";
import Navbar from "../Navbar/Navbar";
import MoreTripsCss from "../MoreTrips/MoreTrips.module.css";
import Footer from "../../Components/Footer/Footer";

import trip01 from "./../../assets/trip01.jpg";
import trip02 from "./../../assets/trip02.jpg";
import trip03 from "./../../assets/trip03.jpg";
import trip04 from "./../../assets/trip04.jpg";
import trip05 from "./../../assets/trip05.jpg";
import trip06 from "./../../assets/trip06.jpg";
import trip07 from "./../../assets/trip07.jpg";
import trip08 from "./../../assets/trip08.jpg";
import trip09 from "./../../assets/trip09.jpg";
import trip10 from "./../../assets/trip10.jpg";
import trip11 from "./../../assets/trip11.jpg";
import trip12 from "./../../assets/trip12.jpg";
import trip13 from "./../../assets/trip13.jpg";
import trip14 from "./../../assets/trip14.jpg";
import trip15 from "./../../assets/trip15.jpg";
import trip16 from "./../../assets/trip16.jpg";
import trip17 from "./../../assets/trip17.jpg";
import trip18 from "./../../assets/trip18.jpg";

function MoreTrips() {
  return (
    <div>
      <Navbar />

      <div className={`${MoreTripsCss.trips_wrapper} section`} id="moretrips">
        <h1>Popular Trips</h1>

        <div className={MoreTripsCss.cards}>
          <div className={MoreTripsCss.card}>
            <img src={trip01} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Classic China Tour</h3>

              <div className={MoreTripsCss.TripDetails}>
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

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 1,05,499 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>

          <div className={MoreTripsCss.card}>
            <img src={trip02} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <h3>Best of Thailand</h3>

              <div className={MoreTripsCss.TripDetails}>
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

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 69,999 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>

          <div className={MoreTripsCss.card}>
            <img src={trip03} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-line"></i>
              </div>

              <h3>Incredible Italy Trip</h3>

              <div className={MoreTripsCss.TripDetails}>
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

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 2,12,400 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>

          <div className={MoreTripsCss.card}>
            <img src={trip04} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Maldives</h3>

              <div className={MoreTripsCss.TripDetails}>
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

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 1,36,000  </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>

          <div className={MoreTripsCss.card}>
            <img src={trip05} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>South India Holiday Package</h3>

              <div className={MoreTripsCss.TripDetails}>
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

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 40,000 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>

          <div className={MoreTripsCss.card}>
            <img src={trip06} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Epic Singapore Vacation</h3>

              <div className={MoreTripsCss.TripDetails}>
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

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 1,12,000 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip07} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <h3>Cherry Blossom in Japan</h3>

              <div className={MoreTripsCss.TripDetails}>
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

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 2,65,000 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip08} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Explore Bali 10-Days Tour</h3>

              <div className={MoreTripsCss.TripDetails}>
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

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 1,27,059 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip09} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Dubai Adventures</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>7 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>10 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i> Dubai{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 85,800 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip10} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Explore Vietnam</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>8 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>10 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i> Vietnam{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 75,250 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip11} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Singapore & Bali Trip</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>9 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>7 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i> Indonesia{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 1,70,100 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip12} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <h3>Discover South Korea</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>9 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>8 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i> South Korea{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 2,15,400 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip13} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Andaman</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>6 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>14 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i>India{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 54,950 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip14} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Beautiful Kathmandu</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>5 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>4 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i>Nepal{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 45,799 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip15} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Malaysia</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>7 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>5 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i>Malaysia{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 97,000 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip16} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Phuket Island</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>5 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>3 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i>Thailand{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 48,499 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip17} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Sri Lanka Vacation</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>7 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>8 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i>Sri Lanka{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 69,899 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
          <div className={MoreTripsCss.card}>
            <img src={trip18} alt="" />
            <div className={MoreTripsCss.TripContent}>
              <div className={MoreTripsCss.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <h3>Stunning Kashmir</h3>

              <div className={MoreTripsCss.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i>6 Days{" "}
                </span>
                <span>
                  <i className="ri-map-pin-line"></i>9 Activities{" "}
                </span>
                <span>
                  <i className="ri-flag-line"></i>India{" "}
                </span>
              </div>

              <div className={MoreTripsCss.Pricing}>
                <span className={MoreTripsCss.price}>Rs. 30,199 </span>
                <button className={MoreTripsCss.book}> Book Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default MoreTrips;
