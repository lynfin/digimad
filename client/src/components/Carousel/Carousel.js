import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Row, Heading, Section } from '../../globalStyles';
import { ButtonContainer, ReviewSlider } from './CarouselStyles';
import CarouselCard from '../CarouselCard/CarouselCard';

function Carousel({
  data,
  title,
  cardStyle,
  onDestinationSelected,
  favorites,
  onFavoriteSelected,
  user,
}) {
  const [sliderRef, setSliderRef] = useState(null);

  // Creating this responsiveSliderSetting for slidesToShow resolves the problem
  // of duplicate cards being created when less than three cards are placed
  // on the carousel.
  const responsiveSliderSettings = {
    arrows: false,
    slidesToShow: data && data.length < 3 ? data.length : 3,
    focusOnselect: false,
    accessability: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: data && data.length < 2 ? data.length : 2,
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
  return (
    <Section margin='auto' maxWidth='1280px' padding='50px 70px' inverse>
      <Row justify='space-between' margin='1rem' wrap='wrap'>
        <Heading width='auto' inverse>
          {title}
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...responsiveSliderSettings} ref={setSliderRef}>
        {data.map((el, index) => (
          <CarouselCard
            key={el.id}
            el={el}
            index={index}
            cardStyle={cardStyle}
            onDestinationSelected={onDestinationSelected}
            isFavorite={favorites.includes(el.id)}
            onFavoriteSelected={onFavoriteSelected}
            user={user}
          />
        ))}
      </ReviewSlider>
    </Section>
  );
}

// const sliderSettings = {
//   arrows: false,
//   slidesToShow: 3,
//   focusOnselect: false,
//   accessability: false,
//   responsive: [
//     {
//       breakpoint: 1280,
//       settings: {
//         slidesToShow: 2,
//       },
//     },

//     {
//       breakpoint: 900,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// };

export default Carousel;
