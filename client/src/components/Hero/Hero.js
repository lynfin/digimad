import React from 'react';

import {
  Container,
  ContainerBackground,
  MainHeading,
  TextWrapper,
  Text,
} from '../../globalStyles';
import { HeroDiv, HeroSection, HeroText } from './HeroStyles';

const Hero = () => {
  return (
    <HeroSection>
      <HeroDiv img='./assets/ooklaMap.png' />

      <Container>
        <MainHeading inverse>DigiMads</MainHeading>
        <HeroText inverse>Where digital nomads find their home</HeroText>

        <HeroText inverse>
          Visit our [About] to learn more about the site origins or scroll down
          to explore the data
        </HeroText>
      </Container>
    </HeroSection>
  );
};

export default Hero;
