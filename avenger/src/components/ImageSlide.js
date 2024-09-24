import React from 'react';

const ImageSlide = ({ image }) => {
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '420px',
        backgroundSize: 'cover',
        backgroundImage: `url(${image.url})`,
        marginTop : '3px',
    };

    return (
        <div style={divStyle}>

        </div>
    );
};

export default ImageSlide;
