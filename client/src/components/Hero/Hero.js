import React from 'react';

import {
  Container,
  ContainerBackground,
  MainHeading,
} from '../../globalStyles';
import { HeroDiv, HeroSection, HeroText } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroDiv img='./assets/ooklaMap.png' />

      <Container>
        <MainHeading inverse>DigiMads</MainHeading>
        <HeroText inverse>Where digital nomads find their home</HeroText>
      </Container>
    </HeroSection>
  );
};

export default Hero;
