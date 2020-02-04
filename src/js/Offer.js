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

  const [modal, setModal] = useState(false);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const toggle = (modalBody, modalTitle) => {
    setModal(!modal);
    setBody(modalBody);
    setTitle(modalTitle);
  }

  return (
    <SectionWrapper>
      <ModalOffer
        modal={modal}
        toggle={toggle}
        body={body}
        title={title}
      />
      <h2 style={{fontWeight: '400', padding: '0', margin: '0', letterSpacing: '1px'}}>What can i help you with?</h2>
      <p style={{padding: '20px', maxWidth: '700px', margin: '0 auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus, eros molestie lacinia dictum, erat velit ullamcorper quam, sed blandit erat nulla nec tortor. Suspendisse fermentum molestie blandit. Nunc eleifend, augue vel bibendum maximus, urna erat lacinia ex, ut scelerisque lorem orci vel justo. Aenean ultricies aliquet nulla, id consequat velit bibendum eu.</p>
      <Row>
        <Col lg="3" style={{marginTop: '20px'}}>
          <h4 style={{marginTop: '30px', fontWeight: '400', marginBottom: '20px', letterSpacing: '1px'}}>Isometric Strength Training</h4>
          <p>
            <button onClick={() => toggle("Isometric Strength Training", "IsoBody")} style={{border: '0', padding: '0', borderRadius: '50%'}}>
              <img src={Assessment} style={{border: '0', borderRadius: '50%', backgroundSize: '100%'}} />
            </button>
          </p>
          <p style={{textAlign: 'left', marginTop: '30px'}}>Is it possible to become strong without actually moving? Let me introduce you to strength training without the wear and tear.</p>
        </Col>
        <Col lg="3" style={{marginTop: '20px'}}>
          <h4 style={{marginTop: '30px', fontWeight: '400', marginBottom: '20px', letterSpacing: '1px'}}>Pain<br/>Management</h4>
          <p>
            <button onClick={() => toggle("Pain Management", "Pain Management Body")} style={{border: '0', padding: '0', borderRadius: '50%'}}>
              <img src={PersonalTraining} style={{border: '0', borderRadius: '50%', backgroundSize: '100%'}} />
            </button>
          </p>
          <p style={{textAlign: 'left', marginTop: '30px'}}>You are not broken and you can recover. Let me help you access your mind and body’s healing potential so that you may move pain free.</p>
        </Col>
        <Col lg="3" style={{marginTop: '20px'}}>
          <h4 style={{marginTop: '30px', fontWeight: '400', marginBottom: '20px', letterSpacing: '1px'}}>Mind Mapping Meditation</h4>
          <p>
            <button onClick={() => toggle("Mind Mapping Meditation", "Mind Mapping Meditation Body")} style={{border: '0', padding: '0', borderRadius: '50%'}}>
              <img src={Mobility} style={{border: '0', borderRadius: '50%', backgroundSize: '100%'}} />
            </button>
          </p>
          <p style={{textAlign: 'left', marginTop: '30px'}}>Relax after. Rejuvenate and experience mental clarity. Realign your unconscious mind to your conscious goals. </p>
        </Col>
        <Col lg="3" style={{marginTop: '20px'}}>
          <h4 style={{marginTop: '30px', fontWeight: '400', marginBottom: '20px', letterSpacing: '1px'}}>Online<br/>Training</h4>
          <p>
            <button onClick={() => toggle("Online Training", "Online Training Body")} style={{border: '0', padding: '0', borderRadius: '50%'}}>
              <img src={OnlineTraining} style={{border: '0', borderRadius: '50%', backgroundSize: '100%'}} />
            </button>
          </p>
          <p style={{textAlign: 'left', marginTop: '30px'}}>Mobility Training - 3-6 month program. Meditation - Via video call </p>
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
    </SectionWrapper>
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