import styled from 'styled-components';

const yellow = '#ffd600';

const Spacer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  width: ${props => props.height};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export {
  yellow,
  Spacer,
  Logo,
  FlexContainer,
};
