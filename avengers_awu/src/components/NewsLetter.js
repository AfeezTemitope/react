import React from 'react';
import './style/NewsLetter.css';

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h3 className="newsletter-title">NEWSLETTER</h3>
            <p className="newsletter-text">
                Enjoy a daily dose of badness tour, before & afters, decorating hacks, and more.
            </p>
            <div className="newsletter-input-container">
                <input type="email" placeholder="Email" className="newsletter-input" />
                <button className="newsletter-button">
                    <span className="arrow">→</span>
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
