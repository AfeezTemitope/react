import React from "react";
import './style/HomeLoveSection.css';

const HomeLoveSection = () => {
    const Camera = 'https://static.vecteezy.com/system/resources/previews/019/806/350/non_2x/camera-graphic-clipart-design-free-png.png'
    const BeforeAndAfter = 'https://th.bing.com/th/id/R.dab759036d29ea98f679c9d7f0676dc7?rik=jZMKXwykbZk0Ig&pid=ImgRaw&r=0&sres=1&sresct=1'
    const House = 'https://th.bing.com/th/id/R.c5c659e8ee011f6c5a1a6039e6677a74?rik=yS8ZDn2cxxW2pQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fhouse%2fhouse_PNG22.png&ehk=%2b2FrarFv%2bZN7%2bo86BFogzsi%2fPNOg5bMjQeuZ2hY%2bd0M%3d&risl=&pid=ImgRaw&r=0'
    return (
        <div className="home-section-container">
            <div className="home-text-section">
                <h1>The Avengers you love, The Journey Starts Here.</h1>
                <p>
                    Real homes, real inspiration, really good ideas. We've got everything
                    you need for your life at home. Join for a personalized experience made just for you.
                    It's free!
                </p>
                <ul className="benefits-list">
                    <li>✔ Access to saving over 480,000 home images!</li>
                    <li>✔ Curated programs for an organized home!</li>
                    <li>✔ It’s free!</li>
                </ul>
            </div>
            <div className="home-features-section">
                <div className="feature">
                    <img src={House} alt="House Tours" />
                    <p>4,000+ <br/> House Tours</p>
                </div>
                <div className="feature">
                    <img src={BeforeAndAfter} alt="Before & Afters" />
                    <p>1,000+ <br/> Before & Afters</p>
                </div>
                <div className="feature">
                    <img src={Camera} alt="Photos" />
                    <p>480,000+ <br/> Photos</p>
                </div>
            </div>
        </div>
    );
};

export default HomeLoveSection;
