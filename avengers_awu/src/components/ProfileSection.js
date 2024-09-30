import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import './style/ProfileSection.css';
import Semi from '../asset/Semi.jpg'

const ProfileSection = () => {
    const [userInfo, setUserInfo] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => setUserInfo(data))
                .catch((error) => console.log('Error fetching user info:', error));
        },
        onError: () => console.log('Login Failed'),
    });

    return (
        <div className="profile-section">
            <div className="profile-details">
                {userInfo ? (
                    <>
                        <img
                            src={userInfo.picture}
                            alt="Google Profile"
                            className="profile-picture"
                        />
                        <div className="profile-text">
                            <h2>{userInfo.name}</h2>
                            <p>{userInfo.email.split('@')[0]}</p>
                        </div>
                    </>
                ) : (
                    <button onClick={login} className="login-button">
                        Sign in with Google
                    </button>
                )}
            </div>
            <div className="profile-tagline">
                <h1>The Avengers you love stayed strong.</h1>
                <img
                    src={Semi}
                    alt="Home Icon"
                    className="home-icon"
                />
            </div>
        </div>
    );
};

export default ProfileSection;
