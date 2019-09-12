import styled from 'styled-components';

export const yellow = '#ffd600';

export const Spacer = styled.div`
  flex: 1;
`;

export const Logo = styled.img`
  width: ${props => props.height};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const responsiveSizes = {
  largeScreen: 1440,
  smallScreen: 1024,
  tablet: 768,
  largeMobile: 425,
  smallMobile: 320
};
