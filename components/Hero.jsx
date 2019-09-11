import styled from 'styled-components';

export default styled.div`
  /* height: 48rem; */
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
`;
