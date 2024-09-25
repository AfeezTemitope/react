import react from "react";
import Footer from "../components/Footer"
import Header from "../components/Headers"
import SlideShow from "../components/SlideShow"
import HowWeDoIt from "../components/HowWeDoIt";
import WhatWeDo from "../components/WhatWeDo";
import "../../src/components/style/HomePage.css";

const Home = () => {
    return (
        <>
        <Header/>
        <SlideShow/>
        <WhatWeDo/>
        <HowWeDoIt/>
        <Footer/>
        </>
    )
}

      export default Home;

