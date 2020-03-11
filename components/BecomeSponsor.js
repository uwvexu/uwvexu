import styled from 'styled-components';
import { responsiveSizes } from './Styles';
import { DarkButton } from './Button';

const Background = styled.div`
  text-align: center;
  color: white;
  font-weight: 700;
  
  background-image: url(${props => props.url});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.8);
  background-position: center;
  background-blend-mode: darken;

  padding: 10rem 5rem;

  @media screen and (max-width: ${responsiveSizes.largeScreen}px) {
    padding: 10rem 5rem;
  }

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    padding: 8rem 4rem;
  }

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    padding: 8rem 3rem;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    padding: 8rem 2rem;
  }
`;

const TextWidth = styled.div`
  margin: auto;
  max-width: 70%;

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    max-width: 80%;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    max-width: 100%;
  }
`;

const BecomeSponsor = () => (
  <Background url="static/sponsors.png">
    <TextWidth>
      <p>
        U WAT VEX U Robotics would not be possible without the help 
        of our genourous sponsors.
        <br />
        <br />
        Interested in becoming a sponsor?
        <br />
        Click the button below for more information.
        <br />
        <br />
        <DarkButton href="https://forms.gle/so4Ep1rXtF3RMJsh7" external>BECOME A SPONSOR</DarkButton>
      </p>
    </TextWidth>
  </Background>
);

export default BecomeSponsor;