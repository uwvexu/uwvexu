import styled from 'styled-components';

export const yellow = '#ffd600';

export const Spacer = styled.div`
  flex: 1;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.left ? "left" : "center"};
`;

export const Columns = styled(FlexContainer)`
  & > * {
    width: ${props => 100/props.cols}%;
  }
`;

export const responsiveSizes = {
  largeScreen: 1440,
  smallScreen: 1024,
  tablet: 768,
  largeMobile: 425,
  smallMobile: 375
};

export const Color = styled.span`
  color: ${props => props.color};
`;

export const CenteredDiv = styled.div`
  text-align: center;
  margin: auto auto;
`;
