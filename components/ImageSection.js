import React from 'react';
import styled from 'styled-components';
import { responsiveSizes } from './Styles';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 18.75rem;

  @media (max-width: ${responsiveSizes.smallScreen}px) {
    > :nth-child(3) {
      display: none;
    }
  }

  @media (max-width: 576px) {
    > :nth-child(2) {
      display: none;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.div`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;

  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.pos || 'center'};
`;

export default props => {
  return (
    <FlexRow>
      {props.imageUrls.map(([url, pos], index) => {
        return (
          <ImageContainer key={index}>
            <Image src={url} pos={pos} />
          </ImageContainer>
        );
      })}
    </FlexRow>
  );
};
