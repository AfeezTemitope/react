import React from 'react';
import { useLocation } from 'react-router-dom';
import './style/DashHeader.css'

const DashHeader = () => {
    const location = useLocation();
    const { name, profilePic, email } = location.state || { name: 'Guest', profilePic: '', email: '' };

        return (
            <div className="mother-div">
            <div className="dashboard-container">
                <h1>Welcome, {name}!</h1>
                {profilePic && (
                    <img src={profilePic} alt={`${name}'s profile`} className="profile-image" />
                )}
                <p className="email-text">Email: {email}</p>
            </div>
                <div className="dashboard">
                <ul>
                    <li>We</li>
                    <li>Blew</li>
                    <li>YOUR-MIND</li>
                    <li>sheybi</li>
                </ul>
                </div>
            </div>
        );
    };

export default DashHeader;
