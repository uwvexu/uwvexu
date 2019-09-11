import styled from 'styled-components';

const yellow = '#ffd600';

const Helvetica = 'Helvetica, Tahoma, Geneva, sans-serif';

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

export { yellow, Helvetica, Spacer, Logo, FlexContainer };
