import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-bottom: 5rem;
  left: 15%;
  width: 70%;
`;

/**
 * The body container of a section
 * @param {{ children: React.ReactNode }} props
 */
export default props => {
  return <Container>{props.children}</Container>;
};
