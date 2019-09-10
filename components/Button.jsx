import styled from 'styled-components';
import NextLink from '../components/NextLink';
import { yellow } from './Styles';

const StyledButton = styled.div`
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  border: 2px solid black;
  color: black;
  padding: 0.6rem 4rem;
  transition: all 0.2s;
  :hover {
    background-color: black;
    border-color: black;
    color: ${yellow};
  }
`;

const DarkStyledButton = styled(StyledButton)`
  border: 2px solid white;
  color: white;
  :hover {
    background-color: white;
    border-color: white;
    color: black;
  }
`;

/**
 * @param {{
 *   children: React.ReactNode;
 *   href: string;
 *   external?: boolean;
 * }} props
 */
export const Button = props => {
  return (
    <NextLink href={props.href} external={props.external}>
      <StyledButton>{props.children}</StyledButton>
    </NextLink>
  );
};

export const DarkButton = props => {
  return (
    <NextLink href={props.href} external={props.external}>
      <DarkStyledButton>{props.children}</DarkStyledButton>
    </NextLink>
  );
};
