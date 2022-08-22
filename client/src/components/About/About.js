import React from 'react';

import { Column, MainHeading, SubHeading } from '../../globalStyles';
import {
  AboutDiv,
  AboutSection,
  AboutText,
  AboutQuestion,
  AboutAnswer,
} from './AboutStyles';

const About = () => {
  return (
    <AboutSection>
      <AboutDiv background='lightgray' />

      <Column>
        <MainHeading inverse>DigiMads</MainHeading>
        <SubHeading inverse align='start' margin='20px'>
          Origin
        </SubHeading>
        <AboutText align='start' inverse margin='20px'>
          The site name 'DigiMads' is a reference to Digital Nomads. This site
          was inspired by conversations such as the following posted on Digital
          Nomad forums
        </AboutText>

        <AboutQuestion inverse margin='20px'>
          Q: I'm considering Peru as next destination and I'm trying to
          understand the internet speed situation outside of Lima. I will also
          be visiting Cusco, Ica, Iquitos and maybe some others. Does anyone
          here know if any of these places should be avoided considering I also
          need to be able to work (zoom/skype calls)? Any advice much
          appreciated!
        </AboutQuestion>
        <AboutAnswer inverse margin='20px'>
          A: Generally wifi is pretty bad, but might be ok in Cusco as it's very
          touristy. However mobile data is very cheap and you'll get 4G in most
          places.
        </AboutAnswer>
        <AboutQuestion inverse margin='20px'>
          Q: I am renting an Airbnb outside of Barcelona and the site lists
          'Wifi available'. How can I be sure it will support my needs to upload
          large presentations to my home office?
        </AboutQuestion>
        <AboutAnswer inverse margin='20px'>
          A: Ask the owner to run a speed test and send you a screenshot of the
          results
        </AboutAnswer>
        <AboutText align='start' inverse margin='20px'>
          It is obvious that this community, very dependent on reliable internet
          access, will benefit from the ability to store and look up internet
          performance metrics at locations worldwide, whether it be a hotel,
          Airbnb, public lounge, or a shared workspace.
        </AboutText>
        <AboutText align='start' inverse margin='20px'>
          DigiMads provides members the ability to store results of a speed
          test, and to search for results logged by other users at locations
          worldwide.
        </AboutText>
        <AboutText align='start' inverse margin='20px'>
          In addition, users can rate and comment on the destination, providing
          guidance to future visitors on whether or not to depend on this
          location to meet their tech needs.
        </AboutText>
      </Column>
    </AboutSection>
  );
};

export default About;
