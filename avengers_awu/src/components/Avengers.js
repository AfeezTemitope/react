import React from 'react';
import styled from 'styled-components';
import Avg from '../asset/Avg.png'

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

const LogoText = styled.p`
  font-size: 24px;
  color: #000;
  margin-top: 10px;
`;

const Logo = () => (

  <LogoContainer>
    <LogoImage src={Avg} alt="apartment therapy logo" />
    <LogoText>Avengers Awu</LogoText>
  </LogoContainer>
);

export default Logo;
