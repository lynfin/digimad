import React from 'react';

import { Container, MainHeading } from '../../globalStyles';
import {
  HeroDiv,
  HeroSection,
  HeroText,
  ImageWrapper,
  HeroImage,
} from './DestinationHeroStyles';

function DestinationHero({ destination_overview, destinationDetails }) {
  console.log(destinationDetails);
  return (
    <HeroSection>
      <HeroDiv />
      <ImageWrapper>
        <HeroImage src={destinationDetails.image} />
      </ImageWrapper>
      <Container>
        <MainHeading>{destinationDetails.name}</MainHeading>
        <HeroText>
          Visit their website <a href={destinationDetails.desc}>here</a>
        </HeroText>
        <HeroText>
          ...more details to be displayed - rating, address, phone, etc
        </HeroText>
      </Container>
    </HeroSection>
  );
}

export default DestinationHero;
