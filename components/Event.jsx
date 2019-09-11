import React from 'react';
import styled from 'styled-components';
import CalendarIcon from './CalendarIcon';

const getMonthFullName = monthNumber => {
  if (monthNumber < 1 || monthNumber > 12) {
    throw `Month number is out of range (expected between 1 and 12, got ${monthNumber})`;
  }
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ][monthNumber - 1];
};

const getDayFullName = dayNumber => {
  if (dayNumber < 1 || dayNumber > 31) {
    throw `Day number is out of range (expected between 1 and 31, got ${dayNumber})`;
  }
  switch (dayNumber) {
    case 1:
    case 21:
    case 31:
      return `${dayNumber}st`;
    case 2:
    case 22:
      return `${dayNumber}nd`;
    case 3:
    case 23:
      return `${dayNumber}rd`;
    default:
      return `${dayNumber}th`;
  }
};

const Container = styled.div`
  display: flex;
`;

const CalendarIconContainer = styled.div`
  margin-right: 2rem;
`;

const DateHeader = styled.span`
  font-weight: bold;
`;

/**
 * @param {{
 *   month: number;
 *   day: number;
 *   dayOfWeek: string;
 *   children: React.ReactNode;
 * }} props
 */
export default props => {
  return (
    <Container>
      <CalendarIconContainer>
        <CalendarIcon month={props.month} day={props.day} />
      </CalendarIconContainer>
      <div>
        <DateHeader>
          {props.dayOfWeek}, {getMonthFullName(props.month)}{' '}
          {getDayFullName(props.day)}
        </DateHeader>
        <br />
        {props.children}
      </div>
    </Container>
  );
};
