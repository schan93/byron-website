import React from 'react';
import Header from './Header';
import Offer from './Offer';
import TestimonialGallery from './TestimonalGallery';
import ContactForm from './components/ContactForm';
import { Button, Row, Col } from'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { FaSearch, FaLink, FaHandshake } from 'react-icons/fa'
import Transformation from './Transformation';
const Home = () => (
  <div style={{  textAlign: 'center'}}>
    <Header />
    <Offer />
    <Transformation />
    <ContactForm />
  </div>
)

export default Home;