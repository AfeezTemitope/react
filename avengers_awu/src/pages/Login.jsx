import React from 'react'
import LoginForm from "../components/LoginForm";
import HomeLoveSection from "../components/HomeLoveSection";
import Header from "../components/Header";
import './Login.css'
import Footer from "../components/Footer";
import {GoogleOAuthProvider} from "@react-oauth/google";


const Login = () => {
    return (
        <div className="login">
            <Header/>
            <div className="container">
                <HomeLoveSection/>
                <GoogleOAuthProvider clientId="694495728180-i9ql7bm7geafutiaas68vmp6v5mgqhae.apps.googleusercontent.com">
                    <LoginForm />
                </GoogleOAuthProvider>


            </div>
            <Footer/>
        </div>
    )
}

export default Login