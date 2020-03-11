import React from 'react';
import styled from 'styled-components';
import NextLink from './NextLink';
import { yellow } from './Styles';

export const ChevronWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
`;

const Chevron = ({ href, color }) => (
  <NextLink href={href}>
    <ChevronWrapper color={color}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 256 256" fill={yellow} space="preserve">
        <g>
          <g>
            <polygon points="225.813,48.907 128,146.72 30.187,48.907 0,79.093 128,207.093 256,79.093 		"/>
          </g>
        </g>
      </svg>
    </ChevronWrapper>
  </NextLink>
);

export default Chevron;