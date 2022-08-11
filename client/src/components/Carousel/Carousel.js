import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
  ButtonContainer,
  ReviewSlider,
  ImageWrapper,
  CarouselImage,
  CardButton,
} from './CarouselStyles';

function Carousel({ data }) {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Section margin='auto' maxWidth='1280px' padding='50px 70px' inverse>
      <Row justify='space-between' margin='1rem' wrap='wrap'>
        <Heading width='auto' inverse>
          Destinations
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
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
        ))}
      </ReviewSlider>
    </Section>
  );
}

const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export default Carousel;
