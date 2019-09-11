import React from 'react';
import styled from 'styled-components';
import { FlexRow, StyledForm, Input, Select, TextArea, SendButton } from './FormFields';

const Form = () => (
  <StyledForm action="https://formspree.io/uwvexu@gmail.com" method="POST">
    <FlexRow>
      <Input type="text" placeholder="NAME" name="name" required/>
      <Input type="text" placeholder="EMAIL" name="email" required/>
    </FlexRow>

    <FlexRow>
      <Input type="tel" placeholder="PHONE NUMBER" name="phone" required/>
      <Select name="occupation" required>
        <option value="" disabled selected hidden>OCCUPATION</option>
        <option value="student">Student</option>
        <option value="sponsor">Sponsor</option>
        <option value="other">Other</option>
      </Select>
    </FlexRow>

    <FlexRow>
      <TextArea name="message" placeholder="MESSAGE" required/>
    </FlexRow>

    <FlexRow end>
      <SendButton type="submit">SEND</SendButton>
    </FlexRow>
  </StyledForm>
);

export default Form;
