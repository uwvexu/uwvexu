import React from 'react';
import Section from './Section';
import { yellow } from './Styles'
import Form from './Form';

const Contact = () => (
  <Section id="contact" title="CONTACT US" bg={yellow}>
    <p>
      Whether you are a student wanting to join, or a potential sponsor, we'd love to hear from you! 
      Fill out the form below to get in touch.
    </p>
    <Form />
  </Section>
);

export default Contact;
