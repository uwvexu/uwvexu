import styled from 'styled-components';
import { responsiveSizes } from './Styles';

export default styled.div`
  padding: 5rem 16rem;
  color: black;
  font-size: 22px;
  letter-spacing: 2px;

  @media screen and (max-width: ${responsiveSizes.largeScreen}px) {
    padding: 5rem 12rem;
  }

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    padding: 5rem 8rem;
    font-size: 16px;
  }

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    padding: 2.5rem 6rem;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    padding: 2.5rem 4rem;
    font-size: 12px;
  }

  @media screen and (max-width: ${responsiveSizes.smallMobile}px) {
    padding: 1.5rem 2rem;
  }
`;
