import React from 'react';
import styled from 'styled-components';
import BodySection from './BodySection';
import { responsiveSizes } from './Styles';

const Container = styled(BodySection)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// FIXME: responsive styling
const Image = styled.img`
  max-height: 150px;
  height: 100%;
  width: auto;
  margin: 3rem;

  @media screen and (max-width: ${responsiveSizes.largeScreen}px) {
    margin: 1rem;
  }

  @media (max-width: ${responsiveSizes.tablet}px) {
    width: 100%;
    height: auto;
    max-height: none;
    margin: 1.5rem;
  }
`;

const ImageGrid = ({ imageUrls }) => (
  <Container>
    {imageUrls.map(([url], index) => (
      <Image key={index} src={url} />
    ))}
  </Container>
);

export default ImageGrid;
