import Head from "../components/Head";
import { useState, useEffect } from "react";
import HomeLoveSection from "../components/HomeLoveSection";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                alert('Logged in successfully');
                //localStorage.setItem()
                navigate('/dashboard');
            } else {
                alert('Invalid credentials');
                window.location.reload();
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
            window.location.reload();
        }
    };

    return (
        <>
            <Head />
            <div className="login-page-form">
                <HomeLoveSection />
                <div className="Login">
                    <form onSubmit={handleSubmit}>
                        <h1>Login Here Bby😘💕</h1>
                        <input
                            type="text"
                            className="login-input"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="login-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </form>
                    <button type="submit" className="login-button" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </>
    );
};

export default LoginPage;

