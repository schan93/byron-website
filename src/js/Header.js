import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { HashLink as Link } from 'react-router-hash-link';
import FrontPageLogo from '../assets/images/train-with-byron-front-logo.png';
const Header = () => {

  return (
    // <div>
    // <div style={{backgroundImage: `url(${LandingPage})`, backgroundSize: 'cover', height: '655px', zIndex: '-2', position: 'absolute', left: '0', right: '0', width: '100%'}}>
    // </div>
    // <div style={{backgroundImage: 'linear-gradient(180deg,rgba(33,37,41,0.63) 0%,rgba(73,80,87,0.19) 100%)', position: 'absolute', left: '0', right: '0', zIndex: '-1', height: '655px', backgroundColor: 'rgba(255,255,255,0)'}}>
    // </div>
    <SectionWrapper style={{marginTop: '60px'}}>
        <img src={FrontPageLogo} style={{marginTop: '8rem'}} />
        <Jumbotron style={{backgroundColor: 'transparent', padding: '0 0 4rem 0', textAlign: 'center'}}>
          <h1 style={{fontWeight: '400', padding: '5px 0px 0px 0px', margin: '0', lineHeight: '1.5em', letterSpacing: '5px', fontSize: '2em'}}>BYRON NG</h1>
          <p style={{padding: '5px'}}>I help people become strong so they can move pain-free and enjoy a life they love.</p>
          {/* <h1 style={{fontWeight: '400', padding: '0', margin: '0', lineHeight: '1.5em', letterSpacing: '1px'}}>I help people become strong so they can move pain-free and enjoy a life they love. </h1> */}
          {/* <Link style={{textDecoration: "none", color: "white"}} smooth to="/#contact">
            <Button size="lg" style={{backgroundColor: "#4296cb", borderColor: "#4296cb"}}>Get in touch!</Button>
          </Link> */}
        </Jumbotron>
      </SectionWrapper>
  )
}

export default Header;