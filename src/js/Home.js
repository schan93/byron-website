import React from 'react';
import Header from './Header';
import Offer from './Offer';
import TestimonialGallery from './TestimonalGallery';
import ContactForm from './components/ContactForm';
import { Button, Row, Col } from'reactstrap';
import SectionWrapper from './components/SectionWrapper';
import { FaSearch, FaLink, FaHandshake } from 'react-icons/fa'

const Home = () => (
  <div style={{  textAlign: 'center', height: '100%' }}>
    <Header />
    <Offer />
    <TestimonialGallery />
    <ContactForm />
    {/* <Section 
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
        <TextSection
          title="Too many times..."
          details="People settle living with chronic nagging pain"
          // title="Too many times people settle for lives where the even the easiest task (like walking) is a problem"
          // details="Don't settle with living in pain. Know that your body is incredible at healing itself. Sometimes it just requires a nudge in the right direction."
        />}
      right={    
        <SectionImg
          src={'https://picsum.photos/200/300'}
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
          title="People don't realize..."
          details="That your body is incredible at healing itself. And sometimes your body just needs a nudge in the right direction."
          // title="As a personal trainer and a physical therapist, I'm dedicated to helping you eliminate the root cause of your pain."
          // details="I specialize in helping people with chronic bodily pain so that they can get back to having a life they love."
        />
      }
    />
    <Section 
      left={
        <TextSection
          title="In just 5 minutes..."
          details="We can diagnose what your problem is and get you back on the right path to living a pain free life."
        />}
      right={    
        <SectionImg
          src={'https://picsum.photos/200/300'}
         />
      }
    /> */
    /* <Section 
      sectionHeader="Too many times people settle for lives where the even the easiest task (like walking) is a problem" 
      sectionDetails="And more often than not, people feel helpless in trying to fix these lingering issues"
    >
    </Section>
    <Section 
      sectionHeader="As a personal trainer and a physical therapist, I'm dedicated to helping you eliminate the root cause of your pain." 
      sectionDetails="Don't settle with living in pain. Know that your body is incredible at healing itself. Sometimes it just requires a nudge in the right direction."
    >
    </Section>
    <Section 
      sectionHeader="In just 5 minutes" 
      sectionDetails="We can diagnose what your problem is and get you back on the right path to living a pain free life."
    >
    </Section>
    <Section 
      sectionHeader="Interested?" 
      sectionDetails="Send me a message for a free consultation!"
    /> */}
  </div>
)

export default Home;