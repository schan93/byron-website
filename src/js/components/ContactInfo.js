import React from 'react';
import { Row, Col } from 'reactstrap';
import { GoLocation, GoClock, GoMail} from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';

const ContactInfo = () => (
  <div>
    <h4 className="home-section">Contact Me</h4>
      <div style={{textAlign: 'left', marginTop: '30px'}}>
        <Row style={{marginBottom: '10px'}}>
          <Col md={2}>
            <GoLocation style={{color: 'rgba(189, 33, 33, 0.87)'}} size={30} />
          </Col>
          <Col md={10}>
            <p style={{fontSize: '.875rem'}}>3000 Alexis Dr, Palo Alto, CA 94304</p>
          </Col>
        </Row>
        <Row style={{marginBottom: '10px'}}>
          <Col md={2}>
            <GoClock style={{color: 'rgba(189, 33, 33, 0.87)'}} size={30} />
          </Col>
          <Col md={10}>
            <p style={{fontSize: '.875rem'}}>Monday - Friday: 7:00 am - 8:00 pm</p>
          </Col>
        </Row>
        <Row style={{marginBottom: '10px'}}>
          <Col md={2}>
            <FiPhoneCall style={{color: 'rgba(189, 33, 33, 0.87)'}} size={30} />
          </Col>
          <Col md={10}>
            <p style={{fontSize: '.875rem'}}>(650) 787-9239</p>
          </Col>
        </Row>
        <Row style={{marginBottom: '10px'}}>
          <Col md={2}>
            <GoMail style={{color: 'rgba(189, 33, 33, 0.87)'}} size={30} />
          </Col>
          <Col md={10}>
            <p style={{fontSize: '.875rem'}}>trainwithbyron@gmail.com</p>
          </Col>
        </Row>
    </div>
  </div>
)

export default ContactInfo;