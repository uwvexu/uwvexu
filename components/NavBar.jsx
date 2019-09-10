import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow, FlexContainer, Spacer, Logo } from './Styles';

const NavContainer = styled(FlexContainer)`
  background-color: darkgray; /* remove this later */
`;

const MenuText = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
`;

const MenuOption = styled(MenuText)`
  color: white;
  transition: all 0.2s;
  :hover {
    color: ${yellow};
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
    <NavContainer>
      <Logo width="200px" src='https://oappa.ca/wp-content/uploads/2015/10/UniversityOfWaterloo_logo_horiz_rgb3.png' />
      <Spacer />
      <MenuOption>ABOUT</MenuOption>
      <MenuOption>EVENTS</MenuOption>
      <MenuOption>SPONSOR</MenuOption>
      <MenuOption>CONTACT</MenuOption>
      <NextLink href="https://forms.gle/WGnEERX5HZF1xDwb7" external><MenuButton>JOIN</MenuButton></NextLink>
    </NavContainer>
  );
};
