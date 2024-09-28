import React from 'react';
import './Index.css'
import Header from "../components/Header";
import ImageSection from "../components/ImageSection";
import SignInButton from "../components/SignInButton";
import Trending from "../components/Trending";
import Footer from "../components/Footer";


const Index = () => {
    return (
        <>
            <Header/>
            <ImageSection/>
            <h1></h1>
            <SignInButton/>
            <Trending/>
            <Footer/>
        </>
    )
}

export default Index;