import React from 'react';
import './style/SignInButton.css';
import Screen from '../asset/Screenshot (125).png';

const SignInButton = () => {
    return (
        <div className="sign-in-section">
            <div className="left">
                <h1>The Vlog  you love starts here.</h1>
                <p>Real Gees, real inspiration, really good ideas. We've got everything you need for your vlog here.</p>
                <p>Join for a personalized experience made just for you. It's free!</p>
                <div className="info-section">
                    <div className="info-item">
                        <span className="icon">🏡</span>
                        <p>4,000+ House Tours</p>
                    </div>
                    <div className="info-item">
                        <span className="icon">🛋️</span>
                        <p>1,000+ Before & Afters</p>
                    </div>
                    <div className="info-item">
                        <span className="icon">📸</span>
                        <p>480,000+ Photos</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Hi there! <span className="sign-in">Sign In</span></h2>
                <button className="arrow-button">
                    <span className="arrow-icon">→</span>
                </button>
                <ul className="options-list">
                    <li>
                        <span className="icon">💜</span> Start Saving
                        <p>Keep track of the stories you love.</p>
                    </li>
                    <li>
                        <span className="icon">💬</span> Community
                    </li>
                    <li>
                        <span className="icon">✅</span> Newsletters
                    </li>
                    <li>
                        <span className="icon">🏠</span> The Home Cure
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SignInButton;
