import styled from 'styled-components';
import { Row, TextWrapper } from '../../globalStyles';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export const CarouselImage = styled.img`
  width: 65%;
  height: 200px;
  border-radius: 10px 10px 10px 10px;
  object-fit: cover;
  vertical-align: middle;
`;

export const CardWrapper = styled.div`
  width: 90%;
  display: flex !important;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height: 330px;

  @media screen and (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ButtonContainer = styled(Row)`
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;
// export const FavoriteButton = styled.button`
//   background-color: #1d609c;
//   font-size: 1.3rem;
//   padding: 1px 15px;
//   color: #fff;
//   cursor: pointer;
//   font-weight: 600;
//   margin: auto 0 0 0;
//   border: none;
//   border-radius: 10px 10px 10px 10px;

//   &:hover {
//     background-color: #112f4a;
//     transition: background-color 0.2s ease-in;
//   }
// `;

export const FavoriteButton = styled.button`
  font-size: 1.3rem;
  padding: 2px 5px;
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  margin: auto 0 0 0;
  border: none;
`;
export const CardButton = styled.button`
  background-color: #1d609c;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: none;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
  background-color: ${({ background }) => (background ? background : '')};
`;

export const SummaryValue = styled(TextWrapper)`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0.4rem 0.1rem 0.1rem 0.1rem;
  color: '#4f4f4f';
`;

export const SummaryUnits = styled(TextWrapper)`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0.1rem 0.1rem 0.8rem 0.1rem;
  color: '#4f4f4f';
`;

// Styling <Link> elements: https://blog.logrocket.com/how-style-react-router-links-styled-components/
export const ButtonLink = styled(Link)`
  color: white;
  /* font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;*/
  text-decoration: none;
  margin: 10px;
  /*&:hover,
   &:focus {
    color: blue;
  } 
  &:active {
    color: red;
  }*/
`;
