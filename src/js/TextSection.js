import React from 'react';
import SectionTextContainer from './components/SectionTextContainer';

const TextSection = (props) => (
  <SectionTextContainer>
    <h1>{props.title}</h1>
    <h3>{props.details}</h3>
  </SectionTextContainer>
)

export default TextSection;