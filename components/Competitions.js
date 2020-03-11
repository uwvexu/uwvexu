import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { yellow, FlexContainer } from './Styles';

const StyledFlex = styled(FlexContainer)`
  margin-top: ${props => props.space ? '5rem' : 0};
  padding-bottom: 1rem;
`;

const Date = styled.p`
  font-weight: 700;
`;

const Line = styled.div`
  background-color: ${yellow};
  height: 4px;
  width: 130px;
  margin-right: 1rem;
`;

const Comp = ({ space, date, message }) => (
  <>
    <StyledFlex space={space}>
      <Line />
      <Date>{date}</Date>
    </StyledFlex>
    <p>{message}</p>
  </>
);

const Competitions = ({ competitions }) => (
  <Section id="competitions" title="COMPETITIONS" rightTitle={true} bg="white">
      {competitions.map((comp, index) => <Comp key={index} space={index != 0} {...comp} />)}
  </Section>
);

export default Competitions;
