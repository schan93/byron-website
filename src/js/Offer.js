import React from 'react';
import {
  Row, Col
} from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { FaSearch, FaLink, FaHandshake } from 'react-icons/fa'


const Offer = () => (
  <SectionWrapper>
    <h1 className="display-4">How it works</h1>
    <p className="lead">I am dedicated to helping you get back on track to living a pain free life.</p>
    <Row>
      <Col style={{marginTop: '20px'}}>
        <FaSearch size={100} />
        <h2 style={{marginTop: '30px'}}>Assess</h2>
        <p style={{textAlign: 'left', marginTop: '30px'}}>I'll investigate your joint range of motion from right to left. Next, I'll do specific muscle tests to find which muscles aren't responding well. Lastly, I'll check specific neurological pathways to find the root of your weaknesses.</p>
      </Col>
      <Col style={{marginTop: '20px'}}>
        <FaLink size={100} />
        <h2 style={{marginTop: '30px'}}>Treat</h2>
        <p style={{textAlign: 'left', marginTop: '30px'}}>With injuries and chronic pain, there can be a a variety of things causing you pain. But now, there'll be no more guessing. By using muscle testing, I can assess the integrity of over 400 muscles in your body, look past your compensations, and effectively map out patterns of weakness that may potentially be causing you pain/tightness. </p>
      </Col>
      <Col style={{marginTop: '20px'}}>
        <FaHandshake size={100} />
        <h2 style={{marginTop: '30px'}}>Follow-up</h2>
        <p style={{textAlign: 'left', marginTop: '30px'}}>Don't settle with living in pain. I will continually follow up with you to ensure you are on the right path to recovery. Know that your body is incredible at healing itself. Sometimes it just requires a nudge in the right direction.</p>
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