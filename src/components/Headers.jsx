import React from 'react';
//import { Link } from 'react-router-dom';
import Avg from "../assets/Avg.png"
import "../../src/components/style/Header.css"

const Header = () => {
    return (
        <header className="header">
            <img src={Avg} className="logo" alt="avengers" />
            <h1>AVENGERS AWU BLOG </h1>
            <nav>
                <ul>

                    {/*<li className="item"><Link to="/contact">Contact Us</Link></li>*/}
                    <li className="item-button">Login</li>
                    <li className="item-button">Register</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
