import React from 'react';

import { Container, MainHeading } from '../../globalStyles';
import { HeroDiv, HeroSection, HeroText } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroDiv />
      <Container>
        <MainHeading>DigiMads</MainHeading>
        <HeroText>Where digital nomads find their home</HeroText>
      </Container>
    </HeroSection>
  );
};

export default Hero;
