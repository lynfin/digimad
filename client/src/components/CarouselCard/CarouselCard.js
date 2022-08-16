import React from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { TextWrapper } from '../../globalStyles';
import {
  ImageWrapper,
  CarouselImage,
  CardButton,
  ButtonWrapper,
} from './CarouselCardStyles';

function CarouselCard({
  el,
  index,
  onDestinationSelected,
  cardStyle,
  isFavorite,
  onFavoriteSelected,
}) {
  function handleClick() {
    onDestinationSelected(el.id);
  }
  function handleFavorite() {
    isFavorite = !isFavorite;

    if (isFavorite) {
      console.log('Creating new favorite');
      fetch('/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination_id: el.id,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then(() => {
            onFavoriteSelected(el.id, isFavorite);
          });
        } else {
          r.json().then((err) => {
            console.log(err.errors);
          });
        }
      });
    } else {
      console.log('Deleting favorite');
      fetch(`/favorites/${el.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((r) => {
        if (r.ok) {
          onFavoriteSelected(el.id, isFavorite);
        } else {
          r.json().then((err) => {
            console.log(err.errors);
          });
        }
      });
    }
  }

  function formatValue(value, valueFormat) {
    switch (valueFormat) {
      case 'float':
        return parseFloat(value).toFixed(2);
      case 'date':
        return format(parseISO(value), 'MM/dd/yyyy');
      default:
        return value;
    }
  }
  let summary1 = formatValue(el[cardStyle.summary1], cardStyle.summary1Type);
  summary1 += cardStyle.summary1Units ? ' ' + cardStyle.summary1Units : '';

  let summary2 = formatValue(el[cardStyle.summary2], cardStyle.summary2Type);
  summary2 += cardStyle.summary2Units ? ' ' + cardStyle.summary2Units : '';

  // come back and interpret cardStyle with destination data for summary lines
  return (
    <ImageWrapper key={index}>
      <CardButton onClick={handleFavorite}>
        {isFavorite ? ' - ' : ' + '}
      </CardButton>
      <CarouselImage src={el.image} />
      <TextWrapper size='1.1rem' margin='0.4rem 0 0' weight='bold'>
        {el.name}
      </TextWrapper>
      <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
        {summary1}
      </TextWrapper>
      <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
        {summary2}
      </TextWrapper>
      <TextWrapper size='0.9rem' margin='0.7rem' color='#4f4f4f'>
        {`${el.address.city}, ${el.address.country}`}
      </TextWrapper>
      <ButtonWrapper>
        <Link to={{ pathname: 'destination', state: { el } }}>
          {/* <CardButton> */}
          {/* <CardButton onClick={onDestinationSelected(el.id)}> */}
          <CardButton onClick={handleClick}>Details</CardButton>
        </Link>

        <Link to={{ pathname: 'speedtest', state: { el } }}>
          {/* <CardButton> */}
          {/* <CardButton onClick={onDestinationSelected(el.id)}> */}
          <CardButton onClick={handleClick}>Record Test</CardButton>
        </Link>
      </ButtonWrapper>
    </ImageWrapper>
  );
}

export default CarouselCard;
