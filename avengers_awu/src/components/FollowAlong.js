import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook, faPinterest, faYoutube, faFlipboard } from '@fortawesome/free-brands-svg-icons';
import './style/FollowAlong.css';

const FollowAlong = () => {
    return (
        <div className="follow-along-container">
            <h3 className="follow-along-title">FOLLOW ALONG</h3>
            <div className="icons-container">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} className="social-icon" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                </a>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPinterest} className="social-icon" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
                <a href="https://www.flipboard.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFlipboard} className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default FollowAlong;
