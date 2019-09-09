import React from 'react';
import styled from 'styled-components';

const TextBox = styled.div`
  font-size: 22px;
  color: black;
  font-family: Helvetica, Tahoma, Geneva, sans-serif;
  letter-spacing: 2px;
`;

/**
 * A container for regular text
 * @param {{ children: React.ReactNode }} props
 */
export default (props) => {
  return <TextBox>{props.children}</TextBox>
};
