import React from 'react';
import styled from 'styled-components';
import { yellow } from './Styles';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: darkgray; /* remove this later */
`;

const Logo = styled.img`
  width: 200px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const MenuText = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  font-family: Helvetica, Tahoma, Geneva, sans-serif;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
`;

const MenuOption = styled(MenuText)`
  color: white;
`;

const MenuButton = styled(MenuText)`
  border: 2px solid ${yellow};
  color: ${yellow};
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  transition: all 0.2s;
  :hover {
    background-color: ${yellow};
    color: black;
  }
`;

export default () => {
  return (
    <FlexContainer>
      <Logo src='https://oappa.ca/wp-content/uploads/2015/10/UniversityOfWaterloo_logo_horiz_rgb3.png' />
      <Spacer />
      <MenuOption>ABOUT</MenuOption>
      <MenuOption>EVENTS</MenuOption>
      <MenuOption>SPONSOR</MenuOption>
      <MenuOption>CONTACT</MenuOption>
      <MenuButton>JOIN</MenuButton>
    </FlexContainer>
  );
};
