import React from 'react';
import styled from 'styled-components';

const Link = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

/**
 * A text link
 * @param {{
 *   children: React.ReactNode
 *   onClick: () => void
 * }} props
 */
export default (props) => {
  return <Link onClick={props.onClick}>{props.children}</Link>
};
