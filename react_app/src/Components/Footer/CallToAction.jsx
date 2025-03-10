import React from "react";
import { Link } from "react-router-dom";
import calltoactionCSS from './../Footer/CallToAction.module.css';

function CallToAction() {
    return (
        <div className={`${calltoactionCSS.CalltoAction_wrapper} section`}>
            <h2>Explore Iconic Popular Destinations</h2>
            <Link to="./../PopularDestinations">
            <button>Book Adventure</button>
            </Link>
        </div>
    )
}

export default CallToAction