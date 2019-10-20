import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow, FlexContainer, Spacer, Logo, responsiveSizes } from './Styles';

const FooterContainer = styled(FlexContainer)`
  background-color: black;

  @media (max-width: ${responsiveSizes.tablet}px) {
    flex-direction: column;
    padding: 1rem 0;
  }
`;

const Logos = styled.div`
  color: white;
  font-size: 46px;

  a > i {
    padding: 0.8rem;
    transition: all 0.2s;
    :hover {
      color: ${yellow};
    }
  }

  :last-child {
    margin-right: 0.5rem;
  }
`;

export default () => {
  return (
    <FooterContainer>
      <NextLink href='/'>
        <Logo width='300px' src='/static/logo_w.png' />
      </NextLink>
      <Spacer />
      <Logos>
        <NextLink href="mailto:uwvexu@gmail.com" external><i className="fa fa-envelope"></i></NextLink>
        <NextLink href="" external><i className="fa fa-facebook-f"></i></NextLink>
        <NextLink href="https://github.com/uwvexu" external><i className="fa fa-github"></i></NextLink>
        <NextLink href="" external><i className="fa fa-slack"></i></NextLink>
        <NextLink href="https://www.youtube.com/channel/UCFgWl2UgswX70xiXT8QJlEg" external><i className="fa fa-youtube-play"></i></NextLink>
      </Logos>
    </FooterContainer>
  );
};
