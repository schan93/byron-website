import React from 'react';
import ByronHighSchool from '../assets/images/byron-highschool.jpg';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Transformation = () => (
  <div className="section-wrapper">
    <h4>Transformations - Fit to Fat</h4>
    <Row className="transformation-section">
      <Col lg="6">
        <img src={ByronHighSchool} alt="Byron in High School" className="transformation-img" />
      </Col>
      <Col className="transformation-desc" lg="6">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus, eros molestie lacinia dictum, erat velit ullamcorper quam, sed blandit erat nulla nec tortor. Suspendisse fermentum molestie blandit. Nunc eleifend, augue vel bibendum maximus, urna erat lacinia ex, ut scelerisque lorem orci vel justo. Aenean ultricies aliquet nulla, id consequat velit bibendum eu.</p>
        <Link className="transformation-btn" to="/testimonials">
          <Button size="lg" className="button-color">Click here to see more!</Button>
        </Link>
      </Col>
    </Row>
  </div>
)

export default Transformation;