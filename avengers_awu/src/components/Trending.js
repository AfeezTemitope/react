import React from 'react'
import Entertainment from '../asset/Tech.jpg'
import Beauty from '../asset/Beauty.jpg'
import '../components/style/Trending.css'
import Order from '../asset/Screenshot (130).png'

const Trending = () => {
    return (
        <>
            <h1>Trending Now</h1>
            <div className="trending">
                <div className="trending__header">
                    <img src={Entertainment} className="trending__logo" alt="logo"/>
                    <p>LOVE AND LIFESTYLE</p>
                    <h3>A "Young alfa Looking For wife"<br/>(And he is a tech bro!)</h3>
                    <p>uploaded by theBadOne</p>
                </div>
                <div className="trending__header">
                    <img src={Beauty} className="trending__logo" alt="logo"/>
                    <p>LOVE AND LIFESTYLE</p>
                    <h3>A "Young alfa Looking For wife"<br/>(And he is a tech bro!)</h3>
                    <p>uploaded by theBadOne</p>
                </div>
                <div className="trending__header">
                    <img src={Entertainment} className="trending__logo" alt="logo"/>
                    <p>LOVE AND LIFESTYLE</p>
                    <h3>A "Young alfa Looking For wife"<br/>(And he is a tech bro!)</h3>
                    <p>uploaded by theBadOne</p>
                </div>
                <div className="trending__header">
                    <img src={Entertainment} className="trending__logo" alt="logo"/>
                    <p>LOVE AND LIFESTYLE</p>
                    <h3>A "Young alfa Looking For wife"<br/>(And he is a tech bro!)</h3>
                    <p>uploaded by theBadOne</p>
                </div>
            </div>
            <img src={Order} className="trend_ogo" alt="logo"/>
        </>
    )
}

export default Trending;