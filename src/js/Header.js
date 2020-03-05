import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { HashLink as Link } from 'react-router-hash-link';
import FrontPageLogo from '../assets/images/train-with-byron-front-logo.png';
import './style.css';


const Header = () => {

  return (
    // <div>
    // <div style={{backgroundImage: `url(${LandingPage})`, backgroundSize: 'cover', height: '655px', zIndex: '-2', position: 'absolute', left: '0', right: '0', width: '100%'}}>
    // </div>
    // <div style={{backgroundImage: 'linear-gradient(180deg,rgba(33,37,41,0.63) 0%,rgba(73,80,87,0.19) 100%)', position: 'absolute', left: '0', right: '0', zIndex: '-1', height: '655px', backgroundColor: 'rgba(255,255,255,0)'}}>
    // </div>
    <div className="section-wrapper top-section-wrapper header-section">
        <img className="front-page-img" src={FrontPageLogo} />
        <Jumbotron className="front-page-section">
          <h4>I help people become strong so they<br/>can move pain-free and enjoy a life they love.</h4>
        </Jumbotron>
      </div>
  )
}

export default Header;