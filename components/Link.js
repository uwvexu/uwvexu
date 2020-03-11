import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow } from './Styles';

const StyledLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
  font-weight: ${props => props.ybg ? '700' : '400'};

  transition: all 0.2s;
  :hover {
    color: ${props => props.ybg ? 'black' : yellow};
  }
`;

const Link = ({ href, external, ybg, children }) => {
  return (
    <NextLink href={href} external={external}>
      <StyledLink ybg={ybg}>{children}</StyledLink>
    </NextLink>
  );
};

export default Link;
