import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

  return (
    <SectionWrapper>
      <Jumbotron style={{backgroundColor: 'whitesmoke', marginTop: '4rem', padding: '4rem 0 4rem 0'}}>
      <h1 className="display-4">Hi, I'm Byron!</h1>
      <p className="lead">I help people with chronic pain restore pain free movement so they can get back to a life they love.</p>

      <Link style={{textDecoration: "none", color: "white"}} smooth to="/#contact">
        <Button size="lg" style={{backgroundColor: "#4296cb", borderColor: "#4296cb"}}>Get in touch!</Button>
      </Link>
      </Jumbotron>
    </SectionWrapper>
  )
}

export default Header;