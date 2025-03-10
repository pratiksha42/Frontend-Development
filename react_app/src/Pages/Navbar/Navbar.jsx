import React from "react";
import NavbarCSS from './Navbar.module.css';
import { useRef } from "react";
import { Link } from "react-router-dom";



function Navbar() {
    const menu = useRef();

    const MenuHandler = () =>{
        if (menu.current){
            menu.current.classList.toggle(NavbarCSS.activeMenu);
        }
    }



    return (
        <div className={NavbarCSS.Navbar_wrapper}>
            <div className={NavbarCSS.logo}>

                <Link to="/">TRAVELOGIC</Link>
            </div>
            
            <ul ref={menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/moretrips">Trips</Link></li>
                <li><Link to="/aboutpage">About</Link></li>
                <li><Link to="/populardestinations">Popular Destinations</Link></li>
                
            </ul>

            <div className={NavbarCSS.Navbar_btns}>
                <div className={NavbarCSS.search_wrapper}>
                    <i className="ri-search-line"></i>
                    <input type="text" placeholder="Search Places"/>
                </div>
                <i className="ri-menu-2-line" onClick={MenuHandler} id={NavbarCSS.bars}></i>
            </div>
        </div>
    )
}

export default Navbar