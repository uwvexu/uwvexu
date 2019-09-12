import React from 'react';
import styled from 'styled-components';
import BodySection from './BodySection';

const Container = styled(BodySection)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Image = styled.img`
  height: 150px;
  margin: 3rem;
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
