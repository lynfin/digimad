import React from 'react';
import { Link } from 'react-router-dom';
import { TextWrapper } from '../../globalStyles';
import {
  ImageWrapper,
  CarouselImage,
  CardButton,
  ButtonWrapper,
} from './CarouselCardStyles';

function CarouselCard({ el, index, onDestinationSelected }) {
  return (
    <ImageWrapper key={index}>
      <CarouselImage src={el.image} />
      <TextWrapper size='1.1rem' margin='0.4rem 0 0' weight='bold'>
        {el.header}
      </TextWrapper>
      <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
        {el.summary1}
      </TextWrapper>
      <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
        {el.summary2}
      </TextWrapper>
      <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
        {el.location}
      </TextWrapper>
      <ButtonWrapper>
        <Link to={{ pathname: 'destination', state: { el } }}>
          <CardButton>
            {/* <CardButton onClick={onDestinationSelected(el.id)}> */}
            Details
          </CardButton>
        </Link>
      </ButtonWrapper>
    </ImageWrapper>
  );
}

export default CarouselCard;
