import React from 'react';
import styled from 'styled-components';
import { Helvetica } from './Styles';

const getMonthAbbreviation = monthNumber => {
  if (monthNumber < 1 || monthNumber > 12) {
    throw `Month number is out of range (expected between 1 and 12, got ${monthNumber})`;
  }
  return [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ][monthNumber - 1];
};

const CalendarBorder = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 62px;
  height: 56px;
  border-radius: 6px;
  background-color: black;
`;

const MonthText = styled.div`
  font-family: ${Helvetica};
  font-size: 12px;
  height: 13px;
  margin: 2px;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 34px;
  width: 50px;
`;

const DayText = styled.div`
  font-family: ${Helvetica};
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  color: black;
`;

/**
 * @param {{
 *   month: number,
 *   day: number
 * }} props
 */
export default props => {
  return (
    <CalendarBorder>
      <MonthText>{getMonthAbbreviation(props.month)}</MonthText>
      <DayContainer>
        <DayText>{props.day}</DayText>
      </DayContainer>
    </CalendarBorder>
  );
};
