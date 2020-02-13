import React from 'react';
import Section from './components/Section';
import TextSection from './TextSection';
import SectionImg from './components/SectionImg';
import CircularImageSection from './components/CircularImageSection';
import { Fade, Row, Col, Button } from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import ByronImg from '../assets/images/byron.jpg';
import ByronHighSchool from '../assets/images/byron-highschool.jpg';
import ByronCertification from '../assets/images/byron-mat-certificate.jpg';
import ByronLearning from '../assets/images/byron-learning-mat.jpg';
import ContactInfo from './components/ContactInfo';
import FadeRow from './components/FadeRow';
import { Link } from 'react-router-dom';
import './style.css';

const About = () => (
  <div className="section-wrapper top-section-wrapper">
    <Row className="about-section">
      <Col md="6" lg="6" xl="6" sm="12">
        <img className="byron-img" src={ByronImg} />
      </Col>
      <Col md="6" lg="6" xl="6" sm="12" className="about-description">
        <h3>Hi, I'm Byron,</h3>
        <p>and I'm a physical trainer and therapist dedicated to helping people with chronic bodily pain. Over the years I've grown to learn many different techniques and will work hard to help you get back on the path to living a pain-free life.</p>
        <p>My journey to becoming a physical training started a long time ago when I was in high school. Back then, basketball was my life.
        I was set to be a key player my senior year, but then I was hit by unexplainable and excruciating low back and knee pain. I went from the quickest to slowest player on the court, the most confident to the most broken.</p>
        <p> I went to many doctors, chiropractors, and physical therapists, they all gave me different a diagnosis and different solutions. Nothing helped. I was forced to live with it and it became a part of my identity. </p>
      </Col>
    </Row>
  </div>
)

export default About;