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
  position: relative;
`;

const Image = styled.div`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  transition: all 0.5s;

  z-index: 0;

  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.pos || 'center'};
  background-color: rgba(211, 177, 0, 0);
  background-blend-mode: darken;

  :hover {
    // background-color: rgba(211, 177, 0, 0.8);
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  transition: all 0.5s;
  word-wrap: break-word;

  :hover {
    display: block;
    background-color: rgb(211, 177, 0);
    opacity: 0.8;
  }
`;

const OverlayText = styled.div`
  position: relative;
  color: black;
  margin: 2rem;
  font-weight: bold;
`;

export default props => {
  return (
    <FlexRow>
      {props.imageUrls.map(([url, msg, pos], index) => {
        return (
          <ImageContainer key={index}>
            <Image src={url} pos={pos} />
            <Overlay><OverlayText><p>{msg}</p></OverlayText></Overlay>
          </ImageContainer>
        );
      })}
    </FlexRow>
  );
};
