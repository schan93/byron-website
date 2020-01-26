import React from 'react';
import { Row, Col } from 'reactstrap';
import SectionWrapper from './SectionWrapper';

const ContactInfo = () => (
  <SectionWrapper style={{textAlign: 'left'}}>
    <hr />
    <Row>
      <Col lg="4">
        <p className="lead">Location</p>
        <p>3000 Alexis Dr, Palo Alto, CA 94304</p>
      </Col>
      <Col lg="4">
        <p className="lead">Hours</p>
        <p>Monday - Friday: 7:00 am - 8:00 pm</p>
      </Col>
      <Col lg="4">
        <p className="lead">Contact</p>
        <p>Phone Number: (650) 787-9239</p>
        <p>Email: trainwithbyron@gmail.com</p>
      </Col>
    </Row>
  </SectionWrapper>
)

export default ContactInfo;