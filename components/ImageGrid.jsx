import React from 'react';
import styled from 'styled-components';
import BodySection from './BodySection';
import { responsiveSizes } from './Styles';

const Container = styled(BodySection)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  max-height: 150px;
  height: 100%;
  width: auto;
  margin: 3rem;

  @media (max-width: ${responsiveSizes.tablet}px) {
    width: 100%;
    height: auto;
    max-height: none;
  }
`;

/**
 * @param {{ imageUrls: string[] }} props
 */
export default props => {
  return (
    <Container>
      {props.imageUrls.map((imageUrl, index) => (
        <Image key={index} src={imageUrl} />
      ))}
    </Container>
  );
};
