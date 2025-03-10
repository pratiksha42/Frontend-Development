import React from "react";
import searchCSS from "./../Searches/Search.module.css"
 
function Search () {
    return(
        <div className={`${searchCSS.search_wrapper} section`} id="searches">
            <h2>Popular Searches</h2>

            <div className={searchCSS.cards}>
                <div className={searchCSS.card}>
                    <i className="ri-search-line" aria-hidden="true"></i>

                    <h3>Domestic Trips <span> See America In a New Light</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3>Adventure Getaways <span> Thrilling Trips for Adrenaline Seekers</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3>Offer for Traveling Groups <span> Save When you're 9+ Guests </span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3>Last-Minute Deals <span> Huge Discounts on Upcoming Departures</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3>Past Guest Benefits <span> Saving With Our Global Tour Rewards</span></h3>
                </div>
                <div className={searchCSS.card}>
                    <i className="ri-search-line"></i>

                    <h3>Eco-Friendly Tours<span> Travel Sustainably & Responsibly</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Search