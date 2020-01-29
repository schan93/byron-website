import React from 'react';
import Header from './Header';
import Offer from './Offer';
import TestimonialGallery from './TestimonalGallery';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import { Button, Row, Col } from'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { FaSearch, FaLink, FaHandshake } from 'react-icons/fa'

const Home = () => (
  <div style={{  textAlign: 'center', height: '100%' }}>
    <Header />
    <Offer />
    <TestimonialGallery />
    <ContactForm />
    <ContactInfo />
  </div>
)

export default Home;