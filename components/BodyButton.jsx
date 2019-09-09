import styled from 'styled-components';
import { yellow } from './Styles';

export default styled.div`
  display: inline-block;
  font-family: Helvetica, Tahoma, Geneva, sans-serif;
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  border: 2px solid black;
  color: black;
  padding: 0.6rem 2.5rem;
  transition: all 0.2s;
  :hover {
    background-color: black;
    border-color: black;
    color: ${yellow};
  }
`;
