import React from 'react';
import styled from 'styled-components';
import { yellow, responsiveSizes } from './Styles';

const SectionContainer = styled.div`
  background-color: ${props => props.bg};
  padding: 10rem 5rem;
  color: ${props => props.bg === 'black' ? yellow : 'black'};

  @media screen and (max-width: ${responsiveSizes.largeScreen}px) {
    padding: 8rem 5rem;
  }

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    padding: 6rem 4rem;
  }

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    padding: 5rem 3rem;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    padding: 4rem 2rem;
  }

  @media screen and (max-width: ${responsiveSizes.smallMobile}px) {
    padding: 3rem 2rem;
  }
`;

const TitleUnderline = styled.div`
  width: 50%;
  border-bottom: 4px solid ${props => props.bg === 'black' ? yellow : 'black'};
  margin-bottom: ${props => props.imagesUnderTitle ? 0 : '3rem'};
  text-align: ${props => props.rightTitle ? "right" : "left"};
  margin-left: ${props => props.rightTitle ? "50%" : 0};

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    width: 100%;
    text-align: left;
    margin-left: 0;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    text-align: center;
  }
`;

const Section = ({ id, title, bg, rightTitle, imagesUnderTitle, children }) => (
  <SectionContainer id={id} bg={bg}>
    <TitleUnderline bg={bg} rightTitle={rightTitle} imagesUnderTitle={imagesUnderTitle}>
      <h2>{title}</h2>
    </TitleUnderline>
    {children}
  </SectionContainer>
);

export default Section;
