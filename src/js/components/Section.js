import React from 'react';
import styled from 'styled-components';

const SectionRow = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const LeftColumn = styled.div`
  padding-right: 40px;
  width: ${props => props.leftWidth || "50"}%;
`;

const RightColumn = styled.div`
  padding-left: 40px;
  width: ${props => props.rightWidth || "50"}%;
`;

const Section = (props) => (
  <SectionRow>
    <LeftColumn
      width={props.leftWidth}
    >
      {props.left}
    </LeftColumn>
    <RightColumn
      rightWidth={props.rightWidth}
    >
      {props.right}
    </RightColumn>
  </SectionRow>
);

export default Section;