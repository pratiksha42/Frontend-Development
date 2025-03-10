import React from "react";
import navCSS from './Nav.module.css';
import { useRef } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const menu = useRef();

    const MenuHandler = () =>{
        menu.current.classList.toggle(navCSS.activeMenu)
    }



    return (
        <div className={navCSS.Nav_wrapper}>
            <div className={navCSS.logo}>
                <Link to="/">TRAVELOGIC</Link>
            </div>
            
            <ul ref={menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="./../MoreTrips">Trips</Link></li>
                <li><Link to="/AboutPage">About</Link></li>
                <li><a href="#searches">Searches</a></li>
                <li><a href="#destinations">Popular Destinations</a></li>
            </ul>

            <div className={navCSS.nav_btns}>
                <div className={navCSS.search_wrapper}>
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder="Search Places"/>
                </div>
                <i className="ri-menu-2-line" onClick={MenuHandler} id={navCSS.bars}></i>
            </div>
        </div>
    )
}

export default Nav