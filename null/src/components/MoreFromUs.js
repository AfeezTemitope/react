import React from 'react';
import './style/MoreFromUs.css';

const MoreFromUs = () => {
    return (
        <div className="more-from-us-container">
            <h3 className="more-from-us-title">MORE FROM US</h3>
            <ul className="more-from-us-list">
                <li><a href="/team">Our Team</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/sitemap">Site Map</a></li>
            </ul>
        </div>
    );
};

export default MoreFromUs;
