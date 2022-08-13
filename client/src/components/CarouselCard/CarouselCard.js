import React from 'react';
import { TextWrapper } from '../../globalStyles';
import { ImageWrapper, CarouselImage, CardButton } from './CarouselCardStyles';

function CarouselCard({ el, index }) {
  console.log(el);
  return (
    <ImageWrapper key={index}>
      <CarouselImage src={el.image} />
      <TextWrapper size='1.1rem' margin='0.4rem 0 0' weight='bold'>
        {el.name}
      </TextWrapper>
      <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
        {el.category}
      </TextWrapper>
      <CardButton>Details</CardButton>
    </ImageWrapper>
  );
}

export default CarouselCard;
