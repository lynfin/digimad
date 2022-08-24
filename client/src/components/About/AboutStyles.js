import styled from 'styled-components';

export const AboutSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const AboutDiv = styled.div`
  top: 0;
  position: absolute;
  z-index: -1;
  background: ${({ background }) =>
    background
      ? background
      : `{linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))}`};
  background-image: ${({ img }) => (img ? `url(${img})` : '')};
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  background-position: center;
  opacity: 0.4;
`;

export const AboutQuestion = styled.p`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-style: italic;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  letter-spacing: 2px;
  margin-left: 20%;
  margin-right: 20%;
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
`;

export const AboutAnswer = styled.p`
  margin-top: 10px;
  margin-bottom: 50px;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  letter-spacing: 2px;
  margin-left: 20%;
  margin-right: 20%;
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
`;

export const AboutText = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  margin: ${({ margin }) => (margin ? margin : '')};
  font-weight: 400;
  line-height: 24px;
  text-align: start;
  letter-spacing: 2px;
  color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;
