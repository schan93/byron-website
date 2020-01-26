import styled from "styled-components";

export default styled.img.attrs(props => ({
  src: `${props.src}`
}))`
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
