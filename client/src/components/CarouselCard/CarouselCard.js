import React from 'react';
import { MdSpeed, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import {
  TextWrapper,
  TextContainer,
  Row,
  Column,
  ButtonLink,
} from '../../globalStyles';
import {
  CardWrapper,
  CarouselImage,
  CardButton,
  ButtonWrapper,
  FavoriteButton,
  IconButton,
  SummaryValue,
  SummaryUnits,
  ButtonContainer,
} from './CarouselCardStyles';
import StarRating from '../StarRating/StarRating';
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

  const cardColor = (category) => {
    switch (category) {
      case 'lodging':
        return '#1D219C';
      case 'coworking':
        return '#1d609c';
      case 'dining':
        return '#1D9C99';
      case 'public':
        return '#581D9C';
      default:
        return '#000';
    }
  };

  return (
    <CardWrapper key={index}>
      <Row height='25px' width='100%' justify='right' gap='20px' row-gap='20px'>
        {user ? (
          <FavoriteButton onClick={handleFavorite}>
            {isFavorite ? (
              <MdCheckBox size='1.2em' fill='green' />
            ) : (
              <MdCheckBoxOutlineBlank size='1.2em' />
            )}
          </FavoriteButton>
        ) : null}
      </Row>
      <Row justify='space-around'>
        <CarouselImage src={el.image} />
        <Column justify='flex-start' align='center'>
          {cardStyle.summary1Units === 'Average Rating' ? (
            <StarRating
              value={+summary1}
              size='18px'
              spacing='1px'
              color='orange'
            />
          ) : (
            <SummaryValue>{summary1}</SummaryValue>
          )}
          <SummaryUnits>{cardStyle.summary1Units}</SummaryUnits>
          <SummaryValue>{summary2}</SummaryValue>
          <SummaryUnits>{cardStyle.summary2Units}</SummaryUnits>
          {user ? (
            <IconButton onClick={handleClick}>
              <ButtonLink to={{ pathname: 'speedtest', state: { el } }}>
                <MdSpeed size='2em' color='#1d609c' />
              </ButtonLink>
            </IconButton>
          ) : null}
        </Column>
      </Row>
      <Row justify='start' align='start' background='' width='100%'>
        <Column justify='start' align='start' background=''>
          <TextContainer
            justify='start'
            align='start'
            background=''
            padding='0.4rem 0.0rem 0.00rem 0.0rem'
          >
            <TextWrapper
              size='1.1rem'
              margin='0.8rem 0.2rem 0.0rem 0.4rem'
              weight='bold'
              padding='0.1rem'
            >
              {el.name.trim()}
            </TextWrapper>
          </TextContainer>
          <TextContainer
            justify='start'
            align='start'
            padding='0.0rem 0.0rem 0.00rem 0.0rem'
          >
            <TextWrapper
              size='1.1rem'
              margin='0.0rem 0.2rem 0.2rem 0.4rem'
              padding='0.1rem'
              color='#4f4f4f'
            >
              {`${el.address.city.trim()}, ${el.address.country.trim()}`}
            </TextWrapper>
          </TextContainer>
        </Column>
      </Row>

      <CardButton onClick={handleClick} background={cardColor(el.category)}>
        <ButtonLink to={{ pathname: 'destination', state: { el } }}>
          Details
        </ButtonLink>
      </CardButton>
    </CardWrapper>
  );
}

export default CarouselCard;
