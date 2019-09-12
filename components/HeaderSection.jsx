import React from 'react';
import styled from 'styled-components';
import { responsiveSizes } from './Styles';

const HeaderContainer = styled.div`
  background-color: black;
  position: relative;
  height: 7rem;

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    height: 4.5rem;
  }

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    height: 3rem;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    height: 2.25rem;
  }
`;

const HeaderText = styled.div`
  font-size: 80px;
  color: white;
  font-weight: bold;
  margin: 0 16rem;
  bottom: -18px;
  position: absolute;
  letter-spacing: 8px;

  @media screen and (max-width: ${responsiveSizes.largeScreen}px) {
    margin: 0 12rem;
  }

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    margin: 0 8rem;
    font-size: 50px;
    letter-spacing: 6px;
    bottom: -12px;
  }

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    margin: 0 6rem;
    font-size: 28px;
    letter-spacing: 4px;
    bottom: -6px;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    margin: 0 4rem;
    font-size: 24px;
    letter-spacing: 2px;
    bottom: -6px;
  }

  @media screen and (max-width: ${responsiveSizes.smallMobile}px) {
    margin: 0 2rem;
  }
`;

/**
 * The header for a section of the page
 * @param {{
 *   children: React.ReactNode;
 *   id?: string;
 * }} props
 */
export default props => {
  return (
    <HeaderContainer id={props.id}>
      <HeaderText>{props.children}</HeaderText>
    </HeaderContainer>
  );
};
