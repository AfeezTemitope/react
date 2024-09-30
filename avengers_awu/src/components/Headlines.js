import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Headlines.css'

const Headlines = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="headline-container">
            <button className="headline-button" onClick={() => handleNavigate('/news-feed')}>News-Feed</button>
            <button className="headline-button" onClick={() => handleNavigate('/music-update')}>Music-Update</button>
            <button className="headline-button" onClick={() => handleNavigate('/blog-posts')}>Blog-Posts</button>
            <button className="headline-button" onClick={() => handleNavigate('/fashion-lifestyle')}>Fashion & LifeStyle</button>
            <button className="headline-button" onClick={() => handleNavigate('/view-posts')}>View-Blogs</button>
            <button className="headline-button" onClick={() => handleNavigate('/sport-news')}>Sport-News</button>
        </div>
    );
};

export default Headlines;
