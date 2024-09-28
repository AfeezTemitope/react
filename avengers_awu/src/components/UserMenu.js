import React from 'react';
import './style/UserMenu.css';
import {useNavigate} from "react-router-dom";

const UserMenu = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    }
    return (
        <div className="user-menu">
            <button className="login-button" onClick={handleLoginClick}>LOG IN</button>
            <button className="menu-button">
                <span className="menu-icon">☰</span>
            </button>
        </div>
    );
};

export default UserMenu;
