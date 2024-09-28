import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import  {jwtDecode} from 'jwt-decode';
import '../components/style/LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const googleImage = 'https://img1.pnghut.com/21/25/12/fF6cnrfqeA/brand-google-text-logo-product-sans.jpg';
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
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

        fetch('http://localhost:8080/api/users/confirm?', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert('Google login successful!');
                    navigate('/login');
                } else {
                    alert('Google login failed. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error during Google login:', error);
                alert('An error occurred. Please try again.');
            });
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
                    type="email"
                    className="email-input"
                    placeholder="nonsense@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="email-button" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Continue with Email'}
                </button>
            </form>

            <p className="terms-text">
                By signing up, signing in, or continuing, I agree to Apartment Therapy
                Media’s <button className="link-button" onClick={() => handleTermsClick('/terms-of-use')}>Terms of Use</button> and <button className="link-button" onClick={() => handleTermsClick('/privacy-policy')}>Privacy Policy</button>.
            </p>
        </div>
    );
};

export default LoginForm;
