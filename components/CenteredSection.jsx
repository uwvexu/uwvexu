import styled from 'styled-components';
import BodySection from './BodySection';
import { responsiveSizes } from './Styles';

export default styled(BodySection)`
  padding: 5rem 32rem;
  text-align: center;
  color: white;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  background-position: center;
  background-blend-mode: darken;

  @media screen and (max-width: ${responsiveSizes.largeScreen}px) {
    padding: 5rem 16rem;
  }

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    padding: 5rem 12rem;
  }

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    padding: 2.5rem 8rem;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    padding: 2.5rem 5rem;
  }

  @media screen and (max-width: ${responsiveSizes.smallMobile}px) {
    padding: 1.5rem 4rem;
  }
`;
