import React from 'react';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import Logo from './Logo';
import UserMenu from './UserMenu';
import './style/Header.css';

const Header = () => {
    return (
        <header className="headers">
            <div className="header">
                <p>🌹🌹🌹TO MY AWESOME TEAM MEMBERS❤️❤️❤️</p>
                <Logo />
            </div>
            <NavBar />
        </header>
    );
};

export default Header;
