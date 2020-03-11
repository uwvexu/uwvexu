import React from 'react';
import styled from 'styled-components';
import { yellow } from './Styles'

export const LogoWrapper = styled.svg`
  padding-left: ${props => props.noPadding ? 0 : '2rem'};

  :hover {
    transition: all 0.2s;
    fill: ${yellow};
  }
`;

const Logo = ({ color, noPadding }) => (
    <LogoWrapper xmlns="http://www.w3.org/2000/svg" width="160" viewBox="0 0 1920 1080" fill={color || 'black'} noPadding={noPadding}>
      <path id="uWAT_copy" data-name="uWAT copy" fillRule="evenodd" d="M349.511,753.775c59.4,0,115.865-48,126.34-107.4l56.394-319.8h-63l-56.394,319.8c-4.338,24.6-27.735,45-52.335,45h-215.4c-23.082-1.8-38.191-21.6-34.065-45l56.394-319.8h-63l-56.393,319.8c-10.051,57,27.085,105,84.862,107.4h216.6Zm592.194,0,257.735-427.2h-68.4l-205.9,340.8-12.113-50.4-48.978,80.4,14.654,56.4h63Zm-179.4,0,146.546-242.4h-68.4l-94.11,156-85.705-340.8h-68.4l107.07,427.2h63Zm675.607,0-107.07-427.2h-68.4l61.9,247.8h-137.4l38.11-63h-68.4l-146.55,242.4h68.41l70.32-116.4h191.4l29.28,116.4h68.4Zm423.02-364.2h-119.4l11.11-63h119.4Zm-246.63,364.2h-63l64.22-364.2h-182.4l11.11-63h245.4Z"/>
    </LogoWrapper>
);

export default Logo;