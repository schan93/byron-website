import styled, { keyframes } from 'styled-components';

const fadeInLeft = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`

export default styled.div`
  position: relative;
  transition: 1s ${fadeInLeft} ease-out;
`;

