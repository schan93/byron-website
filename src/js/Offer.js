import React, { useState } from 'react';
import {
  Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap';

import ModalOffer from './ModalOffer';

import Assessment from '../assets/images/assessment.jpg';
import PersonalTraining from '../assets/images/personal-training.jpg';
import Mobility from '../assets/images/mobility.jpg';
import OnlineTraining from '../assets/images/online-training.jpg';

import SectionWrapper from './components/SectionWrapper';


const Offer = () => {

  // const [modal, setModal] = useState(false);
  // const [body, setBody] = useState("");
  // const [title, setTitle] = useState("");

  // const toggle = (modalBody, modalTitle) => {
  //   setModal(!modal);
  //   setBody(modalBody);
  //   setTitle(modalTitle);
  // }

  return (
    <div className="section-wrapper">
      <h4>What can i help you with?</h4>
      <Row>
        <Col className="offer-card">
          <h4 className="offer-title" >Isometric Strength Training</h4>
          <p>
            <button onClick={() => toggle("Isometric Strength Training", "IsoBody")} className="offer-img-button">
              <img src={Assessment} className="offer-img" />
            </button>
          </p>
          <p className="offer-description">Try exerting max effort into an immovable object, you may be surprised by how strong, flexible, and pain free you become. Let me guide you through the nuances of isometrics so that you may get better results in a simple, safe, and sustainable way.</p>
        </Col>
        <Col className="offer-card">
          <h4 className="offer-title">Pain And Tightness</h4>
          <p>
            <button onClick={() => toggle("Pain Management", "Pain Management Body")} className="offer-img-button">
              <img src={PersonalTraining} className="offer-img" />
            </button>
          </p>
          <p className="offer-description">Whether you’re experiencing pain or tightness, I may well be able to help. I utilize a non-invasive method that leverages your own body‘s healing ability to help you move pain-free. For more information, check out testimonials from my awesome clients.</p>
        </Col>
        <Col className="offer-card">
          <h4 className="offer-title">Mind Mapping Meditation</h4>
          <p>
            <button onClick={() => toggle("Mind Mapping Meditation", "Mind Mapping Meditation Body")} className="offer-img-button">
              <img src={Mobility} className="offer-img" />
            </button>
          </p>
          <p className="offer-description">Realign your unconscious mind to your conscious goals.<br /> Release any unhelpful thoughts, patterns, or beliefs so that they no longer affect you in any way.</p>
        </Col>
        <Col className="offer-card">
          <h4 className="offer-title">Online Training</h4>
          <p>
            <button onClick={() => toggle("Online Training", "Online Training Body")} className="offer-img-button">
              <img src={OnlineTraining} className="offer-img" />
            </button>
          </p>
          <p className="offer-description">Mobility Training - 3-6 month program. Meditation - Via video call </p>
        </Col>
      </Row>
        {/* <div style={{width: '100px', marginTop: '-250px', marginRight:'-100px', padding: '60px', borderRadius: '3px', background: 'linear-gradient(60deg, #ffa726, #fb8c00)', boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)'}} /> */}
      {/* <Row style={{boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)', borderRadius: '6px', padding: '30px', backgroundColor: 'white'}}> */}
        {/* <div style={{padding: '100px', borderRadius: '3px', background: 'linear-gradient(60deg, #ffa726, #fb8c00)', boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)'}}></div> */}
        {/* <h1 className="lead">Assess</h1> */}
        {/* <Col md="6" lg="6" xl="6" sm="12">
          <img style={{ maxHeight: '100%', maxWidth: '100%',  objectFit: "cover"}} src={Assessment} />
        </Col>
        <Col md="6" lg="6" xl="6" sm="12" style={{textAlign: 'left'}}>
            <h3>This was just the beginning...</h3>
            <p>As a result, I devoted my time, effort, and energy into seeing if I could solve these problem for myself.</p>
            <p>I began studying hard in school and started to learn all about the human body</p>
        </Col> */}
      {/* </Row> */}
      {/* <CardGroup>
        <Card>
          <CardImg top width="100%" src={Assessment} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={PersonalTraining} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Mobility} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={OnlineTraining} alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          </CardBody>
        </Card>
      </CardGroup> */}
      {/* <Row>
        <Col style={{marginTop: '20px'}}>
          <FaSearch size={100} />
          <h2 style={{marginTop: '30px'}}>Treatment</h2>
          <p style={{textAlign: 'left', marginTop: '30px'}}>With injuries and chronic pain, there can be a a variety of things causing you pain. But now, there'll be no more guessing. By using muscle testing, I can assess the integrity of over 400 muscles in your body, look past your compensations, and effectively design treatments to rid you from yous pain/tightness.</p>
        </Col>
        <Col style={{marginTop: '20px'}}>
          <FaLink size={100} />
          <h2 style={{marginTop: '30px'}}>Personal Training</h2>
          <p style={{textAlign: 'left', marginTop: '30px'}}>Whether you're a beginner looking to learn how to lift, to a seasoned gym-goer who needs an extra push, I can work with you to help you look your best this year.</p>
        </Col>
        <Col style={{marginTop: '20px'}}>
          <FaRunning size={100} />
          <h2 style={{marginTop: '30px'}}>Mobility work</h2>
          <p style={{textAlign: 'left', marginTop: '30px'}}>Have trouble just touching your toes without bending your legs? In just three months, we can work together to help you become the most flexible version of yourself.</p>
        </Col>
        <Col style={{marginTop: '20px'}}>
          <FaHandshake size={100} />
          <h2 style={{marginTop: '30px'}}>Online Training</h2>
          <p style={{textAlign: 'left', marginTop: '30px'}}>If we can't meet up in person, I am more than happy to communicate with you online and do weekly check-ups to see how you're doing on your fitness journey.</p>
        </Col>
      </Row> */}
    </div>
  )

  // <SectionWrapper>
  //   <h2>What I offer:</h2>
  //   <CardDeck>
  //     <Card>
  //       <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
  //       <CardBody>
  //         <CardTitle>Full-body Assessment</CardTitle>
  //         <CardText>Thorough investigation of joint range of motion imbalances from right to left. Specific muscle tests to find which muscles are not able to respond efficiently. Check which specific neurological pathway is at the root of the tightness/weakness.</CardText>
  //       </CardBody>
  //     </Card>
  //     <Card>
  //       <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
  //       <CardBody>
  //         <CardTitle>Address weak links</CardTitle>
  //         <CardText>How many times have you been told that your glutes are weak? Or that your hip flexors are is tight and need to be stretched out? It may be so, but how do you know? No more guessing. We'll figure out and address what may be causing your tightness.</CardText>
  //       </CardBody>
  //     </Card>
  //     <Card>
  //       <CardImg top width="100%" src="https://picsum.photos/200" alt="Card image cap" />
  //       <CardBody>
  //         <CardTitle>Follow up</CardTitle>
  //         <CardText>I will consistently check up on you to ensure you're on your way to living a pain-free life.</CardText>
  //       </CardBody>
  //     </Card>
  //   </CardDeck>
  // </SectionWrapper>
  }

export default Offer;