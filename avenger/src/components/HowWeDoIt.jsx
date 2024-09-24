import React from 'react';
import './style/HowWeDoIt.css';

const Image = 'https://th.bing.com/th/id/OIP.lr2mUw6BKFLBS0cG3UmNmQAAAA?w=360&h=360&rs=1&pid=ImgDetMain';

const HowWeDoIt = () => {
  return (
    <div className="main-body">
      <div className="content-section">
          <h1>WHAT WE DO </h1>
        <ul>
          <li className="tactical">Sports-News</li>
          <li>Music-Update</li>
          <li>Fashion-Gist</li>
          <li>Travel-Tips</li>
          <li>Music & movie Updates</li>
        </ul>
      </div>
      <div className="image-section">
        <img src={Image} alt='let train' />
        <h2>.......WELCOME TO GREATNESS</h2>
      </div>
    </div>
  );
};

export default HowWeDoIt;
