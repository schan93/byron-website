import React from 'react';
import Section from './components/Section';
import TextSection from './TextSection';
import SectionImg from './components/SectionImg';
import CircularImageSection from './components/CircularImageSection';
import { Container, Row, Col, Button } from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import ByronImg from '../assets/images/byron.jpg';
import ByronHighSchool from '../assets/images/byron-highschool.jpg';
import ByronCertification from '../assets/images/byron-mat-certificate.jpg';
import ByronLearning from '../assets/images/byron-learning-mat.jpg';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <SectionWrapper>
      <Row>
        <Col md="6" lg="6" xl="6" sm="12">
          <img style={{ maxHeight: '100%', maxWidth: '100%', objectFit: "cover"}} src={ByronImg} />
        </Col>
        <Col md="6" lg="6" xl="6" sm="12">
          <h3>My name is Byron Ng</h3>
          <p className="lead">I'm a physical trainer and therapist dedicated to helping people with chronic bodily pain. Over the years I've grown to learn many different techniques and will work hard to help you get back on the path to living a pain-free life.</p>
        </Col>
      </Row>
    </SectionWrapper>
    <SectionWrapper>
      <Row>
        <Col md="6" lg="6" xl="6" sm="12">
          <h3>My Journey</h3>
            <p className="lead">My journey to becoming a physical training started a long time ago when I was in high school. Back then, basketball was my life.
          I was set to be a key player my senior year, but then I was hit by unexplainable and excruciating low back and knee pain. I went from the quickest to slowest player on the court, the most confident to the most broken.
            </p>
            <p className="lead"> I went to many doctors, chiropractors, and physical therapists, they all gave me different a diagnosis and different solutions. Nothing helped. I was forced to live with it and it became a part of my identity. </p>
        </Col>
        <Col md="6" lg="6" xl="6" sm="12">
          <img style={{ maxHeight: '100%', maxWidth: '100%',  objectFit: "cover"}} src={ByronHighSchool} />
        </Col>
      </Row>
    </SectionWrapper>
    <SectionWrapper>
      <Row>
        <Col md="6" lg="6" xl="6" sm="12">
          <img style={{ maxHeight: '100%', maxWidth: '100%',  objectFit: "cover"}} src={ByronLearning} />
        </Col>
        <Col md="6" lg="6" xl="6" sm="12">
          <h3>This was just the beginning...</h3>
            <p className="lead">As a result, I devoted my time, effort, and energy into seeing if I could solve these problem for myself.</p>
            <p className="lead">I began studying hard in school and started to learn all about the human body</p>
        </Col>
        {/* The more I learned, the more I realized that I could use these techniques and skills to not just help myself, but also help others who were in the same shoes. */}
      </Row>
    </SectionWrapper>
    <SectionWrapper>
      <Row>
        <Col md="6" lg="6" xl="6" sm="12">
          <h3>I continued to learn and grow...</h3>
            <p className="lead">After my education, I knew that I had to do much more to grow my skills and deal with real-life problems people were having.</p>
            <p className="lead">As a result, I challenged myself to take numerous amounts of certifications so I could broaden my skillset.</p>
        </Col>
        <Col md="6" lg="6" xl="6" sm="12">
          <div className="embed-responsive embed-responsive-1by1">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/lcE1VimrZJQ" allowFullScreen></iframe>         
          </div>
        </Col>
        {/* The more I learned, the more I realized that I could use these techniques and skills to not just help myself, but also help others who were in the same shoes. */}
      </Row>
    </SectionWrapper>
    <SectionWrapper>
      <Row>
        <Col md="6" lg="6" xl="6" sm="12">
          <img style={{ maxHeight: '100%', maxWidth: '100%',  objectFit: "cover"}} src={ByronCertification} />
        </Col>
        <Col md="6" lg="6" xl="6" sm="12">
          <h3>Eventually...</h3>
          <p className="lead">After three certifications, four years of training, many hours of practice, and one fixed-up Byron, I can finally say I am confident I can help others with the knowledge I've gained.</p>
          <p className="lead">If you want more information, just click below and I'd love to see if we solve your problems once and for all!</p>
          <p className="lead">
            <Button size="lg" color="danger">
              <Link style={{textDecoration: "none", color: "white"}} to="/contact">Get in touch!</Link>
            </Button>
          </p>
        </Col>
      </Row>
    </SectionWrapper>
  </div>
)

export default About;

/*
        <h4>Qualifications</h4>
        <ul>
          <li>Cellular Release Therapy® (CRT)</li>
          <li>Proprioceptive Deep Tendon Reflex® (P-DTR) </li>
          <li>Muscle Activation Techniques® (MAT) Certified Specialist</li>
          <li>Dynamic Neuromuscular Assessment® (DNA)</li>
          <li>NSCA Certified Personal Trainer</li>
          <li>B.S Kinesiology – SJSU</li>
        </ul>
*/
    /* <Section 
      left={
      <CircularImageSection
        src={'https://picsum.photos/200/300'}
      />}
      right={    
        <TextSection
          title="Hi, I'm Byron!"
          details="I specialize in helping people with chronic bodily pain so that they can get back to having a life they love."
        />
      }
    />
    <Section 
      left={
      <SectionImg
        src={'https://picsum.photos/200/300'}
      />}
      right={    
        <TextSection
          title="Hi, I'm Byron!"
          details="I specialize in helping people with chronic bodily pain so that they can get back to having a life they love."
        />
      }
    />
    <Section 
      left={
      <SectionImg
        src={'https://picsum.photos/200/300'}
      />}
      right={    
        <TextSection
          title="Hi, I'm Byron!"
          details="I specialize in helping people with chronic bodily pain so that they can get back to having a life they love."
        />
      }
    /> */