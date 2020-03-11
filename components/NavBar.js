import React, { useState } from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow, FlexContainer, Spacer } from './Styles';
import Logo from './Logo';

const maxNav = 1150;

const NavContainer = styled(FlexContainer)`
  margin-right: 1rem;
  letter-spacing: 0.1rem;
  @media (max-width: ${maxNav}px) {
    background-color: black;
    margin-right: 0;
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

  @media (max-width: ${maxNav}px) {
    margin: 0;
    & > * {
      margin: 0;
    }
  }
`;

const MenuButton = styled(MenuText)`
  border: 2px solid ${yellow};
  color: ${yellow};
  font-weight: 600;
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
  @media (max-width: ${maxNav}px) {
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

  @media (max-width: ${maxNav}px) {
    display: block;
  }
`;


const MenuOptions = (
  <>
    <MenuOption>
      <h6><a href='#about'>ABOUT</a></h6>
    </MenuOption>

    <MenuOption>
      <h6><a href='#competitions'>COMPETITIONS</a></h6>
    </MenuOption>

    <MenuOption>
      <h6><a href='#awards'>AWARDS</a></h6>
    </MenuOption>

    <MenuOption>
      <h6><a href='#sponsor'>SPONSORS</a></h6>
    </MenuOption>

    <MenuOption>
      <h6><a href='#contact'>CONTACT</a></h6>
    </MenuOption>

    <NextLink href='https://forms.gle/WGnEERX5HZF1xDwb7' external>
      <h6><MenuButton>JOIN</MenuButton></h6>
    </NextLink>
  </>
);

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <NavContainer>
        <NextLink href='/'>
          <Logo color="white" />
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
