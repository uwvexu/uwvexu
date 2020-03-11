import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { yellow, Columns, Color, responsiveSizes } from './Styles';
import ImageSection from './ImageSection';

const StyledColumns = styled(Columns)`
  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    display: none;
  }
`;

const CompName = styled.h2`
  color: ${yellow};
  margin-top: ${props => props.space ? '5rem' : 0};
`;

const ListParent = styled.div`
  text-align: center;
`;

const ListWrapper = styled.div`
  display: inline-block;
  text-align: left;
`;

const ImgWrapper = styled.div`
  filter: grayscale(100%);

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    margin-bottom: 3rem;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: ${responsiveSizes.smallScreen}px) {
    display: block;
  }
`;

const AwardsList = ({ awards }) => (
  <ListParent>
    <ListWrapper>
      {awards.map(({comp, award, year}, index) => (
        <div key={index}>
          <CompName space={index != 0}>{comp}</CompName>
          <Color color="white">
            <h4>{award}</h4>
            <h4>{year}</h4>
          </Color>
        </div>
      ))}
    </ListWrapper>
  </ListParent>
);

const Images = () => (
  <ImgWrapper>
    <ImageSection imageUrls={[['static/awards.png'], ['static/robot-side.jpg']]} />
    <ImageSection imageUrls={[['static/comp2.jpg', '70% 70%'], ['static/intake.jpg', 'top']]} />
    <ImageSection imageUrls={[['static/robot-angle.jpg', '10% 70%'], ['static/vexu-can.jpg', '90% 90%']]} />
  </ImgWrapper>
);

const MobileImg = () => <ImgWrapper><ImageSection imageUrls={[['static/awards.png', '60% 70%']]} /></ImgWrapper>

const Awards = ({ awards }) => (
  <Section id="awards" title="AWARDS" bg="black" imagesUnderTitle>
      {/* screen > 1024 */}
      <StyledColumns cols={2}>
        <Images />
        <AwardsList awards={awards} />
      </StyledColumns>

      {/* screen <= 1024 */}
      <MobileWrapper>
        <MobileImg />
        <AwardsList awards={awards} />
      </MobileWrapper>
  </Section>
);

export default Awards;
