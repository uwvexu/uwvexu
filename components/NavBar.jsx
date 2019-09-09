import React from 'react';
import styled from 'styled-components';

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

const MenuOption = styled.div`
  color: white;
  margin-left: 20px;
  margin-right: 20px;
  font-family: Helvetica, Tahoma, Geneva, sans-serif;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
`;

const MenuButton = styled(MenuOption)`
  border: 2px solid #ffd600;
  color: #ffd600;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.2s;
  :hover {
    background-color: #ffd600;
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
