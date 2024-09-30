import React from 'react';
import './style/Logo.css';
import Avg from '../asset/Avg.png'

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={Avg} alt="Logo" className="logo" />
            <h1 className="tagline">TOMI / OBA / ALFA / BADAFEEZ</h1>
        </div>
    );
};

export default Logo;
