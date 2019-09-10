import styled from 'styled-components';
import BodySection from './BodySection';

export default styled(BodySection)`
  padding: 5rem 32rem;
  text-align: center;
  color: white;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,.6);
  background-blend-mode: darken;
`;
