import styled from 'styled-components';
import { Helvetica, yellow } from './Styles';

export const HeroTitle = styled.div`
  color: white;
  font-size: 72px;

  @media (max-width: 640px) {
    font-size: 46px;
  }

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.div`
  color: ${yellow};
  font-size: 34px;

  @media (max-width: 640px) {
    font-size: 22px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;
