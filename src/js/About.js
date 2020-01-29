import React from 'react';
import Section from './components/Section';
import TextSection from './TextSection';
import SectionImg from './components/SectionImg';
import CircularImageSection from './components/CircularImageSection';
import { Fade, Row, Col, Button } from 'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import ByronImg from '../assets/images/byron.jpg';
import ByronHighSchool from '../assets/images/byron-highschool.jpg';
import ByronCertification from '../assets/images/byron-mat-certificate.jpg';
import ByronLearning from '../assets/images/byron-learning-mat.jpg';
import ContactInfo from './components/ContactInfo';
import FadeRow from './components/FadeRow';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <SectionWrapper>
      <FadeRow>
        <Row style={{padding: '20px', borderRadius: '20px'}}>
          <Col md="6" lg="6" xl="6" sm="12">
            <img style={{ maxHeight: '100%', maxWidth: '100%', padding: '20px', objectFit: "cover", borderRadius: '20px'}} src={ByronImg} />
          </Col>
          <Col md="6" lg="6" xl="6" sm="12" style={{padding: '20px'}}>
            <h3>Hi, I'm Byron,</h3>
            <p>and I'm a physical trainer and therapist dedicated to helping people with chronic bodily pain. Over the years I've grown to learn many different techniques and will work hard to help you get back on the path to living a pain-free life.</p>
            <p>My journey to becoming a physical training started a long time ago when I was in high school. Back then, basketball was my life.
            I was set to be a key player my senior year, but then I was hit by unexplainable and excruciating low back and knee pain. I went from the quickest to slowest player on the court, the most confident to the most broken.</p>
            <p> I went to many doctors, chiropractors, and physical therapists, they all gave me different a diagnosis and different solutions. Nothing helped. I was forced to live with it and it became a part of my identity. </p>
          </Col>
        </Row>
      </FadeRow>
    </SectionWrapper>
    <SectionWrapper>
      <FadeRow>
        <Row style={{ padding: '20px', borderRadius: '20px'}}>
          <Col md="6" lg="6" xl="6" sm="12" style={{padding: '20px'}}>
              <h3>As time went on,</h3>
              <p>I devoted my time, effort, and energy into seeing if I could solve these problem for myself so I went to school to study physiology.</p>
              <p>Even after school, I knew this wasn't enough knowledge for me to solve real-life problems so I took it upon myself to take a certifications (MAT, P-DTR, CRT, DNA) to learn how to deal with the challenges of life</p>
              <p>Fast forward 4 specialty programs later and many, many hours of practice, I can finally say I am confident and happy to people with the knowledge I've gained.</p>
              <p>If you want more information, just click below and I'd love to see if we solve your problems once and for all.</p>
              <Link style={{textDecoration: "none", color: "white"}} to="/contact">
                <Button size="lg" style={{backgroundColor: "#4296cb", borderColor: "#4296cb"}}>Get in touch!</Button>
              </Link>

          </Col>
          <Col md="6" lg="6" xl="6" sm="12">
            <img style={{ maxHeight: '100%', maxWidth: '100%', padding: '20px', objectFit: "cover", borderRadius: '20px'}} src={ByronHighSchool} />
          </Col>
        </Row>
      </FadeRow>
    </SectionWrapper>
    <ContactInfo />
    {/* <SectionWrapper>
      <Fade>
        <Row style={{boxShadow: '0 0px 2px 0 rgba(0, 0, 0, .25)', padding: '30px'}}>
          <Col md="6" lg="6" xl="6" sm="12">
            <img style={{ maxHeight: '100%', maxWidth: '100%',  objectFit: "cover"}} src={ByronLearning} />
          </Col>
          <Col md="6" lg="6" xl="6" sm="12">
            <h3>This was just the beginning...</h3>
              <p className="lead">As a result, I devoted my time, effort, and energy into seeing if I could solve these problem for myself.</p>
              <p className="lead">I began studying hard in school and started to learn all about the human body</p>
          </Col>
        </Row>
      </Fade>
    </SectionWrapper>
    <SectionWrapper>
      <Fade>
        <Row style={{boxShadow: '0 0px 2px 0 rgba(0, 0, 0, .25)', padding: '30px'}}>
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
        </Row>
      </Fade>
    </SectionWrapper>
    <SectionWrapper>
      <Fade>
        <Row style={{boxShadow: '0 0px 2px 0 rgba(0, 0, 0, .25)', padding: '30px'}}>
          <Col md="6" lg="6" xl="6" sm="12">
            <img style={{ maxHeight: '100%', maxWidth: '100%',  objectFit: "cover"}} src={ByronCertification} />
          </Col>
          <Col md="6" lg="6" xl="6" sm="12">
            <h3>Eventually...</h3>
            <p className="lead">After three certifications, four years of training, many hours of practice, and one fixed-up Byron, I can finally say I am confident I can help others with the knowledge I've gained.</p>
            <p className="lead">If you want more information, just click below and I'd love to see if we solve your problems once and for all!</p>
            <p className="lead">
            </p>
          </Col>
        </Row>
      </Fade>
    </SectionWrapper> */}
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