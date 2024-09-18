import React from 'react';
import {Link} from 'react-router-dom';
import "./style/navBar.css"

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>MyApp</h1>
            </div>
            <div className="navbar-link">
                <li><Link to="/dashBoard">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </div>
        </nav>
    )
}

export default NavBar;