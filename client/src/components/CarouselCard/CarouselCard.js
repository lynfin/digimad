import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import { TextWrapper, TextContainer, Row, Column } from '../../globalStyles';
import {
  CardWrapper,
  CarouselImage,
  CardButton,
  ButtonWrapper,
  FavoriteButton,
  SummaryValue,
  SummaryUnits,
  ButtonContainer,
  ButtonLink,
} from './CarouselCardStyles';

function CarouselCard({
  el,
  index,
  cardStyle,

  onDestinationSelected,

  isFavorite,
  onFavoriteSelected,
  user,
}) {
  function handleClick() {
    onDestinationSelected(el.id);
  }
  function handleFavorite() {
    isFavorite = !isFavorite;

    if (isFavorite) {
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
  //summary1 += cardStyle.summary1Units ? ' ' + cardStyle.summary1Units : '';

  let summary2 = formatValue(el[cardStyle.summary2], cardStyle.summary2Type);
  //summary2 += cardStyle.summary2Units ? ' ' + cardStyle.summary2Units : '';

  return (
    <CardWrapper key={index}>
      <Row height='25px' width='100%' justify='right' gap='20px' row-gap='20px'>
        {user ? (
          <FavoriteButton onClick={handleFavorite}>
            {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
          </FavoriteButton>
        ) : null}
      </Row>
      <Row justify='space-around'>
        <CarouselImage src={el.image} />
        <Column justify='flex-start' align='center'>
          <SummaryValue>{summary1}</SummaryValue>
          <SummaryUnits>{cardStyle.summary1Units}</SummaryUnits>
          <SummaryValue>{summary2}</SummaryValue>
          <SummaryUnits>{cardStyle.summary2Units}</SummaryUnits>
        </Column>
      </Row>
      <Row justify='start' align='start' background='' width='100%'>
        <Column justify='start' align='start' background=''>
          <TextContainer justify='start' align='start' background=''>
            <TextWrapper
              size='1.1rem'
              margin='0.4rem 0 0'
              weight='bold'
              padding='0.1rem'
            >
              {el.name.trim()}
            </TextWrapper>
          </TextContainer>
          <TextContainer justify='start' align='start'>
            <TextWrapper
              size='1.0rem'
              margin='0.4rem'
              padding='0.1rem'
              color='#4f4f4f'
            >
              {`${el.address.city.trim()}, ${el.address.country.trim()}`}
            </TextWrapper>
          </TextContainer>
        </Column>
      </Row>

      <CardButton onClick={handleClick}>
        <ButtonLink to={{ pathname: 'destination', state: { el } }}>
          Details
        </ButtonLink>
      </CardButton>

      {/* <ButtonWrapper>
        <Link to={{ pathname: 'destination', state: { el } }}>
          <CardButton onClick={handleClick} background='orange'>
            Details
          </CardButton>
        </Link>
        {user ? (
          <Link to={{ pathname: 'speedtest', state: { el } }}>
            <CardButton onClick={handleClick}>Record Test</CardButton>
          </Link>
        ) : null}
      </ButtonWrapper> */}
    </CardWrapper>
  );
}

export default CarouselCard;
