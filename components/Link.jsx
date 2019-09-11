import React from 'react';
import styled from 'styled-components';
import NextLink from '../components/NextLink';
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
 *   href: string
 *   external?: boolean
 * }} props
 */
export default props => {
  return (
    <NextLink href={props.href} external={props.external}>
      <Link>{props.children}</Link>
    </NextLink>
  );
};
