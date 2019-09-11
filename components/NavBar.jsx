import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow, FlexContainer, Spacer, Logo } from './Styles';

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
  }
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
      <Logo
        width='200px'
        src='https://waterlooworks.uwaterloo.ca/site/images/logo-right.png'
      />
      <Spacer />

      <MenuOption>
        <a href='#about'>ABOUT</a>
      </MenuOption>

      <MenuOption>
        <a href='#events'>EVENTS</a>
      </MenuOption>

      <MenuOption>
        <a href='#sponsor'>SPONSOR</a>
      </MenuOption>

      <MenuOption>
        <a href='#contact'>CONTACT</a>
      </MenuOption>

      <NextLink href='https://forms.gle/WGnEERX5HZF1xDwb7' external>
        <MenuButton>JOIN</MenuButton>
      </NextLink>
    </FlexContainer>
  );
};
