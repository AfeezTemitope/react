import React from 'react';
import './style/ImageSection.css';
import Semi from "../asset/Semi.jpg"

const ImageSection = () => {
    return (
        <div className="image-section">
            <div className="image-wrapper">

                <img src={Semi} alt="semicolon" className="main-image"/>

                <div className="arrow-overlay">
                    <span className="arrow-icon">↗</span>
                </div>
            </div>

            <div className="text-section">
                <p className="image-caption">AVENGERS AWU!!</p>
            </div>
            <h1>This is The Difference Between Avengers And Noobs</h1>
        </div>
    );
};

export default ImageSection;
