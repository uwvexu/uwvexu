import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow, FlexContainer, Spacer, Logo } from './Styles';

const FooterContainer = styled(FlexContainer)`
  background-color: black;
  padding: 0 1rem;
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
`;

export default () => {
  return (
    <FooterContainer>
      <Logo width="300px" src='https://oappa.ca/wp-content/uploads/2015/10/UniversityOfWaterloo_logo_horiz_rgb3.png' />
      <Spacer />
      <Logos>
        <NextLink href="mailto:uwvexu@gmail.com" external><i class="fa fa-envelope"></i></NextLink>
        <NextLink href="" external><i class="fa fa-facebook-f"></i></NextLink>
        <NextLink href="https://github.com/uwvexu" external><i class="fa fa-github"></i></NextLink>
        <NextLink href="" external><i class="fa fa-slack"></i></NextLink>
        <NextLink href="https://www.youtube.com/channel/UCFgWl2UgswX70xiXT8QJlEg" external><i class="fa fa-youtube-play"></i></NextLink>
      </Logos>
    </FooterContainer>
  );
};
