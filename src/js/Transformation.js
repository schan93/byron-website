import React from 'react';
import SectionWrapper from './components/SectionWrapper';
import ByronHighSchool from '../assets/images/byron-highschool.jpg';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Transformation = () => (
  <SectionWrapper>
    <h2 style={{fontWeight: '400', padding: '0', margin: '0', letterSpacing: '1px'}}>Transformations - Fit to Fat</h2>
    <Row style={{marginTop: '20px'}}>
      <Col lg="6">
        <img src={ByronHighSchool} alt="Byron in High School" style={{maxHeight: '100%', maxWidth: '100%', padding: '20px', objectFit: 'cover', borderRadius: '20px'}} />
      </Col>
      <Col style={{padding: '20px', textAlign: 'left'}} lg="6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus, eros molestie lacinia dictum, erat velit ullamcorper quam, sed blandit erat nulla nec tortor. Suspendisse fermentum molestie blandit. Nunc eleifend, augue vel bibendum maximus, urna erat lacinia ex, ut scelerisque lorem orci vel justo. Aenean ultricies aliquet nulla, id consequat velit bibendum eu.</p>
        <Link style={{textDecoration: "none", color: "white"}} to="/testimonials">
          <Button size="lg" style={{backgroundColor: "#4296cb", borderColor: "#4296cb"}}>Click here to see more!</Button>
        </Link>
      </Col>
    </Row>
  </SectionWrapper>
)

export default Transformation;