import React from 'react';
import styled from 'styled-components';
import { yellow } from './Styles';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  justify-content: ${props => props.end ? "flex-end" : "flex-start"};

  * {
    flex: 1;
  }

  > *:not(:first-child) {
  margin-left: 1rem;

  > button {
    justify-content: flex-end;
  }
}
`;

const StyledForm = styled.form`
  margin-top: 2rem;
`;

const Input = styled.input`
  outline: none;
  color: black;
  font-size: 18px;
  border: 2px solid black;
  padding: 0.6rem 1rem;

  ::placeholder {
    color: #808080;
  }
`;

const Select = styled.select`
  outline: none;
  appearance: none;
  background: transparent;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 0px !important;
  padding: 0.6rem 1rem;

  &:invalid {
    color: gray;
  }

  :after {
	  font-family: FontAwesome;
  	content: '\f107';
  	font-size: 28px;
  	position: absolute;
  	top: 10px;
  	right: 20px;
  	color: #434B67;
  	pointer-events: none;
`;

const TextArea = styled.textarea`
  outline: none;
  min-height: 100px;
  max-width: 100%;
  color: black;
  font-size: 18px;
  border: 2px solid black;
  padding: 0.6rem 1rem;

  ::placeholder {
    color: #808080;
  }
`;

const SendButton = styled.button`
  all: unset;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  border: 2px solid black;
  color: white;
  background-color: black;
  padding: 0.6rem 4rem;
  transition: all 0.2s;
  :hover {
    color: ${yellow};
  }
}
`;

export {
  FlexRow,
  StyledForm,
  Input,
  Select,
  TextArea,
  SendButton,
};
