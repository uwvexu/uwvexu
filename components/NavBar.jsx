import React, { useState } from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow, FlexContainer, Spacer, Logo } from './Styles';

const NavContainer = styled(FlexContainer)`
  @media (max-width: 920px) {
    background-color: black;
  }
`;

const MobileMenu = styled(FlexContainer)`
  flex-direction: column;
  text-align: center;
  background-color: black;
  transition: all 0.2s;
  padding-bottom: 1rem;

  > div {
    padding-bottom: 1rem;
  }
`;

const MenuText = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
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
  margin-right: 1rem;
  transition: all 0.2s;
  :hover {
    background-color: ${yellow};
    color: black;
  }
`;

const TextMenu = styled(FlexContainer)`
  @media (max-width: 920px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  unset: all;
  color: white;
  padding-right: 1.5rem;
  font-size: 30px;
`;

const ButtonMenu = styled(FlexContainer)`
  display: none;

  @media (max-width: 920px) {
    display: block;
  }
`;


const MenuOptions = (
  <>
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
  </>
);

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <NavContainer>
        <NextLink href='/'>
          <Logo width='200px' src='/static/logo_w.png' />
        </NextLink>
        <Spacer />

        {/* screen > 920px */}
        <TextMenu>
          {MenuOptions}
        </TextMenu>

        {/* screen <= 920px */}
        <ButtonMenu>
          <MenuIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <i className="fa fa-bars" />
          </MenuIcon>
        </ButtonMenu>
      </NavContainer>
      {showMobileMenu &&
        <MobileMenu>
          {MenuOptions}
        </MobileMenu>
      }
    </>
  );
};

export default NavBar;
