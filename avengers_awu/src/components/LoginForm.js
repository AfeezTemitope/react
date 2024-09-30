import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import '../components/style/LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    { firstName,
                            email,
                            lastName,
                            userName,
                            password}),
            });

            if (response.ok) {
                alert('Verification email sent! Check your inbox.');
            } else {
                alert('There was a problem sending the verification email. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLoginSuccess = (response) => {
        const token = response.credential;
        const userObject = jwtDecode(token);


        const userData = {
            name: userObject.name,
            profilePic: userObject.picture,
            email: userObject.email
        };

        console.log('Decoded user data:', userData);


        navigate('/dashboard', { state: userData });
    };

    const handleTermsClick = (path) => {
        navigate(path);
    };

    return (
        <div className="login-container">
            <h2>Log In or Sign Up</h2>

            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => console.log('Google login failed')}
            />

            <p className="or-text">or</p>

            <form onSubmit={handleEmailSubmit}>
                <input
                    type="text"
                    className="name-input"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    className="name-input"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    className="username-input"
                    placeholder="Enter your username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    className="email-input"
                    placeholder="nonsense@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    className="email-input"
                    placeholder="Confirm your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

            {/*    <button type="submit">Submit</button>*/}
            {/*</form>*/}

            <button className="email-button" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Continue with Email'}
            </button>
        </form>

    <p className="terms-text">
        By signing up, signing in, or continuing, I agree to Apartment Therapy
        Media’s <button className="link-button" onClick={() => handleTermsClick('/terms-of-use')}>Terms of
        Use</button> and <button className="link-button" onClick={() => handleTermsClick('/privacy-policy')}>Privacy
        Policy</button>.
    </p>
</div>
)
    ;
};

export default LoginForm;
