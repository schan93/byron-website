import React from 'react';
import {
  Row, Col
} from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { FaSearch, FaLink, FaHandshake, FaRunning } from 'react-icons/fa'


const Offer = () => (
  <SectionWrapper>
    <h1 className="display-4">How can I help you?</h1>
    <p className="lead">Here are just a few of the services that can be of use.</p>
    <Row>
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
    </Row>
  </SectionWrapper>
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
);

export default Offer;