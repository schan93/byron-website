import React from 'react';
import Section from './components/Section';
import ContactComponent from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import { Row, Col } from 'reactstrap';

const Contact = () => (
  <div>
    <ContactComponent />
    <ContactInfo />
  </div>
)

export default Contact;