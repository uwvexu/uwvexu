import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow, FlexContainer, Spacer, responsiveSizes } from './Styles';
import Logo from './Logo';

const FooterContainer = styled(FlexContainer)`
  padding: 2rem 5rem;

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    padding: 2rem 4rem;
  }

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

const Logos = styled.div`
  color: black;
  font-size: 46px;

  a {
    padding-left: 1.5rem;
  }

  a > i {
    transition: all 0.2s;
    :hover {
      color: ${yellow};
    }
  }

  :last-child {
    margin-right: 0;
    a > i {
      padding-right: 0;
    }
  }

  @media (max-width: ${responsiveSizes.tablet}px) {
    a:first-child {
      padding-left: 0;
    }
  }
`;

export default () => {
  return (
    <FooterContainer>
      <NextLink href='/'>
        <Logo noPadding />
      </NextLink>
      <Spacer />
      <Logos>
        <NextLink href="mailto:uwvexu@gmail.com" external><i className="fa fa-envelope"></i></NextLink>
        {/* <NextLink href="" external><i className="fa fa-facebook-f"></i></NextLink> */}
        <NextLink href="https://github.com/uwvexu" external><i className="fa fa-github"></i></NextLink>
        {/* <NextLink href="" external><i className="fa fa-slack"></i></NextLink> */}
        <NextLink href="https://www.youtube.com/channel/UCFgWl2UgswX70xiXT8QJlEg" external><i className="fa fa-youtube-play"></i></NextLink>
      </Logos>
    </FooterContainer>
  );
};
