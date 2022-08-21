import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { MdSpeed, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import Ratings from 'react-ratings-declarative';
import StarRating from '../StarRating/StarRating';
import {
  Container,
  MainHeading,
  Text,
  Column,
  Row,
  SubHeading,
  ButtonLink,
  Button,
  Divider,
} from '../../globalStyles';
import {
  HeroDiv,
  HeroSection,
  HeroText,
  ImageWrapper,
  HeroImage,
  ButtonWrapper,
  AddressText,
} from './DestinationHeroStyles';

function DestinationHero({ destinationDetails }) {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };
  let history = useHistory();

  return (
    <HeroSection>
      <HeroDiv />
      <Column>
        {/* <Row background=''>
          <SubHeading align='start' padding='0rem 0.0rem 0.00rem 0.4rem'>
            {destinationDetails.category}:
          </SubHeading>
        </Row> */}
        <Row background='' justify='center'>
          <ImageWrapper background=''>
            <HeroImage src={destinationDetails.image} />
          </ImageWrapper>
        </Row>
        <Container>
          <MainHeading>{destinationDetails.name}</MainHeading>

          <Row background='' justify='space-between'>
            <Column>
              <StarRating
                value={+destinationDetails.average_visit_rating}
                size='40px'
                spacing='15px'
                color='yellow'
              />

              <HeroText>Average Visit Rating</HeroText>
            </Column>
            <Column>
              <StarRating
                value={+destinationDetails.average_tech_rating}
                size='40px'
                spacing='15px'
                color='yellow'
              />

              <HeroText>Average Tech Rating</HeroText>
            </Column>
          </Row>
          {/*           
          <Row>
            <Column>
              <MdCheckBox size='60px' fill='green' />
            </Column>
            <Column>
              <ButtonLink to={{ pathname: 'speedtest' }}>
                <MdSpeed size='60px' color='#1d609c' />
              </ButtonLink>
            </Column>
          </Row> */}
          <Divider />
          <AddressText>{destinationDetails.address.street1}</AddressText>
          <AddressText>{destinationDetails.address.street2}</AddressText>
          <AddressText>
            {destinationDetails.address.city},{' '}
            {destinationDetails.address.state}{' '}
            {destinationDetails.address.country}
          </AddressText>
          <AddressText>{destinationDetails.address.zipcode}</AddressText>
          <AddressText>
            Phone:{' '}
            {destinationDetails.phone
              ? destinationDetails.phone
              : 'unavailable'}
          </AddressText>
          <Row justify='center'>
            <Button onClick={() => openInNewTab(destinationDetails.website)}>
              <HeroText>Visit their website</HeroText>
            </Button>
          </Row>
          {/*           
          <ButtonWrapper onClick={() => history.push('/speedtest')}>
            <HeroText>Record your speedtest</HeroText>
          </ButtonWrapper> */}
        </Container>
      </Column>
    </HeroSection>
  );
}

export default DestinationHero;
