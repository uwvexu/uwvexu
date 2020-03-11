import React from 'react';
import styled from 'styled-components';
import { yellow, responsiveSizes } from './Styles';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1.5rem;
  justify-content: ${props => props.end ? "flex-end" : "flex-start"};

  * {
    flex: 1;
  }

  > *:not(:first-child) {
    margin-left: 2rem;
  }

  > button {
    justify-content: flex-end;
  }

  @media (max-width: ${responsiveSizes.tablet}px) {
    flex-direction: column;

    > *:not(:first-child) {
      margin-left: 0rem;
      margin-top: 1.5rem;
    }
  }
}
`;

const StyledForm = styled.form`
  margin-top: 1rem;
`;

const Input = styled.input`
  outline: none;
  color: black;
  font-size: 18px;
  padding: 0.6rem 1rem;
  border-width: 0;
  background-color: #EDC700;
  letter-spacing: 0.2rem;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Select = styled.select`
  outline: none;
  appearance: none;
  background: transparent;
  font-size: 18px;
  border-radius: 0px !important;
  padding: 0.6rem 1rem;
  border-width: 0;
  background-color: #EDC700;
  letter-spacing: 0.2rem;
  position: relative;
  overflow: hidden;

  &:invalid {
    color: rgba(0, 0, 0, 0.5);;
  }
`;

const TextArea = styled.textarea`
  outline: none;
  min-height: 100px;
  max-width: 100%;
  color: black;
  font-size: 18px;
  padding: 0.6rem 1rem;
  border-width: 0;
  background-color: #EDC700;
  letter-spacing: 0.2rem;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);;
  }
`;

const SendButton = styled.button`
  all: unset;
  font-size: 24px;
  font-family: 'Source Code Pro', monospace;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  user-select: none;
  border: 4px solid black;
  color: black;
  padding: 0.6rem 5rem;
  transition: all 0.2s;
  :hover {
    color: ${yellow};
    background-color: black;
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
