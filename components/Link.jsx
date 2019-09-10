import React from 'react';
import styled from 'styled-components';
import { yellow } from './Styles';

const Link = styled.span`
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s;
  :hover {
    color: ${yellow};
  }
`;

/**
 * A text link
 * @param {{
 *   children: React.ReactNode
 *   onClick: () => void
 * }} props
 */
export default (props) => {
  return <Link>{props.children}</Link>
};
