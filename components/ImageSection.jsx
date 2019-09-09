import React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 18.75rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
`;

/**
 * @param {{ imageUrls: string[] }} props
 */
export default props => {
  return (
    <FlexRow>
      {props.imageUrls.map((imageUrl, index) => {
        return (
          <ImageContainer key={index}>
            <Image src={imageUrl} />
          </ImageContainer>
        );
      })}
    </FlexRow>
  );
};
