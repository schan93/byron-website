import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

  return (
    <SectionWrapper>
      <Jumbotron style={{backgroundColor: 'white', marginTop: '4rem', padding: '4rem 0 4rem 0'}}>
      <h1>Hi, I'm Byron</h1>
      <h1>I'm a personal trainer and physical therapist.</h1>
      <p className="lead">I help people with chronic pain restore pain free movement so they can get back to a life they love.</p>
      <p className="lead">
        <Button size="lg" color="danger">
          <Link style={{textDecoration: "none", color: "white"}} smooth to="/#contact">Get in Touch!</Link>
        </Button>
      </p>
      </Jumbotron>
    </SectionWrapper>
  )
}

export default Header;