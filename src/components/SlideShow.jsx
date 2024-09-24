import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import './ImageSlide';
import ImageSlide from "./ImageSlide";

const slideImages = [
    {
        url: require('../assets/alfa.jpg'),
    },
    {
        url: require('../assets/bad.jpg'),
    },
    {
        url: require('../assets/oba.jpg'),
    }
];

const ImageSlider = () => {
    return (
        <div className="slide-container">
            <Fade>
                {slideImages.map((image, index) => (
                    <div key={index}>
                        <ImageSlide image={image} />
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default ImageSlider;
