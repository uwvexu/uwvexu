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

/**
 * @param {{
 *   children: React.ReactNode;
 *   href: string;
 *   external?: boolean;
 * }} props
 */
export default props => {
  return (
    <NextLink href={props.href} external={props.external}>
      <StyledButton>{props.children}</StyledButton>
    </NextLink>
  );
};
