import styled from 'styled-components';
import NextLink from '../components/NextLink';
import { yellow } from './Styles';
import { responsiveSizes } from './Styles';

const StyledButton = styled.div`
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  border: 2px solid black;
  color: black;
  padding: 0.8rem 5rem;
  text-align: center;
  transition: all 0.2s;
  :hover {
    background-color: black;
    border-color: black;
    color: ${yellow};
  }

  @media screen and (max-width: ${responsiveSizes.largeScreen}px) {
    padding: 0.6rem 4rem;
  }

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    padding: 0.5rem 3rem;
    font-size: 16px;
  }

  @media screen and (max-width: ${responsiveSizes.tablet}px) {
    padding: 0.4rem 2rem;
  }

  @media screen and (max-width: ${responsiveSizes.largeMobile}px) {
    padding: 0.3rem 1.5rem;
    font-size: 12px;
  }

  @media screen and (max-width: ${responsiveSizes.smallMobile}px) {
    padding: 0.2rem 1rem;
  }
`;

const StyledDarkButton = styled(StyledButton)`
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
      <StyledDarkButton>{props.children}</StyledDarkButton>
    </NextLink>
  );
};
