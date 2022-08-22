import React from 'react';

import { Container, MainHeading, SubHeading } from '../../globalStyles';
import { AboutDiv, AboutSection, AboutText } from './AboutStyles';

const About = () => {
  return (
    <AboutSection>
      <AboutDiv />

      <Container>
        <MainHeading inverse>DigiMads</MainHeading>
        <SubHeading>Origin</SubHeading>
        <AboutText inverse>Where digital nomads find their home</AboutText>

        <AboutText inverse>
          Visit our [About] to learn more about the site origins or scroll down
          to explore the data
        </AboutText>
      </Container>
    </AboutSection>
  );
};

export default About;
