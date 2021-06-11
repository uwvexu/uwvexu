import React from 'react';
import styled from 'styled-components';
import { CenteredDiv, Color, yellow, responsiveSizes } from './Styles';
import NavBar from './NavBar';
import Chevron from './Chevron';

const HeroBg = styled.div`
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.8);
  background-blend-mode: darken;
  background-position: bottom;

  color: white;
`;

const HeroText = styled(CenteredDiv)`
  padding-top: 32vh;
  width: 100%;

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    display: none;
  }
`;

const HeroTextMobile = styled(CenteredDiv)`
  display: none;

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    display: block;
    padding-top: 20vh;
  }
`;

const Highlight = styled.div`
  background-color: ${yellow};
  padding: 1rem 2rem;
  color: black;
  width: max-content;
  height: auto;
  margin: auto auto;
  letter-spacing: 0.5rem;

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    margin-bottom: 2rem;
  }
`;

const TagLine = styled.h1`
  margin-bottom: ${props => props.mb || '1rem'};
`;

export const HeroBlock = ({ children }) => (
  <Highlight>
    <Color color="black" style={{ fontWeight: 800 }}><h1>{children}</h1></Color>
  </Highlight>
);

const Hero = () => (
  <HeroBg img="static/robots.png">
      <NavBar />

      {/* screen > 1024 */}
      <HeroText>
        <HeroBlock>UWAT VEX U ROBOTICS</HeroBlock>
      </HeroText>

      {/* screen <= 1024 */}
      <HeroTextMobile>
        <HeroBlock>UWAT</HeroBlock>
        <HeroBlock>VEX U</HeroBlock>
        <HeroBlock>ROBOTICS</HeroBlock>
      </HeroTextMobile>

      <Chevron href="#about" />
  </HeroBg>
);

export default Hero;
