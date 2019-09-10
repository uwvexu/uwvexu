import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: black;
  position: relative;
  height: 7rem;
  letter-spacing: 8px;
`;

const HeaderText = styled.div`
  font-size: 80px;
  color: white;
  font-weight: bold;
  margin-left: 15rem;
  bottom: -18px;
  position: absolute;
`;

/**
 * The header for a section of the page
 * @param {{ children: React.ReactNode }} props
 */
export default props => {
  return (
    <HeaderContainer>
      <HeaderText>{props.children}</HeaderText>
    </HeaderContainer>
  );
};
